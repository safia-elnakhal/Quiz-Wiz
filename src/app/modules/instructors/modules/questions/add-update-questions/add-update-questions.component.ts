import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-update-questions',
  templateUrl: './add-update-questions.component.html',
  styleUrls: ['./add-update-questions.component.scss']
})
export class AddUpdateQuestionsComponent {
  userName = localStorage.getItem('userName');
  name: string = '';
  constructor(
    public dialogRef: MatDialogRef<AddUpdateQuestionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  
  onNoClick(): void {
    this.dialogRef.close();
  }

}
