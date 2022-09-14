"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
var Message = /** @class */ (function () {
    function Message() {
        var card = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            card[_i] = arguments[_i];
        }
        this.cards = [];
        this.cards = card;
    }
    Message.prototype.addCard = function (card) {
        this.cards.push(card);
    };
    Message.prototype.addCards = function (cards) {
        var _a;
        (_a = this.cards).push.apply(_a, cards);
    };
    Message.prototype.render = function () {
        var cardsRendered = this.cards.map(function (card) { return card.render(); });
        return {
            'cards': cardsRendered
        };
    };
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=Message.js.map