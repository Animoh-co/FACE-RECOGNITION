Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function Takeshot(){
    Webcam.snap(function(data){
        document.getElementById("result").innerHTML ="<img id='picture' src='"+data+"'>"; 
    });
}

console.log("ml5 version:", ml5.version);
machine=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/BJyQhPMq4/model.json", modelupload)

function modelupload(){
    console.log("model had been loaded");
}

function Checking(){
    img=document.getElementById("picture");
    machine.classify(img, gotResult); 
}


function gotResult(error, result){
if(error){
    console.error(error);
}
else{
    console.log(result);
    document.getElementById("resultofperson").innerHTML = result[0].label;
    document.getElementById("accuracyforresult").innerHTML = result[0].confidence.toFixed(3);
}
}