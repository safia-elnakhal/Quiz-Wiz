import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProfileService } from './service/profile.service';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  instructorData: any;
  constructor(private _ProfileService: ProfileService) { }
  ngOnInit(): void {
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
    let myData = new FormData();
    myData.append('first_name', localStorage.getItem('first_name'));
    myData.append('last_name', data.value.last_name);
    myData.append('email', data.value.email);
    myData.append('password', data.value.password);
    myData.append('role', data.value.role);

    this._ProfileService.getProfileInstructor(myData).subscribe({
      next: (res) => {
        console.log(res);
        this.instructorData = res.data;
        console.log(this.instructorData);
        this.getUser();
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        //this.imgSrc=this.imageUrl+this.userData.imagePath
        /* debugger
         this.ProfileForm.patchValue({
           first_name:this.instructorData.first_name,
           last_name:this.instructorData.data.lastt_name,
           email:this.instructorData.email,
           role:this.instructorData.role,
           password:this.instructorData.password
 */
      }
    }
    );
  }


  getUser() {

    if (this.instructorData) {
      this.ProfileForm.patchValue({
        first_name: this.instructorData.first_name,
        last_name: this.instructorData.last_name, // Corrected typo here
        email: this.instructorData.email,
        role: this.instructorData.role,
        password: this.instructorData.password
      });
    }
  }
}
