import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { RegisterGuard } from './register.guard';
import { UnauthorizeComponent } from './unauthorize/unauthorize.component';


const routes: Routes = [
    {
        path:'',
        redirectTo:'/events',
        pathMatch:'full'
    },
    {
        path:'events',
        component:EventsComponent
    },
    {
        path:'special',
        component:SpecialEventsComponent,
        canActivate: [AuthGuard]
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'register',
        component:RegisterComponent,
        canActivate: [RegisterGuard]
    },
    {
        path:'unauthorize',
        component:UnauthorizeComponent
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}
