import React from 'react';
import { Palette } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Palette className="h-8 w-8 text-gray-800" />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a
                href="#"
                onClick={() => setCurrentPage('inicial')}
                className={`${currentPage === 'inicial' ? 'border-b-2 border-gray-800 text-gray-900' : 'text-gray-500 hover:text-gray-900'} inline-flex items-center px-1 pt-1 text-sm font-medium`}
              >
                Inicial
              </a>
              <a
                href="#"
                onClick={() => setCurrentPage('trabalhos')}
                className={`${currentPage === 'trabalhos' ? 'border-b-2 border-gray-800 text-gray-900' : 'text-gray-500 hover:text-gray-900'} inline-flex items-center px-1 pt-1 text-sm font-medium`}
              >
                Trabalhos
              </a>
              <a
                href="#"
                onClick={() => setCurrentPage('contato')}
                className={`${currentPage === 'contato' ? 'border-b-2 border-gray-800 text-gray-900' : 'text-gray-500 hover:text-gray-900'} inline-flex items-center px-1 pt-1 text-sm font-medium`}
              >
                Contato
              </a>
              <a
                href="#"
                onClick={() => setCurrentPage('sobre')}
                className={`${currentPage === 'sobre' ? 'border-b-2 border-gray-800 text-gray-900' : 'text-gray-500 hover:text-gray-900'} inline-flex items-center px-1 pt-1 text-sm font-medium`}
              >
                Sobre mim
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Pesquisar"
                className="bg-gray-100 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}