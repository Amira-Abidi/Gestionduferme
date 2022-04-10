import { Aliment } from "./aliment";
import { User } from "./user";

export class Commande {

  id: number;
  quantite: number;
  date: Date;
  aliments: Aliment;
  users: User;

}
