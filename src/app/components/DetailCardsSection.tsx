'use client';

import theme from '../config/theme';
import DetailCard from './detail-cards/DetailCard';

export default function DetailCardsSection() {
  const detailCards = [
    {
      title: 'Deposit',
      description: 'Deposit clothes, jewelry, and other items you no longer use and get instant access to cash',
      subText: 'We currently accept: Women\'s, Men\'s, and Children\'s clothing, Shoes, Accessories, and jewelry',
      imageSrc: '/details/deposit.png',
      imageAlt: 'Deposit items',
      isReversed: false,
      backgroundColor: theme.colors.gray,
      showArrow: false
    },
    {
      title: 'Spend',
      description: 'Instantly cash out to a Visa debit card* which can be used anywhere Visa is accepted',
      subText: '*Pre-paid debit cards issued by People\'s Trust',
      imageSrc: '/details/cards.png',
      imageAlt: 'Visa debit cards',
      isReversed: true,
      backgroundColor: theme.colors.cream,
      showArrow: false
    },
    {
      title: 'Send',
      description: 'We handle listing, negotiation and coordinate the sale. You just need to print the label and drop off the package',
      subText: 'Packages can be dropped off at your nearest post office or picked up within the GTA',
      imageSrc: '/details/shipping_label.png',
      imageAlt: 'Shipping label',
      isReversed: false,
      backgroundColor: theme.colors.orange,
      showArrow: false
    },
    {
      title: 'Security',
      description: 'We set up and handle the sale because your security is our priority',
      subText: 'No need to worry about listing, negotiating with buyers, or sketchy meetups',
      imageSrc: '/details/lock.png',
      imageAlt: 'Sell',
      isReversed: true,
      backgroundColor: theme.colors.black,
      showArrow: false
    }
  ];

  return (
    <section id="detail-cards-section">
      {detailCards.map((card, index) => (
        <div key={card.title} data-card-index={index}>
          <DetailCard
            title={card.title}
            description={card.description}
            subText={card.subText}
            imageSrc={card.imageSrc}
            imageAlt={card.imageAlt}
            isReversed={card.isReversed}
            backgroundColor={card.backgroundColor}
            className={index === 0 ? 'pt-0' : ''}
            showArrow={card.showArrow}
            imageTouchesBottom={index === 0}
          />
        </div>
      ))}
    </section>
  );
}
