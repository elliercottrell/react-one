import logo from "./logoTest.svg";
import "./App.css";
import Button from "./Button.js";
import ButtonOne from "./ButtonOne.js";
import ButtonTwo from "./ButtonTwo.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>HBA</h1>
      </header>
      <div className="mainbody">
        <Button buttonText="Check insulin levels" />
        <ButtonOne buttonText="Food Calculator" />
        <ButtonTwo buttonText="Recommended Reading" />
      </div>
    </div>
  );
}

export default App;
