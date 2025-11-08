import Image from "next/image";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import ExplorePage from "./Components/ExplorePage";

export default function Home() {
	return (
		<div className="min-h-screen max-w-full overflow-x-hidden">
			<NavBar />
			<Hero />
		</div>
	);
}
