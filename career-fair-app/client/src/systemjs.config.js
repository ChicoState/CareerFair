/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/',
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
//       app: 'app/',
      app: 'app',
      

      // angular bundles
      '@angular/core':                        'npm:@angular/core/bundles/core.umd.js',
      '@angular/common':                      'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler':                    'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser':            'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic':    'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http':                        'npm:@angular/http/bundles/http.umd.js',
      '@angular/router':                      'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms':                       'npm:@angular/forms/bundles/forms.umd.js',

      // other libraries
			'ng2-file-upload': 'npm:ng2-file-upload',  
			'ng2-pdf-viewer': 'npm:ng2-pdf-viewer',
			'pdfjs-dist': 'node_modules/pdfjs-dist',
      //need this for google maps
      'angular2-google-maps/core': 'npm:angular2-google-maps/core/core.umd.js',

      'rxjs':                       'npm:rxjs',
      'angular-in-memory-web-api':  'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',

      //Admin Login
      'angular2-jwt':               'npm:angular2-jwt/angular2-jwt.js',
      //Carousel
      'moment': 'node_modules/moment/moment.js',
      'ngx-bootstrap': 'node_modules/ngx-bootstrap/bundles/ngx-bootstrap.umd.js',
      
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
			'ng2-file-upload': {  
				main: 'ng2-file-upload.js', 
				defaultExtension: 'js' 
			},
			'ng2-pdf-viewer': { 
				main: 'dist/index.js', 
				defaultExtension: 'js'
			}, 
			'pdfjs-dist': { defaultExtension: 'js' }
    }
  });
})(this);
