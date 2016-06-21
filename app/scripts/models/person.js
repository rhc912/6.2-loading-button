var Backbone = require('backbone');

var Character = Backbone.Model.extend({
  defaults: {
    id: "id",
    name: "name",
    bio: "bio"
  }
});
//console.log(Character.extend());
var CharacterCollection = Backbone.Collection.extend({
  model: Character,
  url: 'http://007api.co/api/characters/',
  parse: function(response) {
    return response.results;
  }
});


module.exports = {
  'Character': Character,
  'CharacterCollection': CharacterCollection
}
