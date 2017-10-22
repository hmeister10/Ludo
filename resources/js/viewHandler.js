const changeState = function(state) {
  $('.state').addClass('hide');
  $('#'+state).removeClass('hide');
};

module.exports = {
 changeState
}