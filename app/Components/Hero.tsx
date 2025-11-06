import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Hero = () => {
	return (
		<main className="relative">
			<div className="h-[900] bg-[url('/images/hero-bg.png')] bg-cover bg-center">
				<Tabs defaultValue="hotels">
					<TabsList className="mt-180 mx-220 text-[#FFFFFFA6] border-[0.7px] bg-[#FFFFFF5C] rounded-4xl p-1">
						<TabsTrigger value="hotels">Hotels</TabsTrigger>
						<TabsTrigger value="activities">Activities</TabsTrigger>
					</TabsList>
					<TabsContent value="hotels">Content for Hotels</TabsContent>
					<TabsContent value="activities">Content for Activities</TabsContent>
				</Tabs>
			</div>
		</main>
	);
};

export default Hero;
