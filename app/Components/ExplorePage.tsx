import React from "react";
import Cards from "./Cards";
import PhotoAlbum from "./PhotoAlbum";

interface ExplorePageProps {
	heading1: string;
	heading2: string;
	text: string;
}

const ExplorePage: React.FC<ExplorePageProps> = ({
	heading1,
	heading2,
	text,
}) => {
	const hotelsData = [
		{
			imageSrc: "/images/hotel-c1.png",
			heading: "Atlantis Aquaventure Waterpark",
			group: "7 days 6 nights - Small group",
			review: "5.00 (892 reviews)",
			price: "AED 350.62",
		},
		{
			imageSrc: "/images/hotel-c2.png",
			heading: "Burj Khalifa At The Top Tickets",
			group: "2 days 3 nights - Family",
			review: "4.88 (672 reviews)",
			price: "AED 310.62",
		},
		{
			imageSrc: "/images/hotel-c3.png",
			heading: "Atlantis Aquaventure Waterpark",
			group: "3 days 3 nights - Company",
			review: "4.99 (543 reviews)",
			price: "AED 300.62",
		},
		{
			imageSrc: "/images/hotel-c4.png",
			heading: "Grand Canyon Horseshow Bend 2 days",
			group: "7 days 6 nights - Small group",
			review: "4.91 (612 reviews)",
			price: "AED 410.62",
		},
		{
			imageSrc: "/images/hotel-c4.png",
			heading: "Grand Canyon Horseshow Bend 2 days",
			group: "7 days 6 nights - Small group",
			review: "4.91 (612 reviews)",
			price: "AED 410.62",
		},
	];

	const acvitiesData = [
		{
			imageSrc: "/images/activity-c1.png",
			heading: "Atlantis Aquaventure Waterpark",
			group: "7 days 6 nights - Small group",
			review: "5.00 (892 reviews)",
			price: "AED 350.62",
		},
		{
			imageSrc: "/images/activity-c2.png",
			heading: "Burj Khalifa At The Top Tickets",
			group: "2 days 3 nights - Family",
			review: "4.88 (672 reviews)",
			price: "AED 310.62",
		},
		{
			imageSrc: "/images/activity-c3.png",
			heading: "Atlantis Aquaventure Waterpark",
			group: "3 days 3 nights - Company",
			review: "4.99 (543 reviews)",
			price: "AED 300.62",
		},
		{
			imageSrc: "/images/activity-c4.png",
			heading: "Grand Canyon Horseshow Bend 2 days",
			group: "7 days 6 nights - Small group",
			review: "4.91 (612 reviews)",
			price: "AED 410.62",
		},
		{
			imageSrc: "/images/hotel-c4.png",
			heading: "Grand Canyon Horseshow Bend 2 days",
			group: "7 days 6 nights - Small group",
			review: "4.91 (612 reviews)",
			price: "AED 410.62",
		},
	];

	return (
		<div className="max-w-7xl mx-auto px-4">
			{/* Headings */}
			<h2 className="font-[Playfair_Display] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center leading-tight">
				<span className="text-[#0C567E]">{heading1}</span>{" "}
				<span className="text-[#F8C84C]">{heading2}</span>
			</h2>

			<p className="text-[#0C567E] text-sm sm:text-base md:text-lg text-center mt-2">
				{text}
			</p>

			{/* Horizontal Scrollable Cards */}
			<div className="flex gap-6 mt-10 overflow-x-auto scroll-smooth no-scrollbar">
				{hotelsData.map((card, index) => (
					<div key={index} className="snap-start">
						<Cards
							imageSrc={card.imageSrc}
							heading={card.heading}
							group={card.group}
							review={card.review}
							price={card.price}
						/>
					</div>
				))}
			</div>

			<PhotoAlbum />
		</div>
	);
};

export default ExplorePage;
