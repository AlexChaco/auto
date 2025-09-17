import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { QouteComponent } from './pages/qoute/qoute.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'sobre-nosotros', component: AboutmeComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'agendar-cita', component: AppointmentComponent },
  { path: 'cotizar', component: QouteComponent },
  { path: 'login', component: LoginComponent },
];
