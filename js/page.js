const pageNavItem = document.querySelectorAll('.page-nav--item');
const pageHelp = document.querySelector('.page-help');
const pageHelpClose = document.querySelector('#close_icon');
const shuffleAll = document.querySelector('#shuffle');
const dateAdded = document.querySelector('#date');
const allGenre = document.querySelector('#genre');
const musicBlock = document.querySelector('.page-music--block');
const musicItem = document.querySelector('.music-item');
const musicTitle = document.querySelector('.music-title');
const musicArtist = document.querySelector('.music-artist');
const musicAlbum = document.querySelector('.music-artist');
const musicGenre = document.querySelector('.music-genre');
const musicTime = document.querySelector('.music-time');

for(i=0; i<pageNavItem.length; i++){
    const active = pageNavItem[i];
    active.onclick = function(){
        active.style.borderBottom = '3px solid #089ED6';
        active.style.color = 'white';
    }
}

pageHelpClose.onclick = function(){
    pageHelp.style.display = 'none';
}

// let systemName = prompt('Please enter your desktop name: (ex: "Oduntan\'s")')

for(let i = 1; i <= 37; i++){
    const newMusicItem = document.createElement('audio');
    newMusicItem.setAttribute('src', `music/track (${i}).mp3`);
    newMusicItem.setAttribute('type', 'audio/mp3');
    musicItem.append(newMusicItem);
}

const audioItem = document.getElementsByTagName('audio');

//let ID3 = require('ID3');

for(i = 0; i < audioItem.length; i++){
    ID3.read(audioItem[i].src, function(){
        let tags  = ID3.getAllTags(audioItem[i].src);
        alert(tags.artist);
    })
}