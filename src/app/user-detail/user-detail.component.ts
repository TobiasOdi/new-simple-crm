import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Firestore, doc, getDoc, collection, onSnapshot } from '@angular/fire/firestore';
import { User } from '../models/user.class';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {
  userId: any;
  user: User = new User();

  constructor(private route: ActivatedRoute, private firestore: Firestore, public dialog: MatDialog) {
    let paramId = this.route.snapshot.paramMap.get('id');
    this.userId = paramId;
    this.getUser();
  }

  ngOnInit(): void {
    let paramId = this.route.snapshot.paramMap.get('id');
    this.userId = paramId;
    this.getUser();
  }
  
  async getUser() {
    //let currentUser = doc(collection(this.firestore, 'users'), this.userId);
    //let currentUserSnap = await getDoc(currentUser);

    onSnapshot(doc(collection(this.firestore, 'users'), this.userId), (doc) => {
      this.user = new User(doc.data());
    });

    //this.user = new User(currentUserSnap);  // das JSON "currentUserSnap.data()" welches wir von der DB erhalten wird in ein Objekt vom Typ User umgewandelt.
    console.log('Retrieved user', this.user);
  }

  editUserDetails() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user); // Die Daten welche nun bei user enthalten sind müssen in die Kompnente "DialogEditUserComponent" kopiert werden.
    dialog.componentInstance.userId = this.userId;                          // Dies macht man in dem man einer Varibalen einen "new User()" zuweist und die Daten übergibt => "new User(this.user)"
  }                                                        

  editUserAddress() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.user); // Die Daten welche nun bei user enthalten sind müssen in die Kompnente "DialogEditUserComponent" kopiert werden.
    dialog.componentInstance.userId = this.userId;                          // Dies macht man in dem man einer Varibalen einen "new User()" zuweist und die Daten übergibt => "new User(this.user)"
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
