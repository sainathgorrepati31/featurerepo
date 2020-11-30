import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Feature } from './feature';

@Injectable({
  providedIn: 'root'
})
export class FeatureserviceService {

  constructor( private httpClient:HttpClient ) { }

  getFeatureList():Observable<any>{
    console.log("Getting features list.");
    return this.httpClient.get<any>("http://localhost:8080/listfeatures?name=feature");
  }

  addFeature(feature : Feature):Observable<any>{
    console.log("In service save method. Data is = "+feature);
    return this.httpClient.post<any>("http://localhost:8080/addfeature",feature);
  }

}
