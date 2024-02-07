import { Component, inject} from '@angular/core';
import { User } from '../../app/models/user.class';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})

export class DialogAddUserComponent {
  user = new User();
  birthDate?: Date;

  db: Firestore = inject(Firestore);
  usersCollection = collection(this.db, 'users');

  userData = this.user.toJSON();
  
  constructor() { }

async saveUser() {
    if(this.birthDate != undefined) {
      this.user.birthDate = this.birthDate.getTime();
      console.log('Current user is', this.user);
      await addDoc(this.usersCollection, this.userData);
    }
  }
}
