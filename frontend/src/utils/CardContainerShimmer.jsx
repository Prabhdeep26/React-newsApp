import React from "react";
import CardShimmer from "./CardShimmer";

const CardContainerShimmer = () => {
	// Create an array of 6 items to map over
	const shimmerCards = Array.from({ length: 6 });

	return (
		<div className="max-w-7xl mx-auto px-4 py-8">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{shimmerCards.map((_, index) => (
					<CardShimmer key={index} />
				))}
			</div>
		</div>
	);
};

export default CardContainerShimmer;
