"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonGroup = void 0;
var ButtonGroup = /** @class */ (function () {
    function ButtonGroup(buttons) {
        this.buttons = buttons;
    }
    ButtonGroup.prototype.render = function () {
        var buttons = this.buttons.map(function (button) { return button.render(); });
        return {
            buttons: buttons
        };
    };
    return ButtonGroup;
}());
exports.ButtonGroup = ButtonGroup;
//# sourceMappingURL=ButtonGroup.js.map