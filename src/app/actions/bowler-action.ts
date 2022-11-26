import { IAction } from "./action.interface";
import { Game } from "../models/game";
import { BallOutcomeType } from "../enums/ball-outcome-type.enum";

export class BowlerAction implements IAction {
    successorAction: IAction | undefined = undefined;

    performAction(game: Game, ballOutcomeType: BallOutcomeType): Game {
        switch (ballOutcomeType) {
            case BallOutcomeType.DOT_BALL:
                game = this.updateCurrentBowlerTotalBallCount(game);
                game = this.updateCurrentBowlerDotBallCount(game);
                break;
        }
        return this.successorAction ? this.successorAction.performAction(game, ballOutcomeType) : game;
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