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

  $('.d').on('click', function() {
    // play the note
    $('#dAudio')[0].play();
    // reset to the start so
    $('#dAudio')[0].currentTime = 0;
    // playNote('c');
  }); // .on

  $('.e').on('click', function() {
    // play the note
    $('#eAudio')[0].play();
    // reset to the start so
    $('#eAudio')[0].currentTime = 0;
    // playNote('c');
  }); // .on

  $('.f').on('click', function() {
    // play the note
    $('#fAudio')[0].play();
    // reset to the start so
    $('#fAudio')[0].currentTime = 0;
    // playNote('c');
  }); // .on

  $('.g').on('click', function() {
    // play the note
    $('#gAudio')[0].play();
    // reset to the start so
    $('#gAudio')[0].currentTime = 0;
    // playNote('c');
  }); // .on

  $('.a').on('click', function() {
    // play the note
    $('#aAudio')[0].play();
    // reset to the start so
    $('#aAudio')[0].currentTime = 0;
    // playNote('c');
  }); // .on

  $('.b').on('click', function() {
    // play the note
    $('#bAudio')[0].play();
    // reset to the start so
    $('#bAudio')[0].currentTime = 0;
    // playNote('c');
  }); // .on


  $('body').keypress(function(e) {
    let note = String.fromCharCode(e.which)
    if (note === 'c') {
      $('#cAudio')[0].play();
      // reset to the start so
      $('#cAudio')[0].currentTime = 0;
    } else if (note === 'd') {
      $('#dAudio')[0].play();
      // reset to the start so
      $('#dAudio')[0].currentTime = 0;
    } else if (note === 'e') {
      $('#eAudio')[0].play();
      // reset to the start so
      $('#eAudio')[0].currentTime = 0;
    } else if (note === 'f') {
      $('#fAudio')[0].play();
      // reset to the start so
      $('#fAudio')[0].currentTime = 0;
    } else if (note === 'g') {
      $('#gAudio')[0].play();
      // reset to the start so
      $('#gAudio')[0].currentTime = 0;
    } else if (note === 'a') {
      $('#aAudio')[0].play();
      // reset to the start so
      $('#aAudio')[0].currentTime = 0;
    } else if (note === 'b') {
      $('#bAudio')[0].play();
      // reset to the start so
      $('#bAudio')[0].currentTime = 0;
    } // if else if
  }) // keypress
}); // .ready
