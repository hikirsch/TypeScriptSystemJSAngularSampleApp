/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../../typings/typescriptApp.d.ts" />

export class ExampleTwoCtrl {
    public static $inject:Array<string> = [];

    constructor() {

    }

    public name:string;
    public text:string;

    public second() {
        this.text = "ExampleTwoCtrl: " +  this.name;
    }
}
