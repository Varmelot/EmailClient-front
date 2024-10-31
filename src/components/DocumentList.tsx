import React from 'react';
import { observer } from 'mobx-react-lite';
import { emailStore } from '../stores/EmailStore';

export const DocumentList: React.FC = observer(() => {
  const documents = emailStore.currentFolderDocuments;

  if (!emailStore.selectedFolderId) {
    return (
      <div className="p-4 text-center text-secondary">
        Select a folder to view documents
      </div>
    );
  }

  return (
    <div className="h-100 border-end overflow-auto">
      {documents.map(doc => (
        <div
          key={doc.id}
          className={`p-3 border-bottom email-item ${
            emailStore.selectedDocumentId === doc.id ? 'bg-light' : ''
          }`}
          onClick={() => emailStore.selectDocument(doc.id)}
          role="button"
        >
          <div className="d-flex justify-content-between mb-1">
            <span className="text-truncate fw-semibold">{doc.subject}</span>
            <small className="text-secondary ms-2">{doc.date}</small>
          </div>
          <div className="text-secondary small">{doc.from}</div>
        </div>
      ))}
    </div>
  );
});