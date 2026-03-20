import React from "react";
import useFetchNews from "../hooks/useFetchNews";
import CardContainer from "./CardContainer";
import CardContainerShimmer from "../utils/CardContainerShimmer";

const Sports = () => {
	const articles = useFetchNews("sports");
	if (articles == null) return <CardContainerShimmer />;

	console.log(articles);
	return (
		<div>
			<CardContainer articles={articles} />
		</div>
	);
};

export default Sports;
