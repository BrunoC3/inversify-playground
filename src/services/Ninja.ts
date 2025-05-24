import { inject, injectable } from "inversify";
import { IWeapon } from "../interfaces/IWeapon";
import { TYPES } from "../types";

@injectable()
export class Ninja {
  constructor(@inject(TYPES.Weapon) private weapon: IWeapon) {}

  fight() {
    return this.weapon.hit();
  }
}
