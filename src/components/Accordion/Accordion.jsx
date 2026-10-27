import { Accordion as RBAccordion } from 'react-bootstrap';

export default function Accordion({ title, children, defaultOpen = false }) {
  return (
    <RBAccordion defaultActiveKey={defaultOpen ? '0' : null} className="mb-3">
      <RBAccordion.Item eventKey="0">
        <RBAccordion.Header>{title}</RBAccordion.Header>
        <RBAccordion.Body>
          {children}
        </RBAccordion.Body>
      </RBAccordion.Item>
    </RBAccordion>
  );
}