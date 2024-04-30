import BarChart from "./BarChart";
import DoughnutChart from "./Doughnut";

const TopData = (props) => {
	const { topArtists } = props;

	return (
		<>
			<div className="flex flex-col justify-center items-center mb-20 p-8">
				<h2 className="w-full text-center text-3xl text-green-500">
					Artists by Popularity
				</h2>
				<div className="w-3/4 mt-5">
					<BarChart topArtists={topArtists} />
				</div>
			</div>
			<div className="flex flex-col justify-center items-center p-8">
				<h2 className="w-full text-center text-3xl text-green-500">
					Artists by Genres
				</h2>
				<div className="w-1/2 mt-5">
					<DoughnutChart topArtists={topArtists} />
				</div>
			</div>
		</>
	);
};
export default TopData;
