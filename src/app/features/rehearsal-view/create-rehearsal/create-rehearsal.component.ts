import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RehearsalService} from "../../../core/services/rehearsal.service";
import {TheaterService} from "../../../core/services/theater.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-create-rehearsal',
  templateUrl: './create-rehearsal.component.html',
  styleUrls: ['./create-rehearsal.component.css'],
  imports: [
    FormsModule,
    NgForOf
  ],
  standalone: true
})
export class CreateRehearsalComponent implements OnInit{

  startDate: string = this.getFormattedDate(new Date());
  endDate: string = this.getFormattedDate(new Date());
  hallId: string = '';
  halls: any[] = [];

  ngOnInit(): void {
    this.theaterService.getTheaterHalls(this.rehearsalService.theaterId).then(response => {
      this.halls = response.data;
    });
  }

  constructor(private rehearsalService: RehearsalService, private theaterService: TheaterService) {
  }

  private getFormattedDate(date: Date): string {
    const year = date.getFullYear();
    const month = this.padZero(date.getMonth() + 1);
    const day = this.padZero(date.getDate());
    const hours = this.padZero(date.getHours());
    const minutes = this.padZero(date.getMinutes());

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  private padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  onHallSelected(id: string) {
    this.hallId = id;
  }

  onCreateRehearsal() {
    this.rehearsalService.onRehearalCreate(this.startDate, this.endDate, this.hallId)
  }
}
