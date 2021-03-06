import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  getPatients = (input: string): Observable<[]> => {
    const url = this.apiUrl + "patientSearch";
    const params = new HttpParams().set("name", input);
    return this.http.get<[]>(url, { params: params });
  }

  getReportByMonth = (month: string): Observable<[]> => {
    const url = this.apiUrl + "monthReport";
    const params = new HttpParams().set("month", month);
    return this.http.get<[]>(url, { params: params });
  }

  getPatientsByStatus = (status: string, reportDate: string): Observable<[]> => {
    const url = this.apiUrl + "patientsStatus";
    const params = new HttpParams().set("status", status).set("reportDate", reportDate);
    return this.http.get<[]>(url, { params: params });
  }
}
