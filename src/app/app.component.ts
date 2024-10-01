import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { NavigationComponent } from "./components/navbar/navigation/navigation.component";
import { FiltrebarComponent } from "./components/navbar/filtrebar/filtrebar.component";
import { RecentpageComponent } from "./pages/recentpage/recentpage.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet,RouterLink,CommonModule, NavigationComponent, FiltrebarComponent, RecentpageComponent, FooterComponent]
})
export class AppComponent {
 
  title = 'gestion mairie';

   constructor(public authService: AuthService){}
}
