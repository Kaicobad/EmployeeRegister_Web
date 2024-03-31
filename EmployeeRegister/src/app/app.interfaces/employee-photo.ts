export class EmployeePhoto {
    id?: number;
    empID?: number;
    photo?: ArrayBuffer | null;

    constructor(data?: Partial<EmployeePhoto>) {
        if (data) {
            Object.assign(this, data);
        }
    }
}