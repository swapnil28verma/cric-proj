import { Player } from "./player";

export class Batter extends Player {
    runsScored: number = 0;
    ballsFaced: number = 0;

    numFours: number = 0;
    numSixes: number = 0;

    strikeRate: number = 0;
}