webpackJsonp([0,6],{

/***/ 880:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__others_component__ = __webpack_require__(881);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__others_routes__ = __webpack_require__(882);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthersModule", function() { return OthersModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var OthersModule = (function () {
    function OthersModule() {
    }
    return OthersModule;
}());
OthersModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__others_routes__["a" /* othersRoutes */])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__others_component__["a" /* OthersComponent */]
        ],
    })
], OthersModule);

//# sourceMappingURL=others.module.js.map

/***/ }),

/***/ 881:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OthersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OthersComponent = (function () {
    function OthersComponent() {
    }
    OthersComponent.prototype.ngOnInit = function () {
    };
    return OthersComponent;
}());
OthersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Component */])({
        selector: 'app-others',
        template: __webpack_require__(883),
    }),
    __metadata("design:paramtypes", [])
], OthersComponent);

//# sourceMappingURL=others.component.js.map

/***/ }),

/***/ 882:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__others_component__ = __webpack_require__(881);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return othersRoutes; });
/**
 * Created by andrew.yang on 4/20/2017.
 */

var othersRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__others_component__["a" /* OthersComponent */]
    },
];
//# sourceMappingURL=others.routes.js.map

/***/ }),

/***/ 883:
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n    <div class=\"col-lg-10\">\n        <h2>Buttons</h2>\n    </div>\n    <div class=\"col-lg-2\">\n    </div>\n</div>\n<div class=\"row wrapper wrapper-content animated fadeInRight\">\n    <div class=\"col-lg-4\">\n        <div class=\"ibox float-e-margins\">\n            <div class=\"ibox-title\">\n                <h5>Colors buttons</h5>\n                <div class=\"ibox-tools\">\n                    <a class=\"collapse-link\">\n                        <i class=\"fa fa-chevron-up\"></i>\n                    </a>\n                    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n                        <i class=\"fa fa-wrench\"></i>\n                    </a>\n                    <ul class=\"dropdown-menu dropdown-user\">\n                        <li><a href=\"#\">Config option 1</a>\n                        </li>\n                        <li><a href=\"#\">Config option 2</a>\n                        </li>\n                    </ul>\n                    <a class=\"close-link\">\n                        <i class=\"fa fa-times\"></i>\n                    </a>\n                </div>\n            </div>\n            <div class=\"ibox-content\">\n                <p>\n                    Use any of the available button classes to quickly create a styled button.\n                </p>\n\n                <h3 class=\"font-bold\">\n                    Normal buttons\n                </h3>\n                <p>\n                    <button type=\"button\" class=\"btn btn-w-m btn-default\">Default</button>\n                    <button type=\"button\" class=\"btn btn-w-m btn-primary\">Primary</button>\n                    <button type=\"button\" class=\"btn btn-w-m btn-success\">Success</button>\n                    <button type=\"button\" class=\"btn btn-w-m btn-info\">Info</button>\n                    <button type=\"button\" class=\"btn btn-w-m btn-warning\">Warning</button>\n                    <button type=\"button\" class=\"btn btn-w-m btn-danger\">Danger</button>\n                    <button type=\"button\" class=\"btn btn-w-m btn-link\">Link</button>\n                </p>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-4\">\n        <div class=\"ibox float-e-margins\">\n            <div class=\"ibox-title\">\n                <h5>Diferent size</h5>\n                <div class=\"ibox-tools\">\n                    <a class=\"collapse-link\">\n                        <i class=\"fa fa-chevron-up\"></i>\n                    </a>\n                    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n                        <i class=\"fa fa-wrench\"></i>\n                    </a>\n                    <ul class=\"dropdown-menu dropdown-user\">\n                        <li><a href=\"#\">Config option 1</a>\n                        </li>\n                        <li><a href=\"#\">Config option 2</a>\n                        </li>\n                    </ul>\n                    <a class=\"close-link\">\n                        <i class=\"fa fa-times\"></i>\n                    </a>\n                </div>\n            </div>\n            <div class=\"ibox-content\">\n                <p>\n                    If You want larger or smaller buttons You can add <code>.btn-lg</code>, <code>.btn-sm</code>, or <code>.btn-xs</code> class.\n                </p>\n                <h3 class=\"font-bold\">Button Sizes</h3>\n                <p>\n                    <button type=\"button\" class=\"btn btn-primary btn-lg\">Large button</button>\n                    <button type=\"button\" class=\"btn btn-default btn-lg\">Large button</button>\n                    <br/>\n                    <button type=\"button\" class=\"btn btn-primary\">Default button</button>\n                    <button type=\"button\" class=\"btn btn-default\">Default button</button>\n                    <br/>\n                    <button type=\"button\" class=\"btn btn-primary btn-sm\">Small button</button>\n                    <button type=\"button\" class=\"btn btn-default btn-sm\">Small button</button>\n                    <br/>\n                    <button type=\"button\" class=\"btn btn-primary btn-xs\">Mini button</button>\n                    <button type=\"button\" class=\"btn btn-default btn-xs\">Mini button</button>\n                </p>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-4\">\n        <div class=\"ibox float-e-margins\">\n            <div class=\"ibox-title\">\n                <h5>Outline and Block Buttons</h5>\n                <div class=\"ibox-tools\">\n                    <a class=\"collapse-link\">\n                        <i class=\"fa fa-chevron-up\"></i>\n                    </a>\n                    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n                        <i class=\"fa fa-wrench\"></i>\n                    </a>\n                    <ul class=\"dropdown-menu dropdown-user\">\n                        <li><a href=\"#\">Config option 1</a>\n                        </li>\n                        <li><a href=\"#\">Config option 2</a>\n                        </li>\n                    </ul>\n                    <a class=\"close-link\">\n                        <i class=\"fa fa-times\"></i>\n                    </a>\n                </div>\n            </div>\n            <div class=\"ibox-content\">\n                <p>\n                    Create block level buttons or outline buttons, by adding <code>.btn-block</code>   or <code>.btn-outline</code>.\n                </p>\n\n                <h3 class=\"font-bold\">Outline buttons</h3>\n                <p>\n                    <button type=\"button\" class=\"btn btn-outline btn-default\">Default</button>\n                    <button type=\"button\" class=\"btn btn-outline btn-primary\">Primary</button>\n                    <button type=\"button\" class=\"btn btn-outline btn-success\">Success</button>\n                    <button type=\"button\" class=\"btn btn-outline btn-info\">Info</button>\n                    <button type=\"button\" class=\"btn btn-outline btn-warning\">Warning</button>\n                    <button type=\"button\" class=\"btn btn-outline btn-danger\">Danger</button>\n                    <button type=\"button\" class=\"btn btn-outline btn-link\">Link</button>\n                </p>\n                <h3 class=\"font-bold\">Block buttons</h3>\n                <p>\n                    <button type=\"button\" class=\"btn btn-block btn-outline btn-primary\">Primary</button>\n                </p>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-12\">\n        <div class=\"ibox float-e-margins\">\n            <div class=\"ibox-title\">\n                <h5>3D Buttons</h5>\n                <div class=\"ibox-tools\">\n                    <a class=\"collapse-link\">\n                        <i class=\"fa fa-chevron-up\"></i>\n                    </a>\n                    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n                        <i class=\"fa fa-wrench\"></i>\n                    </a>\n                    <ul class=\"dropdown-menu dropdown-user\">\n                        <li><a href=\"#\">Config option 1</a>\n                        </li>\n                        <li><a href=\"#\">Config option 2</a>\n                        </li>\n                    </ul>\n                    <a class=\"close-link\">\n                        <i class=\"fa fa-times\"></i>\n                    </a>\n                </div>\n            </div>\n            <div class=\"ibox-content\">\n                <p>\n                    To add three diminsion to buttons You can add <code>.dim</code> class to button.\n                </p>\n                <h3 class=\"font-bold\">Three diminsion button</h3>\n\n                <button class=\"btn btn-primary dim btn-large-dim\" type=\"button\"><i class=\"fa fa-money\"></i></button>\n                <button class=\"btn btn-warning dim btn-large-dim\" type=\"button\"><i class=\"fa fa-warning\"></i></button>\n                <button class=\"btn btn-danger  dim btn-large-dim\" type=\"button\"><i class=\"fa fa-heart\"></i></button>\n                <button class=\"btn btn-primary  dim btn-large-dim\" type=\"button\"><i class=\"fa fa-dollar\"></i>6</button>\n                <button class=\"btn btn-info  dim btn-large-dim btn-outline\" type=\"button\"><i class=\"fa fa-ruble\"></i></button>\n                <button class=\"btn btn-primary dim\" type=\"button\"><i class=\"fa fa-money\"></i></button>\n                <button class=\"btn btn-warning dim\" type=\"button\"><i class=\"fa fa-warning\"></i></button>\n                <button class=\"btn btn-primary dim\" type=\"button\"><i class=\"fa fa-check\"></i></button>\n                <button class=\"btn btn-success  dim\" type=\"button\"><i class=\"fa fa-upload\"></i></button>\n                <button class=\"btn btn-info  dim\" type=\"button\"><i class=\"fa fa-paste\"></i> </button>\n                <button class=\"btn btn-warning  dim\" type=\"button\"><i class=\"fa fa-warning\"></i></button>\n                <button class=\"btn btn-default  dim \" type=\"button\"><i class=\"fa fa-star\"></i></button>\n                <button class=\"btn btn-danger  dim \" type=\"button\"><i class=\"fa fa-heart\"></i></button>\n\n                <button class=\"btn btn-outline btn-primary dim\" type=\"button\"><i class=\"fa fa-money\"></i></button>\n                <button class=\"btn btn-outline btn-warning dim\" type=\"button\"><i class=\"fa fa-warning\"></i></button>\n                <button class=\"btn btn-outline btn-primary dim\" type=\"button\"><i class=\"fa fa-check\"></i></button>\n                <button class=\"btn btn-outline btn-success  dim\" type=\"button\"><i class=\"fa fa-upload\"></i></button>\n                <button class=\"btn btn-outline btn-info  dim\" type=\"button\"><i class=\"fa fa-paste\"></i> </button>\n                <button class=\"btn btn-outline btn-warning  dim\" type=\"button\"><i class=\"fa fa-warning\"></i></button>\n                <button class=\"btn btn-outline btn-danger  dim \" type=\"button\"><i class=\"fa fa-heart\"></i></button>\n\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-12\">\n        <div class=\"row\">\n            <div class=\"col-lg-6\">\n                <div class=\"ibox float-e-margins\">\n                    <div class=\"ibox-title\">\n                        <h5>Button dropdowns</h5>\n                        <div class=\"ibox-tools\">\n                            <a class=\"collapse-link\">\n                                <i class=\"fa fa-chevron-up\"></i>\n                            </a>\n                            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n                                <i class=\"fa fa-wrench\"></i>\n                            </a>\n                            <ul class=\"dropdown-menu dropdown-user\">\n                                <li><a href=\"#\">Config option 1</a>\n                                </li>\n                                <li><a href=\"#\">Config option 2</a>\n                                </li>\n                            </ul>\n                            <a class=\"close-link\">\n                                <i class=\"fa fa-times\"></i>\n                            </a>\n                        </div>\n                    </div>\n                    <div class=\"ibox-content\">\n                        <p>\n                            Droppdowns buttons are avalible with any color and any size.\n                        </p>\n\n                        <h3 class=\"font-bold\">Dropdowns</h3>\n                        <div class=\"btn-group\">\n                            <button data-toggle=\"dropdown\" class=\"btn btn-primary dropdown-toggle\">Action <span class=\"caret\"></span></button>\n                            <ul class=\"dropdown-menu\">\n                                <li><a href=\"#\">Action</a></li>\n                                <li><a href=\"#\" class=\"font-bold\">Another action</a></li>\n                                <li><a href=\"#\">Something else here</a></li>\n                                <li class=\"divider\"></li>\n                                <li><a href=\"#\">Separated link</a></li>\n                            </ul>\n                        </div>\n                        <div class=\"btn-group\">\n                            <button data-toggle=\"dropdown\" class=\"btn btn-warning dropdown-toggle\">Action <span class=\"caret\"></span></button>\n                            <ul class=\"dropdown-menu\">\n                                <li><a href=\"#\">Action</a></li>\n                                <li><a href=\"#\">Another action</a></li>\n                                <li><a href=\"#\">Something else here</a></li>\n                                <li class=\"divider\"></li>\n                                <li><a href=\"#\">Separated link</a></li>\n                            </ul>\n                        </div>\n                        <div class=\"btn-group\">\n                            <button data-toggle=\"dropdown\" class=\"btn btn-default dropdown-toggle\">Action <span class=\"caret\"></span></button>\n                            <ul class=\"dropdown-menu\">\n                                <li><a href=\"#\">Action</a></li>\n                                <li><a href=\"#\">Another action</a></li>\n                                <li><a href=\"#\">Something else here</a></li>\n                                <li class=\"divider\"></li>\n                                <li><a href=\"#\">Separated link</a></li>\n                            </ul>\n                        </div>\n\n                        <br/>\n                        <div class=\"btn-group\">\n                            <button data-toggle=\"dropdown\" class=\"btn btn-primary btn-sm dropdown-toggle\">Action <span class=\"caret\"></span></button>\n                            <ul class=\"dropdown-menu\">\n                                <li><a href=\"#\">Action</a></li>\n                                <li><a href=\"#\">Another action</a></li>\n                                <li><a href=\"#\">Something else here</a></li>\n                                <li class=\"divider\"></li>\n                                <li><a href=\"#\">Separated link</a></li>\n                            </ul>\n                        </div>\n                        <div class=\"btn-group\">\n                            <button data-toggle=\"dropdown\" class=\"btn btn-warning btn-sm dropdown-toggle\">Action <span class=\"caret\"></span></button>\n                            <ul class=\"dropdown-menu\">\n                                <li><a href=\"#\">Action</a></li>\n                                <li><a href=\"#\">Another action</a></li>\n                                <li><a href=\"#\">Something else here</a></li>\n                                <li class=\"divider\"></li>\n                                <li><a href=\"#\">Separated link</a></li>\n                            </ul>\n                        </div>\n                        <div class=\"btn-group\">\n                            <button data-toggle=\"dropdown\" class=\"btn btn-default btn-sm dropdown-toggle\">Action <span class=\"caret\"></span></button>\n                            <ul class=\"dropdown-menu\">\n                                <li><a href=\"#\">Action</a></li>\n                                <li><a href=\"#\">Another action</a></li>\n                                <li><a href=\"#\">Something else here</a></li>\n                                <li class=\"divider\"></li>\n                                <li><a href=\"#\">Separated link</a></li>\n                            </ul>\n                        </div>\n                        <br/>\n                        <div class=\"btn-group\">\n                            <button data-toggle=\"dropdown\" class=\"btn btn-primary btn-xs dropdown-toggle\">Action <span class=\"caret\"></span></button>\n                            <ul class=\"dropdown-menu\">\n                                <li><a href=\"#\">Action</a></li>\n                                <li><a href=\"#\">Another action</a></li>\n                                <li><a href=\"#\">Something else here</a></li>\n                                <li class=\"divider\"></li>\n                                <li><a href=\"#\">Separated link</a></li>\n                            </ul>\n                        </div>\n                        <div class=\"btn-group\">\n                            <button data-toggle=\"dropdown\" class=\"btn btn-warning btn-xs dropdown-toggle\">Action <span class=\"caret\"></span></button>\n                            <ul class=\"dropdown-menu\">\n                                <li><a href=\"#\">Action</a></li>\n                                <li><a href=\"#\">Another action</a></li>\n                                <li><a href=\"#\">Something else here</a></li>\n                                <li class=\"divider\"></li>\n                                <li><a href=\"#\">Separated link</a></li>\n                            </ul>\n                        </div>\n                        <div class=\"btn-group\">\n                            <button data-toggle=\"dropdown\" class=\"btn btn-default btn-xs dropdown-toggle\">Action <span class=\"caret\"></span></button>\n                            <ul class=\"dropdown-menu\">\n                                <li><a href=\"#\">Action</a></li>\n                                <li><a href=\"#\">Another action</a></li>\n                                <li><a href=\"#\">Something else here</a></li>\n                                <li class=\"divider\"></li>\n                                <li><a href=\"#\">Separated link</a></li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-6\">\n                <div class=\"ibox float-e-margins\">\n                    <div class=\"ibox-title\">\n                        <h5>Grouped Buttons</h5>\n                        <div class=\"ibox-tools\">\n                            <a class=\"collapse-link\">\n                                <i class=\"fa fa-chevron-up\"></i>\n                            </a>\n                            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n                                <i class=\"fa fa-wrench\"></i>\n                            </a>\n                            <ul class=\"dropdown-menu dropdown-user\">\n                                <li><a href=\"#\">Config option 1</a>\n                                </li>\n                                <li><a href=\"#\">Config option 2</a>\n                                </li>\n                            </ul>\n                            <a class=\"close-link\">\n                                <i class=\"fa fa-times\"></i>\n                            </a>\n                        </div>\n                    </div>\n                    <div class=\"ibox-content\">\n                        <p>\n                            This is a group of buttons, ideal for sytuation where many actions are related to same element.\n                        </p>\n\n                        <h3 class=\"font-bold\">Button Group</h3>\n                        <div class=\"btn-group\">\n                            <button class=\"btn btn-white\" type=\"button\">Left</button>\n                            <button class=\"btn btn-primary\" type=\"button\">Middle</button>\n                            <button class=\"btn btn-white\" type=\"button\">Right</button>\n                        </div>\n                        <br/>\n                        <br/>\n                        <div class=\"btn-group\">\n                            <button type=\"button\" class=\"btn btn-white\"><i class=\"fa fa-chevron-left\"></i></button>\n                            <button class=\"btn btn-white\">1</button>\n                            <button class=\"btn btn-white  active\">2</button>\n                            <button class=\"btn btn-white\">3</button>\n                            <button class=\"btn btn-white\">4</button>\n                            <button type=\"button\" class=\"btn btn-white\"><i class=\"fa fa-chevron-right\"></i> </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"ibox float-e-margins\">\n            <div class=\"ibox-title\">\n                <h5>Icon Buttons</h5>\n                <div class=\"ibox-tools\">\n                    <a class=\"collapse-link\">\n                        <i class=\"fa fa-chevron-up\"></i>\n                    </a>\n                    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n                        <i class=\"fa fa-wrench\"></i>\n                    </a>\n                    <ul class=\"dropdown-menu dropdown-user\">\n                        <li><a href=\"#\">Config option 1</a>\n                        </li>\n                        <li><a href=\"#\">Config option 2</a>\n                        </li>\n                    </ul>\n                    <a class=\"close-link\">\n                        <i class=\"fa fa-times\"></i>\n                    </a>\n                </div>\n            </div>\n            <div class=\"ibox-content\">\n                <p>\n                    To buttons with any color or any size you can add extra icon on the left or the right side.\n                </p>\n\n                <h3 class=\"font-bold\">Commom Icon Buttons</h3>\n                <p>\n                    <button class=\"btn btn-primary \" type=\"button\"><i class=\"fa fa-check\"></i>&nbsp;Submit</button>\n                    <button class=\"btn btn-success \" type=\"button\"><i class=\"fa fa-upload\"></i>&nbsp;&nbsp;<span class=\"bold\">Upload</span></button>\n                    <button class=\"btn btn-info \" type=\"button\"><i class=\"fa fa-paste\"></i> Edit</button>\n                    <button class=\"btn btn-warning \" type=\"button\"><i class=\"fa fa-warning\"></i> <span class=\"bold\">Warning</span></button>\n                    <button class=\"btn btn-default \" type=\"button\"><i class=\"fa fa-map-marker\"></i>&nbsp;&nbsp;Map</button>\n\n                    <a class=\"btn btn-success btn-facebook\">\n                        <i class=\"fa fa-facebook\"> </i> Sign in with Facebook\n                    </a>\n                    <a class=\"btn btn-success btn-facebook btn-outline\">\n                        <i class=\"fa fa-facebook\"> </i> Sign in with Facebook\n                    </a>\n                    <a class=\"btn btn-white btn-bitbucket\">\n                        <i class=\"fa fa-user-md\"></i>\n                    </a>\n                    <a class=\"btn btn-white btn-bitbucket\">\n                        <i class=\"fa fa-group\"></i>\n                    </a>\n                    <a class=\"btn btn-white btn-bitbucket\">\n                        <i class=\"fa fa-wrench\"></i>\n                    </a>\n                    <a class=\"btn btn-white btn-bitbucket\">\n                        <i class=\"fa fa-exchange\"></i>\n                    </a>\n                    <a class=\"btn btn-white btn-bitbucket\">\n                        <i class=\"fa fa-check-circle-o\"></i>\n                    </a>\n                    <a class=\"btn btn-white btn-bitbucket\">\n                        <i class=\"fa fa-road\"></i>\n                    </a>\n                    <a class=\"btn btn-white btn-bitbucket\">\n                        <i class=\"fa fa-ambulance\"></i>\n                    </a>\n                    <a class=\"btn btn-white btn-bitbucket\">\n                        <i class=\"fa fa-star\"></i> Stared\n                    </a>\n                </p>\n\n                <h3 class=\"font-bold\">Toggle buttons Variations</h3>\n                <p>Button groups can act as a radio or a switch or even a single toggle. Below are some examples click to see what happens</p>\n                <button data-toggle=\"button\" class=\"btn btn-primary btn-outline\" type=\"button\">Single Toggle</button>\n                <button data-toggle=\"button\" class=\"btn btn-primary\" type=\"button\">Single Toggle</button>\n                <div data-toggle=\"buttons-checkbox\" class=\"btn-group\">\n                    <button class=\"btn btn-primary active\" type=\"button\"><i class=\"fa fa-bold\"></i> Bold</button>\n                    <button class=\"btn btn-primary\" type=\"button\"><i class=\"fa fa-underline\"></i> Underline</button>\n                    <button class=\"btn btn-primary active\" type=\"button\"><i class=\"fa fa-italic\"></i> Italic</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-12\">\n        <div class=\"row\">\n            <div class=\"col-lg-6\">\n                <div class=\"ibox float-e-margins\">\n                    <div class=\"ibox-title\">\n                        <h5>Circle Icon Buttons</h5>\n                        <div class=\"ibox-tools\">\n                            <a class=\"collapse-link\">\n                                <i class=\"fa fa-chevron-up\"></i>\n                            </a>\n                            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n                                <i class=\"fa fa-wrench\"></i>\n                            </a>\n                            <ul class=\"dropdown-menu dropdown-user\">\n                                <li><a href=\"#\">Config option 1</a>\n                                </li>\n                                <li><a href=\"#\">Config option 2</a>\n                                </li>\n                            </ul>\n                            <a class=\"close-link\">\n                                <i class=\"fa fa-times\"></i>\n                            </a>\n                        </div>\n                    </div>\n                    <div class=\"ibox-content\">\n                        <p>\n                            For buttons you can add <code>.btn-circle</code> to rounded buttons and make it circle.\n                        </p>\n\n                        <h3 class=\"font-bold\">Circle buttons</h3>\n                        <br/>\n                        <button class=\"btn btn-default btn-circle\" type=\"button\"><i class=\"fa fa-check\"></i>\n                        </button>\n                        <button class=\"btn btn-primary btn-circle\" type=\"button\"><i class=\"fa fa-list\"></i>\n                        </button>\n                        <button class=\"btn btn-success btn-circle\" type=\"button\"><i class=\"fa fa-link\"></i>\n                        </button>\n                        <button class=\"btn btn-info btn-circle\" type=\"button\"><i class=\"fa fa-check\"></i>\n                        </button>\n                        <button class=\"btn btn-warning btn-circle\" type=\"button\"><i class=\"fa fa-times\"></i>\n                        </button>\n                        <button class=\"btn btn-danger btn-circle\" type=\"button\"><i class=\"fa fa-heart\"></i>\n                        </button>\n                        <button class=\"btn btn-danger btn-circle btn-outline\" type=\"button\"><i class=\"fa fa-heart\"></i>\n                        </button>\n                        <br/>\n                        <br/>\n                        <button class=\"btn btn-default btn-circle btn-lg\" type=\"button\"><i class=\"fa fa-check\"></i>\n                        </button>\n                        <button class=\"btn btn-primary btn-circle btn-lg\" type=\"button\"><i class=\"fa fa-list\"></i>\n                        </button>\n                        <button class=\"btn btn-success btn-circle btn-lg\" type=\"button\"><i class=\"fa fa-link\"></i>\n                        </button>\n                        <button class=\"btn btn-info btn-circle btn-lg\" type=\"button\"><i class=\"fa fa-check\"></i>\n                        </button>\n                        <button class=\"btn btn-warning btn-circle btn-lg\" type=\"button\"><i class=\"fa fa-times\"></i>\n                        </button>\n                        <button class=\"btn btn-danger btn-circle btn-lg\" type=\"button\"><i class=\"fa fa-heart\"></i>\n                        </button>\n                        <button class=\"btn btn-danger btn-circle btn-lg btn-outline\" type=\"button\"><i class=\"fa fa-heart\"></i>\n                        </button>\n\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-6\">\n                <div class=\"ibox float-e-margins\">\n                    <div class=\"ibox-title\">\n                        <h5>Rounded Buttons</h5>\n                        <div class=\"ibox-tools\">\n                            <a class=\"collapse-link\">\n                                <i class=\"fa fa-chevron-up\"></i>\n                            </a>\n                            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n                                <i class=\"fa fa-wrench\"></i>\n                            </a>\n                            <ul class=\"dropdown-menu dropdown-user\">\n                                <li><a href=\"#\">Config option 1</a>\n                                </li>\n                                <li><a href=\"#\">Config option 2</a>\n                                </li>\n                            </ul>\n                            <a class=\"close-link\">\n                                <i class=\"fa fa-times\"></i>\n                            </a>\n                        </div>\n                    </div>\n                    <div class=\"ibox-content\">\n                        <p>\n                            You can also add <code>.btn-rounded</code> class to round buttons.\n                        </p>\n\n                        <h3 class=\"font-bold\">Button Group</h3>\n                        <p>\n                            <a class=\"btn btn-default btn-rounded\" href=\"#\">Default</a>\n                            <a class=\"btn btn-primary btn-rounded\" href=\"#\">Primary</a>\n                            <a class=\"btn btn-success btn-rounded\" href=\"#\">Success</a>\n                            <a class=\"btn btn-info btn-rounded\" href=\"#\">Info</a>\n                            <a class=\"btn btn-warning btn-rounded\" href=\"#\">Warning</a>\n                            <a class=\"btn btn-danger btn-rounded\" href=\"#\">Danger</a>\n                            <a class=\"btn btn-danger btn-rounded btn-outline\" href=\"#\">Danger</a>\n                            <br/>\n                            <br/>\n                            <a class=\"btn btn-primary btn-rounded btn-block\" href=\"#\"><i class=\"fa fa-info-circle\"></i> Block rounded with icon button</a>\n                        </p>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n"

/***/ })

});
//# sourceMappingURL=0.chunk.js.map