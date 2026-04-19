import type { PersonalInfo } from '../types/cv';

interface HeroProps {
  personal: PersonalInfo;
}

export default function Hero({ personal }: HeroProps) {
    return (
        <section className="hero">
            <div className="hero-overlay" />
            <div className="hero-content">
                <p className="eyebrow">Portfolio professionnel</p>
                <h1>{personal.name}</h1>
                <h2>{personal.title}</h2>
                <p>{personal.location}</p>
                <div className="hero-actions">
                    <a className="btn primary" href="#contact">Me contacter</a>
                    <a className="btn secondary" href="#projects">Voir les projets</a>
                </div>
            </div>
        </section>
    );
}