import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as Chartjs } from "chart.js/auto";

const Charts = (props) => {
	const { chartData } = props;
	const genreCounts = chartData.reduce((acc, data) => {
		data.genres.forEach((genre) => {
			acc[genre] = (acc[genre] || 0) + 1;
		});
		return acc;
	}, {});

	const [artistData, setArtistData] = useState({
		labels: Object.keys(genreCounts).map((key) => key),
		datasets: [
			{
				label: "Artist Genres",
				data: Object.values(genreCounts),
			},
		],
	});

	return (
		<div>
			<Bar data={artistData} />
		</div>
	);
};

export default Charts;
