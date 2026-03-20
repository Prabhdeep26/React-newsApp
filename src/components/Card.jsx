import React from "react";

const Card = ({ article }) => {
	const { source, title, description, publishedAt, author, urlToImage } =
		article;
	const getTimeAgo = (dateString) => {
		const now = new Date();
		const published = new Date(dateString);
		const diffInHours = Math.floor((now - published) / (1000 * 60 * 60));

		if (diffInHours < 1) return "Just now";
		if (diffInHours === 1) return "1 hr ago";
		if (diffInHours < 24) return `${diffInHours} hrs ago`;
		if (diffInHours < 48) return "1 day ago";
		return `${Math.floor(diffInHours / 24)} days ago`;
	};
	return (
		<div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
			{/* Article Image */}
			<div className="h-48 w-full overflow-hidden">
				<img
					src={
						urlToImage ||
						"https://images.unsplash.com/photo-1504711434969-e33886168f5c"
					}
					alt={title}
					className="w-full h-full object-cover"
					loading="lazy"
				/>
			</div>

			<div className="p-5 flex flex-col grow">
				{/* Source Header */}
				<div className="flex items-center gap-2 mb-3">
					<div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center">
						{/* Small placeholder for source icon */}
						<span className="text-[10px] font-bold text-orange-600">
							{source?.name?.charAt(0)}
						</span>
					</div>
					<span className="text-sm font-semibold text-gray-700">
						{source?.name}
					</span>
				</div>

				{/* Title & Description */}
				<h3 className="text-lg font-bold text-gray-900 leading-tight mb-2 line-clamp-2">
					{title}
				</h3>
				<p className="text-gray-600 text-sm line-clamp-3 mb-4">
					{description}
				</p>

				{/* Footer: Author & Time */}
				<div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
					<div className="flex items-center gap-2">
						<div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
							<img
								src={`https://ui-avatars.com/api/?name=${author || "User"}&background=random`}
								alt="author"
							/>
						</div>
						<span className="text-xs font-medium text-gray-700 truncate max-w-25">
							{article.author || "Staff Writer"}
						</span>
					</div>
					<span className="text-xs text-gray-500">
						{getTimeAgo(publishedAt)}
					</span>
				</div>
			</div>
		</div>
	);
};

export default Card;
// return (
// 		<div className="border-b border-gray-100 pb-4 last:border-0">
// 			<div className="text-xs font-semibold text-gray-500 mb-1">
// 				{source?.name || "Unknown Source"}
// 			</div>
// 			<h3 className="font-bold text-gray-900 text-base mb-1 line-clamp-2">
// 				{title}
// 			</h3>
// 			<p className="text-gray-600 text-sm mb-2 line-clamp-2">
// 				{description || "No description available"}
// 			</p>
// 			<div className="flex items-center text-xs text-gray-400">
// 				<span className="mr-3">
// 					📅 {author || source?.name || "Unknown"}
// 				</span>
// 				<span>{getTimeAgo(publishedAt)}</span>
// 			</div>
// 		</div>
// 	);
