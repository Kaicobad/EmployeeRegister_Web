import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { DrivingLicense } from '../app.interfaces/driving-license';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DrivingLicenseService {
  constructor(private _HttpClient: HttpClient) {}

  baseURL = environment.apiUrl;

  GetDrivingLicenseById(id: any) {
    const payload = { id: id };
    return this._HttpClient.post(
      this.baseURL + 'DrivingLicense/GetDrivingLicenseById',
      payload
    );
  }

  AddNewDrivingLicense(
    drivingLicense: DrivingLicense
  ): Observable<DrivingLicense> {
    return this._HttpClient.post<DrivingLicense>(
      this.baseURL + 'DrivingLicense/AddNewDrivingLicense',
      drivingLicense
    );
  }
  UpdateDrivingLicense(
    drivingLicense: DrivingLicense
  ): Observable<DrivingLicense> {
    return this._HttpClient.post<DrivingLicense>(
      this.baseURL + 'DrivingLicense/UpdateDrivingLicense',
      drivingLicense
    );
  }

  DeleteDrivingLicense(id: any) {
    const payload = { EmpId: id };
    return this._HttpClient.post<DrivingLicense>(
      this.baseURL + 'DrivingLicense/DeleteDrivingLicense',
      payload
    );
  }
}
