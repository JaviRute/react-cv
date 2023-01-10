import './App.css';

//We create this component, that will take some props (later we will load our json file to take this info)
//We return the whole component that will show the education
function Education(props) {
  const data = props.data;
  return (
    <div className="education">
      <h3><i className="fa-solid fa-graduation-cap"></i>Education</h3>
        <p className="educationLeft">{ data.educationObj.ed1.date }</p>
        <p className="educationRight bold">{ data.educationObj.ed1.line1 }</p>
        <p className="educationRight extra_margin">{ data.educationObj.ed1.line2 }</p>

        <p className="educationLeft">{ data.educationObj.ed2.date }</p>
        <p className="educationRight bold">{ data.educationObj.ed2.line1 }</p>
        <p className="educationRight extra_margin">{ data.educationObj.ed2.line2 }</p>

        <p className="educationLeft">{ data.educationObj.ed3.date }</p>
        <p className="educationRight bold">{ data.educationObj.ed3.line1 }</p>
        <p className="educationRight extra_margin">{ data.educationObj.ed3.line2 }</p>

        <p className="educationLeft">{ data.educationObj.ed4.date }</p>
        <p className="educationRight bold">{ data.educationObj.ed4.line1 }</p>
        <p className="educationRight extra_margin">{ data.educationObj.ed4.line2 }</p>


    </div>
  );
}

export default Education;
