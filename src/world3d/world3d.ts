import * as BABYLON from "babylonjs";
import 'babylonjs-loaders'


export interface IWorld3d {

}

export class World3d implements IWorld3d {
    private scene: BABYLON.Scene;
    private animation?: BABYLON.AnimationGroup;
    private camera: BABYLON.ArcRotateCamera;
    public constructor(canvas: HTMLCanvasElement) {
        const engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true,  disableWebGL2Support: false});


        this.scene = new BABYLON.Scene(engine);

        this.camera = new BABYLON.ArcRotateCamera(
            "camera",
            0,
            0,
            0,
            new BABYLON.Vector3(0, 6, 8),
            this.scene
        );


        this.camera.attachControl(canvas, true);

        const light = new BABYLON.HemisphericLight(
            "HemiLight",
            new BABYLON.Vector3(0, 2, 2),
            this.scene
        );
        light.intensity = 0.8;


        console.log('Сцена',this.scene)

        BABYLON.SceneLoader.Append(
            "",
            'deck.obj',
            this.scene,
            function (...args) {
                console.log("++++onSuccess", args);
            },
            function (...args) {
                console.log("++++onProgress", args);
            },
            function (...args) {
                console.log("++++onError", args);
            }
        );

        BABYLON.SceneLoader.Append("./", "deck.obj", this.scene, function (...args) {
            console.log(args)
        });

        this.scene.debugLayer.show()

        engine.runRenderLoop(() => {
            this.scene.render();
        });
    }

    private createBox() {
        const box = BABYLON.MeshBuilder.CreateBox("box", {
            size: 1
        });
        box.position.y += 0.5;
        box.position.x += 1;
        box.position.z += 1;

        return box;
    }

}
