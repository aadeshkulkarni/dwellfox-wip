import * as THREE from "three";
import {gsap,TweenMax,Linear,Elastic} from 'gsap'
import GeometryUtils from "./GeometryUtils";
function execute3DCode(canvasDOM) {

    const shapes = [
        {
            "geoCode": new THREE.TorusKnotGeometry(10, 3, 100, 16),
            // "color": 0x029894,
            "color": 0xffffff,
        },
        {
            "geoCode": new THREE.DodecahedronGeometry(25, 0),
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
        particleCount = 2000,
        particleSize = 1,
        defaultAnimationSpeed = 1,
        morphAnimationSpeed = 18,
        color = '#FFFFFF';

    // Renderer
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    renderer.setClearColor(0xffffff, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    //document.body.appendChild(renderer.domElement);
    canvasDOM.current.appendChild(renderer.domElement);

    // Ensure Full Screen on Resize
    function fullScreen() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    // window.addEventListener('resize', fullScreen, false)

    // Scene
    const scene = new THREE.Scene();
    // scene.background = new THREE.Color( 0xffffff );
    // Camera and position
    const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 10000);

    camera.position.x = 45;
    camera.position.y = -45;
    camera.position.z = 45;


    // Lighting
    const light = new THREE.AmbientLight(0xEEEEEE, 1);
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
            const material = new THREE.MeshLambertMaterial({
                color: shapes[idx].color,
                opacity: .5,
                transparent: true,
                wireframe: true
            });
            const mesh = new THREE.Mesh(shapes[idx].geometry, material);
            //THREE.GeometryUtils.center(shapes[idx].geometry)
            //scene.add(mesh);
            shapes[idx].particles = new THREE.Geometry();
            shapes[idx].points = GeometryUtils.randomPointsInGeometry(shapes[idx].geometry, particleCount);
            createVertices(shapes[idx].particles, shapes[idx].points)
           // enableTrigger(shape, idx, triggers[idx]);
        });
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

    // function enableTrigger(trigger, idx, el) {
    //     el.setAttribute('data-disabled', false);

    //     el.addEventListener('click', () => {
    //         morphTo(shapes[idx].particles, el.dataset.color);
    //     })

    //     if (idx == 0) {
    //         morphTo(shapes[idx].particles, el.dataset.color);
    //     }
    // }

    let particleSystem = new THREE.Points(
        particles,
        pMaterial
    );

    particleSystem.sortParticles = true;

    // Add the particles to the scene
    scene.add(particleSystem);

    // Animate
    const normalSpeed = (defaultAnimationSpeed / 100),
        fullSpeed = (morphAnimationSpeed / 100)

    let animationVars = {
        speed: normalSpeed,
        color: color,
        rotation: 100
    }

    function animate() {
        particleSystem.rotation.y += animationVars.speed;
        particles.verticesNeedUpdate = true;

        camera.position.z = animationVars.rotation;
        camera.position.y = animationVars.rotation;
        camera.lookAt(scene.position.x - 20, scene.position.y - 20, scene.position.z);

        particleSystem.material.color = new THREE.Color(animationVars.color);

        window.requestAnimationFrame(animate);
        renderer.render(scene, camera);

    }

    animate();

    function morphTo(newParticles, color = '#FFFFFF') {

        TweenMax.to(animationVars, 2, {
            ease: Linear.easeNone,
            color: color
        });

        particleSystem.material.color.setHex(color);

        for (let i = 0; i < particles.vertices.length; i++) {
            TweenMax.to(particles.vertices[i], 2, {
                ease: Elastic.easeOut.config(0.1, .3),
                x: newParticles.vertices[i].x,
                y: newParticles.vertices[i].y,
                z: newParticles.vertices[i].z
            })
        }
    }
    let index = 0;
    setInterval(() => {
        morphTo(shapes[index].particles)
        index++;
        if (index >= 5) {
            index = 0;
        }
        camera.zoom = 1;
    }, 1500)
}
export default execute3DCode;