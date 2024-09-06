import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const FILM_URL: string = `${environment.urlBase}film/catalog`;

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor( private http: HttpClient ) { }

  getCatalog() {
    return this.http.get<any>( FILM_URL );
  }
}