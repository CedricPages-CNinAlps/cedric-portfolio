interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  content: string;
  logos?: Array<{ type: 'icon' | 'image'; content: string; alt?: string }>;
}

export default function Modal({ isOpen, onClose, title, subtitle, content, logos }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <h2>{title}</h2>
          {subtitle && <h3>{subtitle}</h3>}
        </div>
        
        {logos && logos.length > 0 && (
          <div className="modal-logos">
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
        
        <div className="modal-body">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
