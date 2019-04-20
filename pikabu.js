document.addEventListener("mouseover", main_function);

function create_video_player(url, video_type, comment) {
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
            if ((comment.getElementsByClassName(video_id).length == 0 || comment.getElementsByClassName(video_id) == undefined) && video_id.indexOf('/clip/') == -1) {
                var video = document.createElement("div");
                video.innerHTML =
                    `<div class="${video_id}" style="position:relative;height:0;padding-bottom:56.21%">
                    <iframe src="//player.twitch.tv/?channel=${video_id}&player=facebook&autoplay=false" style="position:absolute;width:100%;height:100%;left:0" width="641" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
                    </iframe>
                 </div>`;
                return video;
            }
            break;
        case 'direct_video':
            var video_id = url.split('/')[url.split('/').length-1]
            if(comment.getElementsByTagName('source').length==0 && comment.getElementsByClassName(video_id).length==0){
                var video = document.createElement("div");
                video.innerHTML =
                    `<div class="${video_id}" style="position:relative;height:0;padding-bottom:56.21%">
                        <video width="641" height="360" style="position:absolute;width:100%;height:100%;left:0" controls="controls">
                            <source src=${url}>
                        </video>
                     </div>`;
                return video
            }
            break;
        case 'audio':
            var video_id = url.split('/')[url.split('/').length-1]
            if(comment.getElementsByTagName('audio').length==0 && comment.getElementsByClassName(video_id).length==0){
                var video = document.createElement("div");
                video.innerHTML =
                    `<div class=${video_id} "><audio style="width:100%;height:36px;left:0" controls src=${url}></audio></div>`;
                return video
            }
            break;
    }
};

function add_video_player() {
    var commentbody = document.getElementsByClassName('comment__content');
    for (var i = 0; i < commentbody.length; i++) {
        var links = commentbody[i].getElementsByTagName("a");
        for (var j = 0; j < links.length; j++) {
            if (links[j].textContent.indexOf("youtu.be") != -1 || links[j].href.indexOf("youtube.com") != -1) {
                if (create_video_player(links[j].href, 'youtube', commentbody[i]) != undefined) {
                    commentbody[i].appendChild(create_video_player(links[j].href, 'youtube', commentbody[i]));
                }
            }
            if (links[j].textContent.indexOf("coub.com/view/") != -1) {
                if (create_video_player(links[j].href, 'coub', commentbody[i]) != undefined) {
                    commentbody[i].appendChild(create_video_player(links[j].href, 'coub', commentbody[i]));
                }
            }
            if (links[j].textContent.indexOf("rutube.ru/video/") != -1) {
                if (create_video_player(links[j].href, 'rutube', commentbody[i]) != undefined) {
                    commentbody[i].appendChild(create_video_player(links[j].href, 'rutube', commentbody[i]));
                }
            }
            if (links[j].textContent.indexOf("vimeo.com/") != -1) {
                if (create_video_player(links[j].href, 'vimeo', commentbody[i]) != undefined) {
                    commentbody[i].appendChild(create_video_player(links[j].href, 'vimeo', commentbody[i]));
                }
            }
            if (links[j].textContent.indexOf("twitch.tv/") != -1) {
                if (create_video_player(links[j].href, 'twitch', commentbody[i]) != undefined) {
                    commentbody[i].appendChild(create_video_player(links[j].href, 'twitch', commentbody[i]));
                }
            }
            if (links[j].href.indexOf(".mp4") != -1 || links[j].href.indexOf(".ogv") != -1 || links[j].href.indexOf(".webm") != -1 ) {
                if (create_video_player(links[j].href, 'direct_video', commentbody[i]) != undefined) {
                    commentbody[i].appendChild(create_video_player(links[j].href, 'direct_video', commentbody[i]));
                }
            }
            if (links[j].href.indexOf(".ogg") != -1 || links[j].href.indexOf(".wav") != -1 || links[j].href.indexOf(".mp3") != -1 ) {
                if (create_video_player(links[j].href, 'audio', commentbody[i]) != undefined) {
                    commentbody[i].appendChild(create_video_player(links[j].href, 'audio', commentbody[i]));
                }
            }

        }
    }
}

function add_call_button() {
    try {
        var reply = document.getElementsByClassName('comment-reply__controls');
        for (var j = 0; j < reply.length; j++) {
            var but = reply[j].getElementsByClassName('comment-reply__attach-files attach butmod');
            if (but.length < 1) {
                var li = document.createElement('li');
                li.innerHTML = '<div class="comment-reply__attach-files attach butmod" title="Призвать администрацию"><span class="user__label hint" data-type="moderators-team"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon--ui__moderator"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon--ui__moderator"></use></svg></span></div>';
                reply[j].appendChild(li);
                but[0].onclick = function (ev) {
                    call_moderators(this);
                };
            }
        }
    } catch (e) {
        console.log(e);
    }
}

function call_moderators(button) {
    var comment = button.offsetParent.getElementsByClassName('input__box')[0].children[0].children[0];
    var commentbody = button.offsetParent.getElementsByClassName('input__input medium-editor-element medium-editor-placeholder')[0];
    var stringMod = '';
    try {
        var moderators = document.getElementsByClassName('community-info-block__content')[3].getElementsByClassName('user__nick');
        for (var i = 0; i < moderators.length; i++) {
            if (i == 4) {
                stringMod = stringMod + '@' + moderators[i].textContent.trim();
                break;
            }
            stringMod = stringMod + '@' + moderators[i].textContent.trim() + ', ';
        }
        comment.textContent = comment.textContent + stringMod;
        commentbody.className = 'input__input medium-editor-element';
    } catch (e) {
        comment.textContent = comment.textContent + '@moderator';
        commentbody.className = 'input__input medium-editor-element';
    }
}

function main_function() {
    add_video_player()
    add_call_button()
}
