import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { EmployeeContact } from '../app.interfaces/employee-contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeContactService {
  constructor(private _HttpClient: HttpClient) {}

  baseURL = environment.apiUrl;

  GetContactById(id: any) {
    const payload = { id: id };
    return this._HttpClient.post(
      this.baseURL + 'EmployeeContact/GetEmployeeContactById',
      payload
    );
  }

  AddNewContact(contact: EmployeeContact): Observable<EmployeeContact> {
    return this._HttpClient.post<EmployeeContact>(
      this.baseURL + 'EmployeeContact/AddNewEmployeeContact',
      contact
    );
  }
  UpdateContact(contact: EmployeeContact): Observable<EmployeeContact> {
    return this._HttpClient.post<EmployeeContact>(
      this.baseURL + 'EmployeeContact/UpdateEmployeeContact',
      contact
    );
  }

  DeleteContact(id: any) {
    const payload = { EnpId: id };
    return this._HttpClient.post<EmployeeContact>(
      this.baseURL + 'EmployeeContact/DeleteEmployeeContact',
      payload
    );
  }
}
