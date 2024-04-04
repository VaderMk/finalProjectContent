import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private uri: string = 'http://localhost:8080/api/products';

  constructor(private httpReq: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpReq.get<Product[]>(this.uri);
  }
}
