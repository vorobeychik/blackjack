import React from "react";
import {World3d,IWorld3d} from "../../world3d/world3d";
import {useContext} from "react";
import {useDispatch} from "react-redux";
import useSceneContext from "../../hooks/useSceneContext";
import styles from './Scene.module.css'


export  function Scene(){
    const scene = useSceneContext()!
    console.log('контекст',scene)



    return (
       <canvas ref={scene.ref!}  className={styles.scene}/>
    )

}