left_wrist_x = 0;
right_wrist_x = 0;
difference = 0;

function preload()
{
}

function setup()
{
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(10, 200);

    canvas = createCanvas(500, 500);
    canvas.position(560, 130);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw()
{
    background('#6C91C2');
    document.getElementById("font_size").innerHTML = "Font Size Of The Text Will Be = "+difference+"px";
    textSize(difference);
    fill("#ooffoa");
    text("Ojasvi", 50, 400);
}

function modelLoaded()
{
    console.log("posenet is initialised");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;

        difference = floor(left_wrist_x - right_wrist_x);

        console.log("rightwrist_x = "+results[0].pose.rightWrist.x+" rightwrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftwrist_x = "+results[0].pose.leftWrist.x+" leftwrist_y = "+results[0].pose.leftWrist.y);
    }
}