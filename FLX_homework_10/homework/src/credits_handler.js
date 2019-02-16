const cardlimit = 4;
const credits_zero = 0;
class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [null];
    }
    addCard() {
        if (this.cards.length < cardlimit) {
            this.cards.push(usercard(this.cards.length));
        } else {
            return alert('You have 3 cards');
        }
    }
    getCardByKey(ind) {
        return this.cards[ind];
    }
}
function usercard(index) {
    let card = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: index
    }
    function getCardOptions() {
        return card;
    }
    function putCredits(credits) {
        if (credits >= credits_zero) {
            card.balance += credits;
            card.historyLogs.push({
                operationType: 'Received credits',
                credits: credits,
                operationTime: new Date()
            });
        } else {
            console.error("Putting sum can't be 0<");
        }
    }
    function takeCredits(credits) {
        if (credits >= credits_zero && credits <= card.balance && credits <= card.transactionLimit) {
            card.balance -= credits;
            card.historyLogs.push({
                operationType: 'Withdrawl of credits',
                credits: credits,
                operationTime: new Date()
            });
        } else if (credits > card.transactionLimit) {
            console.error('Transfer limit exceeded!!');
        } else {
            console.error("Taking sum can't be 0< or >balance.");
        }
    }
    function setTransactionLimit(limit) {
        if (limit > credits_zero) {
            card.transactionLimit = limit;
            card.historyLogs.push({
                operationType: 'Transaction limit change',
                credits: limit,
                operationTime: new Date()
            });
        } else {
            console.error("Limit can't be 0<");
        }
    }
    function transferCredits(credits, ancard) {
        let taxper = 0.005;
        let tax = credits * taxper;
        let fullsum = credits + tax;
        if (credits > credits_zero && fullsum <= card.balance && credits <= card.transactionLimit) {
            this.takeCredits(fullsum);
            ancard.putCredits(credits);
        } else if (credits > card.transactionLimit) {
            console.error('Transfer limit exceeded!!');
        } else {
            console.error("Taking sum can't be 0< or >balance.");
        }
    }
    return {
        getCardOptions: getCardOptions,
        putCredits: putCredits,
        takeCredits: takeCredits,
        setTransactionLimit: setTransactionLimit,
        transferCredits: transferCredits
    }
}
let user = new UserAccount('Bob');
user.addCard();
user.addCard();
let idCard = 2;
let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(idCard);
let creditsput = 500;
let limit = 800;

card1.putCredits(creditsput);
card1.setTransactionLimit(limit);
let creditsput2 = 300;
card1.transferCredits(creditsput2, card2);
let creditstake = 50;
card2.takeCredits(creditstake);

console.log(card1.getCardOptions());

console.log(card2.getCardOptions());

