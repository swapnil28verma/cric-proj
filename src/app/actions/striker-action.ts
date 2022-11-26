import { IAction } from "./action.interface";
import { Game } from "../models/game";
import { BallOutcomeType } from "../enums/ball-outcome-type.enum";
import { BowlerAction } from "./bowler-action";


export class StrikerAction implements IAction {
    successorAction: IAction = new BowlerAction();

    performAction(game: Game, ballOutcomeType: BallOutcomeType): Game {
        switch (ballOutcomeType) {
            case BallOutcomeType.DOT_BALL:
                game = this.updateStrikerBallsFaced(game);
                break;
        }
        return this.successorAction ? this.successorAction.performAction(game, ballOutcomeType) : game;
    }

    updateStrikerBallsFaced(game: Game) {
        game.getCurrentInnings().striker.ballsFaced++;
        return game;
    }

}