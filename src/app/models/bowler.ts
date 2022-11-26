import { Player } from "./player";
import { BowlerType } from "../enums/bowler-type.enum";

export class Bowler extends Player {
    type: BowlerType;

    ballsBowled: number = 0;
    runsConceded: number = 0;
    dotBalls: number = 0;

    extras: number = 0;
    wicketsTaken: number = 0;
}