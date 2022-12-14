import { Game } from "../models/game";
import { BallOutcomeType } from "../enums/ball-outcome-type.enum";
import { InningsAction } from "../actions/innings-action";
import { GameEngineChain } from "../actions/game-engine-chain";

export class ScoreboardService {
    private game: Game;
    private engineChain: GameEngineChain;

    public initialiseGame() {
        this.game = new Game();
    }

    public bowlBall(ballOutcome: BallOutcomeType) {
        this.game = this.engineChain.startChain(this.game, ballOutcome);
    }
}