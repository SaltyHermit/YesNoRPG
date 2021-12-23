import { Scenario } from "../interfaces/Scenario";

export const TEST_SCENARIOS: Scenario[] = [
  {
    title: "test title",
    description: "The King wants more cake",
    yesConsequence: 500,
    noConsequence: -500,
  },
  {
    title: "test title2",
    description: "The King wants more cake2",
    yesConsequence: 500,
    noConsequence: -500,
  },
  {
    title: "test title3",
    description: "The King wants more cake3",
    yesConsequence: 500,
    noConsequence: -500,
  },
  {
    title: "test title4",
    description: "The King wants more cake4",
    yesConsequence: 500,
    //morale: 50
    noConsequence: -500,
  },
];

//add other values in game. Morale. population. Magic
