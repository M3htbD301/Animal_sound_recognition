dog=0;
cat=0;

function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Nr65HVfdE.json',modelReady);
}
function modelReady() {
    classifier.classify(gotResults);

}

function gotResults(error, results) {
    if(error) {
        console.log(error);
    }
    else{
        console.log(results);
        red=Math.floor(Math.random()*255) + 1;
        green=Math.floor(Math.random()*255) + 1;
        blue=Math.floor(Math.random()*255) + 1;
    }
}