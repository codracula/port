import logo from './logo.svg';
import './App.css';
import Module from "./module";
import Projects from "./projects";
import Stmn from "./stmn";

var date = new Date();
var year = date.getFullYear();

function createEntry(entry) {
  return (
    <Module
      key={entry.projnum}
      name={entry.name}
      def={entry.def}
      img={entry.img}
    />
  );
}

function App() {
  return (
    <div className="App">
      <div className="banner">
        <div className="banner-left">P. Jeep Naarkom</div>
        <div className="banner-right">
          <a>portfolio</a>{" "}
          <a href="" download>
            about
          </a>{" "}
          <a>contact</a>
        </div>
      </div>
      <div className='projectFrame'>
        <p className="stmn">{Stmn[0].text}</p>
        <h4 className="highlight">Project highlights</h4>
        <p className="disclaimer">(All images below are placeholders and are not part of the projects)</p>
        <div className="moduleFrame">{Projects.map(createEntry)}</div>
        
      </div>
      <div className="footer">
        <footer >copyright {year}</footer>
      </div>
    </div>
  );
}

export default App;
