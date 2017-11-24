import * as React from "react";

interface Props {
  content: string;
  registerRef?: (ref) => void;
  className?: string;
}

export class ScrollPanel extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }

  public render() {
    const {className = ""} = this.props;
    return (
      <div className={className} ref={this.props.registerRef || (() => {}) }>
        {this.props.content}
      </div>
    );
  }
}
