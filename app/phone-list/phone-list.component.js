'use strict';
// // Register `phoneList` component, along with its associated controller and template
// angular.
//   module('phoneList').
//   component('phoneList', {
//     templateUrl: 'phone-list/phone-list.template.html',
//     controller: ['Phone',
//       function PhoneListController(Phone) {
//         this.phones = Phone.query();
//         this.orderProp = 'age';
//       }
//     ]
//   });
var PhoneListController = (function () {
    function PhoneListController(Phone) {
        this.phones = Phone.query();
        this.orderProp = 'age';
    }
    PhoneListController.$inject = ['Phone'];
    return PhoneListController;
}());
angular.
    module('phoneList').
    component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: PhoneListController
});
