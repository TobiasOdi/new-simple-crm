import { Component} from '@angular/core';
import { User } from '../../app/models/user.class';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {
  user = new User();
  birthDate?: Date;

  //firestore: Firestore = inject(Firestore);

  constructor() {}

  saveUser() {
    if(this.birthDate != undefined) {
      this.user.birthDate = this.birthDate.getTime();
      console.log('Current user is', this.user);

/*       this.firestore.collection('users').add(this.user.toJSON()).then((result: any) => {
        console.log('Adding user finished', result);
      }); */
    }
  }

}
