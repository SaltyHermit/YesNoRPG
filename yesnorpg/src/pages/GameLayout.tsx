import React, { ReactElement, useState } from "react";
import { Button, Card } from "react-bootstrap";

export function GameLayout(): ReactElement {
  const testScenario = {
    title: "test title",
    description: "The King wants more cake",
    yesConsequence: 500,
    noConsequence: -500,
  };

  // this gets the gold and lets me set it WARNING! ASYNCHRONOUS
  const [gold, setGold] = useState<number>(1000);

  function checkForGameOver(newGoldNameNoMatter: number) {
    if (newGoldNameNoMatter <= 0) {
      console.log("you lose");
    } else if (newGoldNameNoMatter >= 2000) {
      // TODO RS-12-21-21: add 'gameover' concept (maybe boolean)
      console.log("you win");
    }
  }

  function buttonHandler(response: boolean) {
    let newGold: number = 0;
    // they clicked yes
    if (response) {
      newGold = gold + testScenario.yesConsequence;
      setGold(newGold);
      // TODO RS-12-21-21: replace console log with logic
      //console.log("Thanks! I love cake! ", gold, " gold remaining");
    } else {
      // they clicked no
      newGold = gold + testScenario.noConsequence;
      //console.log("OffWithHishHEAD! ", gold, " gold remaining");
      setGold(newGold);
    }
    // we check if they win, lose, or continue
    checkForGameOver(newGold);
  }

  return (
    <Card className="card-style">
      <div className="App">
        <Card.Header className="card-header">
          {testScenario.title}
          <Card.Body>
            <div>{testScenario.description}</div>
            <div>{`Gold remaining ${gold}`}</div>
          </Card.Body>
          <Card.Footer>
            <Button onClick={() => buttonHandler(true)}>Yes</Button>
            <Button onClick={() => buttonHandler(false)}>No</Button>
          </Card.Footer>
        </Card.Header>
      </div>
    </Card>
  );
}
