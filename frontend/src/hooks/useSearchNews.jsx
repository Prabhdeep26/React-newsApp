import { useEffect, useState } from "react";

const useSearchNews = (query) => {
	const [result, setResult] = useState(null);

	const fetchNews = async () => {
		const response = await fetch(
			`https://react-news-hub-seven.vercel.app/api/search/${encodeURIComponent(query)}`,
			{
				method: "GET",
			},
		);
		const json = await response.json();
		setResult(json.articles);
	};
	useEffect(() => {
		fetchNews();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query]);

	return result;
};

export default useSearchNews;
