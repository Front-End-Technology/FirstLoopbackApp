'use strict';

module.exports = function(Car) {
	Car.disableRemoteMethod('upsertWithWhere' , true);
};
