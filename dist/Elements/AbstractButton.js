"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractButton = void 0;
var AbstractButton = /** @class */ (function () {
    function AbstractButton(link) {
        this.link = link;
    }
    AbstractButton.prototype.getLink = function () {
        return this.link;
    };
    AbstractButton.prototype.render = function () {
        throw new Error('You should implement this');
    };
    return AbstractButton;
}());
exports.AbstractButton = AbstractButton;
//# sourceMappingURL=AbstractButton.js.map