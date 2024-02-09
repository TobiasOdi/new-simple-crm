import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Firestore, doc, getDoc, collection } from '@angular/fire/firestore';
import { User } from '../models/user.class';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  userId: any;
  user: User = new User();
  constructor(private route: ActivatedRoute, private firestore: Firestore) {
    let paramId = this.route.snapshot.paramMap.get('id');
    this.userId = paramId;
    this.getUser();

  }
  
  async getUser() {
    let currentUser = doc(collection(this.firestore, 'users'), this.userId);
    let currentUserSnap = await getDoc(currentUser);
    this.user = new User(currentUserSnap.data());  // das JSON "currentUserSnap.data()" welches wir von der DB erhalten wird in ein Objekt vom Typ User umgewandelt.
    console.log('Retrieved user', this.user);
 
  }

  openAddressDialog() {

  }

  editMenu() {

  }
}
