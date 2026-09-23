import { Injectable } from '@angular/core';
import { Product } from '../classes/IProduct';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductHttpService {
    private _url: string ="datasets/products.json"
    constructor (private _http: HttpClient){}
    getProductList (): Observable <Product[]>{
        return this._http.get<Product[]>(this._url); 
    }
}
