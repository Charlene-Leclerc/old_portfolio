
$("#trailer-screen").click(function () {
    var video = document.getElementById("main-video");



    var newType = 'video/mp4';//new type here
    //delete all existing sources of the video
    var oldSources = video.getElementsByTagName('source');
    var l = oldSources.length;
    while(l--)
    {
        video.removeChild(oldSources[l])
    }
    video.load();
    var src = document.createElement('source');
    src.src= document.getElementById('trailer-mp4').getElementsByTagName('source')[0].src;
    src.type= newType;
    video.appendChild(src);
    video.volume = 0.1;
});


$("#map").click(function () {

    var video = document.getElementById("main-video");

    var newType = 'video/mp4';//new type here
    //delete all existing sources of the video
    var oldSources = video.getElementsByTagName('source');
    var l = oldSources.length;
    while(l--)
    {
        video.removeChild(oldSources[l])
    }
    video.load();
    var src = document.createElement('source');
    src.src= document.getElementById('map-mp4').getElementsByTagName('source')[0].src;
    src.type= newType;
    video.appendChild(src);
    video.volume = 0.1;
});


$("#perso").click(function () {

    var video = document.getElementById("main-video");

    var newType = 'video/mp4';//new type here
    //delete all existing sources of the video
    var oldSources = video.getElementsByTagName('source');
    var l = oldSources.length;
    while(l--)
    {
        video.removeChild(oldSources[l])
    }
    video.load();
    var src = document.createElement('source');
    src.src= document.getElementById('perso-mp4').getElementsByTagName('source')[0].src;
    src.type= newType;
    video.appendChild(src);
    video.volume = 0.1;
});


$("#reseau").click(function () {

    var video = document.getElementById("main-video");

    var newType = 'video/mp4';//new type here
    //delete all existing sources of the video
    var oldSources = video.getElementsByTagName('source');
    var l = oldSources.length;
    while(l--)
    {
        video.removeChild(oldSources[l])
    }
    video.load();
    var src = document.createElement('source');
    src.src= document.getElementById('reseau-mp4').getElementsByTagName('source')[0].src;
    src.type= newType;
    video.appendChild(src);
    video.volume = 0.1;
});