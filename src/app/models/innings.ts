import { Batter } from "./batter";
import { Bowler } from "./bowler";

export class Innings {
    runs: number;
    target: number;
    totalOvers: number;
    currentOver: number;
    wicketsLost: number;

    currentOverStats: string[];

    striker: Batter;
    runner: Batter;
    bowler: Bowler;
}