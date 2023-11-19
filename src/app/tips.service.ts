import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TipsService {
  
  constructor(private http: HttpClient){}

  public getTips(): Observable<any>{
    return this.http.get('assets/ngTips-SJP.json');
  }
}
