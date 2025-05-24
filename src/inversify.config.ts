import { Container } from "inversify";
import { TYPES } from "./types";
import { IWeapon } from "./interfaces/IWeapon";
import { Katana } from "./services/Katana";
import { Ninja } from "./services/Ninja";

const container = new Container();
container.bind<IWeapon>(TYPES.Weapon).to(Katana);
container.bind<Ninja>(Ninja).toSelf();

export { container };
