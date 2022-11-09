import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'

import './style.css'

const canvasElem = document.querySelector('canvas.canvas-js')
const gui = new dat.GUI({ closed: true, width: 400 })
// Сцена
const scene = new THREE.Scene()

// Текстуры
const loadingManager = new THREE.LoadingManager()
loadingManager.onStart = () => {
    console.log('loading started');
} 
loadingManager.onLoad = () => {
    console.log('loading finished');
}
loadingManager.onProgress = () => {
    console.log('loading progressing');
}
loadingManager.onError = () => {
    console.log('loading error');
}

const textureLoader = new THREE.TextureLoader(loadingManager)
const colorTexture = textureLoader.load('/textures/door/color.jpg')
const alphaTexture = textureLoader.load('/textures/door/alpha.jpg')
const heightTexture = textureLoader.load('/textures/door/height.png')
const normalTexture = textureLoader.load('/textures/door/normal.jpg')

// Благодаря этому св-ву можно повторять текстуру
// colorTexture.wrapS = THREE.RepeatWrapping
// colorTexture.wrapT = THREE.RepeatWrapping
// Повтор текстур
// colorTexture.repeat.x = 3
// colorTexture.repeat.y = 2
// Вращение текстур
colorTexture.rotation = Math.PI * 0.25
// Центрировать текстуру
colorTexture.center.x = 0.5;
colorTexture.center.y = 0.5;
// Смещение текстуры
colorTexture.offset.x = -0.2
colorTexture.offset.y = -0.1

// Объект и его геометрия и материал
const geometry = new THREE.BoxGeometry(1,2,2,1)
const material = new THREE.MeshBasicMaterial({map: colorTexture})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)
const parameters = {
    color: 0xff0000,
}
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
// helper panel
gui.add(mesh.position, 'x', -3, 3, 0.01)
gui.addColor(parameters, 'color')
.onChange(() => {
    material.color.set(parameters.color)
})
// Отрисовка вспомогательных осей
const axesHelper = new THREE.AxesHelper(3)
scene.add(axesHelper)

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