import { Component, Input } from '@angular/core';
import { Extrait } from '../../../models/extrait';
import { ExtraitService } from '../../../services/extrait.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-extraitpage',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './extraitpage.component.html',
  styleUrl: './extraitpage.component.scss'
})
export class ExtraitpageComponent {
  //  @Input() extraitId!: String;
   extrait: any; 

   constructor(private extraitService: ExtraitService, private route: ActivatedRoute){}

   ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.extraitService.getExtrait(id).subscribe(data => {
        this.extrait = data;
      });
    }
}


  

}