// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  iconClass: string;
  color: string;
}

interface Project {
  title: string;
  year: string;
  description: string;
  technologies: string[];
  github: string | null;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  backendSkills: Skill[] = [
    { name: 'Java', iconClass: 'devicon-java-plain colored', color: '' },
    { name: 'Spring Boot', iconClass: 'devicon-spring-plain colored', color: '' },
    { name: 'C#', iconClass: 'devicon-csharp-plain colored', color: '' },
    { name: '.NET', iconClass: 'devicon-dot-net-plain colored', color: '' },
    { name: 'REST APIs', iconClass: 'devicon-fastapi-plain colored', color: '' },
    { name: 'Microservicios', iconClass: 'devicon-kubernetes-plain colored', color: '' }
  ];

  databaseSkills: Skill[] = [
    { name: 'SQL Server', iconClass: 'devicon-microsoftsqlserver-plain colored', color: '' },
    { name: 'MySQL', iconClass: 'devicon-mysql-plain colored', color: '' },
    { name: 'MongoDB', iconClass: 'devicon-mongodb-plain colored', color: '' }
  ];

  frontendSkills: Skill[] = [
    { name: 'Angular', iconClass: 'devicon-angular-plain colored', color: '' },
    { name: 'JavaScript', iconClass: 'devicon-javascript-plain colored', color: '' },
    { name: 'PrimeNG', iconClass: 'devicon-angular-plain colored', color: '' },
    { name: 'Angular Material', iconClass: 'devicon-materialui-plain colored', color: '' },
    { name: 'Git/GitHub', iconClass: 'devicon-github-original', color: '' }
  ];

  projects: Project[] = [
    {
      title: 'TiendaPC',
      year: '2024',
      description: 'Sistema completo de gestión de ventas de componentes de PC. Backend desarrollado en C# .NET con arquitectura en capas, base de datos en SQL Server y frontend con JavaScript vanilla.',
      technologies: ['C#', '.NET', 'SQL Server', 'JavaScript'],
      github: '#'
    },
    {
      title: 'Sistema de Gestión Inmobiliaria',
      year: '2024',
      description: 'Aplicación de escritorio para gestión inmobiliaria desarrollada con C# .NET y WinForms. Manejo completo de propiedades, clientes y transacciones con SQL Server.',
      technologies: ['C#', '.NET', 'WinForms', 'SQL Server'],
      github: '#'
    },
    {
      title: 'TEG - Juego de Estrategia',
      year: '2025',
      description: 'Desarrollo de juego de estrategia de tablero implementando lógica compleja de negocio en Java con Spring Boot, persistencia en MySQL y frontend en Angular.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'Angular'],
      github: 'https://github.com/valentinopretto/TEG---Estrategia-de-Guerra'
    },
    {
      title: 'Sistema Laboratorio Castillo Chidiac',
      year: '2025',
      description: 'Sistema interno para laboratorio en Córdoba. Arquitectura de microservicios con Spring Boot, base de datos MySQL y frontend en Angular con PrimeNG.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'Angular', 'PrimeNG', 'Microservicios'],
      github: null
    }
  ];

  // Método para obtener el icono y color de una tecnología
  getTechIcon(tech: string): { iconClass: string, color: string } {
    const iconMap: { [key: string]: { iconClass: string, color: string } } = {
      'Java': { iconClass: 'si si-oracle', color: '#F80000' },
      'Spring Boot': { iconClass: 'si si-spring', color: '#6DB33F' },
      'C#': { iconClass: 'si si-csharp', color: '#239120' },
      '.NET': { iconClass: 'si si-dotnet', color: '#512BD4' },
      'SQL Server': { iconClass: 'si si-microsoftsqlserver', color: '#CC2927' },
      'MySQL': { iconClass: 'si si-mysql', color: '#4479A1' },
      'MongoDB': { iconClass: 'si si-mongodb', color: '#47A248' },
      'Angular': { iconClass: 'si si-angular', color: '#DD0031' },
      'JavaScript': { iconClass: 'si si-javascript', color: '#F7DF1E' },
      'PrimeNG': { iconClass: 'si si-primeng', color: '#DD0031' },
      'WinForms': { iconClass: 'si si-windows', color: '#0078D6' },
      'Microservicios': { iconClass: 'si si-kubernetes', color: '#326CE5' }
    };
    return iconMap[tech] || { iconClass: 'si si-code', color: '#666666' };
  }
}
