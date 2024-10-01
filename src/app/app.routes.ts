import { Routes } from '@angular/router';
import { RecentpageComponent } from './pages/recentpage/recentpage.component';
import { ExtraitpageComponent } from './pages/recentpage/extraitpage/extraitpage.component';
import { ResidencepageComponent } from './pages/recentpage/residencepage/residencepage.component';
import { ListeextraitComponent } from './pages/recentpage/listeextrait/listeextrait.component';
import { NewextraitComponent } from './components/newextrait/newextrait.component';
import { EditextraitComponent } from './components/editextrait/editextrait.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navbar/navigation/navigation.component';
import { authGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { DetailmariageComponent } from './pages/detailmariage/detailmariage.component';
import { DetaildivorceComponent } from './pages/detaildivorce/detaildivorce.component';
import { DetaildeceComponent } from './pages/detaildece/detaildece.component';
import { DetailresidenceComponent } from './pages/detailresidence/detailresidence.component';
import { NewresidanceComponent } from './components/newresidance/newresidance.component';
import { ListeresidanceComponent } from './pages/listeresidance/listeresidance.component';


export const routes: Routes = [
    // {path: "", component:RecentpageComponent},
    
   
    {path: "sign-up", component:InscriptionComponent},
    {path: "sign-in", component:ConnexionComponent},
   

    {
        path: '',
    component: HomeComponent,
    canActivate: [authGuard],
    children: [
     {path: "extrait/:id", component:ExtraitpageComponent},
    
    {path: "editextrait/:id", component:EditextraitComponent},
    {path: "residence/:id", component: DetailresidenceComponent},
    {path: "listeresidence", component: ListeresidanceComponent},
    {path: "listeextrait", component:ListeextraitComponent},
    {path: "", component:ListeextraitComponent},
    {path: "newextrait", component:NewextraitComponent}, 
    {path: "mariage",component: DetailmariageComponent},
    {path: "divorce",component: DetaildivorceComponent},
    {path: "dece",component: DetaildeceComponent},
   
    {path: "newresidence", component: NewresidanceComponent}
    ]
    }
   
   
];
