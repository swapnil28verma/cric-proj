import { IAction } from "./action.interface";
import { Game } from "../models/game";
import { BallOutcomeType } from "../enums/ball-outcome-type.enum";

export class BowlerAction implements IAction {
    private _successor: IAction | undefined;

    setSuccessor(successor: IAction | undefined): void {
        this._successor = successor;
    }

    performAction(game: Game, ballOutcomeType: BallOutcomeType): Game {
        switch (ballOutcomeType) {
            case BallOutcomeType.DOT_BALL:
                game = this.updateCurrentBowlerTotalBallCount(game);
                game = this.updateCurrentBowlerDotBallCount(game);
                break;
        }
        return this._successor ? this._successor.performAction(game, ballOutcomeType) : game;
    }

    updateCurrentBowlerTotalBallCount(game: Game): Game {
        game.getCurrentInnings().bowler.ballsBowled++;
        return game;
    }

    updateCurrentBowlerDotBallCount(game: Game): Game {
        game.getCurrentInnings().bowler.dotBalls++;
        return game;
    }

}