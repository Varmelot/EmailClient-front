import React from 'react';
import { Header } from './components/Header';
import { FolderList } from './components/FolderList';
import { DocumentList } from './components/DocumentList';
import { DocumentView } from './components/DocumentView';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <Header />
      <div className="flex-grow-1 d-flex">
        <div className="email-sidebar">
          <FolderList />
        </div>
        <div className="email-list">
          <DocumentList />
        </div>
        <div className="flex-grow-1">
          <DocumentView />
        </div>
      </div>
    </div>
  );
}

export default App;