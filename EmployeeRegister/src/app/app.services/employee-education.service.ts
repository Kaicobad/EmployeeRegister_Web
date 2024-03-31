import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { EmployeeEducation } from '../app.interfaces/employee-education';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeEducationService {
  constructor(private _HttpClient: HttpClient) {}

  baseURL = environment.apiUrl;

  GetEducationById(id: any) {
    const payload = { id: id };
    return this._HttpClient.post(
      this.baseURL + 'EmployeeEducation/GetEmployeeEducationById',
      payload
    );
  }
  GetEducationByEmpId(id: any) {
    const payload = { id: id };
    return this._HttpClient.post(
      this.baseURL + 'EmployeeEducation/GetEmployeeEducationByEmpId',
      payload
    );
  }

  AddNewEducation(education: EmployeeEducation): Observable<EmployeeEducation> {
    return this._HttpClient.post<EmployeeEducation>(
      this.baseURL + 'EmployeeEducation/AddEmployeeEducation',
      education
    );
  }
  UpdateEducation(education: EmployeeEducation): Observable<EmployeeEducation> {
    return this._HttpClient.post<EmployeeEducation>(
      this.baseURL + 'EmployeeEducation/UpdateEmployeeEducation',
      education
    );
  }

  DeleteEducation(id: any) {
    const payload = { id: id };
    return this._HttpClient.post<EmployeeEducation>(
      this.baseURL + 'EmployeeEducation/DeleteEmployeeEducation',
      payload
    );
  }
}
