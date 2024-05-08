import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-question',
  templateUrl: './delete-question.component.html',
  styleUrls: ['./delete-question.component.scss']
})
export class DeleteQuestionComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteQuestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
  
  onNoClick(){
    this.dialogRef.close();
  }
}

