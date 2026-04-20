import type { Project } from '../types/cv';

export default function ProjectCard({ name, description, liveUrl, githubUrl, technologies }: Project) {
    return (
        <article className="glass card project-card">
            <div className="project-header">
                <h3>{name}</h3>
                <div className="project-links">
                    {liveUrl && (
                        <a 
                            href={liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="project-link live-link"
                            title="Voir le projet en ligne"
                        >
                            <i className="fas fa-external-link-alt"></i>
                        </a>
                    )}
                    {githubUrl && (
                        <a 
                            href={githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="project-link github-link"
                            title="Voir le code sur GitHub"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    )}
                </div>
            </div>
            
            <p className="project-description">{description}</p>
            
            {technologies && technologies.length > 0 && (
                <div className="project-technologies">
                    {technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">
                            {tech}
                        </span>
                    ))}
                </div>
            )}
        </article>
    );
}
