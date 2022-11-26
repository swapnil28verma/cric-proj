import { InningsAction } from "./innings-action";
import { StrikerAction } from "./striker-action";
import { BowlerAction } from "./bowler-action";
import { IAction } from "./action.interface";
import { BallOutcomeType } from "../enums/ball-outcome-type.enum";
import { Game } from "../models/game";

export class GameEngineChain {
    private inningsAction: InningsAction;
    private strikerAction: StrikerAction;
    private bowlerAction: BowlerAction;

    private starterAction: IAction;

    constructor() {
        this.inningsAction = new InningsAction();
        this.strikerAction = new StrikerAction();
        this.bowlerAction = new BowlerAction();

        this.inningsAction.successorAction = this.strikerAction;
        this.strikerAction.successorAction = this.bowlerAction;
        this.bowlerAction.successorAction = undefined;

        // setting InningsAction as the default start of the chain
        this.starterAction = this.inningsAction;
    }

    public startChain(game: Game, ballOutcomeType: BallOutcomeType): Game {
        return this.starterAction.performAction(game, ballOutcomeType);
    }

}