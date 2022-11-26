import { IAction } from "./action.interface";
import { Game } from "../models/game";
import { BallOutcomeType } from "../enums/ball-outcome-type.enum";
import { StrikerAction } from "./striker-action";


export class InningsAction implements IAction {
    successorAction: IAction = new StrikerAction();

    performAction(game: Game, ballOutcomeType: BallOutcomeType): Game {
        switch (ballOutcomeType) {
            case BallOutcomeType.DOT_BALL:
                game = this.updateInningsBallCount(game);
                break;
        }
        return this.successorAction ? this.successorAction.performAction(game, ballOutcomeType) : game;
    }

    updateInningsBallCount(game: Game): Game {
        game.getCurrentInnings().currentOverBallCount++;
        return game;
    }
}
