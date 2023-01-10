import logo from './images/hyperionlogo.jpg';
import jrr from './images/jrr.jpg'
import './App.css';

//We create this component, that will take some props (later we will load our json file to take this info)
//We return the whole component that will show the personal information
function Info(props) {
  const data = props.data;
  return (
    <div className="about">
      <h1>{ data.infoObj.name }</h1>
      <h3>Software Developer</h3>
      <img className="jrr" src={jrr} alt="Javi Rute" width={200}></img>
      <p><i className="fa-solid fa-location-dot"></i>{ data.infoObj.city }</p>
      <p><i className="fa-solid fa-envelope"></i>{ data.infoObj.email }</p>
      <p><i className="fa-solid fa-phone"></i>{ data.infoObj.phone }</p>
      <br />
      <a href="https://www.linkedin.com/in/javi-rute-1099b2245/"><i className="fa-brands fa-linkedin ico"></i></a>
      <a href="https://github.com/JaviRute"><i className="fa-brands fa-github ico"></i></a>
      <a href="https://www.hyperiondev.com/portfolio/101528/"><img className="ico-image" src={logo} alt="HyperionDev logo"></img></a>
      <br />
      <p className="small-text">{ data.infoObj.react }<a className="bold" href="https://github.com/JaviRute"> my GitHub repo.</a></p>
    </div>
  );
}

export default Info