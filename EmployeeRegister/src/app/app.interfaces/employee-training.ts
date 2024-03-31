export class EmployeeTraining {
    id?: number;
    empID?: number;
    courseName?: string = '';
    startDate?: Date;
    endDate?: Date;
    duration?: string = '';
    result?: string = '';
    institute?: string = '';

    constructor(data?: Partial<EmployeeTraining>) {
        if (data) {
            Object.assign(this, data);
        }
    }
}