import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

//We import all the necessary files for the different sections and css
import './index.css';
import Info from './Info';
import Career from './Career';
import Education from './Education';
import Tech from './Tech';
import Projects from './Projects';
import Work from './Work';
//this is the json file containing all the information for the cv
import json from './cv-data.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Here we enter each component that will render each of the sections, and we enter 'json' as props */}
    <Info data={json}/>
    <Career data={json}/>
    <Education data={json}/>
    <Tech data={json}/>
    <Projects data={json}/>
    <Work data={json}/>
    
  </React.StrictMode>
);


reportWebVitals();
