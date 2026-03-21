import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
	const navigate = useNavigate();
	const [query, setQuery] = useState("");

	const handleSearch = (e) => {
		e.preventDefault();
		if (query.trim()) {
			navigate(`/search?q=${query}`);
		}
		setQuery("");
	};

	return (
		<form
			onSubmit={handleSearch}
			className="flex items-center bg-white rounded-full overflow-hidden shadow-sm"
		>
			<input
				type="text"
				placeholder="Search..."
				className="px-4 py-2 outline-none text-sm w-40 md:w-48 text-gray-700"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<button
				type="submit"
				className="bg-white px-3 py-2 hover:bg-gray-100 transition"
			>
				<i className="ri-search-line text-gray-600"></i>
			</button>
		</form>
	);
};

export default SearchBar;
