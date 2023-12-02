export class EventListModel {

  startDate: number[];
  endDate: number[];
  startDateString: string;
  endDateString: string;
  eventType: string;
  hall: any;
  theatreArt: any;


  constructor(startDate: number[], endDate: number[], eventType: string, hall: any, art: any) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.eventType = eventType;
    this.hall = hall;
    this.theatreArt = art;
    this.startDateString = this.startDate[2] + '.' + this.startDate[1] + '.' + this.startDate[0];
    this.endDateString = this.endDate[2] + '.' + this.endDate[1] + '.' + this.endDate[0];
  }
}
