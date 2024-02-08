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
      console.log('Current user is', this.user);
      await addDoc(this.usersCollection, this.user.toJSON());
      this.loading = false;
      this.dialogRef.close();
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
