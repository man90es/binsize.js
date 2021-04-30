"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prefix = {
    kilo: 1024,
    mega: 1048576,
    giga: 1073741824,
    tera: 1099511627776,
};
var BinSize = (function () {
    function BinSize(bits) {
        this._bits = bits;
    }
    BinSize.prototype.toJSON = function () {
        return this._bits;
    };
    BinSize.fromBits = function (n) {
        return new BinSize(n);
    };
    BinSize.fromKilobits = function (n) {
        return new BinSize(n * prefix.kilo);
    };
    BinSize.fromMegabits = function (n) {
        return new BinSize(n * prefix.mega);
    };
    BinSize.fromGigabits = function (n) {
        return new BinSize(n * prefix.giga);
    };
    BinSize.fromTerabits = function (n) {
        return new BinSize(n * prefix.tera);
    };
    BinSize.fromBytes = function (n) {
        return this.fromBits(n * 8);
    };
    BinSize.fromKilobytes = function (n) {
        return this.fromKilobits(n * 8);
    };
    BinSize.fromMegabytes = function (n) {
        return this.fromMegabits(n * 8);
    };
    BinSize.fromGigabytes = function (n) {
        return this.fromGigabits(n * 8);
    };
    BinSize.fromTerabytes = function (n) {
        return this.fromTerabits(n * 8);
    };
    Object.defineProperty(BinSize.prototype, "bits", {
        get: function () {
            return this._bits;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BinSize.prototype, "kilobits", {
        get: function () {
            return this._bits / prefix.kilo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BinSize.prototype, "megabits", {
        get: function () {
            return this._bits / prefix.mega;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BinSize.prototype, "gigabits", {
        get: function () {
            return this._bits / prefix.giga;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BinSize.prototype, "terabits", {
        get: function () {
            return this._bits / prefix.tera;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BinSize.prototype, "bytes", {
        get: function () {
            return this.bits / 8;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BinSize.prototype, "kilobytes", {
        get: function () {
            return this.kilobits / 8;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BinSize.prototype, "megabytes", {
        get: function () {
            return this.megabits / 8;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BinSize.prototype, "gigabytes", {
        get: function () {
            return this.gigabits / 8;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BinSize.prototype, "terabytes", {
        get: function () {
            return this.terabits / 8;
        },
        enumerable: false,
        configurable: true
    });
    return BinSize;
}());
exports.default = BinSize;
