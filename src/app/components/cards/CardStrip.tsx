// From https://github.com/tanishqsh/Card-Animation-Palladium/tree/main

import React, { useMemo } from 'react';
import RandomCard from './RandomCard';
import { motion } from 'framer-motion';

const COLORS = ['#667EEA', '#000000', '#FF983F', '#ED4848', '#185D40'];

const CardStrip = React.memo(() => {
	// Memoize the cards array to prevent re-creation on every render
	const cards = useMemo(() => {
		return Array.from(Array(25).keys()).map((index) => {
			const color = COLORS[index % COLORS.length];
			return (
				<RandomCard 
					key={index} 
					className="bg-gradient-to-br from-transparent to-transparent"
					style={{ 
						background: `linear-gradient(135deg, ${color}, ${color}CC)`,
						borderColor: color
					}}
				/>
			);
		});
	}, []); // Empty dependency array means this only runs once

	return (
		<>
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ y: -100, opacity: 0.4, scale: 1 }}
				transition={{ duration: 1, delay: 2.5 }}
				className="absolute flex items-center w-full"
			>
				<div className="m-auto h-[50px] w-[500px] rounded-full bg-white opacity-10 blur-3xl"></div>
			</motion.div>
			<div className="hovering-cards absolute mt-[500px] flex space-x-3 transition-all duration-500 md:mt-[-50px]">
				{cards}
			</div>
		</>
	);
});

CardStrip.displayName = 'CardStrip';

export default CardStrip;