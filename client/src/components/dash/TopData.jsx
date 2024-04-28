import {
	Chart as ChartJS,
	RadialLinearScale,
	ArcElement,
	Tooltip,
	Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

const TopData = (props) => {
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
				position: "bottom",
			},
		},
	};

	return (
		<div className="flex justify-evenly">
			<div className="text-center w-1/2">
				<p className="text-3xl text-green-500 font-bold">Artists By Genre</p>
				<hr className="my-5" />
				<Doughnut data={genreData} options={options} />
			</div>
			<div className="text-center w-1/2">
				<p className="text-3xl text-green-500 font-bold">Artists By Genre</p>
				<hr className="my-5" />
				<Doughnut data={genreData} options={options} />
			</div>
		</div>
	);
};

export default TopData;
