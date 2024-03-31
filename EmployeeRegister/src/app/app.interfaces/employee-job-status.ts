export class EmployeeJobStatus {
    id?: number;
    empID?: number;
    companyName?: string;
    department?: string;
    designation?: string;
    position?: string;
    startDate?: Date;
    endDate?: Date;
    totalDuration?: string;
    responsibility?: string;
    companyAddress?: string;
    entryDate?: Date;
    document?: string;

    constructor(data?: Partial<EmployeeJobStatus>) {
        if (data) {
            Object.assign(this, data);
        }
    }
}