import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";
import SkillCard from "./components/SkillCard";
import ExperienceCard from "./components/ExperienceCard";
import EducationCard from "./components/EducationCard";
import HobbyCard from "./components/HobbyCard";
import Contact from "./components/Contact";
import Modal from "./components/Modal";
import { useState } from "react";
import { personal, skills, experiences, education, hobbies, projects } from "./data/cvData";
import "./index.css";

export default function App() {
  const [modalData, setModalData] = useState<{
    isOpen: boolean;
    title: string;
    subtitle?: string;
    content: string;
    logos?: Array<{ type: 'icon' | 'image'; content: string; alt?: string }>;
  }>({
    isOpen: false,
    title: '',
    content: '',
    logos: []
  });

  const openModal = (title: string, subtitle: string | undefined, content: string, logos?: Array<{ type: 'icon' | 'image'; content: string; alt?: string }>) => {
    setModalData({
      isOpen: true,
      title,
      subtitle,
      content,
      logos
    });
  };

  const closeModal = () => {
    setModalData(prev => ({ ...prev, isOpen: false }));
  };

  return (
      <div className="app">
        <Navbar />

        <main>
          <Hero personal={personal} />

          <section id="about" className="section">
            <SectionTitle title="À propos" subtitle="Un profil hybride entre technique, projet et business." />
            <div className="glass card">
              <p>{personal.summary}</p>
            </div>
          </section>

          <section id="skills" className="section">
            <SectionTitle title="Compétences" subtitle="Mon stack technique et mes savoir-faire clés." />
            <div className="grid">
              {skills.map((skill: any) => (
                  <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </section>

          <section id="experience" className="section">
            <SectionTitle title="Expériences" subtitle="Un parcours orienté exécution, autonomie et coordination." />
            <div className="timeline">
              {experiences.map((exp: any) => (
                  <ExperienceCard 
                    key={exp.role} 
                    {...exp} 
                    onClick={() => exp.more && openModal(exp.role, exp.company, exp.more, exp.logos)}
                  />
              ))}
            </div>
          </section>

          <section id="education" className="section">
            <SectionTitle title="Formations" subtitle="Un parcours technique et business solide." />
            <div className="timeline">
              {education.map((edu: any) => (
                  <EducationCard 
                    key={edu.school} 
                    {...edu} 
                    onClick={() => edu.more && openModal(edu.description, edu.school, edu.more, edu.logos)}
                  />
              ))}
            </div>
          </section>

          <section id="hobbies" className="section">
            <SectionTitle title="Loisirs" subtitle="Mes passions et centres d'intérêt." />
            <div className="grid">
              {hobbies.map((hobby: any) => (
                  <HobbyCard key={hobby.name} {...hobby} />
              ))}
            </div>
          </section>

          <section id="projects" className="section">
            <SectionTitle title="Projets" subtitle="Quelques réalisations représentatives." />
            <div className="grid projects">
              {projects.map((project: any) => (
                  <article className="glass card" key={project.name}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </article>
              ))}
            </div>
          </section>

          <section id="contact" className="section">
            <SectionTitle title="Contact" subtitle="Disponible pour un échange, un projet ou une opportunité." />
            <Contact personal={personal} />
          </section>
        </main>
        
        <Modal
          isOpen={modalData.isOpen}
          onClose={closeModal}
          title={modalData.title}
          subtitle={modalData.subtitle}
          content={modalData.content}
          logos={modalData.logos}
        />
      </div>
  );
}