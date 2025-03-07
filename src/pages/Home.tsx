import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectFilters } from '../components/ProjectFilters';
import { Filter } from '../types';

interface HomeProps {
  filters: Filter[];
  currentFilter: string;
  setCurrentFilter: (filter: string) => void;
}

export function Home({ filters, currentFilter, setCurrentFilter }: HomeProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-6xl font-bold text-gray-900 mb-4">DIOGO'S</h1>
          <p className="text-4xl font-light italic text-gray-700 mb-8">portfolio</p>
          <p className="text-gray-600 mb-8">
            Olá! Eu sou Diogo Damascena, estudante de Design Digital na Universidade Federal do Ceará. 
            Sou apaixonado pela área de Experiência do Usuário e Interação Humano-Computador.
          </p>
          <div className="flex items-center space-x-4">
            <img
              src="https://avatars.githubusercontent.com/u/139615857?v=4"
              alt="Profile"
              className="h-16 w-16 rounded-full border-2 border-gray-800"
            />
            <div>
              <h3 className="text-lg font-medium text-gray-900">Diogo Damascena</h3>
              <p className="text-gray-600">Designer Digital</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gray-800 rounded-lg p-8">
            <ProjectFilters
              filters={filters}
              currentFilter={currentFilter}
              setCurrentFilter={setCurrentFilter}
              variant="dark"
            />
            <img
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
              alt="Design Work"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button className="p-2 bg-white rounded-full shadow-lg">
                <ChevronLeft className="h-6 w-6 text-gray-800" />
              </button>
              <button className="p-2 bg-white rounded-full shadow-lg">
                <ChevronRight className="h-6 w-6 text-gray-800" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}