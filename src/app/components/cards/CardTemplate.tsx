// From https://github.com/tanishqsh/Card-Animation-Palladium/tree/main

import { motion } from 'framer-motion';

const Card = ({ id, cardNumber, className, style, cvv, expirationDate }: CardProps) => {
	return (
		<motion.div
			initial={{ x: -100, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ duration: 0.5, delay: 0.5 }}
			key={id}
			id="card"
			className={`relative ml-[-180px] h-[220px] w-[347px] animate-card-slide cursor-pointer rounded-lg border-2 border-gray-300 bg-card-palladium-gradient bg-size-500 p-5 opacity-80 backdrop-blur-3xl transition-all duration-[2s] hover:mt-[-50px] hover:translate-x-8 hover:opacity-100 hover:shadow-custom hover:shadow-[#0e0e0e] hover:duration-500 hover:z-50 ${className}`}
			style={style}
		>
			<div id="card-inner" className="font-space-mono align-left">
				<p className="text-sm text-white text-left">aerium</p>
				<div className="absolute bottom-6">
					<div className="flex space-x-2">
						<p className="text-[10px] text-white">{expirationDate}</p>
						<p className="text-[10px] text-white">{cvv}</p>
					</div>
					<p className="mt-1 text-xl text-white">{cardNumber}</p>
				</div>
			</div>
		</motion.div>
	);
};

export default Card;

/**
 * Props for this component
 */
type CardProps = {
	id: string;
	className: string;
	style?: React.CSSProperties;
	cardNumber: string;
	cardAddress: string;
	cvv: number;
	expirationDate: string;
};