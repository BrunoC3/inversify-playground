import { injectable } from "inversify";
import { IWeapon } from "../interfaces/IWeapon";

@injectable()
export class Katana implements IWeapon {
  hit(): string {
    return "Corte com katana!";
  }
}
