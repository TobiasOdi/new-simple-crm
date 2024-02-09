import { Component, inject} from '@angular/core';
import { User } from '../../app/models/user.class';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';

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

  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) { }

  async saveUser() {
    if (this.birthDate != undefined) {
      this.loading = true;
      this.user.birthDate = this.birthDate.getTime();
      //let userId = Math.floor(Math.random() * 1000000).toString();
      //this.user.id = userId;
      await addDoc(this.usersCollection, this.getCleanJSON(this.user));
      this.loading = false;
      this.dialogRef.close();
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  getCleanJSON(user: User) {
    return {
        'id': user.id,
        'firstName': user.firstName,
        'lastName': user.lastName,
        'email': user.email,
        'birthDate': user.birthDate,
        'address': user.address,
        'zipCode': user.zipCode,
        'city': user.city
    }
  }
}


