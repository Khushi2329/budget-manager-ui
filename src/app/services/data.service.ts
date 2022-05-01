import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseUrl = 'http://localhost:3000';

  constructor(readonly http: HttpClient) {}

  getPartyMasterData() {
    return this.http.get(`${this.baseUrl}/party-master`);
  }

  getGSTMasterData() {
    return this.http.get(`${this.baseUrl}/gst-master`);
  }

  getBranchMasterData() {
    return this.http.get(`${this.baseUrl}/branch-master`);
  }

  getStationMasterData() {
    return this.http.get(`${this.baseUrl}/station-master`);
  }

  getUserMasterData() {
    return this.http.get(`${this.baseUrl}/users`);
  }

  getTruckMakeMasterData() {
    return this.http.get(`${this.baseUrl}/truck-make-master`);
  }

  createPartyMaster(body: any) {
    return this.http.post(`${this.baseUrl}/party-master`, body);
  }

  createGstMaster(body: any) {
    return this.http.post(`${this.baseUrl}/gst-master`, body);
  }

  createBranchMaster(body: any) {
    return this.http.post(`${this.baseUrl}/branch-master`, body);
  }

  createStationMaster(body: any) {
    return this.http.post(`${this.baseUrl}/station-master`, body);
  }

  createUser(body: any) {
    return this.http.post(`${this.baseUrl}/signup`, body);
  }
  
  createTruckMakeMaster(body: any) {
    return this.http.post(`${this.baseUrl}/truck-make-master`, body);
  }
}
