import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.scss']
})
export class DeleteStudentComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
  
  onNoClick(){
    this.dialogRef.close();
  }

}
