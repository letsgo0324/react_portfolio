function Btns(props) {
	return (
		<ul className='scrollBtns'>
			<li className='on' onClick={() => props.setIndex(0)}></li>
			<li onClick={() => props.setIndex(1)}></li>
			<li onClick={() => props.setIndex(2)}></li>
			<li onClick={() => props.setIndex(3)}></li>
			<li onClick={() => props.setIndex(4)}></li>
			<li onClick={() => props.setIndex(5)}></li>
			<li onClick={() => props.setIndex(6)}></li>
			<li onClick={() => props.setIndex(7)}></li>
		</ul>
	);
}

export default Btns;
