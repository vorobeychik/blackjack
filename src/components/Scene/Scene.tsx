import React from "react";
import {World3d,IWorld3d} from "../../world3d/world3d";
import {useDispatch} from "react-redux";


export  function Scene(){
    const dispatch = useDispatch();
    const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
    const world3d = React.useRef<IWorld3d | null>(null);

    React.useLayoutEffect(() => {
        if (canvasRef.current) {
            world3d.current = new World3d(canvasRef.current);

        }
    }, []);


    return (
       <canvas ref={canvasRef}  style={{width:'500px',height:'500px'}}/>
    )

}