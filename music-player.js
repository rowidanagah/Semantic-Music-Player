
audio = document.getElementById("audio-player");
audioSource = document.getElementById("audioSource");

lst = ["canon.mp3", "dream.mp3","hero.mp3", "mombasa.mp3", "swan-lake.mp3"]
min = 0 ;
max = lst.length

/*
function repeat(){
    audioSource = document.getElementById("audioSource");
    reff = audioSource.src
    ref = reff.split("/")
    console.log(ref[ref.length-1])
    console.log(`AudioSamples/${ref[ref.length-1]}`)
    reff.split()
    newaudio = new Audio();
    newaudio.src = `AudioSamples/${ref[ref.length-1]}`
    console.log(newaudio)
    debugger;
    newaudio.play();
}
*/

function Repeat(){
    reff = audioSource.src
    ref = reff.split("/")
    audio.src = `AudioSamples/${ref[ref.length-1]}`
    audio.play();

}

function play(){
    console.log("play")
    audio.play();
}

function shuffle(){
    indx = Math.floor(Math.random()* (max - min) + min);
    audio.src = `AudioSamples/${lst[indx]}`;
    console.log(`AudioSamples/${lst[indx]}`, audio.src)
    audio.play();
}

function pause(){   
    audio.pause();
}
function nextaudio(){
    reff = audio.src
    ref = reff.split("/")
    indx = lst.indexOf(ref[ref.length-1]) + 1
    console.log(ref[ref.length-1] , indx % max , `AudioSamples/${lst[indx % max]}` )
    audio.src = `AudioSamples/${lst[indx % max]}`;
    console.log(audio.src)
    audio.play();
}

function prvaudio(){
    reff = audio.src
    ref = reff.split("/")
    indx = (lst.indexOf(ref[ref.length-1]) - 1) % max 
    idx = indx < 0 ? indx + max : indx

    console.log("index  " + idx  )
    console.log("src is", `AudioSamples/${lst[idx]}` )
    audio.src = `AudioSamples/${lst[idx]}`;
    console.log(audio.src)
    audio.play();
}

/*list.onclick = function(e) {
    e.preventDefault();
  
    var elm = e.target;
    var audio = document.getElementById('audio');
  
    var source = document.getElementById('audioSource');
    source.src = elm.getAttribute('data-value');
  
    audio.load(); //call this to just preload the audio without playing
    audio.play(); //call this to play the song right away
  };
*/

audiofile = document.getElementById('al-add');

var blob = window.URL || window.webkitURL;

audiofile.addEventListener('change', function(event){

    console.log('change on input#file triggered');
    var file = this.files[0],
    fileURL = blob.createObjectURL(file);
   
    console.log('File BlobURL: '+ fileURL);
    console.log('File BlobURL: '+ fileURL);
    audio.src = fileURL;
    audio.play()

});
/*play from lst */
list.onclick = function(e) {
    audio = document.getElementById("audio-player");
    console.log(audio)
    e.preventDefault();
  
    var element = e.target;
    audio.src = element.getAttribute('data-value');

    audio.load(); //call this to just preload the audio without playing
    audio.play(); 
  };