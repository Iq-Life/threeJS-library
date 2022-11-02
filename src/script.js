import * as THREE from 'three'
import './style.css'

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
const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
camera.position.z = 3;
scene.add(camera)

// Создади объект отрисовщика и укажим размер
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('canvas.canvas-js')
});
renderer.setSize(size.width, size.height)

// Отрисовка осей
const axesHelper = new THREE.AxesHelper(3)
scene.add(axesHelper)

// Передвижение куба
mesh.position.set(0,0,-0.4)

// Масштабирование куба
mesh.scale.set(1, 1, 1)

// Время
const clock = new THREE.Clock();

const animateLoop = () => {

    const elapsedTime = clock.getElapsedTime()
    
    mesh.position.x = Math.cos(elapsedTime);
    mesh.position.y = Math.sin(elapsedTime);
    camera.position.x = Math.cos(-elapsedTime);
    camera.position.y = Math.sin(-elapsedTime);
    camera.lookAt(mesh.position);

    renderer.render(scene, camera)

    window.requestAnimationFrame(animateLoop)
}

animateLoop()

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