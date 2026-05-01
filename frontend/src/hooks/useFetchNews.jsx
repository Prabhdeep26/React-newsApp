import { useEffect, useState } from "react";
import { newApi_filters, newsApi_BaseURL } from "../utils/constants";

const useFetchNews = (query) => {
	const [result, setResult] = useState(null);
	const fetchNews = async () => {
		const data = await fetch(
			newsApi_BaseURL +
				query +
				newApi_filters +
				import.meta.env.VITE_NEWSAPI_KEY,
		);
		const json = await data.json();
		setResult(json.articles);
	};
	useEffect(() => {
		fetchNews();
	}, [query]);

	return result;
};

export default useFetchNews;
