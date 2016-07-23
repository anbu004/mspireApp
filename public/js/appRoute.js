'use strict';

window.app_version = 2.0;

angular
.module('MaterialApp', [
                        'ui.router',
                        'ngAnimate',
                        'ngMaterial',
                        'ui.grid.selection',
                        'angular-loading-bar',
                        'pascalprecht.translate',
                        'paperCollapse',
                        'merServices',
                        'ngTouch', 'ui.grid', 'ui.grid.autoResize'
                        ])

                      /*  .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
                        	cfpLoadingBarProvider.latencyThreshold = 51;
                        	cfpLoadingBarProvider.includeSpinner = true;
                        }]) */

                        .config(function($stateProvider, $urlRouterProvider) {

                        	$urlRouterProvider.otherwise('home');

                        	$stateProvider
                        	.state('base', {
                        		abstract: true,
                        		url: '',
                        		templateUrl: 'views/base.html?v='+window.app_version,
                        		controller: 'DashboardCtrl'
                        	})

                        	.state('dashboard', {
                        		url: '/',
                        		parent: 'base',
                        		templateUrl: 'views/dashboard.html?v='+window.app_version
                        	})

                        	.state('schaumburg', {
                        		url: 'schaumburg',
                        		parent: 'dashboard',
                        		templateUrl: 'views/Schaumburg.html?v='+window.app_version,
                        		controller:'SchaumburgCtrl'
                        	})

                        	.state('scog', {
                        		url: 'scog',
                        		parent: 'dashboard',
                        		templateUrl: 'views/SCOG.html?v='+window.app_version,
                        		controller:'scogCtrl'
                        	})

                        	.state('home', {
                        		url: 'home',
                        		parent: 'dashboard',
                        		templateUrl: 'views/home.html?v='+window.app_version
                        	})

                        	.state('COF', {
                        		url: 'COF',
                        		parent: 'dashboard',
                        		templateUrl: 'views/COF.html?v='+window.app_version,
                        		controller:'COFCtrl'
                        	})
                        	
                        	.state('whereUsed', {
                        		url: 'whereUsed',
                        		parent: 'dashboard',
                        		templateUrl: 'views/whereUsed.html?v='+window.app_version,
                        		controller:'whereUsedCtrl'
                        	});



                        });


