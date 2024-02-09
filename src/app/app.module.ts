import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DialogAddUserComponent } from './dialog-add-user/dialog-add-user.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule} from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';


import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { DialogEditAddressComponent } from './dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from './dialog-edit-user/dialog-edit-user.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DashboardComponent,
    DialogAddUserComponent,
    UserDetailComponent,
    DialogEditAddressComponent,
    DialogEditUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-604df","appId":"1:688396289569:web:8c93ced180f7afcbe2c560","storageBucket":"simple-crm-604df.appspot.com","apiKey":"AIzaSyBlkq-AEaCEuW-CqeMLTk0QyB_9e204cWQ","authDomain":"simple-crm-604df.firebaseapp.com","messagingSenderId":"688396289569"})),
    provideFirestore(() => getFirestore()),
    MatProgressBarModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideNativeDateAdapter(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
