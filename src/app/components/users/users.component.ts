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
          image: 'https://images.unsplash.com/photo-1611770708564-50ecde16ffe4?ixid'
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
          image: 'https://images.unsplash.com/photo-1568604032475-10f1a56527c9?ixid'
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
          image: 'https://https://unsplash.com/t/people/1'
        }
  
      ];

    this.loaded = true;

    // this.addUser({
    //   firstName: 'David',
    //   lastName: 'Jackson'
    // });
  }

  addUser(user: User) {
    this.users.push(user);
  }

}
