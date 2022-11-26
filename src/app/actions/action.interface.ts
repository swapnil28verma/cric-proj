import { Game } from "../models/game";
import { BallOutcomeType } from "../enums/ball-outcome-type.enum";

export interface IAction {
    performAction(game: Game, ballOutcomeType: BallOutcomeType): Game;
    successorAction: IAction | undefined;
}