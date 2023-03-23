import React, {useState, useEffect} from "react";
import { useNavigate} from "react-router-dom";
import { Button } from 'antd';
import './HeaderBar.css';


const HeaderBar = (props) => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	useEffect(() => {
		window.addEventListener('resize', () => {
			setWindowWidth(window.innerWidth);
		});
	}, []);
	
	const { style } = props;
	const navigate = useNavigate();
	
	const turnToHome = () => {
		navigate('/');
	};
	
	const turnToExhibition = () => {
		navigate('/exhibition');
	};
	
	const turnToAdmin = () => {
		navigate('/admin');
	};
	
	return <div style={style}>
		{windowWidth > 430 &&
			<Button className='nav-item' type='link' ghost onClick={turnToHome}>
				Home
			</Button>
		}
		{
			<Button className='nav-item' type='link' ghost onClick={turnToExhibition}>
				Exhibition
			</Button>
		}
		{
			<Button className='nav-item' type='link' ghost onClick={turnToAdmin}>
				Admin
			</Button>
		}
	</div>
}

export default HeaderBar;