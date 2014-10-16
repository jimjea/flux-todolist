var Dispatcher = require('flux').Dispatcher;
var copyProperties = require('react/lib/copyProperties');

var AppDispatcher = merge(Dispatcher.prototype, {
	handleViewAction: function(action) {
    console.log(action);
		this.dispatch({
	    source: 'VIEW_ACTION',
      action: action
		});
	}
});

module.exports = AppDispatcher;