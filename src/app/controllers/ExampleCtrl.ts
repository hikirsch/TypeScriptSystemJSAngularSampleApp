/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../../typings/typescriptApp.d.ts" />


export class ExampleCtrl {
    public static $inject:Array<string> = [];

    constructor() {

    }

    public name:string;
    public hello_world:string;

    public say_hello() {
        console.log('greeting');

        this.hello_world = "Hello, " + this.name + "!";
    }
}
