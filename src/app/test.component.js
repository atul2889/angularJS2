"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var TestComponent = (function () {
    /* HTTP constructor*/
    function TestComponent(http, router) {
        this.http = http;
        this.router = router;
        this.users = {
            name: '',
            contact: '',
            email: ''
        };
        this.editusers = {
            id: '',
            name: '',
            contact: '',
            email: ''
        };
        this.headline = 'Welcome to the Angular 2';
    }
    /* On page load function */
    TestComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    /* Get a list data */
    TestComponent.prototype.getData = function () {
        var _this = this;
        this.http.get('http://localhost/api/api.php?action=getData')
            .subscribe(function (res) { return _this.dataArray = res.json(); });
    };
    /* Insert data to the database */
    TestComponent.prototype.postData = function () {
        var body = 'name=' + this.users.name + '&contact=' + this.users.contact + '&email=' + this.users.email;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http
            .post('http://localhost/api/api.php?action=postData', body, {
            headers: headers
        })
            .subscribe(function (res) {
            // alert('ok');
            // console.log(res);
            /*this.getData();
            $('.modal').modal('hide');
            this.users.name = '';
            this.users.contact = '';
            this.users.email = '';*/
            location.reload();
        }, function (error) {
            console.log(JSON.stringify(error.json()));
        });
    };
    /* Delete data from the database */
    TestComponent.prototype.deleteData = function (id) {
        // this.id
        var body = 'id=' + id;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http
            .post('http://localhost/api/api.php?action=deleteData', body, {
            headers: headers
        })
            .subscribe(function (res) {
            // console.log(res);
            /*this.getData();
            $('.modal').modal('hide');*/
            location.reload();
        }, function (error) {
            console.log(JSON.stringify(error.json()));
        });
    };
    /* Edit data to the database */
    TestComponent.prototype.editData = function (id) {
        var _this = this;
        var body = 'id=' + id;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http
            .post('http://localhost/api/api.php?action=getUser', body, {
            headers: headers
        })
            .subscribe(function (res) {
            _this.editusers = res.json();
            // console.log(res);
            // location.reload();
        }, function (error) {
            console.log(JSON.stringify(error.json()));
        });
    };
    /* Update user data  */
    TestComponent.prototype.updateData = function () {
        var body = 'id=' + this.editusers.id +
            '&name=' + this.editusers.name +
            '&contact=' + this.editusers.contact +
            '&email=' + this.editusers.email;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http
            .post('http://localhost/api/api.php?action=updateData', body, {
            headers: headers
        })
            .subscribe(function (res) {
            // alert('ok');
            // console.log(res);
            /*this.getData();
            $('.modal').modal('hide');*/
            location.reload();
        }, function (error) {
            console.log(JSON.stringify(error.json()));
        });
    };
    return TestComponent;
}());
TestComponent = __decorate([
    core_1.Component({
        selector: 'content',
        // template: `<h1>Hello {{name}}</h1>`
        templateUrl: 'views/test.html'
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], TestComponent);
exports.TestComponent = TestComponent;
//# sourceMappingURL=test.component.js.map