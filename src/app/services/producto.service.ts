import { Producto } from './../models/producto';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productoURL = environment.productoURL;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(`${this.productoURL}`);
  }

  public detail(id: number): Observable<Producto> {
    return this.httpClient.get<Producto>(`${this.productoURL}${id}`);
  }

  public save(producto: Producto): Observable<any> {
    return this.httpClient.post<any>(`${this.productoURL}`, producto);
  }

  public update(id: number, producto: Producto): Observable<any> {
    return this.httpClient.put<any>(`${this.productoURL}${id}`, producto);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.productoURL}${id}`);
  }
}
