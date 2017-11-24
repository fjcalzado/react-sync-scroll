import * as React from 'react';
import { ScrollPanel } from "./scrollPanel";
import { dummyText } from "./content";
import debounce from 'lodash.debounce';

interface Props {
  className?: string;
}

interface ChildElement {
  ref: HTMLElement;
  pauseScrollFunction: () => void;
}

export class ScrollContainer extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }

  private childs: ChildElement[] = [];

  private setChild = (ref) => {
    this.childs.push({
      ref,
      pauseScrollFunction: this.debouncedPauseScrollEvent(ref),
    });
  }

  private handleChildScroll = (callerRef: HTMLElement) => () => {
    this.childs.filter(child => child.ref != callerRef).forEach(child => {
      child.pauseScrollFunction();
      this.doScrollOnChild(child.ref, callerRef.scrollTop)
    });
  }

  private doScrollOnChild = (ref: HTMLElement, value: number) => {
    ref.scrollTop = value;
  }

  private debouncedPauseScrollEvent = (ref) => {
    return debounce(() => {
      ref.onscroll = ref.onscroll ? null : this.handleChildScroll(ref);
    }, 250, {'leading': true, 'trailing': true});
  }

  componentDidMount() {
    this.childs.forEach(child => child.ref.onscroll = this.handleChildScroll(child.ref));    
  }

  render() {
    const {className = ""} = this.props;
    return (
      <div className={className}>
        <ScrollPanel
          className="scrollpanel"
          name="LEFT"
          content={dummyText}
          registerRef={this.setChild}
        />
        <ScrollPanel 
          className="scrollpanel"
          name="RIGHT"
          content={dummyText}
          registerRef={this.setChild}
        />
      </div>
    );
  } 
}
