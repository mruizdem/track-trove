import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

const BarChart = (props) => {
	const { topArtists } = props;

	ChartJS.register(
		CategoryScale,
		LinearScale,
		BarElement,
		Title,
		Tooltip,
		Legend
	);

	const labels = topArtists.map((artist) => artist.name);
	const barData = {
		labels,
		datasets: [
			{
				label: "Popularity",
				data: topArtists.map((artist) => artist.popularity),
				backgroundColor: "#22c55e",
			},
		],
	};

	// options for charts
	const barOptions = {
		responsive: true,
		plugins: {
			lengend: {
				position: "top",
			},
			title: {
				display: false,
				text: "Artists by Popularity",
			},
		},
	};
	return (
		<div className="flex justify-center items-center">
			<Bar data={barData} options={barOptions} />
		</div>
	);
};

export default BarChart;
