"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var posts_service_1 = require("./../services/posts.service");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
exports.ROUTES = [
    { path: '', component: home_component_1.HomeComponent }
];
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(exports.ROUTES)
        ],
        declarations: [
            home_component_1.HomeComponent
        ],
        providers: [
            posts_service_1.PostsService
        ]
    })
], HomeModule);
exports.HomeModule = HomeModule;
//# sourceMappingURL=home.module.js.map