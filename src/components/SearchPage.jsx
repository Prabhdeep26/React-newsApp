import React from "react";
import { useSearchParams } from "react-router-dom";
import useFetchNews from "../hooks/useFetchNews";
import CardContainerShimmer from "../utils/CardContainerShimmer";
import CardContainer from "./CardContainer";

const SearchPage = () => {
	const [searchParams] = useSearchParams();
	const q = searchParams.get("q");
	const articles = useFetchNews(encodeURIComponent(q).replace(/%20/g, "+"));
	console.log(encodeURIComponent(q).replace(/%20/g, "+"));

	if (articles == null) return <CardContainerShimmer />;

	return (
		<div>
			<CardContainer articles={articles} />
		</div>
	);
};

export default SearchPage;
