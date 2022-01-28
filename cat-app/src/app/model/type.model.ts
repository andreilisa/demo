import {Cats} from "./cats.model";

export class Type{
  _id:number;
  _typeName: string;
  _description: string;
  _cats: Cats[];

  constructor(id:number, typeName: string, description: string, cats: Cats[]) {
    this._id = id;
    this._typeName = typeName;
    this._description = description;
    this._cats = cats;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get typeName(): string {
    return this._typeName;
  }

  set typeName(value: string) {
    this._typeName = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get cats(): Cats[] {
    return this._cats;
  }

  set cats(value: Cats[]) {
    this._cats = value;
  }
}
