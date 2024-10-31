import React from 'react';
import { observer } from 'mobx-react-lite';
import { emailStore } from '../stores/EmailStore';
import { Reply, Forward, Trash, Archive, Star } from 'lucide-react';

export const DocumentView: React.FC = observer(() => {
  const document = emailStore.selectedDocument;

  if (!document) {
    return (
      <div className="h-100 d-flex align-items-center justify-content-center text-secondary">
        Select a document to view its contents
      </div>
    );
  }

  return (
    <div className="h-100 d-flex flex-column">
      <div className="bg-light border-bottom p-2">
        <div className="btn-group">
          <button className="btn btn-outline-secondary d-flex align-items-center">
            <Reply size={18} className="me-1" /> Reply
          </button>
          <button className="btn btn-outline-secondary d-flex align-items-center">
            <Forward size={18} className="me-1" /> Forward
          </button>
          <button className="btn btn-outline-secondary d-flex align-items-center">
            <Archive size={18} />
          </button>
          <button className="btn btn-outline-secondary d-flex align-items-center">
            <Trash size={18} />
          </button>
          <button className="btn btn-outline-secondary d-flex align-items-center">
            <Star size={18} />
          </button>
        </div>
      </div>
      
      <div className="p-4 flex-grow-1 overflow-auto">
        <h4 className="mb-3">{document.subject}</h4>
        <div className="mb-3">
          <small className="text-secondary d-block">From: {document.from}</small>
          <small className="text-secondary d-block">Date: {document.date}</small>
        </div>
        <div className="mt-4">{document.content}</div>
      </div>
    </div>
  );
});