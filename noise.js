const playNote = (note) => {
let toPlay = note + 'Audio'
let play = $(`##{toPlay}`)[0];
console.log(play);
// play the note
$(`#${toPlay}`)[0].play();
// reset to the start so it can play again without refreshing the page
$(`#${toPlay}`)[0].currentTime = 0;
} // end playNote

$(document).ready( function() {
  $('.c').on('click', function() {
    // play the note
    $('#cAudio')[0].play();
    // reset to the start so
    $('#cAudio')[0].currentTime = 0;
    // playNote('c');
  }); // .on


$('body').keypress(function(e) {
  let note = String.fromCharCode(e.which)
  if (note === 'c') {
  $('#cAudio')[0].play();
  // reset to the start so
  $('#cAudio')[0].currentTime = 0;
} // if
})


});
