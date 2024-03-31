import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeTraining } from '../app.interfaces/employee-training';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EmployeeTrainingService 
{
  constructor(private _HttpClient: HttpClient) {}

  baseURL = environment.apiUrl;

  GetTrainingById(id: any) : Observable<EmployeeTraining> {
    const payload = { id: id };
    return this._HttpClient.post(
      this.baseURL + 'EmployeeTraining/GetEmployeeTrainingById',
      payload
    );
  }
  GetTrainingByEmpId(id: any) :Observable<EmployeeTraining> {
    const payload = { EmpId: id };
    return this._HttpClient.post(
      this.baseURL + 'EmployeeTraining/GetEmployeeTrainingByEmpId',
      payload
    );
  }

  AddTraining(Training: EmployeeTraining): Observable<EmployeeTraining> {
    return this._HttpClient.post<EmployeeTraining>(
      this.baseURL + 'EmployeeTraining/AddEmployeeTraining',
      Training
    );
  }
  UpdateTraining(training: EmployeeTraining): Observable<EmployeeTraining> {
    return this._HttpClient.post<EmployeeTraining>(
      this.baseURL + 'EmployeeTraining/UpdateEmployeeTraining',
      training
    );
  }

  DeleteTraining(id: any): Observable<any> {
    const payload = { TrainingId: id };
    return this._HttpClient.post<EmployeeTraining>(
      this.baseURL + 'EmployeeTraining/DeleteEmployeeTraining',
      payload
    );
  }
}
