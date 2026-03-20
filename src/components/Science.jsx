import React from "react";
import useFetchNews from "../hooks/useFetchNews";
import CardContainer from "./CardContainer";
import CardContainerShimmer from "../utils/CardContainerShimmer";

const Science = () => {
	const articles = useFetchNews("science");
	if (articles == null) return <CardContainerShimmer />;
	console.log(articles);
	return (
		<div>
			<CardContainer articles={articles} />
		</div>
	);
};

export default Science;
