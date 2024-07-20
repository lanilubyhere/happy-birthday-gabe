document.getElementById('playSong').addEventListener('click', function() {
    var song = document.getElementById('birthdaySong');
    song.play();
});

document.getElementById('showLetter').addEventListener('click', function() {
    var letter = document.getElementById('letter');
    if (letter.classList.contains('hidden')) {
        letter.classList.remove('hidden');
    } else {
        letter.classList.add('hidden');
    }
});
