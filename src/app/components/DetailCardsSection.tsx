'use client';

import DetailCard from './detail-cards/DetailCard';

export default function DetailCardsSection() {
  const detailCards = [
    {
      title: 'Deposit',
      description: 'Deposit clothes, jewelry, and other items you no longer use and get instant access to cash',
      subText: 'Checkout items currently accepted',
      imageSrc: '/details/deposit.png',
      imageAlt: 'Deposit items',
      isReversed: false,
      backgroundColor: '#EEEFE2',
      showArrow: true
    },
    {
      title: 'Spend',
      description: 'Instantly cash out to a Visa debit card* which can be used anywhere Visa is accepted',
      subText: '*Pre-paid debit cards issued by People\'s Trust',
      imageSrc: '/details/cards.png',
      imageAlt: 'Visa debit cards',
      isReversed: true,
      backgroundColor: '#FEFFF4',
      showArrow: false
    },
    {
      title: 'Send',
      description: 'We handle listing, negotiation and coordinate the sale. You just need to print the label and drop off the package',
      subText: 'Checkout items currently accepted',
      imageSrc: '/details/shipping_label.png',
      imageAlt: 'Shipping label',
      isReversed: false,
      backgroundColor: '#FD870B',
      showArrow: false
    }
  ];

  return (
    <section>
      {detailCards.map((card, index) => (
        <DetailCard
          key={card.title}
          title={card.title}
          description={card.description}
          subText={card.subText}
          imageSrc={card.imageSrc}
          imageAlt={card.imageAlt}
          isReversed={card.isReversed}
          backgroundColor={card.backgroundColor}
          className={index === 0 ? 'pt-0' : ''}
          showArrow={card.showArrow}
        />
      ))}
    </section>
  );
}
