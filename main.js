function check()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/VRwVHR8GI/model.json', modelLoaded);
}
function modelLoaded()
{
    classifier.classify(getResult)
    
}
function getResult(e, r) {
    if (e) {
console.error(e);
    }
    else{
        console.log(r);
        soundname=r[0].label;
        soundaccuracy=r[0].confidence
        document.getElementById("result_label").innerHTML="i can hear "+soundname;
        document.getElementById("result_confidence").innerHTML="accuracy "+(soundaccuracy*100).toFixed(2);
        pic=document.getElementById("ear")
        if(soundname == "mooing"){
            pic.src="cow.jpeg"
        }
        else if(soundname == "meowing"){
            pic.src="cat.jpeg"
        }
        else if(soundname == "roaring"){
            pic.src="lion.jpeg"
        }
        else if(soundname == "barking"){
            pic.src="dog.jpeg"
        }
        else {
            pic.src="ear.png"
        }
        


    }
}