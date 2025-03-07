import React, { useState } from 'react';
import { Navbar } from './components/Layout/Navbar';
import { Footer } from './components/Layout/Footer';
import { Home } from './pages/Home';
import { Works } from './pages/Works';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Filter, Project } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState('inicial');
  const [currentFilter, setCurrentFilter] = useState('todos');

  const filters: Filter[] = [
    { id: 'uxui', label: 'UX/UI Design' },
    { id: 'idvisual', label: 'ID Visual' },
    { id: 'ilustracao', label: 'Ilustração' },
    { id: 'tipografia', label: 'Tipografia' },
    { id: 'todos', label: 'Todos' },
  ];

  const projects: Project[] = [
    { id: 1, title: 'Projeto UX/UI', category: 'uxui', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5' },
    { id: 2, title: 'Identidade Visual', category: 'idvisual', image: 'https://images.unsplash.com/photo-1561070792-2526d30994b5' },
    { id: 3, title: 'Ilustração Personalizada', category: 'ilustracao', image: 'https://images.unsplash.com/photo-1561070793-2526d30994b5' },
    { id: 4, title: 'Design Tipográfico', category: 'tipografia', image: 'https://images.unsplash.com/photo-1561070794-2526d30994b5' },
    { id: 5, title: 'Design de App Mobile', category: 'uxui', image: 'https://images.unsplash.com/photo-1561070795-2526d30994b5' },
    { id: 6, title: 'Design de Logo', category: 'idvisual', image: 'https://images.unsplash.com/photo-1561070796-2526d30994b5' },
  ];

  const filteredProjects = currentFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === currentFilter);

  const renderContent = () => {
    switch(currentPage) {
      case 'trabalhos':
        return (
          <Works
            filters={filters}
            currentFilter={currentFilter}
            setCurrentFilter={setCurrentFilter}
            filteredProjects={filteredProjects}
          />
        );
      case 'contato':
        return <Contact />;
      case 'sobre':
        return <About />;
      default:
        return (
          <Home
            filters={filters}
            currentFilter={currentFilter}
            setCurrentFilter={setCurrentFilter}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderContent()}
      <Footer />
    </div>
  );
}

export default App;