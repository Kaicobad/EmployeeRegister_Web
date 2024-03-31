import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { EmployeeNominee } from '../app.interfaces/employee-nominee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeNomineeService {
  constructor(private _HttpClient: HttpClient) {}

  baseURL = environment.apiUrl;

  GetNomineeById(id: any) {
    const payload = { id: id };
    return this._HttpClient.post(
      this.baseURL + 'EmployeeNominee/GetEmployeeNomineeById',
      payload
    );
  }
  GetNomineeByEmpId(id: any) {
    const payload = { EmpId: id };
    return this._HttpClient.post(
      this.baseURL + 'EmployeeNominee/GetEmployeeNomineeByEmpId',
      payload
    );
  }

  Addnominee(nominee: EmployeeNominee): Observable<EmployeeNominee> {
    return this._HttpClient.post<EmployeeNominee>(
      this.baseURL + 'EmployeeNominee/AddEmployeeNominee',
      nominee
    );
  }
  UpdateNominee(nominee: EmployeeNominee): Observable<EmployeeNominee> {
    return this._HttpClient.post<EmployeeNominee>(
      this.baseURL + 'EmployeeNominee/UpdateEmployeeNominee',
      nominee
    );
  }

  DeleteNominee(id: any) {
    const payload = { NomineeId: id };
    return this._HttpClient.post<EmployeeNominee>(
      this.baseURL + 'EmployeeNominee/DeleteEmployeeNominee',
      payload
    );
  }
}
