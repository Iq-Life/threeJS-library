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
    width: window.innerWidth,
    height: window.innerHeight
}
// Обработка изменения размера
window.addEventListener('resize', () => {
    size.width = window.innerWidth
    size.height = window.innerHeight
    // Обновляем соотношение сторон
    camera.aspect = size.width / size.height
    // при изменении св-ва камеры необходимо обновить матрицу проекции !!!
    camera.updateProjectionMatrix()
    
    // перерисовка и обработка соотношения пикселей для девайса
    renderer.setSize(size.width, size.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

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

const tick = () => {
    window.requestAnimationFrame(tick)
    controls.update()
    renderer.render(scene, camera)
}
tick()

window.addEventListener('dblclick', () => {
    if (!document.fullscreenElement) {
        canvasElem.requestFullscreen()
    } else {
        document.exitFullscreen()
    }
})
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