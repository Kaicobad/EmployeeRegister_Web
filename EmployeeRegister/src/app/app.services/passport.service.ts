import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { EmployeePassport } from '../app.interfaces/employee-passport';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PassportService {
  constructor(private _HttpClient: HttpClient) {}

  baseURL = environment.apiUrl;

  GetPassportById(id: any) {
    const payload = { id: id };
    return this._HttpClient.post(
      this.baseURL + 'Passport/GetPassportById',
      payload
    );
  }

  AddPassport(passport: EmployeePassport): Observable<EmployeePassport> {
    return this._HttpClient.post<EmployeePassport>(
      this.baseURL + '/Passport/AddNewPassport',
      passport
    );
  }
  UpdatePassport(passport: EmployeePassport): Observable<EmployeePassport> {
    return this._HttpClient.post<EmployeePassport>(
      this.baseURL + 'Passport/UpdatePassport',
      passport
    );
  }

  DeletePassport(id: any) {
    const payload = { EmpId: id };
    return this._HttpClient.post<EmployeePassport>(
      this.baseURL + 'Passport/DeletePassport',
      payload
    );
  }
}
