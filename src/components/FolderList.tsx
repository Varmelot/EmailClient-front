import React from 'react';
import { observer } from 'mobx-react-lite';
import { emailStore } from '../stores/EmailStore';
import { Folder } from 'lucide-react';

export const FolderList: React.FC = observer(() => {
  const groupedFolders = emailStore.groupedFolders;

  return (
    <div className="h-100 bg-light border-end p-3">
      {Object.entries(groupedFolders).map(([group, folders]) => (
        <div key={group} className="mb-4">
          <h6 className="text-uppercase text-secondary mb-3">{group}</h6>
          {folders.map(folder => (
            <div
              key={folder.id}
              className={`d-flex align-items-center p-2 rounded ${
                emailStore.selectedFolderId === folder.id 
                  ? 'bg-primary text-white' 
                  : 'text-dark'
              }`}
              onClick={() => emailStore.selectFolder(folder.id)}
              role="button"
            >
              <Folder size={18} className="me-2" />
              <span>{folder.name}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
});