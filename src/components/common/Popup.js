import styled from 'styled-components';

const Pop = styled.aside`
	width: 100%;
	height: 100vh;
	padding: 10vw;
	position: fixed;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.92);
	z-index: 10;

	> span {
		font: bold 24px/1 'Smooch Sans';
		color: #eee;
		letter-spacing: 2px;
		position: absolute;
		top: 5vw;
		right: 5vw;
		cursor: pointer;

		&:hover {
			color: #6fd885;
		}
	}
	.pop_con {
		width: 100%;
		height: 100%;
		overflow: hidden;

		iframe {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}
`;

function Popup(props) {
	return (
		<Pop>
			<span onClick={() => props.setOpen(false)}>CLOSE</span>
			<div className='pop_con'>{props.children}</div>
		</Pop>
	);
}

export default Popup;
