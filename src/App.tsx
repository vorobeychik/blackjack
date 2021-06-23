import React from 'react';
import {Scene} from "./components/Scene/Scene";
import {useScene} from "./hooks/useScene";
import {useGame} from "./hooks/useGame";
import {settScene} from './redux/sceneSlice'
import {useDispatch} from "react-redux";

function App() {
  const dispatch = useDispatch();
  const {changeColor} = useGame();
  const {changeNum} = useScene();


  return (
    <div className="App">
      <Scene/>
      <button onClick={() => dispatch(settScene(10))}>222</button>
    </div>
  );
}

export default App;
