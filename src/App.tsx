import React, {useState} from 'react';
import {Scene} from "./components/Scene/Scene";
import {sceneContext} from "./context/sceneContext";
import {IWorld3d, World3d} from "./world3d/world3d";
import {Bets} from "./components/Bets/Bets";


function App() {

  const [isContextSetted,setContext] = useState(false)
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const world3d = React.useRef<IWorld3d | null>(null);

    React.useLayoutEffect(() => {
        if (canvasRef.current) {
            world3d.current = new World3d(canvasRef.current);
            setContext(true)
            console.log(world3d.current)


        }
    }, []);

  return (
  <sceneContext.Provider value={{scene:world3d.current,ref:canvasRef}}>
      <div className="App">
          <Scene/>
          <Bets />
      </div>
  </sceneContext.Provider>
  );
}

export default App;
