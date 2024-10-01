import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { error } from 'console';
import { CommonModule } from '@angular/common';
import { User } from '../../core/Model/object-model';
import { response } from 'express';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,CommonModule,FormsModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss'
})
export class ConnexionComponent implements OnInit {
    loginForm!: FormGroup;
    
  
    constructor(private fb:FormBuilder, private router:Router, private loginService:AuthService){
  
    }
    ngOnInit():void{
     
  
      this.loginForm = this.fb.group({
        
        email: ['', [Validators.required,]],
        password: ['', [Validators.required,]],
       
      });
      
      
    }
    
  
      
      


      
    onSubmit(): void {
      if(this.loginForm.valid){
        this.loginService.login(this.loginForm.value).subscribe({
          next: (response)  => console.log('connexion reussie',response),
          error: (error)  => console.log('connexion echouer',error),
          
        });
        this.router.navigate( ['/'] )
      }
      
    }
      
      
}
