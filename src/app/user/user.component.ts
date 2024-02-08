import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../app/models/user.class'
import { provideNativeDateAdapter } from '@angular/material/core';
import { Firestore, collection, onSnapshot, orderBy, limit, query } from '@angular/fire/firestore';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  user = new User();
  allUsers: User[] = [];

  usersCollection = collection(this.firestore, 'users');

  constructor(public dialog: MatDialog, private firestore: Firestore) {}

  ngOnInit(): void {
    this.subUsersList();
/*     this.usersCollection.valueChanges()

    let dbUsers = valueChanges() onSnapshot(this.usersCollection, ((changes) => {
        console.log("Received changes from DB: ", changes);
        this.allUsers = changes;
      }
    )); */
      
      
/*       collection(this.firestore, 'users'));
    console.log('Received changes from DB', dbUsers); */
  }

  subUsersList(){
    // orderBy('title')
    const q = query(this.getUsersRef(), limit(50));
    return onSnapshot(q, (list) => {
      this.allUsers = [];
      list.forEach(element => {
          this.allUsers.push(this.setUserObject(element.data()));
          console.log(this.allUsers);
      });

      // Mit der docChanges kann man sich die änderungen eines Dokuments auslogen lassen.
      list.docChanges().forEach((change) => {
        if(change.type === "added") {
          console.log("New note: ", change.doc.data());
        }
        if(change.type === "modified") {
          console.log("Modified note: ", change.doc.data());
        }if(change.type === "removed") {
          console.log("Removed note: ", change.doc.data());
        }
      })
    });
  }

  getUsersRef(){
    return collection(this.firestore, 'users'); // Zugriff auf die Datenbank
    // => collection() Method greift auf die gesamte Datenbank (Collection) zu
  }

  setUserObject(obj: any): User {
    return {
      //id: obj.id || "",
      firstName: obj.firstName || "",
      lastName: obj.lastName || "",
      email: obj.email || "",
      birthDate: obj.birthDate || "" ,
      address: obj.address || "",
      zipCode: obj.zipCode || "",
      city: obj.city || "",
    }
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

}
