import type { Education } from '../types/cv';

interface EducationCardProps extends Education {
  onClick?: () => void;
}

export default function EducationCard({ period, school, description, logos, more, onClick }: EducationCardProps) {
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
                    <h3>{description}</h3>
                    <h4>{school}</h4>
                    {more && <div className="card-more-indicator">+</div>}
                </div>
            </div>
        </article>
    );
}
