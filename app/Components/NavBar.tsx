import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

const NavBar = () => {
	return (
		<nav className="fixed top-0 left-0 w-full flex items-center p-4 bg-gradient-to-b from-[#00000066] to-[#00000066] backdrop-blur-sm h-[50px] z-10">
			{/* Left: Logo */}
			<div>
				<Image
					src="/images/dmc-logo.png"
					alt="Logo"
					width={170}
					height={170}
					className="p-3 mx-15"
				/>
			</div>

			{/* Middle: Links */}
			<div className="flex gap-5 mr-180 font-microsoft text-[15px] text-white">
				<a href="#">Destinations</a>
				<a href="#">Services</a>
				<a href="#">Experiences</a>
				<a href="#">About</a>
				<a href="#">Contact</a>
			</div>

			<div className="mr-10">
				<Image
					src="/images/phone-mail.png"
					alt="Phone Icon"
					width={300}
					height={300}
				/>
			</div>

			{/* Right: Button */}
			<div>
				<Button className="rounded-[45.34px] bg-[linear-gradient(270deg,#F6C84D_0%,#C09035_100%)] px-[27.37px] py-[14.19px]">
					Login
				</Button>
			</div>
		</nav>
	);
};

export default NavBar;
