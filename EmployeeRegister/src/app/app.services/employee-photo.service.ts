import { Injectable } from '@angular/core';
import { EmployeePhoto } from '../app.interfaces/employee-photo';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeePhotoService {
  constructor(private _HttpClient: HttpClient) {}

  baseURL = environment.apiUrl;

  GetPhototById(id: any) {
    const payload = { id: id };
    return this._HttpClient.post(
      this.baseURL + 'EmployeePhoto/GetEmployeePhotoById',
      payload
    );
  }
  GetPhototByEmpId(id: any) {
    const payload = { EmpId: id };
    return this._HttpClient.post(
      this.baseURL + 'EmployeePhoto/GetEmployeePhotoByEmpId',
      payload
    );
  }

  AddPhoto(Photo: EmployeePhoto): Observable<EmployeePhoto> {
    return this._HttpClient.post<EmployeePhoto>(
      this.baseURL + 'EmployeePhoto/AddEmployeePhoto',
      Photo
    );
  }
  UpdatePhoto(Photo: EmployeePhoto): Observable<EmployeePhoto> {
    return this._HttpClient.post<EmployeePhoto>(
      this.baseURL + 'EmployeePhoto/UpdateEmployeePhoto',
      Photo
    );
  }

  DeletePhoto(id: any) {
    const payload = { EmpId: id };
    return this._HttpClient.post<EmployeePhoto>(
      this.baseURL + 'EmployeePhoto/DeleteEmployeePhoto',
      payload
    );
  }
}
