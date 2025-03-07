import React from 'react';
import { ProjectFilters } from '../components/ProjectFilters';
import { ProjectGrid } from '../components/ProjectGrid';
import { Filter, Project } from '../types';

interface WorksProps {
  filters: Filter[];
  currentFilter: string;
  setCurrentFilter: (filter: string) => void;
  filteredProjects: Project[];
}

export function Works({ filters, currentFilter, setCurrentFilter, filteredProjects }: WorksProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-8">Meus Trabalhos</h2>
      <ProjectFilters
        filters={filters}
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
      />
      <ProjectGrid projects={filteredProjects} />
    </div>
  );
}