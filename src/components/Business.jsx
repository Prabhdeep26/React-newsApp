import React from "react";
import useFetchNews from "../hooks/useFetchNews";
import CardContainerShimmer from "../utils/CardContainerShimmer";
import CardContainer from "./CardContainer";

const Business = () => {
	const articles = useFetchNews("business");
	if (articles == null) return <CardContainerShimmer />;

	return (
		<div>
			<CardContainer articles={articles} />
		</div>
	);
};

export default Business;
