export class EmployeeEducation {
  id?: number;
  empId?: number;
  degreeID?: number;
  boardID?: number;
  document?: string;
  passingYear?: number;
  institute?: string;
  subjectName?: string;
  result?: string;
  outOf?: string;

  constructor(data?: Partial<EmployeeEducation>) {
    if (data) {
      Object.assign(this, data);
    }
  }
}
