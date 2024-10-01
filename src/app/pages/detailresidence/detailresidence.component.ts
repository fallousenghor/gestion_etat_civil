import { Component } from '@angular/core';
import { Residence } from '../../models/extrait';
import { ResidenceService } from '../../services/residence/residence.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detailresidence',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './detailresidence.component.html',
  styleUrl: './detailresidence.component.scss'
})
export class DetailresidenceComponent {
  r: any; 

   constructor(private residenceService: ResidenceService , private route: ActivatedRoute){}

   ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.residenceService.getResidence(id).subscribe(data => {
        this.r = data;
      });
    }
}
}
