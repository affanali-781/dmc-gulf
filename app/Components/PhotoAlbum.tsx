import React from "react";
import ReviewsAlbum from "./ReviewsAlbum";

const PhotoAlbum = () => {
	return (
		<div className="mt-12">
			{/* Heading */}
			<div className="flex justify-center mb-12 px-4">
				<h2 className="font-[Playfair_Display] font-bold text-center leading-tight">
					<span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#0C567E]">
						Journey to the{" "}
					</span>
					<span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#F8C84C]">
						Most Beautiful{" "}
					</span>
					<span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#0C567E]">
						Places on Earth
					</span>
				</h2>
			</div>

			{/* Album Container */}
			<div className="flex justify-center items-center bg-gray-100 py-8">
				<div className="w-full max-w-5xl grid grid-cols-3 grid-rows-2 gap-2 sm:gap-3 p-2 sm:p-3 max-h-[600px]">
					{/* Large Left Image */}
					<div className="row-span-2 col-span-1 h-full">
						<img
							src="/images/photo-album-1.png"
							alt="Main"
							className="w-full h-full object-cover rounded-lg"
						/>
					</div>

					{/* Top Right Two Images */}
					<div className="col-span-2 grid grid-cols-2 gap-2 sm:gap-3 h-full">
						<img
							src="/images/photo-album-2.png"
							alt="Top 1"
							className="w-full h-full object-cover rounded-lg max-h-[295px]"
						/>
						<img
							src="/images/photo-album-3.png"
							alt="Top 2"
							className="w-full h-full object-cover rounded-lg max-h-[295px]"
						/>
					</div>

					{/* Bottom Right Two Images */}
					<div className="col-span-2 grid grid-cols-2 gap-2 sm:gap-3 h-full">
						<img
							src="/images/photo-album-4.png"
							alt="Bottom 1"
							className="w-full h-full object-cover rounded-lg max-h-[295px]"
						/>
						<img
							src="/images/photo-album-5.png"
							alt="Bottom 2"
							className="w-full h-full object-cover rounded-lg max-h-[295px]"
						/>
					</div>
				</div>
			</div>

			<ReviewsAlbum />
		</div>
	);
};

export default PhotoAlbum;
