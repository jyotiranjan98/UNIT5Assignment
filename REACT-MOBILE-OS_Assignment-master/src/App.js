
import './App.css';

const mobiles = ["Android","Blackberry","Iphone","Windows Phone"]
const manufacture = ["Samsung","HTC","Micromax","Apple"]

function App() {
  return (
    <div className="App">
      <h3>Mobile Operation System</h3>
      <ul>
        {mobiles.map((e) => {
          return <li>{e}</li>
        })}
      </ul>
      <h3>Mobile Manufactures</h3>
      <ul>
        {manufacture.map((e) => {
          return <li>{e}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
