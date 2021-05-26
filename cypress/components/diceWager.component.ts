import { BetAmount } from 'cypress/types/betAmount';
import { SliderElement } from './elements/slider.element';

class DiceWagerComponent {
    get view() {
        return cy.get('cw-dice-wager');
    }

    get betAmountSection() {
        return cy.get('.bet-amount-section');
    }

    get betForm() {
        return cy.get('.bet-form');
    }

    get slider() {
        return new SliderElement();
    }

    get rollButtonFooter() {
        return cy.get('.wager-footer');
    }

    get profitBox() {
        return cy.get('.profit-box text-success');
    }

    get formButtons() {
        return cy.get('.form-field-buttons');
    }

    get betInput() {
        return cy.get('cw-amount-input .mat-input-element');
    }

    get submitButton() {
        return this.rollButtonFooter.get('button[type="submit"]');
    }

    public betAmountError(errorText: string) {
        return this.betAmountSection.get('cw-form-errors').contains(errorText);
    }

    public betAmountButton(amount: BetAmount | 'Clear') {
        return this.formButtons.contains(amount);
    }

    public setBetAmount(amount: string) {
        this.betAmountButton('Clear');
        this.betInput.type(amount);
    }
}

export const diceWagerComponent = new DiceWagerComponent();
