import { ProductoGuard } from './guards/producto.guard';
import { LoginGuard } from './guards/login.guard';
import { RegistroComponent } from './auth/registro.component';
import { LoginComponent } from './auth/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProductoComponent } from './producto/lista-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto.component';
import { EditarProductoComponent } from './producto/editar-producto.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'lista', component: ListaProductoComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin', 'user']}},
  {path: 'detalle/:id', component: DetalleProductoComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin', 'user']}},
  {path: 'nuevo', component: NuevoProductoComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin']}},
  {path: 'editar/:id', component: EditarProductoComponent, canActivate: [ProductoGuard], data: {expectedRol: ['admin']}},
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  {path: 'registro', component: RegistroComponent, canActivate: [LoginGuard]},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
