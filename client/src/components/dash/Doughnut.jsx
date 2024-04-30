import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import {
	Chart as ChartJS,
	RadialLinearScale,
	ArcElement,
	Tooltip,
	Legend,
} from "chart.js";

const DoughnutChart = (props) => {
	const { topArtists } = props;
	ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

	// store artist genres
	const artistGenres = topArtists.flatMap((artist) => artist.genres);

	// grab a count of the genres
	const genreCounts = artistGenres.reduce((acc, genre) => {
		acc[genre] = (acc[genre] || 0) + 1;
		return acc;
	}, {});

	// generate random colors for the graph
	const generateRandomColors = (count) => {
		const colors = [];
		for (let i = 0; i < count; i++) {
			const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
				Math.random() * 256
			)}, ${Math.floor(Math.random() * 256)}, .75)`;
			colors.push(color);
		}
		return colors;
	};

	// setup for the graph/chart
	const genreData = {
		labels: Object.keys(genreCounts),
		datasets: [
			{
				label: " Amount of Artists",
				data: Object.values(genreCounts),
				backgroundColor: generateRandomColors(Object.keys(genreCounts).length),
				borderWidth: 3,
			},
		],
	};

	// options for charts
	const options = {
		plugins: {
			legend: {
				display: false,
			},
		},
	};

	return (
		<div className="w-full flex justify-center items-center">
			<Doughnut data={genreData} options={options} />
		</div>
	);
};

export default DoughnutChart;
