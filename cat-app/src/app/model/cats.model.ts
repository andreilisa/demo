import { Type } from './type.model';

export class Cats{
  private _id:number;
  private _name: string;
  private _color: string;
  private _type: Type;

  constructor( id:number,name:string, color:string, type:Type) {
    this._id = id;
    this._color = color;
    this._name = color;
    this._type = type;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }

  get type(): Type {
    return this._type;
  }

  set type(value: Type) {
    this._type = value;
  }
}
