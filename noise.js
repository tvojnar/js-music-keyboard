// TODO: get this method to work so I can DRY my code
// QUESTION: how can I do string interpolation in a jQuery object to be able to select the right element by id?
const playNote = (note) => {
  // concatinate to make the correct id name 
  let toPlay = note + 'Audio'
  // play the note
  $(`#${toPlay}`)[0].play();
  // reset to the start so it can play again without refreshing the page
  $(`#${toPlay}`)[0].currentTime = 0;
} // end playNote

$(document).ready( function() {
  $('.c').on('click', function() {
    playNote('c');
  }); // .on

  $('.d').on('click', function() {
    playNote('d');
  }); // .on

  $('.e').on('click', function() {
    playNote('e');
  }); // .on

  $('.f').on('click', function() {
    playNote('f');
  }); // .on

  $('.g').on('click', function() {
    playNote('g');
  }); // .on

  $('.a').on('click', function() {
    playNote('a');
  }); // .on

  $('.b').on('click', function() {
    playNote('b');
  }); // .on


  $('body').keypress(function(e) {
    let note = String.fromCharCode(e.which)
    if (note === 'c') {
      playNote('c');
    } else if (note === 'd') {
      playNote('d');
    } else if (note === 'e') {
      playNote('e');
    } else if (note === 'f') {
      playNote('f');
    } else if (note === 'g') {
      playNote('g');
    } else if (note === 'a') {
      playNote('a');
    } else if (note === 'b') {
      playNote('b');
    } // if else if
  }) // keypress
}); // .ready
