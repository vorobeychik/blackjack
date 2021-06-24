import React from "react";
import {World3d,IWorld3d} from "../../world3d/world3d";
import {useContext} from "react";
import {sceneContext} from "../../context/sceneContext";
import {useDispatch} from "react-redux";
import useSceneContext from "../../hooks/useSceneContext";


export  function Scene(){
    const scene = useSceneContext()
    console.log('контекст',scene)



    return (
       <canvas ref={scene!.ref}  style={{width:'500px',height:'500px'}}/>
    )

}