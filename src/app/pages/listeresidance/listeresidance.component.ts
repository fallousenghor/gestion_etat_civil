import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Residence } from '../../models/extrait';
import { ResidenceService } from '../../services/residence/residence.service';

@Component({
  selector: 'app-listeresidance',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './listeresidance.component.html',
  styleUrl: './listeresidance.component.scss'
})
export class ListeresidanceComponent {
  residence: Residence[] = [];
  

  constructor(private residenceService : ResidenceService){}

   ngOnInit():void{
    this.residenceService.getResidences().subscribe((data:any) =>{
         this.residence = data  ;
    });
   }

}
