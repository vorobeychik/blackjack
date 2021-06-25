import {useContext} from "react";
import {SceneContext} from "../context/sceneContext";

export default () => {
    const context = useContext(SceneContext);

    return context
}