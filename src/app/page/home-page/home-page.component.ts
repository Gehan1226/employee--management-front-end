import { Component } from '@angular/core';
import { NavComponent } from "../../common/nav/nav.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
