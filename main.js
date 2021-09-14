RightWristX = 0;
RightWristY = 0;
scoreRightWrist = 0;


function preload() {
}

function setup() {
    canvas = createCanvas(450, 500);
    canvas.parent('canvas');

    video = createCapture(VIDEO);
    video.size(450, 500)
    video.hide();
   
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('model loaded !');
}


function gotPoses() {
  if(results.length > 0)
  {
    RightWristX = results[0].pose.RightWristX.x;
    RightWristY = results[0].pose.RightWristY.y;
    scoreRightWrist = results[0].pose.keypoints[10].score;
    console.log('scoreRightWrist');
  }
}
function draw(){
  image(video, 0, 0, 450, 500);

  if(scoreRightWrist > 0.2)
  {
    fill("red");
    stroke("red");
    circle(rightWristX, rightWristY, 20);
  }
}