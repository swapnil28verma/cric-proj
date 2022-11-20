import { Player } from "./player";
import { BowlerType } from "../enums/bowler-type.enum";

export class Bowler extends Player {
    type: BowlerType;

    ballsBowled: number;
    runsConceded: number;
    dotBalls: number

    extras: number;
    wicketsTaken: number;
}