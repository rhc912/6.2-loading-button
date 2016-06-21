//var Backbone = require('backbone');
var CharacterCollection = require('./models/person').CharacterCollection;
var SubmitButton = require('./models/main');
var $ = require('jquery');

// var bondCharacters = new CharacterCollection();
//Backbone models
//var bond = new models.SubmitButton({'label': 'Submit', 'load': 'Loading...'});
//var loader = this;
var $button = $('<button class="btn btn-primary">Submit</button>');
$('.app').append($button);

var bondCharacters = new CharacterCollection();

bondCharacters.on('add', function(character){
    $('.app').append(character.get('id') + character.get('bio'));
});

$('.btn-primary').on('click',function(){
  $button.text('Loading...');
  bondCharacters.fetch().done(function(){
    $('.btn-primary').html("Submit");
  });


});


 // var bond = new CharacterCollection();
 // bond.fetch();
 //
 // bond.on('add', function(character){
 //     $('.')append(character.get('id') + character.get('bio'));
 // });
