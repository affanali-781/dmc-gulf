"use client";

import React, { useState } from "react";
import Image from "next/image";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Country } from "country-state-city";

import ExplorePage from "./ExplorePage";

const HotelsSearchBar = () => {
	const [selectedCountry, setSelectedCountry] = useState<any>({
		value: "QA",
		label: "Qatar (QA)",
	});

	const [selectedCity, setSelectedCity] = useState<any>(null);
	const [checkIn, setCheckIn] = useState<Date | null>(new Date());
	const [checkOut, setCheckOut] = useState<Date | null>(new Date());
	const [guests, setGuests] = useState({ adults: 2, children: 2 });

	const countryOptions = Country.getAllCountries().map((country) => ({
		value: country.isoCode,
		label: `${country.name} (${country.isoCode})`,
	}));

	return (
		<>
			<div className="flex items-center justify-between bg-white rounded-full shadow-md w-300 h-20 mx-100 px-6">
				{/* Dropdown 1: Location */}
				<div className="flex flex-col">
					<label className="text-gray-700 text-sm font-medium mb-1">
						Location
					</label>
					<div className="flex gap-2">
						<Select
							options={countryOptions}
							value={selectedCountry}
							onChange={(country) => {
								setSelectedCountry(country);
								setSelectedCity(null);
							}}
							placeholder="Select Country"
							className="w-[180px] text-sm border-none"
						/>
					</div>
				</div>

				{/* Dropdown 2: Check-in */}
				<div className="flex flex-col">
					<label className="text-gray-700 text-sm font-medium mb-1">
						Check-in
					</label>
					<DatePicker
						selected={checkIn}
						onChange={(date) => setCheckIn(date)}
						className="border border-gray-300 rounded-md px-3 py-1 text-sm w-[160px]"
						dateFormat="dd MMMM yyyy"
					/>
				</div>

				{/* Dropdown 3: Check-out */}
				<div className="flex flex-col">
					<label className="text-gray-700 text-sm font-medium mb-1">
						Check-out
					</label>
					<DatePicker
						selected={checkOut}
						onChange={(date) => setCheckOut(date)}
						className="border border-gray-300 rounded-md px-3 py-1 text-sm w-[160px]"
						dateFormat="dd MMMM yyyy"
					/>
				</div>

				{/* Dropdown 4: Guests */}
				<div className="flex flex-col">
					<label className="text-gray-700 text-sm font-medium mb-1">
						Guests
					</label>
					<select
						value={`${guests.adults} adults, ${guests.children} children`}
						onChange={(e) => {
							const [adults, children] = e.target.value
								.replace(" adults, ", ",")
								.replace(" children", "")
								.split(",")
								.map(Number);
							setGuests({ adults, children });
						}}
						className="border border-gray-300 rounded-md px-3 py-1 text-sm w-40"
					>
						<option>2 adults, 2 children</option>
						<option>1 adult, 0 children</option>
						<option>2 adults, 1 child</option>
						<option>3 adults, 2 children</option>
					</select>
				</div>

				{/* Search Button */}
				<button className="flex items-center gap-2 bg-[#0C567E] text-white font-semibold px-6 py-4 rounded-full shadow-[0px_4px_4px_0px_#0C567E40,4px_4px_4px_0px_#00000040_inset,-4px_4px_4px_0px_#00000040_inset] hover:opacity-90 transition-all">
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
		</>
	);
};

export default HotelsSearchBar;
