import { useState } from 'react';
import './Accordion.css';

export default function Accordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className={`accordion ${isOpen ? 'accordion--open' : ''}`}>
      <button
        type="button"
        className="accordion__header"
        onClick={toggle}
        aria-expanded={isOpen}
      >
        <span className="accordion__title">{title}</span>

        <span className="accordion__icon" aria-hidden="true">
          <span className="accordion__icon-bar" />
          <span className="accordion__icon-bar accordion__icon-bar--vertical" />
        </span>
      </button>

      <div className="accordion__content-wrap">
        <div className="accordion__content">{children}</div>
      </div>
    </div>
  );
}