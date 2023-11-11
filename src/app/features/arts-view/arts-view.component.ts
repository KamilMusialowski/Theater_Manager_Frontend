import { Component } from '@angular/core';
import {
  ExpandableCreateSectionComponent
} from "./create-art/expandable-create-section/expandable-create-section.component";

@Component({
  selector: 'app-arts-view',
  templateUrl: './arts-view.component.html',
  styleUrls: ['./arts-view.component.css'],
  imports: [
    ExpandableCreateSectionComponent
  ],
  standalone: true
})
export class ArtsViewComponent {

}
