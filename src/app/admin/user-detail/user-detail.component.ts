import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
//state
states: string[] = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

//DOB
  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
  public personaldetails:FormGroup;
  constructor(private fdb:AngularFireDatabase) { 
    this.personaldetails= new FormGroup({
        fname: new FormControl(),
        lname:new FormControl(),
        dob:new FormControl(),
        gender:new FormControl(),
        mobno:new FormControl(),
        alternativecontact:new FormGroup({
          name:new FormControl(),
          contact:new FormControl(),
          email:new FormControl()          
        }),
        address:new FormGroup({
          location:new FormControl(),
          flatno:new FormControl(),
          wingname:new FormControl(),
          societyname:new FormControl(),
          state:new FormControl(),
          district:new FormControl(),
          tehsil:new FormControl(),
          landmark:new FormControl(),
          area:new FormControl()
         }),
         officedetail:new FormGroup({
           orgname:new FormControl(),
           gstno:new FormControl(),
           address:new FormControl(),
           role:new FormGroup({
             admin:new FormControl(),
             accountant:new FormControl(),
             db1:new FormControl(),
             db2:new FormControl()             
           })
         }),
         godown:new FormGroup({
           officedetail:new FormControl()
         })

    })
  }

  ngOnInit() {
  }
  email = new FormControl('', [Validators.required, Validators.email]);

  gender: string[] = ['Male', 'female']; 

  address: string[] = ['Yes', 'No'];
  
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  


}
