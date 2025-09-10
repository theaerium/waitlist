// From https://github.com/tanishqsh/Card-Animation-Palladium/tree/main

import React, { useMemo } from 'react';
import Card from './CardTemplate';
import { generateCreditCardNumber, obfuscateCardNumber } from '../cards/utils';

interface RandomCardProps {
	className?: string;
	style?: React.CSSProperties;
}

const RandomCard = React.memo(({ className = '', style = {} }: RandomCardProps) => {
	// Generate card data only once using useMemo
	const cardData = useMemo(() => {
		// generate a random ID
		const id = Math.random().toString(36).substring(2, 15);

		// generate a random 16 digit number
		const cardNumber = generateCreditCardNumber();

		// generate a random card ethereum address
		const cardAddress = '';

		// random CVV
		const cvv = Math.floor(Math.random() * (999 - 100 + 1)) + 100;

		// random expiration date - month between 1-12, year between 24-27
		const expirationDate = `${Math.floor(Math.random() * (12 - 1 + 1)) + 1}/${Math.floor(Math.random() * (27 - 24 + 1)) + 24}`;

		return {
			id,
			cardNumber: obfuscateCardNumber(cardNumber),
			cardAddress,
			cvv,
			expirationDate
		};
	}, []); // Empty dependency array means this only runs once

	return (
		<Card
			className={`${className}`}
			style={style}
			id={cardData.id}
			cvv={cardData.cvv}
			expirationDate={cardData.expirationDate}
			cardNumber={cardData.cardNumber}
			cardAddress={cardData.cardAddress}
		/>
	);
});

RandomCard.displayName = 'RandomCard';

export default RandomCard;