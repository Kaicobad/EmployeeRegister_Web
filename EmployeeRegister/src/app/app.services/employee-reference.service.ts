import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { EmployeeReference } from '../app.interfaces/employee-reference';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeReferenceService {
  constructor(private _HttpClient: HttpClient) {}

  baseURL = environment.apiUrl;

  GetReferenceById(id: any) {
    const payload = { id: id };
    return this._HttpClient.post(
      this.baseURL + 'EmployeeReference/GetEmployeeReferenceById',
      payload
    );
  }

  GetReferenceByEmpId(id: any) {
    const payload = { EmpId: id };
    return this._HttpClient.post(
      this.baseURL + 'EmployeeReference/GetEmployeeReferenceByEmpId',
      payload
    );
  }

  AddReference(reference: EmployeeReference): Observable<EmployeeReference> {
    return this._HttpClient.post<EmployeeReference>(
      this.baseURL + 'EmployeeReference/AddEmployeeReference',
      reference
    );
  }
  UpdateReference(reference: EmployeeReference): Observable<EmployeeReference> {
    return this._HttpClient.post<EmployeeReference>(
      this.baseURL + 'EmployeeReference/UpdateEmployeeReference',
      reference
    );
  }

  DeleteReference(id: any){
    const payload = { ID: id };
    return this._HttpClient.post<EmployeeReference>(
      this.baseURL + 'EmployeeReference/DeleteEmployeeReference',
      payload
    );
  }
}
