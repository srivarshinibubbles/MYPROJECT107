navigator.mediaDevices.getUserMedia({audio:true});
classify = ml5.soundClassification('https://teachablemachine.withgoogle.com/models/2tEeOHYPX/', modelReady);

function modelReady()
{
    classifier.classify(gotResults);
}

