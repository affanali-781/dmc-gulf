import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HotelsSearchBar from "./HotelsSearchBar";
import ActivitiesSearchBar from "./ActivitiesSearchBar";

const Hero = () => {
	return (
		<main className="relative">
			<div className="h-[900] bg-[url('/images/hero-bg.png')] bg-cover bg-center">
				<Tabs defaultValue="hotels">
					<TabsList className="absolute top-[75%] left-[45%]">
						<TabsTrigger value="hotels" className="flex items-center gap-2">
							<Image
								src="/images/hotel-symbol.png"
								alt="altText"
								width={20}
								height={10}
								className="h-4 w-auto"
							/>
							Hotels
						</TabsTrigger>
						<TabsTrigger value="activities" className="flex flex-row gap-1">
							<Image
								src="/images/activity-symbol.png"
								alt="altText"
								width={20}
								height={1}
							/>
							Activities
						</TabsTrigger>
					</TabsList>
					<TabsContent value="hotels" className="absolute top-[85%]">
						<HotelsSearchBar />
					</TabsContent>
					<TabsContent value="activities" className="absolute top-[85%]">
						<ActivitiesSearchBar />
					</TabsContent>
				</Tabs>
			</div>
		</main>
	);
};

export default Hero;
