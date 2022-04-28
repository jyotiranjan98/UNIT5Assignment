
import logo from './logo.svg'
import './App.css';

const links = ["Service", "Projects", "About"]

function App() {
  return (
    <div className="App">
      <Logo/>
      <div className='link'>{links.map((e)=> {
        return <Links props={e}/>
      })} </div>
      <Button/>
    </div>
  );
}

function Logo({logo}){
  return <p className='logo'>LOGOBAKERY {logo}</p>
}

function Links({props}) {
  return <p>{props}</p>
}

function Button(){
  return <button>Contact</button>
}
export default App;