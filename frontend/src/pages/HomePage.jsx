import React, {useState, useEffect} from "react";
// import { useNavigate } from "react-router-dom";
// import { Button } from "antd";
import { Parallax } from 'react-parallax';
import HeaderBar from '../components/HeaderBar';
import bg from '../assets/bg.png';

const styles = {
  background: {
    height: '100vh',
    width: '100vw',
  },
  container:{
    maxWidth: '1000px',
    margin: 'auto',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    height: '80vh',
    width: '100%',
    color: '#fff',
    justifyContent: 'center',
  },
  button: {
    width: '150px',
    margin: '20px auto',
    backgroundColor: '#5ca9fb',
    backgroundImage: 'linear-gradient(315deg, #5ca9fb 0%, #6372ff 100%)',
  },
  title: {
    fontSize: '70px',
    fontWeight: 'bold', 
    padding: '0 100px',
    textAlign: 'center',
  },
  mediumTitle: {
    fontSize: '50px',
    fontWeight: 'bold', 
    padding: '0 100px',
    textAlign: 'center',
  },
  smallTitle: {
    fontSize: '30px',
    fontWeight: 'bold', 
    padding: '0 50px',
    textAlign: 'center',
  },
  headerBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
}


const HomePage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);
  
  // const navigate = useNavigate();
  
  return <Parallax style={styles.background} blur={0} bgImage={bg} strength={100} bgImageStyle={{minHeight:"100vh"}}>
    <div style={{overflowY:'auto'}}>
    <div style={styles.container}>
      <HeaderBar styles={styles.headerBar}/>
      <div style={styles.content}>
        <div style={windowWidth>700? styles.title : windowWidth>500 ? styles.mediumTitle : styles.smallTitle}>SHOW YOUR MENU</div>
      </div>
    </div>
    </div>
  </Parallax>
}


export default HomePage;