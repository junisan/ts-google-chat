"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Section = void 0;
var AbstractButton_1 = require("./AbstractButton");
var Section = /** @class */ (function () {
    function Section(widgets) {
        this.widgets = widgets !== null && widgets !== void 0 ? widgets : [];
    }
    Section.prototype.addWidget = function (widget) {
        this.widgets.push(widget);
    };
    Section.prototype.addWidgets = function (widgets) {
        var _a;
        (_a = this.widgets).push.apply(_a, widgets);
    };
    Section.prototype.render = function () {
        var widgets = this.widgets.map(function (widget) {
            if (widget instanceof AbstractButton_1.AbstractButton) {
                console.warn('Buttons may be not rendered');
            }
            return widget.render();
        });
        return {
            "widgets": widgets
        };
    };
    return Section;
}());
exports.Section = Section;
//# sourceMappingURL=Section.js.map