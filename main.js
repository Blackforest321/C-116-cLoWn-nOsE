noseX=0;
noseY=0;
function preload()
{
clown_nose=loadImage('https://i.postimg.cc/VNyG5VSj/image-removebg-preview-4.png');
}

function setup()
{
canvas= createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}

function gotPoses(results)
{
if(results.length > 0){
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log("nose x is:" + noseX);
console.log("nose y is:" + noseY);
}
}

function modelLoaded()
{
    console.log("posenet is loaded!");
}

function draw()
{
    image(video,0,0,300,300);
    image(clown_nose,noseX-25,noseY-20  ,50,50);

}

function take_snapshot()
{
save("im_a_clown!.png");
}
