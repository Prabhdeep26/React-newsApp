import React from "react";
import useFetchNews from "../hooks/useFetchNews";
import CardContainer from "./CardContainer";
import CardContainerShimmer from "../utils/CardContainerShimmer";

const Politics = () => {
	const articles = useFetchNews("politics");
	if (articles == null) return <CardContainerShimmer />;

	return (
		<div>
			<CardContainer articles={articles} />
		</div>
	);
};

export default Politics;
