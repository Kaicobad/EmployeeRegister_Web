export class EmployeeBasic {
  empID?: number;
  empCode?: string;
  punchNo?: number;
  title?: string;
  name?: string;
  titleBan?: string;
  nameBan?: string;
  joiningDate?: Date;
  probationDate?: Date;
  designationID?: number;
  positionID?: number;
  designationSpecId?: number;
  unitID?: number;
  departmentID?: number;
  sectionID?: number;
  wingID?: number;
  teamID?: number;
  jobLocationId?: number;
  empStatusID?: number;
  empTypeID?: number;
  empCategoryID?: number;
  dateOfBirth?: Date;
  fathersName?: string;
  mothersName?: string;
  spouseName?: string;
  genderID?: number;
  religionID?: number;
  maritalStatusID?: number;
  bloodGroupID?: number;
  nidNo?: string;
  birthCertificateNo?: string;
  countryID?: number;
  nationalityID?: number;
  insertUserID?: string;
  terminalID?: string;
  insertDate?: Date;
  updateUserID?: string;
  updateDate?: Date;
  prevEmpID?: string;
  prevPunchNo?: string;
  bgmeaID?: string;
  taxPayeeCategoryId?: number;
  isFinalSubmit?: boolean;
  finalSubmitBy?: number;
  finalSubmitDate?: Date;
  isApproved?: boolean;
  approvedBy?: number;
  approvedDate?: Date;
  isFixed?: boolean;
  isCompOTFixed?: boolean;
  isRollBack?: boolean;
  rollBackBy?: number;
  rollBackDate?: Date;
  documentNID?: string;
  docOfferLetter?: string;
  constructor(data?: Partial<EmployeeBasic>) {
    if (data) {
      Object.assign(this, data);
    }
  }
}
