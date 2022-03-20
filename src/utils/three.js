import * as THREE from "three";
import { TweenMax, Linear, Elastic } from 'gsap'
import GeometryUtils from "./GeometryUtils";
let index = 0;
let INTERSECTED = 0;
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
function onPointerMove(event) {

    // calculate pointer position in normalized device coordinates
    // (-1 to +1) for both components
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;
}

function execute3DCode(canvasDOM) {

    const shapes = [
        {
            "geoCode": new THREE.CubeGeometry(25, 25, 25),
            // "color": 0x029894,
            "color": 0xffffff,
        },
        {
            "geoCode": new THREE.TorusKnotGeometry(10, 3, 100, 16),
            // "color": 0x029894,
            "color": 0xffffff,
        },
        {
            "geoCode": new THREE.ConeGeometry(25, 50, 30),
            // "color": 0x11659C,
            "color": 0xffffff,
        },
        {
            "geoCode": new THREE.SphereGeometry(25, 33, 33),
            // "color": 0x8F3985,
            "color": 0xffffff,
        },
        {
            "geoCode": new THREE.TetrahedronGeometry(25, 0),
            // "color": 0x029894,
            "color": 0xffffff,
        }
    ],
        transitionShape = {
            "geoCode": new THREE.SphereGeometry(90, 50, 50),
            "color": 0xffffff,
        },
        particleCount = 10000,
        particleSize = 0.50,
        defaultAnimationSpeed = 1,
        color = '#FFFFFF';

    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    renderer.setClearColor(0xffffff, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    //document.body.appendChild(renderer.domElement);

    canvasDOM.current && canvasDOM.current.appendChild(renderer.domElement);



    // Scene
    const scene = new THREE.Scene();
    // Camera and position
    const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 10000);

    camera.position.x = 70;
    camera.position.y = -45;
    camera.position.z = 45;


    // Lighting
    const light = new THREE.AmbientLight(0x222222, 1);
    scene.add(light);

    // Particle Vars
    const particles = new THREE.Geometry();

    const pMaterial = new THREE.PointsMaterial({
        size: particleSize,
    });

    // Texts
    const loader = new THREE.FontLoader();
    const typeface = 'https://dl.dropboxusercontent.com/s/bkqic142ik0zjed/swiss_black_cond.json?';

    //CONTINUE

    loader.load(typeface, (font) => {
        Array.from(shapes).forEach((shape, idx) => {
            shapes[idx].geometry = shapes[idx].geoCode;
            shapes[idx].particles = new THREE.Geometry();
            shapes[idx].points = GeometryUtils.randomPointsInGeometry(shapes[idx].geometry, particleCount);
            createVertices(shapes[idx].particles, shapes[idx].points)
            // enableTrigger(shape, idx, triggers[idx]);
        });

        transitionShape.geometry = transitionShape.geoCode;
        transitionShape.particles = new THREE.Geometry();
        transitionShape.points = GeometryUtils.randomPointsInGeometry(transitionShape.geometry, particleCount);
        createVertices(transitionShape.particles, transitionShape.points)
    });

    // Particles
    for (let i = 0; i < particleCount; i++) {
        const vertex = new THREE.Vector3();
        vertex.x = 0;
        vertex.y = 0;
        vertex.z = 0;
        particles.vertices.push(vertex);
    }

    function createVertices(emptyArray, points) {
        for (var p = 0; p < particleCount; p++) {
            let vertex = new THREE.Vector3();
            vertex.x = points[p]['x'];
            vertex.y = points[p]['y'];
            vertex.z = points[p]['z'];

            emptyArray.vertices.push(vertex);
        }
    }

    let particleSystem = new THREE.Points(
        particles,
        pMaterial
    );

    particleSystem.sortParticles = true;

    // Add the particles to the scene
    scene.add(particleSystem);

    // Animate
    // const normalSpeed = (defaultAnimationSpeed / 100);
    const normalSpeed = (defaultAnimationSpeed / 200);

    let animationVars = {
        speed: normalSpeed,
        color: color,
        rotation: 100
    }
    // const axesHelper = new THREE.AxesHelper(5);
    // scene.add(axesHelper);
    function animate() {

        if (index % 2 === 1) {
            particleSystem.rotation.y += animationVars.speed;
        }
        else {
            particleSystem.rotation.y += 0.0005;
        }
        if (index === 0) {
            camera.position.z = animationVars.rotation;
            camera.position.y = animationVars.rotation;
        }
        camera.lookAt(scene.position.x - 20, scene.position.y - 20, scene.position.z);
        camera.updateMatrixWorld();
        raycaster.setFromCamera(pointer, camera);
        particles.verticesNeedUpdate = true;
        
        particleSystem.material.color = new THREE.Color(animationVars.color);

        // calculate objects intersecting the picking ray
        const intersects = raycaster.intersectObjects(scene.children, false);
        for (let i = 0; i < intersects.length; i++) {
            intersects[i].object.material.color.set(0x00ffff);
        }
        window.requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    animate();

    function morphTo(newParticles, color = '#FFFFFF') {
        TweenMax.to(animationVars, 2, {
            ease: Linear.easeNone,
            color: color
        });

        for (let i = 0; i < particles.vertices.length; i++) {
            TweenMax.to(particles.vertices[i], 2, {
                ease: Elastic.easeOut.config(0.1, .3),
                x: newParticles.vertices[i].x,
                y: newParticles.vertices[i].y,
                z: newParticles.vertices[i].z
            })
        }
    }
    function changeShape() {
        if (index % 2 === 1) {
            morphTo(transitionShape.particles, '#488FB1')
        }
        else {
            morphTo(shapes[index / 2].particles, '#488FB1')
        }
        index++;
        if (index >= 10) {
            index = 0;
        }
        camera.zoom = 1;

    }

    setInterval(changeShape, 4000)

    // Ensure Full Screen on Resize
    function fullScreen() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', fullScreen, false)
    window.addEventListener('pointermove', onPointerMove);

    // function explodeIntoParticles(){
    //     morphTo(transitionShape.particles,'#488FB1');
    // }
}

export default execute3DCode;