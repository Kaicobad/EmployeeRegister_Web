export class EmployeePassport {
  empID?: number;
  passportNo: string = '';
  pIssueDate?: Date;
  pExpireDate?: Date;
  pAuthorityCountryID: number = 0;

  constructor(data?: Partial<EmployeePassport>) {
    if (data) {
      Object.assign(this, data);
    }
  }
}
