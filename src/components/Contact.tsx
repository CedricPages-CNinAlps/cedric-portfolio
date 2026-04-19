import type { PersonalInfo } from '../types/cv';

interface ContactProps {
  personal: PersonalInfo;
}

export default function Contact({ personal }: ContactProps) {
    return (
        <div className="glass card contact-card">
            <p><strong>Email :</strong> {personal.email}</p>
            <p><strong>Téléphone :</strong> {personal.phone}</p>
            <p><strong>Localisation :</strong> {personal.location}</p>
            <a className="btn primary" href={`mailto:${personal.email}`}>Envoyer un email</a>
        </div>
    );
}