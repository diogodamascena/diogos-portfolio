import React from 'react';
import { Filter } from '../types';

interface ProjectFiltersProps {
  filters: Filter[];
  currentFilter: string;
  setCurrentFilter: (filter: string) => void;
  variant?: 'light' | 'dark';
}

export function ProjectFilters({ filters, currentFilter, setCurrentFilter, variant = 'light' }: ProjectFiltersProps) {
  return (
    <div className={`flex flex-wrap gap-2 mb-6 ${variant === 'dark' ? 'space-x-2' : 'space-x-4'}`}>
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => setCurrentFilter(filter.id)}
          className={`${
            variant === 'dark'
              ? currentFilter === filter.id
                ? 'bg-white text-gray-800'
                : 'bg-gray-700 text-white hover:bg-gray-600'
              : currentFilter === filter.id
              ? 'bg-gray-800 text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          } px-3 py-1 rounded-full text-sm font-medium transition-colors`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}