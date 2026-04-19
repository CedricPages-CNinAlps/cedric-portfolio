import type { Hobby } from '../types/cv';

interface HobbyCardProps extends Hobby {}

export default function HobbyCard({ name, description, logo }: HobbyCardProps) {
    return (
        <article className="glass card skill-card">
            <div className="skill-icon">
                {logo.type === 'icon' ? (
                    <i className={logo.content}></i>
                ) : (
                    <img src={logo.content} alt={logo.alt || name} className="logo-image" />
                )}
            </div>
            <span className="skill-name">{name}</span>
            {description && <span className="hobby-description">{description}</span>}
        </article>
    );
}
