import {useContext} from "react";
import {sceneContext} from "../context/sceneContext";

export default () => {
    const context = useContext(sceneContext);

    return context
}