import { Batter } from "./batter";
import { Bowler } from "./bowler";

export class Innings {
    runs: number = 0;
    target: number = 0;
    totalOvers: number = 20;
    currentOver: number = 0;
    currentOverBallCount: number = 0;
    wicketsLost: number = 0;

    currentOverStats: string[];

    striker: Batter;
    runner: Batter;
    bowler: Bowler;
}