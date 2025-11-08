"use client";

import React, { useState } from "react";
import Image from "next/image";
import ExplorePage from "./ExplorePage";

const ActivitiesSearchBar = () => {
	return (
		<>
			<div className="flex items-center justify-between bg-white rounded-full shadow-md w-[600px] h-14 mx-170 px-4 mb-20">
				{/* Input Field */}
				<input
					type="text"
					placeholder="Search activities..."
					className="flex-1 bg-transparent outline-none text-gray-700 px-4 text-sm placeholder:text-gray-400"
				/>

				{/* Search Button */}
				<button className="flex items-center gap-2 bg-[#0C567E] text-white font-semibold px-5 py-3 rounded-full shadow-[0px_4px_4px_0px_#0C567E40,4px_4px_4px_0px_#00000040_inset,-4px_4px_4px_0px_#00000040_inset] hover:opacity-90 transition-all">
					<Image
						src="/images/search-icon.png"
						alt="Search"
						className="w-4 h-4 object-contain"
						width={16}
						height={16}
					/>
					Search
				</button>
			</div>

			<ExplorePage
				heading1="Explore"
				heading2="Activities"
				text="Curated experiences that showcase the very best of Gulf hospitality, culture, and luxury."
			/>
		</>
	);
};

export default ActivitiesSearchBar;
