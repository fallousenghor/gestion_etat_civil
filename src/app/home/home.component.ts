import { Component } from '@angular/core';
import { FooterComponent } from "../components/footer/footer.component";
import { NavigationComponent } from "../components/navbar/navigation/navigation.component";
import { RouterOutlet } from '@angular/router';
import { FiltrebarComponent } from "../components/navbar/filtrebar/filtrebar.component";
import { LoaderComponent } from "../components/loader/loader.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, NavigationComponent, RouterOutlet, FiltrebarComponent, LoaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
