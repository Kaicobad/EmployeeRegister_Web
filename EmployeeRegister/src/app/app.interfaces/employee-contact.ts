export class EmployeeContact {
    empID?: number;
    mobile?: string;
    phone?: string;
    email?: string;
    emailOffice?: string;
    pabx?: string;
    emergContact?: string;
    emergContactName?: string;
    emergContactAddress?: string;
    relationWith?: string;
    fax?: string;
    socialMediaID?: string;
    preVillage?: string;
    perVillage?: string;
    preRoad?: string;
    perRoad?: string;
    preDivisionID?: number;
    perDivisionID?: number;
    preThanaID?: number;
    perThanaID?: number;
    preDistrictID?: number;
    perDistrictID?: number;
    prePostOffice?: string;
    perPostOffice?: string;
    prePostCode?: string;
    perPostCode?: string;
    preVillageBan?: string;
    perVillageBan?: string;
    preRoadBan?: string;
    perRoadBan?: string;
    prePostOfficeBan?: string;
    perPostOfficeBan?: string;
    busStop?: string;

    constructor(data?: Partial<EmployeeContact>) {
        if (data) {
            Object.assign(this, data);
        }
    }
}