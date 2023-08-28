
$("#trailer-screen").click(function () {
    var video = document.getElementById("main-video");

    var newType = 'video/mp4';
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


$("#rebuild").click(function () {

    var video = document.getElementById("main-video");


    var newType = 'video/mp4';
    var oldSources = video.getElementsByTagName('source');
    var l = oldSources.length;
    while(l--)
    {
        video.removeChild(oldSources[l])
    }
    video.load();
    var src = document.createElement('source');
    src.src= document.getElementById('rebuild-mp4').getElementsByTagName('source')[0].src;
    src.type= newType;
    video.appendChild(src);
    video.volume = 0.1;
});


$("#grind").click(function () {

    var video = document.getElementById("main-video");

    var newType = 'video/mp4';
    var oldSources = video.getElementsByTagName('source');
    var l = oldSources.length;
    while(l--)
    {
        video.removeChild(oldSources[l])
    }
    video.load();
    var src = document.createElement('source');
    src.src= document.getElementById('grind-mp4').getElementsByTagName('source')[0].src;
    src.type= newType;
    video.appendChild(src);
    video.volume = 0.1;
});