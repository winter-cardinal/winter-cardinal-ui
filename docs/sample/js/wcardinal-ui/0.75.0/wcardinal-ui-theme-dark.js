/*
 Winter Cardinal UI v0.75.0
 Copyright (C) 2019 Toshiba Corporation
 SPDX-License-Identifier: Apache-2.0

 Material Design icons by Google
 Apache license version 2.0.
*/
(function () {
    'use strict';

    const DThemes = wcardinal.ui.DThemes;

    const UtilSvgAtlasBuilder = wcardinal.ui.UtilSvgAtlasBuilder;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkAtlas = new UtilSvgAtlasBuilder(256, 1, 3);

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDark = /** @class */ (function () {
        function DThemeDark() {
            this._instances = {};
        }
        DThemeDark.prototype.get = function (type) {
            var instance = this._instances[type];
            if (instance != null) {
                return instance;
            }
            else {
                var klass = DThemeDark._classes[type];
                if (klass != null) {
                    instance = this._instances[type] = new klass();
                    return instance;
                }
                else {
                    throw new Error("No theme for the type '" + type + "'");
                }
            }
        };
        DThemeDark.prototype.getAtlas = function () {
            return DThemeDarkAtlas;
        };
        DThemeDark.set = function (type, themeClass) {
            this._classes[type] = themeClass;
        };
        DThemeDark._classes = {};
        return DThemeDark;
    }());

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDark = function () {
        DThemes.setDefaultThemeClass(DThemeDark);
    };

    /*! *****************************************************************************
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
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    const DBaseInteractive = wcardinal.ui.DBaseInteractive;

    const DBorderMask = wcardinal.ui.DBorderMask;

    const DCornerMask = wcardinal.ui.DCornerMask;

    const DLayoutClearType = wcardinal.ui.DLayoutClearType;

    const DShadowImpl = wcardinal.ui.DShadowImpl;

    const UtilTexturePlane = wcardinal.ui.UtilTexturePlane;

    const UtilRgb = wcardinal.ui.UtilRgb;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkConstants = /** @class */ (function () {
        function DThemeDarkConstants() {
        }
        DThemeDarkConstants.COLOR = 0xcccccc;
        DThemeDarkConstants.ACTIVE_COLOR = 0x000000;
        DThemeDarkConstants.BORDER_COLOR = 0x4a4a4a;
        DThemeDarkConstants.BACKGROUND_COLOR = 0x2E2E2E;
        DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD = 0x1f1f1f;
        DThemeDarkConstants.HIGHLIGHT_COLOR = 0x2297f3;
        DThemeDarkConstants.HIGHLIGHT_ALPHA = 0.2;
        DThemeDarkConstants.HIGHLIGHT_BLENDED = UtilRgb.blend(DThemeDarkConstants.BACKGROUND_COLOR, DThemeDarkConstants.HIGHLIGHT_COLOR, DThemeDarkConstants.HIGHLIGHT_ALPHA);
        DThemeDarkConstants.HIGHLIGHT_BLENDED_ON_BOARD = UtilRgb.blend(DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD, DThemeDarkConstants.HIGHLIGHT_COLOR, DThemeDarkConstants.HIGHLIGHT_ALPHA);
        DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR = 0x555555;
        DThemeDarkConstants.WEAK_HIGHLIGHT_ALPHA = 0.2;
        DThemeDarkConstants.WEAK_HIGHLIGHT_BLENDED = UtilRgb.blend(DThemeDarkConstants.BACKGROUND_COLOR, DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR, DThemeDarkConstants.WEAK_HIGHLIGHT_ALPHA);
        DThemeDarkConstants.WEAK_HIGHLIGHT_BLENDED_ON_BOARD = UtilRgb.blend(DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD, DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR, DThemeDarkConstants.WEAK_HIGHLIGHT_ALPHA);
        DThemeDarkConstants.INVALID_COLOR = 0xda0e0e;
        DThemeDarkConstants.INVALID_ALPHA = 0.2;
        DThemeDarkConstants.INVALID_BLENDED = UtilRgb.blend(DThemeDarkConstants.BACKGROUND_COLOR, DThemeDarkConstants.INVALID_COLOR, DThemeDarkConstants.INVALID_ALPHA);
        DThemeDarkConstants.INVALID_BLENDED_ON_BOARD = UtilRgb.blend(DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD, DThemeDarkConstants.INVALID_COLOR, DThemeDarkConstants.INVALID_ALPHA);
        return DThemeDarkConstants;
    }());

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkFont = /** @class */ (function () {
        function DThemeDarkFont() {
        }
        DThemeDarkFont.prototype.getFontFamilly = function () {
            return "ProximaNova,-apple-system,Meiryo,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif";
        };
        DThemeDarkFont.prototype.getFontSize = function () {
            return 14;
        };
        DThemeDarkFont.prototype.getColor = function (state) {
            return DThemeDarkConstants.COLOR;
        };
        DThemeDarkFont.prototype.getFontWeight = function () {
            return "normal";
        };
        DThemeDarkFont.prototype.getFontStyle = function () {
            return "normal";
        };
        DThemeDarkFont.prototype.getFontVariant = function () {
            return "normal";
        };
        DThemeDarkFont.prototype.getAlpha = function (state) {
            if (state.inDisabled) {
                return 0.5;
            }
            return 1.0;
        };
        DThemeDarkFont.prototype.getLineHeight = function () {
            return 30;
        };
        return DThemeDarkFont;
    }());

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var newShadow = function (id, radius, opacity) {
        var d = radius * 2;
        DThemeDarkAtlas.add(id, d, d, "<g>" +
            "<defs>" +
            ("<radialGradient id=\"" + id + "_filter\">") +
            ("<stop offset=\"0%\" stop-color=\"black\" stop-opacity=\"" + opacity + "\" />") +
            "<stop offset=\"100%\" stop-color=\"black\" stop-opacity=\"0\" />" +
            "</radialGradient>" +
            "</defs>" +
            ("<rect x=\"0\" y=\"0\" width=\"" + d + "\" height=\"" + d + "\" fill=\"url(#" + id + "_filter)\"/>") +
            "</g>");
    };
    newShadow("shadow_weak", 8, 0.5);
    newShadow("shadow", 12, 0.5);
    var DThemeDarkBase = /** @class */ (function (_super) {
        __extends(DThemeDarkBase, _super);
        function DThemeDarkBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkBase.prototype.getX = function () {
            return 0;
        };
        DThemeDarkBase.prototype.getY = function () {
            return 0;
        };
        DThemeDarkBase.prototype.getHeight = function () {
            return 100;
        };
        DThemeDarkBase.prototype.getWidth = function () {
            return 100;
        };
        DThemeDarkBase.prototype.getBackgroundColor = function (state) {
            return null;
        };
        DThemeDarkBase.prototype.getBackgroundAlpha = function (state) {
            return 1;
        };
        DThemeDarkBase.prototype.getBackgroundTexture = function (radius) {
            return UtilTexturePlane.getInstance().getBackground(radius);
        };
        DThemeDarkBase.prototype.getBorderColor = function (state) {
            if (state.isFocused) {
                return DThemeDarkConstants.HIGHLIGHT_COLOR;
            }
            return null;
        };
        DThemeDarkBase.prototype.getBorderAlpha = function (state) {
            return 1;
        };
        DThemeDarkBase.prototype.getBorderWidth = function (state) {
            return 1;
        };
        DThemeDarkBase.prototype.getBorderAlign = function (state) {
            return 0.5;
        };
        DThemeDarkBase.prototype.getBorderMask = function (state) {
            return DBorderMask.NONE;
        };
        DThemeDarkBase.prototype.getBorderTexture = function (radius, width) {
            return UtilTexturePlane.getInstance().getBorder(radius, width);
        };
        DThemeDarkBase.prototype.getPaddingLeft = function () {
            return 0;
        };
        DThemeDarkBase.prototype.getPaddingRight = function () {
            return 0;
        };
        DThemeDarkBase.prototype.getPaddingTop = function () {
            return 0;
        };
        DThemeDarkBase.prototype.getPaddingBottom = function () {
            return 0;
        };
        DThemeDarkBase.prototype.getCornerRadius = function () {
            return 3;
        };
        DThemeDarkBase.prototype.getCornerMask = function () {
            return DCornerMask.NONE;
        };
        DThemeDarkBase.prototype.getOutlineColor = function (state) {
            return null;
        };
        DThemeDarkBase.prototype.getOutlineAlpha = function (state) {
            return 1;
        };
        DThemeDarkBase.prototype.getOutlineWidth = function (state) {
            return 1;
        };
        DThemeDarkBase.prototype.getOutlineOffset = function (state) {
            return 1;
        };
        DThemeDarkBase.prototype.getOutlineAlign = function (state) {
            return 1;
        };
        DThemeDarkBase.prototype.getOutlineMask = function (state) {
            return DBorderMask.NONE;
        };
        DThemeDarkBase.prototype.getClearType = function () {
            return DLayoutClearType.NONE;
        };
        DThemeDarkBase.prototype.getShadow = function () {
            return null;
        };
        DThemeDarkBase.prototype.getInteractive = function () {
            return DBaseInteractive.SELF;
        };
        DThemeDarkBase.prototype.getTitle = function () {
            return "";
        };
        DThemeDarkBase.prototype.getWeight = function () {
            return -1;
        };
        DThemeDarkBase.prototype.newShadow = function () {
            return new DShadowImpl(DThemeDarkAtlas.mappings.shadow, 12, 12, 0, 3);
        };
        DThemeDarkBase.prototype.newShadowWeak = function () {
            return new DShadowImpl(DThemeDarkAtlas.mappings.shadow_weak, 8, 8, 0, 2);
        };
        DThemeDarkBase.prototype.getCursor = function (state) {
            return "";
        };
        return DThemeDarkBase;
    }(DThemeDarkFont));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkBase = function () {
        DThemeDark.set("DBase", DThemeDarkBase);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkBoard = /** @class */ (function (_super) {
        __extends(DThemeDarkBoard, _super);
        function DThemeDarkBoard() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.COLOR = 0x2C2C2C;
            return _this;
        }
        DThemeDarkBoard.prototype.getBackgroundColor = function () {
            return this.COLOR;
        };
        DThemeDarkBoard.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeDarkBoard.prototype.getCornerMask = function () {
            return DCornerMask.ALL;
        };
        DThemeDarkBoard.prototype.getPaddingLeft = function () {
            return 16;
        };
        DThemeDarkBoard.prototype.getPaddingTop = function () {
            return 16;
        };
        DThemeDarkBoard.prototype.getPaddingRight = function () {
            return 16;
        };
        DThemeDarkBoard.prototype.getPaddingBottom = function () {
            return 16;
        };
        DThemeDarkBoard.prototype.getInteractive = function () {
            return DBaseInteractive.BOTH;
        };
        return DThemeDarkBoard;
    }(DThemeDarkBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkBoard = function () {
        DThemeDark.set("DBoard", DThemeDarkBoard);
    };

    const DAlignHorizontal = wcardinal.ui.DAlignHorizontal;

    const DButtonBaseWhen = wcardinal.ui.DButtonBaseWhen;

    const DAlignVertical = wcardinal.ui.DAlignVertical;

    const DAlignWith = wcardinal.ui.DAlignWith;

    const toString = wcardinal.ui.toString;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkTextBase = /** @class */ (function (_super) {
        __extends(DThemeDarkTextBase, _super);
        function DThemeDarkTextBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkTextBase.prototype.getTextAlignVertical = function () {
            return DAlignVertical.MIDDLE;
        };
        DThemeDarkTextBase.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.LEFT;
        };
        DThemeDarkTextBase.prototype.isOverflowMaskEnabled = function () {
            return false;
        };
        DThemeDarkTextBase.prototype.isTextDynamic = function () {
            return true;
        };
        DThemeDarkTextBase.prototype.getTextStyleClipping = function () {
            return true;
        };
        DThemeDarkTextBase.prototype.getTextFormatter = function () {
            return toString;
        };
        DThemeDarkTextBase.prototype.getTextValue = function (state) {
            return undefined;
        };
        DThemeDarkTextBase.prototype.newTextValue = function () {
            return undefined;
        };
        return DThemeDarkTextBase;
    }(DThemeDarkBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkImageBase = /** @class */ (function (_super) {
        __extends(DThemeDarkImageBase, _super);
        function DThemeDarkImageBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkImageBase.prototype.getImageAlignHorizontal = function () {
            return DAlignHorizontal.LEFT;
        };
        DThemeDarkImageBase.prototype.getImageAlignVertical = function () {
            return DAlignVertical.MIDDLE;
        };
        DThemeDarkImageBase.prototype.getImageAlignWith = function () {
            return DAlignWith.TEXT;
        };
        DThemeDarkImageBase.prototype.getImageMarginHorizontal = function () {
            return 5;
        };
        DThemeDarkImageBase.prototype.getImageMarginVertial = function () {
            return 5;
        };
        DThemeDarkImageBase.prototype.getImageTintColor = function (state) {
            return this.getColor(state);
        };
        DThemeDarkImageBase.prototype.getImageTintAlpha = function (state) {
            return this.getAlpha(state);
        };
        DThemeDarkImageBase.prototype.getImageSource = function (state) {
            return null;
        };
        DThemeDarkImageBase.prototype.getSecondaryImageAlignHorizontal = function () {
            return this.getImageAlignHorizontal();
        };
        DThemeDarkImageBase.prototype.getSecondaryImageAlignVertical = function () {
            return this.getImageAlignVertical();
        };
        DThemeDarkImageBase.prototype.getSecondaryImageAlignWith = function () {
            return this.getImageAlignWith();
        };
        DThemeDarkImageBase.prototype.getSecondaryImageMarginHorizontal = function () {
            return this.getImageMarginHorizontal();
        };
        DThemeDarkImageBase.prototype.getSecondaryImageMarginVertial = function () {
            return this.getImageMarginVertial();
        };
        DThemeDarkImageBase.prototype.getSecondaryImageTintColor = function (state) {
            return this.getImageTintColor(state);
        };
        DThemeDarkImageBase.prototype.getSecondaryImageTintAlpha = function (state) {
            return this.getImageTintAlpha(state);
        };
        DThemeDarkImageBase.prototype.getTertiaryImageAlignHorizontal = function () {
            return this.getImageAlignHorizontal();
        };
        DThemeDarkImageBase.prototype.getTertiaryImageAlignVertical = function () {
            return this.getImageAlignVertical();
        };
        DThemeDarkImageBase.prototype.getTertiaryImageAlignWith = function () {
            return this.getImageAlignWith();
        };
        DThemeDarkImageBase.prototype.getTertiaryImageMarginHorizontal = function () {
            return this.getImageMarginHorizontal();
        };
        DThemeDarkImageBase.prototype.getTertiaryImageMarginVertial = function () {
            return this.getImageMarginVertial();
        };
        DThemeDarkImageBase.prototype.getTertiaryImageTintColor = function (state) {
            return this.getImageTintColor(state);
        };
        DThemeDarkImageBase.prototype.getTertiaryImageTintAlpha = function (state) {
            return this.getImageTintAlpha(state);
        };
        return DThemeDarkImageBase;
    }(DThemeDarkTextBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkButtonBase = /** @class */ (function (_super) {
        __extends(DThemeDarkButtonBase, _super);
        function DThemeDarkButtonBase(backgrouncColor, hover, pressed) {
            if (backgrouncColor === void 0) { backgrouncColor = 0x484848; }
            if (hover === void 0) { hover = 0.017; }
            if (pressed === void 0) { pressed = 0.034; }
            var _this = _super.call(this) || this;
            _this.BACKGROUND_COLOR = backgrouncColor;
            _this.BACKGROUND_COLOR_HOVERED = UtilRgb.brighten(_this.BACKGROUND_COLOR, hover);
            _this.BACKGROUND_COLOR_PRESSED = UtilRgb.brighten(_this.BACKGROUND_COLOR, pressed);
            return _this;
        }
        DThemeDarkButtonBase.prototype.getBackgroundColor = function (state) {
            if (state.inDisabled) {
                return null;
            }
            else if (state.isActive) {
                return DThemeDarkConstants.HIGHLIGHT_COLOR;
            }
            else if (state.isPressed) {
                return this.BACKGROUND_COLOR_PRESSED;
            }
            else if (state.isFocused || state.isHovered) {
                return this.BACKGROUND_COLOR_HOVERED;
            }
            else {
                return this.BACKGROUND_COLOR;
            }
        };
        DThemeDarkButtonBase.prototype.getColor = function (state) {
            if (state.inDisabled || !state.isActive) {
                return _super.prototype.getColor.call(this, state);
            }
            else {
                return DThemeDarkConstants.ACTIVE_COLOR;
            }
        };
        DThemeDarkButtonBase.prototype.getBorderColor = function (state) {
            if (state.inDisabled) {
                return DThemeDarkConstants.BORDER_COLOR;
            }
            else {
                return null;
            }
        };
        DThemeDarkButtonBase.prototype.getHeight = function () {
            return 30;
        };
        DThemeDarkButtonBase.prototype.getWidth = function () {
            return 100;
        };
        DThemeDarkButtonBase.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.CENTER;
        };
        DThemeDarkButtonBase.prototype.getPaddingLeft = function () {
            return 10;
        };
        DThemeDarkButtonBase.prototype.getPaddingRight = function () {
            return 10;
        };
        DThemeDarkButtonBase.prototype.isToggle = function () {
            return false;
        };
        DThemeDarkButtonBase.prototype.getWhen = function () {
            return DButtonBaseWhen.CLICKED;
        };
        DThemeDarkButtonBase.prototype.getCursor = function (state) {
            if (!state.isActionable) {
                return "";
            }
            return "pointer";
        };
        return DThemeDarkButtonBase;
    }(DThemeDarkImageBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkButton = /** @class */ (function (_super) {
        __extends(DThemeDarkButton, _super);
        function DThemeDarkButton() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeDarkButton;
    }(DThemeDarkButtonBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkButton = function () {
        DThemeDark.set("DButton", DThemeDarkButton);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkButtonAmbient = /** @class */ (function (_super) {
        __extends(DThemeDarkButtonAmbient, _super);
        function DThemeDarkButtonAmbient() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkButtonAmbient.prototype.getBackgroundColor = function (state) {
            if (state.isActive) {
                return DThemeDarkConstants.HIGHLIGHT_COLOR;
            }
            else {
                return DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR;
            }
        };
        DThemeDarkButtonAmbient.prototype.getBackgroundAlpha = function (state) {
            if (state.inEnabled) {
                if (state.isActive) {
                    return 1.0;
                }
                else if (state.isPressed) {
                    return DThemeDarkConstants.WEAK_HIGHLIGHT_ALPHA * 2;
                }
                else if (state.isFocused || state.isHovered) {
                    return DThemeDarkConstants.WEAK_HIGHLIGHT_ALPHA;
                }
            }
            return 0;
        };
        DThemeDarkButtonAmbient.prototype.getBorderColor = function (state) {
            return null;
        };
        return DThemeDarkButtonAmbient;
    }(DThemeDarkButtonBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkButtonAmbient = function () {
        DThemeDark.set("DButtonAmbient", DThemeDarkButtonAmbient);
    };

    // Material Design icons by Google.
    // Apache license version 2.0.
    DThemeDarkAtlas.add("button_check_mark_on", 21, 21, "<g transform=\"scale(0.875,0.875)\">" +
        "<path d=\"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89" +
        "-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\" fill=\"#fff\" />" +
        "</g>");
    DThemeDarkAtlas.add("button_check_mark_off", 21, 21, "<g transform=\"scale(0.875,0.875)\">" +
        "<path d=\"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\" " +
        "fill=\"#fff\" />" +
        "</g>");
    var DThemeDarkButtonChecks = /** @class */ (function () {
        function DThemeDarkButtonChecks() {
        }
        DThemeDarkButtonChecks.getImageTintColor = function (state) {
            if (state.inDisabled || state.inReadOnly || !state.isActive) {
                if (state.isFocused) {
                    return this.IMAGE_TINT_COLOR_FOCUSED;
                }
                else {
                    return DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR;
                }
            }
            else {
                return DThemeDarkConstants.HIGHLIGHT_COLOR;
            }
        };
        DThemeDarkButtonChecks.getImageSource = function (state) {
            if (state.isActive) {
                return DThemeDarkAtlas.mappings.button_check_mark_on;
            }
            else {
                return DThemeDarkAtlas.mappings.button_check_mark_off;
            }
        };
        DThemeDarkButtonChecks.IMAGE_TINT_COLOR_FOCUSED = UtilRgb.brighten(DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR, 0.1);
        return DThemeDarkButtonChecks;
    }());

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkButtonCheck = /** @class */ (function (_super) {
        __extends(DThemeDarkButtonCheck, _super);
        function DThemeDarkButtonCheck() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkButtonCheck.prototype.getBackgroundColor = function (state) {
            return DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR;
        };
        DThemeDarkButtonCheck.prototype.getColor = function (state) {
            return DThemeDarkConstants.COLOR;
        };
        DThemeDarkButtonCheck.prototype.getBackgroundAlpha = function (state) {
            if (state.inEnabled) {
                if (state.isFocused || state.isHovered) {
                    return DThemeDarkConstants.WEAK_HIGHLIGHT_ALPHA;
                }
            }
            return 0;
        };
        DThemeDarkButtonCheck.prototype.getImageTintColor = function (state) {
            return DThemeDarkButtonChecks.getImageTintColor(state);
        };
        DThemeDarkButtonCheck.prototype.isToggle = function () {
            return true;
        };
        DThemeDarkButtonCheck.prototype.getImageSource = function (state) {
            return DThemeDarkButtonChecks.getImageSource(state);
        };
        return DThemeDarkButtonCheck;
    }(DThemeDarkButtonAmbient));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkButtonCheck = function () {
        DThemeDark.set("DButtonCheck", DThemeDarkButtonCheck);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkButtonCheckRight = /** @class */ (function (_super) {
        __extends(DThemeDarkButtonCheckRight, _super);
        function DThemeDarkButtonCheckRight() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkButtonCheckRight.prototype.getImageAlignWith = function () {
            return DAlignWith.PADDING;
        };
        DThemeDarkButtonCheckRight.prototype.getImageAlignHorizontal = function () {
            return DAlignHorizontal.RIGHT;
        };
        DThemeDarkButtonCheckRight.prototype.getImageMarginHorizontal = function () {
            return 0;
        };
        DThemeDarkButtonCheckRight.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.LEFT;
        };
        return DThemeDarkButtonCheckRight;
    }(DThemeDarkButtonCheck));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkButtonCheckRight = function () {
        DThemeDark.set("DButtonCheckRight", DThemeDarkButtonCheckRight);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    // Material Design icons by Google.
    // Apache license version 2.0.
    DThemeDarkAtlas.add("button_color_sample", 21, 21, "<g transform=\"scale(0.875,0.875)\">" +
        "<path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\" fill=\"#fff\"/>" +
        "</g>");
    var formatter = function (colorAndAlpha) {
        return "#" + UtilRgb.toCode(colorAndAlpha.color) + " A" + colorAndAlpha.alpha.toFixed(2);
    };
    var DThemeDarkButtonColor = /** @class */ (function (_super) {
        __extends(DThemeDarkButtonColor, _super);
        function DThemeDarkButtonColor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkButtonColor.prototype.getImageTintColor = function (state) {
            return null;
        };
        DThemeDarkButtonColor.prototype.getImageSource = function (state) {
            return DThemeDarkAtlas.mappings.button_color_sample;
        };
        DThemeDarkButtonColor.prototype.getTextFormatter = function () {
            return formatter;
        };
        DThemeDarkButtonColor.prototype.newTextValue = function () {
            return {
                color: 0xDEDEDE,
                alpha: 1
            };
        };
        return DThemeDarkButtonColor;
    }(DThemeDarkButton));

    const DDialogCloseOn = wcardinal.ui.DDialogCloseOn;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkDialog = /** @class */ (function (_super) {
        __extends(DThemeDarkDialog, _super);
        function DThemeDarkDialog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkDialog.prototype.closeOn = function () {
            return DDialogCloseOn.ESC | DDialogCloseOn.CLICK_OUTSIDE;
        };
        DThemeDarkDialog.prototype.getBackgroundColor = function () {
            return DThemeDarkConstants.BACKGROUND_COLOR;
        };
        DThemeDarkDialog.prototype.getBorderColor = function (state) {
            return 0x393939;
        };
        DThemeDarkDialog.prototype.getPaddingLeft = function () {
            return 16;
        };
        DThemeDarkDialog.prototype.getPaddingTop = function () {
            return 16;
        };
        DThemeDarkDialog.prototype.getPaddingRight = function () {
            return 16;
        };
        DThemeDarkDialog.prototype.getPaddingBottom = function () {
            return 16;
        };
        DThemeDarkDialog.prototype.getX = function () {
            return "center";
        };
        DThemeDarkDialog.prototype.getY = function () {
            return "center";
        };
        DThemeDarkDialog.prototype.getWidth = function () {
            return 400;
        };
        DThemeDarkDialog.prototype.getHeight = function () {
            return "auto";
        };
        DThemeDarkDialog.prototype.getShadow = function () {
            return this.newShadow();
        };
        DThemeDarkDialog.prototype.getInteractive = function () {
            return DBaseInteractive.BOTH;
        };
        return DThemeDarkDialog;
    }(DThemeDarkBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkDialogCommand = /** @class */ (function (_super) {
        __extends(DThemeDarkDialogCommand, _super);
        function DThemeDarkDialogCommand() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkDialogCommand.prototype.getOk = function () {
            return "OK";
        };
        DThemeDarkDialogCommand.prototype.getCancel = function () {
            return "Cancel";
        };
        DThemeDarkDialogCommand.prototype.getLayoutX = function () {
            return "padding";
        };
        DThemeDarkDialogCommand.prototype.getLayoutY = function () {
            return "padding";
        };
        DThemeDarkDialogCommand.prototype.getLayoutWidth = function () {
            return "padding";
        };
        DThemeDarkDialogCommand.prototype.getLayoutHeight = function () {
            return "auto";
        };
        DThemeDarkDialogCommand.prototype.getLayoutMargin = function () {
            return undefined;
        };
        return DThemeDarkDialogCommand;
    }(DThemeDarkDialog));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkDialogColor = /** @class */ (function (_super) {
        __extends(DThemeDarkDialogColor, _super);
        function DThemeDarkDialogColor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkDialogColor.prototype.getWidth = function () {
            return "auto";
        };
        DThemeDarkDialogColor.prototype.getHeight = function () {
            return "auto";
        };
        DThemeDarkDialogColor.prototype.getLayoutWidth = function () {
            return "auto";
        };
        DThemeDarkDialogColor.prototype.getLayoutHeight = function () {
            return "auto";
        };
        return DThemeDarkDialogColor;
    }(DThemeDarkDialogCommand));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    DThemeDarkAtlas.add("picker_color_main", 234, 156, "<g>" +
        "<linearGradient id=\"fs7w3iusfdnb\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">" +
        "<stop stop-color=\"#FFFFFF\" stop-opacity=\"0\" offset=\"0\"/>" +
        "<stop stop-color=\"#FFFFFF\" stop-opacity=\"1\" offset=\"1\"/>" +
        "</linearGradient>" +
        "<linearGradient id=\"2rfcfe9874bw\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">" +
        "<stop stop-color=\"#000000\" stop-opacity=\"0\" offset=\"0\"/>" +
        "<stop stop-color=\"#000000\" stop-opacity=\"1\" offset=\"1\"/>" +
        "</linearGradient>" +
        "<rect x=\"0\" y=\"0\" width=\"234\" height=\"156\" fill=\"url(#fs7w3iusfdnb)\" />" +
        "<rect x=\"0\" y=\"0\" width=\"234\" height=\"156\" fill=\"url(#2rfcfe9874bw)\" />" +
        "</g>");
    var makeCheckerboard = function (width, height) {
        width = width + width;
        var LIGHT = "#5f5f5f";
        var DARK = "#454545";
        var result = "<g>";
        for (var iheight = 0; iheight < height; ++iheight) {
            for (var i = 0; i < width; ++i) {
                var color = (i % 2 === 0 ? LIGHT : DARK);
                result += "<rect x=\"" + 9 * i + "\" y=\"" + (18 * iheight + 0) + "\" width=\"9\" height=\"9\" fill=\"" + color + "\" />";
            }
            for (var i = 0; i < width; ++i) {
                var color = (i % 2 === 1 ? LIGHT : DARK);
                result += "<rect x=\"" + 9 * i + "\" y=\"" + (18 * iheight + 9) + "\" width=\"9\" height=\"9\" fill=\"" + color + "\" />";
            }
        }
        result += "</g>";
        return result;
    };
    DThemeDarkAtlas.add("picker_color_alpha_checkerboard", 234, 18, makeCheckerboard(13, 1));
    DThemeDarkAtlas.add("picker_color_alpha", 234, 18, "<g>" +
        "<linearGradient id=\"s48afbuh44\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">" +
        "<stop stop-color=\"#FFFFFF\" stop-opacity=\"0\" offset=\"0\"/>" +
        "<stop stop-color=\"#FFFFFF\" stop-opacity=\"1\" offset=\"1\"/>" +
        "</linearGradient>" +
        "<rect x=\"0\" y=\"0\" width=\"234\" height=\"18\" fill=\"url(#s48afbuh44)\" />" +
        "</g>");
    DThemeDarkAtlas.add("picker_color_base", 234, 18, "<g>" +
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
    DThemeDarkAtlas.add("picker_color_base_pointer", 16.2, 31.8, "<rect x=\"4.5\" y=\"4.5\" width=\"7.2\" height=\"22.8\" stroke=\"#ffffff\" stroke-width=\"2.4\" fill=\"none\" />");
    DThemeDarkAtlas.add("picker_color_pointer", 25.8, 25.8, "<circle cx=\"12.9\" cy=\"12.9\" r=\"4.8\" stroke=\"#5f5f5f\" stroke-width=\"2.4\" fill=\"none\" />" +
        "<circle cx=\"12.9\" cy=\"12.9\" r=\"7.2\" stroke=\"#ffffff\" stroke-width=\"2.4\" fill=\"none\" />");
    DThemeDarkAtlas.add("picker_color_recent_checkerboard", 18, 18, makeCheckerboard(1, 1));
    DThemeDarkAtlas.add("picker_color_recent_null", 18, 18, "<g>" +
        "<rect x=\"1.2\" y=\"1.2\" width=\"15.6\" height=\"15.6\" stroke=\"#fff\" stroke-width=\"0.8\" fill=\"none\" />" +
        "<line x1=\"16.8\" y1=\"1.2\" x2=\"1.2\" y2=\"16.8\" stroke=\"#fff\" stroke-width=\"0.8\" stroke-linecap=\"round\" />" +
        "<line x1=\"1.2\" y1=\"1.2\" x2=\"16.8\" y2=\"16.8\" stroke=\"#fff\" stroke-width=\"0.8\" stroke-linecap=\"round\" />" +
        "</g>");
    DThemeDarkAtlas.add("picker_color_sample_checkerboard", 54, 54, makeCheckerboard(3, 3));
    DThemeDarkAtlas.add("picker_color_sample_null", 54, 54, "<g>" +
        "<rect x=\"3.6\" y=\"3.6\" width=\"46.8\" height=\"46.8\" stroke=\"#fff\" stroke-width=\"2.4\" fill=\"none\" />" +
        "<line x1=\"50.4\" y1=\"3.6\" x2=\"3.6\" y2=\"50.4\" stroke=\"#fff\" stroke-width=\"2.4\" stroke-linecap=\"round\" />" +
        "<line x1=\"3.6\" y1=\"3.6\" x2=\"50.4\" y2=\"50.4\" stroke=\"#fff\" stroke-width=\"2.4\" stroke-linecap=\"round\" />" +
        "</g>");
    DThemeDarkAtlas.add("picker_color_anchor_outlined", 25.8, 25.8, "<circle cx=\"12.9\" cy=\"12.9\" r=\"8.4\" stroke=\"none\" fill=\"#ffffff\" />" +
        "<circle cx=\"12.9\" cy=\"12.9\" r=\"9.6\" stroke=\"#5f5f5f\" stroke-width=\"2.4\" fill=\"none\" />");
    DThemeDarkAtlas.add("picker_color_anchor", 28.2, 28.2, "<circle cx=\"14.1\" cy=\"14.1\" r=\"6\" stroke=\"none\" fill=\"#ffffff\" />" +
        "<circle cx=\"14.1\" cy=\"14.1\" r=\"7.2\" stroke=\"#5f5f5f\" stroke-width=\"2.4\" fill=\"none\" />");
    DThemeDarkAtlas.add("picker_color_direction", 12, 30, "<path d=\"M0.6 25.8 L 12.0375 5.9895\" stroke=\"#5f5f5f\" stroke-width=\"1.2\" fill=\"none\" />" +
        "<path d=\"M8.5125 25.8 A 8.475 8.475 0 0 0 4.275 18.4605\" stroke=\"#5f5f5f\" stroke-width=\"1.2\" fill=\"none\" />" +
        "<rect x=\"0.6\" y=\"24.6\" width=\"11.4375\" height=\"1.2\" rx=\"0.6\" ry=\"0.6\" stroke=\"none\" fill=\"#5f5f5f\" />");
    var DThemeDarkPickerColor = /** @class */ (function (_super) {
        __extends(DThemeDarkPickerColor, _super);
        function DThemeDarkPickerColor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkPickerColor.prototype.getMainWidth = function () {
            return 234;
        };
        DThemeDarkPickerColor.prototype.getMainHeight = function () {
            return 156;
        };
        DThemeDarkPickerColor.prototype.getMainTexture = function () {
            return DThemeDarkAtlas.mappings.picker_color_main;
        };
        DThemeDarkPickerColor.prototype.getMainPointerTexture = function () {
            return DThemeDarkAtlas.mappings.picker_color_pointer;
        };
        DThemeDarkPickerColor.prototype.getMainPointerColor = function () {
            return 0xffffff;
        };
        DThemeDarkPickerColor.prototype.getMainPointerAlpha = function () {
            return 1;
        };
        DThemeDarkPickerColor.prototype.getBaseHeight = function () {
            return 18;
        };
        DThemeDarkPickerColor.prototype.getBaseMargin = function () {
            return 6;
        };
        DThemeDarkPickerColor.prototype.getBaseTexture = function () {
            return DThemeDarkAtlas.mappings.picker_color_base;
        };
        DThemeDarkPickerColor.prototype.getBasePointerTexture = function () {
            return DThemeDarkAtlas.mappings.picker_color_base_pointer;
        };
        DThemeDarkPickerColor.prototype.getBasePointerColor = function () {
            return 0xffffff;
        };
        DThemeDarkPickerColor.prototype.getBasePointerAlpha = function () {
            return this.getMainPointerAlpha();
        };
        DThemeDarkPickerColor.prototype.getAlphaHeight = function () {
            return this.getBaseHeight();
        };
        DThemeDarkPickerColor.prototype.getAlphaMargin = function () {
            return this.getBaseMargin();
        };
        DThemeDarkPickerColor.prototype.getAlphaTexture = function () {
            return DThemeDarkAtlas.mappings.picker_color_alpha;
        };
        DThemeDarkPickerColor.prototype.getAlphaCheckerboardTexture = function () {
            return DThemeDarkAtlas.mappings.picker_color_alpha_checkerboard;
        };
        DThemeDarkPickerColor.prototype.getAlphaPointerTexture = function () {
            return this.getBasePointerTexture();
        };
        DThemeDarkPickerColor.prototype.getAlphaPointerColor = function () {
            return this.getBasePointerColor();
        };
        DThemeDarkPickerColor.prototype.getAlphaPointerAlpha = function () {
            return this.getMainPointerAlpha();
        };
        DThemeDarkPickerColor.prototype.getRecentMargin = function () {
            return this.getBaseMargin();
        };
        DThemeDarkPickerColor.prototype.getRecentColorWidth = function () {
            return this.getBaseHeight();
        };
        DThemeDarkPickerColor.prototype.getRecentColorHeight = function () {
            return this.getRecentColorWidth();
        };
        DThemeDarkPickerColor.prototype.getRecentColorMargin = function () {
            return this.getRecentMargin();
        };
        DThemeDarkPickerColor.prototype.getRecentColorCount = function () {
            return 10;
        };
        DThemeDarkPickerColor.prototype.getRecentCheckerboardTexture = function () {
            return DThemeDarkAtlas.mappings.picker_color_recent_checkerboard;
        };
        DThemeDarkPickerColor.prototype.getRecentNullTexture = function () {
            return DThemeDarkAtlas.mappings.picker_color_recent_null;
        };
        DThemeDarkPickerColor.prototype.getRecents = function () {
            return [];
        };
        DThemeDarkPickerColor.prototype.getInputMargin = function () {
            return this.getBaseMargin();
        };
        DThemeDarkPickerColor.prototype.getInputLabelWidth = function () {
            return 15;
        };
        DThemeDarkPickerColor.prototype.getSampleCheckerboardTexture = function () {
            return DThemeDarkAtlas.mappings.picker_color_sample_checkerboard;
        };
        DThemeDarkPickerColor.prototype.getSampleNullTexture = function () {
            return DThemeDarkAtlas.mappings.picker_color_sample_null;
        };
        DThemeDarkPickerColor.prototype.getBackgroundColor = function (state) {
            return null;
        };
        DThemeDarkPickerColor.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeDarkPickerColor.prototype.getInteractive = function () {
            return DBaseInteractive.BOTH;
        };
        return DThemeDarkPickerColor;
    }(DThemeDarkBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkPickerColor = function () {
        DThemeDark.set("DPickerColor", DThemeDarkPickerColor);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkDialogColor = function () {
        DThemeDark.set("DDialogColor", DThemeDarkDialogColor);
        loadThemeDarkPickerColor();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkButtonColor = function () {
        DThemeDark.set("DButtonColor", DThemeDarkButtonColor);
        loadThemeDarkDialogColor();
    };

    const DColorGradientObservable = wcardinal.ui.DColorGradientObservable;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    // Material Design icons by Google.
    // Apache license version 2.0.
    DThemeDarkAtlas.add("button_color_gradient_sample", 21, 21, "<g transform=\"scale(0.875,0.875)\">" +
        "<path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\" fill=\"#fff\"/>" +
        "</g>");
    var formatter$1 = function () {
        return "";
    };
    var DThemeDarkButtonColorGradient = /** @class */ (function (_super) {
        __extends(DThemeDarkButtonColorGradient, _super);
        function DThemeDarkButtonColorGradient() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkButtonColorGradient.prototype.getViewBaseTexture = function () {
            return DThemeDarkAtlas.mappings.button_color_gradient_sample;
        };
        DThemeDarkButtonColorGradient.prototype.getTextFormatter = function () {
            return formatter$1;
        };
        DThemeDarkButtonColorGradient.prototype.newTextValue = function () {
            return new DColorGradientObservable();
        };
        DThemeDarkButtonColorGradient.prototype.getCheckerColors = function () {
            return [0x37255, 0.27];
        };
        return DThemeDarkButtonColorGradient;
    }(DThemeDarkButton));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkDialogColorGradient = /** @class */ (function (_super) {
        __extends(DThemeDarkDialogColorGradient, _super);
        function DThemeDarkDialogColorGradient() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkDialogColorGradient.prototype.getWidth = function () {
            return "auto";
        };
        DThemeDarkDialogColorGradient.prototype.getHeight = function () {
            return "auto";
        };
        DThemeDarkDialogColorGradient.prototype.getLayoutWidth = function () {
            return "auto";
        };
        DThemeDarkDialogColorGradient.prototype.getLayoutHeight = function () {
            return "auto";
        };
        return DThemeDarkDialogColorGradient;
    }(DThemeDarkDialogCommand));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkPickerColorGradient = /** @class */ (function (_super) {
        __extends(DThemeDarkPickerColorGradient, _super);
        function DThemeDarkPickerColorGradient() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkPickerColorGradient.prototype.getGradientPointsWidth = function () {
            return 30;
        };
        DThemeDarkPickerColorGradient.prototype.getGradientPointsMargin = function () {
            return 24;
        };
        DThemeDarkPickerColorGradient.prototype.getGradientAnchorTexture = function () {
            return DThemeDarkAtlas.mappings.picker_color_anchor;
        };
        DThemeDarkPickerColorGradient.prototype.getGradientAnchorOutlinedTexture = function () {
            return DThemeDarkAtlas.mappings.picker_color_anchor_outlined;
        };
        DThemeDarkPickerColorGradient.prototype.getGradientAnchorOutlineTexture = function () {
            return DThemeDarkAtlas.mappings.picker_color_anchor_outline;
        };
        DThemeDarkPickerColorGradient.prototype.getGradientDirectionMargin = function () {
            return 5;
        };
        DThemeDarkPickerColorGradient.prototype.getGradientDirectionTexture = function () {
            return DThemeDarkAtlas.mappings.picker_color_direction;
        };
        DThemeDarkPickerColorGradient.prototype.getGradientRecentColumn = function () {
            return 4;
        };
        DThemeDarkPickerColorGradient.prototype.getGradientRecentWidth = function () {
            return 30;
        };
        DThemeDarkPickerColorGradient.prototype.getGradientRecentMargin = function () {
            return 5;
        };
        DThemeDarkPickerColorGradient.prototype.getGradientRecentCount = function () {
            return 16;
        };
        DThemeDarkPickerColorGradient.prototype.getGradientRecents = function () {
            return [];
        };
        DThemeDarkPickerColorGradient.prototype.getGradientCheckerColors = function () {
            return [0.37255, 0.27];
        };
        DThemeDarkPickerColorGradient.prototype.getBackgroundColor = function (state) {
            return null;
        };
        DThemeDarkPickerColorGradient.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeDarkPickerColorGradient.prototype.getInteractive = function () {
            return DBaseInteractive.BOTH;
        };
        return DThemeDarkPickerColorGradient;
    }(DThemeDarkBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkPickerColorGradient = function () {
        DThemeDark.set("DPickerColorGradient", DThemeDarkPickerColorGradient);
        loadThemeDarkPickerColor();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkDialogColorGradient = function () {
        DThemeDark.set("DDialogColorGradient", DThemeDarkDialogColorGradient);
        loadThemeDarkPickerColorGradient();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkButtonColorGradient = function () {
        DThemeDark.set("DButtonColorGradient", DThemeDarkButtonColorGradient);
        loadThemeDarkDialogColorGradient();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkButtonDanger = /** @class */ (function (_super) {
        __extends(DThemeDarkButtonDanger, _super);
        function DThemeDarkButtonDanger() {
            return _super.call(this, 0xef9a9a, 0.1, 0.2) || this;
        }
        DThemeDarkButtonDanger.prototype.getBackgroundColor = function (state) {
            if (state.inDisabled) {
                return null;
            }
            else if (state.isPressed || state.isActive) {
                return this.BACKGROUND_COLOR_PRESSED;
            }
            else if (state.isFocused || state.isHovered) {
                return this.BACKGROUND_COLOR_HOVERED;
            }
            else {
                return this.BACKGROUND_COLOR;
            }
        };
        DThemeDarkButtonDanger.prototype.getColor = function (state) {
            if (state.inDisabled) {
                return _super.prototype.getColor.call(this, state);
            }
            else {
                return DThemeDarkConstants.ACTIVE_COLOR;
            }
        };
        return DThemeDarkButtonDanger;
    }(DThemeDarkButtonBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkButtonDanger = function () {
        DThemeDark.set("DButtonDanger", DThemeDarkButtonDanger);
    };

    const DPickerDates = wcardinal.ui.DPickerDates;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var formatter$2 = function (value) {
        return DPickerDates.format(value);
    };
    var DThemeDarkButtonDate = /** @class */ (function (_super) {
        __extends(DThemeDarkButtonDate, _super);
        function DThemeDarkButtonDate() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkButtonDate.prototype.getTextFormatter = function () {
            return formatter$2;
        };
        DThemeDarkButtonDate.prototype.newTextValue = function () {
            return new Date();
        };
        return DThemeDarkButtonDate;
    }(DThemeDarkButton));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkDialogDate = /** @class */ (function (_super) {
        __extends(DThemeDarkDialogDate, _super);
        function DThemeDarkDialogDate() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkDialogDate.prototype.getWidth = function () {
            return "auto";
        };
        DThemeDarkDialogDate.prototype.getHeight = function () {
            return "auto";
        };
        DThemeDarkDialogDate.prototype.getLayoutWidth = function () {
            return "auto";
        };
        DThemeDarkDialogDate.prototype.getLayoutHeight = function () {
            return "auto";
        };
        return DThemeDarkDialogDate;
    }(DThemeDarkDialogCommand));

    const DPickerDatetimeMask = wcardinal.ui.DPickerDatetimeMask;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkPickerTime = /** @class */ (function (_super) {
        __extends(DThemeDarkPickerTime, _super);
        function DThemeDarkPickerTime() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkPickerTime.prototype.getInteractive = function () {
            return DBaseInteractive.BOTH;
        };
        DThemeDarkPickerTime.prototype.getMargin = function () {
            return 8;
        };
        DThemeDarkPickerTime.prototype.getHoursOptions = function () {
            return {
                width: 100,
                title: "Hours"
            };
        };
        DThemeDarkPickerTime.prototype.getMinutesOptions = function () {
            return {
                width: 100,
                title: "Minutes"
            };
        };
        DThemeDarkPickerTime.prototype.getSecondsOptions = function () {
            return {
                width: 100,
                title: "Seconds"
            };
        };
        DThemeDarkPickerTime.prototype.getMask = function () {
            return DPickerDatetimeMask.HOURS | DPickerDatetimeMask.MINUTES;
        };
        DThemeDarkPickerTime.prototype.getWidth = function () {
            return "auto";
        };
        DThemeDarkPickerTime.prototype.getHeight = function () {
            return "auto";
        };
        DThemeDarkPickerTime.prototype.getLowerBound = function () {
            return null;
        };
        DThemeDarkPickerTime.prototype.isLowerBoundInclusive = function () {
            return false;
        };
        DThemeDarkPickerTime.prototype.getUpperBound = function () {
            return null;
        };
        DThemeDarkPickerTime.prototype.isUpperBoundInclusive = function () {
            return false;
        };
        return DThemeDarkPickerTime;
    }(DThemeDarkBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var MONTH_LABELS = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    var DAY_LABELS = [
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa"
    ];
    var defaultLabelFormatter = function (date) {
        return MONTH_LABELS[date.getMonth()] + " " + date.getFullYear();
    };
    var defaultDateDecorator = function () { };
    var DThemeDarkPickerDatetime = /** @class */ (function (_super) {
        __extends(DThemeDarkPickerDatetime, _super);
        function DThemeDarkPickerDatetime() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkPickerDatetime.prototype.getDayLabels = function () {
            return DAY_LABELS;
        };
        DThemeDarkPickerDatetime.prototype.getDayStart = function () {
            return 0;
        };
        DThemeDarkPickerDatetime.prototype.getLabelFormatter = function () {
            return defaultLabelFormatter;
        };
        DThemeDarkPickerDatetime.prototype.getDateDecorator = function () {
            return defaultDateDecorator;
        };
        DThemeDarkPickerDatetime.prototype.getBackButtonOptions = function () {
            return {
                title: "Previous"
            };
        };
        DThemeDarkPickerDatetime.prototype.getNextButtonOptions = function () {
            return {
                title: "Next"
            };
        };
        DThemeDarkPickerDatetime.prototype.getMask = function () {
            return DPickerDatetimeMask.DATE | _super.prototype.getMask.call(this);
        };
        return DThemeDarkPickerDatetime;
    }(DThemeDarkPickerTime));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkPickerDate = /** @class */ (function (_super) {
        __extends(DThemeDarkPickerDate, _super);
        function DThemeDarkPickerDate() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkPickerDate.prototype.getMask = function () {
            return DPickerDatetimeMask.DATE;
        };
        return DThemeDarkPickerDate;
    }(DThemeDarkPickerDatetime));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    DThemeDarkAtlas.add("picker_date_back", 24, 24, "<g>" +
        "<path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\" fill=\"#fff\" />" +
        "</g>");
    var DThemeDarkPickerDatetimeButtonBack = /** @class */ (function (_super) {
        __extends(DThemeDarkPickerDatetimeButtonBack, _super);
        function DThemeDarkPickerDatetimeButtonBack() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkPickerDatetimeButtonBack.prototype.getWidth = function () {
            return "auto";
        };
        DThemeDarkPickerDatetimeButtonBack.prototype.getImageAlignWith = function () {
            return DAlignWith.PADDING;
        };
        DThemeDarkPickerDatetimeButtonBack.prototype.getImageMarginHorizontal = function () {
            return 0;
        };
        DThemeDarkPickerDatetimeButtonBack.prototype.getImageAlignHorizontal = function () {
            return DAlignHorizontal.LEFT;
        };
        DThemeDarkPickerDatetimeButtonBack.prototype.getImageSource = function (state) {
            return DThemeDarkAtlas.mappings.picker_date_back;
        };
        DThemeDarkPickerDatetimeButtonBack.prototype.getAlpha = function (state) {
            return _super.prototype.getAlpha.call(this, state) * 0.9;
        };
        return DThemeDarkPickerDatetimeButtonBack;
    }(DThemeDarkButtonAmbient));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkPickerDatetimeButtonDate = /** @class */ (function (_super) {
        __extends(DThemeDarkPickerDatetimeButtonDate, _super);
        function DThemeDarkPickerDatetimeButtonDate() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkPickerDatetimeButtonDate.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.CENTER;
        };
        DThemeDarkPickerDatetimeButtonDate.prototype.getTextStyleClipping = function () {
            return false;
        };
        DThemeDarkPickerDatetimeButtonDate.prototype.getWidth = function () {
            return 30;
        };
        DThemeDarkPickerDatetimeButtonDate.prototype.getHeight = function () {
            return 30;
        };
        DThemeDarkPickerDatetimeButtonDate.prototype.isToggle = function () {
            return true;
        };
        return DThemeDarkPickerDatetimeButtonDate;
    }(DThemeDarkButtonAmbient));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    DThemeDarkAtlas.add("picker_date_next", 24, 24, "<g>" +
        "<path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\" fill=\"#fff\" />" +
        "</g>");
    var DThemeDarkPickerDatetimeButtonNext = /** @class */ (function (_super) {
        __extends(DThemeDarkPickerDatetimeButtonNext, _super);
        function DThemeDarkPickerDatetimeButtonNext() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkPickerDatetimeButtonNext.prototype.getWidth = function () {
            return "auto";
        };
        DThemeDarkPickerDatetimeButtonNext.prototype.getImageAlignWith = function () {
            return DAlignWith.PADDING;
        };
        DThemeDarkPickerDatetimeButtonNext.prototype.getImageMarginHorizontal = function () {
            return 0;
        };
        DThemeDarkPickerDatetimeButtonNext.prototype.getImageAlignHorizontal = function () {
            return DAlignHorizontal.LEFT;
        };
        DThemeDarkPickerDatetimeButtonNext.prototype.getImageSource = function (state) {
            return DThemeDarkAtlas.mappings.picker_date_next;
        };
        DThemeDarkPickerDatetimeButtonNext.prototype.getAlpha = function (state) {
            return _super.prototype.getAlpha.call(this, state) * 0.9;
        };
        return DThemeDarkPickerDatetimeButtonNext;
    }(DThemeDarkButtonAmbient));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkText = /** @class */ (function (_super) {
        __extends(DThemeDarkText, _super);
        function DThemeDarkText() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkText.prototype.getHeight = function () {
            return this.getLineHeight();
        };
        return DThemeDarkText;
    }(DThemeDarkTextBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkPickerDatetimeLabel = /** @class */ (function (_super) {
        __extends(DThemeDarkPickerDatetimeLabel, _super);
        function DThemeDarkPickerDatetimeLabel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkPickerDatetimeLabel.prototype.getWidth = function () {
            return 30;
        };
        DThemeDarkPickerDatetimeLabel.prototype.getHeight = function () {
            return 30;
        };
        DThemeDarkPickerDatetimeLabel.prototype.getTextStyleClipping = function () {
            return false;
        };
        DThemeDarkPickerDatetimeLabel.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.CENTER;
        };
        DThemeDarkPickerDatetimeLabel.prototype.getAlpha = function (state) {
            return _super.prototype.getAlpha.call(this, state) * 0.9;
        };
        DThemeDarkPickerDatetimeLabel.prototype.getFontWeight = function () {
            return "bold";
        };
        DThemeDarkPickerDatetimeLabel.prototype.getFontSize = function () {
            return Math.round(_super.prototype.getFontSize.call(this) * 1.25);
        };
        DThemeDarkPickerDatetimeLabel.prototype.newTextValue = function () {
            return new Date();
        };
        return DThemeDarkPickerDatetimeLabel;
    }(DThemeDarkText));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkPickerDatetimeLabelDate = /** @class */ (function (_super) {
        __extends(DThemeDarkPickerDatetimeLabelDate, _super);
        function DThemeDarkPickerDatetimeLabelDate() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkPickerDatetimeLabelDate.prototype.getWidth = function () {
            return 30;
        };
        DThemeDarkPickerDatetimeLabelDate.prototype.getHeight = function () {
            return 30;
        };
        DThemeDarkPickerDatetimeLabelDate.prototype.getTextStyleClipping = function () {
            return false;
        };
        DThemeDarkPickerDatetimeLabelDate.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.CENTER;
        };
        DThemeDarkPickerDatetimeLabelDate.prototype.getAlpha = function (state) {
            return _super.prototype.getAlpha.call(this, state) * 0.9;
        };
        DThemeDarkPickerDatetimeLabelDate.prototype.getFontWeight = function () {
            return "bold";
        };
        return DThemeDarkPickerDatetimeLabelDate;
    }(DThemeDarkText));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkPickerDatetimeSpace = /** @class */ (function (_super) {
        __extends(DThemeDarkPickerDatetimeSpace, _super);
        function DThemeDarkPickerDatetimeSpace() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkPickerDatetimeSpace.prototype.getBackgroundColor = function (state) {
            return null;
        };
        DThemeDarkPickerDatetimeSpace.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeDarkPickerDatetimeSpace.prototype.getWidth = function () {
            return 30;
        };
        DThemeDarkPickerDatetimeSpace.prototype.getHeight = function () {
            return 30;
        };
        return DThemeDarkPickerDatetimeSpace;
    }(DThemeDarkBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkPickerTime = function () {
        DThemeDark.set("DPickerTime", DThemeDarkPickerTime);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkPickerDatetime = function () {
        DThemeDark.set("DPickerDatetimeButtonBack", DThemeDarkPickerDatetimeButtonBack);
        DThemeDark.set("DPickerDatetimeButtonDate", DThemeDarkPickerDatetimeButtonDate);
        DThemeDark.set("DPickerDatetimeButtonNext", DThemeDarkPickerDatetimeButtonNext);
        DThemeDark.set("DPickerDatetimeLabelDate", DThemeDarkPickerDatetimeLabelDate);
        DThemeDark.set("DPickerDatetimeLabel", DThemeDarkPickerDatetimeLabel);
        DThemeDark.set("DPickerDatetimeSpace", DThemeDarkPickerDatetimeSpace);
        DThemeDark.set("DPickerDatetime", DThemeDarkPickerDatetime);
        loadThemeDarkPickerTime();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkPickerDate = function () {
        DThemeDark.set("DPickerDate", DThemeDarkPickerDate);
        loadThemeDarkPickerDatetime();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkDialogDate = function () {
        DThemeDark.set("DDialogDate", DThemeDarkDialogDate);
        loadThemeDarkPickerDate();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkButtonDate = function () {
        DThemeDark.set("DButtonDate", DThemeDarkButtonDate);
        loadThemeDarkDialogDate();
    };

    const DPickerDatetimes = wcardinal.ui.DPickerDatetimes;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var formatter$3 = function (value, caller) {
        return DPickerDatetimes.format(value, caller.getDatetimeMask());
    };
    var DThemeDarkButtonDatetime = /** @class */ (function (_super) {
        __extends(DThemeDarkButtonDatetime, _super);
        function DThemeDarkButtonDatetime() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkButtonDatetime.prototype.getTextFormatter = function () {
            return formatter$3;
        };
        DThemeDarkButtonDatetime.prototype.newTextValue = function () {
            return new Date();
        };
        return DThemeDarkButtonDatetime;
    }(DThemeDarkButton));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkDialogDatetime = /** @class */ (function (_super) {
        __extends(DThemeDarkDialogDatetime, _super);
        function DThemeDarkDialogDatetime() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkDialogDatetime.prototype.getWidth = function () {
            return "auto";
        };
        DThemeDarkDialogDatetime.prototype.getHeight = function () {
            return "auto";
        };
        DThemeDarkDialogDatetime.prototype.getLayoutWidth = function () {
            return "auto";
        };
        DThemeDarkDialogDatetime.prototype.getLayoutHeight = function () {
            return "auto";
        };
        return DThemeDarkDialogDatetime;
    }(DThemeDarkDialogCommand));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkDialogDatetime = function () {
        DThemeDark.set("DDialogDatetime", DThemeDarkDialogDatetime);
        loadThemeDarkPickerDatetime();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkButtonDatetime = function () {
        DThemeDark.set("DButtonDatetime", DThemeDarkButtonDatetime);
        loadThemeDarkDialogDatetime();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkButtonFile = /** @class */ (function (_super) {
        __extends(DThemeDarkButtonFile, _super);
        function DThemeDarkButtonFile() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeDarkButtonFile;
    }(DThemeDarkButton));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkButtonFile = function () {
        DThemeDark.set("DButtonFile", DThemeDarkButtonFile);
    };

    const DLinkMenuItemId = wcardinal.ui.DLinkMenuItemId;

    var DThemeDarkLinks = /** @class */ (function () {
        function DThemeDarkLinks() {
        }
        DThemeDarkLinks.init = function () {
            DThemeDarkAtlas.add("link_mark", 24, 24, "<g>" +
                "<path fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" " +
                "d=\"M10 6H7c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2v-3 M19 11V4h-7 M18.75 4.5l-8 8\" />" +
                "</g>");
        };
        DThemeDarkLinks.getImageSource = function (state) {
            return DThemeDarkAtlas.mappings.link_mark;
        };
        DThemeDarkLinks.getLinkMenuOptions = function () {
            return {
                sticky: true,
                align: "OVER",
                items: [{
                        value: DLinkMenuItemId.OPEN_LINK_IN_NEW_WINDOW,
                        text: {
                            value: this.getOpenLinkInNewWindow()
                        }
                    }, {
                        value: DLinkMenuItemId.COPY_LINK_ADDRESS,
                        text: {
                            value: this.getCopyLinkAddress()
                        }
                    }]
            };
        };
        DThemeDarkLinks.getOpenLinkInNewWindow = function () {
            return "Open in new window";
        };
        DThemeDarkLinks.getCopyLinkAddress = function () {
            return "Copy link address";
        };
        return DThemeDarkLinks;
    }());

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    DThemeDarkLinks.init();
    var DThemeDarkButtonLink = /** @class */ (function (_super) {
        __extends(DThemeDarkButtonLink, _super);
        function DThemeDarkButtonLink() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkButtonLink.prototype.getLinkMenuOptions = function () {
            return DThemeDarkLinks.getLinkMenuOptions();
        };
        return DThemeDarkButtonLink;
    }(DThemeDarkButtonAmbient));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkButtonLink = function () {
        DThemeDark.set("DButtonLink", DThemeDarkButtonLink);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkButtonPrimary = /** @class */ (function (_super) {
        __extends(DThemeDarkButtonPrimary, _super);
        function DThemeDarkButtonPrimary() {
            return _super.call(this, DThemeDarkConstants.HIGHLIGHT_COLOR, 0.1, 0.2) || this;
        }
        DThemeDarkButtonPrimary.prototype.getBackgroundColor = function (state) {
            if (state.inDisabled) {
                return null;
            }
            else if (state.isPressed || state.isActive) {
                return this.BACKGROUND_COLOR_PRESSED;
            }
            else if (state.isFocused || state.isHovered) {
                return this.BACKGROUND_COLOR_HOVERED;
            }
            else {
                return this.BACKGROUND_COLOR;
            }
        };
        DThemeDarkButtonPrimary.prototype.getColor = function (state) {
            if (state.inDisabled) {
                return _super.prototype.getColor.call(this, state);
            }
            else {
                return DThemeDarkConstants.ACTIVE_COLOR;
            }
        };
        return DThemeDarkButtonPrimary;
    }(DThemeDarkButtonBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkButtonPrimary = function () {
        DThemeDark.set("DButtonPrimary", DThemeDarkButtonPrimary);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    // Material Design icons by Google.
    // Apache license version 2.0.
    DThemeDarkAtlas.add("button_radio_mark_on", 21, 21, "<g transform=\"scale(0.875,0.875)\">" +
        "<path d=\"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48" +
        " 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8" +
        " 8 3.58 8 8-3.58 8-8 8z\" fill=\"#fff\" />" +
        "</g>");
    DThemeDarkAtlas.add("button_radio_mark_off", 21, 21, "<g transform=\"scale(0.875,0.875)\">" +
        "<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42" +
        " 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\" fill=\"#fff\" />" +
        "</g>");
    var DThemeDarkButtonRadio = /** @class */ (function (_super) {
        __extends(DThemeDarkButtonRadio, _super);
        function DThemeDarkButtonRadio() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.IMAGE_TINT_COLOR_FOCUSED = UtilRgb.darken(DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR, 0.1);
            return _this;
        }
        DThemeDarkButtonRadio.prototype.getBackgroundColor = function (state) {
            return DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR;
        };
        DThemeDarkButtonRadio.prototype.getColor = function (state) {
            return DThemeDarkConstants.COLOR;
        };
        DThemeDarkButtonRadio.prototype.getBackgroundAlpha = function (state) {
            if (state.inEnabled) {
                if (state.isFocused || state.isHovered) {
                    return DThemeDarkConstants.WEAK_HIGHLIGHT_ALPHA;
                }
            }
            return 0;
        };
        DThemeDarkButtonRadio.prototype.getImageTintColor = function (state) {
            if (state.inDisabled || !state.isActive) {
                if (state.isFocused) {
                    return this.IMAGE_TINT_COLOR_FOCUSED;
                }
                else {
                    return DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR;
                }
            }
            else {
                return DThemeDarkConstants.HIGHLIGHT_COLOR;
            }
        };
        DThemeDarkButtonRadio.prototype.isToggle = function () {
            return true;
        };
        DThemeDarkButtonRadio.prototype.getImageSource = function (state) {
            if (state.isActive) {
                return DThemeDarkAtlas.mappings.button_radio_mark_on;
            }
            else {
                return DThemeDarkAtlas.mappings.button_radio_mark_off;
            }
        };
        return DThemeDarkButtonRadio;
    }(DThemeDarkButtonAmbient));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkButtonRadio = function () {
        DThemeDark.set("DButtonRadio", DThemeDarkButtonRadio);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkButtonRadioRight = /** @class */ (function (_super) {
        __extends(DThemeDarkButtonRadioRight, _super);
        function DThemeDarkButtonRadioRight() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkButtonRadioRight.prototype.getImageAlignWith = function () {
            return DAlignWith.PADDING;
        };
        DThemeDarkButtonRadioRight.prototype.getImageAlignHorizontal = function () {
            return DAlignHorizontal.RIGHT;
        };
        DThemeDarkButtonRadioRight.prototype.getImageMarginHorizontal = function () {
            return 0;
        };
        DThemeDarkButtonRadioRight.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.LEFT;
        };
        return DThemeDarkButtonRadioRight;
    }(DThemeDarkButtonRadio));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkButtonRadioRight = function () {
        DThemeDark.set("DButtonRadioRight", DThemeDarkButtonRadioRight);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkButtonSecondary = /** @class */ (function (_super) {
        __extends(DThemeDarkButtonSecondary, _super);
        function DThemeDarkButtonSecondary() {
            return _super.call(this, 0xb894f6, 0.1, 0.2) || this;
        }
        DThemeDarkButtonSecondary.prototype.getBackgroundColor = function (state) {
            if (state.inDisabled) {
                return null;
            }
            else if (state.isPressed || state.isActive) {
                return this.BACKGROUND_COLOR_PRESSED;
            }
            else if (state.isFocused || state.isHovered) {
                return this.BACKGROUND_COLOR_HOVERED;
            }
            else {
                return this.BACKGROUND_COLOR;
            }
        };
        DThemeDarkButtonSecondary.prototype.getColor = function (state) {
            if (state.inDisabled) {
                return _super.prototype.getColor.call(this, state);
            }
            else {
                return 0x000000;
            }
        };
        return DThemeDarkButtonSecondary;
    }(DThemeDarkButtonBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkButtonSecondary = function () {
        DThemeDark.set("DButtonSecondary", DThemeDarkButtonSecondary);
    };

    const toLabel = wcardinal.ui.toLabel;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkButtonSelect = /** @class */ (function (_super) {
        __extends(DThemeDarkButtonSelect, _super);
        function DThemeDarkButtonSelect() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkButtonSelect.prototype.getTextFormatter = function () {
            return toLabel;
        };
        DThemeDarkButtonSelect.prototype.newTextValue = function () {
            return null;
        };
        return DThemeDarkButtonSelect;
    }(DThemeDarkButton));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkDialogSelect = /** @class */ (function (_super) {
        __extends(DThemeDarkDialogSelect, _super);
        function DThemeDarkDialogSelect() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkDialogSelect.prototype.getOk = function () {
            return null;
        };
        DThemeDarkDialogSelect.prototype.getCancel = function () {
            return null;
        };
        DThemeDarkDialogSelect.prototype.getItemTextFormatter = function () {
            return toLabel;
        };
        DThemeDarkDialogSelect.prototype.getNoteNoItemsText = function () {
            return "No Items";
        };
        DThemeDarkDialogSelect.prototype.getNoteSearchingText = function () {
            return "Searching...";
        };
        return DThemeDarkDialogSelect;
    }(DThemeDarkDialogCommand));

    const DDragMode = wcardinal.ui.DDragMode;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkPane = /** @class */ (function (_super) {
        __extends(DThemeDarkPane, _super);
        function DThemeDarkPane() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkPane.prototype.isOverflowMaskEnabled = function () {
            return true;
        };
        DThemeDarkPane.prototype.getBackgroundColor = function (state) {
            return DThemeDarkConstants.BACKGROUND_COLOR;
        };
        DThemeDarkPane.prototype.getInteractive = function () {
            return DBaseInteractive.BOTH;
        };
        DThemeDarkPane.prototype.getWheelSpeed = function () {
            return 2.24;
        };
        DThemeDarkPane.prototype.getDragMode = function () {
            return DDragMode.TOUCH;
        };
        return DThemeDarkPane;
    }(DThemeDarkBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkList = /** @class */ (function (_super) {
        __extends(DThemeDarkList, _super);
        function DThemeDarkList() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkList.prototype.getBackgroundColor = function (state) {
            return DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD;
        };
        DThemeDarkList.prototype.getBorderAlign = function (state) {
            return 1;
        };
        return DThemeDarkList;
    }(DThemeDarkPane));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkDialogSelectList = /** @class */ (function (_super) {
        __extends(DThemeDarkDialogSelectList, _super);
        function DThemeDarkDialogSelectList() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkDialogSelectList.prototype.getBackgroundColor = function () {
            return null;
        };
        DThemeDarkDialogSelectList.prototype.getBorderColor = function () {
            return null;
        };
        DThemeDarkDialogSelectList.prototype.getHeight = function () {
            return 250;
        };
        DThemeDarkDialogSelectList.prototype.getCornerMask = function () {
            return DCornerMask.ALL;
        };
        return DThemeDarkDialogSelectList;
    }(DThemeDarkList));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkImage = /** @class */ (function (_super) {
        __extends(DThemeDarkImage, _super);
        function DThemeDarkImage() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeDarkImage;
    }(DThemeDarkImageBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkListItem = /** @class */ (function (_super) {
        __extends(DThemeDarkListItem, _super);
        function DThemeDarkListItem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkListItem.prototype.getBackgroundColor = function (state) {
            if (state.inDisabled) {
                return null;
            }
            else if (state.isActive) {
                return this.getBackgroundColorActive(state);
            }
            else if (state.isFocused || state.isHovered) {
                return DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR;
            }
            else {
                return null;
            }
        };
        DThemeDarkListItem.prototype.getBackgroundColorActive = function (state) {
            return DThemeDarkConstants.HIGHLIGHT_COLOR;
        };
        DThemeDarkListItem.prototype.getBackgroundAlpha = function (state) {
            if (state.inDisabled) {
                return DThemeDarkConstants.WEAK_HIGHLIGHT_ALPHA;
            }
            else if (state.isActive) {
                return this.getBackgroundAlphaActive(state);
            }
            else {
                return DThemeDarkConstants.WEAK_HIGHLIGHT_ALPHA;
            }
        };
        DThemeDarkListItem.prototype.getBackgroundAlphaActive = function (state) {
            return DThemeDarkConstants.HIGHLIGHT_ALPHA;
        };
        DThemeDarkListItem.prototype.getColor = function (state) {
            if (state.inDisabled) {
                return _super.prototype.getColor.call(this, state);
            }
            else if (state.isActive) {
                return this.getColorActive(state);
            }
            else {
                return _super.prototype.getColor.call(this, state);
            }
        };
        DThemeDarkListItem.prototype.getColorActive = function (state) {
            return DThemeDarkConstants.COLOR;
        };
        DThemeDarkListItem.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeDarkListItem.prototype.getHeight = function () {
            return 30;
        };
        DThemeDarkListItem.prototype.getWidth = function () {
            return "padding";
        };
        DThemeDarkListItem.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.LEFT;
        };
        DThemeDarkListItem.prototype.getPaddingLeft = function () {
            return 10;
        };
        DThemeDarkListItem.prototype.getPaddingRight = function () {
            return 10;
        };
        DThemeDarkListItem.prototype.getCornerMask = function () {
            return DCornerMask.ALL;
        };
        DThemeDarkListItem.prototype.getCursor = function (state) {
            if (!state.isActionable) {
                return "";
            }
            return "pointer";
        };
        return DThemeDarkListItem;
    }(DThemeDarkImage));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkDialogSelectListItem = /** @class */ (function (_super) {
        __extends(DThemeDarkDialogSelectListItem, _super);
        function DThemeDarkDialogSelectListItem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkDialogSelectListItem.prototype.getBackgroundColorActive = function (state) {
            return DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR;
        };
        DThemeDarkDialogSelectListItem.prototype.getBackgroundAlphaActive = function (state) {
            return DThemeDarkConstants.WEAK_HIGHLIGHT_ALPHA;
        };
        DThemeDarkDialogSelectListItem.prototype.getColorActive = function (state) {
            return DThemeDarkConstants.COLOR;
        };
        DThemeDarkDialogSelectListItem.prototype.getCornerMask = function () {
            return DCornerMask.NONE;
        };
        return DThemeDarkDialogSelectListItem;
    }(DThemeDarkListItem));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkDialogSelect = function () {
        DThemeDark.set("DDialogSelect", DThemeDarkDialogSelect);
        DThemeDark.set("DDialogSelectList", DThemeDarkDialogSelectList);
        DThemeDark.set("DDialogSelectListItem", DThemeDarkDialogSelectListItem);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkButtonSelect = function () {
        DThemeDark.set("DButtonSelect", DThemeDarkButtonSelect);
        loadThemeDarkDialogSelect();
    };

    const DPickerTimes = wcardinal.ui.DPickerTimes;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var formatter$4 = function (value, caller) {
        return DPickerTimes.format(value, caller.getDatetimeMask());
    };
    var DThemeDarkButtonTime = /** @class */ (function (_super) {
        __extends(DThemeDarkButtonTime, _super);
        function DThemeDarkButtonTime() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkButtonTime.prototype.getTextFormatter = function () {
            return formatter$4;
        };
        DThemeDarkButtonTime.prototype.newTextValue = function () {
            return new Date();
        };
        return DThemeDarkButtonTime;
    }(DThemeDarkButton));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkDialogTime = /** @class */ (function (_super) {
        __extends(DThemeDarkDialogTime, _super);
        function DThemeDarkDialogTime() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkDialogTime.prototype.getWidth = function () {
            return "auto";
        };
        DThemeDarkDialogTime.prototype.getHeight = function () {
            return "auto";
        };
        DThemeDarkDialogTime.prototype.getLayoutWidth = function () {
            return "auto";
        };
        DThemeDarkDialogTime.prototype.getLayoutHeight = function () {
            return "auto";
        };
        return DThemeDarkDialogTime;
    }(DThemeDarkDialogCommand));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkDialogTime = function () {
        DThemeDark.set("DDialogTime", DThemeDarkDialogTime);
        loadThemeDarkPickerTime();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkButtonTime = function () {
        DThemeDark.set("DButtonTime", DThemeDarkButtonTime);
        loadThemeDarkDialogTime();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkButtonAll = function () {
        loadThemeDarkButtonAmbient();
        loadThemeDarkButtonCheck();
        loadThemeDarkButtonCheckRight();
        loadThemeDarkButtonColor();
        loadThemeDarkButtonColorGradient();
        loadThemeDarkButtonSelect();
        loadThemeDarkButtonDanger();
        loadThemeDarkButtonDate();
        loadThemeDarkButtonDatetime();
        loadThemeDarkButtonFile();
        loadThemeDarkButtonLink();
        loadThemeDarkButtonPrimary();
        loadThemeDarkButtonRadio();
        loadThemeDarkButtonRadioRight();
        loadThemeDarkButtonSecondary();
        loadThemeDarkButtonTime();
        loadThemeDarkButton();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkCanvas = /** @class */ (function (_super) {
        __extends(DThemeDarkCanvas, _super);
        function DThemeDarkCanvas() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkCanvas.prototype.getBackgroundColor = function () {
            return 0x484848;
        };
        DThemeDarkCanvas.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeDarkCanvas.prototype.getCornerMask = function () {
            return DCornerMask.ALL;
        };
        DThemeDarkCanvas.prototype.getInteractive = function () {
            return DBaseInteractive.BOTH;
        };
        return DThemeDarkCanvas;
    }(DThemeDarkBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkCanvasContainer = /** @class */ (function (_super) {
        __extends(DThemeDarkCanvasContainer, _super);
        function DThemeDarkCanvasContainer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkCanvasContainer.prototype.getBackgroundColor = function (state) {
            return null;
        };
        DThemeDarkCanvasContainer.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeDarkCanvasContainer.prototype.getPaddingLeft = function () {
            return 50;
        };
        DThemeDarkCanvasContainer.prototype.getPaddingTop = function () {
            return 50;
        };
        DThemeDarkCanvasContainer.prototype.getPaddingRight = function () {
            return 50;
        };
        DThemeDarkCanvasContainer.prototype.getPaddingBottom = function () {
            return 50;
        };
        DThemeDarkCanvasContainer.prototype.isOverflowMaskEnabled = function () {
            return false;
        };
        DThemeDarkCanvasContainer.prototype.getInteractive = function () {
            return DBaseInteractive.BOTH;
        };
        return DThemeDarkCanvasContainer;
    }(DThemeDarkBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkCanvasContainer = function () {
        DThemeDark.set("DCanvasContainer", DThemeDarkCanvasContainer);
        DThemeDark.set("DCanvas", DThemeDarkCanvas);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkChart = /** @class */ (function (_super) {
        __extends(DThemeDarkChart, _super);
        function DThemeDarkChart() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkChart.prototype.getPaddingLeft = function () {
            return 70;
        };
        DThemeDarkChart.prototype.getPaddingRight = function () {
            return 10;
        };
        DThemeDarkChart.prototype.getPaddingTop = function () {
            return 10;
        };
        DThemeDarkChart.prototype.getPaddingBottom = function () {
            return 70;
        };
        DThemeDarkChart.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeDarkChart.prototype.getInteractive = function () {
            return DBaseInteractive.BOTH;
        };
        DThemeDarkChart.prototype.isOverflowMaskEnabled = function () {
            return true;
        };
        return DThemeDarkChart;
    }(DThemeDarkBase));

    const DChartAxisPosition = wcardinal.ui.DChartAxisPosition;

    const DChartAxisTickPosition = wcardinal.ui.DChartAxisTickPosition;

    const EShapeTextAlignHorizontal = wcardinal.ui.EShapeTextAlignHorizontal;

    const EShapeTextAlignVertical = wcardinal.ui.EShapeTextAlignVertical;

    const EShapeTextDirection = wcardinal.ui.EShapeTextDirection;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkChartAxisBase = /** @class */ (function () {
        function DThemeDarkChartAxisBase() {
        }
        DThemeDarkChartAxisBase.prototype.getPosition = function () {
            return DChartAxisPosition.BOTTOM;
        };
        DThemeDarkChartAxisBase.prototype.getPadding = function () {
            return 75;
        };
        DThemeDarkChartAxisBase.prototype.getLabelAlignHorizontal = function (position) {
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
        DThemeDarkChartAxisBase.prototype.getLabelAlignVertical = function (position) {
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
        DThemeDarkChartAxisBase.prototype.getLabelPaddingHorizontal = function () {
            return 50;
        };
        DThemeDarkChartAxisBase.prototype.getLabelPaddingVertical = function () {
            return 50;
        };
        DThemeDarkChartAxisBase.prototype.getLabelDirection = function () {
            return EShapeTextDirection.LEFT_TO_RIGHT;
        };
        DThemeDarkChartAxisBase.prototype.getLabelColor = function () {
            return this.getStrokeColor();
        };
        DThemeDarkChartAxisBase.prototype.getStyle = function () {
            return undefined;
        };
        DThemeDarkChartAxisBase.prototype.getStrokeEnable = function () {
            return true;
        };
        DThemeDarkChartAxisBase.prototype.getStrokeColor = function () {
            return undefined;
        };
        DThemeDarkChartAxisBase.prototype.getStrokeAlpha = function () {
            return undefined;
        };
        DThemeDarkChartAxisBase.prototype.getStrokeWidth = function () {
            return undefined;
        };
        DThemeDarkChartAxisBase.prototype.getStrokeAlign = function () {
            return undefined;
        };
        DThemeDarkChartAxisBase.prototype.getStrokeSide = function () {
            return undefined;
        };
        DThemeDarkChartAxisBase.prototype.getTickEnable = function () {
            return true;
        };
        DThemeDarkChartAxisBase.prototype.getMajorTickCount = function () {
            return 3;
        };
        DThemeDarkChartAxisBase.prototype.getMajorTickSize = function () {
            return 10;
        };
        DThemeDarkChartAxisBase.prototype.getMajorTickPosition = function () {
            return DChartAxisTickPosition.OUTSIDE;
        };
        DThemeDarkChartAxisBase.prototype.getMajorTickStyle = function () {
            return undefined;
        };
        DThemeDarkChartAxisBase.prototype.getMajorTickTextAlignHorizontal = function (position) {
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
        DThemeDarkChartAxisBase.prototype.getMajorTickTextAlignVertical = function (position) {
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
        DThemeDarkChartAxisBase.prototype.getMajorTickTextDirection = function () {
            return EShapeTextDirection.LEFT_TO_RIGHT;
        };
        DThemeDarkChartAxisBase.prototype.getMajorTickTextColor = function () {
            return this.getStrokeColor();
        };
        DThemeDarkChartAxisBase.prototype.getMajorTickTextFormat = function () {
            return "%fsi";
        };
        DThemeDarkChartAxisBase.prototype.getMajorTickTextPaddingHorizontal = function () {
            return 15;
        };
        DThemeDarkChartAxisBase.prototype.getMajorTickTextPaddingVertical = function () {
            return 15;
        };
        DThemeDarkChartAxisBase.prototype.getMajorTickStrokeEnable = function () {
            return true;
        };
        DThemeDarkChartAxisBase.prototype.getMajorTickStrokeColor = function () {
            return this.getStrokeColor();
        };
        DThemeDarkChartAxisBase.prototype.getMajorTickStrokeAlpha = function () {
            return this.getStrokeAlpha();
        };
        DThemeDarkChartAxisBase.prototype.getMajorTickStrokeWidth = function () {
            return this.getStrokeWidth();
        };
        DThemeDarkChartAxisBase.prototype.getMajorTickStrokeAlign = function () {
            return this.getStrokeAlign();
        };
        DThemeDarkChartAxisBase.prototype.getMajorTickStrokeSide = function () {
            return this.getStrokeSide();
        };
        DThemeDarkChartAxisBase.prototype.getMajorTickGridlineEnable = function () {
            return true;
        };
        DThemeDarkChartAxisBase.prototype.getMajorTickGridlineStyle = function () {
            return undefined;
        };
        DThemeDarkChartAxisBase.prototype.getMajorTickGridlineStrokeEnable = function () {
            return true;
        };
        DThemeDarkChartAxisBase.prototype.getMajorTickGridlineStrokeColor = function () {
            return this.getStrokeColor();
        };
        DThemeDarkChartAxisBase.prototype.getMajorTickGridlineStrokeAlpha = function () {
            return 0.1;
        };
        DThemeDarkChartAxisBase.prototype.getMajorTickGridlineStrokeWidth = function () {
            return this.getStrokeWidth();
        };
        DThemeDarkChartAxisBase.prototype.getMajorTickGridlineStrokeAlign = function () {
            return this.getStrokeAlign();
        };
        DThemeDarkChartAxisBase.prototype.getMajorTickGridlineStrokeSide = function () {
            return this.getStrokeSide();
        };
        DThemeDarkChartAxisBase.prototype.getMinorTickCount = function () {
            return 3;
        };
        DThemeDarkChartAxisBase.prototype.getMinorTickSize = function () {
            return 5;
        };
        DThemeDarkChartAxisBase.prototype.getMinorTickPosition = function () {
            return DChartAxisTickPosition.OUTSIDE;
        };
        DThemeDarkChartAxisBase.prototype.getMinorTickStyle = function () {
            return undefined;
        };
        DThemeDarkChartAxisBase.prototype.getMinorTickStrokeEnable = function () {
            return true;
        };
        DThemeDarkChartAxisBase.prototype.getMinorTickStrokeColor = function () {
            return this.getStrokeColor();
        };
        DThemeDarkChartAxisBase.prototype.getMinorTickStrokeAlpha = function () {
            return this.getStrokeAlpha();
        };
        DThemeDarkChartAxisBase.prototype.getMinorTickStrokeWidth = function () {
            return this.getStrokeWidth();
        };
        DThemeDarkChartAxisBase.prototype.getMinorTickStrokeAlign = function () {
            return this.getStrokeAlign();
        };
        DThemeDarkChartAxisBase.prototype.getMinorTickStrokeSide = function () {
            return this.getStrokeSide();
        };
        return DThemeDarkChartAxisBase;
    }());

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkChartAxisX = /** @class */ (function (_super) {
        __extends(DThemeDarkChartAxisX, _super);
        function DThemeDarkChartAxisX() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeDarkChartAxisX;
    }(DThemeDarkChartAxisBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkChartAxisXDatetime = /** @class */ (function (_super) {
        __extends(DThemeDarkChartAxisXDatetime, _super);
        function DThemeDarkChartAxisXDatetime() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkChartAxisXDatetime.prototype.getMajorTickTextFormat = function () {
            return "%YMD\n%Hms.%mi";
        };
        return DThemeDarkChartAxisXDatetime;
    }(DThemeDarkChartAxisX));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkChartAxisY = /** @class */ (function (_super) {
        __extends(DThemeDarkChartAxisY, _super);
        function DThemeDarkChartAxisY() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkChartAxisY.prototype.getPosition = function () {
            return DChartAxisPosition.LEFT;
        };
        DThemeDarkChartAxisY.prototype.getLabelDirection = function () {
            return EShapeTextDirection.BOTTOM_TO_TOP;
        };
        return DThemeDarkChartAxisY;
    }(DThemeDarkChartAxisBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkChartCoordinateLinear = /** @class */ (function () {
        function DThemeDarkChartCoordinateLinear() {
        }
        DThemeDarkChartCoordinateLinear.prototype.isZero = function (value) {
            return Math.abs(value) < 0.00001;
        };
        DThemeDarkChartCoordinateLinear.prototype.toStepScale = function (scale) {
            if (5.5 <= scale) {
                return 10;
            }
            else if (2.2 <= scale) {
                return 5;
            }
            else if (1.1 <= scale) {
                return 2;
            }
            return 1;
        };
        return DThemeDarkChartCoordinateLinear;
    }());

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkChartCoordinateLog = /** @class */ (function () {
        function DThemeDarkChartCoordinateLog() {
        }
        DThemeDarkChartCoordinateLog.prototype.isZero = function (value) {
            return Math.abs(value) < 0.00001;
        };
        DThemeDarkChartCoordinateLog.prototype.toStepScale = function (scale) {
            if (5.5 <= scale) {
                return 10;
            }
            else if (2.2 <= scale) {
                return 5;
            }
            else if (1.1 <= scale) {
                return 2;
            }
            return 1;
        };
        return DThemeDarkChartCoordinateLog;
    }());

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkChartLegend = /** @class */ (function (_super) {
        __extends(DThemeDarkChartLegend, _super);
        function DThemeDarkChartLegend() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeDarkChartLegend;
    }(DThemeDarkBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkChartLegendItem = /** @class */ (function (_super) {
        __extends(DThemeDarkChartLegendItem, _super);
        function DThemeDarkChartLegendItem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeDarkChartLegendItem;
    }(DThemeDarkBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkChartOverview = /** @class */ (function (_super) {
        __extends(DThemeDarkChartOverview, _super);
        function DThemeDarkChartOverview() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeDarkChartOverview;
    }(DThemeDarkBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkChartPlotArea = /** @class */ (function (_super) {
        __extends(DThemeDarkChartPlotArea, _super);
        function DThemeDarkChartPlotArea() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkChartPlotArea.prototype.getX = function () {
            return "padding";
        };
        DThemeDarkChartPlotArea.prototype.getY = function () {
            return "padding";
        };
        DThemeDarkChartPlotArea.prototype.getWidth = function () {
            return "padding";
        };
        DThemeDarkChartPlotArea.prototype.getHeight = function () {
            return "padding";
        };
        DThemeDarkChartPlotArea.prototype.getPaddingTop = function () {
            return 10;
        };
        DThemeDarkChartPlotArea.prototype.getPaddingRight = function () {
            return 10;
        };
        DThemeDarkChartPlotArea.prototype.getPaddingBottom = function () {
            return 10;
        };
        DThemeDarkChartPlotArea.prototype.getPaddingLeft = function () {
            return 10;
        };
        DThemeDarkChartPlotArea.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeDarkChartPlotArea.prototype.isOverflowMaskEnabled = function () {
            return true;
        };
        return DThemeDarkChartPlotArea;
    }(DThemeDarkBase));

    const EShapeBar = wcardinal.ui.EShapeBar;

    const EShapeBarPosition = wcardinal.ui.EShapeBarPosition;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkChartSelectionGridline = /** @class */ (function () {
        function DThemeDarkChartSelectionGridline() {
        }
        DThemeDarkChartSelectionGridline.prototype.isEnabled = function (state) {
            return true;
        };
        DThemeDarkChartSelectionGridline.prototype.newShape = function (state) {
            var result = new EShapeBar(EShapeBarPosition.TOP);
            result.stroke.alpha = 0.5;
            return result;
        };
        return DThemeDarkChartSelectionGridline;
    }());

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkChartSelectionGridlineX = /** @class */ (function (_super) {
        __extends(DThemeDarkChartSelectionGridlineX, _super);
        function DThemeDarkChartSelectionGridlineX() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeDarkChartSelectionGridlineX;
    }(DThemeDarkChartSelectionGridline));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkChartSelectionGridlineY = /** @class */ (function (_super) {
        __extends(DThemeDarkChartSelectionGridlineY, _super);
        function DThemeDarkChartSelectionGridlineY() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkChartSelectionGridlineY.prototype.newShape = function (state) {
            var result = new EShapeBar(EShapeBarPosition.LEFT);
            result.stroke.alpha = 0.5;
            return result;
        };
        return DThemeDarkChartSelectionGridlineY;
    }(DThemeDarkChartSelectionGridline));

    const EShapeCircle = wcardinal.ui.EShapeCircle;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkChartSelectionMarker = /** @class */ (function () {
        function DThemeDarkChartSelectionMarker() {
        }
        DThemeDarkChartSelectionMarker.prototype.isEnabled = function (state) {
            return false;
        };
        DThemeDarkChartSelectionMarker.prototype.newShape = function (state) {
            var result = new EShapeCircle();
            if (state.isHovered) {
                result.size.set(14, 14);
            }
            else {
                result.size.set(20, 20);
            }
            return result;
        };
        return DThemeDarkChartSelectionMarker;
    }());

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkChart = function () {
        DThemeDark.set("DChart", DThemeDarkChart);
        DThemeDark.set("DChartAxisX", DThemeDarkChartAxisX);
        DThemeDark.set("DChartAxisXDatetime", DThemeDarkChartAxisXDatetime);
        DThemeDark.set("DChartAxisY", DThemeDarkChartAxisY);
        DThemeDark.set("DChartCoordinateLinear", DThemeDarkChartCoordinateLinear);
        DThemeDark.set("DChartCoordinateLog", DThemeDarkChartCoordinateLog);
        DThemeDark.set("DChartLegend", DThemeDarkChartLegend);
        DThemeDark.set("DChartLegendItem", DThemeDarkChartLegendItem);
        DThemeDark.set("DChartOverview", DThemeDarkChartOverview);
        DThemeDark.set("DChartPlotArea", DThemeDarkChartPlotArea);
        DThemeDark.set("DChartSelectionGridlineX", DThemeDarkChartSelectionGridlineX);
        DThemeDark.set("DChartSelectionGridlineY", DThemeDarkChartSelectionGridlineY);
        DThemeDark.set("DChartSelectionMarker", DThemeDarkChartSelectionMarker);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkDiagramBase = /** @class */ (function (_super) {
        __extends(DThemeDarkDiagramBase, _super);
        function DThemeDarkDiagramBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkDiagramBase.prototype.getBackgroundAmbient = function () {
            return true;
        };
        return DThemeDarkDiagramBase;
    }(DThemeDarkCanvasContainer));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkDiagram = /** @class */ (function (_super) {
        __extends(DThemeDarkDiagram, _super);
        function DThemeDarkDiagram() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeDarkDiagram;
    }(DThemeDarkDiagramBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkDiagramCanvasBase = /** @class */ (function (_super) {
        __extends(DThemeDarkDiagramCanvasBase, _super);
        function DThemeDarkDiagramCanvasBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkDiagramCanvasBase.prototype.getBackgroundAmbient = function () {
            return true;
        };
        DThemeDarkDiagramCanvasBase.prototype.getBackgroundBase = function () {
            return DThemeDarkConstants.BACKGROUND_COLOR;
        };
        return DThemeDarkDiagramCanvasBase;
    }(DThemeDarkCanvas));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkDiagramCanvas = /** @class */ (function (_super) {
        __extends(DThemeDarkDiagramCanvas, _super);
        function DThemeDarkDiagramCanvas() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeDarkDiagramCanvas;
    }(DThemeDarkDiagramCanvasBase));

    const EShapeStrokeSide = wcardinal.ui.EShapeStrokeSide;

    /*
     * Copyright (C) 2021 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var EThemeDarkShape = /** @class */ (function () {
        function EThemeDarkShape() {
        }
        EThemeDarkShape.prototype.getFillColor = function () {
            return 0xffffff;
        };
        EThemeDarkShape.prototype.getFillAlpha = function () {
            return 0.5;
        };
        EThemeDarkShape.prototype.getStrokeColor = function () {
            return 0xdddddd;
        };
        EThemeDarkShape.prototype.getStrokeAlpha = function () {
            return 1;
        };
        EThemeDarkShape.prototype.getStrokeWidth = function () {
            return 2;
        };
        EThemeDarkShape.prototype.getStrokeAlign = function () {
            return 0;
        };
        EThemeDarkShape.prototype.getStrokeSide = function () {
            return EShapeStrokeSide.ALL;
        };
        EThemeDarkShape.prototype.getTextValue = function () {
            return "";
        };
        EThemeDarkShape.prototype.getTextColor = function () {
            return this.getStrokeColor();
        };
        EThemeDarkShape.prototype.getTextAlpha = function () {
            return this.getStrokeAlpha();
        };
        EThemeDarkShape.prototype.getTextFamily = function () {
            return "auto";
        };
        EThemeDarkShape.prototype.getTextSize = function () {
            return 14;
        };
        EThemeDarkShape.prototype.getCursor = function () {
            return "";
        };
        EThemeDarkShape.prototype.getRadius = function () {
            return 0.25;
        };
        EThemeDarkShape.prototype.getSizeX = function () {
            return 100;
        };
        EThemeDarkShape.prototype.getSizeY = function () {
            return 100;
        };
        EThemeDarkShape.prototype.getHighlightColor = function () {
            return 0x1e87f0;
        };
        return EThemeDarkShape;
    }());

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkShape = function () {
        DThemeDark.set("EShape", EThemeDarkShape);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkDiagram = function () {
        DThemeDark.set("DDiagram", DThemeDarkDiagram);
        DThemeDark.set("DDiagramCanvas", DThemeDarkDiagramCanvas);
        loadThemeDarkShape();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkDiagramCanvasEditor = /** @class */ (function (_super) {
        __extends(DThemeDarkDiagramCanvasEditor, _super);
        function DThemeDarkDiagramCanvasEditor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkDiagramCanvasEditor.prototype.getBackgroundAmbient = function () {
            return false;
        };
        return DThemeDarkDiagramCanvasEditor;
    }(DThemeDarkDiagramCanvasBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkDiagramEditor = /** @class */ (function (_super) {
        __extends(DThemeDarkDiagramEditor, _super);
        function DThemeDarkDiagramEditor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkDiagramEditor.prototype.getBackgroundAmbient = function () {
            return false;
        };
        DThemeDarkDiagramEditor.prototype.isThumbnailEnabled = function () {
            return false;
        };
        DThemeDarkDiagramEditor.prototype.getThumbnailSize = function () {
            return 128;
        };
        return DThemeDarkDiagramEditor;
    }(DThemeDarkDiagramBase));

    const EShapeActionValueBlinkType = wcardinal.ui.EShapeActionValueBlinkType;

    const EShapeActionValueChangeColorTarget = wcardinal.ui.EShapeActionValueChangeColorTarget;

    const EShapeActionValueChangeColorType = wcardinal.ui.EShapeActionValueChangeColorType;

    const EShapeActionValueChangeTextType = wcardinal.ui.EShapeActionValueChangeTextType;

    const EShapeActionValueMiscType = wcardinal.ui.EShapeActionValueMiscType;

    const EShapeActionValueOnInputAction = wcardinal.ui.EShapeActionValueOnInputAction;

    const EShapeActionValueOpenType = wcardinal.ui.EShapeActionValueOpenType;

    const EShapeActionValueOpetyped = wcardinal.ui.EShapeActionValueOpetyped;

    const EShapeActionValueShowHideType = wcardinal.ui.EShapeActionValueShowHideType;

    const EShapeActionValueSubtyped = wcardinal.ui.EShapeActionValueSubtyped;

    const EShapeActionValueTransformMoveType = wcardinal.ui.EShapeActionValueTransformMoveType;

    const EShapeActionValueTransformResizeType = wcardinal.ui.EShapeActionValueTransformResizeType;

    const EShapeActionValueTransformRotateType = wcardinal.ui.EShapeActionValueTransformRotateType;

    const EShapeActionValueTransformType = wcardinal.ui.EShapeActionValueTransformType;

    const EShapeActionValueType = wcardinal.ui.EShapeActionValueType;

    var EThemeDarkShapeActionValue = /** @class */ (function () {
        function EThemeDarkShapeActionValue() {
        }
        EThemeDarkShapeActionValue.prototype.toLabel = function (value) {
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
        EThemeDarkShapeActionValue.prototype.toTypedLabel = function (type, value) {
            return this.toTypeLabel(type) + ": " + this.toConditionLabel(value.condition);
        };
        EThemeDarkShapeActionValue.prototype.toSubtypedLabel = function (type, subtype, value) {
            var typeLabel = this.toTypeLabel(type);
            switch (type) {
                case EShapeActionValueType.SHOW_HIDE:
                    return "" + this.toShowHideTypeLabel(subtype);
                case EShapeActionValueType.BLINK:
                    return typeLabel + ": " + this.toBlinkTypeLabel(subtype);
                case EShapeActionValueType.CHANGE_COLOR:
                case EShapeActionValueType.CHANGE_COLOR_LEGACY:
                    return typeLabel + ": " + this.toChangeColorTypeLabel(subtype);
                case EShapeActionValueType.MISC:
                    return typeLabel + ": " + this.toMiscTypeLabel(subtype);
            }
            return null;
        };
        EThemeDarkShapeActionValue.prototype.toOpetypedLabel = function (type, subtype, opetype, value) {
            switch (type) {
                case EShapeActionValueType.TRANSFORM:
                    var subtypeLabel = this.toTransformTypeLabel(subtype);
                    switch (subtype) {
                        case EShapeActionValueTransformType.ROTATE:
                            return subtypeLabel + ": " + this.toTransformRotateTypeLabel(opetype);
                        case EShapeActionValueTransformType.MOVE:
                            return subtypeLabel + ": " + this.toTransformMoveTypeLabel(opetype);
                        case EShapeActionValueTransformType.RESIZE:
                            return subtypeLabel + ": " + this.toTransformResizeTypeLabel(opetype);
                    }
            }
            return null;
        };
        EThemeDarkShapeActionValue.prototype.toTypeLabel = function (type) {
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
                case EShapeActionValueType.MISC:
                    return "Misc.";
            }
            return "Unknown";
        };
        EThemeDarkShapeActionValue.prototype.toConditionLabel = function (condition) {
            var l = 20;
            if (l < condition.length) {
                return condition.substring(0, l) + "...";
            }
            else {
                return condition;
            }
        };
        EThemeDarkShapeActionValue.prototype.toBlinkTypeLabel = function (type) {
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
            return "Unknown";
        };
        EThemeDarkShapeActionValue.prototype.toShowHideTypeLabel = function (type) {
            switch (type) {
                case EShapeActionValueShowHideType.SHOW:
                    return "Show";
                case EShapeActionValueShowHideType.HIDE:
                    return "Hide";
            }
            return "Unknown";
        };
        EThemeDarkShapeActionValue.prototype.toTransformTypeLabel = function (type) {
            switch (type) {
                case EShapeActionValueTransformType.RESIZE:
                    return "Resize";
                case EShapeActionValueTransformType.MOVE:
                    return "Move";
                case EShapeActionValueTransformType.ROTATE:
                    return "Rotate";
            }
            return "Unknown";
        };
        EThemeDarkShapeActionValue.prototype.toTransformRotateTypeLabel = function (type) {
            switch (type) {
                case EShapeActionValueTransformRotateType.RELATIVE:
                    return "Relative";
                case EShapeActionValueTransformRotateType.ABSOLUTE:
                    return "Absolute";
            }
            return "Unknown";
        };
        EThemeDarkShapeActionValue.prototype.toTransformMoveTypeLabel = function (type) {
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
            return "Unknown";
        };
        EThemeDarkShapeActionValue.prototype.toTransformResizeTypeLabel = function (type) {
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
            return "Unknown";
        };
        EThemeDarkShapeActionValue.prototype.toChangeColorTypeLabel = function (type) {
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
        EThemeDarkShapeActionValue.prototype.toChangeColorTargetLabel = function (type) {
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
            return "Unknown";
        };
        EThemeDarkShapeActionValue.prototype.toChangeTextTypeLabel = function (type) {
            switch (type) {
                case EShapeActionValueChangeTextType.TEXT:
                    return "Text";
                case EShapeActionValueChangeTextType.NUMBER:
                    return "Number";
            }
            return "Unknown";
        };
        EThemeDarkShapeActionValue.prototype.toOpenTypeLabel = function (type) {
            switch (type) {
                case EShapeActionValueOpenType.DIAGRAM:
                    return "Diagram";
                case EShapeActionValueOpenType.PAGE:
                    return "Page (New window)";
                case EShapeActionValueOpenType.PAGE_INPLACE:
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
            }
            return "Unknown";
        };
        EThemeDarkShapeActionValue.prototype.toMiscTypeLabel = function (type) {
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
            }
            return "Unknown";
        };
        EThemeDarkShapeActionValue.prototype.toOnInputActionLabel = function (type) {
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
            return "Unknown";
        };
        return EThemeDarkShapeActionValue;
    }());

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkShapeActionValue = function () {
        DThemeDark.set("EShapeActionValue", EThemeDarkShapeActionValue);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkDiagramEditor = function () {
        DThemeDark.set("DDiagramEditor", DThemeDarkDiagramEditor);
        DThemeDark.set("DDiagramCanvasEditor", DThemeDarkDiagramCanvasEditor);
        loadThemeDarkShapeActionValue();
        loadThemeDarkShape();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkDialog = function () {
        DThemeDark.set("DDialog", DThemeDarkDialog);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkDialogCommand = function () {
        DThemeDark.set("DDialogCommand", DThemeDarkDialogCommand);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkDialogConfirm = /** @class */ (function (_super) {
        __extends(DThemeDarkDialogConfirm, _super);
        function DThemeDarkDialogConfirm() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkDialogConfirm.prototype.getOk = function () {
            return "Yes";
        };
        DThemeDarkDialogConfirm.prototype.getCancel = function () {
            return "No";
        };
        DThemeDarkDialogConfirm.prototype.getMessage = function () {
            return "";
        };
        return DThemeDarkDialogConfirm;
    }(DThemeDarkDialogCommand));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkDialogConfirmMessage = /** @class */ (function (_super) {
        __extends(DThemeDarkDialogConfirmMessage, _super);
        function DThemeDarkDialogConfirmMessage() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkDialogConfirmMessage.prototype.getWidth = function () {
            return "padding";
        };
        DThemeDarkDialogConfirmMessage.prototype.getHeight = function () {
            return "auto";
        };
        DThemeDarkDialogConfirmMessage.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.CENTER;
        };
        return DThemeDarkDialogConfirmMessage;
    }(DThemeDarkImage));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkDialogConfirm = function () {
        DThemeDark.set("DDialogConfirm", DThemeDarkDialogConfirm);
        DThemeDark.set("DDialogConfirmMessage", DThemeDarkDialogConfirmMessage);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkDialogConfirmDelete = /** @class */ (function (_super) {
        __extends(DThemeDarkDialogConfirmDelete, _super);
        function DThemeDarkDialogConfirmDelete() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkDialogConfirmDelete.prototype.getMessage = function () {
            return "Are you sure you want to delete this data?";
        };
        return DThemeDarkDialogConfirmDelete;
    }(DThemeDarkDialogConfirm));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkDialogConfirmDelete = function () {
        DThemeDark.set("DDialogConfirmDelete", DThemeDarkDialogConfirmDelete);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkDialogConfirmDiscard = /** @class */ (function (_super) {
        __extends(DThemeDarkDialogConfirmDiscard, _super);
        function DThemeDarkDialogConfirmDiscard() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkDialogConfirmDiscard.prototype.getMessage = function () {
            return "Your changes have not been saved.\n" +
                "Do you want to discard the changes and continue?";
        };
        return DThemeDarkDialogConfirmDiscard;
    }(DThemeDarkDialogConfirm));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkDialogConfirmDiscard = function () {
        DThemeDark.set("DDialogConfirmDiscard", DThemeDarkDialogConfirmDiscard);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkDialogInput = /** @class */ (function (_super) {
        __extends(DThemeDarkDialogInput, _super);
        function DThemeDarkDialogInput() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkDialogInput.prototype.getLabel = function () {
            return "";
        };
        DThemeDarkDialogInput.prototype.getMarginVertical = function () {
            return 0;
        };
        DThemeDarkDialogInput.prototype.getMarginHorizontal = function () {
            return 32;
        };
        return DThemeDarkDialogInput;
    }(DThemeDarkDialogCommand));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkDialogInputBoolean = /** @class */ (function (_super) {
        __extends(DThemeDarkDialogInputBoolean, _super);
        function DThemeDarkDialogInputBoolean() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeDarkDialogInputBoolean;
    }(DThemeDarkDialogInput));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkDialogInputBoolean = function () {
        DThemeDark.set("DDialogInputBoolean", DThemeDarkDialogInputBoolean);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkDialogInputInteger = /** @class */ (function (_super) {
        __extends(DThemeDarkDialogInputInteger, _super);
        function DThemeDarkDialogInputInteger() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeDarkDialogInputInteger;
    }(DThemeDarkDialogInput));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkDialogInputInteger = function () {
        DThemeDark.set("DDialogInputInteger", DThemeDarkDialogInputInteger);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkDialogInputReal = /** @class */ (function (_super) {
        __extends(DThemeDarkDialogInputReal, _super);
        function DThemeDarkDialogInputReal() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeDarkDialogInputReal;
    }(DThemeDarkDialogInput));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkDialogInputReal = function () {
        DThemeDark.set("DDialogInputReal", DThemeDarkDialogInputReal);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkDialogInputText = /** @class */ (function (_super) {
        __extends(DThemeDarkDialogInputText, _super);
        function DThemeDarkDialogInputText() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeDarkDialogInputText;
    }(DThemeDarkDialogInput));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkDialogInputText = function () {
        DThemeDark.set("DDialogInputText", DThemeDarkDialogInputText);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkDialogMessage = /** @class */ (function (_super) {
        __extends(DThemeDarkDialogMessage, _super);
        function DThemeDarkDialogMessage() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkDialogMessage.prototype.getOk = function () {
            return "OK";
        };
        DThemeDarkDialogMessage.prototype.getCancel = function () {
            return null;
        };
        return DThemeDarkDialogMessage;
    }(DThemeDarkDialogConfirm));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkDialogMessage = function () {
        DThemeDark.set("DDialogMessage", DThemeDarkDialogMessage);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var message = function (state) {
        if (state.isSucceeded) {
            return "Processed successfully";
        }
        if (state.isFailed) {
            return "Failed to process the request";
        }
        return "Processing...";
    };
    var DThemeDarkDialogProcessing = /** @class */ (function (_super) {
        __extends(DThemeDarkDialogProcessing, _super);
        function DThemeDarkDialogProcessing() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkDialogProcessing.prototype.getOk = function () {
            return "OK";
        };
        DThemeDarkDialogProcessing.prototype.getCancel = function () {
            return null;
        };
        DThemeDarkDialogProcessing.prototype.getMessage = function () {
            return message;
        };
        DThemeDarkDialogProcessing.prototype.getDoneDelay = function () {
            return 400;
        };
        DThemeDarkDialogProcessing.prototype.getCloseDelay = function () {
            return 600;
        };
        return DThemeDarkDialogProcessing;
    }(DThemeDarkDialogConfirm));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    // Material Design icons by Google.
    // Apache license version 2.0.
    DThemeDarkAtlas.add("success_mark", 21, 21, "<g transform=\"scale(0.875,0.875)\">" +
        "<path d=\"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z\" fill=\"#fff\" />" +
        "</g>");
    DThemeDarkAtlas.add("fail_mark", 21, 21, "<g transform=\"scale(0.875,0.875)\">" +
        "<path d=\"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52" +
        " 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8" +
        "-3.58 8-8 8z\" fill=\"#fff\" />" +
        "</g>");
    var DThemeDarkDialogProcessingMessage = /** @class */ (function (_super) {
        __extends(DThemeDarkDialogProcessingMessage, _super);
        function DThemeDarkDialogProcessingMessage() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkDialogProcessingMessage.prototype.getHeight = function () {
            return 90;
        };
        DThemeDarkDialogProcessingMessage.prototype.getImageSource = function (state) {
            if (state.isSucceeded) {
                return DThemeDarkAtlas.mappings.success_mark;
            }
            else if (state.isFailed) {
                return DThemeDarkAtlas.mappings.fail_mark;
            }
            return null;
        };
        DThemeDarkDialogProcessingMessage.prototype.getImageTintAlpha = function (state) {
            return 0.75;
        };
        return DThemeDarkDialogProcessingMessage;
    }(DThemeDarkDialogConfirmMessage));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkDialogProcessing = function () {
        DThemeDark.set("DDialogProcessing", DThemeDarkDialogProcessing);
        DThemeDark.set("DDialogProcessingMessage", DThemeDarkDialogProcessingMessage);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkDialogSaveAs = /** @class */ (function (_super) {
        __extends(DThemeDarkDialogSaveAs, _super);
        function DThemeDarkDialogSaveAs() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkDialogSaveAs.prototype.getOk = function () {
            return "Save";
        };
        return DThemeDarkDialogSaveAs;
    }(DThemeDarkDialogInputText));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkDialogSaveAs = function () {
        DThemeDark.set("DDialogSaveAs", DThemeDarkDialogSaveAs);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkDialogAll = function () {
        loadThemeDarkDialogColorGradient();
        loadThemeDarkDialogColor();
        loadThemeDarkDialogCommand();
        loadThemeDarkDialogConfirm();
        loadThemeDarkDialogConfirmDelete();
        loadThemeDarkDialogConfirmDiscard();
        loadThemeDarkDialogDate();
        loadThemeDarkDialogDatetime();
        loadThemeDarkDialogInputBoolean();
        loadThemeDarkDialogInputInteger();
        loadThemeDarkDialogInputReal();
        loadThemeDarkDialogInputText();
        loadThemeDarkDialogMessage();
        loadThemeDarkDialogProcessing();
        loadThemeDarkDialogSaveAs();
        loadThemeDarkDialogSelect();
        loadThemeDarkDialogTime();
        loadThemeDarkDialog();
    };

    const DLayoutDirection = wcardinal.ui.DLayoutDirection;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkLayout = /** @class */ (function (_super) {
        __extends(DThemeDarkLayout, _super);
        function DThemeDarkLayout() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkLayout.prototype.getBackgroundColor = function (state) {
            return null;
        };
        DThemeDarkLayout.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeDarkLayout.prototype.getMargin = function () {
            return 5;
        };
        DThemeDarkLayout.prototype.getInteractive = function () {
            return DBaseInteractive.CHILDREN;
        };
        DThemeDarkLayout.prototype.getDirection = function () {
            return DLayoutDirection.VERTICAL;
        };
        DThemeDarkLayout.prototype.getCornerAdjust = function () {
            return false;
        };
        DThemeDarkLayout.prototype.getMultiplicity = function () {
            return 1;
        };
        DThemeDarkLayout.prototype.getReverse = function () {
            return false;
        };
        return DThemeDarkLayout;
    }(DThemeDarkBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkLayoutVertical = /** @class */ (function (_super) {
        __extends(DThemeDarkLayoutVertical, _super);
        function DThemeDarkLayoutVertical() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkLayoutVertical.prototype.getDirection = function () {
            return DLayoutDirection.VERTICAL;
        };
        DThemeDarkLayoutVertical.prototype.getWidth = function () {
            return "auto";
        };
        return DThemeDarkLayoutVertical;
    }(DThemeDarkLayout));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkExpandable = /** @class */ (function (_super) {
        __extends(DThemeDarkExpandable, _super);
        function DThemeDarkExpandable() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkExpandable.prototype.getBackgroundColor = function (state) {
            if (state.isActive) {
                return 0x0F0700;
            }
            return null;
        };
        DThemeDarkExpandable.prototype.getBackgroundAlpha = function (state) {
            if (state.isActive) {
                return 0.1;
            }
            return 0;
        };
        DThemeDarkExpandable.prototype.getMargin = function () {
            return 0;
        };
        DThemeDarkExpandable.prototype.getCornerMask = function () {
            return DCornerMask.ALL;
        };
        return DThemeDarkExpandable;
    }(DThemeDarkLayoutVertical));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    DThemeDarkAtlas.add("menu_item_expandable_header_closed", 14, 14, "<g transform=\"scale(1, 0.7)\">" +
        "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"6 16 10 10 6 4\"></polyline>" +
        "</g>");
    DThemeDarkAtlas.add("menu_item_expandable_header_opened", 14, 14, "<g transform=\"scale(0.7, 1)\">" +
        "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"16 6 10 10 4 6\"></polyline>" +
        "</g>");
    var DThemeDarkExpandableHeader = /** @class */ (function (_super) {
        __extends(DThemeDarkExpandableHeader, _super);
        function DThemeDarkExpandableHeader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkExpandableHeader.prototype.getBackgroundColor = function (state) {
            if (state.inDisabled) {
                return null;
            }
            else if (state.isFocused || state.isHovered) {
                return 0x2e2e2e;
            }
            else if (state.inActive) {
                return 0x2e2e2e;
            }
            else {
                return null;
            }
        };
        DThemeDarkExpandableHeader.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeDarkExpandableHeader.prototype.getHeight = function () {
            return 30;
        };
        DThemeDarkExpandableHeader.prototype.getWidth = function () {
            return "padding";
        };
        DThemeDarkExpandableHeader.prototype.getPaddingLeft = function () {
            return 16;
        };
        DThemeDarkExpandableHeader.prototype.getPaddingRight = function () {
            return 16;
        };
        DThemeDarkExpandableHeader.prototype.getCornerMask = function () {
            return DCornerMask.ALL;
        };
        return DThemeDarkExpandableHeader;
    }(DThemeDarkImage));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkExpandable = function () {
        DThemeDark.set("DExpandableHeader", DThemeDarkExpandableHeader);
        DThemeDark.set("DExpandable", DThemeDarkExpandable);
    };

    const DHtmlElementWhen = wcardinal.ui.DHtmlElementWhen;

    var divCreator = function (parent) {
        var result = document.createElement("div");
        parent.appendChild(result);
        return result;
    };
    var DThemeDarkHtmlElement = /** @class */ (function (_super) {
        __extends(DThemeDarkHtmlElement, _super);
        function DThemeDarkHtmlElement() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkHtmlElement.prototype.getElementCreator = function () {
            return null;
        };
        DThemeDarkHtmlElement.prototype.setElementStyle = function (target, state, padding, elementRect, clipperRect) {
            // Style
            var style = this.getElementStylePosition(state, elementRect, clipperRect) +
                this.getElementStyleMargin(state) +
                this.getElementStyleText(state) +
                this.getElementStyleBackground(state) +
                this.getElementStyleBorder(state) +
                this.getElementStylePadding(state, padding, elementRect) +
                this.getElementStyleOutline(state);
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
        DThemeDarkHtmlElement.prototype.getElementStyleBackground = function (state) {
            return "background-color: transparent;";
        };
        DThemeDarkHtmlElement.prototype.getElementStyleBorder = function (state) {
            return "border: none; box-sizing: border-box;";
        };
        DThemeDarkHtmlElement.prototype.getElementStylePadding = function (state, padding, elementRect) {
            var paddingTop = padding.getTop();
            var paddingRight = padding.getRight();
            var paddingBottom = padding.getBottom();
            var paddingLeft = padding.getLeft();
            return "padding: " + paddingTop + "px " + paddingRight + "px " + paddingBottom + "px " + paddingLeft + "px;";
        };
        DThemeDarkHtmlElement.prototype.getElementStyleOutline = function (state) {
            return "outline: none;";
        };
        DThemeDarkHtmlElement.prototype.getElementStylePosition = function (state, elementRect, clipperRect) {
            return "position: absolute;" +
                ("left: " + (elementRect.x - clipperRect.x) + "px;") +
                ("top: " + (elementRect.y - clipperRect.y) + "px;") +
                ("width: " + elementRect.width + "px;") +
                ("height: " + elementRect.height + "px;") +
                ("line-height: " + elementRect.height + "px;");
        };
        DThemeDarkHtmlElement.prototype.getElementStyleText = function (state) {
            return "font-family: " + this.getFontFamilly() + ";" +
                ("font-size: " + this.getFontSize() + "px;") +
                ("color: #" + this.getColor(state).toString(16) + ";");
        };
        DThemeDarkHtmlElement.prototype.getElementStyleMargin = function (state) {
            return "margin: 0;";
        };
        DThemeDarkHtmlElement.prototype.getClipperCreator = function () {
            return divCreator;
        };
        DThemeDarkHtmlElement.prototype.setClipperStyle = function (target, state, padding, elementRect, clipperRect) {
            var style = "overflow: hidden; outline: none;" +
                "padding: 0; margin: 0; border: none; background-color: transparent;" +
                this.getClipperStylePosition(state, elementRect, clipperRect);
            target.setAttribute("style", style);
        };
        DThemeDarkHtmlElement.prototype.getClipperStylePosition = function (state, elementRect, clipperRect) {
            return "position: absolute;" +
                ("left: " + clipperRect.x + "px;") +
                ("top: " + clipperRect.y + "px;") +
                ("width: " + clipperRect.width + "px;") +
                ("height: " + clipperRect.height + "px;") +
                ("line-height: " + elementRect.height + "px;");
        };
        DThemeDarkHtmlElement.prototype.getBeforeCreator = function () {
            return divCreator;
        };
        DThemeDarkHtmlElement.prototype.setBeforeStyle = function (target) {
            var style = "overflow: hidden; outline: none;" +
                "padding: 0; margin: 0; border: none; background-color: transparent;" +
                "position: absolute; left: 0; top: 0; width: 0; height: 0; line-height: 0;";
            target.setAttribute("style", style);
            target.setAttribute("tabindex", "0");
        };
        DThemeDarkHtmlElement.prototype.getAfterCreator = function () {
            return divCreator;
        };
        DThemeDarkHtmlElement.prototype.setAfterStyle = function (target) {
            this.setBeforeStyle(target);
        };
        DThemeDarkHtmlElement.prototype.getWhen = function () {
            return DHtmlElementWhen.FOCUSED;
        };
        DThemeDarkHtmlElement.prototype.getSelect = function () {
            return false;
        };
        return DThemeDarkHtmlElement;
    }(DThemeDarkImageBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkHtmlElement = function () {
        DThemeDark.set("DHtmlElement", DThemeDarkHtmlElement);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkImage = function () {
        DThemeDark.set("DImage", DThemeDarkImage);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkLayoutHorizontal = /** @class */ (function (_super) {
        __extends(DThemeDarkLayoutHorizontal, _super);
        function DThemeDarkLayoutHorizontal() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkLayoutHorizontal.prototype.getDirection = function () {
            return DLayoutDirection.HORIZONTAL;
        };
        DThemeDarkLayoutHorizontal.prototype.getHeight = function () {
            return "auto";
        };
        return DThemeDarkLayoutHorizontal;
    }(DThemeDarkLayout));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkInputAndLabel = /** @class */ (function (_super) {
        __extends(DThemeDarkInputAndLabel, _super);
        function DThemeDarkInputAndLabel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkInputAndLabel.prototype.getHeight = function () {
            return this.getLineHeight();
        };
        return DThemeDarkInputAndLabel;
    }(DThemeDarkLayoutHorizontal));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkInputAndLabel = function () {
        DThemeDark.set("DInputAndLabel", DThemeDarkInputAndLabel);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkInputBoolean = /** @class */ (function (_super) {
        __extends(DThemeDarkInputBoolean, _super);
        function DThemeDarkInputBoolean() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkInputBoolean.prototype.getCornerAdjust = function () {
            return true;
        };
        DThemeDarkInputBoolean.prototype.getMargin = function () {
            return 0;
        };
        return DThemeDarkInputBoolean;
    }(DThemeDarkLayoutHorizontal));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkInputBooleanButtonOff = /** @class */ (function (_super) {
        __extends(DThemeDarkInputBooleanButtonOff, _super);
        function DThemeDarkInputBooleanButtonOff() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkInputBooleanButtonOff.prototype.getBorderMask = function () {
            return DBorderMask.RIGHT;
        };
        DThemeDarkInputBooleanButtonOff.prototype.isToggle = function () {
            return true;
        };
        DThemeDarkInputBooleanButtonOff.prototype.newTextValue = function () {
            return "OFF";
        };
        return DThemeDarkInputBooleanButtonOff;
    }(DThemeDarkButton));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkInputBooleanButtonOn = /** @class */ (function (_super) {
        __extends(DThemeDarkInputBooleanButtonOn, _super);
        function DThemeDarkInputBooleanButtonOn() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkInputBooleanButtonOn.prototype.getBorderMask = function () {
            return DBorderMask.LEFT;
        };
        DThemeDarkInputBooleanButtonOn.prototype.isToggle = function () {
            return true;
        };
        DThemeDarkInputBooleanButtonOn.prototype.newTextValue = function () {
            return "ON";
        };
        return DThemeDarkInputBooleanButtonOn;
    }(DThemeDarkButton));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkInputBoolean = function () {
        DThemeDark.set("DInputBoolean", DThemeDarkInputBoolean);
        DThemeDark.set("DInputBooleanButtonOn", DThemeDarkInputBooleanButtonOn);
        DThemeDark.set("DInputBooleanButtonOff", DThemeDarkInputBooleanButtonOff);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var editingValidator = function () {
        return null;
    };
    var editingUnformatter = function (text) {
        return text;
    };
    var CREATOR_CLASSNAME = "d-theme-dark-input";
    var CREATOR_CLASSNAME_ELEMENT = CREATOR_CLASSNAME + "-element";
    var elementCreator = function (parent) {
        var found = parent.getElementsByClassName(CREATOR_CLASSNAME_ELEMENT);
        if (0 < found.length) {
            return found[0];
        }
        var element = document.createElement("input");
        element.setAttribute("spellcheck", "false");
        element.setAttribute("class", CREATOR_CLASSNAME_ELEMENT);
        parent.appendChild(element);
        return element;
    };
    var divCreator$1 = function (parent, classname) {
        var found = parent.getElementsByClassName(classname);
        if (0 < found.length) {
            return found[0];
        }
        var result = document.createElement("div");
        result.setAttribute("class", classname);
        parent.appendChild(result);
        return result;
    };
    var CREATOR_CLASSNAME_CLIPPER = CREATOR_CLASSNAME + "-clipper";
    var clipperCreator = function (parent) {
        return divCreator$1(parent, CREATOR_CLASSNAME_CLIPPER);
    };
    var CREATOR_CLASSNAME_BEFORE = CREATOR_CLASSNAME + "-before";
    var beforeCreator = function (parent) {
        return divCreator$1(parent, CREATOR_CLASSNAME_BEFORE);
    };
    var CREATOR_CLASSNAME_AFTER = CREATOR_CLASSNAME + "-after";
    var afterCreator = function (parent) {
        return divCreator$1(parent, CREATOR_CLASSNAME_AFTER);
    };
    var DThemeDarkInput = /** @class */ (function (_super) {
        __extends(DThemeDarkInput, _super);
        function DThemeDarkInput() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.BACKGROUND_COLOR = DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD;
            _this.BACKGROUND_COLOR_HOVERED = UtilRgb.brighten(_this.BACKGROUND_COLOR, 0.017);
            return _this;
        }
        DThemeDarkInput.prototype.getBackgroundColor = function (state) {
            if (state.inDisabled || state.inReadOnly) {
                return null;
            }
            else if (state.isFocused || state.isHovered) {
                return this.BACKGROUND_COLOR_HOVERED;
            }
            else {
                return this.BACKGROUND_COLOR;
            }
        };
        DThemeDarkInput.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeDarkInput.prototype.getOutlineColor = function (state) {
            if (state.isInvalid) {
                return DThemeDarkConstants.INVALID_COLOR;
            }
            return _super.prototype.getOutlineColor.call(this, state);
        };
        DThemeDarkInput.prototype.getHeight = function () {
            return this.getLineHeight();
        };
        DThemeDarkInput.prototype.getWidth = function () {
            return 100;
        };
        DThemeDarkInput.prototype.getPlaceholder = function () {
            return "";
        };
        DThemeDarkInput.prototype.getPaddingLeft = function () {
            return 10;
        };
        DThemeDarkInput.prototype.getPaddingRight = function () {
            return 10;
        };
        DThemeDarkInput.prototype.getCursor = function (state) {
            if (!state.isActionable) {
                return "";
            }
            return "text";
        };
        DThemeDarkInput.prototype.getEditingFormatter = function () {
            return this.getTextFormatter();
        };
        DThemeDarkInput.prototype.getEditingUnformatter = function () {
            return editingUnformatter;
        };
        DThemeDarkInput.prototype.getEditingValidator = function () {
            return editingValidator;
        };
        DThemeDarkInput.prototype.getElementCreator = function () {
            return elementCreator;
        };
        DThemeDarkInput.prototype.getClipperCreator = function () {
            return clipperCreator;
        };
        DThemeDarkInput.prototype.getBeforeCreator = function () {
            return beforeCreator;
        };
        DThemeDarkInput.prototype.getAfterCreator = function () {
            return afterCreator;
        };
        DThemeDarkInput.prototype.getSelect = function () {
            return true;
        };
        DThemeDarkInput.prototype.getElementStyleMargin = function (state) {
            return "margin: 0.1em 0 0 0;";
        };
        return DThemeDarkInput;
    }(DThemeDarkHtmlElement));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkInputNumber = /** @class */ (function (_super) {
        __extends(DThemeDarkInputNumber, _super);
        function DThemeDarkInputNumber() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkInputNumber.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.CENTER;
        };
        DThemeDarkInputNumber.prototype.getStep = function () {
            return null;
        };
        DThemeDarkInputNumber.prototype.getMin = function () {
            return null;
        };
        DThemeDarkInputNumber.prototype.getMax = function () {
            return null;
        };
        DThemeDarkInputNumber.prototype.newTextValue = function () {
            return 0;
        };
        return DThemeDarkInputNumber;
    }(DThemeDarkInput));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var editingUnformatter$1 = function (text) {
        return parseInt(text, 10);
    };
    var DThemeDarkInputInteger = /** @class */ (function (_super) {
        __extends(DThemeDarkInputInteger, _super);
        function DThemeDarkInputInteger() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkInputInteger.prototype.getEditingUnformatter = function () {
            return editingUnformatter$1;
        };
        return DThemeDarkInputInteger;
    }(DThemeDarkInputNumber));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkInputInteger = function () {
        DThemeDark.set("DInputInteger", DThemeDarkInputInteger);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkInputLabel = /** @class */ (function (_super) {
        __extends(DThemeDarkInputLabel, _super);
        function DThemeDarkInputLabel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkInputLabel.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.RIGHT;
        };
        DThemeDarkInputLabel.prototype.getWidth = function () {
            return 60;
        };
        DThemeDarkInputLabel.prototype.getHeight = function () {
            return this.getLineHeight();
        };
        return DThemeDarkInputLabel;
    }(DThemeDarkText));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkInputLabel = function () {
        DThemeDark.set("DInputLabel", DThemeDarkInputLabel);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var editingUnformatter$2 = function (text) {
        return parseFloat(text);
    };
    var DThemeDarkInputReal = /** @class */ (function (_super) {
        __extends(DThemeDarkInputReal, _super);
        function DThemeDarkInputReal() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkInputReal.prototype.getEditingUnformatter = function () {
            return editingUnformatter$2;
        };
        return DThemeDarkInputReal;
    }(DThemeDarkInputNumber));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkInputReal = function () {
        DThemeDark.set("DInputReal", DThemeDarkInputReal);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkInputText = /** @class */ (function (_super) {
        __extends(DThemeDarkInputText, _super);
        function DThemeDarkInputText() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkInputText.prototype.newTextValue = function () {
            return "";
        };
        return DThemeDarkInputText;
    }(DThemeDarkInput));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkInputText = function () {
        DThemeDark.set("DInputText", DThemeDarkInputText);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkInputAll = function () {
        loadThemeDarkInputAndLabel();
        loadThemeDarkInputBoolean();
        loadThemeDarkInputInteger();
        loadThemeDarkInputLabel();
        loadThemeDarkInputReal();
        loadThemeDarkInputText();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkLayoutSpace = /** @class */ (function (_super) {
        __extends(DThemeDarkLayoutSpace, _super);
        function DThemeDarkLayoutSpace() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkLayoutSpace.prototype.getBackgroundColor = function (state) {
            return null;
        };
        DThemeDarkLayoutSpace.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeDarkLayoutSpace.prototype.getWidth = function () {
            return 0;
        };
        DThemeDarkLayoutSpace.prototype.getHeight = function () {
            return 0;
        };
        DThemeDarkLayoutSpace.prototype.getClearType = function () {
            return DLayoutClearType.BOTH;
        };
        DThemeDarkLayoutSpace.prototype.getInteractive = function () {
            return DBaseInteractive.CHILDREN;
        };
        return DThemeDarkLayoutSpace;
    }(DThemeDarkBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkLayout = function () {
        DThemeDark.set("DLayout", DThemeDarkLayout);
        DThemeDark.set("DLayoutHorizontal", DThemeDarkLayoutHorizontal);
        DThemeDark.set("DLayoutSpace", DThemeDarkLayoutSpace);
        DThemeDark.set("DLayoutVertical", DThemeDarkLayoutVertical);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkListItemSeparator = /** @class */ (function (_super) {
        __extends(DThemeDarkListItemSeparator, _super);
        function DThemeDarkListItemSeparator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkListItemSeparator.prototype.getBorderColor = function (state) {
            return DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR;
        };
        DThemeDarkListItemSeparator.prototype.getBorderAlpha = function (state) {
            return DThemeDarkConstants.WEAK_HIGHLIGHT_ALPHA;
        };
        DThemeDarkListItemSeparator.prototype.getHeight = function () {
            return 15;
        };
        DThemeDarkListItemSeparator.prototype.getWidth = function () {
            return "padding";
        };
        DThemeDarkListItemSeparator.prototype.getPaddingLeft = function () {
            return 10;
        };
        DThemeDarkListItemSeparator.prototype.getPaddingRight = function () {
            return 10;
        };
        DThemeDarkListItemSeparator.prototype.getInteractive = function () {
            return DBaseInteractive.NONE;
        };
        return DThemeDarkListItemSeparator;
    }(DThemeDarkImage));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkList = function () {
        DThemeDark.set("DListItemSeparator", DThemeDarkListItemSeparator);
        DThemeDark.set("DListItem", DThemeDarkListItem);
        DThemeDark.set("DList", DThemeDarkList);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkMenu = /** @class */ (function (_super) {
        __extends(DThemeDarkMenu, _super);
        function DThemeDarkMenu() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkMenu.prototype.getBackgroundColor = function (state) {
            return DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD;
        };
        DThemeDarkMenu.prototype.getOffsetX = function () {
            return 5;
        };
        DThemeDarkMenu.prototype.getOffsetY = function () {
            return 5;
        };
        DThemeDarkMenu.prototype.getPaddingTop = function () {
            return 5;
        };
        DThemeDarkMenu.prototype.getPaddingBottom = function () {
            return 5;
        };
        DThemeDarkMenu.prototype.getWidth = function () {
            return 200;
        };
        DThemeDarkMenu.prototype.getHeight = function () {
            return "auto";
        };
        DThemeDarkMenu.prototype.getMargin = function () {
            return 0;
        };
        DThemeDarkMenu.prototype.getShadow = function () {
            return this.newShadowWeak();
        };
        DThemeDarkMenu.prototype.getInteractive = function () {
            return DBaseInteractive.BOTH;
        };
        return DThemeDarkMenu;
    }(DThemeDarkLayoutVertical));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkMenuItem = /** @class */ (function (_super) {
        __extends(DThemeDarkMenuItem, _super);
        function DThemeDarkMenuItem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkMenuItem.prototype.getBackgroundColorActive = function (state) {
            return DThemeDarkConstants.HIGHLIGHT_COLOR;
        };
        DThemeDarkMenuItem.prototype.getBackgroundAlphaActive = function (state) {
            return 1.0;
        };
        DThemeDarkMenuItem.prototype.getColorActive = function (state) {
            return DThemeDarkConstants.ACTIVE_COLOR;
        };
        DThemeDarkMenuItem.prototype.getPaddingLeft = function () {
            return this.getPaddingRight();
        };
        DThemeDarkMenuItem.prototype.getPaddingRight = function () {
            return 26;
        };
        return DThemeDarkMenuItem;
    }(DThemeDarkListItem));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkMenuItemText = /** @class */ (function (_super) {
        __extends(DThemeDarkMenuItemText, _super);
        function DThemeDarkMenuItemText() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkMenuItemText.prototype.getShortcutTextMargin = function () {
            return this.getPaddingRight();
        };
        DThemeDarkMenuItemText.prototype.getShortcutColor = function (state) {
            return this.getColor(state);
        };
        DThemeDarkMenuItemText.prototype.getShortcutAlpha = function (state) {
            return this.getAlpha(state) * 0.5;
        };
        return DThemeDarkMenuItemText;
    }(DThemeDarkMenuItem));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    DThemeDarkAtlas.add("menu_item_mark_check_active", 14, 14, "<g>" +
        "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"1 6.5 5 11 13 2.5\"></polyline>" +
        "</g>");
    DThemeDarkAtlas.add("menu_item_mark_check_inactive", 14, 14, "<g></g>");
    var DThemeDarkMenuItemCheck = /** @class */ (function (_super) {
        __extends(DThemeDarkMenuItemCheck, _super);
        function DThemeDarkMenuItemCheck() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkMenuItemCheck.prototype.getBackgroundColorActive = function (state) {
            if (state.isFocused || state.isHovered) {
                return DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR;
            }
            else {
                return null;
            }
        };
        DThemeDarkMenuItemCheck.prototype.getBackgroundAlphaActive = function (state) {
            return DThemeDarkConstants.WEAK_HIGHLIGHT_ALPHA;
        };
        DThemeDarkMenuItemCheck.prototype.getColorActive = function (state) {
            return DThemeDarkConstants.COLOR;
        };
        DThemeDarkMenuItemCheck.prototype.getImageSource = function (state) {
            if (state.isActive) {
                return DThemeDarkAtlas.mappings.menu_item_mark_check_active;
            }
            return DThemeDarkAtlas.mappings.menu_item_mark_check_inactive;
        };
        DThemeDarkMenuItemCheck.prototype.getImageAlignWith = function () {
            return DAlignWith.BORDER;
        };
        DThemeDarkMenuItemCheck.prototype.getImageMarginHorizontal = function () {
            return 7;
        };
        return DThemeDarkMenuItemCheck;
    }(DThemeDarkMenuItemText));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkMenuItemExpandable = /** @class */ (function (_super) {
        __extends(DThemeDarkMenuItemExpandable, _super);
        function DThemeDarkMenuItemExpandable() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkMenuItemExpandable.prototype.getBackgroundColor = function (state) {
            if (state.isActive) {
                return 0x0F0700;
            }
            return null;
        };
        DThemeDarkMenuItemExpandable.prototype.getBackgroundAlpha = function (state) {
            if (state.isActive) {
                return 0.1;
            }
            return 0;
        };
        DThemeDarkMenuItemExpandable.prototype.getMargin = function () {
            return 0;
        };
        DThemeDarkMenuItemExpandable.prototype.getWidth = function () {
            return "padding";
        };
        DThemeDarkMenuItemExpandable.prototype.getHeight = function () {
            return "auto";
        };
        DThemeDarkMenuItemExpandable.prototype.getCornerMask = function () {
            return DCornerMask.ALL;
        };
        return DThemeDarkMenuItemExpandable;
    }(DThemeDarkLayoutVertical));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkMenuItemExpandableBody = /** @class */ (function (_super) {
        __extends(DThemeDarkMenuItemExpandableBody, _super);
        function DThemeDarkMenuItemExpandableBody() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkMenuItemExpandableBody.prototype.getWidth = function () {
            return "padding";
        };
        DThemeDarkMenuItemExpandableBody.prototype.getHeight = function () {
            return "auto";
        };
        DThemeDarkMenuItemExpandableBody.prototype.getCornerMask = function () {
            return DCornerMask.ALL;
        };
        return DThemeDarkMenuItemExpandableBody;
    }(DThemeDarkLayoutVertical));

    var DThemeDarkExpandables = /** @class */ (function () {
        function DThemeDarkExpandables() {
        }
        DThemeDarkExpandables.init = function () {
            DThemeDarkAtlas.add("expandable_closed", 14, 14, "<g transform=\"scale(1, 0.7)\">" +
                "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"6 16 10 10 6 4\"></polyline>" +
                "</g>");
            DThemeDarkAtlas.add("expandable_opened", 14, 14, "<g transform=\"scale(0.7, 1)\">" +
                "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"16 6 10 10 4 6\"></polyline>" +
                "</g>");
        };
        DThemeDarkExpandables.getImageOpened = function () {
            return DThemeDarkAtlas.mappings.expandable_opened;
        };
        DThemeDarkExpandables.getImageClosed = function () {
            return DThemeDarkAtlas.mappings.expandable_closed;
        };
        return DThemeDarkExpandables;
    }());

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    DThemeDarkExpandables.init();
    var DThemeDarkMenuItemExpandableHeader = /** @class */ (function (_super) {
        __extends(DThemeDarkMenuItemExpandableHeader, _super);
        function DThemeDarkMenuItemExpandableHeader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkMenuItemExpandableHeader.prototype.getPaddingLeft = function () {
            return this.getPaddingRight();
        };
        DThemeDarkMenuItemExpandableHeader.prototype.getPaddingRight = function () {
            return 26;
        };
        DThemeDarkMenuItemExpandableHeader.prototype.getImageSource = function (state) {
            if (state.inActive) {
                return DThemeDarkExpandables.getImageOpened();
            }
            return DThemeDarkExpandables.getImageClosed();
        };
        DThemeDarkMenuItemExpandableHeader.prototype.getImageAlignWith = function () {
            return DAlignWith.BORDER;
        };
        DThemeDarkMenuItemExpandableHeader.prototype.getImageMarginHorizontal = function () {
            return 7;
        };
        return DThemeDarkMenuItemExpandableHeader;
    }(DThemeDarkListItem));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkMenuItemExpandableItemCheck = /** @class */ (function (_super) {
        __extends(DThemeDarkMenuItemExpandableItemCheck, _super);
        function DThemeDarkMenuItemExpandableItemCheck() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkMenuItemExpandableItemCheck.prototype.getPaddingLeft = function () {
            return _super.prototype.getPaddingLeft.call(this) + 16;
        };
        DThemeDarkMenuItemExpandableItemCheck.prototype.getImageMarginHorizontal = function () {
            return _super.prototype.getImageMarginHorizontal.call(this) + 16;
        };
        return DThemeDarkMenuItemExpandableItemCheck;
    }(DThemeDarkMenuItemCheck));

    const DBaseState = wcardinal.ui.DBaseState;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    DThemeDarkLinks.init();
    var DThemeDarkMenuItemLink = /** @class */ (function (_super) {
        __extends(DThemeDarkMenuItemLink, _super);
        function DThemeDarkMenuItemLink() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkMenuItemLink.prototype.getImageSource = function (state) {
            if (state.is(DBaseState.NEW_WINDOW)) {
                return DThemeDarkLinks.getImageSource(state);
            }
            return null;
        };
        DThemeDarkMenuItemLink.prototype.getImageTintAlpha = function (state) {
            if (state.isHovered) {
                return _super.prototype.getImageTintAlpha.call(this, state);
            }
            return 0;
        };
        DThemeDarkMenuItemLink.prototype.getImageAlignWith = function () {
            return DAlignWith.BORDER;
        };
        DThemeDarkMenuItemLink.prototype.getImageAlignHorizontal = function () {
            return DAlignHorizontal.RIGHT;
        };
        DThemeDarkMenuItemLink.prototype.getLinkMenuOptions = function () {
            return DThemeDarkLinks.getLinkMenuOptions();
        };
        return DThemeDarkMenuItemLink;
    }(DThemeDarkMenuItemText));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkMenuItemExpandableItemLink = /** @class */ (function (_super) {
        __extends(DThemeDarkMenuItemExpandableItemLink, _super);
        function DThemeDarkMenuItemExpandableItemLink() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkMenuItemExpandableItemLink.prototype.getPaddingLeft = function () {
            return _super.prototype.getPaddingLeft.call(this) + 16;
        };
        return DThemeDarkMenuItemExpandableItemLink;
    }(DThemeDarkMenuItemLink));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    DThemeDarkAtlas.add("menu_item_mark_next", 14, 20, "<g>" +
        "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"5 16 11 10 5 4\"></polyline>" +
        "</g>");
    var DThemeDarkMenuItemMenu = /** @class */ (function (_super) {
        __extends(DThemeDarkMenuItemMenu, _super);
        function DThemeDarkMenuItemMenu() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkMenuItemMenu.prototype.getImageSource = function (state) {
            return DThemeDarkAtlas.mappings.menu_item_mark_next;
        };
        DThemeDarkMenuItemMenu.prototype.getImageAlignWith = function () {
            return DAlignWith.BORDER;
        };
        DThemeDarkMenuItemMenu.prototype.getImageAlignHorizontal = function () {
            return DAlignHorizontal.RIGHT;
        };
        DThemeDarkMenuItemMenu.prototype.getImageMarginHorizontal = function () {
            return 12;
        };
        return DThemeDarkMenuItemMenu;
    }(DThemeDarkMenuItem));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkMenuItemExpandableItemMenu = /** @class */ (function (_super) {
        __extends(DThemeDarkMenuItemExpandableItemMenu, _super);
        function DThemeDarkMenuItemExpandableItemMenu() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkMenuItemExpandableItemMenu.prototype.getPaddingLeft = function () {
            return _super.prototype.getPaddingLeft.call(this) + 16;
        };
        return DThemeDarkMenuItemExpandableItemMenu;
    }(DThemeDarkMenuItemMenu));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkMenuItemSeparator = /** @class */ (function (_super) {
        __extends(DThemeDarkMenuItemSeparator, _super);
        function DThemeDarkMenuItemSeparator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeDarkMenuItemSeparator;
    }(DThemeDarkListItemSeparator));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkMenuItemExpandableItemSeparator = /** @class */ (function (_super) {
        __extends(DThemeDarkMenuItemExpandableItemSeparator, _super);
        function DThemeDarkMenuItemExpandableItemSeparator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkMenuItemExpandableItemSeparator.prototype.getPaddingLeft = function () {
            return _super.prototype.getPaddingLeft.call(this) + 16;
        };
        return DThemeDarkMenuItemExpandableItemSeparator;
    }(DThemeDarkMenuItemSeparator));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkMenuItemSpace = /** @class */ (function (_super) {
        __extends(DThemeDarkMenuItemSpace, _super);
        function DThemeDarkMenuItemSpace() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeDarkMenuItemSpace;
    }(DThemeDarkLayoutSpace));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkMenuItemExpandableItemSpace = /** @class */ (function (_super) {
        __extends(DThemeDarkMenuItemExpandableItemSpace, _super);
        function DThemeDarkMenuItemExpandableItemSpace() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkMenuItemExpandableItemSpace.prototype.getPaddingLeft = function () {
            return _super.prototype.getPaddingLeft.call(this) + 16;
        };
        return DThemeDarkMenuItemExpandableItemSpace;
    }(DThemeDarkMenuItemSpace));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkMenuItemExpandableItemText = /** @class */ (function (_super) {
        __extends(DThemeDarkMenuItemExpandableItemText, _super);
        function DThemeDarkMenuItemExpandableItemText() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkMenuItemExpandableItemText.prototype.getPaddingLeft = function () {
            return _super.prototype.getPaddingLeft.call(this) + 16;
        };
        return DThemeDarkMenuItemExpandableItemText;
    }(DThemeDarkMenuItemText));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkMenu = function () {
        DThemeDark.set("DMenu", DThemeDarkMenu);
        DThemeDark.set("DMenuItem", DThemeDarkMenuItem);
        DThemeDark.set("DMenuItemCheck", DThemeDarkMenuItemCheck);
        DThemeDark.set("DMenuItemLink", DThemeDarkMenuItemLink);
        DThemeDark.set("DMenuItemMenu", DThemeDarkMenuItemMenu);
        DThemeDark.set("DMenuItemSeparator", DThemeDarkMenuItemSeparator);
        DThemeDark.set("DMenuItemSpace", DThemeDarkMenuItemSpace);
        DThemeDark.set("DMenuItemText", DThemeDarkMenuItemText);
        DThemeDark.set("DMenuItemExpandableBody", DThemeDarkMenuItemExpandableBody);
        DThemeDark.set("DMenuItemExpandableHeader", DThemeDarkMenuItemExpandableHeader);
        DThemeDark.set("DMenuItemExpandableItemCheck", DThemeDarkMenuItemExpandableItemCheck);
        DThemeDark.set("DMenuItemExpandableItemLink", DThemeDarkMenuItemExpandableItemLink);
        DThemeDark.set("DMenuItemExpandableItemMenu", DThemeDarkMenuItemExpandableItemMenu);
        DThemeDark.set("DMenuItemExpandableItemSeparator", DThemeDarkMenuItemExpandableItemSeparator);
        DThemeDark.set("DMenuItemExpandableItemSpace", DThemeDarkMenuItemExpandableItemSpace);
        DThemeDark.set("DMenuItemExpandableItemText", DThemeDarkMenuItemExpandableItemText);
        DThemeDark.set("DMenuItemExpandable", DThemeDarkMenuItemExpandable);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkMenuBar = /** @class */ (function (_super) {
        __extends(DThemeDarkMenuBar, _super);
        function DThemeDarkMenuBar() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkMenuBar.prototype.getBackgroundColor = function () {
            return DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD;
        };
        DThemeDarkMenuBar.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeDarkMenuBar.prototype.getHeight = function () {
            return 30;
        };
        DThemeDarkMenuBar.prototype.getMargin = function () {
            return 0;
        };
        DThemeDarkMenuBar.prototype.getPaddingLeft = function () {
            return 5;
        };
        DThemeDarkMenuBar.prototype.getPaddingRight = function () {
            return 5;
        };
        DThemeDarkMenuBar.prototype.getInteractive = function () {
            return DBaseInteractive.BOTH;
        };
        return DThemeDarkMenuBar;
    }(DThemeDarkLayoutHorizontal));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkMenuBarItem = /** @class */ (function (_super) {
        __extends(DThemeDarkMenuBarItem, _super);
        function DThemeDarkMenuBarItem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkMenuBarItem.prototype.getBackgroundColor = function (state) {
            if (state.inDisabled) {
                return null;
            }
            else if (state.isActive) {
                return DThemeDarkConstants.HIGHLIGHT_COLOR;
            }
            else if (state.isFocused || state.isHovered) {
                return DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR;
            }
            else {
                return null;
            }
        };
        DThemeDarkMenuBarItem.prototype.getBackgroundAlpha = function (state) {
            return DThemeDarkConstants.WEAK_HIGHLIGHT_ALPHA;
        };
        DThemeDarkMenuBarItem.prototype.getBorderColor = function () {
            return null;
        };
        DThemeDarkMenuBarItem.prototype.getWidth = function () {
            return "auto";
        };
        DThemeDarkMenuBarItem.prototype.getHeight = function () {
            return "100%";
        };
        DThemeDarkMenuBarItem.prototype.getPaddingLeft = function () {
            return 10;
        };
        DThemeDarkMenuBarItem.prototype.getPaddingRight = function () {
            return 10;
        };
        DThemeDarkMenuBarItem.prototype.getCornerMask = function () {
            return DCornerMask.ALL;
        };
        DThemeDarkMenuBarItem.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.LEFT;
        };
        DThemeDarkMenuBarItem.prototype.getTextStyleClipping = function () {
            return false;
        };
        return DThemeDarkMenuBarItem;
    }(DThemeDarkButton));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkMenuBar = function () {
        DThemeDark.set("DMenuBarItem", DThemeDarkMenuBarItem);
        DThemeDark.set("DMenuBar", DThemeDarkMenuBar);
        loadThemeDarkMenu();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkMenuSided = /** @class */ (function (_super) {
        __extends(DThemeDarkMenuSided, _super);
        function DThemeDarkMenuSided() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkMenuSided.prototype.getBackgroundColor = function (state) {
            return DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD;
        };
        DThemeDarkMenuSided.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeDarkMenuSided.prototype.getInteractive = function () {
            return DBaseInteractive.BOTH;
        };
        return DThemeDarkMenuSided;
    }(DThemeDarkPane));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkMenuSidedContent = /** @class */ (function (_super) {
        __extends(DThemeDarkMenuSidedContent, _super);
        function DThemeDarkMenuSidedContent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkMenuSidedContent.prototype.getWidth = function () {
            return "100%";
        };
        DThemeDarkMenuSidedContent.prototype.getHeight = function () {
            return "auto";
        };
        DThemeDarkMenuSidedContent.prototype.getPaddingTop = function () {
            return 16;
        };
        DThemeDarkMenuSidedContent.prototype.getPaddingBottom = function () {
            return 16;
        };
        DThemeDarkMenuSidedContent.prototype.getMargin = function () {
            return 0;
        };
        return DThemeDarkMenuSidedContent;
    }(DThemeDarkLayoutVertical));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkMenuSidedItemCheck = /** @class */ (function (_super) {
        __extends(DThemeDarkMenuSidedItemCheck, _super);
        function DThemeDarkMenuSidedItemCheck() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeDarkMenuSidedItemCheck;
    }(DThemeDarkMenuItemCheck));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkMenuSidedItemExpandable = /** @class */ (function (_super) {
        __extends(DThemeDarkMenuSidedItemExpandable, _super);
        function DThemeDarkMenuSidedItemExpandable() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeDarkMenuSidedItemExpandable;
    }(DThemeDarkMenuItemExpandable));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkMenuSidedItemExpandableItemCheck = /** @class */ (function (_super) {
        __extends(DThemeDarkMenuSidedItemExpandableItemCheck, _super);
        function DThemeDarkMenuSidedItemExpandableItemCheck() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeDarkMenuSidedItemExpandableItemCheck;
    }(DThemeDarkMenuItemExpandableItemCheck));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkMenuSidedItemExpandableItemLink = /** @class */ (function (_super) {
        __extends(DThemeDarkMenuSidedItemExpandableItemLink, _super);
        function DThemeDarkMenuSidedItemExpandableItemLink() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeDarkMenuSidedItemExpandableItemLink;
    }(DThemeDarkMenuItemExpandableItemLink));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkMenuSidedItemExpandableItemMenu = /** @class */ (function (_super) {
        __extends(DThemeDarkMenuSidedItemExpandableItemMenu, _super);
        function DThemeDarkMenuSidedItemExpandableItemMenu() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeDarkMenuSidedItemExpandableItemMenu;
    }(DThemeDarkMenuItemExpandableItemMenu));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkMenuSidedItemExpandableItemSeparator = /** @class */ (function (_super) {
        __extends(DThemeDarkMenuSidedItemExpandableItemSeparator, _super);
        function DThemeDarkMenuSidedItemExpandableItemSeparator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeDarkMenuSidedItemExpandableItemSeparator;
    }(DThemeDarkMenuItemExpandableItemSeparator));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkMenuSidedItemExpandableItemSpace = /** @class */ (function (_super) {
        __extends(DThemeDarkMenuSidedItemExpandableItemSpace, _super);
        function DThemeDarkMenuSidedItemExpandableItemSpace() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeDarkMenuSidedItemExpandableItemSpace;
    }(DThemeDarkMenuItemExpandableItemSpace));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkMenuSidedItemExpandableItemText = /** @class */ (function (_super) {
        __extends(DThemeDarkMenuSidedItemExpandableItemText, _super);
        function DThemeDarkMenuSidedItemExpandableItemText() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeDarkMenuSidedItemExpandableItemText;
    }(DThemeDarkMenuItemExpandableItemText));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkMenuSidedItemLink = /** @class */ (function (_super) {
        __extends(DThemeDarkMenuSidedItemLink, _super);
        function DThemeDarkMenuSidedItemLink() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeDarkMenuSidedItemLink;
    }(DThemeDarkMenuItemLink));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkMenuSidedItemMenu = /** @class */ (function (_super) {
        __extends(DThemeDarkMenuSidedItemMenu, _super);
        function DThemeDarkMenuSidedItemMenu() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeDarkMenuSidedItemMenu;
    }(DThemeDarkMenuItemMenu));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkMenuSidedItemSeparator = /** @class */ (function (_super) {
        __extends(DThemeDarkMenuSidedItemSeparator, _super);
        function DThemeDarkMenuSidedItemSeparator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeDarkMenuSidedItemSeparator;
    }(DThemeDarkMenuItemSeparator));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkMenuSidedItemSpace = /** @class */ (function (_super) {
        __extends(DThemeDarkMenuSidedItemSpace, _super);
        function DThemeDarkMenuSidedItemSpace() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeDarkMenuSidedItemSpace;
    }(DThemeDarkMenuItemSpace));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkMenuSidedItemText = /** @class */ (function (_super) {
        __extends(DThemeDarkMenuSidedItemText, _super);
        function DThemeDarkMenuSidedItemText() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeDarkMenuSidedItemText;
    }(DThemeDarkMenuItemText));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkMenuSided = function () {
        DThemeDark.set("DMenuSided", DThemeDarkMenuSided);
        DThemeDark.set("DMenuSidedContent", DThemeDarkMenuSidedContent);
        DThemeDark.set("DMenuSidedItemCheck", DThemeDarkMenuSidedItemCheck);
        DThemeDark.set("DMenuSidedItemLink", DThemeDarkMenuSidedItemLink);
        DThemeDark.set("DMenuSidedItemMenu", DThemeDarkMenuSidedItemMenu);
        DThemeDark.set("DMenuSidedItemSeparator", DThemeDarkMenuSidedItemSeparator);
        DThemeDark.set("DMenuSidedItemSpace", DThemeDarkMenuSidedItemSpace);
        DThemeDark.set("DMenuSidedItemText", DThemeDarkMenuSidedItemText);
        DThemeDark.set("DMenuSidedItemExpandable", DThemeDarkMenuSidedItemExpandable);
        DThemeDark.set("DMenuSidedItemExpandableItemCheck", DThemeDarkMenuSidedItemExpandableItemCheck);
        DThemeDark.set("DMenuSidedItemExpandableItemLink", DThemeDarkMenuSidedItemExpandableItemLink);
        DThemeDark.set("DMenuSidedItemExpandableItemMenu", DThemeDarkMenuSidedItemExpandableItemMenu);
        DThemeDark.set("DMenuSidedItemExpandableItemSeparator", DThemeDarkMenuSidedItemExpandableItemSeparator);
        DThemeDark.set("DMenuSidedItemExpandableItemSpace", DThemeDarkMenuSidedItemExpandableItemSpace);
        DThemeDark.set("DMenuSidedItemExpandableItemText", DThemeDarkMenuSidedItemExpandableItemText);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkNote = /** @class */ (function (_super) {
        __extends(DThemeDarkNote, _super);
        function DThemeDarkNote() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkNote.prototype.getWidth = function () {
            return "100%";
        };
        DThemeDarkNote.prototype.getHeight = function () {
            return "100%";
        };
        DThemeDarkNote.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.CENTER;
        };
        DThemeDarkNote.prototype.getInteractive = function () {
            return DBaseInteractive.NONE;
        };
        return DThemeDarkNote;
    }(DThemeDarkText));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkNote = function () {
        DThemeDark.set("DNote", DThemeDarkNote);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkPagination = /** @class */ (function (_super) {
        __extends(DThemeDarkPagination, _super);
        function DThemeDarkPagination() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkPagination.prototype.getWidth = function () {
            return "auto";
        };
        DThemeDarkPagination.prototype.getButtonWidth = function () {
            return 30;
        };
        return DThemeDarkPagination;
    }(DThemeDarkLayoutHorizontal));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkPaginationDotsButton = /** @class */ (function (_super) {
        __extends(DThemeDarkPaginationDotsButton, _super);
        function DThemeDarkPaginationDotsButton() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkPaginationDotsButton.prototype.getBackgroundColor = function (state) {
            return null;
        };
        DThemeDarkPaginationDotsButton.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeDarkPaginationDotsButton.prototype.newTextValue = function () {
            return "...";
        };
        return DThemeDarkPaginationDotsButton;
    }(DThemeDarkButtonAmbient));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkPaginationDynamicButtons = /** @class */ (function (_super) {
        __extends(DThemeDarkPaginationDynamicButtons, _super);
        function DThemeDarkPaginationDynamicButtons() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkPaginationDynamicButtons.prototype.getWidth = function () {
            return "auto";
        };
        return DThemeDarkPaginationDynamicButtons;
    }(DThemeDarkLayoutHorizontal));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    DThemeDarkAtlas.add("pagination_navigation_button_previous", 21, 21, "<g>" +
        "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"13 15 7 10 13 5\"></polyline>" +
        "</g>");
    DThemeDarkAtlas.add("pagination_navigation_button_next", 21, 21, "<g>" +
        "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"7 15 13 10 7 5\"></polyline>" +
        "</g>");
    DThemeDarkAtlas.add("pagination_navigation_button_go_first", 21, 21, "<g>" +
        "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"11 15 5 10 11 5\"></polyline>" +
        "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"15 15 9 10 15 5\"></polyline>" +
        "</g>");
    DThemeDarkAtlas.add("pagination_navigation_button_go_last", 21, 21, "<g>" +
        "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"9 15 15 10 9 5\"></polyline>" +
        "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"5 15 11 10 5 5\"></polyline>" +
        "</g>");
    var DThemeDarkPaginationNavigationButton = /** @class */ (function (_super) {
        __extends(DThemeDarkPaginationNavigationButton, _super);
        function DThemeDarkPaginationNavigationButton() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeDarkPaginationNavigationButton;
    }(DThemeDarkButtonAmbient));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkPagination = function () {
        DThemeDark.set("DPagination", DThemeDarkPagination);
        DThemeDark.set("DPaginationNavigationButton", DThemeDarkPaginationNavigationButton);
        DThemeDark.set("DPaginationDynamicButtons", DThemeDarkPaginationDynamicButtons);
        DThemeDark.set("DPaginationDotsButton", DThemeDarkPaginationDotsButton);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkContent = /** @class */ (function (_super) {
        __extends(DThemeDarkContent, _super);
        function DThemeDarkContent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkContent.prototype.getWidth = function () {
            return "100%";
        };
        DThemeDarkContent.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeDarkContent.prototype.getInteractive = function () {
            return DBaseInteractive.BOTH;
        };
        return DThemeDarkContent;
    }(DThemeDarkBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkScrollBar = /** @class */ (function (_super) {
        __extends(DThemeDarkScrollBar, _super);
        function DThemeDarkScrollBar() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkScrollBar.prototype.getBackgroundColor = function (state) {
            return 0xffffff;
        };
        DThemeDarkScrollBar.prototype.getBackgroundAlpha = function (state) {
            return 0;
        };
        DThemeDarkScrollBar.prototype.getWidth = function () {
            return 13;
        };
        DThemeDarkScrollBar.prototype.getHeight = function () {
            return 13;
        };
        DThemeDarkScrollBar.prototype.getInteractive = function () {
            return DBaseInteractive.BOTH;
        };
        return DThemeDarkScrollBar;
    }(DThemeDarkBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkScrollBarThumb = /** @class */ (function (_super) {
        __extends(DThemeDarkScrollBarThumb, _super);
        function DThemeDarkScrollBarThumb() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.COLOR = UtilRgb.brighten(DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR, 0.5);
            return _this;
        }
        DThemeDarkScrollBarThumb.prototype.getBackgroundColor = function (state) {
            return null;
        };
        DThemeDarkScrollBarThumb.prototype.getBackgroundAlpha = function (state) {
            return 1;
        };
        DThemeDarkScrollBarThumb.prototype.getBorderColor = function (state) {
            if (state.inDisabled) {
                return this.COLOR;
            }
            else {
                return DThemeDarkConstants.HIGHLIGHT_COLOR;
            }
        };
        DThemeDarkScrollBarThumb.prototype.getBorderAlpha = function (state) {
            if (!state.inDisabled && (state.isHovered || state.isDragging)) {
                return 1.0;
            }
            else {
                return 0.4;
            }
        };
        DThemeDarkScrollBarThumb.prototype.getBorderWidth = function (state) {
            return 2;
        };
        DThemeDarkScrollBarThumb.prototype.getBorderAlign = function (state) {
            return 0;
        };
        DThemeDarkScrollBarThumb.prototype.getWidth = function () {
            return 13;
        };
        DThemeDarkScrollBarThumb.prototype.getHeight = function () {
            return 13;
        };
        DThemeDarkScrollBarThumb.prototype.getThumbMinimumLength = function () {
            return 16;
        };
        return DThemeDarkScrollBarThumb;
    }(DThemeDarkBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkScrollBar = function () {
        DThemeDark.set("DScrollBar", DThemeDarkScrollBar);
        DThemeDark.set("DScrollBarThumb", DThemeDarkScrollBarThumb);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkPane = function () {
        DThemeDark.set("DPane", DThemeDarkPane);
        DThemeDark.set("DContent", DThemeDarkContent);
        loadThemeDarkScrollBar();
    };

    const isString = wcardinal.ui.isString;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    DThemeDarkAtlas.add("dropdown_mark", 20, 14, "<g>" +
        "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"16 5 10 11 4 5\"></polyline>" +
        "</g>");
    var DThemeDarkDropdownBase = /** @class */ (function (_super) {
        __extends(DThemeDarkDropdownBase, _super);
        function DThemeDarkDropdownBase() {
            return _super.call(this, DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD) || this;
        }
        DThemeDarkDropdownBase.prototype.getSecondaryImageAlignHorizontal = function () {
            return DAlignHorizontal.RIGHT;
        };
        DThemeDarkDropdownBase.prototype.getSecondaryImageAlignWith = function () {
            return DAlignWith.PADDING;
        };
        DThemeDarkDropdownBase.prototype.getSecondaryImageMarginHorizontal = function () {
            return -20;
        };
        DThemeDarkDropdownBase.prototype.getPaddingLeft = function () {
            return 25;
        };
        DThemeDarkDropdownBase.prototype.getPaddingRight = function () {
            return 25;
        };
        DThemeDarkDropdownBase.prototype.getSecondaryImageSource = function (state) {
            return DThemeDarkAtlas.mappings.dropdown_mark;
        };
        return DThemeDarkDropdownBase;
    }(DThemeDarkButtonBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var formatter$5 = function (value) {
        if (value) {
            var text = value.text;
            if (isString(text)) {
                return text;
            }
            else if (text != null) {
                var computed = text(value.state);
                if (computed != null) {
                    return computed;
                }
            }
        }
        return "";
    };
    var DThemeDarkSelect = /** @class */ (function (_super) {
        __extends(DThemeDarkSelect, _super);
        function DThemeDarkSelect() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkSelect.prototype.getTextFormatter = function () {
            return formatter$5;
        };
        DThemeDarkSelect.prototype.newTextValue = function () {
            return null;
        };
        return DThemeDarkSelect;
    }(DThemeDarkDropdownBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var formatter$6 = function (values) {
        if (values) {
            var result = "";
            var delimiter = "";
            for (var i = 0, imax = values.length; i < imax; ++i) {
                var value = values[i];
                var text = value.text;
                if (isString(text)) {
                    result += delimiter + text;
                    delimiter = ", ";
                }
                else if (text != null) {
                    var computed = text(value.state);
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
    var DThemeDarkSelectMultiple = /** @class */ (function (_super) {
        __extends(DThemeDarkSelectMultiple, _super);
        function DThemeDarkSelectMultiple() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkSelectMultiple.prototype.getTextFormatter = function () {
            return formatter$6;
        };
        DThemeDarkSelectMultiple.prototype.newTextValue = function () {
            return [];
        };
        return DThemeDarkSelectMultiple;
    }(DThemeDarkDropdownBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkDropdown = /** @class */ (function (_super) {
        __extends(DThemeDarkDropdown, _super);
        function DThemeDarkDropdown() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkDropdown.prototype.newTextValue = function () {
            return "";
        };
        return DThemeDarkDropdown;
    }(DThemeDarkDropdownBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkDropdown = function () {
        DThemeDark.set("DDropdown", DThemeDarkDropdown);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkSelect = function () {
        DThemeDark.set("DSelectMultiple", DThemeDarkSelectMultiple);
        DThemeDark.set("DSelect", DThemeDarkSelect);
        loadThemeDarkDropdown();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkSlider = /** @class */ (function (_super) {
        __extends(DThemeDarkSlider, _super);
        function DThemeDarkSlider() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkSlider.prototype.getInteractive = function () {
            return DBaseInteractive.CHILDREN;
        };
        return DThemeDarkSlider;
    }(DThemeDarkBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkSliderHorizontal = /** @class */ (function (_super) {
        __extends(DThemeDarkSliderHorizontal, _super);
        function DThemeDarkSliderHorizontal() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkSliderHorizontal.prototype.getHeight = function () {
            return 33;
        };
        DThemeDarkSliderHorizontal.prototype.getWidth = function () {
            return 300;
        };
        DThemeDarkSliderHorizontal.prototype.getX = function () {
            return "CENTER";
        };
        return DThemeDarkSliderHorizontal;
    }(DThemeDarkSlider));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkSliderLabel = /** @class */ (function (_super) {
        __extends(DThemeDarkSliderLabel, _super);
        function DThemeDarkSliderLabel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkSliderLabel.prototype.getHeight = function () {
            return 15;
        };
        DThemeDarkSliderLabel.prototype.getWidth = function () {
            return 30;
        };
        DThemeDarkSliderLabel.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.CENTER;
        };
        DThemeDarkSliderLabel.prototype.getTextAlignVertical = function () {
            return DAlignVertical.MIDDLE;
        };
        return DThemeDarkSliderLabel;
    }(DThemeDarkTextBase));

    var DThemeDarkSliders = /** @class */ (function () {
        function DThemeDarkSliders() {
        }
        DThemeDarkSliders.getBackgroundColor = function (state, isActive) {
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
        DThemeDarkSliders.BACKGROUND_COLOR_ACTIVE = DThemeDarkConstants.HIGHLIGHT_COLOR;
        DThemeDarkSliders.BACKGROUND_COLOR_ACTIVE_HOVERED = UtilRgb.darken(DThemeDarkSliders.BACKGROUND_COLOR_ACTIVE, 0.1);
        DThemeDarkSliders.BACKGROUND_COLOR_ACTIVE_PRESSED = UtilRgb.darken(DThemeDarkSliders.BACKGROUND_COLOR_ACTIVE, 0.2);
        DThemeDarkSliders.BACKGROUND_COLOR = DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR;
        DThemeDarkSliders.BACKGROUND_COLOR_HOVERED = UtilRgb.darken(DThemeDarkSliders.BACKGROUND_COLOR, 0.1);
        DThemeDarkSliders.BACKGROUND_COLOR_PRESSED = UtilRgb.darken(DThemeDarkSliders.BACKGROUND_COLOR, 0.2);
        DThemeDarkSliders.BACKGROUND_COLOR_DISABLED = UtilRgb.blend(DThemeDarkSliders.BACKGROUND_COLOR, DThemeDarkConstants.BACKGROUND_COLOR, 0.5);
        return DThemeDarkSliders;
    }());

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    DThemeDarkAtlas.add("slider_thumb", 16, 16, "<circle cx=\"8\" cy=\"8\" r=\"7.5\" stroke=\"none\" fill=\"#ffffff\" />");
    var DThemeDarkSliderThumb = /** @class */ (function (_super) {
        __extends(DThemeDarkSliderThumb, _super);
        function DThemeDarkSliderThumb() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkSliderThumb.prototype.getX = function () {
            return "CENTER";
        };
        DThemeDarkSliderThumb.prototype.getY = function () {
            return "CENTER";
        };
        DThemeDarkSliderThumb.prototype.getWidth = function () {
            return 16;
        };
        DThemeDarkSliderThumb.prototype.getHeight = function () {
            return 16;
        };
        DThemeDarkSliderThumb.prototype.getBackgroundColor = function (state) {
            return null;
        };
        DThemeDarkSliderThumb.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeDarkSliderThumb.prototype.getImageSource = function (state) {
            return DThemeDarkAtlas.mappings.slider_thumb;
        };
        DThemeDarkSliderThumb.prototype.getImageTintColor = function (state) {
            return DThemeDarkSliders.getBackgroundColor(state, true);
        };
        DThemeDarkSliderThumb.prototype.getImageTintAlpha = function (state) {
            return 1;
        };
        DThemeDarkSliderThumb.prototype.getImageAlignHorizontal = function () {
            return DAlignHorizontal.CENTER;
        };
        return DThemeDarkSliderThumb;
    }(DThemeDarkButton));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkSliderTrack = /** @class */ (function (_super) {
        __extends(DThemeDarkSliderTrack, _super);
        function DThemeDarkSliderTrack() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkSliderTrack.prototype.getBackgroundColor = function (state) {
            return DThemeDarkSliders.getBackgroundColor(state);
        };
        DThemeDarkSliderTrack.prototype.getBorderColor = function (state) {
            return null;
        };
        return DThemeDarkSliderTrack;
    }(DThemeDarkButton));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkSliderTrackHorizontal = /** @class */ (function (_super) {
        __extends(DThemeDarkSliderTrackHorizontal, _super);
        function DThemeDarkSliderTrackHorizontal() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkSliderTrackHorizontal.prototype.getX = function () {
            return 0;
        };
        DThemeDarkSliderTrackHorizontal.prototype.getY = function () {
            return "CENTER";
        };
        DThemeDarkSliderTrackHorizontal.prototype.getWidth = function () {
            return "100%";
        };
        DThemeDarkSliderTrackHorizontal.prototype.getHeight = function () {
            return 5;
        };
        return DThemeDarkSliderTrackHorizontal;
    }(DThemeDarkSliderTrack));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkSliderTrackVertical = /** @class */ (function (_super) {
        __extends(DThemeDarkSliderTrackVertical, _super);
        function DThemeDarkSliderTrackVertical() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkSliderTrackVertical.prototype.getX = function () {
            return "CENTER";
        };
        DThemeDarkSliderTrackVertical.prototype.getY = function () {
            return 0;
        };
        DThemeDarkSliderTrackVertical.prototype.getWidth = function () {
            return 5;
        };
        DThemeDarkSliderTrackVertical.prototype.getHeight = function () {
            return "100%";
        };
        return DThemeDarkSliderTrackVertical;
    }(DThemeDarkSliderTrack));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkSliderValue = /** @class */ (function (_super) {
        __extends(DThemeDarkSliderValue, _super);
        function DThemeDarkSliderValue() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkSliderValue.prototype.getX = function () {
            return "CENTER";
        };
        DThemeDarkSliderValue.prototype.getY = function () {
            return "CENTER";
        };
        DThemeDarkSliderValue.prototype.getWidth = function () {
            return "AUTO";
        };
        DThemeDarkSliderValue.prototype.getHeight = function () {
            return 20;
        };
        DThemeDarkSliderValue.prototype.getBackgroundColor = function (state) {
            if (state.inDisabled) {
                return 0x646464;
            }
            return DThemeDarkConstants.HIGHLIGHT_COLOR;
        };
        DThemeDarkSliderValue.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeDarkSliderValue.prototype.getColor = function (state) {
            return DThemeDarkConstants.ACTIVE_COLOR;
        };
        DThemeDarkSliderValue.prototype.getAlpha = function (state) {
            if (state.inDisabled) {
                return 0.38;
            }
            return 1;
        };
        DThemeDarkSliderValue.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.CENTER;
        };
        DThemeDarkSliderValue.prototype.getTextAlignVertical = function () {
            return DAlignVertical.TOP;
        };
        DThemeDarkSliderValue.prototype.getPrecision = function () {
            return 0;
        };
        return DThemeDarkSliderValue;
    }(DThemeDarkTextBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkSliderVertical = /** @class */ (function (_super) {
        __extends(DThemeDarkSliderVertical, _super);
        function DThemeDarkSliderVertical() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkSliderVertical.prototype.getHeight = function () {
            return 322;
        };
        DThemeDarkSliderVertical.prototype.getWidth = function () {
            return 35;
        };
        return DThemeDarkSliderVertical;
    }(DThemeDarkSlider));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkSlider = function () {
        DThemeDark.set("DSlider", DThemeDarkSlider);
        DThemeDark.set("DSliderValue", DThemeDarkSliderValue);
        DThemeDark.set("DSliderLabel", DThemeDarkSliderLabel);
        DThemeDark.set("DSliderThumb", DThemeDarkSliderThumb);
        DThemeDark.set("DSliderVertical", DThemeDarkSliderVertical);
        DThemeDark.set("DSliderHorizontal", DThemeDarkSliderHorizontal);
        DThemeDark.set("DSliderTrack", DThemeDarkSliderTrack);
        DThemeDark.set("DSliderTrackVertical", DThemeDarkSliderTrackVertical);
        DThemeDark.set("DSliderTrackHorizontal", DThemeDarkSliderTrackHorizontal);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkTable = /** @class */ (function (_super) {
        __extends(DThemeDarkTable, _super);
        function DThemeDarkTable() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkTable.prototype.getBackgroundColor = function () {
            return DThemeDarkConstants.BACKGROUND_COLOR;
        };
        DThemeDarkTable.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeDarkTable.prototype.getMargin = function () {
            return 0;
        };
        DThemeDarkTable.prototype.getInteractive = function () {
            return DBaseInteractive.BOTH;
        };
        return DThemeDarkTable;
    }(DThemeDarkPane));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkTableBody = /** @class */ (function (_super) {
        __extends(DThemeDarkTableBody, _super);
        function DThemeDarkTableBody() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkTableBody.prototype.getWidth = function () {
            return "100%";
        };
        DThemeDarkTableBody.prototype.getCornerMask = function () {
            return DCornerMask.TOP;
        };
        DThemeDarkTableBody.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeDarkTableBody.prototype.getRowHeight = function () {
            return 30;
        };
        DThemeDarkTableBody.prototype.getInteractive = function () {
            return DBaseInteractive.BOTH;
        };
        return DThemeDarkTableBody;
    }(DThemeDarkBase));

    const DTableState = wcardinal.ui.DTableState;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkTableBodyCells = /** @class */ (function () {
        function DThemeDarkTableBodyCells() {
        }
        DThemeDarkTableBodyCells.getBackgroundColor = function (state) {
            if (state.inDisabled) {
                if (state.is(DTableState.FROZEN)) {
                    return state.onAlternated ?
                        this.BACKGROUND_COLOR_EVEN : this.BACKGROUND_COLOR_ODD;
                }
                else {
                    return null;
                }
            }
            else if (state.isInvalid) {
                return DThemeDarkConstants.INVALID_BLENDED_ON_BOARD;
            }
            else if (state.underActive) {
                return DThemeDarkConstants.HIGHLIGHT_BLENDED_ON_BOARD;
            }
            else if (state.isFocused && (state.onHovered || state.isHovered)) {
                return this.WEAK_STRONG_HIGHLIGHT_COLOR;
            }
            else if (state.isFocused || (state.onHovered || state.isHovered)) {
                return DThemeDarkConstants.WEAK_HIGHLIGHT_BLENDED_ON_BOARD;
            }
            else {
                if (state.is(DTableState.FROZEN)) {
                    return state.onAlternated ?
                        this.BACKGROUND_COLOR_EVEN : this.BACKGROUND_COLOR_ODD;
                }
                else {
                    return null;
                }
            }
        };
        DThemeDarkTableBodyCells.getBackgroundAlpha = function (state) {
            return 1;
        };
        DThemeDarkTableBodyCells.getBorderColor = function (state) {
            return this.BORDER_COLOR;
        };
        DThemeDarkTableBodyCells.getBorderAlign = function (state) {
            return 0;
        };
        DThemeDarkTableBodyCells.getBorderMask = function (state) {
            if (state.is(DTableState.END)) {
                return DBorderMask.ALL;
            }
            else {
                return DBorderMask.NOT_RIGHT;
            }
        };
        DThemeDarkTableBodyCells.getColor = function (state) {
            return DThemeDarkConstants.COLOR;
        };
        DThemeDarkTableBodyCells.getAlpha = function (state) {
            if (state.inEnabled) {
                return 1.0;
            }
            return 0;
        };
        DThemeDarkTableBodyCells.getImageTintColor = function (state, isActive) {
            if (state.inDisabled || state.inReadOnly || !(state.isActive || isActive)) {
                if (state.isFocused) {
                    return this.IMAGE_TINT_COLOR_FOCUSED;
                }
                return 0x646464;
            }
            else {
                return DThemeDarkConstants.HIGHLIGHT_COLOR;
            }
        };
        DThemeDarkTableBodyCells.getOutlineAlign = function (state) {
            return -2;
        };
        DThemeDarkTableBodyCells.getHeight = function () {
            return "padding";
        };
        DThemeDarkTableBodyCells.getCornerMask = function () {
            return DCornerMask.ALL;
        };
        DThemeDarkTableBodyCells.IMAGE_TINT_COLOR_FOCUSED = UtilRgb.brighten(DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR, 0.1);
        DThemeDarkTableBodyCells.BACKGROUND_COLOR_EVEN = DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD;
        DThemeDarkTableBodyCells.BACKGROUND_COLOR_ODD = UtilRgb.brighten(DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD, 0.02);
        DThemeDarkTableBodyCells.WEAK_STRONG_HIGHLIGHT_COLOR = UtilRgb.brighten(DThemeDarkConstants.WEAK_HIGHLIGHT_BLENDED_ON_BOARD, 0.05);
        DThemeDarkTableBodyCells.BORDER_COLOR = DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD;
        return DThemeDarkTableBodyCells;
    }());

    var DThemeDarkTableBodyCellActions = /** @class */ (function () {
        function DThemeDarkTableBodyCellActions() {
        }
        DThemeDarkTableBodyCellActions.init = function () {
            // Material Design icons by Google.
            // Apache license version 2.0.
            DThemeDarkAtlas.add("action_mark", 21, 21, "<g transform=\"scale(0.875,0.875)\">" +
                "<path d=\"M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83" +
                " 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm" +
                "-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z\" fill=\"#fff\"/>" +
                "</g>");
        };
        DThemeDarkTableBodyCellActions.getImageSource = function (state) {
            return DThemeDarkAtlas.mappings.action_mark;
        };
        DThemeDarkTableBodyCellActions.getImageTintColor = function (state) {
            return DThemeDarkTableBodyCells.getImageTintColor(state, true);
        };
        return DThemeDarkTableBodyCellActions;
    }());

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkTableBodyCellSelectDialog = /** @class */ (function (_super) {
        __extends(DThemeDarkTableBodyCellSelectDialog, _super);
        function DThemeDarkTableBodyCellSelectDialog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkTableBodyCellSelectDialog.prototype.getBackgroundColor = function (state) {
            return DThemeDarkTableBodyCells.getBackgroundColor(state);
        };
        DThemeDarkTableBodyCellSelectDialog.prototype.getBackgroundAlpha = function (state) {
            return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
        };
        DThemeDarkTableBodyCellSelectDialog.prototype.getBorderColor = function (state) {
            return DThemeDarkTableBodyCells.getBorderColor(state);
        };
        DThemeDarkTableBodyCellSelectDialog.prototype.getBorderAlign = function (state) {
            return DThemeDarkTableBodyCells.getBorderAlign(state);
        };
        DThemeDarkTableBodyCellSelectDialog.prototype.getBorderMask = function (state) {
            return DThemeDarkTableBodyCells.getBorderMask(state);
        };
        DThemeDarkTableBodyCellSelectDialog.prototype.getColor = function (state) {
            return DThemeDarkTableBodyCells.getColor(state);
        };
        DThemeDarkTableBodyCellSelectDialog.prototype.getAlpha = function (state) {
            return DThemeDarkTableBodyCells.getAlpha(state);
        };
        DThemeDarkTableBodyCellSelectDialog.prototype.getHeight = function () {
            return DThemeDarkTableBodyCells.getHeight();
        };
        DThemeDarkTableBodyCellSelectDialog.prototype.getCornerMask = function () {
            return DThemeDarkTableBodyCells.getCornerMask();
        };
        DThemeDarkTableBodyCellSelectDialog.prototype.isSyncEnabled = function () {
            return true;
        };
        DThemeDarkTableBodyCellSelectDialog.prototype.newTextValue = function () {
            return null;
        };
        return DThemeDarkTableBodyCellSelectDialog;
    }(DThemeDarkButton));

    /*
     * Copyright (C) 2020 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    DThemeDarkTableBodyCellActions.init();
    var DThemeDarkTableBodyCellActionDialog = /** @class */ (function (_super) {
        __extends(DThemeDarkTableBodyCellActionDialog, _super);
        function DThemeDarkTableBodyCellActionDialog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkTableBodyCellActionDialog.prototype.getImageTintColor = function (state) {
            return DThemeDarkTableBodyCellActions.getImageTintColor(state);
        };
        DThemeDarkTableBodyCellActionDialog.prototype.getImageSource = function (state) {
            return DThemeDarkTableBodyCellActions.getImageSource(state);
        };
        DThemeDarkTableBodyCellActionDialog.prototype.isSyncEnabled = function () {
            return false;
        };
        return DThemeDarkTableBodyCellActionDialog;
    }(DThemeDarkTableBodyCellSelectDialog));

    /*
     * Copyright (C) 2020 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    DThemeDarkTableBodyCellActions.init();
    var DThemeDarkTableBodyCellActionMenu = /** @class */ (function (_super) {
        __extends(DThemeDarkTableBodyCellActionMenu, _super);
        function DThemeDarkTableBodyCellActionMenu() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkTableBodyCellActionMenu.prototype.getBackgroundColor = function (state) {
            return DThemeDarkTableBodyCells.getBackgroundColor(state);
        };
        DThemeDarkTableBodyCellActionMenu.prototype.getBackgroundAlpha = function (state) {
            return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
        };
        DThemeDarkTableBodyCellActionMenu.prototype.getBorderColor = function (state) {
            return DThemeDarkTableBodyCells.getBorderColor(state);
        };
        DThemeDarkTableBodyCellActionMenu.prototype.getBorderAlign = function (state) {
            return DThemeDarkTableBodyCells.getBorderAlign(state);
        };
        DThemeDarkTableBodyCellActionMenu.prototype.getBorderMask = function (state) {
            return DThemeDarkTableBodyCells.getBorderMask(state);
        };
        DThemeDarkTableBodyCellActionMenu.prototype.getColor = function (state) {
            return DThemeDarkTableBodyCells.getColor(state);
        };
        DThemeDarkTableBodyCellActionMenu.prototype.getAlpha = function (state) {
            return DThemeDarkTableBodyCells.getAlpha(state);
        };
        DThemeDarkTableBodyCellActionMenu.prototype.getHeight = function () {
            return DThemeDarkTableBodyCells.getHeight();
        };
        DThemeDarkTableBodyCellActionMenu.prototype.getCornerMask = function () {
            return DThemeDarkTableBodyCells.getCornerMask();
        };
        DThemeDarkTableBodyCellActionMenu.prototype.getSecondaryImageSource = function (state) {
            return null;
        };
        DThemeDarkTableBodyCellActionMenu.prototype.getPaddingLeft = function () {
            return 10;
        };
        DThemeDarkTableBodyCellActionMenu.prototype.getPaddingRight = function () {
            return 10;
        };
        DThemeDarkTableBodyCellActionMenu.prototype.getImageTintColor = function (state) {
            return DThemeDarkTableBodyCellActions.getImageTintColor(state);
        };
        DThemeDarkTableBodyCellActionMenu.prototype.getImageSource = function (state) {
            return DThemeDarkTableBodyCellActions.getImageSource(state);
        };
        return DThemeDarkTableBodyCellActionMenu;
    }(DThemeDarkDropdown));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkTableBodyCellSelectPromise = /** @class */ (function (_super) {
        __extends(DThemeDarkTableBodyCellSelectPromise, _super);
        function DThemeDarkTableBodyCellSelectPromise() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkTableBodyCellSelectPromise.prototype.getBackgroundColor = function (state) {
            return DThemeDarkTableBodyCells.getBackgroundColor(state);
        };
        DThemeDarkTableBodyCellSelectPromise.prototype.getBackgroundAlpha = function (state) {
            return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
        };
        DThemeDarkTableBodyCellSelectPromise.prototype.getBorderColor = function (state) {
            return DThemeDarkTableBodyCells.getBorderColor(state);
        };
        DThemeDarkTableBodyCellSelectPromise.prototype.getBorderAlign = function (state) {
            return DThemeDarkTableBodyCells.getBorderAlign(state);
        };
        DThemeDarkTableBodyCellSelectPromise.prototype.getBorderMask = function (state) {
            return DThemeDarkTableBodyCells.getBorderMask(state);
        };
        DThemeDarkTableBodyCellSelectPromise.prototype.getColor = function (state) {
            return DThemeDarkTableBodyCells.getColor(state);
        };
        DThemeDarkTableBodyCellSelectPromise.prototype.getAlpha = function (state) {
            return DThemeDarkTableBodyCells.getAlpha(state);
        };
        DThemeDarkTableBodyCellSelectPromise.prototype.getHeight = function () {
            return DThemeDarkTableBodyCells.getHeight();
        };
        DThemeDarkTableBodyCellSelectPromise.prototype.getCornerMask = function () {
            return DThemeDarkTableBodyCells.getCornerMask();
        };
        DThemeDarkTableBodyCellSelectPromise.prototype.isSyncEnabled = function () {
            return true;
        };
        DThemeDarkTableBodyCellSelectPromise.prototype.newTextValue = function () {
            return null;
        };
        return DThemeDarkTableBodyCellSelectPromise;
    }(DThemeDarkButton));

    /*
     * Copyright (C) 2020 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    DThemeDarkTableBodyCellActions.init();
    var DThemeDarkTableBodyCellActionPromise = /** @class */ (function (_super) {
        __extends(DThemeDarkTableBodyCellActionPromise, _super);
        function DThemeDarkTableBodyCellActionPromise() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkTableBodyCellActionPromise.prototype.getImageTintColor = function (state) {
            return DThemeDarkTableBodyCellActions.getImageTintColor(state);
        };
        DThemeDarkTableBodyCellActionPromise.prototype.getImageSource = function (state) {
            return DThemeDarkTableBodyCellActions.getImageSource(state);
        };
        DThemeDarkTableBodyCellActionPromise.prototype.isSyncEnabled = function () {
            return false;
        };
        return DThemeDarkTableBodyCellActionPromise;
    }(DThemeDarkTableBodyCellSelectPromise));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkTableBodyCellText = /** @class */ (function (_super) {
        __extends(DThemeDarkTableBodyCellText, _super);
        function DThemeDarkTableBodyCellText() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkTableBodyCellText.prototype.getBackgroundColor = function (state) {
            return DThemeDarkTableBodyCells.getBackgroundColor(state);
        };
        DThemeDarkTableBodyCellText.prototype.getBackgroundAlpha = function (state) {
            return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
        };
        DThemeDarkTableBodyCellText.prototype.getBorderColor = function (state) {
            return DThemeDarkTableBodyCells.getBorderColor(state);
        };
        DThemeDarkTableBodyCellText.prototype.getBorderAlign = function (state) {
            return DThemeDarkTableBodyCells.getBorderAlign(state);
        };
        DThemeDarkTableBodyCellText.prototype.getBorderMask = function (state) {
            return DThemeDarkTableBodyCells.getBorderMask(state);
        };
        DThemeDarkTableBodyCellText.prototype.getColor = function (state) {
            return DThemeDarkTableBodyCells.getColor(state);
        };
        DThemeDarkTableBodyCellText.prototype.getAlpha = function (state) {
            return DThemeDarkTableBodyCells.getAlpha(state);
        };
        DThemeDarkTableBodyCellText.prototype.getHeight = function () {
            return DThemeDarkTableBodyCells.getHeight();
        };
        DThemeDarkTableBodyCellText.prototype.getCornerMask = function () {
            return DThemeDarkTableBodyCells.getCornerMask();
        };
        DThemeDarkTableBodyCellText.prototype.getImageTintColor = function (state) {
            return DThemeDarkTableBodyCells.getImageTintColor(state);
        };
        DThemeDarkTableBodyCellText.prototype.getPaddingLeft = function () {
            return 10;
        };
        DThemeDarkTableBodyCellText.prototype.getPaddingRight = function () {
            return 10;
        };
        DThemeDarkTableBodyCellText.prototype.newTextValue = function () {
            return undefined;
        };
        return DThemeDarkTableBodyCellText;
    }(DThemeDarkImageBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkTableBodyCellButton = /** @class */ (function (_super) {
        __extends(DThemeDarkTableBodyCellButton, _super);
        function DThemeDarkTableBodyCellButton() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkTableBodyCellButton.prototype.getCursor = function (state) {
            if (!state.isActionable) {
                return "";
            }
            return "pointer";
        };
        return DThemeDarkTableBodyCellButton;
    }(DThemeDarkTableBodyCellText));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkTableBodyCellCheck = /** @class */ (function (_super) {
        __extends(DThemeDarkTableBodyCellCheck, _super);
        function DThemeDarkTableBodyCellCheck() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkTableBodyCellCheck.prototype.getBackgroundColor = function (state) {
            return DThemeDarkTableBodyCells.getBackgroundColor(state);
        };
        DThemeDarkTableBodyCellCheck.prototype.getBackgroundAlpha = function (state) {
            return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
        };
        DThemeDarkTableBodyCellCheck.prototype.getBorderColor = function (state) {
            return DThemeDarkTableBodyCells.getBorderColor(state);
        };
        DThemeDarkTableBodyCellCheck.prototype.getBorderAlign = function (state) {
            return DThemeDarkTableBodyCells.getBorderAlign(state);
        };
        DThemeDarkTableBodyCellCheck.prototype.getBorderMask = function (state) {
            return DThemeDarkTableBodyCells.getBorderMask(state);
        };
        DThemeDarkTableBodyCellCheck.prototype.getColor = function (state) {
            return DThemeDarkTableBodyCells.getColor(state);
        };
        DThemeDarkTableBodyCellCheck.prototype.getAlpha = function (state) {
            return DThemeDarkTableBodyCells.getAlpha(state);
        };
        DThemeDarkTableBodyCellCheck.prototype.getImageTintColor = function (state) {
            return DThemeDarkTableBodyCells.getImageTintColor(state);
        };
        DThemeDarkTableBodyCellCheck.prototype.getHeight = function () {
            return DThemeDarkTableBodyCells.getHeight();
        };
        DThemeDarkTableBodyCellCheck.prototype.getCornerMask = function () {
            return DThemeDarkTableBodyCells.getCornerMask();
        };
        return DThemeDarkTableBodyCellCheck;
    }(DThemeDarkButtonCheck));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkTableBodyCellColor = /** @class */ (function (_super) {
        __extends(DThemeDarkTableBodyCellColor, _super);
        function DThemeDarkTableBodyCellColor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkTableBodyCellColor.prototype.getBackgroundColor = function (state) {
            return DThemeDarkTableBodyCells.getBackgroundColor(state);
        };
        DThemeDarkTableBodyCellColor.prototype.getBackgroundAlpha = function (state) {
            return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
        };
        DThemeDarkTableBodyCellColor.prototype.getBorderColor = function (state) {
            return DThemeDarkTableBodyCells.getBorderColor(state);
        };
        DThemeDarkTableBodyCellColor.prototype.getBorderAlign = function (state) {
            return DThemeDarkTableBodyCells.getBorderAlign(state);
        };
        DThemeDarkTableBodyCellColor.prototype.getBorderMask = function (state) {
            return DThemeDarkTableBodyCells.getBorderMask(state);
        };
        DThemeDarkTableBodyCellColor.prototype.getColor = function (state) {
            return DThemeDarkTableBodyCells.getColor(state);
        };
        DThemeDarkTableBodyCellColor.prototype.getAlpha = function (state) {
            return DThemeDarkTableBodyCells.getAlpha(state);
        };
        DThemeDarkTableBodyCellColor.prototype.getHeight = function () {
            return DThemeDarkTableBodyCells.getHeight();
        };
        DThemeDarkTableBodyCellColor.prototype.getCornerMask = function () {
            return DThemeDarkTableBodyCells.getCornerMask();
        };
        return DThemeDarkTableBodyCellColor;
    }(DThemeDarkButtonColor));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var formatter$7 = function (value) {
        return DPickerDates.format(value);
    };
    var DThemeDarkTableBodyCellDate = /** @class */ (function (_super) {
        __extends(DThemeDarkTableBodyCellDate, _super);
        function DThemeDarkTableBodyCellDate() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkTableBodyCellDate.prototype.getBackgroundColor = function (state) {
            return DThemeDarkTableBodyCells.getBackgroundColor(state);
        };
        DThemeDarkTableBodyCellDate.prototype.getBackgroundAlpha = function (state) {
            return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
        };
        DThemeDarkTableBodyCellDate.prototype.getBorderColor = function (state) {
            return DThemeDarkTableBodyCells.getBorderColor(state);
        };
        DThemeDarkTableBodyCellDate.prototype.getBorderAlign = function (state) {
            return DThemeDarkTableBodyCells.getBorderAlign(state);
        };
        DThemeDarkTableBodyCellDate.prototype.getBorderMask = function (state) {
            return DThemeDarkTableBodyCells.getBorderMask(state);
        };
        DThemeDarkTableBodyCellDate.prototype.getColor = function (state) {
            return DThemeDarkTableBodyCells.getColor(state);
        };
        DThemeDarkTableBodyCellDate.prototype.getAlpha = function (state) {
            return DThemeDarkTableBodyCells.getAlpha(state);
        };
        DThemeDarkTableBodyCellDate.prototype.getHeight = function () {
            return DThemeDarkTableBodyCells.getHeight();
        };
        DThemeDarkTableBodyCellDate.prototype.getCornerMask = function () {
            return DThemeDarkTableBodyCells.getCornerMask();
        };
        DThemeDarkTableBodyCellDate.prototype.getTextFormatter = function () {
            return formatter$7;
        };
        DThemeDarkTableBodyCellDate.prototype.newTextValue = function () {
            return new Date();
        };
        return DThemeDarkTableBodyCellDate;
    }(DThemeDarkButton));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var formatter$8 = function (value, caller) {
        return DPickerDatetimes.format(value, caller.getDatetimeMask());
    };
    var DThemeDarkTableBodyCellDatetime = /** @class */ (function (_super) {
        __extends(DThemeDarkTableBodyCellDatetime, _super);
        function DThemeDarkTableBodyCellDatetime() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkTableBodyCellDatetime.prototype.getBackgroundColor = function (state) {
            return DThemeDarkTableBodyCells.getBackgroundColor(state);
        };
        DThemeDarkTableBodyCellDatetime.prototype.getBackgroundAlpha = function (state) {
            return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
        };
        DThemeDarkTableBodyCellDatetime.prototype.getBorderColor = function (state) {
            return DThemeDarkTableBodyCells.getBorderColor(state);
        };
        DThemeDarkTableBodyCellDatetime.prototype.getBorderAlign = function (state) {
            return DThemeDarkTableBodyCells.getBorderAlign(state);
        };
        DThemeDarkTableBodyCellDatetime.prototype.getBorderMask = function (state) {
            return DThemeDarkTableBodyCells.getBorderMask(state);
        };
        DThemeDarkTableBodyCellDatetime.prototype.getColor = function (state) {
            return DThemeDarkTableBodyCells.getColor(state);
        };
        DThemeDarkTableBodyCellDatetime.prototype.getAlpha = function (state) {
            return DThemeDarkTableBodyCells.getAlpha(state);
        };
        DThemeDarkTableBodyCellDatetime.prototype.getHeight = function () {
            return DThemeDarkTableBodyCells.getHeight();
        };
        DThemeDarkTableBodyCellDatetime.prototype.getCornerMask = function () {
            return DThemeDarkTableBodyCells.getCornerMask();
        };
        DThemeDarkTableBodyCellDatetime.prototype.getTextFormatter = function () {
            return formatter$8;
        };
        DThemeDarkTableBodyCellDatetime.prototype.newTextValue = function () {
            return new Date();
        };
        return DThemeDarkTableBodyCellDatetime;
    }(DThemeDarkButton));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var formatter$9 = function (index) {
        return String(Number(index) + 1);
    };
    var DThemeDarkTableBodyCellIndex = /** @class */ (function (_super) {
        __extends(DThemeDarkTableBodyCellIndex, _super);
        function DThemeDarkTableBodyCellIndex() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkTableBodyCellIndex.prototype.getBackgroundColor = function (state) {
            return DThemeDarkTableBodyCells.getBackgroundColor(state);
        };
        DThemeDarkTableBodyCellIndex.prototype.getBackgroundAlpha = function (state) {
            return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
        };
        DThemeDarkTableBodyCellIndex.prototype.getBorderColor = function (state) {
            return DThemeDarkTableBodyCells.getBorderColor(state);
        };
        DThemeDarkTableBodyCellIndex.prototype.getBorderAlign = function (state) {
            return DThemeDarkTableBodyCells.getBorderAlign(state);
        };
        DThemeDarkTableBodyCellIndex.prototype.getBorderMask = function (state) {
            return DThemeDarkTableBodyCells.getBorderMask(state);
        };
        DThemeDarkTableBodyCellIndex.prototype.getColor = function (state) {
            return DThemeDarkTableBodyCells.getColor(state);
        };
        DThemeDarkTableBodyCellIndex.prototype.getAlpha = function (state) {
            return DThemeDarkTableBodyCells.getAlpha(state);
        };
        DThemeDarkTableBodyCellIndex.prototype.getHeight = function () {
            return DThemeDarkTableBodyCells.getHeight();
        };
        DThemeDarkTableBodyCellIndex.prototype.getCornerMask = function () {
            return DThemeDarkTableBodyCells.getCornerMask();
        };
        DThemeDarkTableBodyCellIndex.prototype.getPaddingLeft = function () {
            return 10;
        };
        DThemeDarkTableBodyCellIndex.prototype.getPaddingRight = function () {
            return 10;
        };
        DThemeDarkTableBodyCellIndex.prototype.getTextFormatter = function () {
            return formatter$9;
        };
        DThemeDarkTableBodyCellIndex.prototype.newTextValue = function () {
            return 0;
        };
        return DThemeDarkTableBodyCellIndex;
    }(DThemeDarkImageBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkTableBodyCellInputInteger = /** @class */ (function (_super) {
        __extends(DThemeDarkTableBodyCellInputInteger, _super);
        function DThemeDarkTableBodyCellInputInteger() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkTableBodyCellInputInteger.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.RIGHT;
        };
        DThemeDarkTableBodyCellInputInteger.prototype.getBackgroundColor = function (state) {
            return DThemeDarkTableBodyCells.getBackgroundColor(state);
        };
        DThemeDarkTableBodyCellInputInteger.prototype.getBackgroundAlpha = function (state) {
            return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
        };
        DThemeDarkTableBodyCellInputInteger.prototype.getBorderColor = function (state) {
            return DThemeDarkTableBodyCells.getBorderColor(state);
        };
        DThemeDarkTableBodyCellInputInteger.prototype.getBorderAlign = function (state) {
            return DThemeDarkTableBodyCells.getBorderAlign(state);
        };
        DThemeDarkTableBodyCellInputInteger.prototype.getBorderMask = function (state) {
            return DThemeDarkTableBodyCells.getBorderMask(state);
        };
        DThemeDarkTableBodyCellInputInteger.prototype.getColor = function (state) {
            return DThemeDarkTableBodyCells.getColor(state);
        };
        DThemeDarkTableBodyCellInputInteger.prototype.getAlpha = function (state) {
            return DThemeDarkTableBodyCells.getAlpha(state);
        };
        DThemeDarkTableBodyCellInputInteger.prototype.getHeight = function () {
            return DThemeDarkTableBodyCells.getHeight();
        };
        DThemeDarkTableBodyCellInputInteger.prototype.getCornerMask = function () {
            return DThemeDarkTableBodyCells.getCornerMask();
        };
        DThemeDarkTableBodyCellInputInteger.prototype.getOutlineColor = function (state) {
            if (state.inDisabled) {
                return null;
            }
            return _super.prototype.getOutlineColor.call(this, state);
        };
        DThemeDarkTableBodyCellInputInteger.prototype.getOutlineAlign = function (state) {
            return DThemeDarkTableBodyCells.getOutlineAlign(state);
        };
        return DThemeDarkTableBodyCellInputInteger;
    }(DThemeDarkInputInteger));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkTableBodyCellInputReal = /** @class */ (function (_super) {
        __extends(DThemeDarkTableBodyCellInputReal, _super);
        function DThemeDarkTableBodyCellInputReal() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkTableBodyCellInputReal.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.RIGHT;
        };
        DThemeDarkTableBodyCellInputReal.prototype.getBackgroundColor = function (state) {
            return DThemeDarkTableBodyCells.getBackgroundColor(state);
        };
        DThemeDarkTableBodyCellInputReal.prototype.getBackgroundAlpha = function (state) {
            return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
        };
        DThemeDarkTableBodyCellInputReal.prototype.getBorderColor = function (state) {
            return DThemeDarkTableBodyCells.getBorderColor(state);
        };
        DThemeDarkTableBodyCellInputReal.prototype.getBorderAlign = function (state) {
            return DThemeDarkTableBodyCells.getBorderAlign(state);
        };
        DThemeDarkTableBodyCellInputReal.prototype.getBorderMask = function (state) {
            return DThemeDarkTableBodyCells.getBorderMask(state);
        };
        DThemeDarkTableBodyCellInputReal.prototype.getColor = function (state) {
            return DThemeDarkTableBodyCells.getColor(state);
        };
        DThemeDarkTableBodyCellInputReal.prototype.getAlpha = function (state) {
            return DThemeDarkTableBodyCells.getAlpha(state);
        };
        DThemeDarkTableBodyCellInputReal.prototype.getHeight = function () {
            return DThemeDarkTableBodyCells.getHeight();
        };
        DThemeDarkTableBodyCellInputReal.prototype.getCornerMask = function () {
            return DThemeDarkTableBodyCells.getCornerMask();
        };
        DThemeDarkTableBodyCellInputReal.prototype.getOutlineColor = function (state) {
            if (state.inDisabled) {
                return null;
            }
            return _super.prototype.getOutlineColor.call(this, state);
        };
        DThemeDarkTableBodyCellInputReal.prototype.getOutlineAlign = function (state) {
            return DThemeDarkTableBodyCells.getOutlineAlign(state);
        };
        return DThemeDarkTableBodyCellInputReal;
    }(DThemeDarkInputReal));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkTableBodyCellInputText = /** @class */ (function (_super) {
        __extends(DThemeDarkTableBodyCellInputText, _super);
        function DThemeDarkTableBodyCellInputText() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkTableBodyCellInputText.prototype.getBackgroundColor = function (state) {
            return DThemeDarkTableBodyCells.getBackgroundColor(state);
        };
        DThemeDarkTableBodyCellInputText.prototype.getBackgroundAlpha = function (state) {
            return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
        };
        DThemeDarkTableBodyCellInputText.prototype.getBorderColor = function (state) {
            return DThemeDarkTableBodyCells.getBorderColor(state);
        };
        DThemeDarkTableBodyCellInputText.prototype.getBorderAlign = function (state) {
            return DThemeDarkTableBodyCells.getBorderAlign(state);
        };
        DThemeDarkTableBodyCellInputText.prototype.getBorderMask = function (state) {
            return DThemeDarkTableBodyCells.getBorderMask(state);
        };
        DThemeDarkTableBodyCellInputText.prototype.getColor = function (state) {
            return DThemeDarkTableBodyCells.getColor(state);
        };
        DThemeDarkTableBodyCellInputText.prototype.getAlpha = function (state) {
            return DThemeDarkTableBodyCells.getAlpha(state);
        };
        DThemeDarkTableBodyCellInputText.prototype.getHeight = function () {
            return DThemeDarkTableBodyCells.getHeight();
        };
        DThemeDarkTableBodyCellInputText.prototype.getCornerMask = function () {
            return DThemeDarkTableBodyCells.getCornerMask();
        };
        DThemeDarkTableBodyCellInputText.prototype.getOutlineColor = function (state) {
            if (state.inDisabled) {
                return null;
            }
            return _super.prototype.getOutlineColor.call(this, state);
        };
        DThemeDarkTableBodyCellInputText.prototype.getOutlineAlign = function (state) {
            return DThemeDarkTableBodyCells.getOutlineAlign(state);
        };
        return DThemeDarkTableBodyCellInputText;
    }(DThemeDarkInputText));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkTableBodyCellTrees = /** @class */ (function () {
        function DThemeDarkTableBodyCellTrees() {
        }
        DThemeDarkTableBodyCellTrees.init = function () {
            DThemeDarkExpandables.init();
        };
        DThemeDarkTableBodyCellTrees.getImageSource = function (state) {
            if (state.is(DTableState.HAS_CHILDREN)) {
                if (state.is(DTableState.OPENED)) {
                    return DThemeDarkExpandables.getImageOpened();
                }
                else {
                    return DThemeDarkExpandables.getImageClosed();
                }
            }
            return null;
        };
        DThemeDarkTableBodyCellTrees.getImageTintColor = function (state) {
            return DThemeDarkConstants.COLOR;
        };
        DThemeDarkTableBodyCellTrees.getImageTintAlpha = function (state) {
            return DThemeDarkTableBodyCells.getAlpha(state) * 0.5;
        };
        return DThemeDarkTableBodyCellTrees;
    }());

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    DThemeDarkTableBodyCellTrees.init();
    var DThemeDarkTableBodyCellInputTree = /** @class */ (function (_super) {
        __extends(DThemeDarkTableBodyCellInputTree, _super);
        function DThemeDarkTableBodyCellInputTree() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkTableBodyCellInputTree.prototype.getLevelPadding = function (level) {
            return 24 + level * 20;
        };
        DThemeDarkTableBodyCellInputTree.prototype.getMargin = function () {
            return 0;
        };
        DThemeDarkTableBodyCellInputTree.prototype.getInteractive = function () {
            return DBaseInteractive.BOTH;
        };
        DThemeDarkTableBodyCellInputTree.prototype.getBackgroundColor = function (state) {
            return DThemeDarkTableBodyCells.getBackgroundColor(state);
        };
        DThemeDarkTableBodyCellInputTree.prototype.getBackgroundAlpha = function (state) {
            return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
        };
        DThemeDarkTableBodyCellInputTree.prototype.getBorderColor = function (state) {
            return DThemeDarkTableBodyCells.getBorderColor(state);
        };
        DThemeDarkTableBodyCellInputTree.prototype.getBorderAlign = function (state) {
            return DThemeDarkTableBodyCells.getBorderAlign(state);
        };
        DThemeDarkTableBodyCellInputTree.prototype.getBorderMask = function (state) {
            return DThemeDarkTableBodyCells.getBorderMask(state);
        };
        DThemeDarkTableBodyCellInputTree.prototype.getColor = function (state) {
            return DThemeDarkTableBodyCells.getColor(state);
        };
        DThemeDarkTableBodyCellInputTree.prototype.getAlpha = function (state) {
            return DThemeDarkTableBodyCells.getAlpha(state);
        };
        DThemeDarkTableBodyCellInputTree.prototype.getHeight = function () {
            return DThemeDarkTableBodyCells.getHeight();
        };
        DThemeDarkTableBodyCellInputTree.prototype.getCornerMask = function () {
            return DThemeDarkTableBodyCells.getCornerMask();
        };
        DThemeDarkTableBodyCellInputTree.prototype.getOutlineColor = function (state) {
            if (state.inDisabled) {
                return null;
            }
            return _super.prototype.getOutlineColor.call(this, state);
        };
        DThemeDarkTableBodyCellInputTree.prototype.getOutlineAlign = function (state) {
            return DThemeDarkTableBodyCells.getOutlineAlign(state);
        };
        return DThemeDarkTableBodyCellInputTree;
    }(DThemeDarkLayoutHorizontal));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkTableBodyCellInputTreeInput = /** @class */ (function (_super) {
        __extends(DThemeDarkTableBodyCellInputTreeInput, _super);
        function DThemeDarkTableBodyCellInputTreeInput() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkTableBodyCellInputTreeInput.prototype.getHeight = function () {
            return "100%";
        };
        DThemeDarkTableBodyCellInputTreeInput.prototype.getBackgroundColor = function (state) {
            return null;
        };
        DThemeDarkTableBodyCellInputTreeInput.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeDarkTableBodyCellInputTreeInput.prototype.getOutlineColor = function (state) {
            return null;
        };
        DThemeDarkTableBodyCellInputTreeInput.prototype.getPaddingLeft = function () {
            return 0;
        };
        return DThemeDarkTableBodyCellInputTreeInput;
    }(DThemeDarkInputText));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkTableBodyCellInputTreeMarker = /** @class */ (function (_super) {
        __extends(DThemeDarkTableBodyCellInputTreeMarker, _super);
        function DThemeDarkTableBodyCellInputTreeMarker() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkTableBodyCellInputTreeMarker.prototype.getHeight = function () {
            return "100%";
        };
        DThemeDarkTableBodyCellInputTreeMarker.prototype.getBackgroundColor = function (state) {
            return null;
        };
        DThemeDarkTableBodyCellInputTreeMarker.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeDarkTableBodyCellInputTreeMarker.prototype.getOutlineColor = function (state) {
            return null;
        };
        DThemeDarkTableBodyCellInputTreeMarker.prototype.getCursor = function (state) {
            if (!state.isActionable) {
                return "";
            }
            return "pointer";
        };
        DThemeDarkTableBodyCellInputTreeMarker.prototype.getImageAlignWith = function () {
            return DAlignWith.BORDER;
        };
        DThemeDarkTableBodyCellInputTreeMarker.prototype.getImageAlignHorizontal = function () {
            return DAlignHorizontal.RIGHT;
        };
        DThemeDarkTableBodyCellInputTreeMarker.prototype.getImageSource = function (state) {
            return DThemeDarkTableBodyCellTrees.getImageSource(state);
        };
        DThemeDarkTableBodyCellInputTreeMarker.prototype.getImageTintColor = function (state) {
            return DThemeDarkTableBodyCellTrees.getImageTintColor(state);
        };
        DThemeDarkTableBodyCellInputTreeMarker.prototype.getImageTintAlpha = function (state) {
            return DThemeDarkTableBodyCellTrees.getImageTintAlpha(state);
        };
        return DThemeDarkTableBodyCellInputTreeMarker;
    }(DThemeDarkButtonBase));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    DThemeDarkLinks.init();
    var DThemeDarkTableBodyCellLink = /** @class */ (function (_super) {
        __extends(DThemeDarkTableBodyCellLink, _super);
        function DThemeDarkTableBodyCellLink() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkTableBodyCellLink.prototype.getImageTintColor = function (state) {
            return DThemeDarkTableBodyCells.getImageTintColor(state, true);
        };
        DThemeDarkTableBodyCellLink.prototype.getImageSource = function (state) {
            return DThemeDarkLinks.getImageSource(state);
        };
        DThemeDarkTableBodyCellLink.prototype.getLinkMenuOptions = function () {
            return DThemeDarkLinks.getLinkMenuOptions();
        };
        return DThemeDarkTableBodyCellLink;
    }(DThemeDarkTableBodyCellButton));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkTableBodyCellSelectMenu = /** @class */ (function (_super) {
        __extends(DThemeDarkTableBodyCellSelectMenu, _super);
        function DThemeDarkTableBodyCellSelectMenu() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkTableBodyCellSelectMenu.prototype.getBackgroundColor = function (state) {
            return DThemeDarkTableBodyCells.getBackgroundColor(state);
        };
        DThemeDarkTableBodyCellSelectMenu.prototype.getBackgroundAlpha = function (state) {
            return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
        };
        DThemeDarkTableBodyCellSelectMenu.prototype.getBorderColor = function (state) {
            return DThemeDarkTableBodyCells.getBorderColor(state);
        };
        DThemeDarkTableBodyCellSelectMenu.prototype.getBorderAlign = function (state) {
            return DThemeDarkTableBodyCells.getBorderAlign(state);
        };
        DThemeDarkTableBodyCellSelectMenu.prototype.getBorderMask = function (state) {
            return DThemeDarkTableBodyCells.getBorderMask(state);
        };
        DThemeDarkTableBodyCellSelectMenu.prototype.getColor = function (state) {
            return DThemeDarkTableBodyCells.getColor(state);
        };
        DThemeDarkTableBodyCellSelectMenu.prototype.getAlpha = function (state) {
            return DThemeDarkTableBodyCells.getAlpha(state);
        };
        DThemeDarkTableBodyCellSelectMenu.prototype.getHeight = function () {
            return DThemeDarkTableBodyCells.getHeight();
        };
        DThemeDarkTableBodyCellSelectMenu.prototype.getCornerMask = function () {
            return DThemeDarkTableBodyCells.getCornerMask();
        };
        DThemeDarkTableBodyCellSelectMenu.prototype.getSecondaryImageSource = function (state) {
            return null;
        };
        DThemeDarkTableBodyCellSelectMenu.prototype.getPaddingLeft = function () {
            return 10;
        };
        DThemeDarkTableBodyCellSelectMenu.prototype.getPaddingRight = function () {
            return 10;
        };
        return DThemeDarkTableBodyCellSelectMenu;
    }(DThemeDarkSelect));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkTableBodyCellSelectMultiple = /** @class */ (function (_super) {
        __extends(DThemeDarkTableBodyCellSelectMultiple, _super);
        function DThemeDarkTableBodyCellSelectMultiple() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkTableBodyCellSelectMultiple.prototype.getBackgroundColor = function (state) {
            return DThemeDarkTableBodyCells.getBackgroundColor(state);
        };
        DThemeDarkTableBodyCellSelectMultiple.prototype.getBackgroundAlpha = function (state) {
            return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
        };
        DThemeDarkTableBodyCellSelectMultiple.prototype.getBorderColor = function (state) {
            return DThemeDarkTableBodyCells.getBorderColor(state);
        };
        DThemeDarkTableBodyCellSelectMultiple.prototype.getBorderAlign = function (state) {
            return DThemeDarkTableBodyCells.getBorderAlign(state);
        };
        DThemeDarkTableBodyCellSelectMultiple.prototype.getBorderMask = function (state) {
            return DThemeDarkTableBodyCells.getBorderMask(state);
        };
        DThemeDarkTableBodyCellSelectMultiple.prototype.getColor = function (state) {
            return DThemeDarkTableBodyCells.getColor(state);
        };
        DThemeDarkTableBodyCellSelectMultiple.prototype.getAlpha = function (state) {
            return DThemeDarkTableBodyCells.getAlpha(state);
        };
        DThemeDarkTableBodyCellSelectMultiple.prototype.getHeight = function () {
            return DThemeDarkTableBodyCells.getHeight();
        };
        DThemeDarkTableBodyCellSelectMultiple.prototype.getCornerMask = function () {
            return DThemeDarkTableBodyCells.getCornerMask();
        };
        DThemeDarkTableBodyCellSelectMultiple.prototype.getSecondaryImageSource = function (state) {
            return null;
        };
        DThemeDarkTableBodyCellSelectMultiple.prototype.getPaddingLeft = function () {
            return 10;
        };
        DThemeDarkTableBodyCellSelectMultiple.prototype.getPaddingRight = function () {
            return 10;
        };
        return DThemeDarkTableBodyCellSelectMultiple;
    }(DThemeDarkSelectMultiple));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var formatter$a = function (value, caller) {
        return DPickerTimes.format(value, caller.getDatetimeMask());
    };
    var DThemeDarkTableBodyCellTime = /** @class */ (function (_super) {
        __extends(DThemeDarkTableBodyCellTime, _super);
        function DThemeDarkTableBodyCellTime() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkTableBodyCellTime.prototype.getBackgroundColor = function (state) {
            return DThemeDarkTableBodyCells.getBackgroundColor(state);
        };
        DThemeDarkTableBodyCellTime.prototype.getBackgroundAlpha = function (state) {
            return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
        };
        DThemeDarkTableBodyCellTime.prototype.getBorderColor = function (state) {
            return DThemeDarkTableBodyCells.getBorderColor(state);
        };
        DThemeDarkTableBodyCellTime.prototype.getBorderAlign = function (state) {
            return DThemeDarkTableBodyCells.getBorderAlign(state);
        };
        DThemeDarkTableBodyCellTime.prototype.getBorderMask = function (state) {
            return DThemeDarkTableBodyCells.getBorderMask(state);
        };
        DThemeDarkTableBodyCellTime.prototype.getColor = function (state) {
            return DThemeDarkTableBodyCells.getColor(state);
        };
        DThemeDarkTableBodyCellTime.prototype.getAlpha = function (state) {
            return DThemeDarkTableBodyCells.getAlpha(state);
        };
        DThemeDarkTableBodyCellTime.prototype.getHeight = function () {
            return DThemeDarkTableBodyCells.getHeight();
        };
        DThemeDarkTableBodyCellTime.prototype.getCornerMask = function () {
            return DThemeDarkTableBodyCells.getCornerMask();
        };
        DThemeDarkTableBodyCellTime.prototype.getTextFormatter = function () {
            return formatter$a;
        };
        DThemeDarkTableBodyCellTime.prototype.newTextValue = function () {
            return new Date();
        };
        return DThemeDarkTableBodyCellTime;
    }(DThemeDarkButton));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    DThemeDarkLinks.init();
    DThemeDarkTableBodyCellTrees.init();
    var DThemeDarkTableBodyCellTree = /** @class */ (function (_super) {
        __extends(DThemeDarkTableBodyCellTree, _super);
        function DThemeDarkTableBodyCellTree() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkTableBodyCellTree.prototype.getLevelPadding = function (level) {
            return 24 + level * 20 - this.getPaddingLeft();
        };
        DThemeDarkTableBodyCellTree.prototype.getImageAlignWith = function () {
            return DAlignWith.PADDING;
        };
        DThemeDarkTableBodyCellTree.prototype.getImageMarginHorizontal = function () {
            return -19;
        };
        DThemeDarkTableBodyCellTree.prototype.getImageSource = function (state) {
            return DThemeDarkTableBodyCellTrees.getImageSource(state);
        };
        DThemeDarkTableBodyCellTree.prototype.getImageTintColor = function (state) {
            return DThemeDarkTableBodyCellTrees.getImageTintColor(state);
        };
        DThemeDarkTableBodyCellTree.prototype.getImageTintAlpha = function (state) {
            return DThemeDarkTableBodyCellTrees.getImageTintAlpha(state);
        };
        DThemeDarkTableBodyCellTree.prototype.getLinkMenuOptions = function () {
            return DThemeDarkLinks.getLinkMenuOptions();
        };
        return DThemeDarkTableBodyCellTree;
    }(DThemeDarkTableBodyCellButton));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkTableRow = /** @class */ (function (_super) {
        __extends(DThemeDarkTableRow, _super);
        function DThemeDarkTableRow() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkTableRow.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeDarkTableRow.prototype.getCornerMask = function () {
            return DCornerMask.ALL;
        };
        DThemeDarkTableRow.prototype.getMargin = function () {
            return 0;
        };
        DThemeDarkTableRow.prototype.getInteractive = function () {
            return DBaseInteractive.BOTH;
        };
        return DThemeDarkTableRow;
    }(DThemeDarkLayoutHorizontal));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkTableBodyRow = /** @class */ (function (_super) {
        __extends(DThemeDarkTableBodyRow, _super);
        function DThemeDarkTableBodyRow() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.BACKGROUND_COLOR_EVEN = DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD;
            _this.BACKGROUND_COLOR_ODD = UtilRgb.brighten(DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD, 0.02);
            return _this;
        }
        DThemeDarkTableBodyRow.prototype.getBackgroundColor = function (state) {
            if (state.inDisabled) {
                return state.isAlternated ?
                    this.BACKGROUND_COLOR_EVEN : this.BACKGROUND_COLOR_ODD;
            }
            else if (state.isActive) {
                return DThemeDarkConstants.HIGHLIGHT_COLOR;
            }
            else if (state.isFocused || state.isHovered) {
                return DThemeDarkConstants.WEAK_HIGHLIGHT_BLENDED_ON_BOARD;
            }
            else {
                return state.isAlternated ?
                    this.BACKGROUND_COLOR_EVEN : this.BACKGROUND_COLOR_ODD;
            }
        };
        DThemeDarkTableBodyRow.prototype.getWidth = function () {
            return "100%";
        };
        return DThemeDarkTableBodyRow;
    }(DThemeDarkTableRow));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkTableHeader = /** @class */ (function (_super) {
        __extends(DThemeDarkTableHeader, _super);
        function DThemeDarkTableHeader() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.BACKGROUND_COLOR = UtilRgb.brighten(DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD, 0.02);
            _this.BORDER_COLOR = UtilRgb.darken(DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD, 0.05);
            return _this;
        }
        DThemeDarkTableHeader.prototype.getBackgroundColor = function (state) {
            if (state.inDisabled) {
                return null;
            }
            else {
                return this.BACKGROUND_COLOR;
            }
        };
        DThemeDarkTableHeader.prototype.getBorderColor = function (state) {
            return this.BORDER_COLOR;
        };
        DThemeDarkTableHeader.prototype.getBorderAlign = function (state) {
            return 0;
        };
        DThemeDarkTableHeader.prototype.getBorderMask = function (state) {
            return DBorderMask.NOT_BOTTOM;
        };
        DThemeDarkTableHeader.prototype.getWidth = function () {
            return "100%";
        };
        DThemeDarkTableHeader.prototype.getHeight = function () {
            return 30;
        };
        return DThemeDarkTableHeader;
    }(DThemeDarkTableRow));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkTableCategory = /** @class */ (function (_super) {
        __extends(DThemeDarkTableCategory, _super);
        function DThemeDarkTableCategory() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeDarkTableCategory;
    }(DThemeDarkTableHeader));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    // Material Design icons by Google.
    // Apache license version 2.0.
    DThemeDarkAtlas.add("sorted_descending", 24, 24, "<g transform=\"scale(0.875,0.875)\">" +
        "<path d=\"M7 16l5-5 5 5H7z\" fill=\"#fff\" />" +
        "</g>");
    DThemeDarkAtlas.add("sorted_ascending", 24, 24, "<g transform=\"scale(0.875,0.875)\">" +
        "<path d=\"M7 12l5 5 5-5H7z\" fill=\"#fff\" />" +
        "</g>");
    var DThemeDarkTableHeaderCell = /** @class */ (function (_super) {
        __extends(DThemeDarkTableHeaderCell, _super);
        function DThemeDarkTableHeaderCell() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.BACKGROUND_COLOR = UtilRgb.brighten(DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD, 0.02);
            _this.BACKGROUND_COLOR_HOVERED = UtilRgb.brighten(_this.BACKGROUND_COLOR, 0.08);
            _this.BACKGROUND_COLOR_PRESSED = UtilRgb.brighten(_this.BACKGROUND_COLOR, 0.32);
            _this.BORDER_COLOR = UtilRgb.darken(DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD, 0.05);
            return _this;
        }
        DThemeDarkTableHeaderCell.prototype.getBackgroundColor = function (state) {
            if (state.inDisabled) {
                return (state.is(DTableState.FROZEN)) ?
                    this.BACKGROUND_COLOR : null;
            }
            else if (state.isPressed) {
                return this.BACKGROUND_COLOR_PRESSED;
            }
            else if (state.isFocused || state.isHovered) {
                return this.BACKGROUND_COLOR_HOVERED;
            }
            else {
                return (state.is(DTableState.FROZEN)) ?
                    this.BACKGROUND_COLOR : null;
            }
        };
        DThemeDarkTableHeaderCell.prototype.getBackgroundAlpha = function (state) {
            return 1;
        };
        DThemeDarkTableHeaderCell.prototype.getBorderColor = function (state) {
            return this.BORDER_COLOR;
        };
        DThemeDarkTableHeaderCell.prototype.getBorderAlign = function (state) {
            return 0;
        };
        DThemeDarkTableHeaderCell.prototype.getBorderMask = function (state) {
            if (state.is(DTableState.END)) {
                return DBorderMask.ALL;
            }
            else {
                return DBorderMask.NOT_RIGHT;
            }
        };
        DThemeDarkTableHeaderCell.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.CENTER;
        };
        DThemeDarkTableHeaderCell.prototype.getCornerMask = function () {
            return DCornerMask.ALL;
        };
        DThemeDarkTableHeaderCell.prototype.getHeight = function () {
            return "padding";
        };
        DThemeDarkTableHeaderCell.prototype.getPaddingLeft = function () {
            return 10;
        };
        DThemeDarkTableHeaderCell.prototype.getPaddingRight = function () {
            return 10;
        };
        DThemeDarkTableHeaderCell.prototype.newTextValue = function () {
            return null;
        };
        DThemeDarkTableHeaderCell.prototype.getSecondaryImageTintColor = function (state) {
            if (state.is(DTableState.CHECKABLE)) {
                return DThemeDarkButtonChecks.getImageTintColor(state);
            }
            return _super.prototype.getSecondaryImageTintColor.call(this, state);
        };
        DThemeDarkTableHeaderCell.prototype.getSecondaryImageSource = function (state) {
            if (state.is(DTableState.CHECKABLE)) {
                return DThemeDarkButtonChecks.getImageSource(state);
            }
            return null;
        };
        DThemeDarkTableHeaderCell.prototype.getSecondaryImageAlignHorizontal = function () {
            return DAlignHorizontal.LEFT;
        };
        DThemeDarkTableHeaderCell.prototype.getSecondaryImageAlignVertical = function () {
            return DAlignVertical.MIDDLE;
        };
        DThemeDarkTableHeaderCell.prototype.getSecondaryImageAlignWith = function () {
            return DAlignWith.TEXT;
        };
        DThemeDarkTableHeaderCell.prototype.getTertiaryImageSource = function (state) {
            if (state.is(DTableState.SORTED_ASCENDING)) {
                return DThemeDarkAtlas.mappings.sorted_ascending;
            }
            else if (state.is(DTableState.SORTED_DESCENDING)) {
                return DThemeDarkAtlas.mappings.sorted_descending;
            }
            else {
                return null;
            }
        };
        DThemeDarkTableHeaderCell.prototype.getTertiaryImageAlignHorizontal = function () {
            return DAlignHorizontal.RIGHT;
        };
        DThemeDarkTableHeaderCell.prototype.getTertiaryImageAlignWith = function () {
            return DAlignWith.PADDING;
        };
        DThemeDarkTableHeaderCell.prototype.getCursor = function (state) {
            if (!state.isActionable) {
                return "";
            }
            if (state.is(DTableState.CHECKABLE) || state.is(DTableState.SORTABLE)) {
                return "pointer";
            }
            return "";
        };
        return DThemeDarkTableHeaderCell;
    }(DThemeDarkImage));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkTableCategoryCell = /** @class */ (function (_super) {
        __extends(DThemeDarkTableCategoryCell, _super);
        function DThemeDarkTableCategoryCell() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DThemeDarkTableCategoryCell;
    }(DThemeDarkTableHeaderCell));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkTable = function () {
        DThemeDark.set("DTableBodyCellActionDialog", DThemeDarkTableBodyCellActionDialog);
        DThemeDark.set("DTableBodyCellActionMenu", DThemeDarkTableBodyCellActionMenu);
        DThemeDark.set("DTableBodyCellActionPromise", DThemeDarkTableBodyCellActionPromise);
        DThemeDark.set("DTableBodyCellButton", DThemeDarkTableBodyCellButton);
        DThemeDark.set("DTableBodyCellCheck", DThemeDarkTableBodyCellCheck);
        DThemeDark.set("DTableBodyCellColor", DThemeDarkTableBodyCellColor);
        DThemeDark.set("DTableBodyCellDate", DThemeDarkTableBodyCellDate);
        DThemeDark.set("DTableBodyCellDatetime", DThemeDarkTableBodyCellDatetime);
        DThemeDark.set("DTableBodyCellIndex", DThemeDarkTableBodyCellIndex);
        DThemeDark.set("DTableBodyCellInputInteger", DThemeDarkTableBodyCellInputInteger);
        DThemeDark.set("DTableBodyCellInputReal", DThemeDarkTableBodyCellInputReal);
        DThemeDark.set("DTableBodyCellInputText", DThemeDarkTableBodyCellInputText);
        DThemeDark.set("DTableBodyCellInputTreeMarker", DThemeDarkTableBodyCellInputTreeMarker);
        DThemeDark.set("DTableBodyCellInputTreeInput", DThemeDarkTableBodyCellInputTreeInput);
        DThemeDark.set("DTableBodyCellInputTree", DThemeDarkTableBodyCellInputTree);
        DThemeDark.set("DTableBodyCellLink", DThemeDarkTableBodyCellLink);
        DThemeDark.set("DTableBodyCellSelectDialog", DThemeDarkTableBodyCellSelectDialog);
        DThemeDark.set("DTableBodyCellSelectMenu", DThemeDarkTableBodyCellSelectMenu);
        DThemeDark.set("DTableBodyCellSelectMultiple", DThemeDarkTableBodyCellSelectMultiple);
        DThemeDark.set("DTableBodyCellSelectPromise", DThemeDarkTableBodyCellSelectPromise);
        DThemeDark.set("DTableBodyCellText", DThemeDarkTableBodyCellText);
        DThemeDark.set("DTableBodyCellTree", DThemeDarkTableBodyCellTree);
        DThemeDark.set("DTableBodyCellTime", DThemeDarkTableBodyCellTime);
        DThemeDark.set("DTableBodyRow", DThemeDarkTableBodyRow);
        DThemeDark.set("DTableBody", DThemeDarkTableBody);
        DThemeDark.set("DTableCategoryCell", DThemeDarkTableCategoryCell);
        DThemeDark.set("DTableCategory", DThemeDarkTableCategory);
        DThemeDark.set("DTableHeaderCell", DThemeDarkTableHeaderCell);
        DThemeDark.set("DTableHeader", DThemeDarkTableHeader);
        DThemeDark.set("DTableRow", DThemeDarkTableRow);
        DThemeDark.set("DTable", DThemeDarkTable);
        loadThemeDarkButtonCheck();
        loadThemeDarkButtonColor();
        loadThemeDarkButtonDate();
        loadThemeDarkButtonDatetime();
        loadThemeDarkInputInteger();
        loadThemeDarkInputReal();
        loadThemeDarkInputText();
        loadThemeDarkDialogSelect();
        loadThemeDarkMenu();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkText = function () {
        DThemeDark.set("DText", DThemeDarkText);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkTree = /** @class */ (function (_super) {
        __extends(DThemeDarkTree, _super);
        function DThemeDarkTree() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkTree.prototype.getBackgroundColor = function (state) {
            return DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD;
        };
        DThemeDarkTree.prototype.getBorderAlign = function (state) {
            return 1;
        };
        return DThemeDarkTree;
    }(DThemeDarkPane));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkTreeItem = /** @class */ (function (_super) {
        __extends(DThemeDarkTreeItem, _super);
        function DThemeDarkTreeItem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkTreeItem.prototype.getBackgroundColor = function (state) {
            if (state.inDisabled) {
                return null;
            }
            else if (state.isActive) {
                return DThemeDarkConstants.HIGHLIGHT_COLOR;
            }
            else if (state.isFocused || state.isHovered) {
                return DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR;
            }
            else {
                return null;
            }
        };
        DThemeDarkTreeItem.prototype.getBackgroundAlpha = function (state) {
            return DThemeDarkConstants.WEAK_HIGHLIGHT_ALPHA;
        };
        DThemeDarkTreeItem.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeDarkTreeItem.prototype.getHeight = function () {
            return 30;
        };
        DThemeDarkTreeItem.prototype.getWidth = function () {
            return "100%";
        };
        DThemeDarkTreeItem.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.LEFT;
        };
        DThemeDarkTreeItem.prototype.getPaddingLeft = function () {
            return 10;
        };
        DThemeDarkTreeItem.prototype.getPaddingRight = function () {
            return 10;
        };
        DThemeDarkTreeItem.prototype.getCornerMask = function () {
            return DCornerMask.ALL;
        };
        DThemeDarkTreeItem.prototype.getInteractive = function () {
            return DBaseInteractive.BOTH;
        };
        DThemeDarkTreeItem.prototype.getPaddingByLevel = function (level) {
            return level * 15;
        };
        return DThemeDarkTreeItem;
    }(DThemeDarkLayoutHorizontal));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkTreeItemTextAndImage = /** @class */ (function (_super) {
        __extends(DThemeDarkTreeItemTextAndImage, _super);
        function DThemeDarkTreeItemTextAndImage() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkTreeItemTextAndImage.prototype.getBackgroundColor = function (state) {
            return null;
        };
        DThemeDarkTreeItemTextAndImage.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeDarkTreeItemTextAndImage.prototype.getHeight = function () {
            return 30;
        };
        DThemeDarkTreeItemTextAndImage.prototype.getWidth = function () {
            return "100%";
        };
        DThemeDarkTreeItemTextAndImage.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.LEFT;
        };
        DThemeDarkTreeItemTextAndImage.prototype.getPaddingLeft = function () {
            return 0;
        };
        DThemeDarkTreeItemTextAndImage.prototype.getPaddingRight = function () {
            return 0;
        };
        DThemeDarkTreeItemTextAndImage.prototype.getCornerMask = function () {
            return DCornerMask.ALL;
        };
        DThemeDarkTreeItemTextAndImage.prototype.getImageSource = function (state) {
            return null;
        };
        return DThemeDarkTreeItemTextAndImage;
    }(DThemeDarkImage));

    const DTreeItemState = wcardinal.ui.DTreeItemState;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    DThemeDarkAtlas.add("menu_item_expandable_header_closed", 14, 14, "<g transform=\"scale(1, 0.7)\">" +
        "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"6 16 10 10 6 4\"></polyline>" +
        "</g>");
    DThemeDarkAtlas.add("menu_item_expandable_header_opened", 14, 14, "<g transform=\"scale(0.7, 1)\">" +
        "<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"1\" points=\"16 6 10 10 4 6\"></polyline>" +
        "</g>");
    var DThemeDarkTreeItemToggleIcon = /** @class */ (function (_super) {
        __extends(DThemeDarkTreeItemToggleIcon, _super);
        function DThemeDarkTreeItemToggleIcon() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DThemeDarkTreeItemToggleIcon.prototype.getBackgroundColor = function (state) {
            return null;
        };
        DThemeDarkTreeItemToggleIcon.prototype.getBorderColor = function (state) {
            return null;
        };
        DThemeDarkTreeItemToggleIcon.prototype.getHeight = function () {
            return 30;
        };
        DThemeDarkTreeItemToggleIcon.prototype.getWidth = function () {
            return 14;
        };
        DThemeDarkTreeItemToggleIcon.prototype.getTextAlignHorizontal = function () {
            return DAlignHorizontal.LEFT;
        };
        DThemeDarkTreeItemToggleIcon.prototype.getPaddingLeft = function () {
            return 0;
        };
        DThemeDarkTreeItemToggleIcon.prototype.getPaddingRight = function () {
            return 0;
        };
        DThemeDarkTreeItemToggleIcon.prototype.getCornerMask = function () {
            return DCornerMask.ALL;
        };
        DThemeDarkTreeItemToggleIcon.prototype.getImageSource = function (state) {
            if (state.is(DTreeItemState.EXPANDED)) {
                return DThemeDarkAtlas.mappings.menu_item_expandable_header_opened;
            }
            else if (state.is(DTreeItemState.COLLAPSED)) {
                return DThemeDarkAtlas.mappings.menu_item_expandable_header_closed;
            }
            else {
                return null;
            }
        };
        return DThemeDarkTreeItemToggleIcon;
    }(DThemeDarkImage));

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkTree = function () {
        DThemeDark.set("DTree", DThemeDarkTree);
        DThemeDark.set("DTreeItem", DThemeDarkTreeItem);
        DThemeDark.set("DTreeItemToggleIcon", DThemeDarkTreeItemToggleIcon);
        DThemeDark.set("DTreeItemTextAndImage", DThemeDarkTreeItemTextAndImage);
    };

    const DMouseModifier = wcardinal.ui.DMouseModifier;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var DThemeDarkView = /** @class */ (function () {
        function DThemeDarkView() {
        }
        DThemeDarkView.prototype.isWheelZoomEnabled = function () {
            return true;
        };
        DThemeDarkView.prototype.getWheelZoomSpeed = function () {
            return 0.004;
        };
        DThemeDarkView.prototype.getWheelZoomModifier = function () {
            return DMouseModifier.NOT_NONE;
        };
        DThemeDarkView.prototype.isWheelTranslationEnabled = function () {
            return true;
        };
        DThemeDarkView.prototype.getWheelTranslationSpeed = function () {
            return 14 * 0.16;
        };
        DThemeDarkView.prototype.getWheelTranslationModifier = function () {
            return DMouseModifier.NONE;
        };
        DThemeDarkView.prototype.isDblClickZoomEnabled = function () {
            return true;
        };
        DThemeDarkView.prototype.getDblClickZoomSpeed = function () {
            return 2;
        };
        DThemeDarkView.prototype.getDblClickZoomModifier = function () {
            return DMouseModifier.NONE;
        };
        DThemeDarkView.prototype.getDblClickZoomDuration = function () {
            return 333;
        };
        DThemeDarkView.prototype.getZoomMin = function () {
            return 0.05;
        };
        DThemeDarkView.prototype.getZoomMax = function () {
            return 20;
        };
        DThemeDarkView.prototype.getZoomKeepRatio = function () {
            return true;
        };
        DThemeDarkView.prototype.getDragMode = function () {
            return DDragMode.ON;
        };
        DThemeDarkView.prototype.getDragModifier = function () {
            return DMouseModifier.NONE;
        };
        DThemeDarkView.prototype.getDragDurationPosition = function () {
            return 1;
        };
        DThemeDarkView.prototype.getDragDurationScale = function () {
            return 1;
        };
        return DThemeDarkView;
    }());

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkView = function () {
        DThemeDark.set("DView", DThemeDarkView);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var loadThemeDarkAll = function () {
        loadThemeDark();
        loadThemeDarkBase();
        loadThemeDarkBoard();
        loadThemeDarkButtonAll();
        loadThemeDarkCanvasContainer();
        loadThemeDarkChart();
        loadThemeDarkDiagram();
        loadThemeDarkDiagramEditor();
        loadThemeDarkDialogAll();
        loadThemeDarkExpandable();
        loadThemeDarkHtmlElement();
        loadThemeDarkImage();
        loadThemeDarkInputAll();
        loadThemeDarkLayout();
        loadThemeDarkList();
        loadThemeDarkTree();
        loadThemeDarkMenu();
        loadThemeDarkMenuBar();
        loadThemeDarkMenuSided();
        loadThemeDarkNote();
        loadThemeDarkPagination();
        loadThemeDarkPane();
        loadThemeDarkPickerColor();
        loadThemeDarkPickerColorGradient();
        loadThemeDarkPickerDate();
        loadThemeDarkPickerDatetime();
        loadThemeDarkPickerTime();
        loadThemeDarkScrollBar();
        loadThemeDarkSelect();
        loadThemeDarkSlider();
        loadThemeDarkTable();
        loadThemeDarkText();
        loadThemeDarkView();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */

    var dark = {
        __proto__: null,
        loadThemeDarkAll: loadThemeDarkAll,
        loadThemeDarkBase: loadThemeDarkBase,
        loadThemeDark: loadThemeDark,
        loadThemeDarkBoard: loadThemeDarkBoard,
        loadThemeDarkButtonAll: loadThemeDarkButtonAll,
        loadThemeDarkButtonAmbient: loadThemeDarkButtonAmbient,
        loadThemeDarkButtonCheck: loadThemeDarkButtonCheck,
        loadThemeDarkButtonCheckRight: loadThemeDarkButtonCheckRight,
        loadThemeDarkButtonColor: loadThemeDarkButtonColor,
        loadThemeDarkButtonColorGradient: loadThemeDarkButtonColorGradient,
        loadThemeDarkButtonDanger: loadThemeDarkButtonDanger,
        loadThemeDarkButtonDate: loadThemeDarkButtonDate,
        loadThemeDarkButtonDatetime: loadThemeDarkButtonDatetime,
        loadThemeDarkButtonFile: loadThemeDarkButtonFile,
        loadThemeDarkButtonLink: loadThemeDarkButtonLink,
        loadThemeDarkButtonPrimary: loadThemeDarkButtonPrimary,
        loadThemeDarkButtonRadio: loadThemeDarkButtonRadio,
        loadThemeDarkButtonRadioRight: loadThemeDarkButtonRadioRight,
        loadThemeDarkButtonTime: loadThemeDarkButtonTime,
        loadThemeDarkButton: loadThemeDarkButton,
        loadThemeDarkCanvasContainer: loadThemeDarkCanvasContainer,
        loadThemeDarkChart: loadThemeDarkChart,
        loadThemeDarkDiagram: loadThemeDarkDiagram,
        loadThemeDarkDiagramEditor: loadThemeDarkDiagramEditor,
        loadThemeDarkDialogAll: loadThemeDarkDialogAll,
        loadThemeDarkDialogColorGradient: loadThemeDarkDialogColorGradient,
        loadThemeDarkDialogColor: loadThemeDarkDialogColor,
        loadThemeDarkDialogCommand: loadThemeDarkDialogCommand,
        loadThemeDarkDialogConfirm: loadThemeDarkDialogConfirm,
        loadThemeDarkDialogConfirmDelete: loadThemeDarkDialogConfirmDelete,
        loadThemeDarkDialogConfirmDiscard: loadThemeDarkDialogConfirmDiscard,
        loadThemeDarkDialogDate: loadThemeDarkDialogDate,
        loadThemeDarkDialogDatetime: loadThemeDarkDialogDatetime,
        loadThemeDarkDialogInputBoolean: loadThemeDarkDialogInputBoolean,
        loadThemeDarkDialogInputInteger: loadThemeDarkDialogInputInteger,
        loadThemeDarkDialogInputReal: loadThemeDarkDialogInputReal,
        loadThemeDarkDialogInputText: loadThemeDarkDialogInputText,
        loadThemeDarkDialogMessage: loadThemeDarkDialogMessage,
        loadThemeDarkDialogProcessing: loadThemeDarkDialogProcessing,
        loadThemeDarkDialogSaveAs: loadThemeDarkDialogSaveAs,
        loadThemeDarkDialogSelect: loadThemeDarkDialogSelect,
        loadThemeDarkDialogTime: loadThemeDarkDialogTime,
        loadThemeDarkDialog: loadThemeDarkDialog,
        loadThemeDarkDropdown: loadThemeDarkDropdown,
        loadThemeDarkExpandable: loadThemeDarkExpandable,
        loadThemeDarkHtmlElement: loadThemeDarkHtmlElement,
        loadThemeDarkImage: loadThemeDarkImage,
        loadThemeDarkInputAll: loadThemeDarkInputAll,
        loadThemeDarkInputAndLabel: loadThemeDarkInputAndLabel,
        loadThemeDarkInputBoolean: loadThemeDarkInputBoolean,
        loadThemeDarkInputInteger: loadThemeDarkInputInteger,
        loadThemeDarkInputLabel: loadThemeDarkInputLabel,
        loadThemeDarkInputReal: loadThemeDarkInputReal,
        loadThemeDarkInputText: loadThemeDarkInputText,
        loadThemeDarkLayout: loadThemeDarkLayout,
        loadThemeDarkList: loadThemeDarkList,
        loadThemeDarkTree: loadThemeDarkTree,
        loadThemeDarkMenu: loadThemeDarkMenu,
        loadThemeDarkMenuBar: loadThemeDarkMenuBar,
        loadThemeDarkMenuSided: loadThemeDarkMenuSided,
        loadThemeDarkNote: loadThemeDarkNote,
        loadThemeDarkPagination: loadThemeDarkPagination,
        loadThemeDarkPane: loadThemeDarkPane,
        loadThemeDarkPickerColorGradient: loadThemeDarkPickerColorGradient,
        loadThemeDarkPickerColor: loadThemeDarkPickerColor,
        loadThemeDarkPickerDate: loadThemeDarkPickerDate,
        loadThemeDarkPickerDatetime: loadThemeDarkPickerDatetime,
        loadThemeDarkPickerTime: loadThemeDarkPickerTime,
        loadThemeDarkScrollBar: loadThemeDarkScrollBar,
        loadThemeDarkSelect: loadThemeDarkSelect,
        loadThemeDarkShapeActionValue: loadThemeDarkShapeActionValue,
        loadThemeDarkShape: loadThemeDarkShape,
        loadThemeDarkTable: loadThemeDarkTable,
        loadThemeDarkText: loadThemeDarkText,
        loadThemeDarkView: loadThemeDarkView,
        loadThemeDarkSlider: loadThemeDarkSlider,
        DThemeDarkAtlas: DThemeDarkAtlas,
        DThemeDarkBase: DThemeDarkBase,
        DThemeDarkBoard: DThemeDarkBoard,
        DThemeDarkButton: DThemeDarkButton,
        DThemeDarkButtonAmbient: DThemeDarkButtonAmbient,
        DThemeDarkButtonBase: DThemeDarkButtonBase,
        DThemeDarkButtonCheck: DThemeDarkButtonCheck,
        DThemeDarkButtonCheckRight: DThemeDarkButtonCheckRight,
        DThemeDarkButtonChecks: DThemeDarkButtonChecks,
        DThemeDarkButtonColor: DThemeDarkButtonColor,
        DThemeDarkButtonColorGradient: DThemeDarkButtonColorGradient,
        DThemeDarkButtonDanger: DThemeDarkButtonDanger,
        DThemeDarkButtonDate: DThemeDarkButtonDate,
        DThemeDarkButtonDatetime: DThemeDarkButtonDatetime,
        DThemeDarkButtonFile: DThemeDarkButtonFile,
        DThemeDarkButtonLink: DThemeDarkButtonLink,
        DThemeDarkButtonPrimary: DThemeDarkButtonPrimary,
        DThemeDarkButtonRadio: DThemeDarkButtonRadio,
        DThemeDarkButtonRadioRight: DThemeDarkButtonRadioRight,
        DThemeDarkButtonSecondary: DThemeDarkButtonSecondary,
        DThemeDarkButtonTime: DThemeDarkButtonTime,
        DThemeDarkCanvas: DThemeDarkCanvas,
        DThemeDarkCanvasContainer: DThemeDarkCanvasContainer,
        DThemeDarkChart: DThemeDarkChart,
        DThemeDarkChartAxisBase: DThemeDarkChartAxisBase,
        DThemeDarkChartAxisX: DThemeDarkChartAxisX,
        DThemeDarkChartAxisXDatetime: DThemeDarkChartAxisXDatetime,
        DThemeDarkChartAxisY: DThemeDarkChartAxisY,
        DThemeDarkChartCoordinateLinear: DThemeDarkChartCoordinateLinear,
        DThemeDarkChartCoordinateLog: DThemeDarkChartCoordinateLog,
        DThemeDarkChartLegend: DThemeDarkChartLegend,
        DThemeDarkChartLegendItem: DThemeDarkChartLegendItem,
        DThemeDarkChartOverview: DThemeDarkChartOverview,
        DThemeDarkChartPlotArea: DThemeDarkChartPlotArea,
        DThemeDarkContent: DThemeDarkContent,
        DThemeDarkDiagram: DThemeDarkDiagram,
        DThemeDarkDiagramBase: DThemeDarkDiagramBase,
        DThemeDarkDiagramCanvas: DThemeDarkDiagramCanvas,
        DThemeDarkDiagramCanvasBase: DThemeDarkDiagramCanvasBase,
        DThemeDarkDiagramCanvasEditor: DThemeDarkDiagramCanvasEditor,
        DThemeDarkDiagramEditor: DThemeDarkDiagramEditor,
        DThemeDarkDialog: DThemeDarkDialog,
        DThemeDarkDialogColor: DThemeDarkDialogColor,
        DThemeDarkDialogColorGradient: DThemeDarkDialogColorGradient,
        DThemeDarkDialogCommand: DThemeDarkDialogCommand,
        DThemeDarkDialogConfirm: DThemeDarkDialogConfirm,
        DThemeDarkDialogConfirmDelete: DThemeDarkDialogConfirmDelete,
        DThemeDarkDialogConfirmDiscard: DThemeDarkDialogConfirmDiscard,
        DThemeDarkDialogConfirmMessage: DThemeDarkDialogConfirmMessage,
        DThemeDarkDialogDate: DThemeDarkDialogDate,
        DThemeDarkDialogDatetime: DThemeDarkDialogDatetime,
        DThemeDarkDialogInputBoolean: DThemeDarkDialogInputBoolean,
        DThemeDarkDialogInputInteger: DThemeDarkDialogInputInteger,
        DThemeDarkDialogInputReal: DThemeDarkDialogInputReal,
        DThemeDarkDialogInputText: DThemeDarkDialogInputText,
        DThemeDarkDialogInput: DThemeDarkDialogInput,
        DThemeDarkDialogMessage: DThemeDarkDialogMessage,
        DThemeDarkDialogProcessing: DThemeDarkDialogProcessing,
        DThemeDarkDialogProcessingMessage: DThemeDarkDialogProcessingMessage,
        DThemeDarkDialogSaveAs: DThemeDarkDialogSaveAs,
        DThemeDarkDialogSelect: DThemeDarkDialogSelect,
        DThemeDarkDialogSelectList: DThemeDarkDialogSelectList,
        DThemeDarkDialogSelectListItem: DThemeDarkDialogSelectListItem,
        DThemeDarkDialogTime: DThemeDarkDialogTime,
        DThemeDarkDropdown: DThemeDarkDropdown,
        DThemeDarkFont: DThemeDarkFont,
        DThemeDarkHtmlElement: DThemeDarkHtmlElement,
        DThemeDarkImage: DThemeDarkImage,
        DThemeDarkImageBase: DThemeDarkImageBase,
        DThemeDarkInputAndLabel: DThemeDarkInputAndLabel,
        DThemeDarkInputBooleanButtonOff: DThemeDarkInputBooleanButtonOff,
        DThemeDarkInputBooleanButtonOn: DThemeDarkInputBooleanButtonOn,
        DThemeDarkInputBoolean: DThemeDarkInputBoolean,
        DThemeDarkInputInteger: DThemeDarkInputInteger,
        DThemeDarkInputLabel: DThemeDarkInputLabel,
        DThemeDarkInputNumber: DThemeDarkInputNumber,
        DThemeDarkInputReal: DThemeDarkInputReal,
        DThemeDarkInputText: DThemeDarkInputText,
        DThemeDarkInput: DThemeDarkInput,
        DThemeDarkLayoutHorizontal: DThemeDarkLayoutHorizontal,
        DThemeDarkLayoutSpace: DThemeDarkLayoutSpace,
        DThemeDarkLayoutVertical: DThemeDarkLayoutVertical,
        DThemeDarkLayout: DThemeDarkLayout,
        DThemeDarkExpandable: DThemeDarkExpandable,
        DThemeDarkExpandableHeader: DThemeDarkExpandableHeader,
        DThemeDarkList: DThemeDarkList,
        DThemeDarkListItem: DThemeDarkListItem,
        DThemeDarkListItemSeparator: DThemeDarkListItemSeparator,
        DThemeDarkTree: DThemeDarkTree,
        DThemeDarkTreeItem: DThemeDarkTreeItem,
        DThemeDarkTreeItemToggleIcon: DThemeDarkTreeItemToggleIcon,
        DThemeDarkTreeItemTextAndImage: DThemeDarkTreeItemTextAndImage,
        DThemeDarkMenu: DThemeDarkMenu,
        DThemeDarkMenuBar: DThemeDarkMenuBar,
        DThemeDarkMenuBarItem: DThemeDarkMenuBarItem,
        DThemeDarkMenuItemCheck: DThemeDarkMenuItemCheck,
        DThemeDarkMenuItemExpandableBody: DThemeDarkMenuItemExpandableBody,
        DThemeDarkMenuItemExpandableHeader: DThemeDarkMenuItemExpandableHeader,
        DThemeDarkMenuItemExpandableItemCheck: DThemeDarkMenuItemExpandableItemCheck,
        DThemeDarkMenuItemExpandableItemLink: DThemeDarkMenuItemExpandableItemLink,
        DThemeDarkMenuItemExpandableItemMenu: DThemeDarkMenuItemExpandableItemMenu,
        DThemeDarkMenuItemExpandableItemSeparator: DThemeDarkMenuItemExpandableItemSeparator,
        DThemeDarkMenuItemExpandableItemSpace: DThemeDarkMenuItemExpandableItemSpace,
        DThemeDarkMenuItemExpandableItemText: DThemeDarkMenuItemExpandableItemText,
        DThemeDarkMenuItemExpandable: DThemeDarkMenuItemExpandable,
        DThemeDarkMenuItemLink: DThemeDarkMenuItemLink,
        DThemeDarkMenuItemMenu: DThemeDarkMenuItemMenu,
        DThemeDarkMenuItemSeparator: DThemeDarkMenuItemSeparator,
        DThemeDarkMenuItemSpace: DThemeDarkMenuItemSpace,
        DThemeDarkMenuItemText: DThemeDarkMenuItemText,
        DThemeDarkMenuItem: DThemeDarkMenuItem,
        DThemeDarkMenuSided: DThemeDarkMenuSided,
        DThemeDarkMenuSidedContent: DThemeDarkMenuSidedContent,
        DThemeDarkMenuSidedItemCheck: DThemeDarkMenuSidedItemCheck,
        DThemeDarkMenuSidedItemExpandable: DThemeDarkMenuSidedItemExpandable,
        DThemeDarkMenuSidedItemExpandableItemCheck: DThemeDarkMenuSidedItemExpandableItemCheck,
        DThemeDarkMenuSidedItemExpandableItemLink: DThemeDarkMenuSidedItemExpandableItemLink,
        DThemeDarkMenuSidedItemExpandableItemMenu: DThemeDarkMenuSidedItemExpandableItemMenu,
        DThemeDarkMenuSidedItemExpandableItemSeparator: DThemeDarkMenuSidedItemExpandableItemSeparator,
        DThemeDarkMenuSidedItemExpandableItemSpace: DThemeDarkMenuSidedItemExpandableItemSpace,
        DThemeDarkMenuSidedItemExpandableItemText: DThemeDarkMenuSidedItemExpandableItemText,
        DThemeDarkMenuSidedItemLink: DThemeDarkMenuSidedItemLink,
        DThemeDarkMenuSidedItemMenu: DThemeDarkMenuSidedItemMenu,
        DThemeDarkMenuSidedItemSeparator: DThemeDarkMenuSidedItemSeparator,
        DThemeDarkMenuSidedItemSpace: DThemeDarkMenuSidedItemSpace,
        DThemeDarkMenuSidedItemText: DThemeDarkMenuSidedItemText,
        DThemeDarkNote: DThemeDarkNote,
        DThemeDarkPagination: DThemeDarkPagination,
        DThemeDarkPaginationNavigationButton: DThemeDarkPaginationNavigationButton,
        DThemeDarkPaginationDynamicButtons: DThemeDarkPaginationDynamicButtons,
        DThemeDarkPaginationDotsButton: DThemeDarkPaginationDotsButton,
        DThemeDarkPane: DThemeDarkPane,
        DThemeDarkPickerColor: DThemeDarkPickerColor,
        DThemeDarkPickerColorGradient: DThemeDarkPickerColorGradient,
        DThemeDarkPickerDate: DThemeDarkPickerDate,
        DThemeDarkPickerDatetimeButtonBack: DThemeDarkPickerDatetimeButtonBack,
        DThemeDarkPickerDatetimeButtonDate: DThemeDarkPickerDatetimeButtonDate,
        DThemeDarkPickerDatetimeButtonNext: DThemeDarkPickerDatetimeButtonNext,
        DThemeDarkPickerDatetimeLabel: DThemeDarkPickerDatetimeLabel,
        DThemeDarkPickerDatetimeLabelDate: DThemeDarkPickerDatetimeLabelDate,
        DThemeDarkPickerDatetimeSpace: DThemeDarkPickerDatetimeSpace,
        DThemeDarkPickerDatetime: DThemeDarkPickerDatetime,
        DThemeDarkPickerTime: DThemeDarkPickerTime,
        DThemeDarkScrollBar: DThemeDarkScrollBar,
        DThemeDarkScrollBarThumb: DThemeDarkScrollBarThumb,
        DThemeDarkSelectMultiple: DThemeDarkSelectMultiple,
        DThemeDarkSelect: DThemeDarkSelect,
        DThemeDarkSlider: DThemeDarkSlider,
        DThemeDarkSliderHorizontal: DThemeDarkSliderHorizontal,
        DThemeDarkSliderLabel: DThemeDarkSliderLabel,
        DThemeDarkSliderThumb: DThemeDarkSliderThumb,
        DThemeDarkSliderTrack: DThemeDarkSliderTrack,
        DThemeDarkSliderTrackHorizontal: DThemeDarkSliderTrackHorizontal,
        DThemeDarkSliderTrackVertical: DThemeDarkSliderTrackVertical,
        DThemeDarkSliderValue: DThemeDarkSliderValue,
        DThemeDarkSliderVertical: DThemeDarkSliderVertical,
        DThemeDarkTable: DThemeDarkTable,
        DThemeDarkTableBodyCellButton: DThemeDarkTableBodyCellButton,
        DThemeDarkTableBodyCellCheck: DThemeDarkTableBodyCellCheck,
        DThemeDarkTableBodyCellColor: DThemeDarkTableBodyCellColor,
        DThemeDarkTableBodyCellDate: DThemeDarkTableBodyCellDate,
        DThemeDarkTableBodyCellDatetime: DThemeDarkTableBodyCellDatetime,
        DThemeDarkTableBodyCellIndex: DThemeDarkTableBodyCellIndex,
        DThemeDarkTableBodyCellInputInteger: DThemeDarkTableBodyCellInputInteger,
        DThemeDarkTableBodyCellInputReal: DThemeDarkTableBodyCellInputReal,
        DThemeDarkTableBodyCellInputText: DThemeDarkTableBodyCellInputText,
        DThemeDarkTableBodyCellLink: DThemeDarkTableBodyCellLink,
        DThemeDarkTableBodyCellSelectDialog: DThemeDarkTableBodyCellSelectDialog,
        DThemeDarkTableBodyCellSelectMenu: DThemeDarkTableBodyCellSelectMenu,
        DThemeDarkTableBodyCellSelectPromise: DThemeDarkTableBodyCellSelectPromise,
        DThemeDarkTableBodyCellText: DThemeDarkTableBodyCellText,
        DThemeDarkTableBodyCellTime: DThemeDarkTableBodyCellTime,
        DThemeDarkTableBodyCells: DThemeDarkTableBodyCells,
        DThemeDarkTableBodyRow: DThemeDarkTableBodyRow,
        DThemeDarkTableBody: DThemeDarkTableBody,
        DThemeDarkTableCategory: DThemeDarkTableCategory,
        DThemeDarkTableCategoryCell: DThemeDarkTableCategoryCell,
        DThemeDarkTableHeader: DThemeDarkTableHeader,
        DThemeDarkTableHeaderCell: DThemeDarkTableHeaderCell,
        DThemeDarkTableRow: DThemeDarkTableRow,
        DThemeDarkText: DThemeDarkText,
        DThemeDarkTextBase: DThemeDarkTextBase,
        DThemeDarkView: DThemeDarkView,
        DThemeDark: DThemeDark,
        EThemeDarkShapeActionValue: EThemeDarkShapeActionValue,
        EThemeDarkShape: EThemeDarkShape
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    loadThemeDarkAll();
    var global = window;
    global.wcardinal = global.wcardinal || {};
    var dest = global.wcardinal.ui = global.wcardinal.ui || {};
    var src = dark;
    for (var name_1 in src) {
        dest[name_1] = src[name_1];
    }

}());
