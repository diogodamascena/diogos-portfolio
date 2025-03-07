import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Diogo Damascena</h3>
            <p className="text-gray-400 text-sm">
              © 2024 Diogo Damascena. Todos os direitos reservados.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Email: contato@diogodamascena.com</li>
              <li>Tel: +55 (85) 99999-9999</li>
              <li>Fortaleza, CE - Brasil</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/diogodamascena" className="text-gray-400 hover:text-white">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/diogodamascena" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://www.behance.net/diogodamascena" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}