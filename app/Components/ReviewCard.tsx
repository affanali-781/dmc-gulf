import React from "react";
import { Star } from "lucide-react";

interface ReviewCardProps {
	comment: string;
	name: string;
	designation: string;
	rating?: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
	comment,
	name,
	designation,
	rating = 5,
}) => {
	return (
		<div className="bg-white shadow-md rounded-2xl border-2 p-6 w-[320px] sm:w-[380px] md:w-[420px] shrink-0">
			{/* Stars */}
			<div className="flex flex-row mb-4">
				{[...Array(rating)].map((_, index) => (
					<Star
						key={index}
						className="w-5 h-5 fill-yellow-400 text-yellow-400"
					/>
				))}
			</div>

			{/* Comment */}
			<p className="text-sm sm:text-base md:text-lg leading-relaxed font-[Inter]">
				“{comment}”
			</p>

			{/* Name & Designation */}
			<div className="mt-6">
				<h3 className="font-semibold text-lg sm:text-xl font-[Playfair_Display]">
					{name}
				</h3>
				<p className="text-gray-500 text-sm sm:text-base font-[Inter]">
					{designation}
				</p>
			</div>
		</div>
	);
};

export default ReviewCard;
