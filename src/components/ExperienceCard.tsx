import type { Experience } from '../types/cv';

interface ExperienceCardProps extends Experience {
  onClick?: () => void;
}

export default function ExperienceCard({ period, role, company, description, logos, more, onClick }: ExperienceCardProps) {
    return (
        <article className={`glass card experience-card ${more ? 'clickable' : ''}`} onClick={more ? onClick : undefined}>
            <div className="card-content">
                <div className="card-left">
                    {logos && logos.length > 0 && (
                        <div className="card-logos">
                            {logos.map((logo, index) => {
                                if (logo.type === 'icon') {
                                    return <i key={index} className={logo.content}></i>;
                                } else if (logo.type === 'image') {
                                    return <img key={index} src={logo.content} alt={logo.alt || 'Logo'} className="logo-image" />;
                                }
                                return null;
                            })}
                        </div>
                    )}
                </div>
                <div className="card-right">
                    <div className="period">{period}</div>
                    <h3>{role}</h3>
                    <h4>{company}</h4>
                    <p>{description}</p>
                    {more && <div className="card-more-indicator">+</div>}
                </div>
            </div>
        </article>
    );
}