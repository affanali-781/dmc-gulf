"use client";
import React, { useRef } from "react";
import ReviewCard from "./ReviewCard";
import AboutUs from "./AboutUs";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ReviewsAlbum = () => {
	const scrollRef = useRef<HTMLDivElement | null>(null);

	const reviews = [
		{
			comment:
				"DMC Gulf transformed our corporate retreat into an unforgettable experience. Every detail was perfectly orchestrated, from the luxury accommodations to the cultural experiences. Truly exceptional service.",
			name: "Sarah Johnson",
			designation: "CEO, Global Innovations",
		},
		{
			comment:
				"Professional, efficient, and friendly service. Made our Gulf tour truly memorable!",
			name: "Omar Sheikh",
			designation: "Entrepreneur",
		},
		{
			comment:
				"The attention to detail and personalized planning made our experience unforgettable.",
			name: "Fatima Noor",
			designation: "Photographer",
		},
		{
			comment:
				"I highly recommend them! Every detail was handled perfectly — we didn't have to worry about a thing.",
			name: "Ali Raza",
			designation: "Software Engineer",
		},
	];

	return (
		<>
			<div className="h-screen py-20">
				{/* Heading Section */}
				<div className="flex flex-col justify-center items-center text-center mb-30 px-4">
					<h1 className="font-[Playfair_Display] font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
						<span className="text-[#0C567E]">Stories of</span>{" "}
						<span className="text-[#F8C84C]">Excellence</span>
					</h1>
					<p className="font-[Inter] font-normal text-center text-gray-700 text-base sm:text-lg md:text-xl mt-2">
						Hear from our valued clients who have experienced the magic of the
						Gulf
						<br className="hidden sm:block" />
						through our expert guidance and personalized service.
					</p>
				</div>

				{/* Review Cards with Scroll */}
				<div className="flex gap-10">
					<div>
						<img src="/images/quotes.png" alt="Quotes" width="120px" />
						<h1 className="font-[Playfair_Display] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center text-[#00000045] mt-5">
							What our customers are saying
						</h1>
					</div>

					{/* Scrollable Container */}
					<div className="flex gap-5 overflow-x-auto no-scrollbar scroll-smooth px-10">
						{reviews.map((review, index) => (
							<ReviewCard
								key={index}
								comment={review.comment}
								name={review.name}
								designation={review.designation}
							/>
						))}
					</div>
				</div>
			</div>

			<AboutUs />
		</>
	);
};

export default ReviewsAlbum;
