export class DrivingLicense {
  empID?: number;
  drivingLicense?: string;
  dIssueDate?: Date;
  dExpireDate?: Date;
  dAuthorityCountryID?: number;

  constructor(data?: Partial<DrivingLicense>) {
    if (data) {
      Object.assign(this, data);
    }
  }
}
