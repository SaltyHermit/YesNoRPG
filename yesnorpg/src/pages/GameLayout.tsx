import { sensitiveHeaders } from "http2";
import React, { ReactElement, useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { GameUpdateModal } from "../components/GameUpdateModal";
import { Scenario } from "../interfaces/Scenario";
import { TEST_SCENARIOS } from "../utilities/TEST_SCENARIOS";

export function GameLayout(): ReactElement {
  const [show, setShow] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [currentScenario, setCurrentScenario] = useState<Scenario>(
    TEST_SCENARIOS[0]
  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const startingGold = 1000;
  const winMessage = "you win!";
  const loseMessage = "you lose :(";

  // this gets the gold and lets me set it WARNING! ASYNCHRONOUS
  const [gold, setGold] = useState<number>(startingGold);

  function checkForGameOver(newGoldNameNoMatter: number) {
    if (newGoldNameNoMatter <= 0) {
      console.log(loseMessage);
      setGameOver(true);
    } else if (newGoldNameNoMatter >= 2000) {
      setGameOver(true);
      console.log(winMessage);
    }
  }

  function resetGame() {
    setGameOver(false);
    setGold(startingGold);
    //reset scenarios Daniel12-22-21
  }

  function buttonHandler(response: boolean) {
    let newGold: number = 0;
    // they clicked yes
    if (response) {
      newGold = gold + currentScenario.yesConsequence;
      setGold(newGold);
      // TODO RS-12-21-21: replace console log with logic
    } else {
      // they clicked no
      newGold = gold + TEST_SCENARIOS[0].noConsequence;
      //console.log("OffWithHishHEAD! ", gold, " gold remaining");
      setGold(newGold);
    }
    // we check if they win, lose, or continue
    handleShow();
    checkForGameOver(newGold);
  }

  return (
    <>
      <Card className="card-style">
        <div className="App">
          <Card.Header className="card-header">
            {TEST_SCENARIOS[0].title}
            <Card.Body>
              <div>{TEST_SCENARIOS[0].description}</div>
              <div>{`Gold remaining ${gold}`}</div>
            </Card.Body>
            <Card.Footer>
              <Button onClick={() => buttonHandler(true)}>Yes</Button>
              <Button onClick={() => buttonHandler(false)}>No</Button>
            </Card.Footer>
          </Card.Header>
        </div>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Scenario Results</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Next
          </Button>
          <Button variant="primary" hidden={!gameOver} onClick={resetGame}>
            Play Again
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
