const TimeRangeBtn = (props) => {
	const { range, setRange, text, value } = props;

	const handleOnClick = () => {
		setRange(value);
	};

	const btnText = range === value ? `${text} (Selected)` : text;

	return (
		<>
			<button onClick={handleOnClick} className="btn-success">
				{btnText}
			</button>
		</>
	);
};

export default TimeRangeBtn;
