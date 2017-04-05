"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var companies_component_1 = require('./companies/companies.component');
var registration_component_1 = require('./registration/registration.component');
var parking_component_1 = require('./parking/parking.component');
var volunteer_component_1 = require('./about/volunteer.component');
var fileupload_component_1 = require('./fileupload/fileupload.component');
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
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map