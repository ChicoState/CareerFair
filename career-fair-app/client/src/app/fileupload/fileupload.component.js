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
var ng2_file_upload_1 = require('ng2-file-upload');
var Uploader = (function () {
    function Uploader(firstName, lastName, idNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = idNumber;
    }
    return Uploader;
}());
var FileUploadComponent = (function () {
    function FileUploadComponent() {
        this.uploader = new ng2_file_upload_1.FileUploader({ url: 'http://localhost:3000/upload' });
        this.uploader_ = new Uploader("", "", "");
    }
    FileUploadComponent.prototype.validIdNumber = function () {
        if (this.uploader_.idNumber.length > 0) {
            var idPattern = /^\d{9}$/;
            var idRegex = new RegExp(idPattern);
            if (this.uploader_.idNumber.match(idRegex)) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    FileUploadComponent.prototype.onSumbit = function () {
        //currently just goes to companies home page
        //code to push uploader_ to database goes HERE
    };
    FileUploadComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fileupload',
            templateUrl: 'fileupload.component.html',
            styleUrls: ['./fileupload.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], FileUploadComponent);
    return FileUploadComponent;
}());
exports.FileUploadComponent = FileUploadComponent;
//# sourceMappingURL=fileupload.component.js.map