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
     role:localStorage.getItem('userRole'),
  }

  constructor(private _ProfileService: ProfileService, private _ToastrService: ToastrService,private _Router:Router) { }
  ngOnInit(): void {
    this.ProfileForm.patchValue(this.profileData);
    this.ProfileForm.get('role')?.disable();
  }

  hide: boolean = false;
  ProfileForm = new FormGroup({
first_name: new FormControl(null, [Validators.required]),
    last_name: new FormControl(null, [Validators.required]),
     email: new FormControl(null, [Validators.required]),
     role: new FormControl(null, [Validators.required])
  });
  onSubmit(data: FormGroup) {
    console.log(data.value);
    const myData=this.ProfileForm.value;
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

