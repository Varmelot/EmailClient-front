import { makeAutoObservable } from 'mobx';

export interface Folder {
  id: string;
  name: string;
  group: string;
}

export interface Document {
  id: string;
  subject: string;
  from: string;
  date: string;
  content: string;
  folderId: string;
}

class EmailStore {
  folders: Folder[] = [
    { id: '1', name: 'Inbox', group: 'Main' },
    { id: '2', name: 'Sent', group: 'Main' },
    { id: '3', name: 'Drafts', group: 'Main' },
    { id: '4', name: 'Projects', group: 'Custom' },
    { id: '5', name: 'Important', group: 'Custom' },
  ];

  documents: Document[] = [
    {
      id: '1',
      subject: 'Project Update',
      from: 'john@example.com',
      date: '2024-03-15',
      content: 'Latest project updates and next steps...',
      folderId: '1',
    },
    {
      id: '2',
      subject: 'Meeting Notes',
      from: 'sarah@example.com',
      date: '2024-03-14',
      content: 'Notes from today\'s team meeting...',
      folderId: '1',
    },
  ];

  selectedFolderId: string | null = null;
  selectedDocumentId: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  selectFolder(folderId: string) {
    this.selectedFolderId = folderId;
    this.selectedDocumentId = null;
  }

  selectDocument(documentId: string) {
    this.selectedDocumentId = documentId;
  }

  get selectedFolder() {
    return this.folders.find(f => f.id === this.selectedFolderId);
  }

  get selectedDocument() {
    return this.documents.find(d => d.id === this.selectedDocumentId);
  }

  get currentFolderDocuments() {
    return this.documents.filter(d => d.folderId === this.selectedFolderId);
  }

  get groupedFolders() {
    return this.folders.reduce((groups, folder) => {
      const group = folder.group;
      if (!groups[group]) {
        groups[group] = [];
      }
      groups[group].push(folder);
      return groups;
    }, {} as Record<string, Folder[]>);
  }
}

export const emailStore = new EmailStore();