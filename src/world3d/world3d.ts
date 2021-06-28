import * as BABYLON from "babylonjs";
import 'babylonjs-loaders'

export interface IWorld3d {
    changeColor(hex: string): void;
    moveBox():void;
}

export class World3d implements IWorld3d {
    private box: BABYLON.Mesh;
    private material: BABYLON.StandardMaterial;
    private scene: BABYLON.Scene;
    private animation?: BABYLON.AnimationGroup;
    private camera: BABYLON.ArcRotateCamera;
    private card:any;

    public constructor(canvas: HTMLCanvasElement) {
        const engine = new BABYLON.Engine(canvas);

        // create scene
        this.scene = new BABYLON.Scene(engine);
        // create camera
        this.camera = new BABYLON.ArcRotateCamera(
            "camera",
            0,
            0,
            0,
            new BABYLON.Vector3(0, 6, 8),
            this.scene
        );
        this.camera.attachControl(canvas, true);
        // // create light
        const light = new BABYLON.HemisphericLight(
            "HemiLight",
            new BABYLON.Vector3(0, 2, 2),
            this.scene
        );
        light.intensity = 0.8;
        // // create ground
        const ground = BABYLON.GroundBuilder.CreateGround(
            "ground",
            {
                width: 5,
                height: 5
            },
            this.scene
        );

        BABYLON.SceneLoader.Append("./", 'deck.obj', this.scene, function (scene) {
            // do something with the scene
            console.log(scene.meshes)

        });

        BABYLON.SceneLoader.ImportMesh("",'./','deck.obj',this.scene,(grop:any) => {
            grop.forEach((el:any,i:any) => {
                console.log(el.name)
                this.scene.addMesh(el)
            })
        })
        console.log()



        // create material


        const groundMaterial = new BABYLON.StandardMaterial(
            "grooundMat",
            this.scene
        );

        groundMaterial.diffuseColor = BABYLON.Color3.FromHexString("#cccccc");
        // get texture for ground
        ground.material = groundMaterial;

        this.box = this.createBox();
        this.material = this.createMaterial("#ff0000");

        this.box.material = this.material;
        const sphereMaterial = this.createMaterial("#ffff00");

        const sphere = this.createSphere();
        sphere.material = sphereMaterial;

        this.camera.setTarget(this.box.position);
        engine.runRenderLoop(() => {
            this.scene.render();
        });
    }

    private createSphere() {
        const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {
            diameter: 2
        });
        sphere.position.y += 2;
        sphere.position.x += 1;
        sphere.position.z += 1;

        return sphere;
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

    private createMaterial(hex: string) {
        this.material = new BABYLON.StandardMaterial("box_mat", this.scene);
        this.material.diffuseColor = BABYLON.Color3.FromHexString(hex);
        return this.material;
    }

    public changeColor(hex: string) {
        console.log("hex", hex);
        this.material.diffuseColor = BABYLON.Color3.FromHexString(hex);
    }

    public moveBox(){
        this.box.position.x += 1;
        this.box.position.y = 2;
        this.box.position.z = 3;
    }



}
