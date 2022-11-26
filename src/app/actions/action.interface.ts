import { Game } from "../models/game";
import { BallOutcomeType } from "../enums/ball-outcome-type.enum";

export interface IAction {
    setSuccessor(successor: IAction | undefined): void;
    performAction(game: Game, ballOutcomeType: BallOutcomeType): Game;
}