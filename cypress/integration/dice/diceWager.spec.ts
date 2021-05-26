import { diceActions } from 'cypress/actions/dice.actions';
import { globalErrors } from 'cypress/localization/errors';
import { BetAmount } from 'cypress/types/betAmount';

interface IBetAmountScenarios {
    button: BetAmount;
    profit: string;
}

const betAmountScenarios: IBetAmountScenarios[] = [
    { button: '+1', profit: '1' },
    { button: '+10', profit: '11' },
    { button: '1/2', profit: '5.5' },
    { button: 'X2', profit: '11' },
    { button: 'X2', profit: '22' },
    { button: 'X2', profit: '44' },
    { button: 'MAX', profit: '44' },
];

describe('Dice Wager', () => {
    before('Open Dice page', () => {
        cy.visit('/dice');
    });
    it('Dice wager displayed with components', () => {
        diceActions.assertDiceWagerWithComponentsDisplayed();
    });

    describe('Bet Amount Form', () => {
        betAmountScenarios.forEach((scenario: IBetAmountScenarios) => {
            it(`Bet Button ${scenario.button} added correct value`, () => {
                diceActions.addBetAmountBy(scenario.button);
                diceActions.assertProfitBoxValue(scenario.profit);
                diceActions.submitButton('enabled');
            });
        });

        it(`Bet Button Clear clears input`, () => {
            diceActions.addBetAmountBy('+10');
            diceActions.assertProfitBoxValue('11');
            diceActions.clearBetAmount();
            diceActions.assertProfitBoxValue('0');
        });

        it(`Bet Amount Error shown if amount empty`, () => {
            diceActions.clearBetAmount();
            diceActions.betAmountErrorDisplayed(globalErrors.requiredField);
            diceActions.submitButton('disabled');
        });
    });

    describe('Roll Dice Button', () => {
        it(`Roll Dice button disabled for 0 bet`, () => {
            diceActions.setBetAmount('0');
            diceActions.submitButton('disabled');
        });

        it(`Roll Dice button disabled for invalid value`, () => {
            diceActions.setBetAmount('abc');
            diceActions.betAmountErrorDisplayed(globalErrors.requiredField);
            diceActions.submitButton('disabled');
        });

        it(`Roll Dice button disabled for positive number value`, () => {
            diceActions.setBetAmount('25');
            diceActions.submitButton('enabled');
        });
    });
});
