import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
    // template: '<h2>John Doe</h2>'
    // styles: [`
    //     h2 {
    //         color: blue
    //     }
    // `]
})

export class UserComponent {
    // Properties
    firstName = 'John';
    lastName = 'Smith';
    age = 30;
    address = {
        street: '50 Main St',
        city: 'Boston',
        state: 'MA'
    }

    // Methods
    constructor() {
        // this.sayHello();
        // console.log(this.age);
        // this.hasBirthday();
        // console.log(this.age);
    }

    showAge() {
        return this.age + 2;
    }

    // sayHello() {
    //     console.log(`Hello ${this.firstName}`)
    // }

    // hasBirthday() {
    //     this.age += 1;
    // }
}