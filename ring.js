var version = "1.0";
var versiontext = document.getElementById("versionnumber");
var songnametxt = document.getElementById("songname");
var songtimetxt = document.getElementById("songtime");
var playbutt = document.getElementById("playbutt");
var isPlaying = false;
console.log("RingMusic Version:" + version);
versiontext.innerHTML+= version;

function playSong(songname, songduration){
    var playsong  = new Audio('songs/' + songname + '.mp3');
    playsong.pause();
    songnametxt.innerHTML = songname;
    songtimetxt.innerHTML = songduration;
    playsong.play();
    function togglePlay() {
        isPlaying ? playsong.pause() : playsong.play();
    };
    
    playsong.onplaying = function() {
        isPlaying = true;
        playbutt.innerHTML = "||";
    };
    playsong.onpause = function() {
        isPlaying = false;
        playbutt.innerHTML = "▶";
    };
    document.title = songname;
    playbutt.onclick = function(){togglePlay();};
}