
import './App.css';

//We create this component, that will take some props (later we will load our json file to take this info)
//We return the whole component that will show the personal information
function Work(props) {
  const data = props.data;
  return (
    <div className="work">
      <hr/>
      <h3><i className="fa-sharp fa-solid fa-briefcase"></i>Work</h3>

      <a href="https://www.hendonschool.co.uk/"><h4>{data.workObj.job1title}</h4></a>
      <p>{data.workObj.job1description1}</p>
      <p>{data.workObj.job1description2}</p>

      <a href="https://www.google.com/search?q=the+coronet+holloway&rlz=1C1VDKB_en-GBGB993GB993&oq=the+coronet+hollow&aqs=chrome.0.0i355i512j46i175i199i512j69i57j0i512l3j0i390.2866j0j9&sourceid=chrome&ie=UTF-8#lpg=cid:CgIgAQ%3D%3D,ik:CAoSLEFGMVFpcE45THh0ZV9PV0VUbTNZMHdOaDY1UFFod01HZXp6N0dQMEpDRTNk"><h4>{data.workObj.job2title}</h4></a>
      <p>{data.workObj.job2description}</p>
    </div>
  );
}

export default Work;
