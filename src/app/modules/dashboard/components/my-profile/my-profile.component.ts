import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProfileService } from './service/profile.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  instructorData: any;
 userRole:string='';
  profileData:any={
    first_name:localStorage.getItem('userName'),
    last_name:localStorage.getItem('lastName'),
     email:localStorage.getItem('email'),
     role:localStorage.getItem('role'),
  }

  constructor(private _ProfileService: ProfileService, private _ToastrService: ToastrService,private _Router:Router) { }
  ngOnInit(): void {
    this.ProfileForm.patchValue(this.profileData);
    this.ProfileForm.get('first_name')?.disable();
    this.ProfileForm.get('email')?.disable();
    this.ProfileForm.get('role')?.disable();
    this.ProfileForm.get('password')?.disable();
  }

  hide: boolean = false;
  ProfileForm = new FormGroup({
first_name: new FormControl(null, [Validators.required]),
    last_name: new FormControl(null, [Validators.required]),
     email: new FormControl(null, [Validators.required]),
     password: new FormControl(null, [Validators.required]),
     role: new FormControl(null, [Validators.required])
  });
  onSubmit(data: FormGroup) {
    console.log(data.value);
    const myData=this.ProfileForm.value;
   /* myData.append('first_name', this.first_name); 
    myData.append('last_name',  this.last_name);
    myData.append('email', this.email);
    myData.append('role', this.role);*/
    if(this.userRole ==='Instructor'){
      const myData=this.ProfileForm.value;
      this._ProfileService.getProfileInstructor(myData).subscribe({
        next: (res) => {
          console.log(res);
          this.instructorData = res.data;
          console.log(this.instructorData);
          //this.getUser();
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          this._ToastrService.success('Updated','');
          this._Router.navigate(["dashboard/home"]);
   }
    }
   )}
   else 

    this._ProfileService.getProfileStudent(myData).subscribe({
      next: (res) => {
        console.log(res);
        this.instructorData = res.data;
        console.log(this.instructorData);
        //this.getUser();
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this._ToastrService.success('Updated','updated profile successfully');
        this._Router.navigate(["dashboard/home"]);
 }
  })
   }
    }



//   getUser() {

//     if (this.instructorData) {
//       this.ProfileForm.patchValue({
//         first_name: this.instructorData.first_name,
//         last_name: this.instructorData.last_name, // Corrected typo here
//         email: this.instructorData.email,
//         role: this.instructorData.role,
//         password: this.instructorData.password
//       });
//     }
//   }

