import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import './style.css'

const canvasElem = document.querySelector('canvas.canvas-js')

// Сцена
const scene = new THREE.Scene()

// Объект и его геометрия и материал
const geometry = new THREE.BoxGeometry(1,1,1,1)
const material = new THREE.MeshBasicMaterial({color: 'purple', wireframe:true})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)
// Размеры сцены и отрисовщика
const size = {
    width: 600,
    height: 600
}
// Камера и её позиция
// const camera = new THREE.PerspectiveCamera(75, size.width / size.height, 1);
const camera = new THREE.OrthographicCamera(-1, 1, 1, - 1, 0.1, 200);
camera.position.z = 3;
scene.add(camera)

// Создади объект отрисовщика и укажим размер
const renderer = new THREE.WebGLRenderer({
    canvas:canvasElem
});
renderer.setSize(size.width, size.height)

// // Передвижение куба
// mesh.position.set(0,0, -0.3)

// Масштабирование куба
mesh.scale.set(1, 1, 1)

// Время
const clock = new THREE.Clock();

const controls = new OrbitControls(camera, canvasElem)
controls.enableDamping = true

mesh.rotation.x = Math.PI * 0.25
mesh.rotation.y = Math.PI * 0.25

const cursor = {
    x: 0,
    y: 0,
}
// canvasElem.addEventListener("mousemove", (event) => {
//     cursor.x = -(event.clientX / size.width - 0.5)
//     cursor.y = event.clientY / size.height - 0.5
//     console.log(event.clientX, event.clientY);
// })

const tick = () => {
    window.requestAnimationFrame(tick)
    controls.update()
    renderer.render(scene, camera)
    // camera.position.x = Math.cos(cursor.x * Math.PI * 2) * 2
    // camera.position.z = Math.sin(cursor.x * Math.PI * 2) * 2
    // camera.position.y = cursor.y * 3
    // camera.lookAt(mesh.position)
    // cursor.x = event.clientX / size.width - 0.5
    // cursor.y = event.clientY / size.height - 0.5
    

}

tick()

// // Отрисовка осей
// const axesHelper = new THREE.AxesHelper(3)
// scene.add(axesHelper)

// // Позиция камеры
// camera.lookAt( new THREE.Vector3(0, 0, -1))
// camera.lookAt( mesh.position)

// // Создание группы объектов
// const group = new THREE.Group()
// group.scale.y = 0.7;
// group.rotation.x= 0.5
// scene.add(group)

// const cube1 = new THREE.Mesh(geometry, material)
// cube1.position.x= -1.2
// group.add(cube1)
// const cube2 = new THREE.Mesh(geometry, material)
// cube2.position.x= 0
// group.add(cube2)
// const cube3 = new THREE.Mesh(geometry, material)
// cube3.position.x= 1.2
// group.add(cube3)

// // длина вектора
// console.log(mesh.position.length());
// // длина вектора до камеры
// console.log(mesh.position.distanceTo(camera.position));
// // уменьшить длину вектора до 1, но оставить направление
// console.log(mesh.position.normalize());