// module aliases
let Engine = Matter.Engine,
Render = Matter.Render,
World = Matter.World,
Bodies = Matter.Bodies;

let engine, render, boxA, boxB, ground;

function setup() {
    let canvas = createCanvas(800, 600);

    // create an engine
    engine = Engine.create();

    // create a renderer
    render = Render.create({
    element: document.body,
    engine: engine
    });

    // create two boxes and a ground
    boxA = Bodies.rectangle(400, 200, 80, 80);
    boxB = Bodies.rectangle(450, 50, 80, 80);
    ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

    // add all of the bodies to the world
    World.add(engine.world, [boxA, boxB, ground]);

    // run the engine
    Engine.run(engine);

    // run the renderer
    Render.run(render);
}

function draw() {
    background(51);

    // noStroke();
    for(let body of engine.world.bodies) {
        beginShape();
        for (let vertice of body.vertices) {
            vertex(vertice.x, vertice.y);
        }
        endShape(CLOSE);
    }
}