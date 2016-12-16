import { Injectable }   from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class ProductosService {

  url:string = '/assets/json/data.json';

  constructor(private http: Http) { }

  ngOnInit() { }

  getJson(): Promise<any> {
    return this.http.get(this.url)
        .toPromise()
        .then(response => response.json())
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Ha ocurrido un error con el llamado HTTP.', error);
    return Promise.reject(error.message || error);
  }

}