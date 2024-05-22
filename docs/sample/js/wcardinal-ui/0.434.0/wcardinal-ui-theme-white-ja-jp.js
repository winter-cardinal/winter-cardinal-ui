/*
 Winter Cardinal UI v0.434.0
 Copyright (C) 2019 Toshiba Corporation
 SPDX-License-Identifier: Apache-2.0

 Material Design icons by Google
 Apache license version 2.0.
*/
(function (pixi_js) {
    'use strict';

    const UtilSvgAtlasBuilder = wcardinal.ui.UtilSvgAtlasBuilder;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteAtlas = new UtilSvgAtlasBuilder({
        width: 1024,
        scaling: pixi_js.SCALE_MODES.LINEAR,
        mipmap: pixi_js.MIPMAP_MODES.OFF
    });

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhite = /** @class */ (function () {
        function DThemeWhite() {
            this._instances = {};
        }
        DThemeWhite.prototype.get = function (type) {
            var instance = this._instances[type];
            if (instance != null) {
                return instance;
            }
            else {
                var klass = DThemeWhite._classes[type];
                if (klass != null) {
                    instance = this._instances[type] = new klass();
                    return instance;
                }
                else {
                    throw new Error("No theme for the type '".concat(type, "'"));
                }
            }
        };
        DThemeWhite.prototype.set = function (type, instance) {
            this._instances[type] = instance;
            return this;
        };
        DThemeWhite.prototype.getClass = function (type) {
            var result = DThemeWhite._classes[type];
            if (result != null) {
                return result;
            }
            else {
                throw new Error("No theme for the type '".concat(type, "'"));
            }
        };
        DThemeWhite.prototype.setClass = function (type, themeClass) {
            DThemeWhite._classes[type] = themeClass;
            return this;
        };
        DThemeWhite.prototype.getAtlas = function () {
            return DThemeWhiteAtlas;
        };
        DThemeWhite.set = function (type, themeClass) {
            this._classes[type] = themeClass;
        };
        DThemeWhite._classes = {};
        return DThemeWhite;
    }());

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    const DBaseInteractive = wcardinal.ui.DBaseInteractive;

    const DBorderMask = wcardinal.ui.DBorderMask;

    const DCornerMask = wcardinal.ui.DCornerMask;

    const DLayoutClearType = wcardinal.ui.DLayoutClearType;

    const DShadowImpl = wcardinal.ui.DShadowImpl;

    const UtilRgb = wcardinal.ui.UtilRgb;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteConstants = /** @class */ (function () {
        function DThemeWhiteConstants() {
        }
        DThemeWhiteConstants.COLOR = 0x444444;
        DThemeWhiteConstants.ACTIVE_COLOR = 0xffffff;
        DThemeWhiteConstants.BORDER_COLOR = 0xe5e5e5;
        DThemeWhiteConstants.BACKGROUND_COLOR = 0xf2f2f2;
        DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD = 0xffffff;
        DThemeWhiteConstants.HIGHLIGHT_COLOR = 0x3399ff;
        DThemeWhiteConstants.HIGHLIGHT_ALPHA = 0.2;
        DThemeWhiteConstants.HIGHLIGHT_BLENDED = UtilRgb.blend(DThemeWhiteConstants.BACKGROUND_COLOR, DThemeWhiteConstants.HIGHLIGHT_COLOR, DThemeWhiteConstants.HIGHLIGHT_ALPHA);
        DThemeWhiteConstants.HIGHLIGHT_BLENDED_ON_BOARD = UtilRgb.blend(DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD, DThemeWhiteConstants.HIGHLIGHT_COLOR, DThemeWhiteConstants.HIGHLIGHT_ALPHA);
        DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR = 0xcccccc;
        DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA = 0.2;
        DThemeWhiteConstants.WEAK_HIGHLIGHT_BLENDED = UtilRgb.blend(DThemeWhiteConstants.BACKGROUND_COLOR, DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR, DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA);
        DThemeWhiteConstants.WEAK_HIGHLIGHT_BLENDED_ON_BOARD = UtilRgb.blend(DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD, DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR, DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA);
        DThemeWhiteConstants.INVALID_COLOR = 0xffaaaa;
        DThemeWhiteConstants.INVALID_ALPHA = 0.2;
        DThemeWhiteConstants.INVALID_BLENDED = UtilRgb.blend(DThemeWhiteConstants.BACKGROUND_COLOR, DThemeWhiteConstants.INVALID_COLOR, DThemeWhiteConstants.INVALID_ALPHA);
        DThemeWhiteConstants.INVALID_BLENDED_ON_BOARD = UtilRgb.blend(DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD, DThemeWhiteConstants.INVALID_COLOR, DThemeWhiteConstants.INVALID_ALPHA);
        return DThemeWhiteConstants;
    }());

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteFont = /** @class */ (function () {
        function DThemeWhiteFont() {
        }
        DThemeWhiteFont.prototype.getFontFamilly = function () {
            return "\"Helvetica Neue\",\"Helvetica\",\"Hiragino Sans\",\"Hiragino Kaku Gothic ProN\",\"BIZ UDPGothic\",\"Arial\",\"Yu Gothic UI\",\"Meiryo UI\",sans-serif";
        };
        DThemeWhiteFont.prototype.getFontSize = function () {
            return 14;
        };
        DThemeWhiteFont.prototype.getColor = function (state) {
            return DThemeWhiteConstants.COLOR;
        };
        DThemeWhiteFont.prototype.getFontWeight = function () {
            return "normal";
        };
        DThemeWhiteFont.prototype.getFontStyle = function () {
            return "normal";
        };
        DThemeWhiteFont.prototype.getFontVariant = function () {
            return "normal";
        };
        DThemeWhiteFont.prototype.getAlpha = function (state) {
            if (state.inDisabled) {
                return 0.5;
            }
            return 1.0;
        };
        DThemeWhiteFont.prototype.getLineHeight = function () {
            return 30;
        };
        return DThemeWhiteFont;
    }());

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var newShadow = function (id, radius, opacity) {
        var d = radius * 2;
        /* eslint-disable prettier/prettier */
        DThemeWhiteAtlas.add(id, d, d, "<g>" +
            "<defs>" +
            "<radialGradient id=\"".concat(id, "_filter\">") +
            "<stop   offset=\"0%\" stop-color=\"black\" stop-opacity=\"".concat(opacity * 0.368, "\" />") +
            "<stop  offset=\"30%\" stop-color=\"black\" stop-opacity=\"".concat(opacity * 0.368, "\" />") +
            "<stop  offset=\"37%\" stop-color=\"black\" stop-opacity=\"".concat(opacity * 0.368, "\" />") +
            "<stop  offset=\"44%\" stop-color=\"black\" stop-opacity=\"".concat(opacity * 0.368, "\" />") + // Math.exp(-(p-30)/14)
            "<stop  offset=\"51%\" stop-color=\"black\" stop-opacity=\"".concat(opacity * 0.223, "\" />") +
            "<stop  offset=\"58%\" stop-color=\"black\" stop-opacity=\"".concat(opacity * 0.135, "\" />") +
            "<stop  offset=\"65%\" stop-color=\"black\" stop-opacity=\"".concat(opacity * 0.082, "\" />") +
            "<stop  offset=\"72%\" stop-color=\"black\" stop-opacity=\"".concat(opacity * 0.050, "\" />") +
            "<stop  offset=\"79%\" stop-color=\"black\" stop-opacity=\"".concat(opacity * 0.030, "\" />") +
            "<stop  offset=\"86%\" stop-color=\"black\" stop-opacity=\"".concat(opacity * 0.018, "\" />") +
            "<stop  offset=\"93%\" stop-color=\"black\" stop-opacity=\"".concat(opacity * 0.011, "\" />") +
            "<stop offset=\"100%\" stop-color=\"black\" stop-opacity=\"0\" />" +
            "</radialGradient>" +
            "</defs>" +
            "<rect x=\"0\" y=\"0\" width=\"".concat(d, "\" height=\"").concat(d, "\" fill=\"url(#").concat(id, "_filter)\"/>") +
            "</g>");
        /* eslint-enable prettier/prettier */
    };
    newShadow("shadow_weak", 24, 0.3);
    newShadow("shadow", 48, 0.3);
    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("background", 16, 16, "<g>" +
        "<defs>" +
        "<radialGradient id=\"234sfdhjfpijsrnsedsd435jseflkm\">" +
        "<stop offset=\"25%\" stop-color=\"white\" stop-opacity=\"1\" />" +
        "<stop offset=\"75%\" stop-color=\"white\" stop-opacity=\"0.25\" />" +
        "</radialGradient>" +
        "</defs>" +
        "<rect x=\"0\" y=\"0\" width=\"16\" height=\"16\" fill=\"url(#234sfdhjfpijsrnsedsd435jseflkm)\"/>" +
        "</g>");
    /* eslint-enable prettier/prettier */
    var DThemeWhiteBase = /** @class */ (function (_super) {
        __extends(DThemeWhiteBase, _super);
        function DThemeWhiteBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteBase.prototype.getX = function () {
            return 0;
        };
        DThemeWhiteBase.prototype.getY = function () {
            return 0;
        };
        DThemeWhiteBase.prototype.getHeight = function () {
            return 100;
        };
        DThemeWhiteBase.prototype.getWidth = function () {
            return 100;
        };
        DThemeWhiteBase.prototype.getBackgroundColor = function (state) {
            return null;
        };
        DThemeWhiteBase.prototype.getBackgroundAlpha = function (state) {
            return 1;
        };
        DThemeWhiteBase.prototype.getBackgroundTexture = function () {
            return DThemeWhiteAtlas.mappings.background;
        };
        DThemeWhiteBase.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeWhiteBase.prototype.getBorderAlpha = function (state) {
            return 1;
        };
        DThemeWhiteBase.prototype.getBorderWidth = function (state) {
            return 1;
        };
        DThemeWhiteBase.prototype.getBorderAlign = function (state) {
            return 0;
        };
        DThemeWhiteBase.prototype.getBorderMask = function (state) {
            return DBorderMask.NONE;
        };
        DThemeWhiteBase.prototype.getBorderTexture = function () {
            return DThemeWhiteAtlas.mappings.background;
        };
        DThemeWhiteBase.prototype.getPaddingLeft = function () {
            return 0;
        };
        DThemeWhiteBase.prototype.getPaddingRight = function () {
            return 0;
        };
        DThemeWhiteBase.prototype.getPaddingTop = function () {
            return 0;
        };
        DThemeWhiteBase.prototype.getPaddingBottom = function () {
            return 0;
        };
        DThemeWhiteBase.prototype.getCornerRadius = function () {
            return 3;
        };
        DThemeWhiteBase.prototype.getCornerMask = function () {
            return DCornerMask.NONE;
        };
        DThemeWhiteBase.prototype.getOutlineColor = function (state) {
            return DThemeWhiteConstants.HIGHLIGHT_COLOR;
        };
        DThemeWhiteBase.prototype.getOutlineAlpha = function (state) {
            if (state.isFocused) {
                return 1;
            }
            return 0;
        };
        DThemeWhiteBase.prototype.getOutlineWidth = function (state) {
            return 1;
        };
        DThemeWhiteBase.prototype.getOutlineOffset = function (state) {
            return 0;
        };
        DThemeWhiteBase.prototype.getOutlineAlign = function (state) {
            return 0;
        };
        DThemeWhiteBase.prototype.getOutlineMask = function (state) {
            return DBorderMask.NONE;
        };
        DThemeWhiteBase.prototype.getClearType = function () {
            return DLayoutClearType.NONE;
        };
        DThemeWhiteBase.prototype.getShadow = function () {
            return null;
        };
        DThemeWhiteBase.prototype.getInteractive = function () {
            return DBaseInteractive.SELF;
        };
        DThemeWhiteBase.prototype.newState = function (state) {
            // DO NOTHING
        };
        DThemeWhiteBase.prototype.getTitle = function () {
            return "";
        };
        DThemeWhiteBase.prototype.getWeight = function () {
            return -1;
        };
        DThemeWhiteBase.prototype.newShadow = function () {
            return new DShadowImpl(DThemeWhiteAtlas.mappings.shadow, 48, 48, 0, 4.8);
        };
        DThemeWhiteBase.prototype.newShadowWeak = function () {
            return new DShadowImpl(DThemeWhiteAtlas.mappings.shadow_weak, 24, 24, 0, 2.4);
        };
        DThemeWhiteBase.prototype.getCursor = function (state) {
            return "";
        };
        return DThemeWhiteBase;
    }(DThemeWhiteFont));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteBase = function () {
        DThemeWhite.set("DBase", DThemeWhiteBase);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteBoard = /** @class */ (function (_super) {
        __extends(DThemeWhiteBoard, _super);
        function DThemeWhiteBoard() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteBoard.prototype.getBackgroundColor = function () {
            return DThemeWhiteConstants.BACKGROUND_COLOR;
        };
        DThemeWhiteBoard.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeWhiteBoard.prototype.getCornerMask = function () {
            return DCornerMask.ALL;
        };
        DThemeWhiteBoard.prototype.getPaddingLeft = function () {
            return 16;
        };
        DThemeWhiteBoard.prototype.getPaddingTop = function () {
            return 16;
        };
        DThemeWhiteBoard.prototype.getPaddingRight = function () {
            return 16;
        };
        DThemeWhiteBoard.prototype.getPaddingBottom = function () {
            return 16;
        };
        DThemeWhiteBoard.prototype.getInteractive = function () {
            return DBaseInteractive.BOTH;
        };
        return DThemeWhiteBoard;
    }(DThemeWhiteBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteBoard = function () {
        DThemeWhite.set("DBoard", DThemeWhiteBoard);
    };

    const DAlignHorizontal = wcardinal.ui.DAlignHorizontal;

    const DButtonBaseWhen = wcardinal.ui.DButtonBaseWhen;

    const DAlignVertical = wcardinal.ui.DAlignVertical;

    const DAlignWith = wcardinal.ui.DAlignWith;

    const DDynamicTextStyleWordWrap = wcardinal.ui.DDynamicTextStyleWordWrap;

    const toString = wcardinal.ui.toString;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteTextBase = /** @class */ (function (_super) {
        __extends(DThemeWhiteTextBase, _super);
        function DThemeWhiteTextBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteTextBase.prototype.getTextAlignVertical = function () {
            return DAlignVertical.MIDDLE;
        };
        DThemeWhiteTextBase.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.LEFT;
        };
        DThemeWhiteTextBase.prototype.isOverflowMaskEnabled = function () {
            return false;
        };
        DThemeWhiteTextBase.prototype.getTextStyleClipping = function () {
            return true;
        };
        DThemeWhiteTextBase.prototype.getTextStyleFitting = function () {
            return false;
        };
        DThemeWhiteTextBase.prototype.getTextStyleWordWrap = function () {
            return DDynamicTextStyleWordWrap.NONE;
        };
        DThemeWhiteTextBase.prototype.getTextFormatter = function () {
            return toString;
        };
        DThemeWhiteTextBase.prototype.getTextValue = function (state) {
            return undefined;
        };
        DThemeWhiteTextBase.prototype.newTextValue = function () {
            return undefined;
        };
        return DThemeWhiteTextBase;
    }(DThemeWhiteBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteImageBase = /** @class */ (function (_super) {
        __extends(DThemeWhiteImageBase, _super);
        function DThemeWhiteImageBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteImageBase.prototype.getImageAlignHorizontal = function () {
            return DAlignHorizontal.LEFT;
        };
        DThemeWhiteImageBase.prototype.getImageAlignVertical = function () {
            return DAlignVertical.MIDDLE;
        };
        DThemeWhiteImageBase.prototype.getImageAlignWith = function () {
            return DAlignWith.TEXT;
        };
        DThemeWhiteImageBase.prototype.getImageMarginHorizontal = function () {
            return 5;
        };
        DThemeWhiteImageBase.prototype.getImageMarginVertial = function () {
            return 5;
        };
        DThemeWhiteImageBase.prototype.getImageTintColor = function (state) {
            return this.getColor(state);
        };
        DThemeWhiteImageBase.prototype.getImageTintAlpha = function (state) {
            return this.getAlpha(state);
        };
        DThemeWhiteImageBase.prototype.getImageRotation = function (state) {
            return 0;
        };
        DThemeWhiteImageBase.prototype.getImageSource = function (state) {
            return null;
        };
        DThemeWhiteImageBase.prototype.getSecondaryImageAlignHorizontal = function () {
            return this.getImageAlignHorizontal();
        };
        DThemeWhiteImageBase.prototype.getSecondaryImageAlignVertical = function () {
            return this.getImageAlignVertical();
        };
        DThemeWhiteImageBase.prototype.getSecondaryImageAlignWith = function () {
            return this.getImageAlignWith();
        };
        DThemeWhiteImageBase.prototype.getSecondaryImageMarginHorizontal = function () {
            return this.getImageMarginHorizontal();
        };
        DThemeWhiteImageBase.prototype.getSecondaryImageMarginVertial = function () {
            return this.getImageMarginVertial();
        };
        DThemeWhiteImageBase.prototype.getSecondaryImageTintColor = function (state) {
            return this.getImageTintColor(state);
        };
        DThemeWhiteImageBase.prototype.getSecondaryImageTintAlpha = function (state) {
            return this.getImageTintAlpha(state);
        };
        DThemeWhiteImageBase.prototype.getSecondaryImageRotation = function (state) {
            return this.getImageRotation(state);
        };
        DThemeWhiteImageBase.prototype.getTertiaryImageAlignHorizontal = function () {
            return this.getImageAlignHorizontal();
        };
        DThemeWhiteImageBase.prototype.getTertiaryImageAlignVertical = function () {
            return this.getImageAlignVertical();
        };
        DThemeWhiteImageBase.prototype.getTertiaryImageAlignWith = function () {
            return this.getImageAlignWith();
        };
        DThemeWhiteImageBase.prototype.getTertiaryImageMarginHorizontal = function () {
            return this.getImageMarginHorizontal();
        };
        DThemeWhiteImageBase.prototype.getTertiaryImageMarginVertial = function () {
            return this.getImageMarginVertial();
        };
        DThemeWhiteImageBase.prototype.getTertiaryImageTintColor = function (state) {
            return this.getImageTintColor(state);
        };
        DThemeWhiteImageBase.prototype.getTertiaryImageTintAlpha = function (state) {
            return this.getImageTintAlpha(state);
        };
        DThemeWhiteImageBase.prototype.getTertiaryImageRotation = function (state) {
            return this.getImageRotation(state);
        };
        return DThemeWhiteImageBase;
    }(DThemeWhiteTextBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteButtonBase = /** @class */ (function (_super) {
        __extends(DThemeWhiteButtonBase, _super);
        function DThemeWhiteButtonBase(backgroundColor, hover, pressed) {
            if (backgroundColor === void 0) { backgroundColor = 0xffffff; }
            if (hover === void 0) { hover = 0.017; }
            if (pressed === void 0) { pressed = 0.034; }
            var _this = _super.call(this) || this;
            _this.BACKGROUND_COLOR = backgroundColor;
            _this.BACKGROUND_COLOR_HOVERED = UtilRgb.darken(backgroundColor, hover);
            _this.BACKGROUND_COLOR_PRESSED = UtilRgb.darken(backgroundColor, pressed);
            _this.OUTLINE_COLOR = UtilRgb.brighten(backgroundColor, 0.75);
            return _this;
        }
        DThemeWhiteButtonBase.prototype.getBackgroundColor = function (state) {
            if (state.inDisabled) {
                return null;
            }
            else if (state.isActive) {
                return DThemeWhiteConstants.HIGHLIGHT_COLOR;
            }
            else if (state.isPressed) {
                return this.BACKGROUND_COLOR_PRESSED;
            }
            else if (state.isHovered) {
                return this.BACKGROUND_COLOR_HOVERED;
            }
            else {
                return this.BACKGROUND_COLOR;
            }
        };
        DThemeWhiteButtonBase.prototype.getColor = function (state) {
            if (state.inDisabled || !state.isActive) {
                return _super.prototype.getColor.call(this, state);
            }
            else {
                return DThemeWhiteConstants.ACTIVE_COLOR;
            }
        };
        DThemeWhiteButtonBase.prototype.getBorderColor = function (state) {
            if (state.inDisabled || !state.isActive) {
                return DThemeWhiteConstants.BORDER_COLOR;
            }
            else {
                return null;
            }
        };
        DThemeWhiteButtonBase.prototype.getOutlineColor = function (state) {
            if (state.isActive) {
                return this.getOutlineColorActive(state);
            }
            return this.getOutlineColorNonActive(state);
        };
        DThemeWhiteButtonBase.prototype.getOutlineColorActive = function (state) {
            return this.OUTLINE_COLOR;
        };
        DThemeWhiteButtonBase.prototype.getOutlineColorNonActive = function (state) {
            return _super.prototype.getOutlineColor.call(this, state);
        };
        DThemeWhiteButtonBase.prototype.getOutlineOffset = function (state) {
            if (state.isActive) {
                return this.getOutlineOffsetActive(state);
            }
            return this.getOutlineOffsetNonActive(state);
        };
        DThemeWhiteButtonBase.prototype.getOutlineOffsetActive = function (state) {
            return -1;
        };
        DThemeWhiteButtonBase.prototype.getOutlineOffsetNonActive = function (state) {
            return _super.prototype.getOutlineOffset.call(this, state);
        };
        DThemeWhiteButtonBase.prototype.getHeight = function () {
            return 30;
        };
        DThemeWhiteButtonBase.prototype.getWidth = function () {
            return 100;
        };
        DThemeWhiteButtonBase.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.CENTER;
        };
        DThemeWhiteButtonBase.prototype.getPaddingLeft = function () {
            return 10;
        };
        DThemeWhiteButtonBase.prototype.getPaddingRight = function () {
            return 10;
        };
        DThemeWhiteButtonBase.prototype.isToggle = function () {
            return false;
        };
        DThemeWhiteButtonBase.prototype.getWhen = function () {
            return DButtonBaseWhen.CLICKED;
        };
        DThemeWhiteButtonBase.prototype.getCursor = function (state) {
            if (!state.isActionable) {
                return "";
            }
            return "pointer";
        };
        return DThemeWhiteButtonBase;
    }(DThemeWhiteImageBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteButtonAmbient = /** @class */ (function (_super) {
        __extends(DThemeWhiteButtonAmbient, _super);
        function DThemeWhiteButtonAmbient() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteButtonAmbient.prototype.getBackgroundColor = function (state) {
            if (state.isActive) {
                return DThemeWhiteConstants.HIGHLIGHT_COLOR;
            }
            else {
                return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
            }
        };
        DThemeWhiteButtonAmbient.prototype.getBackgroundAlpha = function (state) {
            if (state.inEnabled) {
                if (state.isActive) {
                    return 1.0;
                }
                else if (state.isPressed) {
                    return DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA * 2;
                }
                else if (state.isHovered) {
                    return DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA;
                }
            }
            return 0;
        };
        DThemeWhiteButtonAmbient.prototype.getBorderColor = function (state) {
            return null;
        };
        return DThemeWhiteButtonAmbient;
    }(DThemeWhiteButtonBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteButtonAmbient = function () {
        DThemeWhite.set("DButtonAmbient", DThemeWhiteButtonAmbient);
    };

    // Material Design icons by Google.
    // Apache license version 2.0.
    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("button_check_mark_on", 21, 21, "<g transform=\"scale(0.875,0.875)\">" +
        "<path d=\"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89" +
        "-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\" fill=\"#fff\" />" +
        "</g>");
    DThemeWhiteAtlas.add("button_check_mark_off", 21, 21, "<g transform=\"scale(0.875,0.875)\">" +
        "<path d=\"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\" " +
        "fill=\"#fff\" />" +
        "</g>");
    /* eslint-enable prettier/prettier */
    var DThemeWhiteButtonChecks = /** @class */ (function () {
        function DThemeWhiteButtonChecks() {
        }
        DThemeWhiteButtonChecks.getImageTintColor = function (state) {
            if (state.inDisabled || state.inReadOnly || !state.isActive) {
                return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
            }
            else {
                return DThemeWhiteConstants.HIGHLIGHT_COLOR;
            }
        };
        DThemeWhiteButtonChecks.getImageSource = function (state) {
            if (state.isActive) {
                return DThemeWhiteAtlas.mappings.button_check_mark_on;
            }
            else {
                return DThemeWhiteAtlas.mappings.button_check_mark_off;
            }
        };
        return DThemeWhiteButtonChecks;
    }());

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    // Material Design icons by Google.
    // Apache license version 2.0.
    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("button_check_mark_on", 21, 21, "<g transform=\"scale(0.875,0.875)\">" +
        "<path d=\"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89" +
        "-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\" fill=\"#fff\" />" +
        "</g>");
    DThemeWhiteAtlas.add("button_check_mark_off", 21, 21, "<g transform=\"scale(0.875,0.875)\">" +
        "<path d=\"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\" " +
        "fill=\"#fff\" />" +
        "</g>");
    /* eslint-prettier prettier/prettier */
    var DThemeWhiteButtonCheck = /** @class */ (function (_super) {
        __extends(DThemeWhiteButtonCheck, _super);
        function DThemeWhiteButtonCheck() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteButtonCheck.prototype.getBackgroundColor = function (state) {
            return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
        };
        DThemeWhiteButtonCheck.prototype.getColor = function (state) {
            return DThemeWhiteConstants.COLOR;
        };
        DThemeWhiteButtonCheck.prototype.getBackgroundAlpha = function (state) {
            if (state.inEnabled) {
                if (state.isHovered) {
                    return DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA;
                }
            }
            return 0;
        };
        DThemeWhiteButtonCheck.prototype.getOutlineColor = function (state) {
            return this.getOutlineColorNonActive(state);
        };
        DThemeWhiteButtonCheck.prototype.getOutlineOffset = function (state) {
            return this.getOutlineOffsetNonActive(state);
        };
        DThemeWhiteButtonCheck.prototype.getImageTintColor = function (state) {
            return DThemeWhiteButtonChecks.getImageTintColor(state);
        };
        DThemeWhiteButtonCheck.prototype.isToggle = function () {
            return true;
        };
        DThemeWhiteButtonCheck.prototype.getImageSource = function (state) {
            return DThemeWhiteButtonChecks.getImageSource(state);
        };
        return DThemeWhiteButtonCheck;
    }(DThemeWhiteButtonAmbient));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteButtonCheckRight = /** @class */ (function (_super) {
        __extends(DThemeWhiteButtonCheckRight, _super);
        function DThemeWhiteButtonCheckRight() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteButtonCheckRight.prototype.getImageAlignWith = function () {
            return DAlignWith.PADDING;
        };
        DThemeWhiteButtonCheckRight.prototype.getImageAlignHorizontal = function () {
            return DAlignHorizontal.RIGHT;
        };
        DThemeWhiteButtonCheckRight.prototype.getImageMarginHorizontal = function () {
            return 0;
        };
        DThemeWhiteButtonCheckRight.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.LEFT;
        };
        return DThemeWhiteButtonCheckRight;
    }(DThemeWhiteButtonCheck));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteButtonCheckRight = function () {
        DThemeWhite.set("DButtonCheckRight", DThemeWhiteButtonCheckRight);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteButtonCheck = function () {
        DThemeWhite.set("DButtonCheck", DThemeWhiteButtonCheck);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteButtonDanger = /** @class */ (function (_super) {
        __extends(DThemeWhiteButtonDanger, _super);
        function DThemeWhiteButtonDanger() {
            return _super.call(this, 0xff5566, 0.1, 0.2) || this;
        }
        DThemeWhiteButtonDanger.prototype.getBackgroundColor = function (state) {
            if (state.inDisabled) {
                return null;
            }
            else if (state.isPressed || state.isActive) {
                return this.BACKGROUND_COLOR_PRESSED;
            }
            else if (state.isHovered) {
                return this.BACKGROUND_COLOR_HOVERED;
            }
            else {
                return this.BACKGROUND_COLOR;
            }
        };
        DThemeWhiteButtonDanger.prototype.getBorderColor = function (state) {
            if (state.inDisabled) {
                return DThemeWhiteConstants.BORDER_COLOR;
            }
            else {
                return null;
            }
        };
        DThemeWhiteButtonDanger.prototype.getOutlineColor = function (state) {
            return this.getOutlineColorActive(state);
        };
        DThemeWhiteButtonDanger.prototype.getOutlineOffset = function (state) {
            return this.getOutlineOffsetActive(state);
        };
        DThemeWhiteButtonDanger.prototype.getColor = function (state) {
            if (state.inDisabled) {
                return _super.prototype.getColor.call(this, state);
            }
            else {
                return DThemeWhiteConstants.ACTIVE_COLOR;
            }
        };
        return DThemeWhiteButtonDanger;
    }(DThemeWhiteButtonBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteButtonDanger = function () {
        DThemeWhite.set("DButtonDanger", DThemeWhiteButtonDanger);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteButton = /** @class */ (function (_super) {
        __extends(DThemeWhiteButton, _super);
        function DThemeWhiteButton() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteButton;
    }(DThemeWhiteButtonBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteButtonFile = /** @class */ (function (_super) {
        __extends(DThemeWhiteButtonFile, _super);
        function DThemeWhiteButtonFile() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteButtonFile;
    }(DThemeWhiteButton));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteButtonFile = function () {
        DThemeWhite.set("DButtonFile", DThemeWhiteButtonFile);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteButtonLink = /** @class */ (function (_super) {
        __extends(DThemeWhiteButtonLink, _super);
        function DThemeWhiteButtonLink() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteButtonLink;
    }(DThemeWhiteButtonAmbient));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteButtonLink = function () {
        DThemeWhite.set("DButtonLink", DThemeWhiteButtonLink);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteButtonPrimary = /** @class */ (function (_super) {
        __extends(DThemeWhiteButtonPrimary, _super);
        function DThemeWhiteButtonPrimary() {
            return _super.call(this, DThemeWhiteConstants.HIGHLIGHT_COLOR, 0.1, 0.2) || this;
        }
        DThemeWhiteButtonPrimary.prototype.getBackgroundColor = function (state) {
            if (state.inDisabled) {
                return null;
            }
            else if (state.isPressed || state.isActive) {
                return this.BACKGROUND_COLOR_PRESSED;
            }
            else if (state.isHovered) {
                return this.BACKGROUND_COLOR_HOVERED;
            }
            else {
                return this.BACKGROUND_COLOR;
            }
        };
        DThemeWhiteButtonPrimary.prototype.getBorderColor = function (state) {
            if (state.inDisabled) {
                return DThemeWhiteConstants.BORDER_COLOR;
            }
            else {
                return null;
            }
        };
        DThemeWhiteButtonPrimary.prototype.getOutlineColor = function (state) {
            return this.getOutlineColorActive(state);
        };
        DThemeWhiteButtonPrimary.prototype.getOutlineOffset = function (state) {
            return this.getOutlineOffsetActive(state);
        };
        DThemeWhiteButtonPrimary.prototype.getColor = function (state) {
            if (state.inDisabled) {
                return _super.prototype.getColor.call(this, state);
            }
            else {
                return DThemeWhiteConstants.ACTIVE_COLOR;
            }
        };
        return DThemeWhiteButtonPrimary;
    }(DThemeWhiteButtonBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteButtonPrimary = function () {
        DThemeWhite.set("DButtonPrimary", DThemeWhiteButtonPrimary);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    // Material Design icons by Google.
    // Apache license version 2.0.
    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("button_radio_mark_on", 21, 21, "<g transform=\"scale(0.875,0.875)\">" +
        "<path d=\"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48" +
        " 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8" +
        " 8 3.58 8 8-3.58 8-8 8z\" fill=\"#fff\" />" +
        "</g>");
    DThemeWhiteAtlas.add("button_radio_mark_off", 21, 21, "<g transform=\"scale(0.875,0.875)\">" +
        "<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42" +
        " 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\" fill=\"#fff\" />" +
        "</g>");
    /* eslint-enable prettier/prettier */
    var DThemeWhiteButtonRadio = /** @class */ (function (_super) {
        __extends(DThemeWhiteButtonRadio, _super);
        function DThemeWhiteButtonRadio() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteButtonRadio.prototype.getBackgroundColor = function (state) {
            return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
        };
        DThemeWhiteButtonRadio.prototype.getColor = function (state) {
            return DThemeWhiteConstants.COLOR;
        };
        DThemeWhiteButtonRadio.prototype.getBackgroundAlpha = function (state) {
            if (state.inEnabled) {
                if (state.isHovered) {
                    return DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA;
                }
            }
            return 0;
        };
        DThemeWhiteButtonRadio.prototype.getOutlineColor = function (state) {
            return this.getOutlineColorNonActive(state);
        };
        DThemeWhiteButtonRadio.prototype.getOutlineOffset = function (state) {
            return this.getOutlineOffsetNonActive(state);
        };
        DThemeWhiteButtonRadio.prototype.getImageTintColor = function (state) {
            if (state.inDisabled || !state.isActive) {
                return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
            }
            else {
                return DThemeWhiteConstants.HIGHLIGHT_COLOR;
            }
        };
        DThemeWhiteButtonRadio.prototype.isToggle = function () {
            return true;
        };
        DThemeWhiteButtonRadio.prototype.getImageSource = function (state) {
            if (state.isActive) {
                return DThemeWhiteAtlas.mappings.button_radio_mark_on;
            }
            else {
                return DThemeWhiteAtlas.mappings.button_radio_mark_off;
            }
        };
        return DThemeWhiteButtonRadio;
    }(DThemeWhiteButtonAmbient));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteButtonRadioRight = /** @class */ (function (_super) {
        __extends(DThemeWhiteButtonRadioRight, _super);
        function DThemeWhiteButtonRadioRight() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteButtonRadioRight.prototype.getImageAlignWith = function () {
            return DAlignWith.PADDING;
        };
        DThemeWhiteButtonRadioRight.prototype.getImageAlignHorizontal = function () {
            return DAlignHorizontal.RIGHT;
        };
        DThemeWhiteButtonRadioRight.prototype.getImageMarginHorizontal = function () {
            return 0;
        };
        DThemeWhiteButtonRadioRight.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.LEFT;
        };
        return DThemeWhiteButtonRadioRight;
    }(DThemeWhiteButtonRadio));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteButtonRadioRight = function () {
        DThemeWhite.set("DButtonRadioRight", DThemeWhiteButtonRadioRight);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteButtonRadio = function () {
        DThemeWhite.set("DButtonRadio", DThemeWhiteButtonRadio);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteButtonSecondary = /** @class */ (function (_super) {
        __extends(DThemeWhiteButtonSecondary, _super);
        function DThemeWhiteButtonSecondary() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteButtonSecondary;
    }(DThemeWhiteButtonBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteButtonSecondary = function () {
        DThemeWhite.set("DButtonSecondary", DThemeWhiteButtonSecondary);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteButton = function () {
        DThemeWhite.set("DButton", DThemeWhiteButton);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteCanvas = /** @class */ (function (_super) {
        __extends(DThemeWhiteCanvas, _super);
        function DThemeWhiteCanvas() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteCanvas.prototype.getBackgroundColor = function () {
            return 0xffffff;
        };
        DThemeWhiteCanvas.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeWhiteCanvas.prototype.getCornerMask = function () {
            return DCornerMask.ALL;
        };
        DThemeWhiteCanvas.prototype.getInteractive = function () {
            return DBaseInteractive.BOTH;
        };
        return DThemeWhiteCanvas;
    }(DThemeWhiteBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteCanvasContainer = /** @class */ (function (_super) {
        __extends(DThemeWhiteCanvasContainer, _super);
        function DThemeWhiteCanvasContainer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteCanvasContainer.prototype.getBackgroundColor = function (state) {
            return null;
        };
        DThemeWhiteCanvasContainer.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeWhiteCanvasContainer.prototype.getPaddingLeft = function () {
            return 32;
        };
        DThemeWhiteCanvasContainer.prototype.getPaddingTop = function () {
            return 32;
        };
        DThemeWhiteCanvasContainer.prototype.getPaddingRight = function () {
            return 32;
        };
        DThemeWhiteCanvasContainer.prototype.getPaddingBottom = function () {
            return 32;
        };
        DThemeWhiteCanvasContainer.prototype.isOverflowMaskEnabled = function () {
            return false;
        };
        DThemeWhiteCanvasContainer.prototype.getInteractive = function () {
            return DBaseInteractive.BOTH;
        };
        DThemeWhiteCanvasContainer.prototype.getCornerMask = function () {
            return DCornerMask.ALL;
        };
        return DThemeWhiteCanvasContainer;
    }(DThemeWhiteBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteCanvasContainer = function () {
        DThemeWhite.set("DCanvasContainer", DThemeWhiteCanvasContainer);
        DThemeWhite.set("DCanvas", DThemeWhiteCanvas);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteChart = /** @class */ (function (_super) {
        __extends(DThemeWhiteChart, _super);
        function DThemeWhiteChart() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteChart.prototype.getPaddingLeft = function () {
            return 80;
        };
        DThemeWhiteChart.prototype.getPaddingRight = function () {
            return 10;
        };
        DThemeWhiteChart.prototype.getPaddingTop = function () {
            return 10;
        };
        DThemeWhiteChart.prototype.getPaddingBottom = function () {
            return 70;
        };
        DThemeWhiteChart.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeWhiteChart.prototype.getInteractive = function () {
            return DBaseInteractive.BOTH;
        };
        DThemeWhiteChart.prototype.newState = function (state) {
            _super.prototype.newState.call(this, state);
            state.isFocusable = false;
        };
        DThemeWhiteChart.prototype.isOverflowMaskEnabled = function () {
            return true;
        };
        return DThemeWhiteChart;
    }(DThemeWhiteBase));

    const DChartAxisPosition = wcardinal.ui.DChartAxisPosition;

    const DChartAxisTickPosition = wcardinal.ui.DChartAxisTickPosition;

    const EShapeTextAlignHorizontal = wcardinal.ui.EShapeTextAlignHorizontal;

    const EShapeTextAlignVertical = wcardinal.ui.EShapeTextAlignVertical;

    const EShapeTextDirection = wcardinal.ui.EShapeTextDirection;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteChartAxisBase = /** @class */ (function () {
        function DThemeWhiteChartAxisBase() {
        }
        DThemeWhiteChartAxisBase.prototype.getPosition = function () {
            return DChartAxisPosition.BOTTOM;
        };
        DThemeWhiteChartAxisBase.prototype.getPadding = function () {
            return 90;
        };
        DThemeWhiteChartAxisBase.prototype.getLabelAlignHorizontal = function (position) {
            switch (position) {
                case DChartAxisPosition.TOP:
                    return EShapeTextAlignHorizontal.CENTER;
                case DChartAxisPosition.BOTTOM:
                    return EShapeTextAlignHorizontal.CENTER;
                case DChartAxisPosition.LEFT:
                    return EShapeTextAlignHorizontal.OUTSIDE_LEFT;
                case DChartAxisPosition.RIGHT:
                    return EShapeTextAlignHorizontal.OUTSIDE_RIGHT;
            }
        };
        DThemeWhiteChartAxisBase.prototype.getLabelAlignVertical = function (position) {
            switch (position) {
                case DChartAxisPosition.TOP:
                    return EShapeTextAlignVertical.OUTSIDE_TOP;
                case DChartAxisPosition.BOTTOM:
                    return EShapeTextAlignVertical.OUTSIDE_BOTTOM;
                case DChartAxisPosition.LEFT:
                    return EShapeTextAlignVertical.MIDDLE;
                case DChartAxisPosition.RIGHT:
                    return EShapeTextAlignVertical.MIDDLE;
            }
        };
        DThemeWhiteChartAxisBase.prototype.getLabelPaddingHorizontal = function () {
            return 60;
        };
        DThemeWhiteChartAxisBase.prototype.getLabelPaddingVertical = function () {
            return 50;
        };
        DThemeWhiteChartAxisBase.prototype.getLabelDirection = function () {
            return EShapeTextDirection.LEFT_TO_RIGHT;
        };
        DThemeWhiteChartAxisBase.prototype.getLabelColor = function () {
            return this.getStrokeColor();
        };
        DThemeWhiteChartAxisBase.prototype.getStyle = function () {
            return undefined;
        };
        DThemeWhiteChartAxisBase.prototype.getStrokeEnable = function () {
            return true;
        };
        DThemeWhiteChartAxisBase.prototype.getStrokeColor = function () {
            return undefined;
        };
        DThemeWhiteChartAxisBase.prototype.getStrokeAlpha = function () {
            return undefined;
        };
        DThemeWhiteChartAxisBase.prototype.getStrokeWidth = function () {
            return undefined;
        };
        DThemeWhiteChartAxisBase.prototype.getStrokeAlign = function () {
            return undefined;
        };
        DThemeWhiteChartAxisBase.prototype.getStrokeSide = function () {
            return undefined;
        };
        DThemeWhiteChartAxisBase.prototype.getStrokeStyle = function () {
            return undefined;
        };
        DThemeWhiteChartAxisBase.prototype.getTickEnable = function () {
            return true;
        };
        DThemeWhiteChartAxisBase.prototype.getMajorTickCount = function () {
            return 3;
        };
        DThemeWhiteChartAxisBase.prototype.getMajorTickCapacity = function (count) {
            return count * 2;
        };
        DThemeWhiteChartAxisBase.prototype.getMajorTickStep = function () {
            return undefined;
        };
        DThemeWhiteChartAxisBase.prototype.getMajorTickSize = function () {
            return 10;
        };
        DThemeWhiteChartAxisBase.prototype.getMajorTickPosition = function () {
            return DChartAxisTickPosition.OUTSIDE;
        };
        DThemeWhiteChartAxisBase.prototype.getMajorTickStyle = function () {
            return undefined;
        };
        DThemeWhiteChartAxisBase.prototype.getMajorTickTextAlignHorizontal = function (position) {
            switch (position) {
                case DChartAxisPosition.TOP:
                    return EShapeTextAlignHorizontal.CENTER;
                case DChartAxisPosition.BOTTOM:
                    return EShapeTextAlignHorizontal.CENTER;
                case DChartAxisPosition.LEFT:
                    return EShapeTextAlignHorizontal.OUTSIDE_LEFT;
                case DChartAxisPosition.RIGHT:
                    return EShapeTextAlignHorizontal.OUTSIDE_RIGHT;
            }
        };
        DThemeWhiteChartAxisBase.prototype.getMajorTickTextAlignVertical = function (position) {
            switch (position) {
                case DChartAxisPosition.TOP:
                    return EShapeTextAlignVertical.OUTSIDE_TOP;
                case DChartAxisPosition.BOTTOM:
                    return EShapeTextAlignVertical.OUTSIDE_BOTTOM;
                case DChartAxisPosition.LEFT:
                    return EShapeTextAlignVertical.MIDDLE;
                case DChartAxisPosition.RIGHT:
                    return EShapeTextAlignVertical.MIDDLE;
            }
        };
        DThemeWhiteChartAxisBase.prototype.getMajorTickTextDirection = function () {
            return EShapeTextDirection.LEFT_TO_RIGHT;
        };
        DThemeWhiteChartAxisBase.prototype.getMajorTickTextColor = function () {
            return this.getStrokeColor();
        };
        DThemeWhiteChartAxisBase.prototype.getMajorTickTextFormat = function () {
            return "%.2f";
        };
        DThemeWhiteChartAxisBase.prototype.getMajorTickTextPaddingHorizontal = function () {
            return 15;
        };
        DThemeWhiteChartAxisBase.prototype.getMajorTickTextPaddingVertical = function () {
            return 15;
        };
        DThemeWhiteChartAxisBase.prototype.getMajorTickStrokeEnable = function () {
            return true;
        };
        DThemeWhiteChartAxisBase.prototype.getMajorTickStrokeColor = function () {
            return this.getStrokeColor();
        };
        DThemeWhiteChartAxisBase.prototype.getMajorTickStrokeAlpha = function () {
            return this.getStrokeAlpha();
        };
        DThemeWhiteChartAxisBase.prototype.getMajorTickStrokeWidth = function () {
            return this.getStrokeWidth();
        };
        DThemeWhiteChartAxisBase.prototype.getMajorTickStrokeAlign = function () {
            return this.getStrokeAlign();
        };
        DThemeWhiteChartAxisBase.prototype.getMajorTickStrokeSide = function () {
            return this.getStrokeSide();
        };
        DThemeWhiteChartAxisBase.prototype.getMajorTickStrokeStyle = function () {
            return this.getStrokeStyle();
        };
        DThemeWhiteChartAxisBase.prototype.getMajorTickGridlineEnable = function () {
            return true;
        };
        DThemeWhiteChartAxisBase.prototype.getMajorTickGridlineStyle = function () {
            return undefined;
        };
        DThemeWhiteChartAxisBase.prototype.getMajorTickGridlineStrokeEnable = function () {
            return true;
        };
        DThemeWhiteChartAxisBase.prototype.getMajorTickGridlineStrokeColor = function () {
            return this.getStrokeColor();
        };
        DThemeWhiteChartAxisBase.prototype.getMajorTickGridlineStrokeAlpha = function () {
            return 0.1;
        };
        DThemeWhiteChartAxisBase.prototype.getMajorTickGridlineStrokeWidth = function () {
            return this.getStrokeWidth();
        };
        DThemeWhiteChartAxisBase.prototype.getMajorTickGridlineStrokeAlign = function () {
            return this.getStrokeAlign();
        };
        DThemeWhiteChartAxisBase.prototype.getMajorTickGridlineStrokeSide = function () {
            return this.getStrokeSide();
        };
        DThemeWhiteChartAxisBase.prototype.getMajorTickGridlineStrokeStyle = function () {
            return this.getStrokeStyle();
        };
        DThemeWhiteChartAxisBase.prototype.getMinorTickCount = function () {
            return 3;
        };
        DThemeWhiteChartAxisBase.prototype.getMinorTickStep = function () {
            return undefined;
        };
        DThemeWhiteChartAxisBase.prototype.getMinorTickSize = function () {
            return 5;
        };
        DThemeWhiteChartAxisBase.prototype.getMinorTickPosition = function () {
            return DChartAxisTickPosition.OUTSIDE;
        };
        DThemeWhiteChartAxisBase.prototype.getMinorTickStyle = function () {
            return undefined;
        };
        DThemeWhiteChartAxisBase.prototype.getMinorTickTextAlignHorizontal = function (position) {
            return this.getMajorTickTextAlignHorizontal(position);
        };
        DThemeWhiteChartAxisBase.prototype.getMinorTickTextAlignVertical = function (position) {
            return this.getMajorTickTextAlignVertical(position);
        };
        DThemeWhiteChartAxisBase.prototype.getMinorTickTextDirection = function () {
            return this.getMajorTickTextDirection();
        };
        DThemeWhiteChartAxisBase.prototype.getMinorTickTextColor = function () {
            return this.getStrokeColor();
        };
        DThemeWhiteChartAxisBase.prototype.getMinorTickTextFormat = function () {
            return undefined;
        };
        DThemeWhiteChartAxisBase.prototype.getMinorTickTextPaddingHorizontal = function () {
            return this.getMajorTickTextPaddingHorizontal();
        };
        DThemeWhiteChartAxisBase.prototype.getMinorTickTextPaddingVertical = function () {
            return this.getMajorTickTextPaddingVertical();
        };
        DThemeWhiteChartAxisBase.prototype.getMinorTickStrokeEnable = function () {
            return true;
        };
        DThemeWhiteChartAxisBase.prototype.getMinorTickStrokeColor = function () {
            return this.getStrokeColor();
        };
        DThemeWhiteChartAxisBase.prototype.getMinorTickStrokeAlpha = function () {
            return this.getStrokeAlpha();
        };
        DThemeWhiteChartAxisBase.prototype.getMinorTickStrokeWidth = function () {
            return this.getStrokeWidth();
        };
        DThemeWhiteChartAxisBase.prototype.getMinorTickStrokeAlign = function () {
            return this.getStrokeAlign();
        };
        DThemeWhiteChartAxisBase.prototype.getMinorTickStrokeSide = function () {
            return this.getStrokeSide();
        };
        DThemeWhiteChartAxisBase.prototype.getMinorTickStrokeStyle = function () {
            return this.getStrokeStyle();
        };
        return DThemeWhiteChartAxisBase;
    }());

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteChartAxisX = /** @class */ (function (_super) {
        __extends(DThemeWhiteChartAxisX, _super);
        function DThemeWhiteChartAxisX() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteChartAxisX;
    }(DThemeWhiteChartAxisBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var STEP_FUNCTION = function (domainMin, domainMax, majorCount) {
        var span = Math.abs(domainMax - domainMin) / majorCount;
        if (span <= 10) {
            // The threshold x is calculated as follows:
            // (1 - x/a)^2 = (1 - x/b)^2
            // 1 - x/a = x/b - 1
            // x = 2ab/(a + b)
            if (span <= 1.33) {
                return 1;
            }
            else if (span <= 2.86) {
                return 2;
            }
            else if (span <= 6.67) {
                return 5;
            }
            return 10;
        }
        else if (span <= 100) {
            if (span <= 13.33) {
                return 10;
            }
            else if (span <= 28.57) {
                return 20;
            }
            else if (span <= 66.67) {
                return 50;
            }
            return 100;
        }
        else if (span <= 1000) {
            if (span <= 133.33) {
                return 100;
            }
            else if (span <= 285.71) {
                return 200;
            }
            else if (span <= 666.67) {
                return 500;
            }
            return 1000;
        }
        else if (span <= 10000) {
            if (span <= 1333.33) {
                return 1000;
            }
            else if (span <= 2857.14) {
                return 2000;
            }
            else if (span <= 6666.66) {
                return 5000;
            }
            return 10000;
        }
        else if (span <= 120000) {
            if (span <= 13333.33) {
                return 10000;
            }
            else if (span <= 24000) {
                return 20000;
            }
            else if (span <= 40000) {
                return 30000;
            }
            else if (span <= 72000) {
                return 60000;
            }
            else if (span <= 102857.14) {
                return 90000;
            }
            return 120000;
        }
        else if (span <= 10800000) {
            if (span <= 171428.57) {
                return 120000;
            }
            else if (span <= 400000) {
                return 300000;
            }
            else if (span <= 800000) {
                return 600000;
            }
            else if (span <= 1440000) {
                return 1200000;
            }
            else if (span <= 2400000) {
                return 1800000;
            }
            else if (span <= 4320000) {
                return 3600000;
            }
            else if (span <= 6171428.57) {
                return 5400000;
            }
            else if (span <= 8000000) {
                return 7200000;
            }
            else if (span <= 9818181.82) {
                return 9000000;
            }
            return 10800000;
        }
        else {
            var minutes = 3600000;
            var hours = span / minutes;
            if (hours <= 24) {
                if (hours <= 1.33) {
                    return minutes;
                }
                else if (hours <= 2.4) {
                    return 2 * minutes;
                }
                else if (hours <= 3.43) {
                    return 3 * minutes;
                }
                else if (hours <= 4.8) {
                    return 4 * minutes;
                }
                else if (hours <= 6.86) {
                    return 6 * minutes;
                }
                else if (hours <= 9.6) {
                    return 8 * minutes;
                }
                else if (hours <= 14.4) {
                    return 12 * minutes;
                }
                else if (hours <= 20.57) {
                    return 18 * minutes;
                }
                return 24 * minutes;
            }
            else {
                var days = hours / 24;
                var base = Math.pow(10, Math.floor(Math.log(days) / Math.LN10));
                var scale = days / base;
                if (scale <= 1.33) {
                    return base * 86400000;
                }
                else if (scale <= 2.86) {
                    return base * 172800000;
                }
                else if (scale <= 6.67) {
                    return base * 432000000;
                }
                return base * 864000000;
            }
        }
    };
    var DThemeWhiteChartAxisXDatetime = /** @class */ (function (_super) {
        __extends(DThemeWhiteChartAxisXDatetime, _super);
        function DThemeWhiteChartAxisXDatetime() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteChartAxisXDatetime.prototype.getMajorTickTextFormat = function () {
            return "%YMD\n%Hms";
        };
        DThemeWhiteChartAxisXDatetime.prototype.getMajorTickStep = function () {
            return STEP_FUNCTION;
        };
        return DThemeWhiteChartAxisXDatetime;
    }(DThemeWhiteChartAxisX));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteChartAxisY = /** @class */ (function (_super) {
        __extends(DThemeWhiteChartAxisY, _super);
        function DThemeWhiteChartAxisY() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteChartAxisY.prototype.getPosition = function () {
            return DChartAxisPosition.LEFT;
        };
        DThemeWhiteChartAxisY.prototype.getLabelDirection = function () {
            return EShapeTextDirection.BOTTOM_TO_TOP;
        };
        return DThemeWhiteChartAxisY;
    }(DThemeWhiteChartAxisBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteChartCoordinate = /** @class */ (function () {
        function DThemeWhiteChartCoordinate() {
        }
        DThemeWhiteChartCoordinate.prototype.isZero = function (value) {
            return Math.abs(value) < Number.EPSILON;
        };
        return DThemeWhiteChartCoordinate;
    }());

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteChartCoordinateTick = /** @class */ (function () {
        function DThemeWhiteChartCoordinateTick() {
        }
        DThemeWhiteChartCoordinateTick.prototype.toStep = function (domainMin, domainMax, majorCount) {
            var span = Math.abs(domainMax - domainMin) / majorCount;
            var power = Math.floor(Math.log(span) / Math.LN10);
            var base = Math.pow(10, power);
            var scale = span / base;
            // The threshold x is calculated as follows:
            // (1 - x/a)^2 = (1 - x/b)^2
            // 1 - x/a = x/b - 1
            // x = 2ab/(a + b)
            if (scale <= 1.33) {
                return base;
            }
            else if (scale <= 2.86) {
                return 2 * base;
            }
            else if (scale <= 6.67) {
                return 5 * base;
            }
            return 10 * base;
        };
        return DThemeWhiteChartCoordinateTick;
    }());

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteChartCoordinateTransform = /** @class */ (function () {
        function DThemeWhiteChartCoordinateTransform() {
        }
        DThemeWhiteChartCoordinateTransform.prototype.isZero = function (value) {
            return Math.abs(value) < Number.EPSILON;
        };
        return DThemeWhiteChartCoordinateTransform;
    }());

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteChartLegend = /** @class */ (function (_super) {
        __extends(DThemeWhiteChartLegend, _super);
        function DThemeWhiteChartLegend() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteChartLegend;
    }(DThemeWhiteBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteChartLegendItem = /** @class */ (function (_super) {
        __extends(DThemeWhiteChartLegendItem, _super);
        function DThemeWhiteChartLegendItem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteChartLegendItem;
    }(DThemeWhiteBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteChartOverview = /** @class */ (function (_super) {
        __extends(DThemeWhiteChartOverview, _super);
        function DThemeWhiteChartOverview() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteChartOverview;
    }(DThemeWhiteBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteChartPlotArea = /** @class */ (function (_super) {
        __extends(DThemeWhiteChartPlotArea, _super);
        function DThemeWhiteChartPlotArea() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteChartPlotArea.prototype.getX = function () {
            return "padding";
        };
        DThemeWhiteChartPlotArea.prototype.getY = function () {
            return "padding";
        };
        DThemeWhiteChartPlotArea.prototype.getWidth = function () {
            return "padding";
        };
        DThemeWhiteChartPlotArea.prototype.getHeight = function () {
            return "padding";
        };
        DThemeWhiteChartPlotArea.prototype.getPaddingTop = function () {
            return 10;
        };
        DThemeWhiteChartPlotArea.prototype.getPaddingRight = function () {
            return 10;
        };
        DThemeWhiteChartPlotArea.prototype.getPaddingBottom = function () {
            return 10;
        };
        DThemeWhiteChartPlotArea.prototype.getPaddingLeft = function () {
            return 10;
        };
        DThemeWhiteChartPlotArea.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeWhiteChartPlotArea.prototype.getCornerMask = function () {
            return DCornerMask.ALL;
        };
        DThemeWhiteChartPlotArea.prototype.isOverflowMaskEnabled = function () {
            return true;
        };
        DThemeWhiteChartPlotArea.prototype.getMargin = function () {
            return 20;
        };
        return DThemeWhiteChartPlotArea;
    }(DThemeWhiteBase));

    const EShapeStrokeStyle = wcardinal.ui.EShapeStrokeStyle;

    const EShapeBar = wcardinal.ui.EShapeBar;

    const EShapeBarPosition = wcardinal.ui.EShapeBarPosition;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteChartSelectionShape = /** @class */ (function () {
        function DThemeWhiteChartSelectionShape() {
        }
        return DThemeWhiteChartSelectionShape;
    }());

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteChartSelectionGridlineX = /** @class */ (function (_super) {
        __extends(DThemeWhiteChartSelectionGridlineX, _super);
        function DThemeWhiteChartSelectionGridlineX() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteChartSelectionGridlineX.prototype.isEnabled = function (state) {
            return state.isHovered;
        };
        DThemeWhiteChartSelectionGridlineX.prototype.newShape = function (state) {
            var result = new EShapeBar();
            result.points.position = EShapeBarPosition.TOP;
            result.stroke.style = EShapeStrokeStyle.DASHED;
            result.stroke.alpha = 0.75;
            return result;
        };
        return DThemeWhiteChartSelectionGridlineX;
    }(DThemeWhiteChartSelectionShape));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteChartSelectionGridlineY = /** @class */ (function (_super) {
        __extends(DThemeWhiteChartSelectionGridlineY, _super);
        function DThemeWhiteChartSelectionGridlineY() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteChartSelectionGridlineY.prototype.isEnabled = function (state) {
            return state.isHovered;
        };
        DThemeWhiteChartSelectionGridlineY.prototype.newShape = function (state) {
            var result = new EShapeBar();
            result.points.position = EShapeBarPosition.LEFT;
            result.stroke.style = EShapeStrokeStyle.DASHED;
            result.stroke.alpha = 0.75;
            return result;
        };
        return DThemeWhiteChartSelectionGridlineY;
    }(DThemeWhiteChartSelectionShape));

    const EShapeCircle = wcardinal.ui.EShapeCircle;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteChartSelectionMarker = /** @class */ (function (_super) {
        __extends(DThemeWhiteChartSelectionMarker, _super);
        function DThemeWhiteChartSelectionMarker() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteChartSelectionMarker.prototype.isEnabled = function (state) {
            return state.isActive;
        };
        DThemeWhiteChartSelectionMarker.prototype.newShape = function (state) {
            var result = new EShapeCircle();
            result.size.set(14, 14);
            result.fill.enable = false;
            result.stroke.alpha = 0.75;
            return result;
        };
        return DThemeWhiteChartSelectionMarker;
    }(DThemeWhiteChartSelectionShape));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteChart = function () {
        DThemeWhite.set("DChart", DThemeWhiteChart);
        DThemeWhite.set("DChartAxisX", DThemeWhiteChartAxisX);
        DThemeWhite.set("DChartAxisXDatetime", DThemeWhiteChartAxisXDatetime);
        DThemeWhite.set("DChartAxisY", DThemeWhiteChartAxisY);
        DThemeWhite.set("DChartCoordinate", DThemeWhiteChartCoordinate);
        DThemeWhite.set("DChartCoordinateTick", DThemeWhiteChartCoordinateTick);
        DThemeWhite.set("DChartCoordinateTransform", DThemeWhiteChartCoordinateTransform);
        DThemeWhite.set("DChartLegend", DThemeWhiteChartLegend);
        DThemeWhite.set("DChartLegendItem", DThemeWhiteChartLegendItem);
        DThemeWhite.set("DChartOverview", DThemeWhiteChartOverview);
        DThemeWhite.set("DChartPlotArea", DThemeWhiteChartPlotArea);
        DThemeWhite.set("DChartSelectionGridlineX", DThemeWhiteChartSelectionGridlineX);
        DThemeWhite.set("DChartSelectionGridlineY", DThemeWhiteChartSelectionGridlineY);
        DThemeWhite.set("DChartSelectionMarker", DThemeWhiteChartSelectionMarker);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteColorRecent = /** @class */ (function () {
        function DThemeWhiteColorRecent() {
        }
        DThemeWhiteColorRecent.prototype.getCapacity = function () {
            return 10;
        };
        DThemeWhiteColorRecent.prototype.newColors = function () {
            return [];
        };
        return DThemeWhiteColorRecent;
    }());

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteColorStandard = /** @class */ (function () {
        function DThemeWhiteColorStandard() {
        }
        DThemeWhiteColorStandard.prototype.newColors = function () {
            var result = [
                0x000000, 0x434343, 0x666666, 0x999999, 0xb7b7b7, 0xcccccc, 0xd9d9d9, 0xefefef,
                0xf3f3f3, 0xffffff, 0xc00000, 0xff0000, 0xffc000, 0xffff00, 0x92d050, 0x00b050,
                0x00b0f0, 0x0070c0, 0x002060, 0x7030a0
            ];
            for (var i = 10; i < 20; ++i) {
                result.push(UtilRgb.brighten(result[i], 0.75));
            }
            for (var i = 10; i < 20; ++i) {
                result.push(UtilRgb.brighten(result[i], 0.45));
            }
            for (var i = 10; i < 20; ++i) {
                result.push(UtilRgb.brighten(result[i], 0.15));
            }
            for (var i = 10; i < 20; ++i) {
                result.push(UtilRgb.darken(result[i], 0.15));
            }
            for (var i = 10; i < 20; ++i) {
                result.push(UtilRgb.darken(result[i], 0.45));
            }
            for (var i = 10; i < 20; ++i) {
                result.push(UtilRgb.darken(result[i], 0.75));
            }
            return result;
        };
        return DThemeWhiteColorStandard;
    }());

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteColor = function () {
        DThemeWhite.set("DColorRecent", DThemeWhiteColorRecent);
        DThemeWhite.set("DColorStandard", DThemeWhiteColorStandard);
    };

    const DAnimationFadeIn = wcardinal.ui.DAnimationFadeIn;

    const DDialogAlign = wcardinal.ui.DDialogAlign;

    const DDialogCloseOn = wcardinal.ui.DDialogCloseOn;

    const DDialogGestureMode = wcardinal.ui.DDialogGestureMode;

    const DDialogMode = wcardinal.ui.DDialogMode;

    const DDialogState = wcardinal.ui.DDialogState;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteDialog = /** @class */ (function (_super) {
        __extends(DThemeWhiteDialog, _super);
        function DThemeWhiteDialog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteDialog.prototype.getMode = function () {
            return DDialogMode.MODAL;
        };
        DThemeWhiteDialog.prototype.closeOn = function (mode) {
            switch (mode) {
                case DDialogMode.MODAL:
                case DDialogMode.MENU:
                    return DDialogCloseOn.ESC | DDialogCloseOn.CLICK_OUTSIDE;
                case DDialogMode.MODELESS:
                    return DDialogCloseOn.NONE;
            }
        };
        DThemeWhiteDialog.prototype.isSticky = function (mode) {
            return false;
        };
        DThemeWhiteDialog.prototype.isGestureEnabled = function (mode) {
            switch (mode) {
                case DDialogMode.MODAL:
                case DDialogMode.MODELESS:
                    return true;
                case DDialogMode.MENU:
                    return false;
            }
        };
        DThemeWhiteDialog.prototype.getGestureMode = function (mode) {
            return DDialogGestureMode.DIRTY;
        };
        DThemeWhiteDialog.prototype.getOffsetX = function (mode) {
            return 5;
        };
        DThemeWhiteDialog.prototype.getOffsetY = function (mode) {
            return 5;
        };
        DThemeWhiteDialog.prototype.getAlign = function (mode) {
            return DDialogAlign.BOTTOM;
        };
        DThemeWhiteDialog.prototype.newAnimation = function (mode) {
            switch (mode) {
                case DDialogMode.MODAL:
                    return new DAnimationFadeIn();
                case DDialogMode.MODELESS:
                    return null;
                case DDialogMode.MENU:
                    return null;
            }
        };
        DThemeWhiteDialog.prototype.getBackgroundColor = function (state) {
            if (state.is(DDialogState.MENU)) {
                return DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD;
            }
            else {
                return DThemeWhiteConstants.BACKGROUND_COLOR;
            }
        };
        DThemeWhiteDialog.prototype.getBorderColor = function (state) {
            if (state.is(DDialogState.MENU)) {
                return null;
            }
            else {
                return 0xfafafa;
            }
        };
        DThemeWhiteDialog.prototype.getOutlineColor = function (state) {
            return null;
        };
        DThemeWhiteDialog.prototype.getPaddingLeft = function () {
            return 0;
        };
        DThemeWhiteDialog.prototype.getPaddingTop = function () {
            return 0;
        };
        DThemeWhiteDialog.prototype.getPaddingRight = function () {
            return 0;
        };
        DThemeWhiteDialog.prototype.getPaddingBottom = function () {
            return 0;
        };
        DThemeWhiteDialog.prototype.getX = function () {
            return 0;
        };
        DThemeWhiteDialog.prototype.getY = function () {
            return 0;
        };
        DThemeWhiteDialog.prototype.getWidth = function () {
            return 400;
        };
        DThemeWhiteDialog.prototype.getHeight = function () {
            return "auto";
        };
        DThemeWhiteDialog.prototype.getShadow = function () {
            return this.newShadow();
        };
        DThemeWhiteDialog.prototype.getInteractive = function () {
            return DBaseInteractive.BOTH;
        };
        return DThemeWhiteDialog;
    }(DThemeWhiteBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteDialogLayered = /** @class */ (function (_super) {
        __extends(DThemeWhiteDialogLayered, _super);
        function DThemeWhiteDialogLayered() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteDialogLayered.prototype.getLayout = function () {
            return undefined;
        };
        DThemeWhiteDialogLayered.prototype.getHeader = function () {
            return null;
        };
        DThemeWhiteDialogLayered.prototype.getContent = function () {
            return undefined;
        };
        DThemeWhiteDialogLayered.prototype.getFooter = function () {
            return undefined;
        };
        return DThemeWhiteDialogLayered;
    }(DThemeWhiteDialog));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteDialogFitted = /** @class */ (function (_super) {
        __extends(DThemeWhiteDialogFitted, _super);
        function DThemeWhiteDialogFitted() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteDialogFitted.prototype.getWidth = function () {
            return "auto";
        };
        return DThemeWhiteDialogFitted;
    }(DThemeWhiteDialogLayered));

    const DLayoutDirection = wcardinal.ui.DLayoutDirection;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteLayout = /** @class */ (function (_super) {
        __extends(DThemeWhiteLayout, _super);
        function DThemeWhiteLayout() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteLayout.prototype.getBackgroundColor = function (state) {
            return null;
        };
        DThemeWhiteLayout.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeWhiteLayout.prototype.getMargin = function () {
            return 5;
        };
        DThemeWhiteLayout.prototype.getInteractive = function () {
            return DBaseInteractive.CHILDREN;
        };
        DThemeWhiteLayout.prototype.newState = function (state) {
            _super.prototype.newState.call(this, state);
            state.isFocusable = false;
        };
        DThemeWhiteLayout.prototype.getDirection = function () {
            return DLayoutDirection.VERTICAL;
        };
        DThemeWhiteLayout.prototype.getCornerAdjust = function () {
            return false;
        };
        DThemeWhiteLayout.prototype.getMultiplicity = function () {
            return 1;
        };
        DThemeWhiteLayout.prototype.getReverse = function () {
            return false;
        };
        return DThemeWhiteLayout;
    }(DThemeWhiteBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteLayoutVertical = /** @class */ (function (_super) {
        __extends(DThemeWhiteLayoutVertical, _super);
        function DThemeWhiteLayoutVertical() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteLayoutVertical.prototype.getDirection = function () {
            return DLayoutDirection.VERTICAL;
        };
        DThemeWhiteLayoutVertical.prototype.getWidth = function () {
            return "auto";
        };
        return DThemeWhiteLayoutVertical;
    }(DThemeWhiteLayout));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteDialogLayeredContent = /** @class */ (function (_super) {
        __extends(DThemeWhiteDialogLayeredContent, _super);
        function DThemeWhiteDialogLayeredContent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteDialogLayeredContent.prototype.getX = function () {
            return "padding";
        };
        DThemeWhiteDialogLayeredContent.prototype.getY = function () {
            return "padding";
        };
        DThemeWhiteDialogLayeredContent.prototype.getWidth = function () {
            return "padding";
        };
        DThemeWhiteDialogLayeredContent.prototype.getHeight = function () {
            return "auto";
        };
        DThemeWhiteDialogLayeredContent.prototype.getPaddingTop = function () {
            return 16;
        };
        DThemeWhiteDialogLayeredContent.prototype.getPaddingRight = function () {
            return 16;
        };
        DThemeWhiteDialogLayeredContent.prototype.getPaddingBottom = function () {
            return 16;
        };
        DThemeWhiteDialogLayeredContent.prototype.getPaddingLeft = function () {
            return 16;
        };
        return DThemeWhiteDialogLayeredContent;
    }(DThemeWhiteLayoutVertical));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteDialogFittedContent = /** @class */ (function (_super) {
        __extends(DThemeWhiteDialogFittedContent, _super);
        function DThemeWhiteDialogFittedContent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteDialogFittedContent.prototype.getWidth = function () {
            return "auto";
        };
        return DThemeWhiteDialogFittedContent;
    }(DThemeWhiteDialogLayeredContent));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteDialogFitted = function () {
        DThemeWhite.set("DDialogFittedContent", DThemeWhiteDialogFittedContent);
        DThemeWhite.set("DDialogFitted", DThemeWhiteDialogFitted);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteDialogInput = /** @class */ (function (_super) {
        __extends(DThemeWhiteDialogInput, _super);
        function DThemeWhiteDialogInput() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteDialogInput.prototype.getLabel = function () {
            return "";
        };
        DThemeWhiteDialogInput.prototype.getInputMargin = function () {
            return 32;
        };
        return DThemeWhiteDialogInput;
    }(DThemeWhiteDialogLayered));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteDialogInputBoolean = /** @class */ (function (_super) {
        __extends(DThemeWhiteDialogInputBoolean, _super);
        function DThemeWhiteDialogInputBoolean() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteDialogInputBoolean;
    }(DThemeWhiteDialogInput));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteDialogInputBoolean = function () {
        DThemeWhite.set("DDialogInputBoolean", DThemeWhiteDialogInputBoolean);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteDialogInputInteger = /** @class */ (function (_super) {
        __extends(DThemeWhiteDialogInputInteger, _super);
        function DThemeWhiteDialogInputInteger() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteDialogInputInteger;
    }(DThemeWhiteDialogInput));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteDialogInputInteger = function () {
        DThemeWhite.set("DDialogInputInteger", DThemeWhiteDialogInputInteger);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteDialogInputReal = /** @class */ (function (_super) {
        __extends(DThemeWhiteDialogInputReal, _super);
        function DThemeWhiteDialogInputReal() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteDialogInputReal;
    }(DThemeWhiteDialogInput));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteDialogInputReal = function () {
        DThemeWhite.set("DDialogInputReal", DThemeWhiteDialogInputReal);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteDialogInputText = /** @class */ (function (_super) {
        __extends(DThemeWhiteDialogInputText, _super);
        function DThemeWhiteDialogInputText() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteDialogInputText;
    }(DThemeWhiteDialogInput));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteDialogInputText = function () {
        DThemeWhite.set("DDialogInputText", DThemeWhiteDialogInputText);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteDialog = function () {
        DThemeWhite.set("DDialog", DThemeWhiteDialog);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("dropdown_mark", 20, 14, "<g>" +
        "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"16 5 10 11 4 5\"></polyline>" +
        "</g>");
    /* eslint-enable prettier/prettier */
    var DThemeWhiteDropdownBase = /** @class */ (function (_super) {
        __extends(DThemeWhiteDropdownBase, _super);
        function DThemeWhiteDropdownBase() {
            return _super.call(this, DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD) || this;
        }
        DThemeWhiteDropdownBase.prototype.getSecondaryImageAlignHorizontal = function () {
            return DAlignHorizontal.RIGHT;
        };
        DThemeWhiteDropdownBase.prototype.getSecondaryImageAlignWith = function () {
            return DAlignWith.PADDING;
        };
        DThemeWhiteDropdownBase.prototype.getSecondaryImageMarginHorizontal = function () {
            return -20;
        };
        DThemeWhiteDropdownBase.prototype.getPaddingLeft = function () {
            return 25;
        };
        DThemeWhiteDropdownBase.prototype.getPaddingRight = function () {
            return 25;
        };
        DThemeWhiteDropdownBase.prototype.getSecondaryImageSource = function (state) {
            return DThemeWhiteAtlas.mappings.dropdown_mark;
        };
        return DThemeWhiteDropdownBase;
    }(DThemeWhiteButtonBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteDropdown = /** @class */ (function (_super) {
        __extends(DThemeWhiteDropdown, _super);
        function DThemeWhiteDropdown() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteDropdown.prototype.newTextValue = function () {
            return "";
        };
        return DThemeWhiteDropdown;
    }(DThemeWhiteDropdownBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteDropdown = function () {
        DThemeWhite.set("DDropdown", DThemeWhiteDropdown);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteExpandable = /** @class */ (function (_super) {
        __extends(DThemeWhiteExpandable, _super);
        function DThemeWhiteExpandable() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteExpandable.prototype.getBackgroundColor = function (state) {
            if (state.isActive) {
                return 0xf0f8ff;
            }
            return null;
        };
        DThemeWhiteExpandable.prototype.getBackgroundAlpha = function (state) {
            if (state.isActive) {
                return 0.1;
            }
            return 0;
        };
        DThemeWhiteExpandable.prototype.getMargin = function () {
            return 0;
        };
        DThemeWhiteExpandable.prototype.getCornerMask = function () {
            return DCornerMask.ALL;
        };
        return DThemeWhiteExpandable;
    }(DThemeWhiteLayoutVertical));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteImage = /** @class */ (function (_super) {
        __extends(DThemeWhiteImage, _super);
        function DThemeWhiteImage() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteImage;
    }(DThemeWhiteImageBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("menu_item_expandable_header_closed", 14, 14, "<g transform=\"scale(1, 0.7)\">" +
        "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"6 16 10 10 6 4\"></polyline>" +
        "</g>");
    DThemeWhiteAtlas.add("menu_item_expandable_header_opened", 14, 14, "<g transform=\"scale(0.7, 1)\">" +
        "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"16 6 10 10 4 6\"></polyline>" +
        "</g>");
    /* eslint-enable prettier/prettier */
    var DThemeWhiteExpandableHeader = /** @class */ (function (_super) {
        __extends(DThemeWhiteExpandableHeader, _super);
        function DThemeWhiteExpandableHeader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteExpandableHeader.prototype.getBackgroundColor = function (state) {
            if (state.inDisabled) {
                return null;
            }
            else if (state.isHovered) {
                return 0xf8f8f8;
            }
            else if (state.inActive) {
                return 0xf8f8f8;
            }
            else {
                return null;
            }
        };
        DThemeWhiteExpandableHeader.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeWhiteExpandableHeader.prototype.getHeight = function () {
            return 30;
        };
        DThemeWhiteExpandableHeader.prototype.getWidth = function () {
            return "padding";
        };
        DThemeWhiteExpandableHeader.prototype.getPaddingLeft = function () {
            return 16;
        };
        DThemeWhiteExpandableHeader.prototype.getPaddingRight = function () {
            return 16;
        };
        DThemeWhiteExpandableHeader.prototype.getCornerMask = function () {
            return DCornerMask.ALL;
        };
        return DThemeWhiteExpandableHeader;
    }(DThemeWhiteImage));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteExpandable = function () {
        DThemeWhite.set("DExpandableHeader", DThemeWhiteExpandableHeader);
        DThemeWhite.set("DExpandable", DThemeWhiteExpandable);
    };

    const DHtmlElementState = wcardinal.ui.DHtmlElementState;

    const UtilHtmlElementWhen = wcardinal.ui.UtilHtmlElementWhen;

    var nullCreator = function () {
        return null;
    };
    var divCreator$2 = function (container) {
        var result = document.createElement("div");
        container.appendChild(result);
        return result;
    };
    var DThemeWhiteHtmlElement = /** @class */ (function (_super) {
        __extends(DThemeWhiteHtmlElement, _super);
        function DThemeWhiteHtmlElement() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteHtmlElement.prototype.getElementCreator = function () {
            return nullCreator;
        };
        DThemeWhiteHtmlElement.prototype.setElementStyle = function (target, state, padding, elementRect, elementMatrix, clipperRect, clipperEx) {
            // Style
            var style = this.getElementStylePointerEvent(state) +
                this.getElementStylePosition(state, elementRect, elementMatrix, clipperRect) +
                this.getElementStyleMargin(state) +
                this.getElementStyleText(state) +
                this.getElementStyleBackground(state) +
                this.getElementStyleBorder(state) +
                this.getElementStylePadding(state, padding) +
                this.getElementStyleOutline(state) +
                this.getElementStyleClipPath(state, clipperEx);
            target.setAttribute("style", style);
            // ReadOnly
            if (state.inReadOnly) {
                target.setAttribute("readonly", "readonly");
            }
            else {
                target.removeAttribute("readonly");
            }
            // Disabled
            if (state.inDisabled) {
                target.setAttribute("disabled", "disabled");
            }
            else {
                target.removeAttribute("disabled");
            }
        };
        DThemeWhiteHtmlElement.prototype.getElementStylePointerEvent = function (state) {
            if (!state.is(DHtmlElementState.NO_POINTER_EVENTS)) {
                return "pointer-events: auto;";
            }
            return "";
        };
        DThemeWhiteHtmlElement.prototype.getElementStyleBackground = function (state) {
            return "background-color: transparent;";
        };
        DThemeWhiteHtmlElement.prototype.getElementStyleBorder = function (state) {
            return "border: none; box-sizing: border-box;";
        };
        DThemeWhiteHtmlElement.prototype.getElementStylePadding = function (state, padding) {
            if (padding) {
                if ("getLeft" in padding) {
                    return ("padding: ".concat(padding.getTop(), "px ").concat(padding.getRight(), "px ") +
                        "".concat(padding.getBottom(), "px ").concat(padding.getLeft(), "px;"));
                }
                else {
                    return "padding: ".concat(padding.vertical, "px ").concat(padding.horizontal, "px;");
                }
            }
            return "padding: 0px;";
        };
        DThemeWhiteHtmlElement.prototype.getElementStyleOutline = function (state) {
            return "outline: none;";
        };
        DThemeWhiteHtmlElement.prototype.getElementStylePositionPosition = function (elementRect, clipperRect) {
            if (elementRect) {
                if (clipperRect) {
                    var left = elementRect.x - clipperRect.x;
                    var top_1 = elementRect.y - clipperRect.y;
                    return "left:".concat(left, "px; top:").concat(top_1, "px;");
                }
                return "left:".concat(elementRect.x, "px; top: ").concat(elementRect.y, "px;");
            }
            return "left: 0px; top: 0px;";
        };
        DThemeWhiteHtmlElement.prototype.getElementStylePositionSize = function (rect) {
            if (rect) {
                return "width: ".concat(rect.width, "px; height: ").concat(rect.height, "px;");
            }
            return "width: 0px; height: 0px;";
        };
        DThemeWhiteHtmlElement.prototype.getElementStylePositionTransform = function (matrix) {
            if (matrix) {
                return "transform: matrix(".concat(matrix.a, ",").concat(matrix.b, ",").concat(matrix.c, ",").concat(matrix.d, ",").concat(matrix.tx, ",").concat(matrix.ty, ");");
            }
            return "";
        };
        DThemeWhiteHtmlElement.prototype.getElementStylePosition = function (state, elementRect, elementMatrix, clipperRect) {
            return ("position: absolute;" +
                this.getElementStylePositionPosition(elementRect, clipperRect) +
                this.getElementStylePositionSize(elementRect) +
                this.getElementStylePositionTransform(elementMatrix));
        };
        DThemeWhiteHtmlElement.prototype.getElementStyleText = function (state) {
            return ("font-family: ".concat(this.getFontFamilly(), ";") +
                "font-size: ".concat(this.getFontSize(), "px;") +
                "color: #".concat(this.getColor(state).toString(16), ";") +
                "line-height: ".concat(this.getLineHeight(), "px;") +
                "-moz-tab-size: 4; -o-tab-size: 4; tab-size: 4;");
        };
        DThemeWhiteHtmlElement.prototype.getElementStyleMargin = function (state) {
            return "margin: 0;";
        };
        DThemeWhiteHtmlElement.prototype.getElementStyleClipPath = function (state, clipperEx) {
            if (clipperEx != null) {
                var id = clipperEx.id;
                return "-webkit-clip-path: url(#".concat(id, "); clip-path: url(#").concat(id, ");");
            }
            return "";
        };
        DThemeWhiteHtmlElement.prototype.getClipperCreator = function () {
            return divCreator$2;
        };
        DThemeWhiteHtmlElement.prototype.setClipperStyle = function (target, state, padding, elementRect, elementMatrix, clipperRect, clipperEx) {
            var style = "outline: none; padding: 0; margin: 0; border: none;" +
                "background-color: transparent; pointer-events: none;" +
                this.getClipperStyleOverflow(clipperRect) +
                this.getClipperStylePosition(clipperRect);
            target.setAttribute("style", style);
        };
        DThemeWhiteHtmlElement.prototype.getClipperStyleOverflow = function (rect) {
            if (rect) {
                return "overflow: hidden;";
            }
            return "overflow: visible;";
        };
        DThemeWhiteHtmlElement.prototype.getClipperStylePositionPosition = function (rect) {
            if (rect) {
                return "left: ".concat(rect.x, "px; top: ").concat(rect.y, "px;");
            }
            return "left: 0px; top: 0px;";
        };
        DThemeWhiteHtmlElement.prototype.getClipperStylePositionSize = function (rect) {
            if (rect) {
                return ("width: ".concat(rect.width, "px; height: ").concat(rect.height, "px;") +
                    "line-height: ".concat(rect.height, "px;"));
            }
            return "width: 0px; height: 0px;";
        };
        DThemeWhiteHtmlElement.prototype.getClipperStylePosition = function (rect) {
            return ("position: absolute;" +
                this.getClipperStylePositionPosition(rect) +
                this.getClipperStylePositionSize(rect));
        };
        DThemeWhiteHtmlElement.prototype.isClipperExEnabled = function () {
            return false;
        };
        DThemeWhiteHtmlElement.prototype.getBeforeCreator = function () {
            return divCreator$2;
        };
        DThemeWhiteHtmlElement.prototype.setBeforeStyle = function (target) {
            var style = "overflow: hidden; outline: none;" +
                "padding: 0; margin: 0; border: none; background-color: transparent;" +
                "position: absolute; left: 0; top: 0; width: 0; height: 0; line-height: 0;";
            target.setAttribute("style", style);
            target.setAttribute("tabindex", "0");
        };
        DThemeWhiteHtmlElement.prototype.getAfterCreator = function () {
            return divCreator$2;
        };
        DThemeWhiteHtmlElement.prototype.setAfterStyle = function (target) {
            this.setBeforeStyle(target);
        };
        DThemeWhiteHtmlElement.prototype.getWhen = function () {
            return UtilHtmlElementWhen.FOCUSED;
        };
        DThemeWhiteHtmlElement.prototype.getSelect = function () {
            return false;
        };
        return DThemeWhiteHtmlElement;
    }(DThemeWhiteImageBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteHtmlElement = function () {
        DThemeWhite.set("DHtmlElement", DThemeWhiteHtmlElement);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteImage = function () {
        DThemeWhite.set("DImage", DThemeWhiteImage);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteLayoutHorizontal = /** @class */ (function (_super) {
        __extends(DThemeWhiteLayoutHorizontal, _super);
        function DThemeWhiteLayoutHorizontal() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteLayoutHorizontal.prototype.getDirection = function () {
            return DLayoutDirection.HORIZONTAL;
        };
        DThemeWhiteLayoutHorizontal.prototype.getHeight = function () {
            return "auto";
        };
        return DThemeWhiteLayoutHorizontal;
    }(DThemeWhiteLayout));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteInputAndLabel = /** @class */ (function (_super) {
        __extends(DThemeWhiteInputAndLabel, _super);
        function DThemeWhiteInputAndLabel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteInputAndLabel.prototype.getHeight = function () {
            return this.getLineHeight();
        };
        return DThemeWhiteInputAndLabel;
    }(DThemeWhiteLayoutHorizontal));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteInputAndLabel = function () {
        DThemeWhite.set("DInputAndLabel", DThemeWhiteInputAndLabel);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var editingValidator = function () {
        return null;
    };
    var editingUnformatter$2 = function (text) {
        return text;
    };
    var DThemeWhiteInput = /** @class */ (function (_super) {
        __extends(DThemeWhiteInput, _super);
        function DThemeWhiteInput() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.BACKGROUND_COLOR = DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD;
            _this.BACKGROUND_COLOR_HOVERED = UtilRgb.darken(_this.BACKGROUND_COLOR, 0.017);
            return _this;
        }
        DThemeWhiteInput.prototype.getBackgroundColor = function (state) {
            if (state.inDisabled || state.inReadOnly) {
                return null;
            }
            else if (state.isHovered) {
                return this.BACKGROUND_COLOR_HOVERED;
            }
            else {
                return this.BACKGROUND_COLOR;
            }
        };
        DThemeWhiteInput.prototype.getBorderColor = function (state) {
            if (state.isInvalid) {
                return DThemeWhiteConstants.INVALID_COLOR;
            }
            return DThemeWhiteConstants.BORDER_COLOR;
        };
        DThemeWhiteInput.prototype.getOutlineColor = function (state) {
            if (state.isInvalid) {
                return DThemeWhiteConstants.INVALID_COLOR;
            }
            return _super.prototype.getOutlineColor.call(this, state);
        };
        DThemeWhiteInput.prototype.getHeight = function () {
            return this.getLineHeight();
        };
        DThemeWhiteInput.prototype.getWidth = function () {
            return 100;
        };
        DThemeWhiteInput.prototype.getPlaceholder = function () {
            return "";
        };
        DThemeWhiteInput.prototype.getPaddingLeft = function () {
            return 10;
        };
        DThemeWhiteInput.prototype.getPaddingRight = function () {
            return 10;
        };
        DThemeWhiteInput.prototype.getCursor = function (state) {
            if (!state.isActionable) {
                return "";
            }
            return "text";
        };
        DThemeWhiteInput.prototype.getEditingFormatter = function () {
            return this.getTextFormatter();
        };
        DThemeWhiteInput.prototype.getEditingUnformatter = function () {
            return editingUnformatter$2;
        };
        DThemeWhiteInput.prototype.getEditingValidator = function () {
            return editingValidator;
        };
        DThemeWhiteInput.prototype.getSelect = function () {
            return true;
        };
        DThemeWhiteInput.prototype.getElementStyleBorder = function (state) {
            return "border: 1.5px solid transparent; box-sizing: border-box;";
        };
        return DThemeWhiteInput;
    }(DThemeWhiteHtmlElement));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var CREATOR_CLASSNAME$1 = "d-theme-white-input-input";
    var CREATOR_CLASSNAME_ELEMENT$1 = "".concat(CREATOR_CLASSNAME$1, "-element");
    var elementCreator$1 = function (container) {
        var found = container.getElementsByClassName(CREATOR_CLASSNAME_ELEMENT$1);
        if (0 < found.length) {
            return found[0];
        }
        var element = document.createElement("input");
        element.setAttribute("spellcheck", "false");
        element.setAttribute("class", CREATOR_CLASSNAME_ELEMENT$1);
        container.appendChild(element);
        return element;
    };
    var divCreator$1 = function (container, classname) {
        var found = container.getElementsByClassName(classname);
        if (0 < found.length) {
            return found[0];
        }
        var result = document.createElement("div");
        result.setAttribute("class", classname);
        container.appendChild(result);
        return result;
    };
    var CREATOR_CLASSNAME_CLIPPER$1 = "".concat(CREATOR_CLASSNAME$1, "-clipper");
    var clipperCreator$1 = function (container) {
        return divCreator$1(container, CREATOR_CLASSNAME_CLIPPER$1);
    };
    var CREATOR_CLASSNAME_BEFORE$1 = "".concat(CREATOR_CLASSNAME$1, "-before");
    var beforeCreator$1 = function (container) {
        return divCreator$1(container, CREATOR_CLASSNAME_BEFORE$1);
    };
    var CREATOR_CLASSNAME_AFTER$1 = "".concat(CREATOR_CLASSNAME$1, "-after");
    var afterCreator$1 = function (container) {
        return divCreator$1(container, CREATOR_CLASSNAME_AFTER$1);
    };
    var DThemeWhiteInputInput = /** @class */ (function (_super) {
        __extends(DThemeWhiteInputInput, _super);
        function DThemeWhiteInputInput() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteInputInput.prototype.getElementCreator = function () {
            return elementCreator$1;
        };
        DThemeWhiteInputInput.prototype.getClipperCreator = function () {
            return clipperCreator$1;
        };
        DThemeWhiteInputInput.prototype.getBeforeCreator = function () {
            return beforeCreator$1;
        };
        DThemeWhiteInputInput.prototype.getAfterCreator = function () {
            return afterCreator$1;
        };
        return DThemeWhiteInputInput;
    }(DThemeWhiteInput));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteInputNumber = /** @class */ (function (_super) {
        __extends(DThemeWhiteInputNumber, _super);
        function DThemeWhiteInputNumber() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteInputNumber.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.CENTER;
        };
        DThemeWhiteInputNumber.prototype.getStep = function () {
            return null;
        };
        DThemeWhiteInputNumber.prototype.getMin = function () {
            return null;
        };
        DThemeWhiteInputNumber.prototype.getMax = function () {
            return null;
        };
        DThemeWhiteInputNumber.prototype.newTextValue = function () {
            return 0;
        };
        return DThemeWhiteInputNumber;
    }(DThemeWhiteInputInput));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var editingUnformatter$1 = function (text) {
        var result = parseInt(text, 10);
        if (result === result) {
            return result;
        }
        return 0;
    };
    var DThemeWhiteInputInteger = /** @class */ (function (_super) {
        __extends(DThemeWhiteInputInteger, _super);
        function DThemeWhiteInputInteger() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteInputInteger.prototype.getEditingUnformatter = function () {
            return editingUnformatter$1;
        };
        return DThemeWhiteInputInteger;
    }(DThemeWhiteInputNumber));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteInputInteger = function () {
        DThemeWhite.set("DInputInteger", DThemeWhiteInputInteger);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteText = /** @class */ (function (_super) {
        __extends(DThemeWhiteText, _super);
        function DThemeWhiteText() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteText.prototype.getHeight = function () {
            return this.getLineHeight();
        };
        DThemeWhiteText.prototype.newState = function (state) {
            _super.prototype.newState.call(this, state);
            state.isFocusable = false;
        };
        return DThemeWhiteText;
    }(DThemeWhiteTextBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteInputLabel = /** @class */ (function (_super) {
        __extends(DThemeWhiteInputLabel, _super);
        function DThemeWhiteInputLabel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteInputLabel.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.RIGHT;
        };
        DThemeWhiteInputLabel.prototype.getWidth = function () {
            return 60;
        };
        DThemeWhiteInputLabel.prototype.getHeight = function () {
            return this.getLineHeight();
        };
        return DThemeWhiteInputLabel;
    }(DThemeWhiteText));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteInputLabel = function () {
        DThemeWhite.set("DInputLabel", DThemeWhiteInputLabel);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var editingUnformatter = function (text) {
        var result = parseFloat(text);
        if (result === result) {
            return result;
        }
        return 0;
    };
    var DThemeWhiteInputReal = /** @class */ (function (_super) {
        __extends(DThemeWhiteInputReal, _super);
        function DThemeWhiteInputReal() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteInputReal.prototype.getEditingUnformatter = function () {
            return editingUnformatter;
        };
        return DThemeWhiteInputReal;
    }(DThemeWhiteInputNumber));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteInputReal = function () {
        DThemeWhite.set("DInputReal", DThemeWhiteInputReal);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteInputText = /** @class */ (function (_super) {
        __extends(DThemeWhiteInputText, _super);
        function DThemeWhiteInputText() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteInputText.prototype.newTextValue = function () {
            return "";
        };
        return DThemeWhiteInputText;
    }(DThemeWhiteInputInput));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    // Material Design icons by Google.
    // Apache license version 2.0.
    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("input_search", 21, 21, "<g transform=\"scale(0.875,0.875)\">" +
        "<path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 " +
        "9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 " +
        "14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\" fill=\"#fff\"/>" +
        "</g>");
    /* eslint-enable prettier/prettier */
    var DThemeWhiteInputSearch = /** @class */ (function (_super) {
        __extends(DThemeWhiteInputSearch, _super);
        function DThemeWhiteInputSearch() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteInputSearch.prototype.getPaddingRight = function () {
            return 31;
        };
        DThemeWhiteInputSearch.prototype.getImageSource = function (state) {
            return DThemeWhiteAtlas.mappings.input_search;
        };
        DThemeWhiteInputSearch.prototype.getImageAlignWith = function () {
            return DAlignWith.BORDER;
        };
        DThemeWhiteInputSearch.prototype.getImageAlignHorizontal = function () {
            return DAlignHorizontal.RIGHT;
        };
        DThemeWhiteInputSearch.prototype.getImageMarginHorizontal = function () {
            return 6;
        };
        return DThemeWhiteInputSearch;
    }(DThemeWhiteInputText));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteInputSearch = function () {
        DThemeWhite.set("DInputSearch", DThemeWhiteInputSearch);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var CREATOR_CLASSNAME = "d-theme-white-input-text-area";
    var CREATOR_CLASSNAME_ELEMENT = "".concat(CREATOR_CLASSNAME, "-element");
    var elementCreator = function (container) {
        var found = container.getElementsByClassName(CREATOR_CLASSNAME_ELEMENT);
        if (0 < found.length) {
            return found[0];
        }
        var element = document.createElement("textarea");
        element.setAttribute("spellcheck", "false");
        element.setAttribute("class", CREATOR_CLASSNAME_ELEMENT);
        container.appendChild(element);
        return element;
    };
    var divCreator = function (container, classname) {
        var found = container.getElementsByClassName(classname);
        if (0 < found.length) {
            return found[0];
        }
        var result = document.createElement("div");
        result.setAttribute("class", classname);
        container.appendChild(result);
        return result;
    };
    var CREATOR_CLASSNAME_CLIPPER = "".concat(CREATOR_CLASSNAME, "-clipper");
    var clipperCreator = function (container) {
        return divCreator(container, CREATOR_CLASSNAME_CLIPPER);
    };
    var CREATOR_CLASSNAME_BEFORE = "".concat(CREATOR_CLASSNAME, "-before");
    var beforeCreator = function (container) {
        return divCreator(container, CREATOR_CLASSNAME_BEFORE);
    };
    var CREATOR_CLASSNAME_AFTER = "".concat(CREATOR_CLASSNAME, "-after");
    var afterCreator = function (container) {
        return divCreator(container, CREATOR_CLASSNAME_AFTER);
    };
    var DThemeWhiteInputTextArea = /** @class */ (function (_super) {
        __extends(DThemeWhiteInputTextArea, _super);
        function DThemeWhiteInputTextArea() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteInputTextArea.prototype.getTextAlignVertical = function () {
            return DAlignVertical.TOP;
        };
        DThemeWhiteInputTextArea.prototype.getTextStyleWordWrap = function () {
            return DDynamicTextStyleWordWrap.NORMAL;
        };
        DThemeWhiteInputTextArea.prototype.getElementCreator = function () {
            return elementCreator;
        };
        DThemeWhiteInputTextArea.prototype.getClipperCreator = function () {
            return clipperCreator;
        };
        DThemeWhiteInputTextArea.prototype.getBeforeCreator = function () {
            return beforeCreator;
        };
        DThemeWhiteInputTextArea.prototype.getAfterCreator = function () {
            return afterCreator;
        };
        DThemeWhiteInputTextArea.prototype.newTextValue = function () {
            return "";
        };
        DThemeWhiteInputTextArea.prototype.getElementStyleText = function (state) {
            return (_super.prototype.getElementStyleText.call(this, state) +
                this.getElementStyleTextResize(state) +
                this.getElementStyleTextWordWrap(state));
        };
        DThemeWhiteInputTextArea.prototype.getElementStyleTextResize = function (state) {
            return "resize: none;";
        };
        DThemeWhiteInputTextArea.prototype.getElementStyleTextWordWrap = function (state) {
            var result = "overflow-wrap: break-word; word-wrap: break-word;";
            switch (this.getTextStyleWordWrap()) {
                case DDynamicTextStyleWordWrap.NORMAL:
                    result += "word-break: normal;";
                    break;
                default:
                    result += "word-break: break-all;";
                    break;
            }
            return result;
        };
        return DThemeWhiteInputTextArea;
    }(DThemeWhiteInput));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteInputTextArea = function () {
        DThemeWhite.set("DInputTextArea", DThemeWhiteInputTextArea);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteInputText = function () {
        DThemeWhite.set("DInputText", DThemeWhiteInputText);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteLayoutSpace = /** @class */ (function (_super) {
        __extends(DThemeWhiteLayoutSpace, _super);
        function DThemeWhiteLayoutSpace() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteLayoutSpace.prototype.getBackgroundColor = function (state) {
            return null;
        };
        DThemeWhiteLayoutSpace.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeWhiteLayoutSpace.prototype.getWidth = function () {
            return 0;
        };
        DThemeWhiteLayoutSpace.prototype.getHeight = function () {
            return 0;
        };
        DThemeWhiteLayoutSpace.prototype.getClearType = function () {
            return DLayoutClearType.BOTH;
        };
        DThemeWhiteLayoutSpace.prototype.getInteractive = function () {
            return DBaseInteractive.CHILDREN;
        };
        DThemeWhiteLayoutSpace.prototype.newState = function (state) {
            _super.prototype.newState.call(this, state);
            state.isFocusable = false;
        };
        return DThemeWhiteLayoutSpace;
    }(DThemeWhiteBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteLayout = function () {
        DThemeWhite.set("DLayout", DThemeWhiteLayout);
        DThemeWhite.set("DLayoutHorizontal", DThemeWhiteLayoutHorizontal);
        DThemeWhite.set("DLayoutSpace", DThemeWhiteLayoutSpace);
        DThemeWhite.set("DLayoutVertical", DThemeWhiteLayoutVertical);
    };

    const UtilGestureMode = wcardinal.ui.UtilGestureMode;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhitePane = /** @class */ (function (_super) {
        __extends(DThemeWhitePane, _super);
        function DThemeWhitePane() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhitePane.prototype.isOverflowMaskEnabled = function () {
            return true;
        };
        DThemeWhitePane.prototype.getBackgroundColor = function (state) {
            return DThemeWhiteConstants.BACKGROUND_COLOR;
        };
        DThemeWhitePane.prototype.getBorderAlign = function (state) {
            return 1;
        };
        DThemeWhitePane.prototype.getOutlineAlign = function (state) {
            return 1;
        };
        DThemeWhitePane.prototype.getInteractive = function () {
            return DBaseInteractive.BOTH;
        };
        DThemeWhitePane.prototype.getWheelSpeed = function () {
            return 2.24;
        };
        DThemeWhitePane.prototype.getGestureMode = function () {
            return UtilGestureMode.TOUCH;
        };
        return DThemeWhitePane;
    }(DThemeWhiteBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteList = /** @class */ (function (_super) {
        __extends(DThemeWhiteList, _super);
        function DThemeWhiteList() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteList.prototype.getBackgroundColor = function (state) {
            return DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD;
        };
        return DThemeWhiteList;
    }(DThemeWhitePane));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteListItems = /** @class */ (function () {
        function DThemeWhiteListItems(baseColor, isStripeEnabled, isVivid) {
            this._isStripeEnabled = isStripeEnabled;
            if (baseColor != null) {
                this._backgroundColorEven = baseColor;
                this._backgroundAlphaEven = 1;
                this._backgroundColorOdd = UtilRgb.darken(baseColor, 0.0175);
                this._backgroundAlphaOdd = 1;
                this._invalidColor = UtilRgb.blend(baseColor, DThemeWhiteConstants.INVALID_COLOR, DThemeWhiteConstants.INVALID_ALPHA);
                this._invalidAlpha = 1;
                if (isVivid) {
                    this._highlightColor = DThemeWhiteConstants.HIGHLIGHT_COLOR;
                }
                else {
                    this._highlightColor = UtilRgb.blend(baseColor, DThemeWhiteConstants.HIGHLIGHT_COLOR, DThemeWhiteConstants.HIGHLIGHT_ALPHA);
                }
                this._highlightAlpha = 1;
                this._weakHighlightColor = UtilRgb.blend(baseColor, DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR, DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA);
                this._weakHighlightAlpha = 1;
            }
            else {
                this._backgroundColorEven = 0x000000;
                this._backgroundAlphaEven = 0;
                this._backgroundColorOdd = 0x000000;
                this._backgroundAlphaOdd = 0.0175;
                this._invalidColor = DThemeWhiteConstants.INVALID_COLOR;
                this._invalidAlpha = DThemeWhiteConstants.INVALID_ALPHA;
                this._highlightColor = DThemeWhiteConstants.HIGHLIGHT_COLOR;
                if (isVivid) {
                    this._highlightAlpha = 1;
                }
                else {
                    this._highlightAlpha = DThemeWhiteConstants.HIGHLIGHT_ALPHA;
                }
                this._weakHighlightColor = DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
                this._weakHighlightAlpha = DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA;
            }
            this._imageTintColorWeak = DThemeWhiteConstants.COLOR;
            if (isVivid) {
                this._imageTintColorHighlight = DThemeWhiteConstants.ACTIVE_COLOR;
            }
            else {
                this._imageTintColorHighlight = DThemeWhiteConstants.COLOR;
            }
            if (isVivid) {
                this._color = DThemeWhiteConstants.COLOR;
                this._colorActive = DThemeWhiteConstants.ACTIVE_COLOR;
            }
            else {
                this._color = DThemeWhiteConstants.COLOR;
                this._colorActive = DThemeWhiteConstants.COLOR;
            }
        }
        DThemeWhiteListItems.prototype.getBackgroundColor = function (state) {
            if (state.inDisabled) {
                if (this._isStripeEnabled) {
                    if (state.isAlternated) {
                        return this._backgroundColorOdd;
                    }
                    else {
                        return this._backgroundColorEven;
                    }
                }
                else {
                    return null;
                }
            }
            else if (state.isInvalid) {
                return this._invalidColor;
            }
            else if (state.isActive) {
                return this._highlightColor;
            }
            else if (state.isHovered) {
                return this._weakHighlightColor;
            }
            else {
                if (this._isStripeEnabled) {
                    if (state.isAlternated) {
                        return this._backgroundColorOdd;
                    }
                    else {
                        return this._backgroundColorEven;
                    }
                }
                else {
                    return null;
                }
            }
        };
        DThemeWhiteListItems.prototype.getBackgroundAlpha = function (state) {
            if (state.inDisabled) {
                if (this._isStripeEnabled) {
                    if (state.isAlternated) {
                        return this._backgroundAlphaOdd;
                    }
                    else {
                        return this._backgroundAlphaEven;
                    }
                }
                else {
                    return 0;
                }
            }
            else if (state.isInvalid) {
                return this._invalidAlpha;
            }
            else if (state.isActive) {
                return this._highlightAlpha;
            }
            else if (state.isHovered) {
                return this._weakHighlightAlpha;
            }
            else {
                if (this._isStripeEnabled) {
                    if (state.isAlternated) {
                        return this._backgroundAlphaOdd;
                    }
                    else {
                        return this._backgroundAlphaEven;
                    }
                }
                else {
                    return 0;
                }
            }
        };
        DThemeWhiteListItems.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeWhiteListItems.prototype.getBorderMask = function (state) {
            return DBorderMask.NONE;
        };
        DThemeWhiteListItems.prototype.getColor = function (state) {
            if (state.isActive) {
                return this._colorActive;
            }
            return this._color;
        };
        DThemeWhiteListItems.prototype.getAlpha = function (state) {
            if (state.inEnabled) {
                return 1.0;
            }
            return 0;
        };
        DThemeWhiteListItems.prototype.getImageTintColor = function (state, isActive) {
            if (state.inDisabled || state.inReadOnly || !(state.isActive || isActive)) {
                return this._imageTintColorWeak;
            }
            else {
                return this._imageTintColorHighlight;
            }
        };
        DThemeWhiteListItems.prototype.getHeight = function () {
            return 30;
        };
        DThemeWhiteListItems.prototype.getCornerMask = function () {
            return DCornerMask.ALL;
        };
        DThemeWhiteListItems.prototype.getCursor = function (state) {
            if (!state.isActionable) {
                return "";
            }
            return "pointer";
        };
        return DThemeWhiteListItems;
    }());

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteListItem = /** @class */ (function (_super) {
        __extends(DThemeWhiteListItem, _super);
        function DThemeWhiteListItem() {
            var _this = _super.call(this) || this;
            _this._style = _this.newStyle();
            return _this;
        }
        DThemeWhiteListItem.prototype.newStyle = function () {
            return new DThemeWhiteListItems(null, true, false);
        };
        DThemeWhiteListItem.prototype.getBackgroundColor = function (state) {
            return this._style.getBackgroundColor(state);
        };
        DThemeWhiteListItem.prototype.getBackgroundAlpha = function (state) {
            return this._style.getBackgroundAlpha(state);
        };
        DThemeWhiteListItem.prototype.getBorderColor = function (state) {
            return this._style.getBorderColor(state);
        };
        DThemeWhiteListItem.prototype.getBorderMask = function (state) {
            return this._style.getBorderMask(state);
        };
        DThemeWhiteListItem.prototype.getColor = function (state) {
            return this._style.getColor(state);
        };
        DThemeWhiteListItem.prototype.getAlpha = function (state) {
            return this._style.getAlpha(state);
        };
        DThemeWhiteListItem.prototype.getHeight = function () {
            return this._style.getHeight();
        };
        DThemeWhiteListItem.prototype.getCornerMask = function () {
            return this._style.getCornerMask();
        };
        DThemeWhiteListItem.prototype.getImageTintColor = function (state) {
            return this._style.getImageTintColor(state);
        };
        DThemeWhiteListItem.prototype.getCursor = function (state) {
            return this._style.getCursor(state);
        };
        DThemeWhiteListItem.prototype.getPaddingLeft = function () {
            return 10;
        };
        DThemeWhiteListItem.prototype.getPaddingRight = function () {
            return 10;
        };
        DThemeWhiteListItem.prototype.newTextValue = function () {
            return undefined;
        };
        DThemeWhiteListItem.prototype.getWidth = function () {
            return "padding";
        };
        DThemeWhiteListItem.prototype.newState = function (state) {
            _super.prototype.newState.call(this, state);
            state.isDisabled = true;
        };
        return DThemeWhiteListItem;
    }(DThemeWhiteImageBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteListItemAmbient = /** @class */ (function (_super) {
        __extends(DThemeWhiteListItemAmbient, _super);
        function DThemeWhiteListItemAmbient() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteListItemAmbient.prototype.newStyle = function () {
            return new DThemeWhiteListItems(null, false, true);
        };
        return DThemeWhiteListItemAmbient;
    }(DThemeWhiteListItem));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteList = function () {
        DThemeWhite.set("DListItemAmbient", DThemeWhiteListItemAmbient);
        DThemeWhite.set("DListItem", DThemeWhiteListItem);
        DThemeWhite.set("DList", DThemeWhiteList);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteMenuBar = /** @class */ (function (_super) {
        __extends(DThemeWhiteMenuBar, _super);
        function DThemeWhiteMenuBar() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteMenuBar.prototype.getBackgroundColor = function () {
            return 0xfdfdfd;
        };
        DThemeWhiteMenuBar.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeWhiteMenuBar.prototype.getHeight = function () {
            return 30;
        };
        DThemeWhiteMenuBar.prototype.getMargin = function () {
            return 0;
        };
        DThemeWhiteMenuBar.prototype.getPaddingLeft = function () {
            return 5;
        };
        DThemeWhiteMenuBar.prototype.getPaddingRight = function () {
            return 5;
        };
        DThemeWhiteMenuBar.prototype.getInteractive = function () {
            return DBaseInteractive.BOTH;
        };
        DThemeWhiteMenuBar.prototype.newState = function (state) {
            _super.prototype.newState.call(this, state);
            state.isFocusRoot = true;
        };
        return DThemeWhiteMenuBar;
    }(DThemeWhiteLayoutHorizontal));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteMenuBarItem = /** @class */ (function (_super) {
        __extends(DThemeWhiteMenuBarItem, _super);
        function DThemeWhiteMenuBarItem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteMenuBarItem.prototype.getBackgroundColor = function (state) {
            if (state.inDisabled) {
                return null;
            }
            else if (state.isActive) {
                return DThemeWhiteConstants.HIGHLIGHT_COLOR;
            }
            else if (state.isHovered) {
                return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
            }
            else {
                return null;
            }
        };
        DThemeWhiteMenuBarItem.prototype.getBackgroundAlpha = function (state) {
            return DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA;
        };
        DThemeWhiteMenuBarItem.prototype.getBorderColor = function () {
            return null;
        };
        DThemeWhiteMenuBarItem.prototype.getWidth = function () {
            return "auto";
        };
        DThemeWhiteMenuBarItem.prototype.getHeight = function () {
            return "100%";
        };
        DThemeWhiteMenuBarItem.prototype.getPaddingLeft = function () {
            return 10;
        };
        DThemeWhiteMenuBarItem.prototype.getPaddingRight = function () {
            return 10;
        };
        DThemeWhiteMenuBarItem.prototype.getCornerMask = function () {
            return DCornerMask.ALL;
        };
        DThemeWhiteMenuBarItem.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.LEFT;
        };
        DThemeWhiteMenuBarItem.prototype.getTextStyleClipping = function () {
            return false;
        };
        return DThemeWhiteMenuBarItem;
    }(DThemeWhiteButton));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteMenu = /** @class */ (function (_super) {
        __extends(DThemeWhiteMenu, _super);
        function DThemeWhiteMenu() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteMenu.prototype.getBackgroundColor = function (state) {
            return DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD;
        };
        DThemeWhiteMenu.prototype.getOffsetX = function () {
            return 5;
        };
        DThemeWhiteMenu.prototype.getOffsetY = function () {
            return 5;
        };
        DThemeWhiteMenu.prototype.getPaddingTop = function () {
            return 5;
        };
        DThemeWhiteMenu.prototype.getPaddingBottom = function () {
            return 5;
        };
        DThemeWhiteMenu.prototype.getWidth = function () {
            return 200;
        };
        DThemeWhiteMenu.prototype.getHeight = function () {
            return "auto";
        };
        DThemeWhiteMenu.prototype.getMargin = function () {
            return 0;
        };
        DThemeWhiteMenu.prototype.getShadow = function () {
            return this.newShadowWeak();
        };
        DThemeWhiteMenu.prototype.getInteractive = function () {
            return DBaseInteractive.BOTH;
        };
        DThemeWhiteMenu.prototype.newState = function (state) {
            _super.prototype.newState.call(this, state);
            state.isFocusRoot = true;
        };
        return DThemeWhiteMenu;
    }(DThemeWhiteLayoutVertical));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteMenuItemBase = /** @class */ (function (_super) {
        __extends(DThemeWhiteMenuItemBase, _super);
        function DThemeWhiteMenuItemBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteMenuItemBase.prototype.getBackgroundColor = function (state) {
            if (state.inDisabled) {
                return null;
            }
            else if (state.isActive) {
                return this.getBackgroundColorActive(state);
            }
            else if (state.isHovered) {
                return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
            }
            else {
                return null;
            }
        };
        DThemeWhiteMenuItemBase.prototype.getBackgroundColorActive = function (state) {
            return DThemeWhiteConstants.HIGHLIGHT_COLOR;
        };
        DThemeWhiteMenuItemBase.prototype.getBackgroundAlpha = function (state) {
            if (state.inDisabled) {
                return DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA;
            }
            else if (state.isActive) {
                return this.getBackgroundAlphaActive(state);
            }
            else {
                return DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA;
            }
        };
        DThemeWhiteMenuItemBase.prototype.getBackgroundAlphaActive = function (state) {
            return DThemeWhiteConstants.HIGHLIGHT_ALPHA;
        };
        DThemeWhiteMenuItemBase.prototype.getColor = function (state) {
            if (state.inDisabled) {
                return DThemeWhiteConstants.COLOR;
            }
            else if (state.isActive) {
                return this.getColorActive(state);
            }
            else {
                return DThemeWhiteConstants.COLOR;
            }
        };
        DThemeWhiteMenuItemBase.prototype.getColorActive = function (state) {
            return DThemeWhiteConstants.COLOR;
        };
        DThemeWhiteMenuItemBase.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeWhiteMenuItemBase.prototype.getHeight = function () {
            return 30;
        };
        DThemeWhiteMenuItemBase.prototype.getWidth = function () {
            return "padding";
        };
        DThemeWhiteMenuItemBase.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.LEFT;
        };
        DThemeWhiteMenuItemBase.prototype.getPaddingLeft = function () {
            return 10;
        };
        DThemeWhiteMenuItemBase.prototype.getPaddingRight = function () {
            return 10;
        };
        DThemeWhiteMenuItemBase.prototype.getCornerMask = function () {
            return DCornerMask.ALL;
        };
        DThemeWhiteMenuItemBase.prototype.getCursor = function (state) {
            if (!state.isActionable) {
                return "";
            }
            return "pointer";
        };
        return DThemeWhiteMenuItemBase;
    }(DThemeWhiteImage));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteMenuItem = /** @class */ (function (_super) {
        __extends(DThemeWhiteMenuItem, _super);
        function DThemeWhiteMenuItem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteMenuItem.prototype.getBackgroundColorActive = function (state) {
            return DThemeWhiteConstants.HIGHLIGHT_COLOR;
        };
        DThemeWhiteMenuItem.prototype.getBackgroundAlphaActive = function (state) {
            return 1.0;
        };
        DThemeWhiteMenuItem.prototype.getColorActive = function (state) {
            return DThemeWhiteConstants.ACTIVE_COLOR;
        };
        DThemeWhiteMenuItem.prototype.getPaddingLeft = function () {
            return this.getPaddingRight();
        };
        DThemeWhiteMenuItem.prototype.getPaddingRight = function () {
            return 26;
        };
        return DThemeWhiteMenuItem;
    }(DThemeWhiteMenuItemBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteMenuItemText = /** @class */ (function (_super) {
        __extends(DThemeWhiteMenuItemText, _super);
        function DThemeWhiteMenuItemText() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteMenuItemText.prototype.getShortcutTextMargin = function () {
            return this.getPaddingRight();
        };
        DThemeWhiteMenuItemText.prototype.getShortcutColor = function (state) {
            return this.getColor(state);
        };
        DThemeWhiteMenuItemText.prototype.getShortcutAlpha = function (state) {
            return this.getAlpha(state) * 0.5;
        };
        return DThemeWhiteMenuItemText;
    }(DThemeWhiteMenuItem));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("menu_item_mark_check_active", 14, 14, "<g>" +
        "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"1 6.5 5 11 13 2.5\"></polyline>" +
        "</g>");
    DThemeWhiteAtlas.add("menu_item_mark_check_inactive", 14, 14, "<g></g>");
    /* eslint-enable prettier/prettier */
    var DThemeWhiteMenuItemCheck = /** @class */ (function (_super) {
        __extends(DThemeWhiteMenuItemCheck, _super);
        function DThemeWhiteMenuItemCheck() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteMenuItemCheck.prototype.getBackgroundColorActive = function (state) {
            if (state.isHovered) {
                return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
            }
            else {
                return null;
            }
        };
        DThemeWhiteMenuItemCheck.prototype.getBackgroundAlphaActive = function (state) {
            return DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA;
        };
        DThemeWhiteMenuItemCheck.prototype.getColorActive = function (state) {
            return DThemeWhiteConstants.COLOR;
        };
        DThemeWhiteMenuItemCheck.prototype.getImageSource = function (state) {
            if (state.isActive) {
                return DThemeWhiteAtlas.mappings.menu_item_mark_check_active;
            }
            else {
                return DThemeWhiteAtlas.mappings.menu_item_mark_check_inactive;
            }
        };
        DThemeWhiteMenuItemCheck.prototype.getImageAlignWith = function () {
            return DAlignWith.BORDER;
        };
        DThemeWhiteMenuItemCheck.prototype.getImageMarginHorizontal = function () {
            return 7;
        };
        return DThemeWhiteMenuItemCheck;
    }(DThemeWhiteMenuItemText));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteMenuItemExpandable = /** @class */ (function (_super) {
        __extends(DThemeWhiteMenuItemExpandable, _super);
        function DThemeWhiteMenuItemExpandable() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteMenuItemExpandable.prototype.getBackgroundColor = function (state) {
            if (state.isActive) {
                return 0xf0f8ff;
            }
            return null;
        };
        DThemeWhiteMenuItemExpandable.prototype.getBackgroundAlpha = function (state) {
            if (state.isActive) {
                return 0.1;
            }
            return 0;
        };
        DThemeWhiteMenuItemExpandable.prototype.getMargin = function () {
            return 0;
        };
        DThemeWhiteMenuItemExpandable.prototype.getWidth = function () {
            return "padding";
        };
        DThemeWhiteMenuItemExpandable.prototype.getHeight = function () {
            return "auto";
        };
        DThemeWhiteMenuItemExpandable.prototype.getCornerMask = function () {
            return DCornerMask.ALL;
        };
        return DThemeWhiteMenuItemExpandable;
    }(DThemeWhiteLayoutVertical));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteMenuItemExpandableBody = /** @class */ (function (_super) {
        __extends(DThemeWhiteMenuItemExpandableBody, _super);
        function DThemeWhiteMenuItemExpandableBody() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteMenuItemExpandableBody.prototype.getWidth = function () {
            return "padding";
        };
        DThemeWhiteMenuItemExpandableBody.prototype.getHeight = function () {
            return "auto";
        };
        DThemeWhiteMenuItemExpandableBody.prototype.getCornerMask = function () {
            return DCornerMask.ALL;
        };
        return DThemeWhiteMenuItemExpandableBody;
    }(DThemeWhiteLayoutVertical));

    var DThemeWhiteExpandables = /** @class */ (function () {
        function DThemeWhiteExpandables() {
        }
        DThemeWhiteExpandables.init = function () {
            /* eslint-disable prettier/prettier */
            DThemeWhiteAtlas.add("expandable_closed", 14, 14, "<g transform=\"scale(1, 0.7)\">" +
                "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"6 16 10 10 6 4\"></polyline>" +
                "</g>");
            DThemeWhiteAtlas.add("expandable_opened", 14, 14, "<g transform=\"scale(0.7, 1)\">" +
                "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"16 6 10 10 4 6\"></polyline>" +
                "</g>");
            /* eslint-enable prettier/prettier */
        };
        DThemeWhiteExpandables.getImageOpened = function () {
            return DThemeWhiteAtlas.mappings.expandable_opened;
        };
        DThemeWhiteExpandables.getImageClosed = function () {
            return DThemeWhiteAtlas.mappings.expandable_closed;
        };
        return DThemeWhiteExpandables;
    }());

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    DThemeWhiteExpandables.init();
    var DThemeWhiteMenuItemExpandableHeader = /** @class */ (function (_super) {
        __extends(DThemeWhiteMenuItemExpandableHeader, _super);
        function DThemeWhiteMenuItemExpandableHeader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteMenuItemExpandableHeader.prototype.getPaddingLeft = function () {
            return this.getPaddingRight();
        };
        DThemeWhiteMenuItemExpandableHeader.prototype.getPaddingRight = function () {
            return 26;
        };
        DThemeWhiteMenuItemExpandableHeader.prototype.getImageSource = function (state) {
            if (state.inActive) {
                return DThemeWhiteExpandables.getImageOpened();
            }
            return DThemeWhiteExpandables.getImageClosed();
        };
        DThemeWhiteMenuItemExpandableHeader.prototype.getImageAlignWith = function () {
            return DAlignWith.BORDER;
        };
        DThemeWhiteMenuItemExpandableHeader.prototype.getImageMarginHorizontal = function () {
            return 7;
        };
        return DThemeWhiteMenuItemExpandableHeader;
    }(DThemeWhiteMenuItemBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteMenuItemExpandableItemCheck = /** @class */ (function (_super) {
        __extends(DThemeWhiteMenuItemExpandableItemCheck, _super);
        function DThemeWhiteMenuItemExpandableItemCheck() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteMenuItemExpandableItemCheck.prototype.getPaddingLeft = function () {
            return _super.prototype.getPaddingLeft.call(this) + 16;
        };
        DThemeWhiteMenuItemExpandableItemCheck.prototype.getImageMarginHorizontal = function () {
            return _super.prototype.getImageMarginHorizontal.call(this) + 16;
        };
        return DThemeWhiteMenuItemExpandableItemCheck;
    }(DThemeWhiteMenuItemCheck));

    const DBaseState = wcardinal.ui.DBaseState;

    const DThemes = wcardinal.ui.DThemes;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteMenuItemLink = /** @class */ (function (_super) {
        __extends(DThemeWhiteMenuItemLink, _super);
        function DThemeWhiteMenuItemLink() {
            var _this = _super.call(this) || this;
            _this._link = DThemes.getInstance().get("DLink");
            return _this;
        }
        DThemeWhiteMenuItemLink.prototype.getImageSource = function (state) {
            if (state.is(DBaseState.NEW_WINDOW)) {
                return this._link.getImageSource(state);
            }
            return null;
        };
        DThemeWhiteMenuItemLink.prototype.getImageTintAlpha = function (state) {
            if (state.isHovered) {
                return _super.prototype.getImageTintAlpha.call(this, state);
            }
            return 0;
        };
        DThemeWhiteMenuItemLink.prototype.getImageAlignWith = function () {
            return DAlignWith.BORDER;
        };
        DThemeWhiteMenuItemLink.prototype.getImageAlignHorizontal = function () {
            return DAlignHorizontal.RIGHT;
        };
        return DThemeWhiteMenuItemLink;
    }(DThemeWhiteMenuItemText));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteMenuItemExpandableItemLink = /** @class */ (function (_super) {
        __extends(DThemeWhiteMenuItemExpandableItemLink, _super);
        function DThemeWhiteMenuItemExpandableItemLink() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteMenuItemExpandableItemLink.prototype.getPaddingLeft = function () {
            return _super.prototype.getPaddingLeft.call(this) + 16;
        };
        return DThemeWhiteMenuItemExpandableItemLink;
    }(DThemeWhiteMenuItemLink));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("menu_item_mark_next", 14, 20, "<g>" +
        "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"5 16 11 10 5 4\"></polyline>" +
        "</g>");
    /* eslint-enable prettier/prettier */
    var DThemeWhiteMenuItemMenu = /** @class */ (function (_super) {
        __extends(DThemeWhiteMenuItemMenu, _super);
        function DThemeWhiteMenuItemMenu() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteMenuItemMenu.prototype.getImageSource = function (state) {
            return DThemeWhiteAtlas.mappings.menu_item_mark_next;
        };
        DThemeWhiteMenuItemMenu.prototype.getImageAlignWith = function () {
            return DAlignWith.BORDER;
        };
        DThemeWhiteMenuItemMenu.prototype.getImageAlignHorizontal = function () {
            return DAlignHorizontal.RIGHT;
        };
        DThemeWhiteMenuItemMenu.prototype.getImageMarginHorizontal = function () {
            return 12;
        };
        return DThemeWhiteMenuItemMenu;
    }(DThemeWhiteMenuItem));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteMenuItemExpandableItemMenu = /** @class */ (function (_super) {
        __extends(DThemeWhiteMenuItemExpandableItemMenu, _super);
        function DThemeWhiteMenuItemExpandableItemMenu() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteMenuItemExpandableItemMenu.prototype.getPaddingLeft = function () {
            return _super.prototype.getPaddingLeft.call(this) + 16;
        };
        return DThemeWhiteMenuItemExpandableItemMenu;
    }(DThemeWhiteMenuItemMenu));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteMenuItemSeparator = /** @class */ (function (_super) {
        __extends(DThemeWhiteMenuItemSeparator, _super);
        function DThemeWhiteMenuItemSeparator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteMenuItemSeparator.prototype.getBorderColor = function (state) {
            return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
        };
        DThemeWhiteMenuItemSeparator.prototype.getBorderAlpha = function (state) {
            return DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA;
        };
        DThemeWhiteMenuItemSeparator.prototype.getHeight = function () {
            return 15;
        };
        DThemeWhiteMenuItemSeparator.prototype.getWidth = function () {
            return "padding";
        };
        DThemeWhiteMenuItemSeparator.prototype.getPaddingLeft = function () {
            return 10;
        };
        DThemeWhiteMenuItemSeparator.prototype.getPaddingRight = function () {
            return 10;
        };
        DThemeWhiteMenuItemSeparator.prototype.getInteractive = function () {
            return DBaseInteractive.NONE;
        };
        DThemeWhiteMenuItemSeparator.prototype.newState = function (state) {
            _super.prototype.newState.call(this, state);
            state.isFocusable = false;
        };
        return DThemeWhiteMenuItemSeparator;
    }(DThemeWhiteMenuItemBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteMenuItemExpandableItemSeparator = /** @class */ (function (_super) {
        __extends(DThemeWhiteMenuItemExpandableItemSeparator, _super);
        function DThemeWhiteMenuItemExpandableItemSeparator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteMenuItemExpandableItemSeparator.prototype.getPaddingLeft = function () {
            return _super.prototype.getPaddingLeft.call(this) + 16;
        };
        return DThemeWhiteMenuItemExpandableItemSeparator;
    }(DThemeWhiteMenuItemSeparator));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteMenuItemSpace = /** @class */ (function (_super) {
        __extends(DThemeWhiteMenuItemSpace, _super);
        function DThemeWhiteMenuItemSpace() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteMenuItemSpace;
    }(DThemeWhiteLayoutSpace));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteMenuItemExpandableItemSpace = /** @class */ (function (_super) {
        __extends(DThemeWhiteMenuItemExpandableItemSpace, _super);
        function DThemeWhiteMenuItemExpandableItemSpace() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteMenuItemExpandableItemSpace.prototype.getPaddingLeft = function () {
            return _super.prototype.getPaddingLeft.call(this) + 16;
        };
        return DThemeWhiteMenuItemExpandableItemSpace;
    }(DThemeWhiteMenuItemSpace));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteMenuItemExpandableItemText = /** @class */ (function (_super) {
        __extends(DThemeWhiteMenuItemExpandableItemText, _super);
        function DThemeWhiteMenuItemExpandableItemText() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteMenuItemExpandableItemText.prototype.getPaddingLeft = function () {
            return _super.prototype.getPaddingLeft.call(this) + 16;
        };
        return DThemeWhiteMenuItemExpandableItemText;
    }(DThemeWhiteMenuItemText));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteMenu = function () {
        DThemeWhite.set("DMenu", DThemeWhiteMenu);
        DThemeWhite.set("DMenuItem", DThemeWhiteMenuItem);
        DThemeWhite.set("DMenuItemCheck", DThemeWhiteMenuItemCheck);
        DThemeWhite.set("DMenuItemLink", DThemeWhiteMenuItemLink);
        DThemeWhite.set("DMenuItemMenu", DThemeWhiteMenuItemMenu);
        DThemeWhite.set("DMenuItemSeparator", DThemeWhiteMenuItemSeparator);
        DThemeWhite.set("DMenuItemSpace", DThemeWhiteMenuItemSpace);
        DThemeWhite.set("DMenuItemText", DThemeWhiteMenuItemText);
        DThemeWhite.set("DMenuItemExpandableBody", DThemeWhiteMenuItemExpandableBody);
        DThemeWhite.set("DMenuItemExpandableHeader", DThemeWhiteMenuItemExpandableHeader);
        DThemeWhite.set("DMenuItemExpandableItemCheck", DThemeWhiteMenuItemExpandableItemCheck);
        DThemeWhite.set("DMenuItemExpandableItemLink", DThemeWhiteMenuItemExpandableItemLink);
        DThemeWhite.set("DMenuItemExpandableItemMenu", DThemeWhiteMenuItemExpandableItemMenu);
        DThemeWhite.set("DMenuItemExpandableItemSeparator", DThemeWhiteMenuItemExpandableItemSeparator);
        DThemeWhite.set("DMenuItemExpandableItemSpace", DThemeWhiteMenuItemExpandableItemSpace);
        DThemeWhite.set("DMenuItemExpandableItemText", DThemeWhiteMenuItemExpandableItemText);
        DThemeWhite.set("DMenuItemExpandable", DThemeWhiteMenuItemExpandable);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteMenuBar = function () {
        DThemeWhite.set("DMenuBarItem", DThemeWhiteMenuBarItem);
        DThemeWhite.set("DMenuBar", DThemeWhiteMenuBar);
        loadThemeWhiteMenu();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteMenuSided = /** @class */ (function (_super) {
        __extends(DThemeWhiteMenuSided, _super);
        function DThemeWhiteMenuSided() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteMenuSided.prototype.getBackgroundColor = function (state) {
            return DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD;
        };
        DThemeWhiteMenuSided.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeWhiteMenuSided.prototype.getInteractive = function () {
            return DBaseInteractive.BOTH;
        };
        return DThemeWhiteMenuSided;
    }(DThemeWhitePane));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteMenuSidedContent = /** @class */ (function (_super) {
        __extends(DThemeWhiteMenuSidedContent, _super);
        function DThemeWhiteMenuSidedContent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteMenuSidedContent.prototype.getWidth = function () {
            return "100%";
        };
        DThemeWhiteMenuSidedContent.prototype.getHeight = function () {
            return "auto";
        };
        DThemeWhiteMenuSidedContent.prototype.getPaddingTop = function () {
            return 16;
        };
        DThemeWhiteMenuSidedContent.prototype.getPaddingBottom = function () {
            return 16;
        };
        DThemeWhiteMenuSidedContent.prototype.getMargin = function () {
            return 0;
        };
        DThemeWhiteMenuSidedContent.prototype.newState = function (state) {
            _super.prototype.newState.call(this, state);
            state.isFocusable = false;
        };
        return DThemeWhiteMenuSidedContent;
    }(DThemeWhiteLayoutVertical));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteMenuSidedItemCheck = /** @class */ (function (_super) {
        __extends(DThemeWhiteMenuSidedItemCheck, _super);
        function DThemeWhiteMenuSidedItemCheck() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteMenuSidedItemCheck;
    }(DThemeWhiteMenuItemCheck));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteMenuSidedItemExpandable = /** @class */ (function (_super) {
        __extends(DThemeWhiteMenuSidedItemExpandable, _super);
        function DThemeWhiteMenuSidedItemExpandable() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteMenuSidedItemExpandable;
    }(DThemeWhiteMenuItemExpandable));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteMenuSidedItemExpandableItemCheck = /** @class */ (function (_super) {
        __extends(DThemeWhiteMenuSidedItemExpandableItemCheck, _super);
        function DThemeWhiteMenuSidedItemExpandableItemCheck() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteMenuSidedItemExpandableItemCheck;
    }(DThemeWhiteMenuItemExpandableItemCheck));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteMenuSidedItemExpandableItemLink = /** @class */ (function (_super) {
        __extends(DThemeWhiteMenuSidedItemExpandableItemLink, _super);
        function DThemeWhiteMenuSidedItemExpandableItemLink() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteMenuSidedItemExpandableItemLink;
    }(DThemeWhiteMenuItemExpandableItemLink));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteMenuSidedItemExpandableItemMenu = /** @class */ (function (_super) {
        __extends(DThemeWhiteMenuSidedItemExpandableItemMenu, _super);
        function DThemeWhiteMenuSidedItemExpandableItemMenu() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteMenuSidedItemExpandableItemMenu;
    }(DThemeWhiteMenuItemExpandableItemMenu));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteMenuSidedItemExpandableItemSeparator = /** @class */ (function (_super) {
        __extends(DThemeWhiteMenuSidedItemExpandableItemSeparator, _super);
        function DThemeWhiteMenuSidedItemExpandableItemSeparator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteMenuSidedItemExpandableItemSeparator;
    }(DThemeWhiteMenuItemExpandableItemSeparator));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteMenuSidedItemExpandableItemSpace = /** @class */ (function (_super) {
        __extends(DThemeWhiteMenuSidedItemExpandableItemSpace, _super);
        function DThemeWhiteMenuSidedItemExpandableItemSpace() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteMenuSidedItemExpandableItemSpace;
    }(DThemeWhiteMenuItemExpandableItemSpace));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteMenuSidedItemExpandableItemText = /** @class */ (function (_super) {
        __extends(DThemeWhiteMenuSidedItemExpandableItemText, _super);
        function DThemeWhiteMenuSidedItemExpandableItemText() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteMenuSidedItemExpandableItemText;
    }(DThemeWhiteMenuItemExpandableItemText));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteMenuSidedItemLink = /** @class */ (function (_super) {
        __extends(DThemeWhiteMenuSidedItemLink, _super);
        function DThemeWhiteMenuSidedItemLink() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteMenuSidedItemLink;
    }(DThemeWhiteMenuItemLink));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteMenuSidedItemMenu = /** @class */ (function (_super) {
        __extends(DThemeWhiteMenuSidedItemMenu, _super);
        function DThemeWhiteMenuSidedItemMenu() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteMenuSidedItemMenu;
    }(DThemeWhiteMenuItemMenu));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteMenuSidedItemSeparator = /** @class */ (function (_super) {
        __extends(DThemeWhiteMenuSidedItemSeparator, _super);
        function DThemeWhiteMenuSidedItemSeparator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteMenuSidedItemSeparator;
    }(DThemeWhiteMenuItemSeparator));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteMenuSidedItemSpace = /** @class */ (function (_super) {
        __extends(DThemeWhiteMenuSidedItemSpace, _super);
        function DThemeWhiteMenuSidedItemSpace() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteMenuSidedItemSpace;
    }(DThemeWhiteMenuItemSpace));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteMenuSidedItemText = /** @class */ (function (_super) {
        __extends(DThemeWhiteMenuSidedItemText, _super);
        function DThemeWhiteMenuSidedItemText() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteMenuSidedItemText;
    }(DThemeWhiteMenuItemText));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteMenuSided = function () {
        DThemeWhite.set("DMenuSided", DThemeWhiteMenuSided);
        DThemeWhite.set("DMenuSidedContent", DThemeWhiteMenuSidedContent);
        DThemeWhite.set("DMenuSidedItemCheck", DThemeWhiteMenuSidedItemCheck);
        DThemeWhite.set("DMenuSidedItemLink", DThemeWhiteMenuSidedItemLink);
        DThemeWhite.set("DMenuSidedItemMenu", DThemeWhiteMenuSidedItemMenu);
        DThemeWhite.set("DMenuSidedItemSeparator", DThemeWhiteMenuSidedItemSeparator);
        DThemeWhite.set("DMenuSidedItemSpace", DThemeWhiteMenuSidedItemSpace);
        DThemeWhite.set("DMenuSidedItemText", DThemeWhiteMenuSidedItemText);
        DThemeWhite.set("DMenuSidedItemExpandable", DThemeWhiteMenuSidedItemExpandable);
        DThemeWhite.set("DMenuSidedItemExpandableItemCheck", DThemeWhiteMenuSidedItemExpandableItemCheck);
        DThemeWhite.set("DMenuSidedItemExpandableItemLink", DThemeWhiteMenuSidedItemExpandableItemLink);
        DThemeWhite.set("DMenuSidedItemExpandableItemMenu", DThemeWhiteMenuSidedItemExpandableItemMenu);
        DThemeWhite.set("DMenuSidedItemExpandableItemSeparator", DThemeWhiteMenuSidedItemExpandableItemSeparator);
        DThemeWhite.set("DMenuSidedItemExpandableItemSpace", DThemeWhiteMenuSidedItemExpandableItemSpace);
        DThemeWhite.set("DMenuSidedItemExpandableItemText", DThemeWhiteMenuSidedItemExpandableItemText);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhitePagination = /** @class */ (function (_super) {
        __extends(DThemeWhitePagination, _super);
        function DThemeWhitePagination() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhitePagination.prototype.getWidth = function () {
            return "auto";
        };
        DThemeWhitePagination.prototype.getMargin = function () {
            return 10;
        };
        DThemeWhitePagination.prototype.getButtonSpace = function () {
            return 10;
        };
        return DThemeWhitePagination;
    }(DThemeWhiteLayoutHorizontal));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("pagination_dots", 21, 21, "<g>" +
        "<circle cx=\"2\" cy=\"11\" r=\"1.1\" fill=\"#fff\" stroke=\"none\" />" +
        "<circle cx=\"10.5\" cy=\"11\" r=\"1.1\" fill=\"#fff\" stroke=\"none\" />" +
        "<circle cx=\"19\" cy=\"11\" r=\"1.1\" fill=\"#fff\" stroke=\"none\" />" +
        "</g>");
    /* eslint-enable prettier/prettier */
    var DThemeWhitePaginationDots = /** @class */ (function (_super) {
        __extends(DThemeWhitePaginationDots, _super);
        function DThemeWhitePaginationDots() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhitePaginationDots.prototype.getWidth = function () {
            return 30;
        };
        DThemeWhitePaginationDots.prototype.getHeight = function () {
            return 30;
        };
        DThemeWhitePaginationDots.prototype.getInteractive = function () {
            return DBaseInteractive.NONE;
        };
        DThemeWhitePaginationDots.prototype.newState = function (state) {
            _super.prototype.newState.call(this, state);
            state.isFocusable = false;
        };
        DThemeWhitePaginationDots.prototype.getImageSource = function (state) {
            return DThemeWhiteAtlas.mappings.pagination_dots;
        };
        DThemeWhitePaginationDots.prototype.getImageAlignHorizontal = function () {
            return DAlignHorizontal.CENTER;
        };
        DThemeWhitePaginationDots.prototype.getImageAlignWith = function () {
            return DAlignWith.BORDER;
        };
        return DThemeWhitePaginationDots;
    }(DThemeWhiteImageBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("pagination_button_last", 21, 21, "<g>" +
        "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"9 15 15 10 9 5\"></polyline>" +
        "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"5 15 11 10 5 5\"></polyline>" +
        "</g>");
    /* eslint-enable prettier/prettier */
    var DThemeWhitePaginationButtonLast = /** @class */ (function (_super) {
        __extends(DThemeWhitePaginationButtonLast, _super);
        function DThemeWhitePaginationButtonLast() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhitePaginationButtonLast.prototype.getWidth = function () {
            return 30;
        };
        DThemeWhitePaginationButtonLast.prototype.getImageSource = function (state) {
            return DThemeWhiteAtlas.mappings.pagination_button_last;
        };
        return DThemeWhitePaginationButtonLast;
    }(DThemeWhiteButtonAmbient));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("pagination_button_next", 21, 21, "<g>" +
        "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"7 15 13 10 7 5\"></polyline>" +
        "</g>");
    /* eslint-enable prettier/prettier */
    var DThemeWhitePaginationButtonNext = /** @class */ (function (_super) {
        __extends(DThemeWhitePaginationButtonNext, _super);
        function DThemeWhitePaginationButtonNext() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhitePaginationButtonNext.prototype.getWidth = function () {
            return 30;
        };
        DThemeWhitePaginationButtonNext.prototype.getImageSource = function (state) {
            return DThemeWhiteAtlas.mappings.pagination_button_next;
        };
        return DThemeWhitePaginationButtonNext;
    }(DThemeWhiteButtonAmbient));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhitePaginationButtonPage = /** @class */ (function (_super) {
        __extends(DThemeWhitePaginationButtonPage, _super);
        function DThemeWhitePaginationButtonPage() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhitePaginationButtonPage.prototype.getWidth = function () {
            return 30;
        };
        DThemeWhitePaginationButtonPage.prototype.newTextValue = function () {
            return 0;
        };
        DThemeWhitePaginationButtonPage.prototype.getTextStyleClipping = function () {
            return false;
        };
        return DThemeWhitePaginationButtonPage;
    }(DThemeWhiteButtonAmbient));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("pagination_button_previous", 21, 21, "<g>" +
        "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"13 15 7 10 13 5\"></polyline>" +
        "</g>");
    /* eslint-enable prettier/prettier */
    var DThemeWhitePaginationButtonPrevious = /** @class */ (function (_super) {
        __extends(DThemeWhitePaginationButtonPrevious, _super);
        function DThemeWhitePaginationButtonPrevious() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhitePaginationButtonPrevious.prototype.getWidth = function () {
            return 30;
        };
        DThemeWhitePaginationButtonPrevious.prototype.getImageSource = function (state) {
            return DThemeWhiteAtlas.mappings.pagination_button_previous;
        };
        return DThemeWhitePaginationButtonPrevious;
    }(DThemeWhiteButtonAmbient));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("pagination_button_top", 21, 21, "<g>" +
        "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"11 15 5 10 11 5\"></polyline>" +
        "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"15 15 9 10 15 5\"></polyline>" +
        "</g>");
    /* eslint-enable prettier/prettier */
    var DThemeWhitePaginationButtonTop = /** @class */ (function (_super) {
        __extends(DThemeWhitePaginationButtonTop, _super);
        function DThemeWhitePaginationButtonTop() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhitePaginationButtonTop.prototype.getWidth = function () {
            return 30;
        };
        DThemeWhitePaginationButtonTop.prototype.getImageSource = function (state) {
            return DThemeWhiteAtlas.mappings.pagination_button_top;
        };
        return DThemeWhitePaginationButtonTop;
    }(DThemeWhiteButtonAmbient));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhitePaginationPage = /** @class */ (function (_super) {
        __extends(DThemeWhitePaginationPage, _super);
        function DThemeWhitePaginationPage() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhitePaginationPage.prototype.getBackgroundColor = function (state) {
            return DThemeWhiteConstants.HIGHLIGHT_COLOR;
        };
        DThemeWhitePaginationPage.prototype.getColor = function (state) {
            return DThemeWhiteConstants.ACTIVE_COLOR;
        };
        DThemeWhitePaginationPage.prototype.getWidth = function () {
            return 30;
        };
        DThemeWhitePaginationPage.prototype.getHeight = function () {
            return 30;
        };
        DThemeWhitePaginationPage.prototype.newState = function (state) {
            _super.prototype.newState.call(this, state);
            state.isFocusable = false;
        };
        DThemeWhitePaginationPage.prototype.getTextStyleClipping = function () {
            return false;
        };
        DThemeWhitePaginationPage.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.CENTER;
        };
        return DThemeWhitePaginationPage;
    }(DThemeWhiteImageBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhitePagination = function () {
        DThemeWhite.set("DPagination", DThemeWhitePagination);
        DThemeWhite.set("DPaginationPage", DThemeWhitePaginationPage);
        DThemeWhite.set("DPaginationDots", DThemeWhitePaginationDots);
        DThemeWhite.set("DPaginationButtonLast", DThemeWhitePaginationButtonLast);
        DThemeWhite.set("DPaginationButtonNext", DThemeWhitePaginationButtonNext);
        DThemeWhite.set("DPaginationButtonPage", DThemeWhitePaginationButtonPage);
        DThemeWhite.set("DPaginationButtonPrevious", DThemeWhitePaginationButtonPrevious);
        DThemeWhite.set("DPaginationButtonTop", DThemeWhitePaginationButtonTop);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteContent = /** @class */ (function (_super) {
        __extends(DThemeWhiteContent, _super);
        function DThemeWhiteContent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteContent.prototype.getWidth = function () {
            return "100%";
        };
        DThemeWhiteContent.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeWhiteContent.prototype.getInteractive = function () {
            return DBaseInteractive.BOTH;
        };
        DThemeWhiteContent.prototype.newState = function (state) {
            _super.prototype.newState.call(this, state);
            state.isFocusable = false;
        };
        return DThemeWhiteContent;
    }(DThemeWhiteBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteScrollBar = /** @class */ (function (_super) {
        __extends(DThemeWhiteScrollBar, _super);
        function DThemeWhiteScrollBar() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteScrollBar.prototype.getBackgroundColor = function (state) {
            return 0xffffff;
        };
        DThemeWhiteScrollBar.prototype.getBackgroundAlpha = function (state) {
            return 0;
        };
        DThemeWhiteScrollBar.prototype.getWidth = function () {
            return 13;
        };
        DThemeWhiteScrollBar.prototype.getHeight = function () {
            return 13;
        };
        DThemeWhiteScrollBar.prototype.getInteractive = function () {
            return DBaseInteractive.BOTH;
        };
        DThemeWhiteScrollBar.prototype.newState = function (state) {
            _super.prototype.newState.call(this, state);
            state.isFocusable = false;
        };
        DThemeWhiteScrollBar.prototype.getFadeOutDelay = function () {
            return 1500;
        };
        return DThemeWhiteScrollBar;
    }(DThemeWhiteBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteScrollBarThumb = /** @class */ (function (_super) {
        __extends(DThemeWhiteScrollBarThumb, _super);
        function DThemeWhiteScrollBarThumb() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.BORDER_COLOR = UtilRgb.darken(DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR, 0.25);
            _this.BORDER_COLOR_DISABLED = UtilRgb.brighten(_this.BORDER_COLOR, 0.75);
            _this.BORDER_COLOR_HOVERED = UtilRgb.brighten(_this.BORDER_COLOR, 0.25);
            _this.BORDER_COLOR_OTHER = UtilRgb.brighten(_this.BORDER_COLOR, 0.5);
            return _this;
        }
        DThemeWhiteScrollBarThumb.prototype.getBackgroundColor = function (state) {
            return null;
        };
        DThemeWhiteScrollBarThumb.prototype.getBackgroundAlpha = function (state) {
            return 1;
        };
        DThemeWhiteScrollBarThumb.prototype.getBorderColor = function (state) {
            if (state.inDisabled) {
                return this.BORDER_COLOR_DISABLED;
            }
            else if (state.isHovered || state.isGesturing) {
                return this.BORDER_COLOR_HOVERED;
            }
            else {
                return this.BORDER_COLOR_OTHER;
            }
        };
        DThemeWhiteScrollBarThumb.prototype.getBorderAlpha = function (state) {
            return 1;
        };
        DThemeWhiteScrollBarThumb.prototype.getBorderWidth = function (state) {
            return 3;
        };
        DThemeWhiteScrollBarThumb.prototype.getBorderAlign = function (state) {
            return 1;
        };
        DThemeWhiteScrollBarThumb.prototype.getWidth = function () {
            return 13;
        };
        DThemeWhiteScrollBarThumb.prototype.getHeight = function () {
            return 13;
        };
        DThemeWhiteScrollBarThumb.prototype.getThumbMinimumLength = function () {
            return 16;
        };
        DThemeWhiteScrollBarThumb.prototype.newState = function (state) {
            _super.prototype.newState.call(this, state);
            state.isFocusable = false;
        };
        return DThemeWhiteScrollBarThumb;
    }(DThemeWhiteBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteScrollBar = function () {
        DThemeWhite.set("DScrollBar", DThemeWhiteScrollBar);
        DThemeWhite.set("DScrollBarThumb", DThemeWhiteScrollBarThumb);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhitePane = function () {
        DThemeWhite.set("DPane", DThemeWhitePane);
        DThemeWhite.set("DContent", DThemeWhiteContent);
        loadThemeWhiteScrollBar();
    };

    const isString = wcardinal.ui.isString;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var formatter$a = function (item) {
        if (item) {
            var value = item.text.value;
            if (isString(value)) {
                return value;
            }
            else if (value != null) {
                var computed = value(item.state);
                if (computed != null) {
                    return computed;
                }
            }
        }
        return "";
    };
    var DThemeWhiteSelect = /** @class */ (function (_super) {
        __extends(DThemeWhiteSelect, _super);
        function DThemeWhiteSelect() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteSelect.prototype.getTextFormatter = function () {
            return formatter$a;
        };
        DThemeWhiteSelect.prototype.newTextValue = function () {
            return null;
        };
        return DThemeWhiteSelect;
    }(DThemeWhiteDropdownBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var formatter$9 = function (items) {
        if (items) {
            var result = "";
            var delimiter = "";
            for (var i = 0, imax = items.length; i < imax; ++i) {
                var item = items[i];
                var value = item.text.value;
                if (isString(value)) {
                    result += delimiter + value;
                    delimiter = ", ";
                }
                else if (value != null) {
                    var computed = value(item.state);
                    if (computed != null) {
                        result += delimiter + computed;
                        delimiter = ", ";
                    }
                }
            }
            return result;
        }
        return "";
    };
    var DThemeWhiteSelectMultiple = /** @class */ (function (_super) {
        __extends(DThemeWhiteSelectMultiple, _super);
        function DThemeWhiteSelectMultiple() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteSelectMultiple.prototype.getTextFormatter = function () {
            return formatter$9;
        };
        DThemeWhiteSelectMultiple.prototype.newTextValue = function () {
            return [];
        };
        return DThemeWhiteSelectMultiple;
    }(DThemeWhiteDropdownBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteSelect = function () {
        DThemeWhite.set("DSelectMultiple", DThemeWhiteSelectMultiple);
        DThemeWhite.set("DSelect", DThemeWhiteSelect);
        loadThemeWhiteDropdown();
    };

    const EShapeActionOpenDialogExtensions = wcardinal.ui.EShapeActionOpenDialogExtensions;

    const EShapeActionOpenExtensions = wcardinal.ui.EShapeActionOpenExtensions;

    const EShapeActionValueBlinkType = wcardinal.ui.EShapeActionValueBlinkType;

    const EShapeActionValueChangeColorTarget = wcardinal.ui.EShapeActionValueChangeColorTarget;

    const EShapeActionValueChangeColorType = wcardinal.ui.EShapeActionValueChangeColorType;

    const EShapeActionValueChangeTextType = wcardinal.ui.EShapeActionValueChangeTextType;

    const EShapeActionValueGestureOperationType = wcardinal.ui.EShapeActionValueGestureOperationType;

    const EShapeActionValueGestureType = wcardinal.ui.EShapeActionValueGestureType;

    const EShapeActionValueMiscType = wcardinal.ui.EShapeActionValueMiscType;

    const EShapeActionValueOnInputAction = wcardinal.ui.EShapeActionValueOnInputAction;

    const EShapeActionValueOpenDialogType = wcardinal.ui.EShapeActionValueOpenDialogType;

    const EShapeActionValueOpenType = wcardinal.ui.EShapeActionValueOpenType;

    const EShapeActionValueOpetyped = wcardinal.ui.EShapeActionValueOpetyped;

    const EShapeActionValueShowHideType = wcardinal.ui.EShapeActionValueShowHideType;

    const EShapeActionValueSubtyped = wcardinal.ui.EShapeActionValueSubtyped;

    const EShapeActionValueTransformMoveType = wcardinal.ui.EShapeActionValueTransformMoveType;

    const EShapeActionValueTransformResizeType = wcardinal.ui.EShapeActionValueTransformResizeType;

    const EShapeActionValueTransformRotateType = wcardinal.ui.EShapeActionValueTransformRotateType;

    const EShapeActionValueTransformType = wcardinal.ui.EShapeActionValueTransformType;

    const EShapeActionValueType = wcardinal.ui.EShapeActionValueType;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var EThemeWhiteShapeActionValue = /** @class */ (function () {
        function EThemeWhiteShapeActionValue() {
        }
        EThemeWhiteShapeActionValue.prototype.toLabel = function (value) {
            var type = value.type;
            if (value instanceof EShapeActionValueSubtyped) {
                var subtype = value.subtype;
                if (value instanceof EShapeActionValueOpetyped) {
                    var result = this.toOpetypedLabel(type, subtype, value.opetype, value);
                    if (result != null) {
                        return result;
                    }
                }
                else {
                    var result = this.toSubtypedLabel(type, subtype, value);
                    if (result != null) {
                        return result;
                    }
                }
            }
            return this.toTypedLabel(type, value);
        };
        EThemeWhiteShapeActionValue.prototype.toTypedLabel = function (type, value) {
            return "".concat(this.toTypeLabel(type), ": ").concat(this.toConditionLabel(value.condition));
        };
        EThemeWhiteShapeActionValue.prototype.toSubtypedLabel = function (type, subtype, value) {
            var typeLabel = this.toTypeLabel(type);
            switch (type) {
                case EShapeActionValueType.SHOW_HIDE:
                    return "".concat(typeLabel, ": ").concat(this.toShowHideTypeLabel(subtype));
                case EShapeActionValueType.BLINK:
                    return "".concat(typeLabel, ": ").concat(this.toBlinkTypeLabel(subtype));
                case EShapeActionValueType.CHANGE_COLOR:
                case EShapeActionValueType.CHANGE_COLOR_LEGACY:
                    return "".concat(typeLabel, ": ").concat(this.toChangeColorTypeLabel(subtype));
                case EShapeActionValueType.CHANGE_TEXT:
                    return "".concat(typeLabel, ": ").concat(this.toChangeTextTypeLabel(subtype));
                case EShapeActionValueType.OPEN:
                    return "".concat(typeLabel, ": ").concat(this.toOpenTypeLabel(subtype));
                case EShapeActionValueType.GESTURE:
                    return "".concat(typeLabel, ": ").concat(this.toGestureTypeLabel(subtype));
                case EShapeActionValueType.MISC:
                    return "".concat(typeLabel, ": ").concat(this.toMiscTypeLabel(subtype));
            }
            return null;
        };
        EThemeWhiteShapeActionValue.prototype.toOpetypedLabel = function (type, subtype, opetype, value) {
            switch (type) {
                case EShapeActionValueType.TRANSFORM:
                    var subtypeLabel = this.toTransformTypeLabel(subtype);
                    switch (subtype) {
                        case EShapeActionValueTransformType.ROTATE:
                            return "".concat(subtypeLabel, ": ").concat(this.toTransformRotateTypeLabel(opetype));
                        case EShapeActionValueTransformType.MOVE:
                            return "".concat(subtypeLabel, ": ").concat(this.toTransformMoveTypeLabel(opetype));
                        case EShapeActionValueTransformType.RESIZE:
                            return "".concat(subtypeLabel, ": ").concat(this.toTransformResizeTypeLabel(opetype));
                    }
            }
            return null;
        };
        EThemeWhiteShapeActionValue.prototype.toTypeLabel = function (type) {
            switch (type) {
                case EShapeActionValueType.SHOW_HIDE:
                    return "Show / hide";
                case EShapeActionValueType.BLINK:
                    return "Blink";
                case EShapeActionValueType.TRANSFORM:
                    return "Transform";
                case EShapeActionValueType.OPEN:
                    return "Open";
                case EShapeActionValueType.CHANGE_COLOR:
                case EShapeActionValueType.CHANGE_COLOR_LEGACY:
                    return "Change color";
                case EShapeActionValueType.CHANGE_TEXT:
                    return "Change text";
                case EShapeActionValueType.CHANGE_CURSOR:
                    return "Change cursor";
                case EShapeActionValueType.EMIT_EVENT:
                    return "Emit an event";
                case EShapeActionValueType.GESTURE:
                    return "Gesture";
                case EShapeActionValueType.MISC:
                    return "Misc.";
                default:
                    if (EShapeActionValueType.EXTENSION <= type) {
                        return "Extension";
                    }
                    else {
                        return "Unknown";
                    }
            }
        };
        EThemeWhiteShapeActionValue.prototype.toConditionLabel = function (condition) {
            var l = 20;
            if (l < condition.length) {
                return condition.substring(0, l) + "...";
            }
            else {
                return condition;
            }
        };
        EThemeWhiteShapeActionValue.prototype.toBlinkTypeLabel = function (type) {
            switch (type) {
                case EShapeActionValueBlinkType.VISIBILITY:
                    return "Visibility";
                case EShapeActionValueBlinkType.BRIGHTEN:
                    return "Brighten";
                case EShapeActionValueBlinkType.DARKEN:
                    return "Darken";
                case EShapeActionValueBlinkType.OPACITY:
                    return "Opacity";
                case EShapeActionValueBlinkType.COLOR_FILL:
                    return "Fill";
                case EShapeActionValueBlinkType.COLOR_STROKE:
                    return "Stroke";
            }
        };
        EThemeWhiteShapeActionValue.prototype.toShowHideTypeLabel = function (type) {
            switch (type) {
                case EShapeActionValueShowHideType.SHAPE_SHOW:
                    return "Show";
                case EShapeActionValueShowHideType.SHAPE_HIDE:
                    return "Hide";
                case EShapeActionValueShowHideType.SHAPE:
                    return "Shape";
                case EShapeActionValueShowHideType.LAYER:
                    return "Layer";
            }
        };
        EThemeWhiteShapeActionValue.prototype.toTransformTypeLabel = function (type) {
            switch (type) {
                case EShapeActionValueTransformType.RESIZE:
                    return "Resize";
                case EShapeActionValueTransformType.MOVE:
                    return "Move";
                case EShapeActionValueTransformType.ROTATE:
                    return "Rotate";
            }
        };
        EThemeWhiteShapeActionValue.prototype.toTransformRotateTypeLabel = function (type) {
            switch (type) {
                case EShapeActionValueTransformRotateType.RELATIVE:
                    return "Relative";
                case EShapeActionValueTransformRotateType.ABSOLUTE:
                    return "Absolute";
            }
        };
        EThemeWhiteShapeActionValue.prototype.toTransformMoveTypeLabel = function (type) {
            switch (type) {
                case EShapeActionValueTransformMoveType.RELATIVE_X:
                    return "Relative X";
                case EShapeActionValueTransformMoveType.RELATIVE_Y:
                    return "Relative Y";
                case EShapeActionValueTransformMoveType.ABSOLUTE_X:
                    return "Absolute X";
                case EShapeActionValueTransformMoveType.ABSOLUTE_Y:
                    return "Absolute Y";
                case EShapeActionValueTransformMoveType.FORWARD_OR_BACKWARD:
                    return "Forward / backward";
                case EShapeActionValueTransformMoveType.LEFT_OR_RIGHT:
                    return "Left / right";
            }
        };
        EThemeWhiteShapeActionValue.prototype.toTransformResizeTypeLabel = function (type) {
            switch (type) {
                case EShapeActionValueTransformResizeType.ABSOLUTE_SIZE:
                    return "Height & width";
                case EShapeActionValueTransformResizeType.RELATIVE_SIZE:
                    return "Height & width (%)";
                case EShapeActionValueTransformResizeType.ABSOLUTE_HEIGHT:
                    return "Height";
                case EShapeActionValueTransformResizeType.RELATIVE_HEIGHT:
                    return "Height (%)";
                case EShapeActionValueTransformResizeType.ABSOLUTE_WIDTH:
                    return "Width";
                case EShapeActionValueTransformResizeType.RELATIVE_WIDTH:
                    return "Width (%)";
            }
        };
        EThemeWhiteShapeActionValue.prototype.toChangeColorTypeLabel = function (type) {
            if (type === EShapeActionValueChangeColorType.NONE) {
                return "None";
            }
            var result = "";
            var delimiter = "";
            if (type & EShapeActionValueChangeColorType.FILL) {
                result += delimiter + "Fill";
                delimiter = ", ";
            }
            if (type & EShapeActionValueChangeColorType.STROKE) {
                result += delimiter + "Stroke";
                delimiter = ", ";
            }
            if (type & EShapeActionValueChangeColorType.TEXT) {
                result += delimiter + "Text";
                delimiter = ", ";
            }
            if (type & EShapeActionValueChangeColorType.TEXT_OUTLINE) {
                result += delimiter + "Text outline";
            }
            return result;
        };
        EThemeWhiteShapeActionValue.prototype.toChangeColorTargetLabel = function (type) {
            switch (type) {
                case EShapeActionValueChangeColorTarget.COLOR_AND_ALPHA:
                    return "Color";
                case EShapeActionValueChangeColorTarget.COLOR:
                    return "RGB";
                case EShapeActionValueChangeColorTarget.ALPHA:
                    return "Alpha";
                case EShapeActionValueChangeColorTarget.CODE:
                    return "Dynamic color";
                case EShapeActionValueChangeColorTarget.BRIGHTNESS:
                    return "Brightness";
            }
        };
        EThemeWhiteShapeActionValue.prototype.toChangeTextTypeLabel = function (type) {
            switch (type) {
                case EShapeActionValueChangeTextType.TEXT:
                    return "Text";
                case EShapeActionValueChangeTextType.NUMBER:
                    return "Number";
            }
        };
        EThemeWhiteShapeActionValue.prototype.toOpenTypeLabel = function (type) {
            switch (type) {
                case EShapeActionValueOpenType.DIAGRAM_LEGACY:
                    return "Diagram";
                case EShapeActionValueOpenType.PAGE_LEGACY:
                    return "Page (New window)";
                case EShapeActionValueOpenType.PAGE_INPLACE_LEGACY:
                    return "Page (In-place)";
                case EShapeActionValueOpenType.DIALOG_TEXT:
                    return "Dialog (Text)";
                case EShapeActionValueOpenType.DIALOG_INTEGER:
                    return "Dialog (Integer)";
                case EShapeActionValueOpenType.DIALOG_REAL:
                    return "Dialog (Real)";
                case EShapeActionValueOpenType.DIALOG_BOOLEAN:
                    return "Dialog (Boolean)";
                case EShapeActionValueOpenType.DIALOG_DATE:
                    return "Dialog (Date)";
                case EShapeActionValueOpenType.DIALOG_TIME:
                    return "Dialog (Time)";
                case EShapeActionValueOpenType.DIALOG_DATETIME:
                    return "Dialog (Datetime)";
                case EShapeActionValueOpenType.DIAGRAM:
                    return "Diagram";
                case EShapeActionValueOpenType.PAGE:
                    return "Page";
                case EShapeActionValueOpenType.DIALOG:
                    return "Dialog";
                default:
                    if (EShapeActionValueOpenType.EXTENSION <= type) {
                        var extension = EShapeActionOpenExtensions.get(type);
                        if (extension) {
                            return extension.label;
                        }
                        return "Extension";
                    }
                    else {
                        return "Unknown";
                    }
            }
        };
        EThemeWhiteShapeActionValue.prototype.toOpenDialogTypeLabel = function (type) {
            switch (type) {
                case EShapeActionValueOpenDialogType.TEXT:
                    return "Text";
                case EShapeActionValueOpenDialogType.INTEGER:
                    return "Integer";
                case EShapeActionValueOpenDialogType.REAL:
                    return "Real";
                case EShapeActionValueOpenDialogType.BOOLEAN:
                    return "Boolean";
                case EShapeActionValueOpenDialogType.DATE:
                    return "Date";
                case EShapeActionValueOpenDialogType.TIME:
                    return "Time";
                case EShapeActionValueOpenDialogType.DATETIME:
                    return "Datetime";
                default:
                    if (EShapeActionValueOpenDialogType.EXTENSION <= type) {
                        var extension = EShapeActionOpenDialogExtensions.get(type);
                        if (extension) {
                            return extension.label;
                        }
                        return "Extension";
                    }
                    else {
                        return "Unknown";
                    }
            }
        };
        EThemeWhiteShapeActionValue.prototype.toGestureTypeLabel = function (type) {
            switch (type) {
                case EShapeActionValueGestureType.SHAPE:
                    return "Shape";
                case EShapeActionValueGestureType.LAYER:
                    return "Layer";
            }
        };
        EThemeWhiteShapeActionValue.prototype.toGestureOperationTypeLabel = function (type) {
            switch (type) {
                case EShapeActionValueGestureOperationType.DRAG:
                    return "Drag";
                case EShapeActionValueGestureOperationType.PINCH:
                    return "Pinch";
            }
            return "Unknown";
        };
        EThemeWhiteShapeActionValue.prototype.toMiscTypeLabel = function (type) {
            switch (type) {
                case EShapeActionValueMiscType.INPUT_TEXT:
                    return "Input (Text)";
                case EShapeActionValueMiscType.INPUT_INTEGER:
                    return "Input (Integer)";
                case EShapeActionValueMiscType.INPUT_REAL:
                    return "Input (Real)";
                case EShapeActionValueMiscType.EMIT_EVENT:
                    return this.toOnInputActionLabel(EShapeActionValueOnInputAction.EMIT_EVENT);
                case EShapeActionValueMiscType.WRITE_BOTH:
                    return this.toOnInputActionLabel(EShapeActionValueOnInputAction.WRITE_BOTH);
                case EShapeActionValueMiscType.WRITE_LOCAL:
                    return this.toOnInputActionLabel(EShapeActionValueOnInputAction.WRITE_LOCAL);
                case EShapeActionValueMiscType.WRITE_REMOTE:
                    return this.toOnInputActionLabel(EShapeActionValueOnInputAction.WRITE_REMOTE);
                case EShapeActionValueMiscType.HTML_ELEMENT:
                    return "HTML element";
                case EShapeActionValueMiscType.HTML_ELEMENT_WITHOUT_POINTER_EVENTS:
                    return "HTML element (No pointer events)";
                case EShapeActionValueMiscType.SHOW_HIDE_LAYER:
                    return "Show / hide layers";
                case EShapeActionValueMiscType.GESTURE_LAYER:
                    return "Layer gesture";
                case EShapeActionValueMiscType.GESTURE:
                    return "Gesture";
                case EShapeActionValueMiscType.EXECUTE:
                    return "Execute";
            }
        };
        EThemeWhiteShapeActionValue.prototype.toHtmlElementWhenLabel = function (when) {
            switch (when) {
                case UtilHtmlElementWhen.CLICKED:
                    return "Clicked";
                case UtilHtmlElementWhen.DOUBLE_CLICKED:
                    return "Double clicked";
                case UtilHtmlElementWhen.FOCUSED:
                    return "Focused";
                case UtilHtmlElementWhen.ALWAYS:
                    return "Always";
            }
        };
        EThemeWhiteShapeActionValue.prototype.toOnInputActionLabel = function (type) {
            switch (type) {
                case EShapeActionValueOnInputAction.EMIT_EVENT:
                    return "Emit event";
                case EShapeActionValueOnInputAction.WRITE_BOTH:
                    return "Write (Both)";
                case EShapeActionValueOnInputAction.WRITE_LOCAL:
                    return "Write (Local)";
                case EShapeActionValueOnInputAction.WRITE_REMOTE:
                    return "Write (Remote)";
            }
        };
        return EThemeWhiteShapeActionValue;
    }());

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteShapeActionValue = function () {
        DThemeWhite.set("EShapeActionValue", EThemeWhiteShapeActionValue);
    };

    const EShapeStrokeSide = wcardinal.ui.EShapeStrokeSide;

    var EThemeWhiteShape = /** @class */ (function () {
        function EThemeWhiteShape() {
        }
        EThemeWhiteShape.prototype.getFillColor = function () {
            return 0xffffff;
        };
        EThemeWhiteShape.prototype.getFillAlpha = function () {
            return 0.5;
        };
        EThemeWhiteShape.prototype.getStrokeColor = function () {
            return 0x4f4f4f;
        };
        EThemeWhiteShape.prototype.getStrokeAlpha = function () {
            return 1;
        };
        EThemeWhiteShape.prototype.getStrokeWidth = function () {
            return 2;
        };
        EThemeWhiteShape.prototype.getStrokeAlign = function () {
            return 0;
        };
        EThemeWhiteShape.prototype.getStrokeSide = function () {
            return EShapeStrokeSide.ALL;
        };
        EThemeWhiteShape.prototype.getStrokeStyle = function () {
            return EShapeStrokeStyle.NONE;
        };
        EThemeWhiteShape.prototype.getTextValue = function () {
            return "";
        };
        EThemeWhiteShape.prototype.getTextColor = function () {
            return this.getStrokeColor();
        };
        EThemeWhiteShape.prototype.getTextAlpha = function () {
            return this.getStrokeAlpha();
        };
        EThemeWhiteShape.prototype.getTextFamily = function () {
            return "auto";
        };
        EThemeWhiteShape.prototype.getTextSize = function () {
            return 14;
        };
        EThemeWhiteShape.prototype.getRadius = function () {
            return 0.25;
        };
        EThemeWhiteShape.prototype.getSizeX = function () {
            return 100;
        };
        EThemeWhiteShape.prototype.getSizeY = function () {
            return 100;
        };
        EThemeWhiteShape.prototype.getHighlightColor = function () {
            return 0x1e87f0;
        };
        EThemeWhiteShape.prototype.getCurveSegmentCount = function () {
            return 24;
        };
        return EThemeWhiteShape;
    }());

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteShape = function () {
        DThemeWhite.set("EShape", EThemeWhiteShape);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteSlider = /** @class */ (function (_super) {
        __extends(DThemeWhiteSlider, _super);
        function DThemeWhiteSlider() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteSlider.prototype.getInteractive = function () {
            return DBaseInteractive.CHILDREN;
        };
        DThemeWhiteSlider.prototype.getOutlineColor = function (state) {
            return null;
        };
        return DThemeWhiteSlider;
    }(DThemeWhiteBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteSliderHorizontal = /** @class */ (function (_super) {
        __extends(DThemeWhiteSliderHorizontal, _super);
        function DThemeWhiteSliderHorizontal() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteSliderHorizontal.prototype.getHeight = function () {
            return 33;
        };
        DThemeWhiteSliderHorizontal.prototype.getWidth = function () {
            return 300;
        };
        DThemeWhiteSliderHorizontal.prototype.getX = function () {
            return "CENTER";
        };
        return DThemeWhiteSliderHorizontal;
    }(DThemeWhiteSlider));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteSliderLabel = /** @class */ (function (_super) {
        __extends(DThemeWhiteSliderLabel, _super);
        function DThemeWhiteSliderLabel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteSliderLabel.prototype.getHeight = function () {
            return 15;
        };
        DThemeWhiteSliderLabel.prototype.getWidth = function () {
            return 30;
        };
        DThemeWhiteSliderLabel.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.CENTER;
        };
        DThemeWhiteSliderLabel.prototype.getTextAlignVertical = function () {
            return DAlignVertical.MIDDLE;
        };
        DThemeWhiteSliderLabel.prototype.newState = function (state) {
            _super.prototype.newState.call(this, state);
            state.isFocusable = false;
        };
        return DThemeWhiteSliderLabel;
    }(DThemeWhiteTextBase));

    var DThemeWhiteSliders = /** @class */ (function () {
        function DThemeWhiteSliders() {
        }
        DThemeWhiteSliders.getBackgroundColor = function (state, isActive) {
            if (state.isActive || isActive) {
                if (state.inDisabled) {
                    return this.BACKGROUND_COLOR;
                }
                else if (state.isPressed && state.isHovered) {
                    return this.BACKGROUND_COLOR_ACTIVE_PRESSED;
                }
                else if (state.isPressed || state.isHovered) {
                    return this.BACKGROUND_COLOR_ACTIVE_HOVERED;
                }
                else {
                    return this.BACKGROUND_COLOR_ACTIVE;
                }
            }
            else {
                if (state.inDisabled) {
                    return this.BACKGROUND_COLOR_DISABLED;
                }
                else if (state.isPressed && state.isHovered) {
                    return this.BACKGROUND_COLOR_PRESSED;
                }
                else if (state.isPressed || state.isHovered) {
                    return this.BACKGROUND_COLOR_HOVERED;
                }
                else {
                    return this.BACKGROUND_COLOR;
                }
            }
        };
        DThemeWhiteSliders.BACKGROUND_COLOR_ACTIVE = DThemeWhiteConstants.HIGHLIGHT_COLOR;
        DThemeWhiteSliders.BACKGROUND_COLOR_ACTIVE_HOVERED = UtilRgb.darken(DThemeWhiteSliders.BACKGROUND_COLOR_ACTIVE, 0.1);
        DThemeWhiteSliders.BACKGROUND_COLOR_ACTIVE_PRESSED = UtilRgb.darken(DThemeWhiteSliders.BACKGROUND_COLOR_ACTIVE, 0.2);
        DThemeWhiteSliders.BACKGROUND_COLOR = DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
        DThemeWhiteSliders.BACKGROUND_COLOR_HOVERED = UtilRgb.darken(DThemeWhiteSliders.BACKGROUND_COLOR, 0.1);
        DThemeWhiteSliders.BACKGROUND_COLOR_PRESSED = UtilRgb.darken(DThemeWhiteSliders.BACKGROUND_COLOR, 0.2);
        DThemeWhiteSliders.BACKGROUND_COLOR_DISABLED = UtilRgb.blend(DThemeWhiteSliders.BACKGROUND_COLOR, DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD, 0.5);
        return DThemeWhiteSliders;
    }());

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("slider_thumb", 16, 16, "<circle cx=\"8\" cy=\"8\" r=\"7.5\" stroke=\"none\" fill=\"#ffffff\" />");
    /* eslint-enable prettier/prettier */
    var DThemeWhiteSliderThumb = /** @class */ (function (_super) {
        __extends(DThemeWhiteSliderThumb, _super);
        function DThemeWhiteSliderThumb() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteSliderThumb.prototype.getX = function () {
            return "CENTER";
        };
        DThemeWhiteSliderThumb.prototype.getY = function () {
            return "CENTER";
        };
        DThemeWhiteSliderThumb.prototype.getWidth = function () {
            return 16;
        };
        DThemeWhiteSliderThumb.prototype.getHeight = function () {
            return 16;
        };
        DThemeWhiteSliderThumb.prototype.getBackgroundColor = function (state) {
            return null;
        };
        DThemeWhiteSliderThumb.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeWhiteSliderThumb.prototype.getImageSource = function (state) {
            return DThemeWhiteAtlas.mappings.slider_thumb;
        };
        DThemeWhiteSliderThumb.prototype.getImageTintColor = function (state) {
            return DThemeWhiteSliders.getBackgroundColor(state, true);
        };
        DThemeWhiteSliderThumb.prototype.getImageTintAlpha = function (state) {
            return 1;
        };
        DThemeWhiteSliderThumb.prototype.getImageAlignHorizontal = function () {
            return DAlignHorizontal.CENTER;
        };
        DThemeWhiteSliderThumb.prototype.getOutlineColor = function (state) {
            return null;
        };
        return DThemeWhiteSliderThumb;
    }(DThemeWhiteButton));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteSliderTrack = /** @class */ (function (_super) {
        __extends(DThemeWhiteSliderTrack, _super);
        function DThemeWhiteSliderTrack() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteSliderTrack.prototype.getBackgroundColor = function (state) {
            return DThemeWhiteSliders.getBackgroundColor(state);
        };
        DThemeWhiteSliderTrack.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeWhiteSliderTrack.prototype.getOutlineColor = function (state) {
            return _super.prototype.getOutlineColorNonActive.call(this, state);
        };
        DThemeWhiteSliderTrack.prototype.getOutlineOffset = function (state) {
            return _super.prototype.getOutlineOffsetNonActive.call(this, state);
        };
        DThemeWhiteSliderTrack.prototype.newState = function (state) {
            _super.prototype.newState.call(this, state);
            state.isFocusable = false;
        };
        return DThemeWhiteSliderTrack;
    }(DThemeWhiteButton));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteSliderTrackHorizontal = /** @class */ (function (_super) {
        __extends(DThemeWhiteSliderTrackHorizontal, _super);
        function DThemeWhiteSliderTrackHorizontal() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteSliderTrackHorizontal.prototype.getX = function () {
            return 0;
        };
        DThemeWhiteSliderTrackHorizontal.prototype.getY = function () {
            return "CENTER";
        };
        DThemeWhiteSliderTrackHorizontal.prototype.getWidth = function () {
            return "100%";
        };
        DThemeWhiteSliderTrackHorizontal.prototype.getHeight = function () {
            return 5;
        };
        return DThemeWhiteSliderTrackHorizontal;
    }(DThemeWhiteSliderTrack));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteSliderTrackVertical = /** @class */ (function (_super) {
        __extends(DThemeWhiteSliderTrackVertical, _super);
        function DThemeWhiteSliderTrackVertical() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteSliderTrackVertical.prototype.getX = function () {
            return "CENTER";
        };
        DThemeWhiteSliderTrackVertical.prototype.getY = function () {
            return 0;
        };
        DThemeWhiteSliderTrackVertical.prototype.getWidth = function () {
            return 5;
        };
        DThemeWhiteSliderTrackVertical.prototype.getHeight = function () {
            return "100%";
        };
        return DThemeWhiteSliderTrackVertical;
    }(DThemeWhiteSliderTrack));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteSliderValue = /** @class */ (function (_super) {
        __extends(DThemeWhiteSliderValue, _super);
        function DThemeWhiteSliderValue() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteSliderValue.prototype.getX = function () {
            return "CENTER";
        };
        DThemeWhiteSliderValue.prototype.getY = function () {
            return "CENTER";
        };
        DThemeWhiteSliderValue.prototype.getWidth = function () {
            return this.getLineHeight() * 2;
        };
        DThemeWhiteSliderValue.prototype.getHeight = function () {
            return this.getLineHeight();
        };
        DThemeWhiteSliderValue.prototype.getBackgroundColor = function (state) {
            if (state.inDisabled) {
                return 0xaaaaaa;
            }
            return DThemeWhiteConstants.HIGHLIGHT_COLOR;
        };
        DThemeWhiteSliderValue.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeWhiteSliderValue.prototype.getColor = function (state) {
            return DThemeWhiteConstants.ACTIVE_COLOR;
        };
        DThemeWhiteSliderValue.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.CENTER;
        };
        DThemeWhiteSliderValue.prototype.getTextAlignVertical = function () {
            return DAlignVertical.TOP;
        };
        DThemeWhiteSliderValue.prototype.getPrecision = function () {
            return 0;
        };
        DThemeWhiteSliderValue.prototype.newState = function (state) {
            _super.prototype.newState.call(this, state);
            state.isFocusable = false;
        };
        return DThemeWhiteSliderValue;
    }(DThemeWhiteTextBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteSliderVertical = /** @class */ (function (_super) {
        __extends(DThemeWhiteSliderVertical, _super);
        function DThemeWhiteSliderVertical() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteSliderVertical.prototype.getHeight = function () {
            return 322;
        };
        DThemeWhiteSliderVertical.prototype.getWidth = function () {
            return 35;
        };
        return DThemeWhiteSliderVertical;
    }(DThemeWhiteSlider));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteSlider = function () {
        DThemeWhite.set("DSlider", DThemeWhiteSlider);
        DThemeWhite.set("DSliderValue", DThemeWhiteSliderValue);
        DThemeWhite.set("DSliderLabel", DThemeWhiteSliderLabel);
        DThemeWhite.set("DSliderThumb", DThemeWhiteSliderThumb);
        DThemeWhite.set("DSliderVertical", DThemeWhiteSliderVertical);
        DThemeWhite.set("DSliderHorizontal", DThemeWhiteSliderHorizontal);
        DThemeWhite.set("DSliderTrack", DThemeWhiteSliderTrack);
        DThemeWhite.set("DSliderTrackVertical", DThemeWhiteSliderTrackVertical);
        DThemeWhite.set("DSliderTrackHorizontal", DThemeWhiteSliderTrackHorizontal);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteText = function () {
        DThemeWhite.set("DText", DThemeWhiteText);
    };

    const DTableState = wcardinal.ui.DTableState;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteTableBodyCellTrees = /** @class */ (function () {
        function DThemeWhiteTableBodyCellTrees() {
        }
        DThemeWhiteTableBodyCellTrees.init = function () {
            DThemeWhiteExpandables.init();
        };
        DThemeWhiteTableBodyCellTrees.getImageSource = function (state) {
            if (state.is(DTableState.HAS_CHILDREN)) {
                if (state.is(DTableState.OPENED)) {
                    return DThemeWhiteExpandables.getImageOpened();
                }
                else {
                    return DThemeWhiteExpandables.getImageClosed();
                }
            }
            return null;
        };
        return DThemeWhiteTableBodyCellTrees;
    }());

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    DThemeWhiteTableBodyCellTrees.init();
    var DThemeWhiteTreeItems = /** @class */ (function (_super) {
        __extends(DThemeWhiteTreeItems, _super);
        function DThemeWhiteTreeItems() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteTreeItems.prototype.getSecondaryImageSource = function (state) {
            return DThemeWhiteTableBodyCellTrees.getImageSource(state);
        };
        DThemeWhiteTreeItems.prototype.getSecondaryImageTintColor = function (state) {
            return this.getColor(state);
        };
        DThemeWhiteTreeItems.prototype.getSecondaryImageTintAlpha = function (state) {
            return this.getAlpha(state) * 0.5;
        };
        DThemeWhiteTreeItems.prototype.getSecondaryImageAlignWith = function () {
            return DAlignWith.PADDING;
        };
        DThemeWhiteTreeItems.prototype.getSecondaryImageMarginHorizontal = function () {
            return -19;
        };
        return DThemeWhiteTreeItems;
    }(DThemeWhiteListItems));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteTree = /** @class */ (function (_super) {
        __extends(DThemeWhiteTree, _super);
        function DThemeWhiteTree() {
            var _this = _super.call(this) || this;
            _this._style = _this.newStyle();
            return _this;
        }
        DThemeWhiteTree.prototype.newStyle = function () {
            return new DThemeWhiteTreeItems(null, true, false);
        };
        DThemeWhiteTree.prototype.getBackgroundColor = function (state) {
            return DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD;
        };
        return DThemeWhiteTree;
    }(DThemeWhitePane));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteTreeItemText = /** @class */ (function (_super) {
        __extends(DThemeWhiteTreeItemText, _super);
        function DThemeWhiteTreeItemText() {
            var _this = _super.call(this) || this;
            _this._style = _this.newStyle();
            return _this;
        }
        DThemeWhiteTreeItemText.prototype.newStyle = function () {
            return new DThemeWhiteTreeItems(null, true, false);
        };
        DThemeWhiteTreeItemText.prototype.getBackgroundColor = function (state) {
            return this._style.getBackgroundColor(state);
        };
        DThemeWhiteTreeItemText.prototype.getBackgroundAlpha = function (state) {
            return this._style.getBackgroundAlpha(state);
        };
        DThemeWhiteTreeItemText.prototype.getBorderColor = function (state) {
            return this._style.getBorderColor(state);
        };
        DThemeWhiteTreeItemText.prototype.getBorderMask = function (state) {
            return this._style.getBorderMask(state);
        };
        DThemeWhiteTreeItemText.prototype.getColor = function (state) {
            return this._style.getColor(state);
        };
        DThemeWhiteTreeItemText.prototype.getAlpha = function (state) {
            return this._style.getAlpha(state);
        };
        DThemeWhiteTreeItemText.prototype.getHeight = function () {
            return this._style.getHeight();
        };
        DThemeWhiteTreeItemText.prototype.getCornerMask = function () {
            return this._style.getCornerMask();
        };
        DThemeWhiteTreeItemText.prototype.getImageTintColor = function (state) {
            return this._style.getImageTintColor(state);
        };
        DThemeWhiteTreeItemText.prototype.getCursor = function (state) {
            return this._style.getCursor(state);
        };
        DThemeWhiteTreeItemText.prototype.getPaddingLeft = function () {
            return 10;
        };
        DThemeWhiteTreeItemText.prototype.getPaddingRight = function () {
            return 10;
        };
        DThemeWhiteTreeItemText.prototype.newTextValue = function () {
            return undefined;
        };
        DThemeWhiteTreeItemText.prototype.getWidth = function () {
            return "padding";
        };
        DThemeWhiteTreeItemText.prototype.getLevelPadding = function (level) {
            return 24 + level * 20 - this.getPaddingLeft();
        };
        DThemeWhiteTreeItemText.prototype.newState = function (state) {
            _super.prototype.newState.call(this, state);
            state.isDisabled = true;
        };
        return DThemeWhiteTreeItemText;
    }(DThemeWhiteImageBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteTreeItemButton = /** @class */ (function (_super) {
        __extends(DThemeWhiteTreeItemButton, _super);
        function DThemeWhiteTreeItemButton() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteTreeItemButton.prototype.getCursor = function (state) {
            if (!state.isActionable) {
                return "";
            }
            return "pointer";
        };
        return DThemeWhiteTreeItemButton;
    }(DThemeWhiteTreeItemText));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    DThemeWhiteTableBodyCellTrees.init();
    var DThemeWhiteTreeItemNonEditable = /** @class */ (function (_super) {
        __extends(DThemeWhiteTreeItemNonEditable, _super);
        function DThemeWhiteTreeItemNonEditable() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteTreeItemNonEditable.prototype.getSecondaryImageSource = function (state) {
            return this._style.getSecondaryImageSource(state);
        };
        DThemeWhiteTreeItemNonEditable.prototype.getSecondaryImageTintColor = function (state) {
            return this._style.getSecondaryImageTintColor(state);
        };
        DThemeWhiteTreeItemNonEditable.prototype.getSecondaryImageTintAlpha = function (state) {
            return this._style.getSecondaryImageTintAlpha(state);
        };
        DThemeWhiteTreeItemNonEditable.prototype.getSecondaryImageAlignWith = function () {
            return this._style.getSecondaryImageAlignWith();
        };
        DThemeWhiteTreeItemNonEditable.prototype.getSecondaryImageMarginHorizontal = function () {
            return this._style.getSecondaryImageMarginHorizontal();
        };
        return DThemeWhiteTreeItemNonEditable;
    }(DThemeWhiteTreeItemButton));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteTree = function () {
        DThemeWhite.set("DTree", DThemeWhiteTree);
        DThemeWhite.set("DTreeItemText", DThemeWhiteTreeItemText);
        DThemeWhite.set("DTreeItemButton", DThemeWhiteTreeItemButton);
        DThemeWhite.set("DTreeItemNonEditable", DThemeWhiteTreeItemNonEditable);
    };

    const UtilGestureModifier = wcardinal.ui.UtilGestureModifier;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteView = /** @class */ (function () {
        function DThemeWhiteView() {
        }
        DThemeWhiteView.prototype.isWheelZoomEnabled = function () {
            return true;
        };
        DThemeWhiteView.prototype.getWheelZoomSpeed = function () {
            return 0.004;
        };
        DThemeWhiteView.prototype.getWheelZoomModifier = function () {
            return UtilGestureModifier.NOT_NONE;
        };
        DThemeWhiteView.prototype.isWheelTranslationEnabled = function () {
            return true;
        };
        DThemeWhiteView.prototype.getWheelTranslationSpeed = function () {
            return 14 * 0.16;
        };
        DThemeWhiteView.prototype.getWheelTranslationModifier = function () {
            return UtilGestureModifier.NONE;
        };
        DThemeWhiteView.prototype.isDblClickZoomEnabled = function () {
            return true;
        };
        DThemeWhiteView.prototype.getDblClickZoomSpeed = function () {
            return 2;
        };
        DThemeWhiteView.prototype.getDblClickZoomModifier = function () {
            return UtilGestureModifier.NONE;
        };
        DThemeWhiteView.prototype.getDblClickZoomDuration = function () {
            return 333;
        };
        DThemeWhiteView.prototype.getZoomMin = function () {
            return 0.01;
        };
        DThemeWhiteView.prototype.getZoomMax = function () {
            return 100;
        };
        DThemeWhiteView.prototype.getZoomKeepRatio = function () {
            return true;
        };
        DThemeWhiteView.prototype.getGestureMode = function () {
            return UtilGestureMode.ON;
        };
        DThemeWhiteView.prototype.getGestureModifier = function () {
            return UtilGestureModifier.NONE;
        };
        DThemeWhiteView.prototype.getGestureDuration = function () {
            return 1;
        };
        return DThemeWhiteView;
    }());

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteView = function () {
        DThemeWhite.set("DView", DThemeWhiteView);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhite = function () {
        DThemes.setDefaultThemeClass(DThemeWhite);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    // Material Design icons by Google.
    // Apache license version 2.0.
    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("button_color_sample", 21, 21, "<g transform=\"scale(0.875,0.875)\">" +
        "<path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\" fill=\"#fff\"/>" +
        "</g>");
    /* eslint-enable prettier/prettier */
    var formatter$8 = function (colorAndAlpha) {
        return "#".concat(UtilRgb.toCode(colorAndAlpha.color), " A").concat(colorAndAlpha.alpha.toFixed(2));
    };
    var DThemeWhiteButtonColor = /** @class */ (function (_super) {
        __extends(DThemeWhiteButtonColor, _super);
        function DThemeWhiteButtonColor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteButtonColor.prototype.getImageTintColor = function (state) {
            return null;
        };
        DThemeWhiteButtonColor.prototype.getImageSource = function (state) {
            return DThemeWhiteAtlas.mappings.button_color_sample;
        };
        DThemeWhiteButtonColor.prototype.getTextFormatter = function () {
            return formatter$8;
        };
        DThemeWhiteButtonColor.prototype.newTextValue = function () {
            return {
                color: 0xffffff,
                alpha: 1
            };
        };
        return DThemeWhiteButtonColor;
    }(DThemeWhiteButton));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteDialogColor = /** @class */ (function (_super) {
        __extends(DThemeWhiteDialogColor, _super);
        function DThemeWhiteDialogColor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteDialogColor;
    }(DThemeWhiteDialogFitted));

    const DColorType = wcardinal.ui.DColorType;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var makeCheckerboard = function (width, height) {
        var LIGHT = "#bfbfbf";
        var DARK = "#a5a5a5";
        var result = "<g>";
        for (var ih = 0; ih < height; ++ih) {
            for (var iw = 0; iw < width; ++iw) {
                var color = (iw + ih) % 2 === 0 ? LIGHT : DARK;
                result += "<rect x=\"".concat(9 * iw, "\" y=\"").concat(9 * ih, "\" width=\"9\" height=\"9\" fill=\"").concat(color, "\" />");
            }
        }
        result += "</g>";
        return result;
    };
    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("picker_color_main", 236, 164, "<g>" +
        "<linearGradient id=\"fs7w3iusfdnb\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">" +
        "<stop stop-color=\"#FFFFFF\" stop-opacity=\"0\" offset=\"0\"/>" +
        "<stop stop-color=\"#FFFFFF\" stop-opacity=\"1\" offset=\"1\"/>" +
        "</linearGradient>" +
        "<linearGradient id=\"2rfcfe9874bw\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">" +
        "<stop stop-color=\"#000000\" stop-opacity=\"0\" offset=\"0\"/>" +
        "<stop stop-color=\"#000000\" stop-opacity=\"1\" offset=\"1\"/>" +
        "</linearGradient>" +
        "<rect x=\"0\" y=\"0\" width=\"236\" height=\"164\" fill=\"url(#fs7w3iusfdnb)\" />" +
        "<rect x=\"0\" y=\"0\" width=\"236\" height=\"164\" fill=\"url(#2rfcfe9874bw)\" />" +
        "</g>", 1, 1, 234, 162);
    DThemeWhiteAtlas.add("picker_color_main_base", 236, 164, "<g>" +
        "<rect x=\"0\" y=\"0\" width=\"236\" height=\"164\" fill=\"#fff\" />" +
        "</g>", 1, 1, 234, 162);
    DThemeWhiteAtlas.add("picker_color_alpha_checkerboard", 234, 18, makeCheckerboard(26, 2));
    DThemeWhiteAtlas.add("picker_color_alpha", 234, 18, "<g>" +
        "<linearGradient id=\"s48afbuh44\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">" +
        "<stop stop-color=\"#FFFFFF\" stop-opacity=\"0\" offset=\"0\"/>" +
        "<stop stop-color=\"#FFFFFF\" stop-opacity=\"1\" offset=\"1\"/>" +
        "</linearGradient>" +
        "<rect x=\"0\" y=\"0\" width=\"234\" height=\"18\" fill=\"url(#s48afbuh44)\" />" +
        "</g>");
    DThemeWhiteAtlas.add("picker_color_base", 234, 18, "<g>" +
        "<linearGradient id=\"ni2rbisdf3\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">" +
        "<stop stop-color=\"#FF0000\" offset=\"0\"/>" +
        "<stop stop-color=\"#FFFF00\" offset=\"0.167\"/>" +
        "<stop stop-color=\"#00FF00\" offset=\"0.333\"/>" +
        "<stop stop-color=\"#00FFFF\" offset=\"0.5\"/>" +
        "<stop stop-color=\"#0000FF\" offset=\"0.667\"/>" +
        "<stop stop-color=\"#FF00FF\" offset=\"0.833\"/>" +
        "<stop stop-color=\"#FF0000\" offset=\"1\"/>" +
        "</linearGradient>" +
        "<rect x=\"0\" y=\"0\" width=\"234\" height=\"18\" fill=\"url(#ni2rbisdf3)\" />" +
        "</g>");
    DThemeWhiteAtlas.add("picker_color_base_pointer", 16.2, 31.8, "<rect x=\"4.5\" y=\"4.5\" width=\"7.2\" height=\"22.8\" stroke=\"#5f5f5f\" stroke-width=\"2.4\" fill=\"none\" />");
    DThemeWhiteAtlas.add("picker_color_pointer", 25.8, 25.8, "<circle cx=\"12.9\" cy=\"12.9\" r=\"4.8\" stroke=\"#5f5f5f\" stroke-width=\"2.4\" fill=\"none\" />" +
        "<circle cx=\"12.9\" cy=\"12.9\" r=\"7.2\" stroke=\"#ffffff\" stroke-width=\"2.4\" fill=\"none\" />");
    DThemeWhiteAtlas.add("picker_color_recent_checkerboard", 36, 36, makeCheckerboard(4, 4), 9, 9, 18, 18);
    DThemeWhiteAtlas.add("picker_color_recent", 36, 36, "<g>" +
        "<rect x=\"0\" y=\"0\" width=\"36\" height=\"36\" fill=\"#fff\" />" +
        "<path x=\"0\" y=\"0\" d=\"M9 9 h18 v18 h-18 v-18 m1 1 v16 h16 v-16 h-16 z\" fill=\"#eee\" />" +
        "</g>", 9, 9, 18, 18);
    DThemeWhiteAtlas.add("picker_color_sample_checkerboard", 45, 63, makeCheckerboard(5, 7));
    DThemeWhiteAtlas.add("picker_color_sample", 47, 65, "<g>" +
        "<rect x=\"0\" y=\"0\" width=\"47\" height=\"65\" fill=\"#fff\" />" +
        "</g>", 1, 1, 45, 63);
    DThemeWhiteAtlas.add("picker_color_anchor_outlined", 25.8, 25.8, "<circle cx=\"12.9\" cy=\"12.9\" r=\"8.4\" stroke=\"none\" fill=\"#ffffff\" />" +
        "<circle cx=\"12.9\" cy=\"12.9\" r=\"9.6\" stroke=\"#5f5f5f\" stroke-width=\"2.4\" fill=\"none\" />");
    DThemeWhiteAtlas.add("picker_color_anchor", 28.2, 28.2, "<circle cx=\"14.1\" cy=\"14.1\" r=\"6\" stroke=\"none\" fill=\"#ffffff\" />" +
        "<circle cx=\"14.1\" cy=\"14.1\" r=\"7.2\" stroke=\"#5f5f5f\" stroke-width=\"2.4\" fill=\"none\" />");
    DThemeWhiteAtlas.add("picker_color_direction", 12, 30, "<path d=\"M0.6 25.8 L 12.0375 5.9895\" stroke=\"#5f5f5f\" stroke-width=\"1.2\" fill=\"none\" />" +
        "<path d=\"M8.5125 25.8 A 8.475 8.475 0 0 0 4.275 18.4605\" stroke=\"#5f5f5f\" stroke-width=\"1.2\" fill=\"none\" />" +
        "<rect x=\"0.6\" y=\"24.6\" width=\"11.4375\" height=\"1.2\" rx=\"0.6\" ry=\"0.6\" stroke=\"none\" fill=\"#5f5f5f\" />");
    DThemeWhiteAtlas.add("picker_color_standard", 18, 18, "<g>" +
        "<rect x=\"0\" y=\"0\" width=\"18\" height=\"18\" fill=\"#fff\" stroke-width=\"1\" stroke=\"#eee\" />" +
        "</g>");
    /* eslint-enable prettier/prettier */
    var DThemeWhitePickerColor = /** @class */ (function (_super) {
        __extends(DThemeWhitePickerColor, _super);
        function DThemeWhitePickerColor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhitePickerColor.prototype.getMainWidth = function () {
            return 234;
        };
        DThemeWhitePickerColor.prototype.getMainHeight = function () {
            return 162;
        };
        DThemeWhitePickerColor.prototype.getMainTexture = function () {
            return DThemeWhiteAtlas.mappings.picker_color_main;
        };
        DThemeWhitePickerColor.prototype.getMainBaseTexture = function () {
            return DThemeWhiteAtlas.mappings.picker_color_main_base;
        };
        DThemeWhitePickerColor.prototype.getMainPointerTexture = function () {
            return DThemeWhiteAtlas.mappings.picker_color_pointer;
        };
        DThemeWhitePickerColor.prototype.getMainPointerColor = function () {
            return 0xffffff;
        };
        DThemeWhitePickerColor.prototype.getMainPointerAlpha = function () {
            return 1;
        };
        DThemeWhitePickerColor.prototype.getBaseHeight = function () {
            return 18;
        };
        DThemeWhitePickerColor.prototype.getBaseMargin = function () {
            return 6;
        };
        DThemeWhitePickerColor.prototype.getBaseTexture = function () {
            return DThemeWhiteAtlas.mappings.picker_color_base;
        };
        DThemeWhitePickerColor.prototype.getBasePointerTexture = function () {
            return DThemeWhiteAtlas.mappings.picker_color_base_pointer;
        };
        DThemeWhitePickerColor.prototype.getBasePointerColor = function () {
            return 0xffffff;
        };
        DThemeWhitePickerColor.prototype.getBasePointerAlpha = function () {
            return this.getMainPointerAlpha();
        };
        DThemeWhitePickerColor.prototype.getAlphaHeight = function () {
            return this.getBaseHeight();
        };
        DThemeWhitePickerColor.prototype.getAlphaMargin = function () {
            return this.getBaseMargin();
        };
        DThemeWhitePickerColor.prototype.getAlphaTexture = function () {
            return DThemeWhiteAtlas.mappings.picker_color_alpha;
        };
        DThemeWhitePickerColor.prototype.getAlphaCheckerboardTexture = function () {
            return DThemeWhiteAtlas.mappings.picker_color_alpha_checkerboard;
        };
        DThemeWhitePickerColor.prototype.getAlphaPointerTexture = function () {
            return this.getBasePointerTexture();
        };
        DThemeWhitePickerColor.prototype.getAlphaPointerColor = function () {
            return this.getBasePointerColor();
        };
        DThemeWhitePickerColor.prototype.getAlphaPointerAlpha = function () {
            return this.getMainPointerAlpha();
        };
        DThemeWhitePickerColor.prototype.getRecentMargin = function () {
            return this.getBaseMargin();
        };
        DThemeWhitePickerColor.prototype.getRecentColorWidth = function () {
            return this.getBaseHeight();
        };
        DThemeWhitePickerColor.prototype.getRecentColorHeight = function () {
            return this.getRecentColorWidth();
        };
        DThemeWhitePickerColor.prototype.getRecentColorMargin = function () {
            return this.getRecentMargin();
        };
        DThemeWhitePickerColor.prototype.getRecentColorCount = function () {
            return 10;
        };
        DThemeWhitePickerColor.prototype.getRecentCheckerboardTexture = function () {
            return DThemeWhiteAtlas.mappings.picker_color_recent_checkerboard;
        };
        DThemeWhitePickerColor.prototype.getRecentTexture = function () {
            return DThemeWhiteAtlas.mappings.picker_color_recent;
        };
        DThemeWhitePickerColor.prototype.getInputMargin = function () {
            return this.getBaseMargin();
        };
        DThemeWhitePickerColor.prototype.getInputLabelWidth = function () {
            return 15;
        };
        DThemeWhitePickerColor.prototype.getSampleCheckerboardOldTexture = function () {
            return DThemeWhiteAtlas.mappings.picker_color_sample_checkerboard;
        };
        DThemeWhitePickerColor.prototype.getSampleCheckerboardNewTexture = function () {
            return DThemeWhiteAtlas.mappings.picker_color_sample_checkerboard;
        };
        DThemeWhitePickerColor.prototype.getSampleOldTexture = function () {
            return DThemeWhiteAtlas.mappings.picker_color_sample;
        };
        DThemeWhitePickerColor.prototype.getSampleNewTexture = function () {
            return DThemeWhiteAtlas.mappings.picker_color_sample;
        };
        DThemeWhitePickerColor.prototype.getStandardColorCount = function () {
            return 80;
        };
        DThemeWhitePickerColor.prototype.getStandardColorWidth = function () {
            return this.getBaseHeight();
        };
        DThemeWhitePickerColor.prototype.getStandardColorHeight = function () {
            return this.getStandardColorWidth();
        };
        DThemeWhitePickerColor.prototype.getStandardColorMargin = function () {
            return this.getBaseMargin();
        };
        DThemeWhitePickerColor.prototype.getStandardTexture = function () {
            return DThemeWhiteAtlas.mappings.picker_color_standard;
        };
        DThemeWhitePickerColor.prototype.getBackgroundColor = function (state) {
            return null;
        };
        DThemeWhitePickerColor.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeWhitePickerColor.prototype.getInteractive = function () {
            return DBaseInteractive.CHILDREN;
        };
        DThemeWhitePickerColor.prototype.newState = function (state) {
            _super.prototype.newState.call(this, state);
            state.isFocusable = false;
        };
        return DThemeWhitePickerColor;
    }(DThemeWhiteBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteJaJpPickerColor = /** @class */ (function (_super) {
        __extends(DThemeWhiteJaJpPickerColor, _super);
        function DThemeWhiteJaJpPickerColor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteJaJpPickerColor.prototype.toColorTypeLabel = function (type) {
            switch (type) {
                case DColorType.STANDARD:
                    return "標準";
                case DColorType.CUSTOM:
                    return "カスタム";
            }
        };
        return DThemeWhiteJaJpPickerColor;
    }(DThemeWhitePickerColor));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteJaJpPickerColor = function () {
        DThemeWhite.set("DPickerColor", DThemeWhiteJaJpPickerColor);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteJaJpDialogColor = function () {
        DThemeWhite.set("DDialogColor", DThemeWhiteDialogColor);
        loadThemeWhiteJaJpPickerColor();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteJaJpButtonColor = function () {
        DThemeWhite.set("DButtonColor", DThemeWhiteButtonColor);
        loadThemeWhiteJaJpDialogColor();
    };

    const DColorGradientObservable = wcardinal.ui.DColorGradientObservable;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    // Material Design icons by Google.
    // Apache license version 2.0.
    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("button_color_gradient_sample", 21, 21, "<g transform=\"scale(0.875,0.875)\">" +
        "<path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\" fill=\"#fff\"/>" +
        "</g>");
    /* eslint-enable prettier/prettier */
    var formatter$7 = function () {
        return "";
    };
    var DThemeWhiteButtonColorGradient = /** @class */ (function (_super) {
        __extends(DThemeWhiteButtonColorGradient, _super);
        function DThemeWhiteButtonColorGradient() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteButtonColorGradient.prototype.getViewBaseTexture = function () {
            return DThemeWhiteAtlas.mappings.button_color_gradient_sample;
        };
        DThemeWhiteButtonColorGradient.prototype.getTextFormatter = function () {
            return formatter$7;
        };
        DThemeWhiteButtonColorGradient.prototype.newTextValue = function () {
            return new DColorGradientObservable();
        };
        DThemeWhiteButtonColorGradient.prototype.getCheckerColors = function () {
            return [0.75, 0.65];
        };
        return DThemeWhiteButtonColorGradient;
    }(DThemeWhiteButton));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteDialogColorGradient = /** @class */ (function (_super) {
        __extends(DThemeWhiteDialogColorGradient, _super);
        function DThemeWhiteDialogColorGradient() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteDialogColorGradient;
    }(DThemeWhiteDialogFitted));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhitePickerColorGradient = /** @class */ (function (_super) {
        __extends(DThemeWhitePickerColorGradient, _super);
        function DThemeWhitePickerColorGradient() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhitePickerColorGradient.prototype.getGradientPointsWidth = function () {
            return 30;
        };
        DThemeWhitePickerColorGradient.prototype.getGradientPointsMargin = function () {
            return 24;
        };
        DThemeWhitePickerColorGradient.prototype.getGradientAnchorTexture = function () {
            return DThemeWhiteAtlas.mappings.picker_color_anchor;
        };
        DThemeWhitePickerColorGradient.prototype.getGradientAnchorOutlinedTexture = function () {
            return DThemeWhiteAtlas.mappings.picker_color_anchor_outlined;
        };
        DThemeWhitePickerColorGradient.prototype.getGradientAnchorOutlineTexture = function () {
            return DThemeWhiteAtlas.mappings.picker_color_anchor_outline;
        };
        DThemeWhitePickerColorGradient.prototype.getGradientDirectionMargin = function () {
            return 5;
        };
        DThemeWhitePickerColorGradient.prototype.getGradientDirectionTexture = function () {
            return DThemeWhiteAtlas.mappings.picker_color_direction;
        };
        DThemeWhitePickerColorGradient.prototype.getGradientRecentColumn = function () {
            return 4;
        };
        DThemeWhitePickerColorGradient.prototype.getGradientRecentWidth = function () {
            return 30;
        };
        DThemeWhitePickerColorGradient.prototype.getGradientRecentMargin = function () {
            return 5;
        };
        DThemeWhitePickerColorGradient.prototype.getGradientRecentCount = function () {
            return 16;
        };
        DThemeWhitePickerColorGradient.prototype.getGradientRecents = function () {
            return [];
        };
        DThemeWhitePickerColorGradient.prototype.getGradientCheckerColors = function () {
            return [0.75, 0.65];
        };
        DThemeWhitePickerColorGradient.prototype.getBackgroundColor = function (state) {
            return null;
        };
        DThemeWhitePickerColorGradient.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeWhitePickerColorGradient.prototype.getInteractive = function () {
            return DBaseInteractive.CHILDREN;
        };
        DThemeWhitePickerColorGradient.prototype.newState = function (state) {
            _super.prototype.newState.call(this, state);
            state.isFocusable = false;
        };
        return DThemeWhitePickerColorGradient;
    }(DThemeWhiteBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteJaJpPickerColorGradient = function () {
        DThemeWhite.set("DPickerColorGradient", DThemeWhitePickerColorGradient);
        loadThemeWhiteJaJpPickerColor();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteJaJpDialogColorGradient = function () {
        DThemeWhite.set("DDialogColorGradient", DThemeWhiteDialogColorGradient);
        loadThemeWhiteJaJpPickerColorGradient();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteJaJpButtonColorGradient = function () {
        DThemeWhite.set("DButtonColorGradient", DThemeWhiteButtonColorGradient);
        loadThemeWhiteJaJpDialogColorGradient();
    };

    const DPickerDates = wcardinal.ui.DPickerDates;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var formatter$6 = function (value) {
        return DPickerDates.format(value);
    };
    var DThemeWhiteButtonDate = /** @class */ (function (_super) {
        __extends(DThemeWhiteButtonDate, _super);
        function DThemeWhiteButtonDate() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteButtonDate.prototype.getTextFormatter = function () {
            return formatter$6;
        };
        DThemeWhiteButtonDate.prototype.newTextValue = function () {
            return new Date();
        };
        return DThemeWhiteButtonDate;
    }(DThemeWhiteButton));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteDialogDate = /** @class */ (function (_super) {
        __extends(DThemeWhiteDialogDate, _super);
        function DThemeWhiteDialogDate() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteDialogDate;
    }(DThemeWhiteDialogFitted));

    const DPickerDatetimeMask = wcardinal.ui.DPickerDatetimeMask;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhitePickerTime = /** @class */ (function (_super) {
        __extends(DThemeWhitePickerTime, _super);
        function DThemeWhitePickerTime() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhitePickerTime.prototype.getBackgroundColor = function (state) {
            return null;
        };
        DThemeWhitePickerTime.prototype.getInteractive = function () {
            return DBaseInteractive.CHILDREN;
        };
        DThemeWhitePickerTime.prototype.newState = function (state) {
            _super.prototype.newState.call(this, state);
            state.isFocusable = false;
        };
        DThemeWhitePickerTime.prototype.getMargin = function () {
            return 8;
        };
        DThemeWhitePickerTime.prototype.getMask = function () {
            return DPickerDatetimeMask.HOURS | DPickerDatetimeMask.MINUTES;
        };
        DThemeWhitePickerTime.prototype.getWidth = function () {
            return "auto";
        };
        DThemeWhitePickerTime.prototype.getHeight = function () {
            return "auto";
        };
        DThemeWhitePickerTime.prototype.getLowerBound = function () {
            return null;
        };
        DThemeWhitePickerTime.prototype.isLowerBoundInclusive = function () {
            return false;
        };
        DThemeWhitePickerTime.prototype.getUpperBound = function () {
            return null;
        };
        DThemeWhitePickerTime.prototype.isUpperBoundInclusive = function () {
            return false;
        };
        return DThemeWhitePickerTime;
    }(DThemeWhiteBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteJaJpPickerTime = /** @class */ (function (_super) {
        __extends(DThemeWhiteJaJpPickerTime, _super);
        function DThemeWhiteJaJpPickerTime() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteJaJpPickerTime.prototype.getHoursOptions = function () {
            return {
                width: 100,
                title: "時"
            };
        };
        DThemeWhiteJaJpPickerTime.prototype.getMinutesOptions = function () {
            return {
                width: 100,
                title: "分"
            };
        };
        DThemeWhiteJaJpPickerTime.prototype.getSecondsOptions = function () {
            return {
                width: 100,
                title: "秒"
            };
        };
        return DThemeWhiteJaJpPickerTime;
    }(DThemeWhitePickerTime));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var MONTH_LABELS = [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
    ];
    var DAY_LABELS = ["日", "月", "火", "水", "木", "金", "土"];
    var defaultLabelFormatter = function (date) {
        return "".concat(date.getFullYear(), "\u5E74").concat(MONTH_LABELS[date.getMonth()]);
    };
    var defaultDateDecorator = function () {
        /* DO NOTHING*/
    };
    var DThemeWhiteJaJpPickerDatetime = /** @class */ (function (_super) {
        __extends(DThemeWhiteJaJpPickerDatetime, _super);
        function DThemeWhiteJaJpPickerDatetime() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteJaJpPickerDatetime.prototype.getDayLabels = function () {
            return DAY_LABELS;
        };
        DThemeWhiteJaJpPickerDatetime.prototype.getLabelFormatter = function () {
            return defaultLabelFormatter;
        };
        DThemeWhiteJaJpPickerDatetime.prototype.getDateDecorator = function () {
            return defaultDateDecorator;
        };
        DThemeWhiteJaJpPickerDatetime.prototype.getBackButtonOptions = function () {
            return {
                title: "前月"
            };
        };
        DThemeWhiteJaJpPickerDatetime.prototype.getNextButtonOptions = function () {
            return {
                title: "翌月"
            };
        };
        DThemeWhiteJaJpPickerDatetime.prototype.getDayStart = function () {
            return 0;
        };
        DThemeWhiteJaJpPickerDatetime.prototype.getMask = function () {
            return DPickerDatetimeMask.DATE | _super.prototype.getMask.call(this);
        };
        return DThemeWhiteJaJpPickerDatetime;
    }(DThemeWhiteJaJpPickerTime));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteJaJpPickerDate = /** @class */ (function (_super) {
        __extends(DThemeWhiteJaJpPickerDate, _super);
        function DThemeWhiteJaJpPickerDate() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteJaJpPickerDate.prototype.getMask = function () {
            return DPickerDatetimeMask.DATE;
        };
        return DThemeWhiteJaJpPickerDate;
    }(DThemeWhiteJaJpPickerDatetime));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("picker_date_back", 24, 24, "<g>" +
        "<path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\" fill=\"#fff\" />" +
        "</g>");
    /* eslint-enable prettier/prettier */
    var DThemeWhitePickerDatetimeButtonBack = /** @class */ (function (_super) {
        __extends(DThemeWhitePickerDatetimeButtonBack, _super);
        function DThemeWhitePickerDatetimeButtonBack() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhitePickerDatetimeButtonBack.prototype.getWidth = function () {
            return "auto";
        };
        DThemeWhitePickerDatetimeButtonBack.prototype.getImageAlignWith = function () {
            return DAlignWith.PADDING;
        };
        DThemeWhitePickerDatetimeButtonBack.prototype.getImageMarginHorizontal = function () {
            return 0;
        };
        DThemeWhitePickerDatetimeButtonBack.prototype.getImageAlignHorizontal = function () {
            return DAlignHorizontal.LEFT;
        };
        DThemeWhitePickerDatetimeButtonBack.prototype.getImageSource = function (state) {
            return DThemeWhiteAtlas.mappings.picker_date_back;
        };
        DThemeWhitePickerDatetimeButtonBack.prototype.getAlpha = function (state) {
            return _super.prototype.getAlpha.call(this, state) * 0.9;
        };
        return DThemeWhitePickerDatetimeButtonBack;
    }(DThemeWhiteButtonAmbient));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhitePickerDatetimeButtonDate = /** @class */ (function (_super) {
        __extends(DThemeWhitePickerDatetimeButtonDate, _super);
        function DThemeWhitePickerDatetimeButtonDate() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhitePickerDatetimeButtonDate.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.CENTER;
        };
        DThemeWhitePickerDatetimeButtonDate.prototype.getTextStyleClipping = function () {
            return false;
        };
        DThemeWhitePickerDatetimeButtonDate.prototype.getWidth = function () {
            return 30;
        };
        DThemeWhitePickerDatetimeButtonDate.prototype.getHeight = function () {
            return 30;
        };
        DThemeWhitePickerDatetimeButtonDate.prototype.isToggle = function () {
            return true;
        };
        return DThemeWhitePickerDatetimeButtonDate;
    }(DThemeWhiteButtonAmbient));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("picker_date_next", 24, 24, "<g>" +
        "<path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\" fill=\"#fff\" />" +
        "</g>");
    /* eslint-enable prettier/prettier */
    var DThemeWhitePickerDatetimeButtonNext = /** @class */ (function (_super) {
        __extends(DThemeWhitePickerDatetimeButtonNext, _super);
        function DThemeWhitePickerDatetimeButtonNext() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhitePickerDatetimeButtonNext.prototype.getWidth = function () {
            return "auto";
        };
        DThemeWhitePickerDatetimeButtonNext.prototype.getImageAlignWith = function () {
            return DAlignWith.PADDING;
        };
        DThemeWhitePickerDatetimeButtonNext.prototype.getImageMarginHorizontal = function () {
            return 0;
        };
        DThemeWhitePickerDatetimeButtonNext.prototype.getImageAlignHorizontal = function () {
            return DAlignHorizontal.LEFT;
        };
        DThemeWhitePickerDatetimeButtonNext.prototype.getImageSource = function (state) {
            return DThemeWhiteAtlas.mappings.picker_date_next;
        };
        DThemeWhitePickerDatetimeButtonNext.prototype.getAlpha = function (state) {
            return _super.prototype.getAlpha.call(this, state) * 0.9;
        };
        return DThemeWhitePickerDatetimeButtonNext;
    }(DThemeWhiteButtonAmbient));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhitePickerDatetimeLabel = /** @class */ (function (_super) {
        __extends(DThemeWhitePickerDatetimeLabel, _super);
        function DThemeWhitePickerDatetimeLabel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhitePickerDatetimeLabel.prototype.getWidth = function () {
            return 30;
        };
        DThemeWhitePickerDatetimeLabel.prototype.getHeight = function () {
            return 30;
        };
        DThemeWhitePickerDatetimeLabel.prototype.getTextStyleClipping = function () {
            return false;
        };
        DThemeWhitePickerDatetimeLabel.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.CENTER;
        };
        DThemeWhitePickerDatetimeLabel.prototype.getAlpha = function (state) {
            return _super.prototype.getAlpha.call(this, state) * 0.9;
        };
        DThemeWhitePickerDatetimeLabel.prototype.getFontWeight = function () {
            return "bold";
        };
        DThemeWhitePickerDatetimeLabel.prototype.getFontSize = function () {
            return Math.round(_super.prototype.getFontSize.call(this) * 1.25);
        };
        DThemeWhitePickerDatetimeLabel.prototype.newTextValue = function () {
            return new Date();
        };
        DThemeWhitePickerDatetimeLabel.prototype.getInteractive = function () {
            return DBaseInteractive.NONE;
        };
        return DThemeWhitePickerDatetimeLabel;
    }(DThemeWhiteText));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhitePickerDatetimeLabelDate = /** @class */ (function (_super) {
        __extends(DThemeWhitePickerDatetimeLabelDate, _super);
        function DThemeWhitePickerDatetimeLabelDate() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhitePickerDatetimeLabelDate.prototype.getWidth = function () {
            return 30;
        };
        DThemeWhitePickerDatetimeLabelDate.prototype.getHeight = function () {
            return 30;
        };
        DThemeWhitePickerDatetimeLabelDate.prototype.getTextStyleClipping = function () {
            return false;
        };
        DThemeWhitePickerDatetimeLabelDate.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.CENTER;
        };
        DThemeWhitePickerDatetimeLabelDate.prototype.getAlpha = function (state) {
            return _super.prototype.getAlpha.call(this, state) * 0.9;
        };
        DThemeWhitePickerDatetimeLabelDate.prototype.getFontWeight = function () {
            return "bold";
        };
        return DThemeWhitePickerDatetimeLabelDate;
    }(DThemeWhiteText));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhitePickerDatetimeSpace = /** @class */ (function (_super) {
        __extends(DThemeWhitePickerDatetimeSpace, _super);
        function DThemeWhitePickerDatetimeSpace() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhitePickerDatetimeSpace.prototype.getBackgroundColor = function (state) {
            return null;
        };
        DThemeWhitePickerDatetimeSpace.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeWhitePickerDatetimeSpace.prototype.getWidth = function () {
            return 30;
        };
        DThemeWhitePickerDatetimeSpace.prototype.getHeight = function () {
            return 30;
        };
        DThemeWhitePickerDatetimeSpace.prototype.newState = function (state) {
            _super.prototype.newState.call(this, state);
            state.isFocusable = false;
        };
        DThemeWhitePickerDatetimeSpace.prototype.getInteractive = function () {
            return DBaseInteractive.NONE;
        };
        return DThemeWhitePickerDatetimeSpace;
    }(DThemeWhiteBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteJaJpPickerTime = function () {
        DThemeWhite.set("DPickerTime", DThemeWhiteJaJpPickerTime);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteJaJpPickerDatetime = function () {
        DThemeWhite.set("DPickerDatetimeButtonBack", DThemeWhitePickerDatetimeButtonBack);
        DThemeWhite.set("DPickerDatetimeButtonDate", DThemeWhitePickerDatetimeButtonDate);
        DThemeWhite.set("DPickerDatetimeButtonNext", DThemeWhitePickerDatetimeButtonNext);
        DThemeWhite.set("DPickerDatetimeLabelDate", DThemeWhitePickerDatetimeLabelDate);
        DThemeWhite.set("DPickerDatetimeLabel", DThemeWhitePickerDatetimeLabel);
        DThemeWhite.set("DPickerDatetimeSpace", DThemeWhitePickerDatetimeSpace);
        DThemeWhite.set("DPickerDatetime", DThemeWhiteJaJpPickerDatetime);
        loadThemeWhiteJaJpPickerTime();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteJaJpPickerDate = function () {
        DThemeWhite.set("DPickerDate", DThemeWhiteJaJpPickerDate);
        loadThemeWhiteJaJpPickerDatetime();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteJaJpDialogDate = function () {
        DThemeWhite.set("DDialogDate", DThemeWhiteDialogDate);
        loadThemeWhiteJaJpPickerDate();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteJaJpButtonDate = function () {
        DThemeWhite.set("DButtonDate", DThemeWhiteButtonDate);
        loadThemeWhiteJaJpDialogDate();
    };

    const DPickerDatetimes = wcardinal.ui.DPickerDatetimes;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var formatter$5 = function (value, caller) {
        return DPickerDatetimes.format(value, caller.getDatetimeMask());
    };
    var DThemeWhiteButtonDatetime = /** @class */ (function (_super) {
        __extends(DThemeWhiteButtonDatetime, _super);
        function DThemeWhiteButtonDatetime() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteButtonDatetime.prototype.getTextFormatter = function () {
            return formatter$5;
        };
        DThemeWhiteButtonDatetime.prototype.newTextValue = function () {
            return new Date();
        };
        return DThemeWhiteButtonDatetime;
    }(DThemeWhiteButton));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteDialogDatetime = /** @class */ (function (_super) {
        __extends(DThemeWhiteDialogDatetime, _super);
        function DThemeWhiteDialogDatetime() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteDialogDatetime;
    }(DThemeWhiteDialogFitted));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteJaJpDialogDatetime = function () {
        DThemeWhite.set("DDialogDatetime", DThemeWhiteDialogDatetime);
        loadThemeWhiteJaJpPickerDatetime();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteJaJpButtonDatetime = function () {
        DThemeWhite.set("DButtonDatetime", DThemeWhiteButtonDatetime);
        loadThemeWhiteJaJpDialogDatetime();
    };

    const toLabel = wcardinal.ui.toLabel;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteButtonSelect = /** @class */ (function (_super) {
        __extends(DThemeWhiteButtonSelect, _super);
        function DThemeWhiteButtonSelect() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteButtonSelect.prototype.getTextFormatter = function () {
            return toLabel;
        };
        DThemeWhiteButtonSelect.prototype.newTextValue = function () {
            return null;
        };
        return DThemeWhiteButtonSelect;
    }(DThemeWhiteButton));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteDialogSelectList = /** @class */ (function (_super) {
        __extends(DThemeWhiteDialogSelectList, _super);
        function DThemeWhiteDialogSelectList() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteDialogSelectList.prototype.getBackgroundColor = function (state) {
            return null;
        };
        DThemeWhiteDialogSelectList.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeWhiteDialogSelectList.prototype.getHeight = function () {
            return 250;
        };
        DThemeWhiteDialogSelectList.prototype.getCornerMask = function () {
            return DCornerMask.ALL;
        };
        DThemeWhiteDialogSelectList.prototype.newState = function (state) {
            _super.prototype.newState.call(this, state);
            state.isFocusable = false;
        };
        return DThemeWhiteDialogSelectList;
    }(DThemeWhiteList));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteDialogSelectListItem = /** @class */ (function (_super) {
        __extends(DThemeWhiteDialogSelectListItem, _super);
        function DThemeWhiteDialogSelectListItem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteDialogSelectListItem.prototype.newStyle = function () {
            return new DThemeWhiteListItems(null, false, true);
        };
        DThemeWhiteDialogSelectListItem.prototype.getCornerMask = function () {
            return DCornerMask.NONE;
        };
        return DThemeWhiteDialogSelectListItem;
    }(DThemeWhiteListItem));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteDialogSelect = /** @class */ (function (_super) {
        __extends(DThemeWhiteDialogSelect, _super);
        function DThemeWhiteDialogSelect() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteDialogSelect.prototype.getWidth = function () {
            return 480;
        };
        DThemeWhiteDialogSelect.prototype.getFooter = function () {
            return null;
        };
        DThemeWhiteDialogSelect.prototype.getInputMargin = function () {
            return 19;
        };
        DThemeWhiteDialogSelect.prototype.isDismissable = function () {
            return false;
        };
        DThemeWhiteDialogSelect.prototype.isCategoryDismissable = function () {
            return true;
        };
        return DThemeWhiteDialogSelect;
    }(DThemeWhiteDialogLayered));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteJaJpDialogSelect = /** @class */ (function (_super) {
        __extends(DThemeWhiteJaJpDialogSelect, _super);
        function DThemeWhiteJaJpDialogSelect() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteJaJpDialogSelect.prototype.getDismissLabel = function () {
            return "なし";
        };
        DThemeWhiteJaJpDialogSelect.prototype.getCategoryDismissLabel = function () {
            return "全て";
        };
        return DThemeWhiteJaJpDialogSelect;
    }(DThemeWhiteDialogSelect));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteJaJpDialogSelect = function () {
        DThemeWhite.set("DDialogSelect", DThemeWhiteJaJpDialogSelect);
        DThemeWhite.set("DDialogSelectList", DThemeWhiteDialogSelectList);
        DThemeWhite.set("DDialogSelectListItem", DThemeWhiteDialogSelectListItem);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteJaJpButtonSelect = function () {
        DThemeWhite.set("DButtonSelect", DThemeWhiteButtonSelect);
        loadThemeWhiteJaJpDialogSelect();
    };

    const DPickerTimes = wcardinal.ui.DPickerTimes;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var formatter$4 = function (value, caller) {
        return DPickerTimes.format(value, caller.getDatetimeMask());
    };
    var DThemeWhiteButtonTime = /** @class */ (function (_super) {
        __extends(DThemeWhiteButtonTime, _super);
        function DThemeWhiteButtonTime() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteButtonTime.prototype.getTextFormatter = function () {
            return formatter$4;
        };
        DThemeWhiteButtonTime.prototype.newTextValue = function () {
            return new Date();
        };
        return DThemeWhiteButtonTime;
    }(DThemeWhiteButton));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteDialogTime = /** @class */ (function (_super) {
        __extends(DThemeWhiteDialogTime, _super);
        function DThemeWhiteDialogTime() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteDialogTime;
    }(DThemeWhiteDialogFitted));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteJaJpDialogTime = function () {
        DThemeWhite.set("DDialogTime", DThemeWhiteDialogTime);
        loadThemeWhiteJaJpPickerTime();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteJaJpButtonTime = function () {
        DThemeWhite.set("DButtonTime", DThemeWhiteButtonTime);
        loadThemeWhiteJaJpDialogTime();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteJaJpButtonAll = function () {
        loadThemeWhiteButtonAmbient();
        loadThemeWhiteButtonCheckRight();
        loadThemeWhiteButtonCheck();
        loadThemeWhiteJaJpButtonColorGradient();
        loadThemeWhiteJaJpButtonColor();
        loadThemeWhiteJaJpButtonSelect();
        loadThemeWhiteButtonDanger();
        loadThemeWhiteJaJpButtonDate();
        loadThemeWhiteJaJpButtonDatetime();
        loadThemeWhiteButtonFile();
        loadThemeWhiteButtonLink();
        loadThemeWhiteButtonPrimary();
        loadThemeWhiteButtonRadioRight();
        loadThemeWhiteButtonRadio();
        loadThemeWhiteButtonSecondary();
        loadThemeWhiteJaJpButtonTime();
        loadThemeWhiteButton();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteDiagramBase = /** @class */ (function (_super) {
        __extends(DThemeWhiteDiagramBase, _super);
        function DThemeWhiteDiagramBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteDiagramBase.prototype.getCanvasBackgroundColor = function () {
            return 0xffffff;
        };
        DThemeWhiteDiagramBase.prototype.getCanvasBackgroundAlpha = function () {
            return 1.0;
        };
        DThemeWhiteDiagramBase.prototype.isAmbient = function () {
            return true;
        };
        DThemeWhiteDiagramBase.prototype.getCanvasShadow = function () {
            return "WEAK";
        };
        return DThemeWhiteDiagramBase;
    }(DThemeWhiteCanvasContainer));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteDiagram = /** @class */ (function (_super) {
        __extends(DThemeWhiteDiagram, _super);
        function DThemeWhiteDiagram() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteDiagram;
    }(DThemeWhiteDiagramBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteDiagramCanvasBase = /** @class */ (function (_super) {
        __extends(DThemeWhiteDiagramCanvasBase, _super);
        function DThemeWhiteDiagramCanvasBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteDiagramCanvasBase.prototype.isAmbient = function () {
            return true;
        };
        DThemeWhiteDiagramCanvasBase.prototype.getBackgroundBase = function () {
            return 0xeeeeee;
        };
        DThemeWhiteDiagramCanvasBase.prototype.getLocalBoundsLimit = function () {
            return 0;
        };
        return DThemeWhiteDiagramCanvasBase;
    }(DThemeWhiteCanvas));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteDiagramCanvas = /** @class */ (function (_super) {
        __extends(DThemeWhiteDiagramCanvas, _super);
        function DThemeWhiteDiagramCanvas() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteDiagramCanvas.prototype.newState = function (state) {
            _super.prototype.newState.call(this, state);
            state.isFocusable = false;
        };
        return DThemeWhiteDiagramCanvas;
    }(DThemeWhiteDiagramCanvasBase));

    var EThemeWhiteShapePointsFormatter = /** @class */ (function () {
        function EThemeWhiteShapePointsFormatter() {
        }
        return EThemeWhiteShapePointsFormatter;
    }());

    var EThemeWhiteJaJpShapePointsFormatter = /** @class */ (function (_super) {
        __extends(EThemeWhiteJaJpShapePointsFormatter, _super);
        function EThemeWhiteJaJpShapePointsFormatter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EThemeWhiteJaJpShapePointsFormatter.prototype.getCurveSplineLabel = function () {
            return "スプライン曲線";
        };
        EThemeWhiteJaJpShapePointsFormatter.prototype.getCurveBezierQuadraticLabel = function () {
            return "２次ベジェ曲線";
        };
        return EThemeWhiteJaJpShapePointsFormatter;
    }(EThemeWhiteShapePointsFormatter));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteJaJpShapePointsFormatter = function () {
        DThemeWhite.set("EShapePointsFormatter", EThemeWhiteJaJpShapePointsFormatter);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteJaJpDiagram = function () {
        DThemeWhite.set("DDiagram", DThemeWhiteDiagram);
        DThemeWhite.set("DDiagramCanvas", DThemeWhiteDiagramCanvas);
        loadThemeWhiteJaJpShapePointsFormatter();
        loadThemeWhiteShape();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var toGridScale = function (scale) {
        if (scale <= 0 || 1 <= scale) {
            return 1;
        }
        var s = 1 / scale;
        s = s | (s >> 1);
        s = s | (s >> 2);
        s = s | (s >> 4);
        s = s | (s >> 8);
        s = s | (s >> 16);
        s = s | (s >> 32);
        return s - (s >> 1);
    };
    var toGridSize = function (grid, width, height, scale) {
        var canvas = Math.max(width, height);
        if (0 < grid) {
            grid *= toGridScale(scale);
            var minimum = canvas / 1000;
            for (var i = 0; i < 10 && grid < minimum; ++i) {
                grid *= 10;
            }
            if (minimum <= grid) {
                return grid;
            }
        }
        return canvas;
    };
    var DThemeWhiteDiagramCanvasEditor = /** @class */ (function (_super) {
        __extends(DThemeWhiteDiagramCanvasEditor, _super);
        function DThemeWhiteDiagramCanvasEditor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteDiagramCanvasEditor.prototype.isAmbient = function () {
            return false;
        };
        DThemeWhiteDiagramCanvasEditor.prototype.getLocalBoundsLimit = function () {
            return 1000;
        };
        DThemeWhiteDiagramCanvasEditor.prototype.getOutlineColor = function (state) {
            return null;
        };
        DThemeWhiteDiagramCanvasEditor.prototype.getSnapGridMajorInterval = function () {
            return 10;
        };
        DThemeWhiteDiagramCanvasEditor.prototype.getSnapGridMajorColor = function () {
            return 0x999999;
        };
        DThemeWhiteDiagramCanvasEditor.prototype.getSnapGridMajorAlpha = function () {
            return 0.5;
        };
        DThemeWhiteDiagramCanvasEditor.prototype.getSnapGridMajorWidth = function () {
            var _a;
            return Math.max(1, 2 / ((_a = window.devicePixelRatio) !== null && _a !== void 0 ? _a : 1));
        };
        DThemeWhiteDiagramCanvasEditor.prototype.getSnapGridMajorStyle = function () {
            return EShapeStrokeStyle.DASHED | EShapeStrokeStyle.NON_SCALING;
        };
        DThemeWhiteDiagramCanvasEditor.prototype.getSnapGridMinorColor = function () {
            return this.getSnapGridMajorColor();
        };
        DThemeWhiteDiagramCanvasEditor.prototype.getSnapGridMinorAlpha = function () {
            return 0.125;
        };
        DThemeWhiteDiagramCanvasEditor.prototype.getSnapGridMinorWidth = function () {
            return this.getSnapGridMajorWidth();
        };
        DThemeWhiteDiagramCanvasEditor.prototype.getSnapGridMinorStyle = function () {
            return this.getSnapGridMajorStyle();
        };
        DThemeWhiteDiagramCanvasEditor.prototype.getSnapGridSize = function () {
            return toGridSize;
        };
        DThemeWhiteDiagramCanvasEditor.prototype.getSnapTargetColor = function () {
            return DThemeWhiteConstants.HIGHLIGHT_COLOR;
        };
        DThemeWhiteDiagramCanvasEditor.prototype.getSnapTargetAlpha = function () {
            return 1.0;
        };
        DThemeWhiteDiagramCanvasEditor.prototype.getSnapTargetWidth = function () {
            return this.getSnapGridMajorWidth();
        };
        DThemeWhiteDiagramCanvasEditor.prototype.getSnapTargetStyle = function () {
            return this.getSnapGridMajorStyle();
        };
        return DThemeWhiteDiagramCanvasEditor;
    }(DThemeWhiteDiagramCanvasBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteDiagramEditor = /** @class */ (function (_super) {
        __extends(DThemeWhiteDiagramEditor, _super);
        function DThemeWhiteDiagramEditor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteDiagramEditor.prototype.isAmbient = function () {
            return false;
        };
        DThemeWhiteDiagramEditor.prototype.isThumbnailEnabled = function () {
            return false;
        };
        DThemeWhiteDiagramEditor.prototype.getThumbnailSize = function () {
            return null;
        };
        DThemeWhiteDiagramEditor.prototype.isSnapEnabled = function () {
            return true;
        };
        DThemeWhiteDiagramEditor.prototype.isSnapGridVisible = function () {
            return true;
        };
        DThemeWhiteDiagramEditor.prototype.isSnapGridEnabled = function () {
            return true;
        };
        DThemeWhiteDiagramEditor.prototype.getSnapGridSize = function () {
            return 10;
        };
        DThemeWhiteDiagramEditor.prototype.isSnapTargetVisible = function () {
            return true;
        };
        DThemeWhiteDiagramEditor.prototype.isSnapTargetEnabled = function () {
            return true;
        };
        return DThemeWhiteDiagramEditor;
    }(DThemeWhiteDiagramBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteJaJpDiagramEditor = /** @class */ (function (_super) {
        __extends(DThemeWhiteJaJpDiagramEditor, _super);
        function DThemeWhiteJaJpDiagramEditor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteJaJpDiagramEditor.prototype.getBaseLayerLabel = function () {
            return "ベースレイヤー";
        };
        return DThemeWhiteJaJpDiagramEditor;
    }(DThemeWhiteDiagramEditor));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteJaJpDiagramEditor = function () {
        DThemeWhite.set("DDiagramEditor", DThemeWhiteJaJpDiagramEditor);
        DThemeWhite.set("DDiagramCanvasEditor", DThemeWhiteDiagramCanvasEditor);
        loadThemeWhiteShapeActionValue();
        loadThemeWhiteJaJpShapePointsFormatter();
        loadThemeWhiteShape();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteDialogLayeredHeader = /** @class */ (function (_super) {
        __extends(DThemeWhiteDialogLayeredHeader, _super);
        function DThemeWhiteDialogLayeredHeader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteDialogLayeredHeader.prototype.getWidth = function () {
            return "padding";
        };
        DThemeWhiteDialogLayeredHeader.prototype.getHeight = function () {
            return 38;
        };
        DThemeWhiteDialogLayeredHeader.prototype.getPaddingLeft = function () {
            return 16;
        };
        DThemeWhiteDialogLayeredHeader.prototype.getPaddingRight = function () {
            return 16;
        };
        DThemeWhiteDialogLayeredHeader.prototype.getBackgroundColor = function (state) {
            return null;
        };
        DThemeWhiteDialogLayeredHeader.prototype.getCornerMask = function () {
            return DCornerMask.BOTTOM;
        };
        DThemeWhiteDialogLayeredHeader.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeWhiteDialogLayeredHeader.prototype.getInteractive = function () {
            return DBaseInteractive.CHILDREN;
        };
        DThemeWhiteDialogLayeredHeader.prototype.newState = function (state) {
            state.isFocusable = false;
        };
        return DThemeWhiteDialogLayeredHeader;
    }(DThemeWhiteImageBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("dialog_layered_header_button_close", 20, 14, "<g>" +
        "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"15 2 5 12\"></polyline>" +
        "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"5 2 15 12\"></polyline>" +
        "</g>");
    /* eslint-enable prettier/prettier */
    var X = function (p, s) {
        return p - 34;
    };
    var DThemeWhiteDialogLayeredHeaderButtonClose = /** @class */ (function (_super) {
        __extends(DThemeWhiteDialogLayeredHeaderButtonClose, _super);
        function DThemeWhiteDialogLayeredHeaderButtonClose() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteDialogLayeredHeaderButtonClose.prototype.getX = function () {
            return X;
        };
        DThemeWhiteDialogLayeredHeaderButtonClose.prototype.getY = function () {
            return "center";
        };
        DThemeWhiteDialogLayeredHeaderButtonClose.prototype.getWidth = function () {
            return 30;
        };
        DThemeWhiteDialogLayeredHeaderButtonClose.prototype.getHeight = function () {
            return 30;
        };
        DThemeWhiteDialogLayeredHeaderButtonClose.prototype.getSecondaryImageAlignHorizontal = function () {
            return DAlignHorizontal.CENTER;
        };
        DThemeWhiteDialogLayeredHeaderButtonClose.prototype.getSecondaryImageAlignVertical = function () {
            return DAlignVertical.MIDDLE;
        };
        DThemeWhiteDialogLayeredHeaderButtonClose.prototype.getSecondaryImageAlignWith = function () {
            return DAlignWith.PADDING;
        };
        DThemeWhiteDialogLayeredHeaderButtonClose.prototype.getSecondaryImageSource = function (state) {
            return DThemeWhiteAtlas.mappings.dialog_layered_header_button_close;
        };
        return DThemeWhiteDialogLayeredHeaderButtonClose;
    }(DThemeWhiteButtonAmbient));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var y = function (p) {
        return p - 1;
    };
    var width = function (p) {
        return p - 16;
    };
    var DThemeWhiteDialogLayeredHeaderSeparator = /** @class */ (function (_super) {
        __extends(DThemeWhiteDialogLayeredHeaderSeparator, _super);
        function DThemeWhiteDialogLayeredHeaderSeparator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteDialogLayeredHeaderSeparator.prototype.getX = function () {
            return 8;
        };
        DThemeWhiteDialogLayeredHeaderSeparator.prototype.getY = function () {
            return y;
        };
        DThemeWhiteDialogLayeredHeaderSeparator.prototype.getWidth = function () {
            return width;
        };
        DThemeWhiteDialogLayeredHeaderSeparator.prototype.getHeight = function () {
            return 1;
        };
        DThemeWhiteDialogLayeredHeaderSeparator.prototype.getBackgroundColor = function (state) {
            return DThemeWhiteConstants.BORDER_COLOR;
        };
        DThemeWhiteDialogLayeredHeaderSeparator.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeWhiteDialogLayeredHeaderSeparator.prototype.getInteractive = function () {
            return DBaseInteractive.NONE;
        };
        DThemeWhiteDialogLayeredHeaderSeparator.prototype.newState = function (state) {
            state.isFocusable = false;
        };
        return DThemeWhiteDialogLayeredHeaderSeparator;
    }(DThemeWhiteImageBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteDialogLayeredFooter = /** @class */ (function (_super) {
        __extends(DThemeWhiteDialogLayeredFooter, _super);
        function DThemeWhiteDialogLayeredFooter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteDialogLayeredFooter.prototype.isButtonSpaceLeftEnabled = function () {
            return true;
        };
        DThemeWhiteDialogLayeredFooter.prototype.isButtonSpaceRightEnabled = function () {
            return true;
        };
        DThemeWhiteDialogLayeredFooter.prototype.getX = function () {
            return "padding";
        };
        DThemeWhiteDialogLayeredFooter.prototype.getY = function () {
            return "padding";
        };
        DThemeWhiteDialogLayeredFooter.prototype.getWidth = function () {
            return "padding";
        };
        DThemeWhiteDialogLayeredFooter.prototype.getHeight = function () {
            return "auto";
        };
        DThemeWhiteDialogLayeredFooter.prototype.getPaddingTop = function () {
            return 0;
        };
        DThemeWhiteDialogLayeredFooter.prototype.getPaddingRight = function () {
            return 16;
        };
        DThemeWhiteDialogLayeredFooter.prototype.getPaddingBottom = function () {
            return 16;
        };
        DThemeWhiteDialogLayeredFooter.prototype.getPaddingLeft = function () {
            return 16;
        };
        return DThemeWhiteDialogLayeredFooter;
    }(DThemeWhiteLayoutHorizontal));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteJaJpDialogLayeredFooter = /** @class */ (function (_super) {
        __extends(DThemeWhiteJaJpDialogLayeredFooter, _super);
        function DThemeWhiteJaJpDialogLayeredFooter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteJaJpDialogLayeredFooter.prototype.getButtonOk = function () {
            return "OK";
        };
        DThemeWhiteJaJpDialogLayeredFooter.prototype.getButtonCancel = function () {
            return "キャンセル";
        };
        return DThemeWhiteJaJpDialogLayeredFooter;
    }(DThemeWhiteDialogLayeredFooter));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteJaJpDialogLayered = function () {
        DThemeWhite.set("DDialogLayeredContent", DThemeWhiteDialogLayeredContent);
        DThemeWhite.set("DDialogLayeredFooter", DThemeWhiteJaJpDialogLayeredFooter);
        DThemeWhite.set("DDialogLayeredHeaderButtonClose", DThemeWhiteDialogLayeredHeaderButtonClose);
        DThemeWhite.set("DDialogLayeredHeaderSeparator", DThemeWhiteDialogLayeredHeaderSeparator);
        DThemeWhite.set("DDialogLayeredHeader", DThemeWhiteDialogLayeredHeader);
        DThemeWhite.set("DDialogLayered", DThemeWhiteDialogLayered);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteDialogConfirmMessage = /** @class */ (function (_super) {
        __extends(DThemeWhiteDialogConfirmMessage, _super);
        function DThemeWhiteDialogConfirmMessage() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteDialogConfirmMessage.prototype.getWidth = function () {
            return "padding";
        };
        DThemeWhiteDialogConfirmMessage.prototype.getHeight = function () {
            return "auto";
        };
        DThemeWhiteDialogConfirmMessage.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.CENTER;
        };
        DThemeWhiteDialogConfirmMessage.prototype.newState = function (state) {
            _super.prototype.newState.call(this, state);
            state.isFocusable = false;
        };
        return DThemeWhiteDialogConfirmMessage;
    }(DThemeWhiteImage));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteDialogConfirm = /** @class */ (function (_super) {
        __extends(DThemeWhiteDialogConfirm, _super);
        function DThemeWhiteDialogConfirm() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteDialogConfirm.prototype.getMessage = function () {
            return "";
        };
        return DThemeWhiteDialogConfirm;
    }(DThemeWhiteDialogLayered));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteJaJpDialogConfirm = /** @class */ (function (_super) {
        __extends(DThemeWhiteJaJpDialogConfirm, _super);
        function DThemeWhiteJaJpDialogConfirm() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteJaJpDialogConfirm.prototype.getFooter = function () {
            return {
                button: {
                    ok: "はい",
                    cancel: "いいえ"
                }
            };
        };
        return DThemeWhiteJaJpDialogConfirm;
    }(DThemeWhiteDialogConfirm));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteJaJpDialogConfirm = function () {
        DThemeWhite.set("DDialogConfirm", DThemeWhiteJaJpDialogConfirm);
        DThemeWhite.set("DDialogConfirmMessage", DThemeWhiteDialogConfirmMessage);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteJaJpDialogConfirmDelete = /** @class */ (function (_super) {
        __extends(DThemeWhiteJaJpDialogConfirmDelete, _super);
        function DThemeWhiteJaJpDialogConfirmDelete() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteJaJpDialogConfirmDelete.prototype.getMessage = function () {
            return "このデータを削除しますか？";
        };
        return DThemeWhiteJaJpDialogConfirmDelete;
    }(DThemeWhiteJaJpDialogConfirm));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteJaJpDialogConfirmDelete = function () {
        DThemeWhite.set("DDialogConfirmDelete", DThemeWhiteJaJpDialogConfirmDelete);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteJaJpDialogConfirmDiscard = /** @class */ (function (_super) {
        __extends(DThemeWhiteJaJpDialogConfirmDiscard, _super);
        function DThemeWhiteJaJpDialogConfirmDiscard() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteJaJpDialogConfirmDiscard.prototype.getMessage = function () {
            return "保存されていない変更があります。\nこれらの変更を破棄し続行しますか？";
        };
        return DThemeWhiteJaJpDialogConfirmDiscard;
    }(DThemeWhiteJaJpDialogConfirm));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteJaJpDialogConfirmDiscard = function () {
        DThemeWhite.set("DDialogConfirmDiscard", DThemeWhiteJaJpDialogConfirmDiscard);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteDialogMessage = /** @class */ (function (_super) {
        __extends(DThemeWhiteDialogMessage, _super);
        function DThemeWhiteDialogMessage() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteDialogMessage;
    }(DThemeWhiteDialogConfirm));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteJaJpDialogMessage = /** @class */ (function (_super) {
        __extends(DThemeWhiteJaJpDialogMessage, _super);
        function DThemeWhiteJaJpDialogMessage() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteJaJpDialogMessage.prototype.getFooter = function () {
            return {
                button: {
                    ok: "OK",
                    cancel: null
                }
            };
        };
        return DThemeWhiteJaJpDialogMessage;
    }(DThemeWhiteDialogMessage));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteJaJpDialogMessage = function () {
        DThemeWhite.set("DDialogMessage", DThemeWhiteJaJpDialogMessage);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    // Material Design icons by Google.
    // Apache license version 2.0.
    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("success_mark", 21, 21, "<g transform=\"scale(0.875,0.875)\">" +
        "<path d=\"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z\" fill=\"#fff\" />" +
        "</g>");
    /* eslint-enable prettier/prettier */
    var DThemeWhiteDialogProcessingMessage = /** @class */ (function (_super) {
        __extends(DThemeWhiteDialogProcessingMessage, _super);
        function DThemeWhiteDialogProcessingMessage() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteDialogProcessingMessage.prototype.getHeight = function () {
            return 90;
        };
        DThemeWhiteDialogProcessingMessage.prototype.getImageSource = function (state) {
            if (state.isSucceeded) {
                return DThemeWhiteAtlas.mappings.success_mark;
            }
            return null;
        };
        DThemeWhiteDialogProcessingMessage.prototype.getImageTintAlpha = function (state) {
            return 0.75;
        };
        return DThemeWhiteDialogProcessingMessage;
    }(DThemeWhiteDialogConfirmMessage));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteDialogProcessing = /** @class */ (function (_super) {
        __extends(DThemeWhiteDialogProcessing, _super);
        function DThemeWhiteDialogProcessing() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteDialogProcessing.prototype.getDoneDelay = function () {
            return 400;
        };
        DThemeWhiteDialogProcessing.prototype.getCloseDelay = function () {
            return 600;
        };
        return DThemeWhiteDialogProcessing;
    }(DThemeWhiteDialogConfirm));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var dThemeWhiteJaJpDialogProcessingMessage = function (state) {
        if (state.isSucceeded) {
            return "正常に処理されました";
        }
        else if (state.isFailed) {
            return "処理中に問題が発生しました";
        }
        else {
            return "処理中です...";
        }
    };
    var DThemeWhiteJaJpDialogProcessing = /** @class */ (function (_super) {
        __extends(DThemeWhiteJaJpDialogProcessing, _super);
        function DThemeWhiteJaJpDialogProcessing() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteJaJpDialogProcessing.prototype.getFooter = function () {
            return {
                button: {
                    ok: "OK",
                    cancel: null
                }
            };
        };
        DThemeWhiteJaJpDialogProcessing.prototype.getMessage = function () {
            return dThemeWhiteJaJpDialogProcessingMessage;
        };
        return DThemeWhiteJaJpDialogProcessing;
    }(DThemeWhiteDialogProcessing));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteJaJpDialogProcessing = function () {
        DThemeWhite.set("DDialogProcessing", DThemeWhiteJaJpDialogProcessing);
        DThemeWhite.set("DDialogProcessingMessage", DThemeWhiteDialogProcessingMessage);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteDialogSaveAs = /** @class */ (function (_super) {
        __extends(DThemeWhiteDialogSaveAs, _super);
        function DThemeWhiteDialogSaveAs() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteDialogSaveAs;
    }(DThemeWhiteDialogInputText));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteJaJpDialogSaveAs = /** @class */ (function (_super) {
        __extends(DThemeWhiteJaJpDialogSaveAs, _super);
        function DThemeWhiteJaJpDialogSaveAs() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteJaJpDialogSaveAs.prototype.getFooter = function () {
            return {
                button: {
                    ok: "保存",
                    cancel: null
                }
            };
        };
        return DThemeWhiteJaJpDialogSaveAs;
    }(DThemeWhiteDialogSaveAs));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteJaJpDialogSaveAs = function () {
        DThemeWhite.set("DDialogSaveAs", DThemeWhiteJaJpDialogSaveAs);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteJaJpDialogAll = function () {
        loadThemeWhiteJaJpDialogColorGradient();
        loadThemeWhiteJaJpDialogColor();
        loadThemeWhiteJaJpDialogConfirmDelete();
        loadThemeWhiteJaJpDialogConfirmDiscard();
        loadThemeWhiteJaJpDialogConfirm();
        loadThemeWhiteJaJpDialogDate();
        loadThemeWhiteJaJpDialogDatetime();
        loadThemeWhiteDialogFitted();
        loadThemeWhiteDialogInputBoolean();
        loadThemeWhiteDialogInputInteger();
        loadThemeWhiteDialogInputReal();
        loadThemeWhiteDialogInputText();
        loadThemeWhiteJaJpDialogLayered();
        loadThemeWhiteJaJpDialogMessage();
        loadThemeWhiteJaJpDialogProcessing();
        loadThemeWhiteJaJpDialogSaveAs();
        loadThemeWhiteJaJpDialogSelect();
        loadThemeWhiteJaJpDialogTime();
        loadThemeWhiteDialog();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteInputBoolean = /** @class */ (function (_super) {
        __extends(DThemeWhiteInputBoolean, _super);
        function DThemeWhiteInputBoolean() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteInputBoolean.prototype.getCornerAdjust = function () {
            return true;
        };
        DThemeWhiteInputBoolean.prototype.getMargin = function () {
            return 0;
        };
        return DThemeWhiteInputBoolean;
    }(DThemeWhiteLayoutHorizontal));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteInputBooleanButtonOff = /** @class */ (function (_super) {
        __extends(DThemeWhiteInputBooleanButtonOff, _super);
        function DThemeWhiteInputBooleanButtonOff() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteInputBooleanButtonOff.prototype.isToggle = function () {
            return true;
        };
        return DThemeWhiteInputBooleanButtonOff;
    }(DThemeWhiteButton));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteJaJpInputBooleanButtonOff = /** @class */ (function (_super) {
        __extends(DThemeWhiteJaJpInputBooleanButtonOff, _super);
        function DThemeWhiteJaJpInputBooleanButtonOff() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteJaJpInputBooleanButtonOff.prototype.newTextValue = function () {
            return "OFF";
        };
        return DThemeWhiteJaJpInputBooleanButtonOff;
    }(DThemeWhiteInputBooleanButtonOff));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteInputBooleanButtonOn = /** @class */ (function (_super) {
        __extends(DThemeWhiteInputBooleanButtonOn, _super);
        function DThemeWhiteInputBooleanButtonOn() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteInputBooleanButtonOn.prototype.isToggle = function () {
            return true;
        };
        return DThemeWhiteInputBooleanButtonOn;
    }(DThemeWhiteButton));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteJaJpInputBooleanButtonOn = /** @class */ (function (_super) {
        __extends(DThemeWhiteJaJpInputBooleanButtonOn, _super);
        function DThemeWhiteJaJpInputBooleanButtonOn() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteJaJpInputBooleanButtonOn.prototype.newTextValue = function () {
            return "ON";
        };
        return DThemeWhiteJaJpInputBooleanButtonOn;
    }(DThemeWhiteInputBooleanButtonOn));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteJaJpInputBoolean = function () {
        DThemeWhite.set("DInputBoolean", DThemeWhiteInputBoolean);
        DThemeWhite.set("DInputBooleanButtonOn", DThemeWhiteJaJpInputBooleanButtonOn);
        DThemeWhite.set("DInputBooleanButtonOff", DThemeWhiteJaJpInputBooleanButtonOff);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteJaJpInputAll = function () {
        loadThemeWhiteInputAndLabel();
        loadThemeWhiteJaJpInputBoolean();
        loadThemeWhiteInputInteger();
        loadThemeWhiteInputLabel();
        loadThemeWhiteInputReal();
        loadThemeWhiteInputSearch();
        loadThemeWhiteInputTextArea();
        loadThemeWhiteInputText();
    };

    const DLinkMenuItemId = wcardinal.ui.DLinkMenuItemId;

    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("link_mark", 24, 24, "<g>" +
        "<path fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" " +
        "d=\"M10 6H7c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2v-3 M19 11V4h-7 M18.75 4.5l-8 8\" />" +
        "</g>");
    /* eslint-enable prettier/prettier */
    var DThemeWhiteLink = /** @class */ (function () {
        function DThemeWhiteLink() {
        }
        DThemeWhiteLink.prototype.getImageSource = function (state) {
            return DThemeWhiteAtlas.mappings.link_mark;
        };
        DThemeWhiteLink.prototype.getMenuOptions = function () {
            return {
                sticky: true,
                align: "RIGHT",
                items: [
                    {
                        value: DLinkMenuItemId.OPEN_LINK,
                        text: {
                            value: this.getLabelOpenLink()
                        }
                    },
                    {
                        value: DLinkMenuItemId.OPEN_LINK_IN_NEW_WINDOW,
                        text: {
                            value: this.getLabelOpenLinkInNewWindow()
                        }
                    },
                    {
                        value: DLinkMenuItemId.COPY_LINK_ADDRESS,
                        text: {
                            value: this.getLabelCopyLinkAddress()
                        }
                    }
                ]
            };
        };
        return DThemeWhiteLink;
    }());

    var DThemeWhiteJaJpLink = /** @class */ (function (_super) {
        __extends(DThemeWhiteJaJpLink, _super);
        function DThemeWhiteJaJpLink() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteJaJpLink.prototype.getLabelOpenLink = function () {
            return "開く";
        };
        DThemeWhiteJaJpLink.prototype.getLabelOpenLinkInNewWindow = function () {
            return "新しいウィンドウで開く";
        };
        DThemeWhiteJaJpLink.prototype.getLabelCopyLinkAddress = function () {
            return "アドレスをコピーする";
        };
        return DThemeWhiteJaJpLink;
    }(DThemeWhiteLink));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteJaJpLink = function () {
        DThemeWhite.set("DLink", DThemeWhiteJaJpLink);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteNote = /** @class */ (function (_super) {
        __extends(DThemeWhiteNote, _super);
        function DThemeWhiteNote() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteNote.prototype.getWidth = function () {
            return "100%";
        };
        DThemeWhiteNote.prototype.getHeight = function () {
            return "100%";
        };
        DThemeWhiteNote.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.CENTER;
        };
        DThemeWhiteNote.prototype.getInteractive = function () {
            return DBaseInteractive.NONE;
        };
        DThemeWhiteNote.prototype.getAlpha = function () {
            return 0.2;
        };
        DThemeWhiteNote.prototype.getFontSize = function () {
            return 26;
        };
        DThemeWhiteNote.prototype.getFontWeight = function () {
            return "bold";
        };
        DThemeWhiteNote.prototype.getImageTintAlpha = function (state) {
            return 0.2;
        };
        DThemeWhiteNote.prototype.getImageAlignWith = function () {
            return DAlignWith.TEXT;
        };
        DThemeWhiteNote.prototype.getImageAlignHorizontal = function () {
            return DAlignHorizontal.LEFT;
        };
        DThemeWhiteNote.prototype.getImageAlignVertical = function () {
            return DAlignVertical.MIDDLE;
        };
        DThemeWhiteNote.prototype.newState = function (state) {
            _super.prototype.newState.call(this, state);
            state.isFocusable = false;
        };
        return DThemeWhiteNote;
    }(DThemeWhiteImageBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteNoteError = /** @class */ (function (_super) {
        __extends(DThemeWhiteNoteError, _super);
        function DThemeWhiteNoteError() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteNoteError;
    }(DThemeWhiteNote));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteJaJpNoteError = /** @class */ (function (_super) {
        __extends(DThemeWhiteJaJpNoteError, _super);
        function DThemeWhiteJaJpNoteError() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteJaJpNoteError.prototype.newTextValue = function () {
            return "異常が発生しました";
        };
        return DThemeWhiteJaJpNoteError;
    }(DThemeWhiteNoteError));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteNoteNoItemsFound = /** @class */ (function (_super) {
        __extends(DThemeWhiteNoteNoItemsFound, _super);
        function DThemeWhiteNoteNoItemsFound() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteNoteNoItemsFound;
    }(DThemeWhiteNote));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteJaJpNoteNoItemsFound = /** @class */ (function (_super) {
        __extends(DThemeWhiteJaJpNoteNoItemsFound, _super);
        function DThemeWhiteJaJpNoteNoItemsFound() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteJaJpNoteNoItemsFound.prototype.newTextValue = function () {
            return "アイテムはありません";
        };
        return DThemeWhiteJaJpNoteNoItemsFound;
    }(DThemeWhiteNoteNoItemsFound));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteNoteSearching = /** @class */ (function (_super) {
        __extends(DThemeWhiteNoteSearching, _super);
        function DThemeWhiteNoteSearching() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteNoteSearching;
    }(DThemeWhiteNote));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteJaJpNoteSearching = /** @class */ (function (_super) {
        __extends(DThemeWhiteJaJpNoteSearching, _super);
        function DThemeWhiteJaJpNoteSearching() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteJaJpNoteSearching.prototype.newTextValue = function () {
            return "検索中です";
        };
        return DThemeWhiteJaJpNoteSearching;
    }(DThemeWhiteNoteSearching));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteNoteSmall = /** @class */ (function (_super) {
        __extends(DThemeWhiteNoteSmall, _super);
        function DThemeWhiteNoteSmall() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteNoteSmall.prototype.getFontSize = function () {
            return 18;
        };
        return DThemeWhiteNoteSmall;
    }(DThemeWhiteNote));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteNoteSmallError = /** @class */ (function (_super) {
        __extends(DThemeWhiteNoteSmallError, _super);
        function DThemeWhiteNoteSmallError() {
            var _this = _super.call(this) || this;
            _this._note = DThemes.get("DNoteError");
            return _this;
        }
        DThemeWhiteNoteSmallError.prototype.newTextValue = function () {
            return this._note.newTextValue();
        };
        return DThemeWhiteNoteSmallError;
    }(DThemeWhiteNoteSmall));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteNoteSmallNoItemsFound = /** @class */ (function (_super) {
        __extends(DThemeWhiteNoteSmallNoItemsFound, _super);
        function DThemeWhiteNoteSmallNoItemsFound() {
            var _this = _super.call(this) || this;
            _this._note = DThemes.get("DNoteNoItemsFound");
            return _this;
        }
        DThemeWhiteNoteSmallNoItemsFound.prototype.newTextValue = function () {
            return this._note.newTextValue();
        };
        return DThemeWhiteNoteSmallNoItemsFound;
    }(DThemeWhiteNoteSmall));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteNoteSmallSearching = /** @class */ (function (_super) {
        __extends(DThemeWhiteNoteSmallSearching, _super);
        function DThemeWhiteNoteSmallSearching() {
            var _this = _super.call(this) || this;
            _this._note = DThemes.get("DNoteSearching");
            return _this;
        }
        DThemeWhiteNoteSmallSearching.prototype.newTextValue = function () {
            return this._note.newTextValue();
        };
        return DThemeWhiteNoteSmallSearching;
    }(DThemeWhiteNoteSmall));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteJaJpNote = function () {
        DThemeWhite.set("DNote", DThemeWhiteNote);
        DThemeWhite.set("DNoteError", DThemeWhiteJaJpNoteError);
        DThemeWhite.set("DNoteNoItemsFound", DThemeWhiteJaJpNoteNoItemsFound);
        DThemeWhite.set("DNoteSearching", DThemeWhiteJaJpNoteSearching);
        DThemeWhite.set("DNoteSmallError", DThemeWhiteNoteSmallError);
        DThemeWhite.set("DNoteSmallNoItemsFound", DThemeWhiteNoteSmallNoItemsFound);
        DThemeWhite.set("DNoteSmallSearching", DThemeWhiteNoteSmallSearching);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteTable = /** @class */ (function (_super) {
        __extends(DThemeWhiteTable, _super);
        function DThemeWhiteTable() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteTable.prototype.getBackgroundColor = function () {
            return DThemeWhiteConstants.BACKGROUND_COLOR;
        };
        DThemeWhiteTable.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeWhiteTable.prototype.getMargin = function () {
            return 0;
        };
        DThemeWhiteTable.prototype.getInteractive = function () {
            return DBaseInteractive.BOTH;
        };
        return DThemeWhiteTable;
    }(DThemeWhitePane));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteTableBody = /** @class */ (function (_super) {
        __extends(DThemeWhiteTableBody, _super);
        function DThemeWhiteTableBody() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteTableBody.prototype.getWidth = function () {
            return "100%";
        };
        DThemeWhiteTableBody.prototype.getCornerMask = function () {
            return DCornerMask.TOP;
        };
        DThemeWhiteTableBody.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeWhiteTableBody.prototype.getRowHeight = function () {
            return 30;
        };
        DThemeWhiteTableBody.prototype.getInteractive = function () {
            return DBaseInteractive.BOTH;
        };
        DThemeWhiteTableBody.prototype.newState = function (state) {
            _super.prototype.newState.call(this, state);
            state.isFocusable = false;
        };
        return DThemeWhiteTableBody;
    }(DThemeWhiteBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteTableBodyCells = /** @class */ (function () {
        function DThemeWhiteTableBodyCells() {
        }
        DThemeWhiteTableBodyCells.getBackgroundColor = function (state) {
            if (state.inDisabled) {
                if (state.is(DTableState.FROZEN)) {
                    return state.onAlternated
                        ? this.BACKGROUND_COLOR_FROZEN_ODD
                        : this.BACKGROUND_COLOR_FROZEN_EVEN;
                }
                else {
                    return null;
                }
            }
            else if (state.isInvalid) {
                return DThemeWhiteConstants.INVALID_BLENDED_ON_BOARD;
            }
            else if (state.underActive) {
                return DThemeWhiteConstants.HIGHLIGHT_BLENDED_ON_BOARD;
            }
            else if (state.onHovered || state.isHovered) {
                return DThemeWhiteConstants.WEAK_HIGHLIGHT_BLENDED_ON_BOARD;
            }
            else {
                if (state.is(DTableState.FROZEN)) {
                    return state.onAlternated
                        ? this.BACKGROUND_COLOR_FROZEN_ODD
                        : this.BACKGROUND_COLOR_FROZEN_EVEN;
                }
                else {
                    return null;
                }
            }
        };
        DThemeWhiteTableBodyCells.getBackgroundAlpha = function (state) {
            return 1;
        };
        DThemeWhiteTableBodyCells.getBorderColor = function (state) {
            if (state.is(DTableState.FROZEN_END)) {
                return this.BORDER_COLOR_FROZEN;
            }
            return this.BORDER_COLOR;
        };
        DThemeWhiteTableBodyCells.getBorderMask = function (state) {
            if (state.is(DTableState.END)) {
                return DBorderMask.ALL;
            }
            else {
                return DBorderMask.NOT_RIGHT;
            }
        };
        DThemeWhiteTableBodyCells.getColor = function (state) {
            return DThemeWhiteConstants.COLOR;
        };
        DThemeWhiteTableBodyCells.getAlpha = function (state) {
            if (state.inEnabled) {
                return 1.0;
            }
            return 0;
        };
        DThemeWhiteTableBodyCells.getImageTintColor = function (state, isActive) {
            if (state.inDisabled || state.inReadOnly || !(state.isActive || isActive)) {
                return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
            }
            else {
                return DThemeWhiteConstants.HIGHLIGHT_COLOR;
            }
        };
        DThemeWhiteTableBodyCells.getHeight = function () {
            return "padding";
        };
        DThemeWhiteTableBodyCells.getCornerMask = function () {
            return DCornerMask.ALL;
        };
        var _a;
        _a = DThemeWhiteTableBodyCells;
        DThemeWhiteTableBodyCells.BACKGROUND_COLOR = DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD;
        DThemeWhiteTableBodyCells.BACKGROUND_COLOR_FROZEN_EVEN = UtilRgb.darken(_a.BACKGROUND_COLOR, 0.015);
        DThemeWhiteTableBodyCells.BACKGROUND_COLOR_FROZEN_ODD = UtilRgb.darken(_a.BACKGROUND_COLOR_FROZEN_EVEN, 0.015);
        DThemeWhiteTableBodyCells.BORDER_COLOR = UtilRgb.darken(_a.BACKGROUND_COLOR, 0.035);
        DThemeWhiteTableBodyCells.BORDER_COLOR_FROZEN = UtilRgb.darken(_a.BORDER_COLOR, 0.035);
        return DThemeWhiteTableBodyCells;
    }());

    var DThemeWhiteTableBodyCellActions = /** @class */ (function () {
        function DThemeWhiteTableBodyCellActions() {
        }
        DThemeWhiteTableBodyCellActions.init = function () {
            // Material Design icons by Google.
            // Apache license version 2.0.
            /* eslint-disable prettier/prettier */
            DThemeWhiteAtlas.add("action_mark", 21, 21, "<g transform=\"scale(0.875,0.875)\">" +
                "<path d=\"M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83" +
                " 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm" +
                "-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z\" fill=\"#fff\"/>" +
                "</g>");
            /* eslint-enable prettier/prettier */
        };
        DThemeWhiteTableBodyCellActions.getImageSource = function (state) {
            return DThemeWhiteAtlas.mappings.action_mark;
        };
        DThemeWhiteTableBodyCellActions.getImageTintColor = function (state) {
            return DThemeWhiteTableBodyCells.getImageTintColor(state, true);
        };
        return DThemeWhiteTableBodyCellActions;
    }());

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteTableBodyCellSelectDialog = /** @class */ (function (_super) {
        __extends(DThemeWhiteTableBodyCellSelectDialog, _super);
        function DThemeWhiteTableBodyCellSelectDialog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteTableBodyCellSelectDialog.prototype.getBackgroundColor = function (state) {
            return DThemeWhiteTableBodyCells.getBackgroundColor(state);
        };
        DThemeWhiteTableBodyCellSelectDialog.prototype.getBackgroundAlpha = function (state) {
            return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
        };
        DThemeWhiteTableBodyCellSelectDialog.prototype.getBorderColor = function (state) {
            return DThemeWhiteTableBodyCells.getBorderColor(state);
        };
        DThemeWhiteTableBodyCellSelectDialog.prototype.getBorderMask = function (state) {
            return DThemeWhiteTableBodyCells.getBorderMask(state);
        };
        DThemeWhiteTableBodyCellSelectDialog.prototype.getColor = function (state) {
            return DThemeWhiteTableBodyCells.getColor(state);
        };
        DThemeWhiteTableBodyCellSelectDialog.prototype.getAlpha = function (state) {
            return DThemeWhiteTableBodyCells.getAlpha(state);
        };
        DThemeWhiteTableBodyCellSelectDialog.prototype.getHeight = function () {
            return DThemeWhiteTableBodyCells.getHeight();
        };
        DThemeWhiteTableBodyCellSelectDialog.prototype.getCornerMask = function () {
            return DThemeWhiteTableBodyCells.getCornerMask();
        };
        DThemeWhiteTableBodyCellSelectDialog.prototype.isSyncEnabled = function () {
            return true;
        };
        DThemeWhiteTableBodyCellSelectDialog.prototype.newTextValue = function () {
            return null;
        };
        return DThemeWhiteTableBodyCellSelectDialog;
    }(DThemeWhiteButton));

    /*
     * Copyright (C) 2020 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    DThemeWhiteTableBodyCellActions.init();
    var DThemeWhiteTableBodyCellActionDialog = /** @class */ (function (_super) {
        __extends(DThemeWhiteTableBodyCellActionDialog, _super);
        function DThemeWhiteTableBodyCellActionDialog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteTableBodyCellActionDialog.prototype.getImageTintColor = function (state) {
            return DThemeWhiteTableBodyCellActions.getImageTintColor(state);
        };
        DThemeWhiteTableBodyCellActionDialog.prototype.getImageSource = function (state) {
            return DThemeWhiteTableBodyCellActions.getImageSource(state);
        };
        DThemeWhiteTableBodyCellActionDialog.prototype.isSyncEnabled = function () {
            return false;
        };
        return DThemeWhiteTableBodyCellActionDialog;
    }(DThemeWhiteTableBodyCellSelectDialog));

    /*
     * Copyright (C) 2020 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    DThemeWhiteTableBodyCellActions.init();
    var DThemeWhiteTableBodyCellActionMenu = /** @class */ (function (_super) {
        __extends(DThemeWhiteTableBodyCellActionMenu, _super);
        function DThemeWhiteTableBodyCellActionMenu() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteTableBodyCellActionMenu.prototype.getBackgroundColor = function (state) {
            return DThemeWhiteTableBodyCells.getBackgroundColor(state);
        };
        DThemeWhiteTableBodyCellActionMenu.prototype.getBackgroundAlpha = function (state) {
            return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
        };
        DThemeWhiteTableBodyCellActionMenu.prototype.getBorderColor = function (state) {
            return DThemeWhiteTableBodyCells.getBorderColor(state);
        };
        DThemeWhiteTableBodyCellActionMenu.prototype.getBorderMask = function (state) {
            return DThemeWhiteTableBodyCells.getBorderMask(state);
        };
        DThemeWhiteTableBodyCellActionMenu.prototype.getColor = function (state) {
            return DThemeWhiteTableBodyCells.getColor(state);
        };
        DThemeWhiteTableBodyCellActionMenu.prototype.getAlpha = function (state) {
            return DThemeWhiteTableBodyCells.getAlpha(state);
        };
        DThemeWhiteTableBodyCellActionMenu.prototype.getHeight = function () {
            return DThemeWhiteTableBodyCells.getHeight();
        };
        DThemeWhiteTableBodyCellActionMenu.prototype.getCornerMask = function () {
            return DThemeWhiteTableBodyCells.getCornerMask();
        };
        DThemeWhiteTableBodyCellActionMenu.prototype.getSecondaryImageSource = function (state) {
            return null;
        };
        DThemeWhiteTableBodyCellActionMenu.prototype.getPaddingLeft = function () {
            return 10;
        };
        DThemeWhiteTableBodyCellActionMenu.prototype.getPaddingRight = function () {
            return 10;
        };
        DThemeWhiteTableBodyCellActionMenu.prototype.getImageTintColor = function (state) {
            return DThemeWhiteTableBodyCellActions.getImageTintColor(state);
        };
        DThemeWhiteTableBodyCellActionMenu.prototype.getImageSource = function (state) {
            return DThemeWhiteTableBodyCellActions.getImageSource(state);
        };
        return DThemeWhiteTableBodyCellActionMenu;
    }(DThemeWhiteDropdown));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteTableBodyCellSelectPromise = /** @class */ (function (_super) {
        __extends(DThemeWhiteTableBodyCellSelectPromise, _super);
        function DThemeWhiteTableBodyCellSelectPromise() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteTableBodyCellSelectPromise.prototype.getBackgroundColor = function (state) {
            return DThemeWhiteTableBodyCells.getBackgroundColor(state);
        };
        DThemeWhiteTableBodyCellSelectPromise.prototype.getBackgroundAlpha = function (state) {
            return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
        };
        DThemeWhiteTableBodyCellSelectPromise.prototype.getBorderColor = function (state) {
            return DThemeWhiteTableBodyCells.getBorderColor(state);
        };
        DThemeWhiteTableBodyCellSelectPromise.prototype.getBorderMask = function (state) {
            return DThemeWhiteTableBodyCells.getBorderMask(state);
        };
        DThemeWhiteTableBodyCellSelectPromise.prototype.getColor = function (state) {
            return DThemeWhiteTableBodyCells.getColor(state);
        };
        DThemeWhiteTableBodyCellSelectPromise.prototype.getAlpha = function (state) {
            return DThemeWhiteTableBodyCells.getAlpha(state);
        };
        DThemeWhiteTableBodyCellSelectPromise.prototype.getHeight = function () {
            return DThemeWhiteTableBodyCells.getHeight();
        };
        DThemeWhiteTableBodyCellSelectPromise.prototype.getCornerMask = function () {
            return DThemeWhiteTableBodyCells.getCornerMask();
        };
        DThemeWhiteTableBodyCellSelectPromise.prototype.isSyncEnabled = function () {
            return true;
        };
        DThemeWhiteTableBodyCellSelectPromise.prototype.newTextValue = function () {
            return null;
        };
        return DThemeWhiteTableBodyCellSelectPromise;
    }(DThemeWhiteButton));

    /*
     * Copyright (C) 2020 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    DThemeWhiteTableBodyCellActions.init();
    var DThemeWhiteTableBodyCellActionPromise = /** @class */ (function (_super) {
        __extends(DThemeWhiteTableBodyCellActionPromise, _super);
        function DThemeWhiteTableBodyCellActionPromise() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteTableBodyCellActionPromise.prototype.getImageTintColor = function (state) {
            return DThemeWhiteTableBodyCellActions.getImageTintColor(state);
        };
        DThemeWhiteTableBodyCellActionPromise.prototype.getImageSource = function (state) {
            return DThemeWhiteTableBodyCellActions.getImageSource(state);
        };
        DThemeWhiteTableBodyCellActionPromise.prototype.isSyncEnabled = function () {
            return false;
        };
        return DThemeWhiteTableBodyCellActionPromise;
    }(DThemeWhiteTableBodyCellSelectPromise));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteTableBodyCellText = /** @class */ (function (_super) {
        __extends(DThemeWhiteTableBodyCellText, _super);
        function DThemeWhiteTableBodyCellText() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteTableBodyCellText.prototype.getBackgroundColor = function (state) {
            return DThemeWhiteTableBodyCells.getBackgroundColor(state);
        };
        DThemeWhiteTableBodyCellText.prototype.getBackgroundAlpha = function (state) {
            return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
        };
        DThemeWhiteTableBodyCellText.prototype.getBorderColor = function (state) {
            return DThemeWhiteTableBodyCells.getBorderColor(state);
        };
        DThemeWhiteTableBodyCellText.prototype.getBorderMask = function (state) {
            return DThemeWhiteTableBodyCells.getBorderMask(state);
        };
        DThemeWhiteTableBodyCellText.prototype.getColor = function (state) {
            return DThemeWhiteTableBodyCells.getColor(state);
        };
        DThemeWhiteTableBodyCellText.prototype.getAlpha = function (state) {
            return DThemeWhiteTableBodyCells.getAlpha(state);
        };
        DThemeWhiteTableBodyCellText.prototype.getHeight = function () {
            return DThemeWhiteTableBodyCells.getHeight();
        };
        DThemeWhiteTableBodyCellText.prototype.getCornerMask = function () {
            return DThemeWhiteTableBodyCells.getCornerMask();
        };
        DThemeWhiteTableBodyCellText.prototype.getImageTintColor = function (state) {
            return DThemeWhiteTableBodyCells.getImageTintColor(state);
        };
        DThemeWhiteTableBodyCellText.prototype.getPaddingLeft = function () {
            return 10;
        };
        DThemeWhiteTableBodyCellText.prototype.getPaddingRight = function () {
            return 10;
        };
        DThemeWhiteTableBodyCellText.prototype.newTextValue = function () {
            return undefined;
        };
        return DThemeWhiteTableBodyCellText;
    }(DThemeWhiteImageBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteTableBodyCellButton = /** @class */ (function (_super) {
        __extends(DThemeWhiteTableBodyCellButton, _super);
        function DThemeWhiteTableBodyCellButton() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteTableBodyCellButton.prototype.getCursor = function (state) {
            if (!state.isActionable) {
                return "";
            }
            return "pointer";
        };
        return DThemeWhiteTableBodyCellButton;
    }(DThemeWhiteTableBodyCellText));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteTableBodyCellCheck = /** @class */ (function (_super) {
        __extends(DThemeWhiteTableBodyCellCheck, _super);
        function DThemeWhiteTableBodyCellCheck() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteTableBodyCellCheck.prototype.getBackgroundColor = function (state) {
            return DThemeWhiteTableBodyCells.getBackgroundColor(state);
        };
        DThemeWhiteTableBodyCellCheck.prototype.getBackgroundAlpha = function (state) {
            return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
        };
        DThemeWhiteTableBodyCellCheck.prototype.getBorderColor = function (state) {
            return DThemeWhiteTableBodyCells.getBorderColor(state);
        };
        DThemeWhiteTableBodyCellCheck.prototype.getBorderMask = function (state) {
            return DThemeWhiteTableBodyCells.getBorderMask(state);
        };
        DThemeWhiteTableBodyCellCheck.prototype.getColor = function (state) {
            return DThemeWhiteTableBodyCells.getColor(state);
        };
        DThemeWhiteTableBodyCellCheck.prototype.getAlpha = function (state) {
            return DThemeWhiteTableBodyCells.getAlpha(state);
        };
        DThemeWhiteTableBodyCellCheck.prototype.getImageTintColor = function (state) {
            return DThemeWhiteTableBodyCells.getImageTintColor(state);
        };
        DThemeWhiteTableBodyCellCheck.prototype.getHeight = function () {
            return DThemeWhiteTableBodyCells.getHeight();
        };
        DThemeWhiteTableBodyCellCheck.prototype.getCornerMask = function () {
            return DThemeWhiteTableBodyCells.getCornerMask();
        };
        return DThemeWhiteTableBodyCellCheck;
    }(DThemeWhiteButtonCheck));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteTableBodyCellColor = /** @class */ (function (_super) {
        __extends(DThemeWhiteTableBodyCellColor, _super);
        function DThemeWhiteTableBodyCellColor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteTableBodyCellColor.prototype.getBackgroundColor = function (state) {
            return DThemeWhiteTableBodyCells.getBackgroundColor(state);
        };
        DThemeWhiteTableBodyCellColor.prototype.getBackgroundAlpha = function (state) {
            return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
        };
        DThemeWhiteTableBodyCellColor.prototype.getBorderColor = function (state) {
            return DThemeWhiteTableBodyCells.getBorderColor(state);
        };
        DThemeWhiteTableBodyCellColor.prototype.getBorderMask = function (state) {
            return DThemeWhiteTableBodyCells.getBorderMask(state);
        };
        DThemeWhiteTableBodyCellColor.prototype.getColor = function (state) {
            return DThemeWhiteTableBodyCells.getColor(state);
        };
        DThemeWhiteTableBodyCellColor.prototype.getAlpha = function (state) {
            return DThemeWhiteTableBodyCells.getAlpha(state);
        };
        DThemeWhiteTableBodyCellColor.prototype.getHeight = function () {
            return DThemeWhiteTableBodyCells.getHeight();
        };
        DThemeWhiteTableBodyCellColor.prototype.getCornerMask = function () {
            return DThemeWhiteTableBodyCells.getCornerMask();
        };
        return DThemeWhiteTableBodyCellColor;
    }(DThemeWhiteButtonColor));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var formatter$3 = function (value) {
        return DPickerDates.format(value);
    };
    var DThemeWhiteTableBodyCellDate = /** @class */ (function (_super) {
        __extends(DThemeWhiteTableBodyCellDate, _super);
        function DThemeWhiteTableBodyCellDate() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteTableBodyCellDate.prototype.getBackgroundColor = function (state) {
            return DThemeWhiteTableBodyCells.getBackgroundColor(state);
        };
        DThemeWhiteTableBodyCellDate.prototype.getBackgroundAlpha = function (state) {
            return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
        };
        DThemeWhiteTableBodyCellDate.prototype.getBorderColor = function (state) {
            return DThemeWhiteTableBodyCells.getBorderColor(state);
        };
        DThemeWhiteTableBodyCellDate.prototype.getBorderMask = function (state) {
            return DThemeWhiteTableBodyCells.getBorderMask(state);
        };
        DThemeWhiteTableBodyCellDate.prototype.getColor = function (state) {
            return DThemeWhiteTableBodyCells.getColor(state);
        };
        DThemeWhiteTableBodyCellDate.prototype.getAlpha = function (state) {
            return DThemeWhiteTableBodyCells.getAlpha(state);
        };
        DThemeWhiteTableBodyCellDate.prototype.getHeight = function () {
            return DThemeWhiteTableBodyCells.getHeight();
        };
        DThemeWhiteTableBodyCellDate.prototype.getCornerMask = function () {
            return DThemeWhiteTableBodyCells.getCornerMask();
        };
        DThemeWhiteTableBodyCellDate.prototype.getTextFormatter = function () {
            return formatter$3;
        };
        DThemeWhiteTableBodyCellDate.prototype.newTextValue = function () {
            return new Date();
        };
        return DThemeWhiteTableBodyCellDate;
    }(DThemeWhiteButton));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var formatter$2 = function (value, caller) {
        return DPickerDatetimes.format(value, caller.getDatetimeMask());
    };
    var DThemeWhiteTableBodyCellDatetime = /** @class */ (function (_super) {
        __extends(DThemeWhiteTableBodyCellDatetime, _super);
        function DThemeWhiteTableBodyCellDatetime() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteTableBodyCellDatetime.prototype.getBackgroundColor = function (state) {
            return DThemeWhiteTableBodyCells.getBackgroundColor(state);
        };
        DThemeWhiteTableBodyCellDatetime.prototype.getBackgroundAlpha = function (state) {
            return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
        };
        DThemeWhiteTableBodyCellDatetime.prototype.getBorderColor = function (state) {
            return DThemeWhiteTableBodyCells.getBorderColor(state);
        };
        DThemeWhiteTableBodyCellDatetime.prototype.getBorderMask = function (state) {
            return DThemeWhiteTableBodyCells.getBorderMask(state);
        };
        DThemeWhiteTableBodyCellDatetime.prototype.getColor = function (state) {
            return DThemeWhiteTableBodyCells.getColor(state);
        };
        DThemeWhiteTableBodyCellDatetime.prototype.getAlpha = function (state) {
            return DThemeWhiteTableBodyCells.getAlpha(state);
        };
        DThemeWhiteTableBodyCellDatetime.prototype.getHeight = function () {
            return DThemeWhiteTableBodyCells.getHeight();
        };
        DThemeWhiteTableBodyCellDatetime.prototype.getCornerMask = function () {
            return DThemeWhiteTableBodyCells.getCornerMask();
        };
        DThemeWhiteTableBodyCellDatetime.prototype.getTextFormatter = function () {
            return formatter$2;
        };
        DThemeWhiteTableBodyCellDatetime.prototype.newTextValue = function () {
            return new Date();
        };
        return DThemeWhiteTableBodyCellDatetime;
    }(DThemeWhiteButton));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var formatter$1 = function (index) {
        return String(Number(index) + 1);
    };
    var DThemeWhiteTableBodyCellIndex = /** @class */ (function (_super) {
        __extends(DThemeWhiteTableBodyCellIndex, _super);
        function DThemeWhiteTableBodyCellIndex() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteTableBodyCellIndex.prototype.getBackgroundColor = function (state) {
            return DThemeWhiteTableBodyCells.getBackgroundColor(state);
        };
        DThemeWhiteTableBodyCellIndex.prototype.getBackgroundAlpha = function (state) {
            return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
        };
        DThemeWhiteTableBodyCellIndex.prototype.getBorderColor = function (state) {
            return DThemeWhiteTableBodyCells.getBorderColor(state);
        };
        DThemeWhiteTableBodyCellIndex.prototype.getBorderMask = function (state) {
            return DThemeWhiteTableBodyCells.getBorderMask(state);
        };
        DThemeWhiteTableBodyCellIndex.prototype.getColor = function (state) {
            return DThemeWhiteTableBodyCells.getColor(state);
        };
        DThemeWhiteTableBodyCellIndex.prototype.getAlpha = function (state) {
            return DThemeWhiteTableBodyCells.getAlpha(state);
        };
        DThemeWhiteTableBodyCellIndex.prototype.getHeight = function () {
            return DThemeWhiteTableBodyCells.getHeight();
        };
        DThemeWhiteTableBodyCellIndex.prototype.getCornerMask = function () {
            return DThemeWhiteTableBodyCells.getCornerMask();
        };
        DThemeWhiteTableBodyCellIndex.prototype.getPaddingLeft = function () {
            return 10;
        };
        DThemeWhiteTableBodyCellIndex.prototype.getPaddingRight = function () {
            return 10;
        };
        DThemeWhiteTableBodyCellIndex.prototype.getTextFormatter = function () {
            return formatter$1;
        };
        DThemeWhiteTableBodyCellIndex.prototype.newTextValue = function () {
            return 0;
        };
        return DThemeWhiteTableBodyCellIndex;
    }(DThemeWhiteImageBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteTableBodyCellInputInteger = /** @class */ (function (_super) {
        __extends(DThemeWhiteTableBodyCellInputInteger, _super);
        function DThemeWhiteTableBodyCellInputInteger() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteTableBodyCellInputInteger.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.RIGHT;
        };
        DThemeWhiteTableBodyCellInputInteger.prototype.getBackgroundColor = function (state) {
            return DThemeWhiteTableBodyCells.getBackgroundColor(state);
        };
        DThemeWhiteTableBodyCellInputInteger.prototype.getBackgroundAlpha = function (state) {
            return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
        };
        DThemeWhiteTableBodyCellInputInteger.prototype.getBorderColor = function (state) {
            return DThemeWhiteTableBodyCells.getBorderColor(state);
        };
        DThemeWhiteTableBodyCellInputInteger.prototype.getBorderMask = function (state) {
            return DThemeWhiteTableBodyCells.getBorderMask(state);
        };
        DThemeWhiteTableBodyCellInputInteger.prototype.getColor = function (state) {
            return DThemeWhiteTableBodyCells.getColor(state);
        };
        DThemeWhiteTableBodyCellInputInteger.prototype.getAlpha = function (state) {
            return DThemeWhiteTableBodyCells.getAlpha(state);
        };
        DThemeWhiteTableBodyCellInputInteger.prototype.getHeight = function () {
            return DThemeWhiteTableBodyCells.getHeight();
        };
        DThemeWhiteTableBodyCellInputInteger.prototype.getCornerMask = function () {
            return DThemeWhiteTableBodyCells.getCornerMask();
        };
        return DThemeWhiteTableBodyCellInputInteger;
    }(DThemeWhiteInputInteger));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteTableBodyCellInputReal = /** @class */ (function (_super) {
        __extends(DThemeWhiteTableBodyCellInputReal, _super);
        function DThemeWhiteTableBodyCellInputReal() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteTableBodyCellInputReal.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.RIGHT;
        };
        DThemeWhiteTableBodyCellInputReal.prototype.getBackgroundColor = function (state) {
            return DThemeWhiteTableBodyCells.getBackgroundColor(state);
        };
        DThemeWhiteTableBodyCellInputReal.prototype.getBackgroundAlpha = function (state) {
            return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
        };
        DThemeWhiteTableBodyCellInputReal.prototype.getBorderColor = function (state) {
            return DThemeWhiteTableBodyCells.getBorderColor(state);
        };
        DThemeWhiteTableBodyCellInputReal.prototype.getBorderMask = function (state) {
            return DThemeWhiteTableBodyCells.getBorderMask(state);
        };
        DThemeWhiteTableBodyCellInputReal.prototype.getColor = function (state) {
            return DThemeWhiteTableBodyCells.getColor(state);
        };
        DThemeWhiteTableBodyCellInputReal.prototype.getAlpha = function (state) {
            return DThemeWhiteTableBodyCells.getAlpha(state);
        };
        DThemeWhiteTableBodyCellInputReal.prototype.getHeight = function () {
            return DThemeWhiteTableBodyCells.getHeight();
        };
        DThemeWhiteTableBodyCellInputReal.prototype.getCornerMask = function () {
            return DThemeWhiteTableBodyCells.getCornerMask();
        };
        return DThemeWhiteTableBodyCellInputReal;
    }(DThemeWhiteInputReal));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteTableBodyCellInputText = /** @class */ (function (_super) {
        __extends(DThemeWhiteTableBodyCellInputText, _super);
        function DThemeWhiteTableBodyCellInputText() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteTableBodyCellInputText.prototype.getBackgroundColor = function (state) {
            return DThemeWhiteTableBodyCells.getBackgroundColor(state);
        };
        DThemeWhiteTableBodyCellInputText.prototype.getBackgroundAlpha = function (state) {
            return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
        };
        DThemeWhiteTableBodyCellInputText.prototype.getBorderColor = function (state) {
            return DThemeWhiteTableBodyCells.getBorderColor(state);
        };
        DThemeWhiteTableBodyCellInputText.prototype.getBorderMask = function (state) {
            return DThemeWhiteTableBodyCells.getBorderMask(state);
        };
        DThemeWhiteTableBodyCellInputText.prototype.getColor = function (state) {
            return DThemeWhiteTableBodyCells.getColor(state);
        };
        DThemeWhiteTableBodyCellInputText.prototype.getAlpha = function (state) {
            return DThemeWhiteTableBodyCells.getAlpha(state);
        };
        DThemeWhiteTableBodyCellInputText.prototype.getHeight = function () {
            return DThemeWhiteTableBodyCells.getHeight();
        };
        DThemeWhiteTableBodyCellInputText.prototype.getCornerMask = function () {
            return DThemeWhiteTableBodyCells.getCornerMask();
        };
        return DThemeWhiteTableBodyCellInputText;
    }(DThemeWhiteInputText));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteTableBodyCellInputTextArea = /** @class */ (function (_super) {
        __extends(DThemeWhiteTableBodyCellInputTextArea, _super);
        function DThemeWhiteTableBodyCellInputTextArea() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteTableBodyCellInputTextArea.prototype.getBackgroundColor = function (state) {
            return DThemeWhiteTableBodyCells.getBackgroundColor(state);
        };
        DThemeWhiteTableBodyCellInputTextArea.prototype.getBackgroundAlpha = function (state) {
            return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
        };
        DThemeWhiteTableBodyCellInputTextArea.prototype.getBorderColor = function (state) {
            return DThemeWhiteTableBodyCells.getBorderColor(state);
        };
        DThemeWhiteTableBodyCellInputTextArea.prototype.getBorderMask = function (state) {
            return DThemeWhiteTableBodyCells.getBorderMask(state);
        };
        DThemeWhiteTableBodyCellInputTextArea.prototype.getColor = function (state) {
            return DThemeWhiteTableBodyCells.getColor(state);
        };
        DThemeWhiteTableBodyCellInputTextArea.prototype.getAlpha = function (state) {
            return DThemeWhiteTableBodyCells.getAlpha(state);
        };
        DThemeWhiteTableBodyCellInputTextArea.prototype.getHeight = function () {
            return DThemeWhiteTableBodyCells.getHeight();
        };
        DThemeWhiteTableBodyCellInputTextArea.prototype.getCornerMask = function () {
            return DThemeWhiteTableBodyCells.getCornerMask();
        };
        return DThemeWhiteTableBodyCellInputTextArea;
    }(DThemeWhiteInputTextArea));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    DThemeWhiteTableBodyCellTrees.init();
    var DThemeWhiteTableBodyCellInputTree = /** @class */ (function (_super) {
        __extends(DThemeWhiteTableBodyCellInputTree, _super);
        function DThemeWhiteTableBodyCellInputTree() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteTableBodyCellInputTree.prototype.getHeight = function () {
            return DThemeWhiteTableBodyCells.getHeight();
        };
        DThemeWhiteTableBodyCellInputTree.prototype.getBackgroundColor = function (state) {
            return null;
        };
        DThemeWhiteTableBodyCellInputTree.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeWhiteTableBodyCellInputTree.prototype.getLevelPadding = function (level) {
            return 24 + level * 20;
        };
        DThemeWhiteTableBodyCellInputTree.prototype.getInteractive = function () {
            return DBaseInteractive.CHILDREN;
        };
        DThemeWhiteTableBodyCellInputTree.prototype.newState = function (state) {
            _super.prototype.newState.call(this, state);
            state.isFocusable = false;
            state.isFocusReverse = true;
        };
        return DThemeWhiteTableBodyCellInputTree;
    }(DThemeWhiteBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteTableBodyCellInputTreeInput = /** @class */ (function (_super) {
        __extends(DThemeWhiteTableBodyCellInputTreeInput, _super);
        function DThemeWhiteTableBodyCellInputTreeInput() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteTableBodyCellInputTreeInput.prototype.getX = function () {
            return "padding";
        };
        DThemeWhiteTableBodyCellInputTreeInput.prototype.getY = function () {
            return "padding";
        };
        DThemeWhiteTableBodyCellInputTreeInput.prototype.getWidth = function () {
            return "padding";
        };
        DThemeWhiteTableBodyCellInputTreeInput.prototype.getHeight = function () {
            return DThemeWhiteTableBodyCells.getHeight();
        };
        DThemeWhiteTableBodyCellInputTreeInput.prototype.getBackgroundColor = function (state) {
            return DThemeWhiteTableBodyCells.getBackgroundColor(state);
        };
        DThemeWhiteTableBodyCellInputTreeInput.prototype.getBackgroundAlpha = function (state) {
            return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
        };
        DThemeWhiteTableBodyCellInputTreeInput.prototype.getBorderColor = function (state) {
            return DThemeWhiteTableBodyCells.getBorderColor(state);
        };
        DThemeWhiteTableBodyCellInputTreeInput.prototype.getBorderMask = function (state) {
            return DThemeWhiteTableBodyCells.getBorderMask(state);
        };
        DThemeWhiteTableBodyCellInputTreeInput.prototype.getColor = function (state) {
            return DThemeWhiteTableBodyCells.getColor(state);
        };
        DThemeWhiteTableBodyCellInputTreeInput.prototype.getAlpha = function (state) {
            return DThemeWhiteTableBodyCells.getAlpha(state);
        };
        DThemeWhiteTableBodyCellInputTreeInput.prototype.getCornerMask = function () {
            return DThemeWhiteTableBodyCells.getCornerMask();
        };
        DThemeWhiteTableBodyCellInputTreeInput.prototype.getPaddingLeft = function () {
            return 0;
        };
        return DThemeWhiteTableBodyCellInputTreeInput;
    }(DThemeWhiteInputText));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteTableBodyCellInputTreeMarker = /** @class */ (function (_super) {
        __extends(DThemeWhiteTableBodyCellInputTreeMarker, _super);
        function DThemeWhiteTableBodyCellInputTreeMarker() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteTableBodyCellInputTreeMarker.prototype.getX = function () {
            return "padding";
        };
        DThemeWhiteTableBodyCellInputTreeMarker.prototype.getY = function () {
            return "padding";
        };
        DThemeWhiteTableBodyCellInputTreeMarker.prototype.getHeight = function () {
            return DThemeWhiteTableBodyCells.getHeight();
        };
        DThemeWhiteTableBodyCellInputTreeMarker.prototype.getBackgroundColor = function (state) {
            return null;
        };
        DThemeWhiteTableBodyCellInputTreeMarker.prototype.getBackgroundAlpha = function (state) {
            return 1;
        };
        DThemeWhiteTableBodyCellInputTreeMarker.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeWhiteTableBodyCellInputTreeMarker.prototype.getBorderMask = function (state) {
            return DThemeWhiteTableBodyCells.getBorderMask(state);
        };
        DThemeWhiteTableBodyCellInputTreeMarker.prototype.getColor = function (state) {
            return DThemeWhiteTableBodyCells.getColor(state);
        };
        DThemeWhiteTableBodyCellInputTreeMarker.prototype.getAlpha = function (state) {
            return DThemeWhiteTableBodyCells.getAlpha(state);
        };
        DThemeWhiteTableBodyCellInputTreeMarker.prototype.getCornerMask = function () {
            return DThemeWhiteTableBodyCells.getCornerMask();
        };
        DThemeWhiteTableBodyCellInputTreeMarker.prototype.getImageAlignWith = function () {
            return DAlignWith.BORDER;
        };
        DThemeWhiteTableBodyCellInputTreeMarker.prototype.getImageAlignHorizontal = function () {
            return DAlignHorizontal.RIGHT;
        };
        DThemeWhiteTableBodyCellInputTreeMarker.prototype.getImageSource = function (state) {
            return DThemeWhiteTableBodyCellTrees.getImageSource(state);
        };
        DThemeWhiteTableBodyCellInputTreeMarker.prototype.getImageTintColor = function (state) {
            return this.getColor(state);
        };
        DThemeWhiteTableBodyCellInputTreeMarker.prototype.getImageTintAlpha = function (state) {
            return this.getAlpha(state) * 0.5;
        };
        return DThemeWhiteTableBodyCellInputTreeMarker;
    }(DThemeWhiteButtonBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteTableBodyCellLink = /** @class */ (function (_super) {
        __extends(DThemeWhiteTableBodyCellLink, _super);
        function DThemeWhiteTableBodyCellLink() {
            var _this = _super.call(this) || this;
            _this._link = DThemes.getInstance().get("DLink");
            return _this;
        }
        DThemeWhiteTableBodyCellLink.prototype.getImageTintColor = function (state) {
            return DThemeWhiteTableBodyCells.getImageTintColor(state, true);
        };
        DThemeWhiteTableBodyCellLink.prototype.getImageSource = function (state) {
            return this._link.getImageSource(state);
        };
        return DThemeWhiteTableBodyCellLink;
    }(DThemeWhiteTableBodyCellButton));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteTableBodyCellSelectMenu = /** @class */ (function (_super) {
        __extends(DThemeWhiteTableBodyCellSelectMenu, _super);
        function DThemeWhiteTableBodyCellSelectMenu() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteTableBodyCellSelectMenu.prototype.getBackgroundColor = function (state) {
            return DThemeWhiteTableBodyCells.getBackgroundColor(state);
        };
        DThemeWhiteTableBodyCellSelectMenu.prototype.getBackgroundAlpha = function (state) {
            return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
        };
        DThemeWhiteTableBodyCellSelectMenu.prototype.getBorderColor = function (state) {
            return DThemeWhiteTableBodyCells.getBorderColor(state);
        };
        DThemeWhiteTableBodyCellSelectMenu.prototype.getBorderMask = function (state) {
            return DThemeWhiteTableBodyCells.getBorderMask(state);
        };
        DThemeWhiteTableBodyCellSelectMenu.prototype.getColor = function (state) {
            return DThemeWhiteTableBodyCells.getColor(state);
        };
        DThemeWhiteTableBodyCellSelectMenu.prototype.getAlpha = function (state) {
            return DThemeWhiteTableBodyCells.getAlpha(state);
        };
        DThemeWhiteTableBodyCellSelectMenu.prototype.getHeight = function () {
            return DThemeWhiteTableBodyCells.getHeight();
        };
        DThemeWhiteTableBodyCellSelectMenu.prototype.getCornerMask = function () {
            return DThemeWhiteTableBodyCells.getCornerMask();
        };
        DThemeWhiteTableBodyCellSelectMenu.prototype.getSecondaryImageSource = function (state) {
            return null;
        };
        DThemeWhiteTableBodyCellSelectMenu.prototype.getPaddingLeft = function () {
            return 10;
        };
        DThemeWhiteTableBodyCellSelectMenu.prototype.getPaddingRight = function () {
            return 10;
        };
        return DThemeWhiteTableBodyCellSelectMenu;
    }(DThemeWhiteSelect));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteTableBodyCellSelectMultiple = /** @class */ (function (_super) {
        __extends(DThemeWhiteTableBodyCellSelectMultiple, _super);
        function DThemeWhiteTableBodyCellSelectMultiple() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteTableBodyCellSelectMultiple.prototype.getBackgroundColor = function (state) {
            return DThemeWhiteTableBodyCells.getBackgroundColor(state);
        };
        DThemeWhiteTableBodyCellSelectMultiple.prototype.getBackgroundAlpha = function (state) {
            return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
        };
        DThemeWhiteTableBodyCellSelectMultiple.prototype.getBorderColor = function (state) {
            return DThemeWhiteTableBodyCells.getBorderColor(state);
        };
        DThemeWhiteTableBodyCellSelectMultiple.prototype.getBorderMask = function (state) {
            return DThemeWhiteTableBodyCells.getBorderMask(state);
        };
        DThemeWhiteTableBodyCellSelectMultiple.prototype.getColor = function (state) {
            return DThemeWhiteTableBodyCells.getColor(state);
        };
        DThemeWhiteTableBodyCellSelectMultiple.prototype.getAlpha = function (state) {
            return DThemeWhiteTableBodyCells.getAlpha(state);
        };
        DThemeWhiteTableBodyCellSelectMultiple.prototype.getHeight = function () {
            return DThemeWhiteTableBodyCells.getHeight();
        };
        DThemeWhiteTableBodyCellSelectMultiple.prototype.getCornerMask = function () {
            return DThemeWhiteTableBodyCells.getCornerMask();
        };
        DThemeWhiteTableBodyCellSelectMultiple.prototype.getSecondaryImageSource = function (state) {
            return null;
        };
        DThemeWhiteTableBodyCellSelectMultiple.prototype.getPaddingLeft = function () {
            return 10;
        };
        DThemeWhiteTableBodyCellSelectMultiple.prototype.getPaddingRight = function () {
            return 10;
        };
        return DThemeWhiteTableBodyCellSelectMultiple;
    }(DThemeWhiteSelectMultiple));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteTableBodyCellTextArea = /** @class */ (function (_super) {
        __extends(DThemeWhiteTableBodyCellTextArea, _super);
        function DThemeWhiteTableBodyCellTextArea() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteTableBodyCellTextArea.prototype.getTextAlignVertical = function () {
            return DAlignVertical.TOP;
        };
        return DThemeWhiteTableBodyCellTextArea;
    }(DThemeWhiteTableBodyCellText));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var formatter = function (value, caller) {
        return DPickerTimes.format(value, caller.getDatetimeMask());
    };
    var DThemeWhiteTableBodyCellTime = /** @class */ (function (_super) {
        __extends(DThemeWhiteTableBodyCellTime, _super);
        function DThemeWhiteTableBodyCellTime() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteTableBodyCellTime.prototype.getBackgroundColor = function (state) {
            return DThemeWhiteTableBodyCells.getBackgroundColor(state);
        };
        DThemeWhiteTableBodyCellTime.prototype.getBackgroundAlpha = function (state) {
            return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
        };
        DThemeWhiteTableBodyCellTime.prototype.getBorderColor = function (state) {
            return DThemeWhiteTableBodyCells.getBorderColor(state);
        };
        DThemeWhiteTableBodyCellTime.prototype.getBorderMask = function (state) {
            return DThemeWhiteTableBodyCells.getBorderMask(state);
        };
        DThemeWhiteTableBodyCellTime.prototype.getColor = function (state) {
            return DThemeWhiteTableBodyCells.getColor(state);
        };
        DThemeWhiteTableBodyCellTime.prototype.getAlpha = function (state) {
            return DThemeWhiteTableBodyCells.getAlpha(state);
        };
        DThemeWhiteTableBodyCellTime.prototype.getHeight = function () {
            return DThemeWhiteTableBodyCells.getHeight();
        };
        DThemeWhiteTableBodyCellTime.prototype.getCornerMask = function () {
            return DThemeWhiteTableBodyCells.getCornerMask();
        };
        DThemeWhiteTableBodyCellTime.prototype.getTextFormatter = function () {
            return formatter;
        };
        DThemeWhiteTableBodyCellTime.prototype.newTextValue = function () {
            return new Date();
        };
        return DThemeWhiteTableBodyCellTime;
    }(DThemeWhiteButton));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    DThemeWhiteTableBodyCellTrees.init();
    var DThemeWhiteTableBodyCellTree = /** @class */ (function (_super) {
        __extends(DThemeWhiteTableBodyCellTree, _super);
        function DThemeWhiteTableBodyCellTree() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteTableBodyCellTree.prototype.getLevelPadding = function (level) {
            return 24 + level * 20 - this.getPaddingLeft();
        };
        DThemeWhiteTableBodyCellTree.prototype.getImageAlignWith = function () {
            return DAlignWith.PADDING;
        };
        DThemeWhiteTableBodyCellTree.prototype.getImageMarginHorizontal = function () {
            return -19;
        };
        DThemeWhiteTableBodyCellTree.prototype.getImageSource = function (state) {
            return DThemeWhiteTableBodyCellTrees.getImageSource(state);
        };
        DThemeWhiteTableBodyCellTree.prototype.getImageTintColor = function (state) {
            return this.getColor(state);
        };
        DThemeWhiteTableBodyCellTree.prototype.getImageTintAlpha = function (state) {
            return this.getAlpha(state) * 0.5;
        };
        return DThemeWhiteTableBodyCellTree;
    }(DThemeWhiteTableBodyCellButton));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteTableRow = /** @class */ (function (_super) {
        __extends(DThemeWhiteTableRow, _super);
        function DThemeWhiteTableRow() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteTableRow.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeWhiteTableRow.prototype.getCornerMask = function () {
            return DCornerMask.ALL;
        };
        DThemeWhiteTableRow.prototype.getMargin = function () {
            return 0;
        };
        DThemeWhiteTableRow.prototype.getInteractive = function () {
            return DBaseInteractive.BOTH;
        };
        DThemeWhiteTableRow.prototype.newState = function (state) {
            _super.prototype.newState.call(this, state);
            state.isFocusReverse = true;
        };
        return DThemeWhiteTableRow;
    }(DThemeWhiteLayoutHorizontal));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteTableBodyRow = /** @class */ (function (_super) {
        __extends(DThemeWhiteTableBodyRow, _super);
        function DThemeWhiteTableBodyRow() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.BACKGROUND_COLOR_EVEN = DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD;
            _this.BACKGROUND_COLOR_ODD = UtilRgb.darken(DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD, 0.0125);
            return _this;
        }
        DThemeWhiteTableBodyRow.prototype.getBackgroundColor = function (state) {
            if (state.inDisabled) {
                return state.isAlternated ? this.BACKGROUND_COLOR_ODD : this.BACKGROUND_COLOR_EVEN;
            }
            else if (state.isActive) {
                return DThemeWhiteConstants.HIGHLIGHT_BLENDED_ON_BOARD;
            }
            else if (state.isHovered) {
                return DThemeWhiteConstants.WEAK_HIGHLIGHT_BLENDED_ON_BOARD;
            }
            else {
                return state.isAlternated ? this.BACKGROUND_COLOR_ODD : this.BACKGROUND_COLOR_EVEN;
            }
        };
        DThemeWhiteTableBodyRow.prototype.getWidth = function () {
            return "100%";
        };
        return DThemeWhiteTableBodyRow;
    }(DThemeWhiteTableRow));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteTableHeader = /** @class */ (function (_super) {
        __extends(DThemeWhiteTableHeader, _super);
        function DThemeWhiteTableHeader() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.BACKGROUND_COLOR = UtilRgb.darken(DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD, 0.03);
            _this.BORDER_COLOR = UtilRgb.darken(DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD, 0.055);
            return _this;
        }
        DThemeWhiteTableHeader.prototype.getBackgroundColor = function (state) {
            if (state.inDisabled) {
                return null;
            }
            else {
                return this.BACKGROUND_COLOR;
            }
        };
        DThemeWhiteTableHeader.prototype.getBorderColor = function (state) {
            return this.BORDER_COLOR;
        };
        DThemeWhiteTableHeader.prototype.getBorderMask = function (state) {
            return DBorderMask.NOT_BOTTOM;
        };
        DThemeWhiteTableHeader.prototype.getWidth = function () {
            return "100%";
        };
        DThemeWhiteTableHeader.prototype.getHeight = function () {
            return 30;
        };
        DThemeWhiteTableHeader.prototype.getCursor = function (state) {
            if (state.is(DTableState.RESIZING)) {
                return "col-resize";
            }
            return _super.prototype.getCursor.call(this, state);
        };
        return DThemeWhiteTableHeader;
    }(DThemeWhiteTableRow));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteTableCategory = /** @class */ (function (_super) {
        __extends(DThemeWhiteTableCategory, _super);
        function DThemeWhiteTableCategory() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteTableCategory;
    }(DThemeWhiteTableHeader));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    // Material Design icons by Google.
    // Apache license version 2.0.
    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("sorted_descending", 16, 16, "<g transform=\"scale(0.875,0.875)\">" +
        "<path d=\"M3 12l5-5 5 5H3z\" fill=\"#fff\"/>" +
        "</g>");
    DThemeWhiteAtlas.add("sorted_ascending", 16, 16, "<g transform=\"scale(0.875,0.875)\">" +
        "<path d=\"M3 8l5 5 5-5H3z\" fill=\"#fff\"/>" +
        "</g>");
    /* eslint-enable prettier/prettier */
    var DThemeWhiteTableHeaderCell = /** @class */ (function (_super) {
        __extends(DThemeWhiteTableHeaderCell, _super);
        function DThemeWhiteTableHeaderCell() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.BACKGROUND_COLOR = UtilRgb.darken(DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD, 0.03);
            _this.BACKGROUND_COLOR_HOVERED = UtilRgb.darken(_this.BACKGROUND_COLOR, 0.017);
            _this.BACKGROUND_COLOR_PRESSED = UtilRgb.darken(_this.BACKGROUND_COLOR, 0.034);
            _this.BACKGROUND_COLOR_FROZEN = UtilRgb.darken(_this.BACKGROUND_COLOR, 0.02);
            _this.BORDER_COLOR = UtilRgb.darken(DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD, 0.055);
            _this.BORDER_COLOR_FROZEN = UtilRgb.darken(_this.BORDER_COLOR, 0.055);
            return _this;
        }
        DThemeWhiteTableHeaderCell.prototype.getBackgroundColor = function (state) {
            if (state.inDisabled || state.on(DTableState.RESIZING)) {
                return state.is(DTableState.FROZEN) ? this.BACKGROUND_COLOR_FROZEN : null;
            }
            else if (state.isPressed) {
                return this.BACKGROUND_COLOR_PRESSED;
            }
            else if (state.isHovered) {
                return this.BACKGROUND_COLOR_HOVERED;
            }
            else {
                return state.is(DTableState.FROZEN) ? this.BACKGROUND_COLOR_FROZEN : null;
            }
        };
        DThemeWhiteTableHeaderCell.prototype.getBackgroundAlpha = function (state) {
            return 1;
        };
        DThemeWhiteTableHeaderCell.prototype.getBorderColor = function (state) {
            if (state.is(DTableState.FROZEN_END)) {
                return this.BORDER_COLOR_FROZEN;
            }
            return this.BORDER_COLOR;
        };
        DThemeWhiteTableHeaderCell.prototype.getBorderMask = function (state) {
            if (state.is(DTableState.END)) {
                return DBorderMask.ALL;
            }
            else {
                return DBorderMask.NOT_RIGHT;
            }
        };
        DThemeWhiteTableHeaderCell.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.CENTER;
        };
        DThemeWhiteTableHeaderCell.prototype.getCornerMask = function () {
            return DCornerMask.ALL;
        };
        DThemeWhiteTableHeaderCell.prototype.getHeight = function () {
            return "padding";
        };
        DThemeWhiteTableHeaderCell.prototype.getPaddingLeft = function () {
            return 10;
        };
        DThemeWhiteTableHeaderCell.prototype.getPaddingRight = function () {
            return 10;
        };
        DThemeWhiteTableHeaderCell.prototype.newTextValue = function () {
            return null;
        };
        DThemeWhiteTableHeaderCell.prototype.getImageTintColor = function (state, isActive) {
            if (state.inDisabled || state.inReadOnly || !(state.isActive || isActive)) {
                return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
            }
            else {
                return DThemeWhiteConstants.HIGHLIGHT_COLOR;
            }
        };
        DThemeWhiteTableHeaderCell.prototype.getSecondaryImageTintColor = function (state) {
            if (state.is(DTableState.CHECKABLE)) {
                return DThemeWhiteButtonChecks.getImageTintColor(state);
            }
            return _super.prototype.getSecondaryImageTintColor.call(this, state);
        };
        DThemeWhiteTableHeaderCell.prototype.getSecondaryImageSource = function (state) {
            if (state.is(DTableState.CHECKABLE)) {
                return DThemeWhiteButtonChecks.getImageSource(state);
            }
            return null;
        };
        DThemeWhiteTableHeaderCell.prototype.getSecondaryImageAlignHorizontal = function () {
            return DAlignHorizontal.LEFT;
        };
        DThemeWhiteTableHeaderCell.prototype.getSecondaryImageAlignVertical = function () {
            return DAlignVertical.MIDDLE;
        };
        DThemeWhiteTableHeaderCell.prototype.getSecondaryImageAlignWith = function () {
            return DAlignWith.TEXT;
        };
        DThemeWhiteTableHeaderCell.prototype.getTertiaryImageSource = function (state) {
            if (state.is(DTableState.SORTED_ASCENDING)) {
                return DThemeWhiteAtlas.mappings.sorted_ascending;
            }
            else if (state.is(DTableState.SORTED_DESCENDING)) {
                return DThemeWhiteAtlas.mappings.sorted_descending;
            }
            else {
                return null;
            }
        };
        DThemeWhiteTableHeaderCell.prototype.getTertiaryImageTintColor = function (state) {
            return _super.prototype.getImageTintColor.call(this, state);
        };
        DThemeWhiteTableHeaderCell.prototype.getTertiaryImageAlignHorizontal = function () {
            return DAlignHorizontal.RIGHT;
        };
        DThemeWhiteTableHeaderCell.prototype.getTertiaryImageAlignWith = function () {
            return DAlignWith.BORDER;
        };
        DThemeWhiteTableHeaderCell.prototype.getCursor = function (state) {
            if (!state.isActionable) {
                return "";
            }
            if (state.is(DTableState.HOVERED_ON_EDGE) || state.on(DTableState.RESIZING)) {
                return "col-resize";
            }
            if (state.is(DTableState.CHECKABLE) || state.is(DTableState.SORTABLE)) {
                return "pointer";
            }
            return "";
        };
        DThemeWhiteTableHeaderCell.prototype.getEdgeWidth = function () {
            return 10;
        };
        return DThemeWhiteTableHeaderCell;
    }(DThemeWhiteImage));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteTableCategoryCell = /** @class */ (function (_super) {
        __extends(DThemeWhiteTableCategoryCell, _super);
        function DThemeWhiteTableCategoryCell() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteTableCategoryCell;
    }(DThemeWhiteTableHeaderCell));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteJaJpTable = function () {
        DThemeWhite.set("DTableBodyCellActionDialog", DThemeWhiteTableBodyCellActionDialog);
        DThemeWhite.set("DTableBodyCellActionMenu", DThemeWhiteTableBodyCellActionMenu);
        DThemeWhite.set("DTableBodyCellActionPromise", DThemeWhiteTableBodyCellActionPromise);
        DThemeWhite.set("DTableBodyCellButton", DThemeWhiteTableBodyCellButton);
        DThemeWhite.set("DTableBodyCellCheck", DThemeWhiteTableBodyCellCheck);
        DThemeWhite.set("DTableBodyCellColor", DThemeWhiteTableBodyCellColor);
        DThemeWhite.set("DTableBodyCellDate", DThemeWhiteTableBodyCellDate);
        DThemeWhite.set("DTableBodyCellDatetime", DThemeWhiteTableBodyCellDatetime);
        DThemeWhite.set("DTableBodyCellIndex", DThemeWhiteTableBodyCellIndex);
        DThemeWhite.set("DTableBodyCellInputInteger", DThemeWhiteTableBodyCellInputInteger);
        DThemeWhite.set("DTableBodyCellInputReal", DThemeWhiteTableBodyCellInputReal);
        DThemeWhite.set("DTableBodyCellInputTextArea", DThemeWhiteTableBodyCellInputTextArea);
        DThemeWhite.set("DTableBodyCellInputText", DThemeWhiteTableBodyCellInputText);
        DThemeWhite.set("DTableBodyCellInputTreeMarker", DThemeWhiteTableBodyCellInputTreeMarker);
        DThemeWhite.set("DTableBodyCellInputTreeInput", DThemeWhiteTableBodyCellInputTreeInput);
        DThemeWhite.set("DTableBodyCellInputTree", DThemeWhiteTableBodyCellInputTree);
        DThemeWhite.set("DTableBodyCellLink", DThemeWhiteTableBodyCellLink);
        DThemeWhite.set("DTableBodyCellSelectDialog", DThemeWhiteTableBodyCellSelectDialog);
        DThemeWhite.set("DTableBodyCellSelectMenu", DThemeWhiteTableBodyCellSelectMenu);
        DThemeWhite.set("DTableBodyCellSelectMultiple", DThemeWhiteTableBodyCellSelectMultiple);
        DThemeWhite.set("DTableBodyCellSelectPromise", DThemeWhiteTableBodyCellSelectPromise);
        DThemeWhite.set("DTableBodyCellTextArea", DThemeWhiteTableBodyCellTextArea);
        DThemeWhite.set("DTableBodyCellText", DThemeWhiteTableBodyCellText);
        DThemeWhite.set("DTableBodyCellTree", DThemeWhiteTableBodyCellTree);
        DThemeWhite.set("DTableBodyCellTime", DThemeWhiteTableBodyCellTime);
        DThemeWhite.set("DTableBodyRow", DThemeWhiteTableBodyRow);
        DThemeWhite.set("DTableBody", DThemeWhiteTableBody);
        DThemeWhite.set("DTableCategoryCell", DThemeWhiteTableCategoryCell);
        DThemeWhite.set("DTableCategory", DThemeWhiteTableCategory);
        DThemeWhite.set("DTableHeaderCell", DThemeWhiteTableHeaderCell);
        DThemeWhite.set("DTableHeader", DThemeWhiteTableHeader);
        DThemeWhite.set("DTableRow", DThemeWhiteTableRow);
        DThemeWhite.set("DTable", DThemeWhiteTable);
        loadThemeWhiteButtonCheck();
        loadThemeWhiteJaJpButtonColor();
        loadThemeWhiteJaJpButtonDate();
        loadThemeWhiteJaJpButtonDatetime();
        loadThemeWhiteInputInteger();
        loadThemeWhiteInputReal();
        loadThemeWhiteInputTextArea();
        loadThemeWhiteInputText();
        loadThemeWhiteJaJpDialogSelect();
        loadThemeWhiteMenu();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    // Material Design icons by Google.
    // Apache license version 2.0.
    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("button_process_processing", 24, 24, "<g transform=\"scale(0.025,0.025) translate(0,960)\">" +
        "<path d=\"M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T" +
        "480-880q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133" +
        " 0 226.5-93.5T800-480q0-17 11.5-28.5T840-520q17 0 28.5 11.5T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 8" +
        "6T480-80Z\" fill=\"#fff\"/>" +
        "</g>");
    DThemeWhiteAtlas.add("button_process_success", 24, 24, "<g transform=\"scale(0.025,0.025) translate(0,960)\">" +
        "<path d=\"M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z\" fill=\"#fff\" />" +
        "</g>");
    DThemeWhiteAtlas.add("button_process_fail", 24, 24, "<g transform=\"scale(0.025,0.025) translate(0,960)\">" +
        "<path d=\"m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z\" fill=\"#fff\" />" +
        "</g>");
    /* eslint-enable prettier/prettier */
    var imageSource = function (state) {
        if (state.isProcessing) {
            return DThemeWhiteAtlas.mappings.button_process_processing;
        }
        else if (state.isSucceeded) {
            return DThemeWhiteAtlas.mappings.button_process_success;
        }
        else {
            return DThemeWhiteAtlas.mappings.button_process_fail;
        }
    };
    var imageRotation = function (state) {
        var value = state.valueOf(DBaseState.PROCESSING);
        if (value != null) {
            return value * Math.PI * 0.02;
        }
        return 0;
    };
    var DThemeWhiteIndicatorProcess = /** @class */ (function () {
        function DThemeWhiteIndicatorProcess() {
        }
        DThemeWhiteIndicatorProcess.prototype.getProcessDoneDelay = function () {
            return 400;
        };
        DThemeWhiteIndicatorProcess.prototype.getProcessCloseDelay = function () {
            return 3000;
        };
        DThemeWhiteIndicatorProcess.prototype.isProcessTextEnabled = function () {
            return false;
        };
        DThemeWhiteIndicatorProcess.prototype.isProcessImageEnabled = function () {
            return true;
        };
        DThemeWhiteIndicatorProcess.prototype.getProcessImageIndex = function () {
            return 0;
        };
        DThemeWhiteIndicatorProcess.prototype.newProcessImageSource = function () {
            return imageSource;
        };
        DThemeWhiteIndicatorProcess.prototype.newProcessImageRotation = function () {
            return imageRotation;
        };
        return DThemeWhiteIndicatorProcess;
    }());

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteJaJpIndicatorProcessing = /** @class */ (function (_super) {
        __extends(DThemeWhiteJaJpIndicatorProcessing, _super);
        function DThemeWhiteJaJpIndicatorProcessing() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeWhiteJaJpIndicatorProcessing.prototype.newProcessTextValue = function () {
            return dThemeWhiteJaJpDialogProcessingMessage;
        };
        return DThemeWhiteJaJpIndicatorProcessing;
    }(DThemeWhiteIndicatorProcess));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteJaJpIndicatorProcessing = function () {
        DThemeWhite.set("DIndicatorProcessing", DThemeWhiteJaJpIndicatorProcessing);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeWhiteJaJpAll = function () {
        loadThemeWhite();
        loadThemeWhiteBase();
        loadThemeWhiteBoard();
        loadThemeWhiteJaJpButtonAll();
        loadThemeWhiteView();
        loadThemeWhiteCanvasContainer();
        loadThemeWhiteChart();
        loadThemeWhiteColor();
        loadThemeWhiteJaJpDiagramEditor();
        loadThemeWhiteJaJpDiagram();
        loadThemeWhiteJaJpDialogAll();
        loadThemeWhiteExpandable();
        loadThemeWhiteHtmlElement();
        loadThemeWhiteImage();
        loadThemeWhiteJaJpIndicatorProcessing();
        loadThemeWhiteJaJpInputAll();
        loadThemeWhiteLayout();
        loadThemeWhiteJaJpLink();
        loadThemeWhiteList();
        loadThemeWhiteTree();
        loadThemeWhiteMenuBar();
        loadThemeWhiteMenuSided();
        loadThemeWhiteMenu();
        loadThemeWhiteJaJpNote();
        loadThemeWhitePane();
        loadThemeWhitePagination();
        loadThemeWhiteJaJpPickerColorGradient();
        loadThemeWhiteJaJpPickerColor();
        loadThemeWhiteJaJpPickerDate();
        loadThemeWhiteJaJpPickerDatetime();
        loadThemeWhiteJaJpPickerTime();
        loadThemeWhiteSelect();
        loadThemeWhiteJaJpTable();
        loadThemeWhiteText();
        loadThemeWhiteSlider();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeWhiteDialogConfirmDelete = /** @class */ (function (_super) {
        __extends(DThemeWhiteDialogConfirmDelete, _super);
        function DThemeWhiteDialogConfirmDelete() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeWhiteDialogConfirmDelete;
    }(DThemeWhiteDialogConfirm));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */

    var white = {
        __proto__: null,
        loadThemeWhiteBase: loadThemeWhiteBase,
        loadThemeWhiteBoard: loadThemeWhiteBoard,
        loadThemeWhiteButtonAmbient: loadThemeWhiteButtonAmbient,
        loadThemeWhiteButtonCheckRight: loadThemeWhiteButtonCheckRight,
        loadThemeWhiteButtonCheck: loadThemeWhiteButtonCheck,
        loadThemeWhiteButtonDanger: loadThemeWhiteButtonDanger,
        loadThemeWhiteButtonFile: loadThemeWhiteButtonFile,
        loadThemeWhiteButtonLink: loadThemeWhiteButtonLink,
        loadThemeWhiteButtonPrimary: loadThemeWhiteButtonPrimary,
        loadThemeWhiteButtonRadioRight: loadThemeWhiteButtonRadioRight,
        loadThemeWhiteButtonRadio: loadThemeWhiteButtonRadio,
        loadThemeWhiteButtonSecondary: loadThemeWhiteButtonSecondary,
        loadThemeWhiteButton: loadThemeWhiteButton,
        loadThemeWhiteCanvasContainer: loadThemeWhiteCanvasContainer,
        loadThemeWhiteChart: loadThemeWhiteChart,
        loadThemeWhiteColor: loadThemeWhiteColor,
        loadThemeWhiteDialogFitted: loadThemeWhiteDialogFitted,
        loadThemeWhiteDialogInputBoolean: loadThemeWhiteDialogInputBoolean,
        loadThemeWhiteDialogInputInteger: loadThemeWhiteDialogInputInteger,
        loadThemeWhiteDialogInputReal: loadThemeWhiteDialogInputReal,
        loadThemeWhiteDialogInputText: loadThemeWhiteDialogInputText,
        loadThemeWhiteDialog: loadThemeWhiteDialog,
        loadThemeWhiteDropdown: loadThemeWhiteDropdown,
        loadThemeWhiteExpandable: loadThemeWhiteExpandable,
        loadThemeWhiteHtmlElement: loadThemeWhiteHtmlElement,
        loadThemeWhiteImage: loadThemeWhiteImage,
        loadThemeWhiteInputAndLabel: loadThemeWhiteInputAndLabel,
        loadThemeWhiteInputInteger: loadThemeWhiteInputInteger,
        loadThemeWhiteInputLabel: loadThemeWhiteInputLabel,
        loadThemeWhiteInputReal: loadThemeWhiteInputReal,
        loadThemeWhiteInputSearch: loadThemeWhiteInputSearch,
        loadThemeWhiteInputTextArea: loadThemeWhiteInputTextArea,
        loadThemeWhiteInputText: loadThemeWhiteInputText,
        loadThemeWhiteLayout: loadThemeWhiteLayout,
        loadThemeWhiteList: loadThemeWhiteList,
        loadThemeWhiteMenuBar: loadThemeWhiteMenuBar,
        loadThemeWhiteMenuSided: loadThemeWhiteMenuSided,
        loadThemeWhiteMenu: loadThemeWhiteMenu,
        loadThemeWhitePagination: loadThemeWhitePagination,
        loadThemeWhitePane: loadThemeWhitePane,
        loadThemeWhiteScrollBar: loadThemeWhiteScrollBar,
        loadThemeWhiteSelect: loadThemeWhiteSelect,
        loadThemeWhiteShapeActionValue: loadThemeWhiteShapeActionValue,
        loadThemeWhiteShape: loadThemeWhiteShape,
        loadThemeWhiteSlider: loadThemeWhiteSlider,
        loadThemeWhiteText: loadThemeWhiteText,
        loadThemeWhiteTree: loadThemeWhiteTree,
        loadThemeWhiteView: loadThemeWhiteView,
        loadThemeWhite: loadThemeWhite,
        loadThemeWhiteJaJpAll: loadThemeWhiteJaJpAll,
        loadThemeWhiteJaJpButtonAll: loadThemeWhiteJaJpButtonAll,
        loadThemeWhiteJaJpButtonColorGradient: loadThemeWhiteJaJpButtonColorGradient,
        loadThemeWhiteJaJpButtonColor: loadThemeWhiteJaJpButtonColor,
        loadThemeWhiteJaJpButtonDate: loadThemeWhiteJaJpButtonDate,
        loadThemeWhiteJaJpButtonDatetime: loadThemeWhiteJaJpButtonDatetime,
        loadThemeWhiteJaJpButtonSelect: loadThemeWhiteJaJpButtonSelect,
        loadThemeWhiteJaJpButtonTime: loadThemeWhiteJaJpButtonTime,
        loadThemeWhiteJaJpDiagramEditor: loadThemeWhiteJaJpDiagramEditor,
        loadThemeWhiteJaJpDiagram: loadThemeWhiteJaJpDiagram,
        loadThemeWhiteJaJpDialogAll: loadThemeWhiteJaJpDialogAll,
        loadThemeWhiteJaJpDialogColorGradient: loadThemeWhiteJaJpDialogColorGradient,
        loadThemeWhiteJaJpDialogColor: loadThemeWhiteJaJpDialogColor,
        loadThemeWhiteJaJpDialogConfirmDelete: loadThemeWhiteJaJpDialogConfirmDelete,
        loadThemeWhiteJaJpDialogConfirmDiscard: loadThemeWhiteJaJpDialogConfirmDiscard,
        loadThemeWhiteJaJpDialogConfirm: loadThemeWhiteJaJpDialogConfirm,
        loadThemeWhiteJaJpDialogDate: loadThemeWhiteJaJpDialogDate,
        loadThemeWhiteJaJpDialogDatetime: loadThemeWhiteJaJpDialogDatetime,
        loadThemeWhiteJaJpDialogLayered: loadThemeWhiteJaJpDialogLayered,
        loadThemeWhiteJaJpDialogMessage: loadThemeWhiteJaJpDialogMessage,
        loadThemeWhiteJaJpDialogProcessing: loadThemeWhiteJaJpDialogProcessing,
        loadThemeWhiteJaJpDialogSaveAs: loadThemeWhiteJaJpDialogSaveAs,
        loadThemeWhiteJaJpDialogSelect: loadThemeWhiteJaJpDialogSelect,
        loadThemeWhiteJaJpDialogTime: loadThemeWhiteJaJpDialogTime,
        loadThemeWhiteJaJpIndicatorProcessing: loadThemeWhiteJaJpIndicatorProcessing,
        loadThemeWhiteJaJpInputAll: loadThemeWhiteJaJpInputAll,
        loadThemeWhiteJaJpInputBoolean: loadThemeWhiteJaJpInputBoolean,
        loadThemeWhiteJaJpLink: loadThemeWhiteJaJpLink,
        loadThemeWhiteJaJpNote: loadThemeWhiteJaJpNote,
        loadThemeWhiteJaJpPickerColorGradient: loadThemeWhiteJaJpPickerColorGradient,
        loadThemeWhiteJaJpPickerColor: loadThemeWhiteJaJpPickerColor,
        loadThemeWhiteJaJpPickerDate: loadThemeWhiteJaJpPickerDate,
        loadThemeWhiteJaJpPickerDatetime: loadThemeWhiteJaJpPickerDatetime,
        loadThemeWhiteJaJpPickerTime: loadThemeWhiteJaJpPickerTime,
        loadThemeWhiteJaJpShapePointsFormatter: loadThemeWhiteJaJpShapePointsFormatter,
        loadThemeWhiteJaJpTable: loadThemeWhiteJaJpTable,
        DThemeWhiteAtlas: DThemeWhiteAtlas,
        DThemeWhiteBase: DThemeWhiteBase,
        DThemeWhiteBoard: DThemeWhiteBoard,
        DThemeWhiteButtonAmbient: DThemeWhiteButtonAmbient,
        DThemeWhiteButtonBase: DThemeWhiteButtonBase,
        DThemeWhiteButtonCheckRight: DThemeWhiteButtonCheckRight,
        DThemeWhiteButtonCheck: DThemeWhiteButtonCheck,
        DThemeWhiteButtonChecks: DThemeWhiteButtonChecks,
        DThemeWhiteButtonColorGradient: DThemeWhiteButtonColorGradient,
        DThemeWhiteButtonColor: DThemeWhiteButtonColor,
        DThemeWhiteButtonDanger: DThemeWhiteButtonDanger,
        DThemeWhiteButtonDate: DThemeWhiteButtonDate,
        DThemeWhiteButtonDatetime: DThemeWhiteButtonDatetime,
        DThemeWhiteButtonFile: DThemeWhiteButtonFile,
        DThemeWhiteButtonLink: DThemeWhiteButtonLink,
        DThemeWhiteButtonPrimary: DThemeWhiteButtonPrimary,
        DThemeWhiteButtonRadioRight: DThemeWhiteButtonRadioRight,
        DThemeWhiteButtonRadio: DThemeWhiteButtonRadio,
        DThemeWhiteButtonSecondary: DThemeWhiteButtonSecondary,
        DThemeWhiteButtonSelect: DThemeWhiteButtonSelect,
        DThemeWhiteButtonTime: DThemeWhiteButtonTime,
        DThemeWhiteButton: DThemeWhiteButton,
        DThemeWhiteCanvasContainer: DThemeWhiteCanvasContainer,
        DThemeWhiteCanvas: DThemeWhiteCanvas,
        DThemeWhiteChartAxisBase: DThemeWhiteChartAxisBase,
        DThemeWhiteChartAxisXDatetime: DThemeWhiteChartAxisXDatetime,
        DThemeWhiteChartAxisX: DThemeWhiteChartAxisX,
        DThemeWhiteChartAxisY: DThemeWhiteChartAxisY,
        DThemeWhiteChartCoordinateTick: DThemeWhiteChartCoordinateTick,
        DThemeWhiteChartCoordinateTransform: DThemeWhiteChartCoordinateTransform,
        DThemeWhiteChartCoordinate: DThemeWhiteChartCoordinate,
        DThemeWhiteChartLegendItem: DThemeWhiteChartLegendItem,
        DThemeWhiteChartLegend: DThemeWhiteChartLegend,
        DThemeWhiteChartOverview: DThemeWhiteChartOverview,
        DThemeWhiteChartPlotArea: DThemeWhiteChartPlotArea,
        DThemeWhiteChartSelectionGridlineX: DThemeWhiteChartSelectionGridlineX,
        DThemeWhiteChartSelectionGridlineY: DThemeWhiteChartSelectionGridlineY,
        DThemeWhiteChartSelectionMarker: DThemeWhiteChartSelectionMarker,
        DThemeWhiteChartSelectionShape: DThemeWhiteChartSelectionShape,
        DThemeWhiteChart: DThemeWhiteChart,
        DThemeWhiteColorRecent: DThemeWhiteColorRecent,
        DThemeWhiteColorStandard: DThemeWhiteColorStandard,
        DThemeWhiteConstants: DThemeWhiteConstants,
        DThemeWhiteContent: DThemeWhiteContent,
        DThemeWhiteDiagramBase: DThemeWhiteDiagramBase,
        DThemeWhiteDiagramCanvasBase: DThemeWhiteDiagramCanvasBase,
        DThemeWhiteDiagramCanvasEditor: DThemeWhiteDiagramCanvasEditor,
        DThemeWhiteDiagramCanvas: DThemeWhiteDiagramCanvas,
        DThemeWhiteDiagramEditor: DThemeWhiteDiagramEditor,
        DThemeWhiteDiagram: DThemeWhiteDiagram,
        DThemeWhiteDialogColorGradient: DThemeWhiteDialogColorGradient,
        DThemeWhiteDialogColor: DThemeWhiteDialogColor,
        DThemeWhiteDialogConfirmDelete: DThemeWhiteDialogConfirmDelete,
        DThemeWhiteDialogConfirmMessage: DThemeWhiteDialogConfirmMessage,
        DThemeWhiteDialogConfirm: DThemeWhiteDialogConfirm,
        DThemeWhiteDialogDate: DThemeWhiteDialogDate,
        DThemeWhiteDialogDatetime: DThemeWhiteDialogDatetime,
        DThemeWhiteDialogFittedContent: DThemeWhiteDialogFittedContent,
        DThemeWhiteDialogFitted: DThemeWhiteDialogFitted,
        DThemeWhiteDialogInputBoolean: DThemeWhiteDialogInputBoolean,
        DThemeWhiteDialogInputInteger: DThemeWhiteDialogInputInteger,
        DThemeWhiteDialogInputReal: DThemeWhiteDialogInputReal,
        DThemeWhiteDialogInputText: DThemeWhiteDialogInputText,
        DThemeWhiteDialogInput: DThemeWhiteDialogInput,
        DThemeWhiteDialogLayeredContent: DThemeWhiteDialogLayeredContent,
        DThemeWhiteDialogLayeredFooter: DThemeWhiteDialogLayeredFooter,
        DThemeWhiteDialogLayeredHeaderButtonClose: DThemeWhiteDialogLayeredHeaderButtonClose,
        DThemeWhiteDialogLayeredHeaderSeparator: DThemeWhiteDialogLayeredHeaderSeparator,
        DThemeWhiteDialogLayeredHeader: DThemeWhiteDialogLayeredHeader,
        DThemeWhiteDialogLayered: DThemeWhiteDialogLayered,
        DThemeWhiteDialogMessage: DThemeWhiteDialogMessage,
        DThemeWhiteDialogProcessingMessage: DThemeWhiteDialogProcessingMessage,
        DThemeWhiteDialogProcessing: DThemeWhiteDialogProcessing,
        DThemeWhiteDialogSaveAs: DThemeWhiteDialogSaveAs,
        DThemeWhiteDialogSelectListItem: DThemeWhiteDialogSelectListItem,
        DThemeWhiteDialogSelectList: DThemeWhiteDialogSelectList,
        DThemeWhiteDialogSelect: DThemeWhiteDialogSelect,
        DThemeWhiteDialogTime: DThemeWhiteDialogTime,
        DThemeWhiteDialog: DThemeWhiteDialog,
        DThemeWhiteDropdownBase: DThemeWhiteDropdownBase,
        DThemeWhiteDropdown: DThemeWhiteDropdown,
        DThemeWhiteExpandableHeader: DThemeWhiteExpandableHeader,
        DThemeWhiteExpandable: DThemeWhiteExpandable,
        DThemeWhiteExpandables: DThemeWhiteExpandables,
        DThemeWhiteFont: DThemeWhiteFont,
        DThemeWhiteHtmlElement: DThemeWhiteHtmlElement,
        DThemeWhiteImageBase: DThemeWhiteImageBase,
        DThemeWhiteImage: DThemeWhiteImage,
        DThemeWhiteIndicatorProcess: DThemeWhiteIndicatorProcess,
        DThemeWhiteInputAndLabel: DThemeWhiteInputAndLabel,
        DThemeWhiteInputBooleanButtonOff: DThemeWhiteInputBooleanButtonOff,
        DThemeWhiteInputBooleanButtonOn: DThemeWhiteInputBooleanButtonOn,
        DThemeWhiteInputBoolean: DThemeWhiteInputBoolean,
        DThemeWhiteInputInput: DThemeWhiteInputInput,
        DThemeWhiteInputInteger: DThemeWhiteInputInteger,
        DThemeWhiteInputLabel: DThemeWhiteInputLabel,
        DThemeWhiteInputNumber: DThemeWhiteInputNumber,
        DThemeWhiteInputReal: DThemeWhiteInputReal,
        DThemeWhiteInputSearch: DThemeWhiteInputSearch,
        DThemeWhiteInputTextArea: DThemeWhiteInputTextArea,
        DThemeWhiteInputText: DThemeWhiteInputText,
        DThemeWhiteInput: DThemeWhiteInput,
        DThemeWhiteLayoutHorizontal: DThemeWhiteLayoutHorizontal,
        DThemeWhiteLayoutSpace: DThemeWhiteLayoutSpace,
        DThemeWhiteLayoutVertical: DThemeWhiteLayoutVertical,
        DThemeWhiteLayout: DThemeWhiteLayout,
        DThemeWhiteLink: DThemeWhiteLink,
        DThemeWhiteListItemAmbient: DThemeWhiteListItemAmbient,
        DThemeWhiteListItem: DThemeWhiteListItem,
        DThemeWhiteListItems: DThemeWhiteListItems,
        DThemeWhiteList: DThemeWhiteList,
        DThemeWhiteMenuBarItem: DThemeWhiteMenuBarItem,
        DThemeWhiteMenuBar: DThemeWhiteMenuBar,
        DThemeWhiteMenuItemBase: DThemeWhiteMenuItemBase,
        DThemeWhiteMenuItemCheck: DThemeWhiteMenuItemCheck,
        DThemeWhiteMenuItemExpandableBody: DThemeWhiteMenuItemExpandableBody,
        DThemeWhiteMenuItemExpandableHeader: DThemeWhiteMenuItemExpandableHeader,
        DThemeWhiteMenuItemExpandableItemCheck: DThemeWhiteMenuItemExpandableItemCheck,
        DThemeWhiteMenuItemExpandableItemLink: DThemeWhiteMenuItemExpandableItemLink,
        DThemeWhiteMenuItemExpandableItemMenu: DThemeWhiteMenuItemExpandableItemMenu,
        DThemeWhiteMenuItemExpandableItemSeparator: DThemeWhiteMenuItemExpandableItemSeparator,
        DThemeWhiteMenuItemExpandableItemSpace: DThemeWhiteMenuItemExpandableItemSpace,
        DThemeWhiteMenuItemExpandableItemText: DThemeWhiteMenuItemExpandableItemText,
        DThemeWhiteMenuItemExpandable: DThemeWhiteMenuItemExpandable,
        DThemeWhiteMenuItemLink: DThemeWhiteMenuItemLink,
        DThemeWhiteMenuItemMenu: DThemeWhiteMenuItemMenu,
        DThemeWhiteMenuItemSeparator: DThemeWhiteMenuItemSeparator,
        DThemeWhiteMenuItemSpace: DThemeWhiteMenuItemSpace,
        DThemeWhiteMenuItemText: DThemeWhiteMenuItemText,
        DThemeWhiteMenuItem: DThemeWhiteMenuItem,
        DThemeWhiteMenuSidedContent: DThemeWhiteMenuSidedContent,
        DThemeWhiteMenuSidedItemCheck: DThemeWhiteMenuSidedItemCheck,
        DThemeWhiteMenuSidedItemExpandableItemCheck: DThemeWhiteMenuSidedItemExpandableItemCheck,
        DThemeWhiteMenuSidedItemExpandableItemLink: DThemeWhiteMenuSidedItemExpandableItemLink,
        DThemeWhiteMenuSidedItemExpandableItemMenu: DThemeWhiteMenuSidedItemExpandableItemMenu,
        DThemeWhiteMenuSidedItemExpandableItemSeparator: DThemeWhiteMenuSidedItemExpandableItemSeparator,
        DThemeWhiteMenuSidedItemExpandableItemSpace: DThemeWhiteMenuSidedItemExpandableItemSpace,
        DThemeWhiteMenuSidedItemExpandableItemText: DThemeWhiteMenuSidedItemExpandableItemText,
        DThemeWhiteMenuSidedItemExpandable: DThemeWhiteMenuSidedItemExpandable,
        DThemeWhiteMenuSidedItemLink: DThemeWhiteMenuSidedItemLink,
        DThemeWhiteMenuSidedItemMenu: DThemeWhiteMenuSidedItemMenu,
        DThemeWhiteMenuSidedItemSeparator: DThemeWhiteMenuSidedItemSeparator,
        DThemeWhiteMenuSidedItemSpace: DThemeWhiteMenuSidedItemSpace,
        DThemeWhiteMenuSidedItemText: DThemeWhiteMenuSidedItemText,
        DThemeWhiteMenuSided: DThemeWhiteMenuSided,
        DThemeWhiteMenu: DThemeWhiteMenu,
        DThemeWhiteNoteError: DThemeWhiteNoteError,
        DThemeWhiteNoteNoItemsFound: DThemeWhiteNoteNoItemsFound,
        DThemeWhiteNoteSearching: DThemeWhiteNoteSearching,
        DThemeWhiteNoteSmallError: DThemeWhiteNoteSmallError,
        DThemeWhiteNoteSmallNoItemsFound: DThemeWhiteNoteSmallNoItemsFound,
        DThemeWhiteNoteSmallSearching: DThemeWhiteNoteSmallSearching,
        DThemeWhiteNoteSmall: DThemeWhiteNoteSmall,
        DThemeWhiteNote: DThemeWhiteNote,
        DThemeWhitePaginationButtonLast: DThemeWhitePaginationButtonLast,
        DThemeWhitePaginationButtonNext: DThemeWhitePaginationButtonNext,
        DThemeWhitePaginationButtonPage: DThemeWhitePaginationButtonPage,
        DThemeWhitePaginationButtonPrevious: DThemeWhitePaginationButtonPrevious,
        DThemeWhitePaginationButtonTop: DThemeWhitePaginationButtonTop,
        DThemeWhitePaginationDots: DThemeWhitePaginationDots,
        DThemeWhitePaginationPage: DThemeWhitePaginationPage,
        DThemeWhitePagination: DThemeWhitePagination,
        DThemeWhitePane: DThemeWhitePane,
        DThemeWhitePickerColorGradient: DThemeWhitePickerColorGradient,
        DThemeWhitePickerColor: DThemeWhitePickerColor,
        DThemeWhitePickerDatetimeButtonBack: DThemeWhitePickerDatetimeButtonBack,
        DThemeWhitePickerDatetimeButtonDate: DThemeWhitePickerDatetimeButtonDate,
        DThemeWhitePickerDatetimeButtonNext: DThemeWhitePickerDatetimeButtonNext,
        DThemeWhitePickerDatetimeLabelDate: DThemeWhitePickerDatetimeLabelDate,
        DThemeWhitePickerDatetimeLabel: DThemeWhitePickerDatetimeLabel,
        DThemeWhitePickerDatetimeSpace: DThemeWhitePickerDatetimeSpace,
        DThemeWhitePickerTime: DThemeWhitePickerTime,
        DThemeWhiteScrollBarThumb: DThemeWhiteScrollBarThumb,
        DThemeWhiteScrollBar: DThemeWhiteScrollBar,
        DThemeWhiteSelectMultiple: DThemeWhiteSelectMultiple,
        DThemeWhiteSelect: DThemeWhiteSelect,
        DThemeWhiteSliderHorizontal: DThemeWhiteSliderHorizontal,
        DThemeWhiteSliderLabel: DThemeWhiteSliderLabel,
        DThemeWhiteSliderThumb: DThemeWhiteSliderThumb,
        DThemeWhiteSliderTrackHorizontal: DThemeWhiteSliderTrackHorizontal,
        DThemeWhiteSliderTrackVertical: DThemeWhiteSliderTrackVertical,
        DThemeWhiteSliderTrack: DThemeWhiteSliderTrack,
        DThemeWhiteSliderValue: DThemeWhiteSliderValue,
        DThemeWhiteSliderVertical: DThemeWhiteSliderVertical,
        DThemeWhiteSlider: DThemeWhiteSlider,
        DThemeWhiteSliders: DThemeWhiteSliders,
        DThemeWhiteTableBodyCellActionDialog: DThemeWhiteTableBodyCellActionDialog,
        DThemeWhiteTableBodyCellActionMenu: DThemeWhiteTableBodyCellActionMenu,
        DThemeWhiteTableBodyCellActionPromise: DThemeWhiteTableBodyCellActionPromise,
        DThemeWhiteTableBodyCellActions: DThemeWhiteTableBodyCellActions,
        DThemeWhiteTableBodyCellButton: DThemeWhiteTableBodyCellButton,
        DThemeWhiteTableBodyCellCheck: DThemeWhiteTableBodyCellCheck,
        DThemeWhiteTableBodyCellColor: DThemeWhiteTableBodyCellColor,
        DThemeWhiteTableBodyCellDate: DThemeWhiteTableBodyCellDate,
        DThemeWhiteTableBodyCellDatetime: DThemeWhiteTableBodyCellDatetime,
        DThemeWhiteTableBodyCellIndex: DThemeWhiteTableBodyCellIndex,
        DThemeWhiteTableBodyCellInputInteger: DThemeWhiteTableBodyCellInputInteger,
        DThemeWhiteTableBodyCellInputReal: DThemeWhiteTableBodyCellInputReal,
        DThemeWhiteTableBodyCellInputTextArea: DThemeWhiteTableBodyCellInputTextArea,
        DThemeWhiteTableBodyCellInputText: DThemeWhiteTableBodyCellInputText,
        DThemeWhiteTableBodyCellInputTreeInput: DThemeWhiteTableBodyCellInputTreeInput,
        DThemeWhiteTableBodyCellInputTreeMarker: DThemeWhiteTableBodyCellInputTreeMarker,
        DThemeWhiteTableBodyCellInputTree: DThemeWhiteTableBodyCellInputTree,
        DThemeWhiteTableBodyCellLink: DThemeWhiteTableBodyCellLink,
        DThemeWhiteTableBodyCellSelectDialog: DThemeWhiteTableBodyCellSelectDialog,
        DThemeWhiteTableBodyCellSelectMenu: DThemeWhiteTableBodyCellSelectMenu,
        DThemeWhiteTableBodyCellSelectMultiple: DThemeWhiteTableBodyCellSelectMultiple,
        DThemeWhiteTableBodyCellSelectPromise: DThemeWhiteTableBodyCellSelectPromise,
        DThemeWhiteTableBodyCellTextArea: DThemeWhiteTableBodyCellTextArea,
        DThemeWhiteTableBodyCellText: DThemeWhiteTableBodyCellText,
        DThemeWhiteTableBodyCellTime: DThemeWhiteTableBodyCellTime,
        DThemeWhiteTableBodyCellTree: DThemeWhiteTableBodyCellTree,
        DThemeWhiteTableBodyCellTrees: DThemeWhiteTableBodyCellTrees,
        DThemeWhiteTableBodyCells: DThemeWhiteTableBodyCells,
        DThemeWhiteTableBodyRow: DThemeWhiteTableBodyRow,
        DThemeWhiteTableBody: DThemeWhiteTableBody,
        DThemeWhiteTableCategoryCell: DThemeWhiteTableCategoryCell,
        DThemeWhiteTableCategory: DThemeWhiteTableCategory,
        DThemeWhiteTableHeaderCell: DThemeWhiteTableHeaderCell,
        DThemeWhiteTableHeader: DThemeWhiteTableHeader,
        DThemeWhiteTableRow: DThemeWhiteTableRow,
        DThemeWhiteTable: DThemeWhiteTable,
        DThemeWhiteTextBase: DThemeWhiteTextBase,
        DThemeWhiteText: DThemeWhiteText,
        DThemeWhiteTreeItemButton: DThemeWhiteTreeItemButton,
        DThemeWhiteTreeItemNonEditable: DThemeWhiteTreeItemNonEditable,
        DThemeWhiteTreeItemText: DThemeWhiteTreeItemText,
        DThemeWhiteTreeItems: DThemeWhiteTreeItems,
        DThemeWhiteTree: DThemeWhiteTree,
        DThemeWhiteView: DThemeWhiteView,
        DThemeWhite: DThemeWhite,
        EThemeWhiteShapeActionValue: EThemeWhiteShapeActionValue,
        EThemeWhiteShapePointsFormatter: EThemeWhiteShapePointsFormatter,
        EThemeWhiteShape: EThemeWhiteShape,
        DThemeWhiteJaJpDiagramEditor: DThemeWhiteJaJpDiagramEditor,
        DThemeWhiteJaJpDialogConfirmDelete: DThemeWhiteJaJpDialogConfirmDelete,
        DThemeWhiteJaJpDialogConfirmDiscard: DThemeWhiteJaJpDialogConfirmDiscard,
        DThemeWhiteJaJpDialogConfirm: DThemeWhiteJaJpDialogConfirm,
        DThemeWhiteJaJpDialogLayeredFooter: DThemeWhiteJaJpDialogLayeredFooter,
        DThemeWhiteJaJpDialogMessage: DThemeWhiteJaJpDialogMessage,
        dThemeWhiteJaJpDialogProcessingMessage: dThemeWhiteJaJpDialogProcessingMessage,
        DThemeWhiteJaJpDialogProcessing: DThemeWhiteJaJpDialogProcessing,
        DThemeWhiteJaJpDialogSaveAs: DThemeWhiteJaJpDialogSaveAs,
        DThemeWhiteJaJpDialogSelect: DThemeWhiteJaJpDialogSelect,
        DThemeWhiteJaJpIndicatorProcessing: DThemeWhiteJaJpIndicatorProcessing,
        DThemeWhiteJaJpInputBooleanButtonOff: DThemeWhiteJaJpInputBooleanButtonOff,
        DThemeWhiteJaJpInputBooleanButtonOn: DThemeWhiteJaJpInputBooleanButtonOn,
        DThemeWhiteJaJpLink: DThemeWhiteJaJpLink,
        DThemeWhiteJaJpNoteError: DThemeWhiteJaJpNoteError,
        DThemeWhiteJaJpNoteNoItemsFound: DThemeWhiteJaJpNoteNoItemsFound,
        DThemeWhiteJaJpNoteSearching: DThemeWhiteJaJpNoteSearching,
        DThemeWhiteJaJpPickerColor: DThemeWhiteJaJpPickerColor,
        DThemeWhiteJaJpPickerDate: DThemeWhiteJaJpPickerDate,
        DThemeWhiteJaJpPickerDatetime: DThemeWhiteJaJpPickerDatetime,
        DThemeWhiteJaJpPickerTime: DThemeWhiteJaJpPickerTime,
        EThemeWhiteJaJpShapePointsFormatter: EThemeWhiteJaJpShapePointsFormatter
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    loadThemeWhiteJaJpAll();
    var global = window;
    global.wcardinal = global.wcardinal || {};
    var dest = (global.wcardinal.ui = global.wcardinal.ui || {});
    var src = white;
    for (var name_1 in src) {
        dest[name_1] = src[name_1];
    }

})(PIXI);
