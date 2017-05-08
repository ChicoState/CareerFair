"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var companies_component_1 = require('./companies/companies.component');
var registration_component_1 = require('./registration/registration.component');
var parking_component_1 = require('./parking/parking.component');
var fileupload_component_1 = require('./fileupload/fileupload.component');
var volunteer_component_1 = require('./volunteer/volunteer.component');
var admin_component_1 = require('./admin/admin.component');
var canvas_component_1 = require('./canvas/canvas.component');
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'companies',
        component: companies_component_1.CompaniesComponent
    },
    {
        path: 'registration',
        component: registration_component_1.RegistrationComponent
    },
    {
        path: 'parking',
        component: parking_component_1.ParkingComponent
    },
    {
        path: 'volunteer',
        component: volunteer_component_1.VolunteerComponent
    },
    {
        path: 'fileupload',
        component: fileupload_component_1.FileUploadComponent
    },
    // {
    // 	path: 'filedownload', 
    // 	component: FileDownloadComponent
    // },
    {
        path: 'admin',
        component: admin_component_1.AdminComponent
    },
    {
        path: 'canvas',
        component: canvas_component_1.CanvasComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map