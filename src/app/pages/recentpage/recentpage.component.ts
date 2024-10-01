import { Component } from '@angular/core';
import { ExtraitpageComponent } from "./extraitpage/extraitpage.component";
import { RouterLink } from '@angular/router';
import { ExtraitService } from '../../services/extrait.service';
import { Extrait } from '../../models/extrait';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recentpage',
  standalone: true,
  imports: [ExtraitpageComponent,RouterLink,CommonModule],
  templateUrl: './recentpage.component.html',
  styleUrl: './recentpage.component.scss'
})
export class RecentpageComponent {
  extraits: Extrait[] = [];

  constructor(private extraitService : ExtraitService){}

   ngOnInit():void{
    this.extraitService.getExtraits().subscribe((data:any) =>{
         this.extraits = data  ;
    });
   }
}
