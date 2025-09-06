import { Component, signal } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  unlockedSections = signal<{[key: string]: boolean}>({
    start: true,
    about: false,
    skills: false,
    experience: false,
    projects: false,
    gallery: false,
    education: false,
    contact: false
  });
  
  flippedProjectIndex = signal<number | null>(null);

  resume = {
    name: 'Aditya Dilip Gurav',
    profilePhotoUrl: 'assets/images/profile-photo.jpg',
    objective: 'An aspiring software engineer specializing in AI Data Science with practical experience in full-stack development. My goal is to create impactful and scalable tech solutions using Angular, Firebase, NodeJS, and Python. I thrive in team-driven environments and am passionate about enhancing user engagement through continuous learning and problem-solving.',
    education: [
      { degree: 'Bachelor of Engineering, AI & Data Science', school: 'Vidya Pratishthan\'s Kamalnayan Bajaj Institute of Engineering and Technology', years: '2022 - 2026 (Expected)', score: 'CGPA: 8.70/10.0' },
      { degree: 'Higher Secondary Certificate (HSC), CBSE', school: 'Vidya Pratishthan Someshwar English Medium School', years: 'Completed 2022', score: 'Percentage: 70.60%' },
      { degree: 'Secondary School Certificate (SSC), CBSE', school: 'S. D. Sahyadri Public School, Baramati', years: 'Completed 2020', score: 'Percentage: 83.00%' },
    ],
    experience: [
      { role: 'Software Engineering Intern', company: 'Kredendum LLP',companyUrl:'https://adiidg.github.io/KredendumLLP_Internship_Website/', duration: 'Jan 2025 - Feb 2025', location: 'Pune, India', points: [
          'Reduced manual license generation workload by 80% by developing automation scripts using Python.',
          'Built data modeling tools that improved database query performance by 40%.',
          'Contributed to a full-stack application using AngularJS and NodeJS within an Agile (Jira) workflow.'
      ]},
      { role: 'GDG On Campus Organizer (Lead)', company: 'Google Developer Groups On-Campus',companyUrl:'https://gdg.community.dev/gdg-on-campus-vidya-pratishthans-kamalnayan-bajaj-institute-of-engineering-and-technology-baramati-india/', duration: 'Sept 2025 - Present', location: 'VPKBIET, Baramati, India', points: [
          'Led a team of five developers in version control (Git) and project management, delivering two technical projects.',
          'Organized and conducted 2 technical workshops on web development and Python for over 200 attendees.'
      ]},
    ],
    projects: [
      { name: 'Hostel Management System', imageUrl: 'assets/images/projects/project1.jpg', tech: ['Angular', 'Firebase', 'Gemini AI'], description: 'Developed a web application to automate hostel management, increasing administrative efficiency by 70%. Designed the Firestore (NoSQL) database schema and built role-based dashboards.' },
      { name: 'AI-Powered Chat Application', imageUrl: 'assets/images/projects/project2.jpg', tech: ['Angular', 'Gemini API', 'Firebase'], description: 'Employed Object-Oriented principles in TypeScript with Angular to create a modular and scalable AI chat application. Utilized Firebase Authentication and Firestore for secure, real-time user management.' },
      { name: 'MediCluster AI', imageUrl: 'assets/images/projects/project3.jpg', tech: ['Angular', 'Python', 'Firebase', 'OCR', 'NLP'], description: 'Engineered a role-based web app to automate medical doc validation, enhancing administrative efficiency by over 60%. Developed a Python backend leveraging OCR and NLP to extract and classify document data.' },
    ],
    galleryImages: [
      'assets/images/gallery/gallery1.jpg',
      'assets/images/gallery/gallery2.jpg',
      'assets/images/gallery/gallery3.jpg',
      'assets/images/gallery/gallery4.jpg',
      'assets/images/gallery/gallery5.jpg',
      'assets/images/gallery/gallery6.jpg',
      'assets/images/gallery/gallery7.jpg',
      'assets/images/gallery/gallery8.jpg',
      'assets/images/gallery/gallery9.jpg',
      'assets/images/gallery/gallery10.jpg',
      'assets/images/gallery/gallery11.jpg',
      'assets/images/gallery/gallery12.jpg',
    ],
    skills: {
      'Programming': ['Python', 'Java', 'C++', 'TypeScript'],
      'Web Frameworks': ['Angular', 'PHP', 'Node.js'],
      'Databases': ['MySQL', 'PostgreSQL', 'MongoDB', 'Firestore'],
      'Cloud & DevOps': ['AWS', 'Firebase', 'AWS EC2', 'Git', 'GitHub'],
      'Core Concepts': ['Data Structures', 'Algorithms', 'OOP', 'DBMS'],
    } as const,
    contact: {
      email: 'adityagurav54@gmail.com',
      linkedin: 'https://www.linkedin.com/in/adiiidg',
      github: 'https://github.com/adiidg',
      portfolio: 'aditya-gurav.web.app',
    },
    resumeUrl: './assets/Aditya_Gurav_Resume.pdf'
  };

  objectKeys<T extends object>(obj: T): (keyof T)[] {
    return Object.keys(obj) as (keyof T)[];
  }

  get progress(): number {
    const sections = Object.keys(this.unlockedSections());
    const unlockedCount = sections.filter(key => this.unlockedSections()[key] && key !== 'start').length;
    const totalUnlockable = sections.length - 1;
    if (totalUnlockable === 0) return 0;
    return (unlockedCount / totalUnlockable) * 100;
  }

  startGame(): void {
    const current = this.unlockedSections();
    this.unlockedSections.set({
      ...current,
      start: false,
      about: true
    });
  }

  unlockNextSection(section: string): void {
    const current = this.unlockedSections();
    this.unlockedSections.set({
      ...current,
      [section]: true
    });
    setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }

  toggleProjectFlip(index: number): void {
    if (this.flippedProjectIndex() === index) {
        this.flippedProjectIndex.set(null);
    } else {
        this.flippedProjectIndex.set(index);
    }
  }
}