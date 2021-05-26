import { diceWagerComponent } from 'cypress/components/diceWager.component';
import { BetAmount } from 'cypress/types/betAmount';

class DiceActions {
    public assertDiceWagerWithComponentsDisplayed() {
        diceWagerComponent.view.should('be.visible');
        diceWagerComponent.betAmountSection.should('be.visible');
        diceWagerComponent.betForm.should('be.visible');
        diceWagerComponent.slider.view.should('be.visible');
        diceWagerComponent.rollButtonFooter.should('be.visible');
    }

    public addBetAmountBy(amount: BetAmount) {
        diceWagerComponent.betAmountButton(amount).click();
    }

    public setBetAmount(amount: string) {
        diceWagerComponent.setBetAmount(amount);
    }

    public clearBetAmount() {
        diceWagerComponent.betAmountButton('Clear').click();
    }

    public betAmountErrorDisplayed(errorText: string) {
        diceWagerComponent.betAmountError(errorText).should('be.visible');
    }

    public assertProfitBoxValue(value: string) {
        const valueString = Number(value).toFixed(2);
        diceWagerComponent.profitBox.should('have.text', valueString);
    }

    public submitButton(state: 'enabled' | 'disabled') {
        diceWagerComponent.submitButton.should('be.' + state);
    }
}

export const diceActions = new DiceActions();
