import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../services/auth.service';
import { NuevoUsuarioDto } from './../models/nuevo-usuario.dto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: NuevoUsuarioDto = null;

  nombre: string;
  nombreUsuario: string;
  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onRegister(): void {
    this.usuario = new NuevoUsuarioDto(this.nombre, this.nombreUsuario, this.email, this.password);
    this.authService.registro(this.usuario).subscribe(
      data => {
        this.toastrService.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/login']);
      },
      err => {
        this.toastrService.error(err.error.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

}
