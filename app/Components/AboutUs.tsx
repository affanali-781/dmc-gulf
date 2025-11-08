import React from "react";
import WhyUs from "./WhyUs";

const AboutUs = () => {
	return (
		<>
			<div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 lg:px-16 gap-20">
				{/* Left Section */}
				<div className="flex-1 flex flex-col justify-center items-center text-center">
					<h1 className="font-[Playfair_Display] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
						<span className="text-[#0C567E]">About </span>
						<span className="text-[#F8C84C]">Us</span>
					</h1>

					<p className="font-[Inter] text-base sm:text-lg md:text-xl max-w-lg">
						DMC Gulf has been at the forefront of destination management in the
						GCC region for over a decade, creating unforgettable experiences
						that showcase the Gulf states. From corporate events to leisure
						travel, we deliver excellence in every detail of your Gulf
						experience. DMC Gulf has been at the forefront of destination
						management in the GCC region for over a decade, creating
						unforgettable experiences that showcase the Gulf states. From
						corporate events to leisure travel, we deliver excellence in every
						detail of your Gulf experience. DMC Gulf has been at the forefront
						of destination management in the GCC region for over a decade,
						creating unforgettable experiences that showcase the Gulf states.
						From corporate events to leisure travel, we deliver excellence in
						every detail of your Gulf experience.
					</p>
				</div>

				{/* Right Section */}
				<div className="flex-1 relative w-full max-w-lg lg:max-w-xl">
					{/* Main Image */}
					<img
						src="/images/about-us-image.png"
						alt="Main"
						className="rounded-xl"
					/>

					{/* Overlay Image */}
					<div className="absolute bottom-0 left-2 w-16 sm:w-20 md:w-24">
						<img src="/images/about-us-overlay.png" alt="Overlay" />
					</div>
				</div>
			</div>

			<WhyUs />
		</>
	);
};

export default AboutUs;
