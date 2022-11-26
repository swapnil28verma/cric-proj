import { Game } from "../models/game";
import { BallOutcomeType } from "../enums/ball-outcome-type.enum";
import { InningsAction } from "../actions/innings-action";

export class ScoreboardService {
    private game: Game;
    private action: InningsAction = new InningsAction();

    public initialiseGame() {
        this.game = new Game();
    }

    public bowlBall(ballOutcome: BallOutcomeType) {
        this.game = this.action.performAction(this.game, ballOutcome);
    }
}