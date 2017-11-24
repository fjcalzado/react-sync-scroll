import * as React from "react";
import { ScrollContainer, ScrollPanel, dummyText } from "./components";

export const App: React.StatelessComponent<{}> = () => {
  return (
    <div className="appcontainer">
      <div className="toolcontainer">
        <h2>Synchronize Scroll in React Components</h2>
      </div>
      <ScrollContainer className="scrollcontainer" />
    </div>
  );
};
