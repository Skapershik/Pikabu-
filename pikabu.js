document.addEventListener("mouseover", main_function);

function create_video_player (url, video_type,comment) {
switch (video_type) {
    case 'youtube':
        var video_id = url.replace("https://", "").replace("http://", "").replace("youtu.be/", "").replace("youtube.com/watch?v=", "").replace("m.", "").replace("www.", "").split('&')[0];
        if (comment.getElementsByClassName(video_id).length == 0 || comment.getElementsByClassName(video_id) == undefined) {
            var video = document.createElement("div");
            video.innerHTML =
                `<div class="${video_id}" style="position:relative;height:0;padding-bottom:56.21%">
                    <iframe src="https://www.youtube.com/embed/${video_id}" style="position:absolute;width:100%;height:100%;left:0" width="641" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
                    </iframe>
                 </div>`;
            return video;
        }
        break;
    case 'coub':
        var video_id = url.replace("https://coub.com/view/", "").replace("http://coub.com/view/", "");
        if (comment.getElementsByClassName(video_id).length == 0 || comment.getElementsByClassName(video_id) == undefined) {
            var video = document.createElement("div");
            video.innerHTML =
                `<div class="${video_id}" style="position:relative;">
                    <iframe src="https://coub.com/embed/${video_id}?muted=false&amp;autostart=false&amp;originalSize=false&amp;hideTopBar=false&amp;startWithHD=true" allowfullscreen="true" frameborder="0" width="100%" height="350em">
                    </iframe>
                 </div>`;
            return video;
        }
        break;
    case 'rutube':
        var video_id = url.replace("https://rutube.ru/video/", "").replace("http://rutube.ru/video/", "");
        if (comment.getElementsByClassName(video_id).length == 0 || comment.getElementsByClassName(video_id) == undefined) {
            var video = document.createElement("div");
            video.innerHTML =
                `<div class="${video_id}" style="position:relative;">
                    <iframe width="641" height="360" src="https://rutube.ru/play/embed/${video_id}" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowfullscreen>
                    </iframe>
                 </div>`;
            return video;
        }
        break;
    case 'vimeo':
        var video_id = url.replace("https://vimeo.com/", "").replace("http://vimeo.com/", "");
        if (comment.getElementsByClassName(video_id.toString()).length == 0 || comment.getElementsByClassName(video_id.toString()) == undefined) {
            var video = document.createElement("div");
            video.innerHTML =
                `<div class="${video_id}" style="position:relative;">
                    <iframe src="https://player.vimeo.com/video/${video_id}" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                    </iframe>
                 </div>`;
            return video;
        }
        break;
    case 'twitch':
        var video_id = url.replace("https://", "").replace("http://", "").replace("www.twitch.tv/", "").replace("twitch.tv/", "");
        if ((comment.getElementsByClassName(video_id).length == 0 || comment.getElementsByClassName(video_id) == undefined) && video_id.indexOf('/clip/')==-1) {
            var video = document.createElement("div");
            video.innerHTML =
                `<div class="${video_id}" style="position:relative;height:0;padding-bottom:56.21%">
                    <iframe src="//player.twitch.tv/?channel=${video_id}&player=facebook&autoplay=false" style="position:absolute;width:100%;height:100%;left:0" width="641" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
                    </iframe>
                 </div>`;
            return video;
        }
        break;
}
};

//Добавить проверку для appendChild
function main_function() {
    var commentbody = document.getElementsByClassName('comment__content');
    //var commentbody = document.getElementsByClassName('comment');
    for (var i = 0; i < commentbody.length; i++) {
        var links = commentbody[i].getElementsByTagName("a");
        for (var j = 0; j < links.length; j++) {
            if(links[j].textContent.indexOf("youtu.be") != -1 || links[j].href.indexOf("youtube.com") != -1) {
                if(create_video_player(links[j].href, 'youtube',commentbody[i])!=undefined){
                    commentbody[i].appendChild(create_video_player(links[j].href, 'youtube',commentbody[i]));
                }
            }
            if(links[j].textContent.indexOf("coub.com/view/")!=-1) {
                if(create_video_player(links[j].href, 'coub',commentbody[i])!=undefined){
                    commentbody[i].appendChild(create_video_player(links[j].href, 'coub',commentbody[i]));
                }
            }
            if(links[j].textContent.indexOf("rutube.ru/video/")!=-1) {
                if(create_video_player(links[j].href, 'rutube',commentbody[i])!=undefined){
                    commentbody[i].appendChild(create_video_player(links[j].href, 'rutube',commentbody[i]));
                }
            }
            if(links[j].textContent.indexOf("vimeo.com/")!=-1) {
                if(create_video_player(links[j].href, 'vimeo',commentbody[i])!=undefined){
                    commentbody[i].appendChild(create_video_player(links[j].href, 'vimeo',commentbody[i]));
                }
            }
            if(links[j].textContent.indexOf("twitch.tv/")!=-1) {
                if(create_video_player(links[j].href, 'twitch',commentbody[i])!=undefined){
                    commentbody[i].appendChild(create_video_player(links[j].href, 'twitch',commentbody[i]));
                }
            }

        }
    }
}

