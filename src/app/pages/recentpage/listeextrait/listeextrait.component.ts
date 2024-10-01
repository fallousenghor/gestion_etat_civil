import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ExtraitService } from '../../../services/extrait.service';
import { Extrait } from '../../../models/extrait';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SearchService } from '../../../services/search/search.service';

@Component({
  selector: 'app-listeextrait',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './listeextrait.component.html',
  styleUrl: './listeextrait.component.scss'
})
export class ListeextraitComponent {
 
 
  
  
  extrait: any[]=[];
  filterPersonne: any;
  private searchSubscription!: Subscription ;



  constructor( private extraitService : ExtraitService, private fb: FormBuilder,private sS :SearchService){}

   ngOnInit():void{
    
    this.extraitService.getExtraits().subscribe((data:any) =>{
         this.extrait = data  ;
         this.filterPersonne = data;
    });

    this.searchSubscription = this.sS.searchText$.subscribe(text=>{
      this.filterPersonne = this.extrait.filter(extrait =>
        extrait.prenom.toLowerCase().includes(text.toLowerCase())
      )
    });

    
    }
    onDestroy(): void {
      if(this.searchSubscription){
        this.searchSubscription.unsubscribe();
      }
   }

   



   
}
