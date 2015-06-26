/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../typings/typescriptApp.d.ts" />

import * as angular from 'angular';

import {ExampleCtrl} from './controllers/ExampleCtrl';
import {ExampleTwoCtrl} from './controllers/ExampleTwoCtrl';

export var app = angular.module("myApp", []);

app.controller("ExampleCtrl", ExampleCtrl);
app.controller("ExampleTwoCtrl", ExampleTwoCtrl);
