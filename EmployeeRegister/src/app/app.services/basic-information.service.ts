import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { EmployeeBasic } from '../app.interfaces/employee-basic';
import { Observable } from 'rxjs';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class BasicInformationService {
  constructor(private _HttpClient: HttpClient, private service : CommonService<EmployeeBasic>) {}

  baseURL = environment.apiUrl;

  GetBasicInfoById(id: any) {
    const payload = { id: id };
    return this._HttpClient.post(this.baseURL+"EmployeeBasic/GetEmployeeBasicById",payload);
  }

  GetBasicInfoByCode(Code: any) {
    const payload = { Code: Code };
    return this._HttpClient.post(this.baseURL+"EmployeeBasic/GetEmployeeBasicByCode",payload);
  }

  GetBasicInfoByCodeEF(Code: any) {
    const payload = { Code: Code };
    return this._HttpClient.post(this.baseURL+"EmployeeBasic/GetEmployeeBasicByCode",payload);
  }

  updateEmployee(employee: EmployeeBasic): Observable<EmployeeBasic> {
    return this._HttpClient.post<EmployeeBasic>(this.baseURL+"EmployeeBasic/UpdateEmployeeBasic", employee);
  }

  AddNewEmployee(employee: EmployeeBasic): Observable<EmployeeBasic> {
    return this._HttpClient.post<EmployeeBasic>(this.baseURL+"EmployeeBasic/AddNewEmployeeBasic", employee);
  }
}
