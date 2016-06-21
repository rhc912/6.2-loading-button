var Backbone = require('backbone');
var $ = require('jquery');

var SubmitButton = Backbone.Model.extend({
  defaults: {
    label: 'Submit',
    load: 'Loading...'
  },
  initialize: function(){
    console.log('initialize');

  }
})







module.exports = SubmitButton;
