import React from "react";
import Card from "./Card";

const CardContainer = ({ articles }) => {
	return (
		<div className="max-w-7xl mx-auto px-4 py-8">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{articles?.map((article, index) => (
					<Card key={index} article={article} />
				))}
			</div>
		</div>
	);
};

export default CardContainer;
