import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function App() {
  function yesButtonHandler() {
    console.log("OffWithHishHEADDDDDDDAHSDFO!");
  }
  return (
    <Card className="card-style">
      <div className="App">
        <Card.Header className="card-header">
          Scenario
          <Card.Body>The King wants more cake</Card.Body>
          <Card.Footer>
            <Button onClick={yesButtonHandler}>Yes</Button>
            <Button>No</Button>
          </Card.Footer>
        </Card.Header>
      </div>
    </Card>
  );
}

export default App;
