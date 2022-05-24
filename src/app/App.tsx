import { createClock } from "fge";
import React from "react";

import { initialState } from "../game";

import { Game } from "./components";

const App = () => <Game initialState={initialState} initialClock={createClock()} />;

export default App;