import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

export function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <img
            src="https://avatars.githubusercontent.com/u/139615857?v=4"
            alt="Diogo Damascena"
            className="w-48 h-48 rounded-lg object-cover"
          />
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre Mim</h2>
            <p className="text-gray-600 mb-6">
              Olá! Eu sou Diogo Damascena, estudante de Design Digital na Universidade Federal do Ceará. 
              Sou apaixonado pela área de Experiência do Usuário e Interação Humano-Computador.
            </p>
            <p className="text-gray-600 mb-6">
              O compromisso com a aprendizagem contínua é um valor fundamental para mim. 
              Estou sempre em busca de novas técnicas para garantir que meu trabalho esteja 
              atualizado e pronto para enfrentar os desafios, fazendo das limitações o aspecto 
              fundamental para se chegar a soluções em meu trabalho!
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/diogodamascena" className="text-gray-600 hover:text-gray-900">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/diogodamascena" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://www.behance.net/diogodamascena" className="text-gray-600 hover:text-gray-900">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-8">
              <a 
                href="/curriculo.pdf" 
                className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Currículo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}