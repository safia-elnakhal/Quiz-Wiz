import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.scss']
})
export class AddEditStudentComponent {
  constructor(
    public dialogRef: MatDialogRef<AddEditStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
