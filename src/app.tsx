import * as React from 'react';
import { ScrollContainer, ScrollPanel, dummyText } from './components';

export const App: React.StatelessComponent<{}> = () => {
  return (
    <div className="appcontainer">
      <div className="toolcontainer">
        <h1>Sync Scroll</h1>
      </div>
      <ScrollContainer className="scrollcontainer" />      
    </div>    
  );
}
