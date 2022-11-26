import { Innings } from "./innings";
import { TossDecision } from "../enums/toss-decision.enum";

export class Game {
    innings: Innings[] = [new Innings(), new Innings()];

    team1Name: string;
    team2Name: string;

    tossWinner: string;
    tossDecision: TossDecision;

    private firstInningsOver: boolean = false;

    public getCurrentInnings(): Innings {
        return this.firstInningsOver ? this.innings[1] : this.innings[0]
    }
}