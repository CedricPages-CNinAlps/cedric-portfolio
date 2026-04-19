import type { Skill } from '../types/cv';

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
    return (
        <a href={skill.link} target="_blank" rel="noopener noreferrer" className="glass card skill-card">
            <div className="skill-icon">
                <i className={skill.icone}></i>
            </div>
            <span className="skill-name">{skill.name}</span>
            <div className="skill-rating">
                {[...Array(5)].map((_, i) => (
                    <i 
                        key={i} 
                        className={i < skill.rate ? "fas fa-star star-filled" : "far fa-star star-empty"}
                    ></i>
                ))}
            </div>
        </a>
    );
}