import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        Hi! I'm a web app! I do things!
      </header>
      <div className="image">
        <img src={`${process.env.PUBLIC_URL}/tml.png`} className="tml" alt="GO LEAFS GO" />
      </div>
      <div className='app-body'>
      You can see my source code <a href="https://github.com/philvanlane/astro-software-template" target="_blank" rel="noopener noreferrer">here.</a>
      <br></br>
      You can see my documentation <a href="https://philvanlane-astro-software-template.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">here.</a>
      </div>
    </div>
  );
}

export default App;
