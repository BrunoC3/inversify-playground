import "reflect-metadata";
import { container } from "./inversify.config";
import { Ninja } from "./services/Ninja";

const ninja = container.get(Ninja);
console.log(ninja.fight());