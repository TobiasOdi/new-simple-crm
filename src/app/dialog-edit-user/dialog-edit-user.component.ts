import { Component } from '@angular/core';
import { User } from '../models/user.class';
import { MatDialogRef } from '@angular/material/dialog';
import { Firestore, updateDoc, doc } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent {
  user!: User;
  loading = false;
  userId: any;

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>, private firestore: Firestore, private route: ActivatedRoute) {}

  saveUser() {
    this.loading = true;
    let currentUserRef = doc(this.firestore, 'users', this.userId);
    updateDoc(currentUserRef, this.getCleanJSON(this.user)).then(() => {
      this.loading = false;
      this.closeDialog();
      console.log(this.user);
    });
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
