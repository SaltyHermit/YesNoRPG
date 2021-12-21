import "./App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export function App() {
  const testScenario = {
    title: "test title",
    description: "The King wants more cake",
    yesConsequence: 500,
    noConsequence: -500,
  };

  function buttonHandler(response) {
    if (response) console.log("Thanks! I love cake!");
    else console.log("OffWithHishHEAD!");
  }
  return (
    <Card className="card-style">
      <div className="App">
        <Card.Header className="card-header">
          {testScenario.title}
          <Card.Body>{testScenario.description}</Card.Body>
          <Card.Footer>
            <Button onClick={() => buttonHandler(true)}>Yes</Button>
            <Button onClick={() => buttonHandler(false)}>No</Button>
          </Card.Footer>
        </Card.Header>
      </div>
    </Card>
  );
}
