import React from 'react';
import { Mail, Settings, Bell, HelpCircle } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <Mail className="me-2" />
          <span className="fw-bold">Organization Name</span>
        </a>
        
        <div className="d-flex">
          <button className="btn btn-link text-white me-3">
            <Bell size={20} />
          </button>
          <button className="btn btn-link text-white me-3">
            <Settings size={20} />
          </button>
          <button className="btn btn-link text-white">
            <HelpCircle size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}