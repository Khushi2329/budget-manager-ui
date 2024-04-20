import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseUrl = 'http://localhost:3000';

  constructor(readonly http: HttpClient) {}

  getCategoryMasterData() {
    return this.http.get(`${this.baseUrl}/category-master`);
  }

  getUserMasterData() {
    return this.http.get(`${this.baseUrl}/users`);
  }

  createUser(body: any) {
    return this.http.post(`${this.baseUrl}/signup`, body);
  }

  createCategoryMaster(body: any) {
    return this.http.post(`${this.baseUrl}/category-master`, body);
  }

  getExpensesData(name: string) {
    return this.http.get(`${this.baseUrl}/expenses/${name}`);
  }

  addExpenses(body: any) {
    return this.http.post(`${this.baseUrl}/expenses`, body);
  }
}
