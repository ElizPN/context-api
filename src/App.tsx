import React from 'react';
import './App.css';
import IssueProvider from './contexts/Issue';
import Issues from './Issues'

function App() {
  return (
    <IssueProvider url="https://api.github.com/repos/ContentPI/ContentPI/issues">
     <Issues />
    </IssueProvider>
  );
}

export default App;
