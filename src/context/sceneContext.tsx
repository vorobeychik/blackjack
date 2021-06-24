import React,{useState} from "react";
import {IWorld3d} from "../world3d/world3d";

export const sceneContext = React.createContext<ContextType | null>(null);


type ContextType= {
    scene:IWorld3d | null,
    ref:any,
}


