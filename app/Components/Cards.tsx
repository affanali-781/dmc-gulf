import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

interface CardProps {
	imageSrc: string;
	heading: string;
	group: string;
	review: string;
	price: string;
}

const Cards: React.FC<CardProps> = ({
	imageSrc,
	heading,
	group,
	review,
	price,
}) => {
	return (
		<div className="bg-white rounded-2xl shadow-md overflow-hidden w-[85vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] xl:w-[22vw] h-auto">
			{/* Image */}
			<div className="relative w-full aspect-[4/3]">
				<Image src={imageSrc} alt={heading} fill className="object-cover" />
			</div>

			{/* Content */}
			<div className="p-5 flex flex-col justify-between min-h-[220px]">
				<div>
					<div className="flex items-center justify-between mb-3">
						<span className="bg-[#F8C84C] text-black text-xs sm:text-sm px-3 py-1 rounded-full">
							Exceptional
						</span>

						<div className="flex items-center gap-1">
							<Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
							<span className="text-sm font-semibold text-gray-700">
								{review}
							</span>
						</div>
					</div>

					<h2 className="font-[Playfair_Display] font-bold text-lg sm:text-xl md:text-2xl text-gray-900 leading-snug">
						{heading}
					</h2>

					<p className="font-[Manrope] font-medium text-sm sm:text-base text-gray-600 mt-2">
						{group}
					</p>
				</div>

				<div className="mt-4">
					<span className="font-[Manrope] font-extrabold text-base sm:text-lg text-gray-900">
						{price}
					</span>
					<span className="font-[Manrope] text-[#737373] text-xs mr-35">
						/person
					</span>

					<button className="bg-[#F8C84C] text-black px-4 py-2 rounded-full font-semibold text-xs sm:text-sm hover:bg-[#e6b841] transition-all">
						Book Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default Cards;
