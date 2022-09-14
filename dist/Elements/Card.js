"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var Card = /** @class */ (function () {
    function Card(options) {
        var _a, _b;
        this.title = options.title;
        this.subTitle = options.subTitle;
        this.imageUrl = options.imageUrl;
        this.square = (_a = options.square) !== null && _a !== void 0 ? _a : true;
        this.sections = (_b = options.sections) !== null && _b !== void 0 ? _b : [];
    }
    Card.prototype.addSection = function (section) {
        this.sections.push(section);
    };
    Card.prototype.addSections = function (sections) {
        var _a;
        (_a = this.sections).push.apply(_a, sections);
    };
    Card.prototype.render = function () {
        var sections = this.sections.map(function (section) { return section.render(); });
        return {
            'header': {
                "title": this.title,
                "subtitle": this.subTitle,
                "imageUrl": this.imageUrl,
                "imageStyle": this.square ? 'IMAGE' : 'AVATAR'
            },
            'sections': sections
        };
    };
    return Card;
}());
exports.Card = Card;
//# sourceMappingURL=Card.js.map