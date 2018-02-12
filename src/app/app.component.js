var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { tap } from '../../config/util';
var AppComponent = (function () {
    function AppComponent(_router) {
        this._router = _router;
        this.title = 'NGX Blog';
    }
    AppComponent.prototype.onActivate = function (event) {
        tap(event, 'Activate');
    };
    AppComponent.prototype.onDeactivate = function (event) {
        tap(event, 'Deactivate');
    };
    AppComponent.prototype.ngOnInit = function () {
        this._router.events
            .filter(function (event) { return event instanceof NavigationEnd; })
            .subscribe(function (event) {
            tap(event, 'event');
        });
    };
    AppComponent = __decorate([
        Component({
            selector: 'ngxb-app',
            templateUrl: './app.component.html',
            styleUrls: ['./app.scss']
        }),
        __metadata("design:paramtypes", [Router])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map