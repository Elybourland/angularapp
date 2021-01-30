import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  currentClasses = {};

  constructor() { }

  ngOnInit(): void {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 30,
          address: {
              street: '50 Main St',
              city: 'Boston',
              state: 'MA'
          },
          image: 'https://placeimg.com/600/600/people/3',
          isActive: true
        },
        {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 34,
        address: {
            street: '20 School St',
            city: 'Lynn',
            state: 'MA'
          },
          image: 'https://placeimg.com/600/600/people/2',
          isActive: false
        },
        {
          firstName: 'Karen',
          lastName: 'Williams',
          age: 26,
          address: {
              street: '55 Mill St',
              city: 'Miami',
              state: 'FL'
          },
          image: 'https://placeimg.com/600/600/people/1',
          isActive: true
        }
  
      ];

    this.loaded = true;

    // this.addUser({
    //   firstName: 'David',
    //   lastName: 'Jackson'
    // });

    this.setCurrentClasses();
  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    }
  }

}
