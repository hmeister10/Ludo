const core = require('./core');
const viewHandler = require('./viewHandler');

console.log('CORE:', core);
console.log('viewHandler:', viewHandler);

changeState = function(state) {
  viewHandler.changeState(state);
}