import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


const openSeaURL = environment.openSeaUrl

@Injectable({
  providedIn: 'root'
})
export class OpenSeaServiceService {
   
  constructor(private http: HttpClient) {

   }


   getAllFirstCollections(){

    return this.http.get<any>(`${openSeaURL}/assets?asset_contract_addresses=${environment.smartContract}&order_direction=asc&offset=0&limit=20`)

   }
}
