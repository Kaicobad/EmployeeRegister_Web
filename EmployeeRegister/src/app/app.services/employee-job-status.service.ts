import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { EmployeeJobStatus } from '../app.interfaces/employee-job-status';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeJobStatusService {
  constructor(private _HttpClient: HttpClient) {}

  baseURL = environment.apiUrl;

  GetJobStatusById(id: any) {
    const payload = { id: id };
    return this._HttpClient.post(
      this.baseURL + 'EmployeeEducation/GetEmployeeJobStatusById',
      payload
    );
  }
  GetJobStatusByEmpId(id: any) {
    const payload = { id: id };
    return this._HttpClient.post(
      this.baseURL + 'EmployeeEducation/GetEmployeeJobStatusByEmpId',
      payload
    );
  }

  AddNewJobStatus(jobstatus: EmployeeJobStatus): Observable<EmployeeJobStatus> {
    return this._HttpClient.post<EmployeeJobStatus>(
      this.baseURL + 'EmployeeEducation/AddEmployeeJobStatus',
      jobstatus
    );
  }
  UpdateJobStatus(jobstatus: EmployeeJobStatus): Observable<EmployeeJobStatus> {
    return this._HttpClient.post<EmployeeJobStatus>(
      this.baseURL + 'EmployeeEducation/UpdateEmployeeJobStatus',
      jobstatus
    );
  }

  DeleteJobStatus(id: any) {
    const payload = { id: id };
    return this._HttpClient.post<EmployeeJobStatus>(
      this.baseURL + 'EmployeeEducation/DeleteEmployeeJobStatus',
      payload
    );
  }
}
