function setup(){
    canvas=createCanvas(350,350);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/y8rapu5OL/model.json',modelLoaded)
}
function modelLoaded(){
    console.log('model is loaded');
}
function draw(){
    image(video,0,0,350,350);
    classifier.classify(video,gotResult);
}
function gotResult(error,results){
     if(error){
         console.error(error);
     }
     else{
         console.log(results);
         document.getElementById("name_face_member").innerHTML=results[0].label;
         document.getElementById("name_accuracy_member").innerHTML=results[0].confidence.toFixed(3);
     }
}