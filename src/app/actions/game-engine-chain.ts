import { InningsAction } from "./innings-action";
import { StrikerAction } from "./striker-action";
import { BowlerAction } from "./bowler-action";
import { IAction } from "./action.interface";
import { BallOutcomeType } from "../enums/ball-outcome-type.enum";
import { Game } from "../models/game";

export class GameEngineChain {
    private readonly inningsAction: InningsAction;
    private readonly strikerAction: StrikerAction;
    private readonly bowlerAction: BowlerAction;

    private starterAction: IAction;

    constructor() {
        this.inningsAction = new InningsAction();
        this.strikerAction = new StrikerAction();
        this.bowlerAction = new BowlerAction();

        this.inningsAction.setSuccessor(this.strikerAction);
        this.strikerAction.setSuccessor(this.bowlerAction);
        this.bowlerAction.setSuccessor(undefined);

        // setting InningsAction as the default start of the chain
        this.starterAction = this.inningsAction;
    }

    public startChain(game: Game, ballOutcomeType: BallOutcomeType): Game {
        return this.starterAction.performAction(game, ballOutcomeType);
    }

}