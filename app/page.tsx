import Image from "next/image";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import ExplorePage from "./Components/ExplorePage";

export default function Home() {
	return (
		<div className="min-h-screen max-w-full overflow-x-hidden">
			<NavBar />
			<Hero />

			<ExplorePage
				heading1="Explore"
				heading2="Hotels"
				text="Curated experiences that showcase the very best of Gulf hospitality, culture, and luxury."
			/>

			<ExplorePage
				heading1="Explore"
				heading2="Activities"
				text="Curated experiences that showcase the very best of Gulf hospitality, culture, and luxury."
			/>
		</div>
	);
}
