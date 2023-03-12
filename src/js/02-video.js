import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const currentTime = "videoplayer-current-time";

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);
 
    player.on('play', function () {
        console.log('played the video!');
    });

const getCurrentTime = function (event) {
    localStorage.setItem(currentTime, event.seconds);
};

    player.on('timeupdate', throttle(getCurrentTime, 1000));

    player.setCurrentTime(localStorage.getItem(currentTime));