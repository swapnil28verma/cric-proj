import { Player } from "./player";

export class Batter extends Player {
    runsScored: number;
    ballsFaced: number;

    numFours: number;
    numSixes: number;

    strikeRate: number;
}