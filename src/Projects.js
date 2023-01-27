
import './App.css';
//We create this component, that will take some props (later we will load our json file to take this info)
//We return the whole component that will show the projects I have worked on

function Projects(props) {
  const data = props.data;
  return (
    <div className="projects">
      <hr/>
      <h3><i className="fa-sharp fa-solid fa-list-check"></i>Projects</h3>

      <a href={ data.projectsObj.project1.link}><h4>{ data.projectsObj.project1.title}</h4></a>
      <p>{ data.projectsObj.project1.description}</p>

      <a href={ data.projectsObj.project2.link}><h4>{ data.projectsObj.project2.title}</h4></a>
      <p>{ data.projectsObj.project2.description}</p>

      <a href={ data.projectsObj.project3.link}><h4>{ data.projectsObj.project3.title}</h4></a>
      <p>{ data.projectsObj.project3.description}</p>

      <a href={ data.projectsObj.project4.link}><h4>{ data.projectsObj.project4.title}</h4></a>
      <p>{ data.projectsObj.project4.description}</p>

      <a href={ data.projectsObj.project5.link}><h4>{ data.projectsObj.project5.title}</h4></a>
      <p>{ data.projectsObj.project5.description}</p>

      <a href={ data.projectsObj.project6.link}><h4>{ data.projectsObj.project6.title}</h4></a>
      <p>{ data.projectsObj.project6.description}</p>

      <a href={ data.projectsObj.project7.link}><h4>{ data.projectsObj.project7.title}</h4></a>
      <p>{ data.projectsObj.project7.description}</p>
    </div>
  );
}

export default Projects;
