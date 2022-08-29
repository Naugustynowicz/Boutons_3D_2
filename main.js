/*
import * as THREE from 'three';
import { InteractionManager } from "three.interactive";
 

const scene = new THREE.Scene()
scene.background = new THREE.Color(0x000000)
const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize( window.innerWidth, window.innerHeight )
document.appendChild( renderer.domElement )





const geoTable = new THREE.BoxGeometry(100, 5, 100, 500)
const matTable = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true})
const Table = new THREE.Mesh(geoTable, matTable)

const geoBigRedButton = new THREE.CylinderGeometry(10, 10, 5, 200)
const matBigRedButton = new THREE.MeshBasicMaterial({color : 0xff0000, wireframe : true })
const BigRedButton = new THREE.Mesh(geoBigRedButton, matBigRedButton)

const light = new THREE.PointLight(0xffffff, 1, 1000)

const interactionManager = new InteractionManager(
    renderer,
    camera,
    renderer.domElement,
    false
  )



scene.add(BigRedButton)
scene.add(Table)
scene.add(light)
light.position.z = 10
Table.position.y = -5
camera.position.y = 20
camera.position.z = 20
camera.rotateX(-45)



for (const [name, object] of Object.entries(BigRedButton)) {
    object.addEventListener("click", (event: { stopPropagation: () => void; }) => {
      event.stopPropagation();
      console.log(`${name} cube was clicked`);
    });
    interactionManager.add(object);
    scene.add(object);
  }



function animate(callback: { (): void; (arg0: any): void; }) {
    function loop(time: any) {
      callback(time);
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  };


  animate(() => {
    renderer.render(scene, camera);
    interactionManager.update();
  });
*/
//import * as THREE from 'three';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const geoTable = new THREE.BoxGeometry(100, 5, 100, 500);
const matTable = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
const Table = new THREE.Mesh(geoTable, matTable);
const geoBigRedButton = new THREE.CylinderGeometry(10, 10, 5, 200);
const matBigRedButton = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
const BigRedButton = new THREE.Mesh(geoBigRedButton, matBigRedButton);
scene.add(BigRedButton);
scene.add(Table);
Table.position.y = -5;
camera.position.y = 20;
camera.position.z = 20;
camera.rotateX(-45);
function animate() {
    //cylinder.rotation.x += 0.01
    //cylinder.rotation.y += 0.01
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    //stats.update()
    //action.play();
    //mixer.clipAction(moveBlinkClip)
}
;
animate();
