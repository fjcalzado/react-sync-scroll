import * as React from "react";
import { ScrollPanel } from "./scrollPanel";
import { dummyText } from "./content";
import debounce from "lodash.debounce";

interface Props {
  className?: string;
}

interface ChildElement {
  ref: HTMLElement;
  attachScrollFunction: () => void;
}

export class ScrollContainer extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }

  private childs: ChildElement[] = [];

  private setChild = (ref) => {
    this.childs.push({
      ref,
      attachScrollFunction: this.debouncedAttachScrollEvent(ref),
    });
  }

  private handleChildScroll = (callerRef: HTMLElement) => () => {
    window.requestAnimationFrame(() => {
      this.childs.filter(child => child.ref !== callerRef).forEach(child => {
        child.ref.onscroll = null;
        this.doScrollOnChild(child.ref, this.getRelativeScroll(callerRef));
        child.attachScrollFunction();
      });
    });
  }

  private doScrollOnChild = (ref: HTMLElement, value: number) => {
    ref.scrollTop = value * (ref.scrollHeight - ref.clientHeight);
  }

  private getRelativeScroll = (ref: HTMLElement) => {
    return ref.scrollTop / (ref.scrollHeight - ref.clientHeight);
  }

  private debouncedAttachScrollEvent = (ref) => {
    return debounce(() => {
      ref.onscroll = this.handleChildScroll(ref);
    }, 250, {leading: false, trailing: true});
  }

  public componentDidMount() {
    this.childs.forEach(child => child.ref.onscroll = this.handleChildScroll(child.ref));
  }

  public render() {
    const {className = ""} = this.props;
    return (
      <div className={className}>
        <ScrollPanel
          className="scrollpanel"
          content={dummyText + dummyText}
          registerRef={this.setChild}
        />
        <ScrollPanel
          className="scrollpanel"
          content={dummyText}
          registerRef={this.setChild}
        />
        <ScrollPanel
          className="scrollpanel"
          content={dummyText + dummyText + dummyText}
          registerRef={this.setChild}
        />
      </div>
    );
  }
}
