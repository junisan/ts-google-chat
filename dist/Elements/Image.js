"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
var Image = /** @class */ (function () {
    function Image(url) {
        this.url = url;
    }
    Image.prototype.setImageUrl = function (url) {
        this.url = url;
        return this;
    };
    Image.prototype.getImageUrl = function () {
        return this.url;
    };
    Image.prototype.render = function () {
        return {
            "image": {
                "imageUrl": this.url
            }
        };
    };
    return Image;
}());
exports.Image = Image;
//# sourceMappingURL=Image.js.map