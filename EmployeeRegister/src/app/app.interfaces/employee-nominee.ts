export class EmployeeNominee {
    nomineeId?: number;
    empId?: number;
    nomineeName?: string;
    relationshipId?: number;
    dateOfBirth?: Date;
    nid?: string;
    birthRegNo?: string;
    photoPath?: string;
    isActive?: boolean;
    isNominee?: boolean;
    nomineeOwnership?: number;
    relationshipOthers?: string;
    updateOn?: Date;
    document?: string;

    constructor(data?: Partial<EmployeeNominee>) {
        if (data) {
            Object.assign(this, data);
        }
    }
}