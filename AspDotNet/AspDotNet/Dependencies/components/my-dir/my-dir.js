import template from './my-dir.html'

export default angular.module('cc.my-dir', [])
	.controller('MyDirController', MyDirController)
	.directive('ccMyDir', MyDirDirective);

function MyDirDirective() {
	return {
		restrict: 'E',
		scope: {},
		bindToController: {

		},
		controllerAs: '$ctrl',
		template: template,
		controller: MyDirController
	};
}

function MyDirController() {
    var self = this;
    self.um = {
        msg: "Hello from the directive!"
    };
}