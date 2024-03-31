export class Gender {
  GenderID?: number;
  GenderName?: string;
  GenderNameBan?: string;
  IsActive?: boolean;
  constructor(data?: Partial<Gender>) {
    if (data) {
      Object.assign(this, data);
    }
  }
}
