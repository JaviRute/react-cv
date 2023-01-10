
import './App.css';

//We create this component, that will take some props (later we will load our json file to take this info)
//We return the whole component that will show the career profile
function Career(props) {
  const data = props.data;
  return (
    <div className="career">
        <h3><i className="fa-solid fa-user"></i>Career Profile</h3>
        <p>{ data.careerObj.text }</p>
        <hr/>
    </div>
  );
}

export default Career;
