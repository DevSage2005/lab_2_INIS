import Accordion from '../Accordion/Accordion.jsx';

const FAQ_ITEMS = [
  {
    id: 1,
    question: 'Как я получу свой билет после оплаты?',
    answer:
      'После оплаты на вашу почту придёт письмо с PDF-билетом и QR-кодом. Билет также будет доступен в личном кабинете — его можно показать на входе прямо с экрана телефона.',
    defaultOpen: true,
  },
  {
    id: 2,
    question: 'Можно ли оплатить билет от юридического лица?',
    answer:
      'Да. При оформлении заказа выберите «Оплата от юр. лица» — мы выставим счёт и пришлём закрывающие документы на вашу почту.',
  },
  {
    id: 3,
    question: 'Будут ли записи докладов после конференции?',
    answer:
      'Да, все доклады записываются. Через 3 дня после конференции записи станут доступны участникам в личном кабинете.',
  },
  {
    id: 4,
    question: 'Можно ли вернуть билет?',
    answer:
      'Полный возврат — за 14 дней до начала конференции. Позже билет можно передать коллеге, написав нам на почту.',
  },
  {
    id: 5,
    question: 'Будет ли питание на конференции?',
    answer:
      'Да, в стоимость билета входят кофе-брейки и обед. Если у вас есть особые dietary-требования — напишите нам заранее.',
  },
];

export default function FaqSection() {
  return (
    <section className="faq-section">
      <header className="faq-section__header">
        <p className="faq-section__eyebrow">ЧАСТЫЕ ВОПРОСЫ</p>
        <h2 className="faq-section__title">FAQ</h2>
        <p className="faq-section__subtitle">
          Не нашли ответ? Напишите нам на{' '}
          <a href="mailto:hello@nextconf.ru" className="faq-section__link">
            hello@nextconf.ru
          </a>
        </p>
      </header>

      <div className="faq-section__list">
        {FAQ_ITEMS.map((item) => (
          <Accordion
            key={item.id}
            title={item.question}
            defaultOpen={item.defaultOpen}
          >
            {item.answer}
          </Accordion>
        ))}
      </div>
    </section>
  );
}