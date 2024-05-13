import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-joined-successfully',
  templateUrl: './joined-successfully.component.html',
  styleUrls: ['./joined-successfully.component.scss']
})
export class JoinedSuccessfullyComponent {
  constructor(
    private dialogRef: MatDialogRef<JoinedSuccessfullyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick() {
    this.dialogRef.close();
  }

}
