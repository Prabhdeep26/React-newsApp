import React from "react";

const CardShimmer = () => {
	return (
		<div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm flex flex-col">
			{/* Image Placeholder */}
			<div className="h-48 w-full bg-gray-200 animate-pulse" />

			<div className="p-5 flex flex-col grow">
				{/* Source Header Placeholder */}
				<div className="flex items-center gap-2 mb-3">
					<div className="w-5 h-5 bg-gray-200 rounded-full animate-pulse" />
					<div className="h-3 w-20 bg-gray-200 rounded animate-pulse" />
				</div>

				{/* Title Placeholder (2 lines) */}
				<div className="h-5 w-full bg-gray-200 rounded animate-pulse mb-2" />
				<div className="h-5 w-3/4 bg-gray-200 rounded animate-pulse mb-4" />

				{/* Description Placeholder (3 lines) */}
				<div className="space-y-2 mb-4">
					<div className="h-3 w-full bg-gray-100 rounded animate-pulse" />
					<div className="h-3 w-full bg-gray-100 rounded animate-pulse" />
					<div className="h-3 w-1/2 bg-gray-100 rounded animate-pulse" />
				</div>

				{/* Footer Placeholder */}
				<div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
					<div className="flex items-center gap-2">
						<div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse" />
						<div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />
					</div>
					<div className="h-3 w-10 bg-gray-200 rounded animate-pulse" />
				</div>
			</div>
		</div>
	);
};

export default CardShimmer;
