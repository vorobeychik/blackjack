import React, {useState} from 'react';
import {Scene} from "./components/Scene/Scene";
import {SceneContext} from "./context/sceneContext";
import {IWorld3d, World3d} from "./world3d/world3d";
import {Bets} from "./components/Bets/Bets";
import {Balance} from "./components/Balance/Balance";
import {useDispatch} from "react-redux";
import {createNewDeck,getCards,countHandWeight} from  './redux/blackJackSlice'
import {GameControls} from "./components/GameControls/GameControls";



function App() {
  const dispatch = useDispatch();
  const [isContextSetted,setContext] = useState(false)
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const world3d = React.useRef<IWorld3d | null>(null);

    React.useLayoutEffect(() => {
        if (canvasRef.current) {
            world3d.current = new World3d(canvasRef.current);
            setContext(true)

        }
    }, []);

  return (
  <SceneContext.Provider value={{scene:world3d.current,ref:canvasRef}}>
      <div className="Game">
          <Scene/>
          <GameControls />
          <Bets />
          <Balance />

      </div>
  </SceneContext.Provider>
  );
}

export default App;
