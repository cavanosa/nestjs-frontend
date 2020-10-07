import { TokenService } from './../services/token.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nombreUsuario: string;

  constructor(
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.nombreUsuario = this.tokenService.getNombreUsuario();
  }

}
