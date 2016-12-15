import { Component } from '@angular/core';
import { Person } from './person';

@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1>'
})
export class AppComponent {
    title: string = "Star Wars PPlz!!!";
}
