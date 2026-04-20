import type { Education } from '../types/cv';

interface EducationCardProps extends Education {
  onClick?: () => void;
}

export default function EducationCard({ period, school, description, logos, more, onClick }: EducationCardProps) {
    // Séparer les icônes et les images
    const icons = logos?.filter(logo => logo.type === 'icon') || [];
    const images = logos?.filter(logo => logo.type === 'image') || [];

    return (
        <article className={`glass card education-card ${more ? 'clickable' : ''}`} onClick={more ? onClick : undefined}>
            <div className="card-content">
                <div className="card-left">
                    {icons.length > 0 && (
                        <div className="card-icons">
                            {icons.map((icon, index) => (
                                <i key={index} className={icon.content}></i>
                            ))}
                        </div>
                    )}
                </div>
                <div className="card-center">
                    <div className="period">{period}</div>
                    <h3>{description}</h3>
                    <h4>{school}</h4>
                    {more && <div className="card-more-indicator">+</div>}
                </div>
                <div className="card-right">
                    {images.length > 0 && (
                        <div className="card-company-logos">
                            {images.map((image, index) => (
                                image.link ? (
                                    <a key={index} href={image.link} target="_blank" rel="noopener noreferrer" className="company-logo-link">
                                        <img src={image.content} alt={image.alt || 'Logo'} className="company-logo" />
                                    </a>
                                ) : (
                                    <img key={index} src={image.content} alt={image.alt || 'Logo'} className="company-logo" />
                                )
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
}
