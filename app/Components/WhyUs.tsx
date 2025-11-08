import React from "react";

const WhyUs = () => {
	return (
		<>
			<div className="h-screen">
				<div className="flex flex-col justify-center items-center">
					<h1 className="font-[Playfair_Display] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
						<span className="text-[#0C567E]">Why </span>
						<span className="text-[#F8C84C]">Travel</span>
						<span className="text-[#0C567E]">With Us? </span>
					</h1>
					<p className="text-[#0C567E]">
						The best booking platform you can trust
					</p>
				</div>

				<div className="w-screen">
					<img src="/images/WhyUs.png" alt="" />
				</div>
			</div>
		</>
	);
};

export default WhyUs;
