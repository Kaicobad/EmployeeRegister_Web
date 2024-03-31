export class EmployeeReference {
    id?: number;
    empID?: number;
    refName?: string;
    companyName?: string;
    designation?: string;
    relation?: string;
    phoneNo?: string;
    email?: string;
    telephoneNo?: string;
    entryDate?: Date;

    constructor(data?: Partial<EmployeeReference>) {
        if (data) {
            Object.assign(this, data);
        }
    }
}
