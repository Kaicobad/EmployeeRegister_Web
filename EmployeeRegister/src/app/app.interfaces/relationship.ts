export class Relationship {
  RelationshipId?: number;
  RelationshipName?: string;
  GenderId?: number;
  IsActive?: boolean;
  constructor(data?: Partial<Relationship>) {
    if (data) {
      Object.assign(this, data);
    }
  }
}
