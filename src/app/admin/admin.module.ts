import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../../environments/environment';
import { AdminRoutingModule } from './admin-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule,
   MatButtonModule,
    MatSidenavModule,
     MatIconModule,
      MatListModule, 
      MatFormFieldModule,
       MatTableModule,
        MatPaginatorModule,
         MatInputModule,
          MatStepperModule, 
          MatExpansionModule,
          MatDatepickerModule,
          MatRadioModule,
          MatNativeDateModule,
          MatSelectModule} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatStepperModule,
    MatButtonModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatNativeDateModule,
    MatSelectModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  declarations: [
    SidenavComponent,
    HomeComponent,
    UserDetailComponent
  ],
  exports:[UserDetailComponent,HomeComponent,SidenavComponent]
})
export class AdminModule { }
