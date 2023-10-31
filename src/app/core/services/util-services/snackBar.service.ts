import {Injectable} from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({providedIn: "root"})
export class SnackBarService {

  constructor(private snackBar: MatSnackBar) {
  }

  showSnackBarWithDuration(message: string, _duration: number = 5) {
    this.snackBar.open(message, "Okay", {
      duration: _duration*1000
    });
  }
}
