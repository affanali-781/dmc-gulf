import Image from "next/image";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";

export default function Home() {
	return (
		<div className="min-h-screen">
			<NavBar />
			<Hero />
		</div>
	);
}
