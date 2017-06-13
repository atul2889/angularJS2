"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header.component");
var footer_component_1 = require("./footer.component");
var leftSidebar_component_1 = require("./leftSidebar.component");
var test_component_1 = require("./test.component");
var default_component_1 = require("./default.component");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var ng2_pagination_1 = require("ng2-pagination"); //importing ng2-pagination
var appRoutes = [
    { path: '', component: default_component_1.DefaultComponent },
    { path: 'header', component: header_component_1.HeaderComponent },
    { path: 'test', component: test_component_1.TestComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(appRoutes),
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            ng2_pagination_1.Ng2PaginationModule
        ],
        declarations: [app_component_1.AppComponent, header_component_1.HeaderComponent, footer_component_1.FooterComponent, leftSidebar_component_1.LeftbarComponent, test_component_1.TestComponent, default_component_1.DefaultComponent],
        bootstrap: [app_component_1.AppComponent, header_component_1.HeaderComponent, footer_component_1.FooterComponent, leftSidebar_component_1.LeftbarComponent, test_component_1.TestComponent, default_component_1.DefaultComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map