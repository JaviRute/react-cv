
import './App.css';

function Tech(props) {
  const data = props.data;
  const techData = data.techObj
  return (
    <div className="tech">
      <hr/>
      <h3><i className="fa-sharp fa-solid fa-laptop-code"></i>Tech Stack</h3>
      <div className="stack">
        <p>{techData.tech1}</p>
        <p>{techData.tech2}</p>
        <p>{techData.tech3}</p>
        <p>{techData.tech4}</p>
        <p>{techData.tech5}</p>
        <p>{techData.tech6}</p>
        <p>{techData.tech7}</p>
        <p>{techData.tech8}</p>
        <p>{techData.tech9}</p>
        <p>{techData.tech10}</p>
        <p>{techData.tech11}</p>
        <p>{techData.tech12}</p>
        <p>{techData.tech13}</p>
        <p>{techData.tech14}</p>
      </div>
    </div>
  );
}

export default Tech;
