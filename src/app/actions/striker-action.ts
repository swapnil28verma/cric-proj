import { IAction } from "./action.interface";
import { Game } from "../models/game";
import { BallOutcomeType } from "../enums/ball-outcome-type.enum";

export class StrikerAction implements IAction {
    private _successor: IAction | undefined;

    setSuccessor(successor: IAction | undefined): void {
        this._successor = successor;
    }

    performAction(game: Game, ballOutcomeType: BallOutcomeType): Game {
        switch (ballOutcomeType) {
            case BallOutcomeType.DOT_BALL:
                game = this.updateStrikerBallsFaced(game);
                break;
        }
        return this._successor ? this._successor.performAction(game, ballOutcomeType) : game;
    }

    updateStrikerBallsFaced(game: Game) {
        game.getCurrentInnings().striker.ballsFaced++;
        return game;
    }

}