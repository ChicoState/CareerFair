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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_routing_1 = require('./app.routing');
var ng2_file_upload_1 = require('ng2-file-upload');
var ngx_bootstrap_1 = require('ngx-bootstrap');
// components we create
var app_component_1 = require('./app.component');
var home_component_1 = require('./home/home.component');
var header_component_1 = require('./layout/header.component');
var companies_component_1 = require('./companies/companies.component');
var registration_component_1 = require('./registration/registration.component');
var parking_component_1 = require('./parking/parking.component');
var fileupload_component_1 = require('./fileupload/fileupload.component');
var volunteer_component_1 = require('./volunteer/volunteer.component');
var admin_component_1 = require('./admin/admin.component');
var carousel_component_1 = require('./carousel/carousel.component');
var core_2 = require('angular2-google-maps/core');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                app_routing_1.routing,
                forms_1.FormsModule,
                http_1.HttpModule,
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyD5H2OAPwP5wAF3b0kN8OCfYJceS9mwq3k'
                }),
                ngx_bootstrap_1.CarouselModule.forRoot(),
                ngx_bootstrap_1.TimepickerModule.forRoot(),
                ngx_bootstrap_1.AlertModule.forRoot(),
                ngx_bootstrap_1.ModalModule.forRoot(),
                ngx_bootstrap_1.BsDropdownModule.forRoot(),
            ],
            declarations: [app_component_1.AppComponent,
                home_component_1.HomeComponent,
                header_component_1.HeaderComponent,
                companies_component_1.CompaniesComponent,
                registration_component_1.RegistrationComponent,
                parking_component_1.ParkingComponent,
                fileupload_component_1.FileUploadComponent,
                ng2_file_upload_1.FileSelectDirective,
                volunteer_component_1.VolunteerComponent,
                admin_component_1.AdminComponent,
                carousel_component_1.CarouselComponent,
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map