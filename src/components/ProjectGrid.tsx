import React from 'react';
import { Project } from '../types';

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={`${project.image}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
            <p className="text-gray-600">Descrição breve do projeto e suas principais características.</p>
          </div>
        </div>
      ))}
    </div>
  );
}