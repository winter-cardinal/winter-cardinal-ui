/*
 Winter Cardinal UI v0.452.0
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
    const DThemeDarkAtlas = new UtilSvgAtlasBuilder({
        width: 1024,
        scaling: pixi_js.SCALE_MODES.LINEAR,
        mipmap: pixi_js.MIPMAP_MODES.OFF
    });

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDark {
        constructor() {
            this._instances = {};
        }
        get(type) {
            let instance = this._instances[type];
            if (instance != null) {
                return instance;
            }
            else {
                const klass = DThemeDark._classes[type];
                if (klass != null) {
                    instance = this._instances[type] = new klass();
                    return instance;
                }
                else {
                    throw new Error(`No theme for the type '${type}'`);
                }
            }
        }
        set(type, instance) {
            this._instances[type] = instance;
            return this;
        }
        getClass(type) {
            const result = DThemeDark._classes[type];
            if (result != null) {
                return result;
            }
            else {
                throw new Error(`No theme for the type '${type}'`);
            }
        }
        setClass(type, themeClass) {
            DThemeDark._classes[type] = themeClass;
            return this;
        }
        getAtlas() {
            return DThemeDarkAtlas;
        }
        static set(type, themeClass) {
            this._classes[type] = themeClass;
        }
    }
    DThemeDark._classes = {};

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
    class DThemeDarkConstants {
    }
    DThemeDarkConstants.COLOR = 0xcccccc;
    DThemeDarkConstants.ACTIVE_COLOR = 0x000000;
    DThemeDarkConstants.BORDER_COLOR = 0x4a4a4a;
    DThemeDarkConstants.BACKGROUND_COLOR = 0x2e2e2e;
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

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkFont {
        getFontFamilly() {
            return `"Helvetica Neue","Helvetica","Hiragino Sans","Hiragino Kaku Gothic ProN","BIZ UDPGothic","Arial","Yu Gothic UI","Meiryo UI",sans-serif`;
        }
        getFontSize() {
            return 14;
        }
        getColor(state) {
            return DThemeDarkConstants.COLOR;
        }
        getFontWeight() {
            return "normal";
        }
        getFontStyle() {
            return "normal";
        }
        getFontVariant() {
            return "normal";
        }
        getAlpha(state) {
            if (state.inDisabled) {
                return 0.5;
            }
            return 1.0;
        }
        getLineHeight() {
            return 30;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const newShadow = (id, radius, opacity) => {
        const d = radius * 2;
        /* eslint-disable prettier/prettier */
        DThemeDarkAtlas.add(id, d, d, `<g>` +
            `<defs>` +
            `<radialGradient id="${id}_filter">` +
            `<stop   offset="0%" stop-color="black" stop-opacity="${opacity * 0.368}" />` +
            `<stop  offset="30%" stop-color="black" stop-opacity="${opacity * 0.368}" />` +
            `<stop  offset="37%" stop-color="black" stop-opacity="${opacity * 0.368}" />` +
            `<stop  offset="44%" stop-color="black" stop-opacity="${opacity * 0.368}" />` + // Math.exp(-(p-30)/14)
            `<stop  offset="51%" stop-color="black" stop-opacity="${opacity * 0.223}" />` +
            `<stop  offset="58%" stop-color="black" stop-opacity="${opacity * 0.135}" />` +
            `<stop  offset="65%" stop-color="black" stop-opacity="${opacity * 0.082}" />` +
            `<stop  offset="72%" stop-color="black" stop-opacity="${opacity * 0.050}" />` +
            `<stop  offset="79%" stop-color="black" stop-opacity="${opacity * 0.030}" />` +
            `<stop  offset="86%" stop-color="black" stop-opacity="${opacity * 0.018}" />` +
            `<stop  offset="93%" stop-color="black" stop-opacity="${opacity * 0.011}" />` +
            `<stop offset="100%" stop-color="black" stop-opacity="0" />` +
            `</radialGradient>` +
            `</defs>` +
            `<rect x="0" y="0" width="${d}" height="${d}" fill="url(#${id}_filter)"/>` +
            `</g>`);
        /* eslint-enable prettier/prettier */
    };
    newShadow("shadow_weak", 24, 0.72);
    newShadow("shadow", 48, 0.72);
    /* eslint-disable prettier/prettier */
    DThemeDarkAtlas.add("background", 16, 16, `<g>` +
        `<defs>` +
        `<radialGradient id="background_filter">` +
        `<stop offset="25%" stop-color="white" stop-opacity="1" />` +
        `<stop offset="75%" stop-color="white" stop-opacity="0.25" />` +
        `</radialGradient>` +
        `</defs>` +
        `<rect x="0" y="0" width="16" height="16" fill="url(#background_filter)"/>` +
        `</g>`);
    /* eslint-enable prettier/prettier */
    class DThemeDarkBase extends DThemeDarkFont {
        getX() {
            return 0;
        }
        getY() {
            return 0;
        }
        getHeight() {
            return 100;
        }
        getWidth() {
            return 100;
        }
        getBackgroundColor(state) {
            return null;
        }
        getBackgroundAlpha(state) {
            return 1;
        }
        getBackgroundTexture() {
            return DThemeDarkAtlas.mappings.background;
        }
        getBorderColor(state) {
            return null;
        }
        getBorderAlpha(state) {
            return 1;
        }
        getBorderWidth(state) {
            return 1;
        }
        getBorderAlign(state) {
            return 0;
        }
        getBorderMask(state) {
            return DBorderMask.NONE;
        }
        getBorderTexture() {
            return DThemeDarkAtlas.mappings.background;
        }
        getPaddingLeft() {
            return 0;
        }
        getPaddingRight() {
            return 0;
        }
        getPaddingTop() {
            return 0;
        }
        getPaddingBottom() {
            return 0;
        }
        getCornerRadius() {
            return 3;
        }
        getCornerMask() {
            return DCornerMask.NONE;
        }
        getOutlineColor(state) {
            return DThemeDarkConstants.HIGHLIGHT_COLOR;
        }
        getOutlineAlpha(state) {
            if (state.isFocused) {
                return 1;
            }
            return 0;
        }
        getOutlineWidth(state) {
            return 1;
        }
        getOutlineOffset(state) {
            return 0;
        }
        getOutlineAlign(state) {
            return 0;
        }
        getOutlineMask(state) {
            return DBorderMask.NONE;
        }
        getClearType() {
            return DLayoutClearType.NONE;
        }
        getShadow() {
            return null;
        }
        getInteractive() {
            return DBaseInteractive.SELF;
        }
        newState(state) {
            // DO NOTHING
        }
        getTitle() {
            return "";
        }
        getWeight() {
            return -1;
        }
        newShadow() {
            return new DShadowImpl(DThemeDarkAtlas.mappings.shadow, 48, 48, 0, 4.8);
        }
        newShadowWeak() {
            return new DShadowImpl(DThemeDarkAtlas.mappings.shadow_weak, 24, 24, 0, 2.4);
        }
        getCursor(state) {
            return "";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkBase = () => {
        DThemeDark.set("DBase", DThemeDarkBase);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkBoard extends DThemeDarkBase {
        constructor() {
            super(...arguments);
            this.COLOR = 0x2c2c2c;
        }
        getBackgroundColor() {
            return this.COLOR;
        }
        getBorderColor(state) {
            return null;
        }
        getCornerMask() {
            return DCornerMask.ALL;
        }
        getPaddingLeft() {
            return 16;
        }
        getPaddingTop() {
            return 16;
        }
        getPaddingRight() {
            return 16;
        }
        getPaddingBottom() {
            return 16;
        }
        getInteractive() {
            return DBaseInteractive.BOTH;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkBoard = () => {
        DThemeDark.set("DBoard", DThemeDarkBoard);
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
    class DThemeDarkTextBase extends DThemeDarkBase {
        getTextAlignVertical() {
            return DAlignVertical.MIDDLE;
        }
        getTextAlignHorizontal() {
            return DAlignHorizontal.LEFT;
        }
        isOverflowMaskEnabled() {
            return false;
        }
        getTextStyleClipping() {
            return true;
        }
        getTextStyleFitting() {
            return false;
        }
        getTextStyleWordWrap() {
            return DDynamicTextStyleWordWrap.NONE;
        }
        getTextFormatter() {
            return toString;
        }
        getTextValue(state) {
            return undefined;
        }
        newTextValue() {
            return undefined;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkImageBase extends DThemeDarkTextBase {
        getImageAlignHorizontal() {
            return DAlignHorizontal.LEFT;
        }
        getImageAlignVertical() {
            return DAlignVertical.MIDDLE;
        }
        getImageAlignWith() {
            return DAlignWith.TEXT;
        }
        getImageMarginHorizontal() {
            return 5;
        }
        getImageMarginVertial() {
            return 5;
        }
        getImageTintColor(state) {
            return this.getColor(state);
        }
        getImageTintAlpha(state) {
            return this.getAlpha(state);
        }
        getImageRotation(state) {
            return 0;
        }
        getImageSource(state) {
            return null;
        }
        getSecondaryImageAlignHorizontal() {
            return this.getImageAlignHorizontal();
        }
        getSecondaryImageAlignVertical() {
            return this.getImageAlignVertical();
        }
        getSecondaryImageAlignWith() {
            return this.getImageAlignWith();
        }
        getSecondaryImageMarginHorizontal() {
            return this.getImageMarginHorizontal();
        }
        getSecondaryImageMarginVertial() {
            return this.getImageMarginVertial();
        }
        getSecondaryImageTintColor(state) {
            return this.getImageTintColor(state);
        }
        getSecondaryImageTintAlpha(state) {
            return this.getImageTintAlpha(state);
        }
        getSecondaryImageRotation(state) {
            return this.getImageRotation(state);
        }
        getTertiaryImageAlignHorizontal() {
            return this.getImageAlignHorizontal();
        }
        getTertiaryImageAlignVertical() {
            return this.getImageAlignVertical();
        }
        getTertiaryImageAlignWith() {
            return this.getImageAlignWith();
        }
        getTertiaryImageMarginHorizontal() {
            return this.getImageMarginHorizontal();
        }
        getTertiaryImageMarginVertial() {
            return this.getImageMarginVertial();
        }
        getTertiaryImageTintColor(state) {
            return this.getImageTintColor(state);
        }
        getTertiaryImageTintAlpha(state) {
            return this.getImageTintAlpha(state);
        }
        getTertiaryImageRotation(state) {
            return this.getImageRotation(state);
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkButtonBase extends DThemeDarkImageBase {
        constructor(backgroundColor = 0x484848, hover = 0.017, pressed = 0.034) {
            super();
            this.BACKGROUND_COLOR = backgroundColor;
            this.BACKGROUND_COLOR_HOVERED = UtilRgb.brighten(backgroundColor, hover);
            this.BACKGROUND_COLOR_PRESSED = UtilRgb.brighten(backgroundColor, pressed);
            this.OUTLINE_COLOR = UtilRgb.darken(backgroundColor, 0.75);
        }
        getBackgroundColor(state) {
            if (state.inDisabled) {
                return null;
            }
            else if (state.isActive) {
                return DThemeDarkConstants.HIGHLIGHT_COLOR;
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
        }
        getColor(state) {
            if (state.inDisabled || !state.isActive) {
                return super.getColor(state);
            }
            else {
                return DThemeDarkConstants.ACTIVE_COLOR;
            }
        }
        getBorderColor(state) {
            if (state.inDisabled) {
                return DThemeDarkConstants.BORDER_COLOR;
            }
            else {
                return null;
            }
        }
        getOutlineColor(state) {
            if (state.isActive) {
                return this.getOutlineColorActive(state);
            }
            return this.getOutlineColorNonActive(state);
        }
        getOutlineColorActive(state) {
            return this.OUTLINE_COLOR;
        }
        getOutlineColorNonActive(state) {
            return super.getOutlineColor(state);
        }
        getOutlineOffset(state) {
            if (state.isActive) {
                return this.getOutlineOffsetActive(state);
            }
            return this.getOutlineOffsetNonActive(state);
        }
        getOutlineOffsetActive(state) {
            return -1;
        }
        getOutlineOffsetNonActive(state) {
            return super.getOutlineOffset(state);
        }
        getHeight() {
            return 30;
        }
        getWidth() {
            return 100;
        }
        getTextAlignHorizontal() {
            return DAlignHorizontal.CENTER;
        }
        getPaddingLeft() {
            return 10;
        }
        getPaddingRight() {
            return 10;
        }
        isToggle() {
            return false;
        }
        getWhen() {
            return DButtonBaseWhen.CLICKED;
        }
        getCursor(state) {
            if (!state.isActionable) {
                return "";
            }
            return "pointer";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkButtonAmbient extends DThemeDarkButtonBase {
        getBackgroundColor(state) {
            if (state.isActive) {
                return DThemeDarkConstants.HIGHLIGHT_COLOR;
            }
            else {
                return DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR;
            }
        }
        getBackgroundAlpha(state) {
            if (state.inEnabled) {
                if (state.isActive) {
                    return 1.0;
                }
                else if (state.isPressed) {
                    return DThemeDarkConstants.WEAK_HIGHLIGHT_ALPHA * 2;
                }
                else if (state.isHovered) {
                    return DThemeDarkConstants.WEAK_HIGHLIGHT_ALPHA;
                }
            }
            return 0;
        }
        getBorderColor(state) {
            return null;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkButtonAmbient = () => {
        DThemeDark.set("DButtonAmbient", DThemeDarkButtonAmbient);
    };

    // Material Design icons by Google.
    // Apache license version 2.0.
    /* eslint-disable prettier/prettier */
    DThemeDarkAtlas.add("button_check_mark_on", 21, 21, `<g transform="scale(0.875,0.875)">` +
        `<path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89` +
        `-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#fff" />` +
        `</g>`);
    DThemeDarkAtlas.add("button_check_mark_off", 21, 21, `<g transform="scale(0.875,0.875)">` +
        `<path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" ` +
        `fill="#fff" />` +
        `</g>`);
    /* eslint-enable prettier/prettier */
    class DThemeDarkButtonChecks {
        static getImageTintColor(state) {
            if (state.inDisabled || state.inReadOnly || !state.isActive) {
                return DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR;
            }
            else {
                return DThemeDarkConstants.HIGHLIGHT_COLOR;
            }
        }
        static getImageSource(state) {
            if (state.isActive) {
                return DThemeDarkAtlas.mappings.button_check_mark_on;
            }
            else {
                return DThemeDarkAtlas.mappings.button_check_mark_off;
            }
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkButtonCheck extends DThemeDarkButtonAmbient {
        getBackgroundColor(state) {
            return DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR;
        }
        getColor(state) {
            return DThemeDarkConstants.COLOR;
        }
        getBackgroundAlpha(state) {
            if (state.inEnabled) {
                if (state.isHovered) {
                    return DThemeDarkConstants.WEAK_HIGHLIGHT_ALPHA;
                }
            }
            return 0;
        }
        getOutlineColor(state) {
            return this.getOutlineColorNonActive(state);
        }
        getOutlineOffset(state) {
            return this.getOutlineOffsetNonActive(state);
        }
        getImageTintColor(state) {
            return DThemeDarkButtonChecks.getImageTintColor(state);
        }
        isToggle() {
            return true;
        }
        getImageSource(state) {
            return DThemeDarkButtonChecks.getImageSource(state);
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkButtonCheckRight extends DThemeDarkButtonCheck {
        getImageAlignWith() {
            return DAlignWith.PADDING;
        }
        getImageAlignHorizontal() {
            return DAlignHorizontal.RIGHT;
        }
        getImageMarginHorizontal() {
            return 0;
        }
        getTextAlignHorizontal() {
            return DAlignHorizontal.LEFT;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkButtonCheckRight = () => {
        DThemeDark.set("DButtonCheckRight", DThemeDarkButtonCheckRight);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkButtonCheck = () => {
        DThemeDark.set("DButtonCheck", DThemeDarkButtonCheck);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkButtonDanger extends DThemeDarkButtonBase {
        constructor() {
            super(0xef9a9a, 0.1, 0.2);
        }
        getBackgroundColor(state) {
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
        }
        getOutlineColor(state) {
            return this.getOutlineColorActive(state);
        }
        getOutlineOffset(state) {
            return this.getOutlineOffsetActive(state);
        }
        getColor(state) {
            if (state.inDisabled) {
                return super.getColor(state);
            }
            else {
                return DThemeDarkConstants.ACTIVE_COLOR;
            }
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkButtonDanger = () => {
        DThemeDark.set("DButtonDanger", DThemeDarkButtonDanger);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkButton extends DThemeDarkButtonBase {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkButtonFile extends DThemeDarkButton {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkButtonFile = () => {
        DThemeDark.set("DButtonFile", DThemeDarkButtonFile);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkButtonLink extends DThemeDarkButtonAmbient {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkButtonLink = () => {
        DThemeDark.set("DButtonLink", DThemeDarkButtonLink);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkButtonPrimary extends DThemeDarkButtonBase {
        constructor() {
            super(DThemeDarkConstants.HIGHLIGHT_COLOR, 0.1, 0.2);
        }
        getBackgroundColor(state) {
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
        }
        getOutlineColor(state) {
            return this.getOutlineColorActive(state);
        }
        getOutlineOffset(state) {
            return this.getOutlineOffsetActive(state);
        }
        getColor(state) {
            if (state.inDisabled) {
                return super.getColor(state);
            }
            else {
                return DThemeDarkConstants.ACTIVE_COLOR;
            }
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkButtonPrimary = () => {
        DThemeDark.set("DButtonPrimary", DThemeDarkButtonPrimary);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    // Material Design icons by Google.
    // Apache license version 2.0.
    /* eslint-disable prettier/prettier */
    DThemeDarkAtlas.add("button_radio_mark_on", 21, 21, `<g transform="scale(0.875,0.875)">` +
        `<path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48` +
        ` 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8` +
        ` 8 3.58 8 8-3.58 8-8 8z" fill="#fff" />` +
        `</g>`);
    DThemeDarkAtlas.add("button_radio_mark_off", 21, 21, `<g transform="scale(0.875,0.875)">` +
        `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42` +
        ` 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="#fff" />` +
        `</g>`);
    /* eslint-enable prettier/prettier */
    class DThemeDarkButtonRadio extends DThemeDarkButtonAmbient {
        getBackgroundColor(state) {
            return DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR;
        }
        getColor(state) {
            return DThemeDarkConstants.COLOR;
        }
        getBackgroundAlpha(state) {
            if (state.inEnabled) {
                if (state.isHovered) {
                    return DThemeDarkConstants.WEAK_HIGHLIGHT_ALPHA;
                }
            }
            return 0;
        }
        getOutlineColor(state) {
            return this.getOutlineColorNonActive(state);
        }
        getOutlineOffset(state) {
            return this.getOutlineOffsetNonActive(state);
        }
        getImageTintColor(state) {
            if (state.inDisabled || !state.isActive) {
                return DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR;
            }
            else {
                return DThemeDarkConstants.HIGHLIGHT_COLOR;
            }
        }
        isToggle() {
            return true;
        }
        getImageSource(state) {
            if (state.isActive) {
                return DThemeDarkAtlas.mappings.button_radio_mark_on;
            }
            else {
                return DThemeDarkAtlas.mappings.button_radio_mark_off;
            }
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkButtonRadioRight extends DThemeDarkButtonRadio {
        getImageAlignWith() {
            return DAlignWith.PADDING;
        }
        getImageAlignHorizontal() {
            return DAlignHorizontal.RIGHT;
        }
        getImageMarginHorizontal() {
            return 0;
        }
        getTextAlignHorizontal() {
            return DAlignHorizontal.LEFT;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkButtonRadioRight = () => {
        DThemeDark.set("DButtonRadioRight", DThemeDarkButtonRadioRight);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkButtonRadio = () => {
        DThemeDark.set("DButtonRadio", DThemeDarkButtonRadio);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkButtonSecondary extends DThemeDarkButtonBase {
        constructor() {
            super(0xb894f6, 0.1, 0.2);
        }
        getBackgroundColor(state) {
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
        }
        getOutlineColor(state) {
            return this.getOutlineColorActive(state);
        }
        getOutlineOffset(state) {
            return this.getOutlineOffsetActive(state);
        }
        getColor(state) {
            if (state.inDisabled) {
                return super.getColor(state);
            }
            else {
                return 0x000000;
            }
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkButtonSecondary = () => {
        DThemeDark.set("DButtonSecondary", DThemeDarkButtonSecondary);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkButton = () => {
        DThemeDark.set("DButton", DThemeDarkButton);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkCanvas extends DThemeDarkBase {
        getBackgroundColor() {
            return 0x484848;
        }
        getBorderColor(state) {
            return null;
        }
        getCornerMask() {
            return DCornerMask.ALL;
        }
        getInteractive() {
            return DBaseInteractive.BOTH;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkCanvasContainer extends DThemeDarkBase {
        getBackgroundColor(state) {
            return null;
        }
        getBorderColor(state) {
            return null;
        }
        getPaddingLeft() {
            return 32;
        }
        getPaddingTop() {
            return 32;
        }
        getPaddingRight() {
            return 32;
        }
        getPaddingBottom() {
            return 32;
        }
        isOverflowMaskEnabled() {
            return false;
        }
        getInteractive() {
            return DBaseInteractive.BOTH;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkCanvasContainer = () => {
        DThemeDark.set("DCanvasContainer", DThemeDarkCanvasContainer);
        DThemeDark.set("DCanvas", DThemeDarkCanvas);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkChart extends DThemeDarkBase {
        getPaddingLeft() {
            return 80;
        }
        getPaddingRight() {
            return 10;
        }
        getPaddingTop() {
            return 10;
        }
        getPaddingBottom() {
            return 70;
        }
        getBorderColor(state) {
            return null;
        }
        getInteractive() {
            return DBaseInteractive.BOTH;
        }
        isOverflowMaskEnabled() {
            return true;
        }
        newState(state) {
            super.newState(state);
            state.isFocusable = false;
        }
    }

    const DChartAxisPosition = wcardinal.ui.DChartAxisPosition;

    const DChartAxisTickPosition = wcardinal.ui.DChartAxisTickPosition;

    const EShapeTextAlignHorizontal = wcardinal.ui.EShapeTextAlignHorizontal;

    const EShapeTextAlignVertical = wcardinal.ui.EShapeTextAlignVertical;

    const EShapeTextDirection = wcardinal.ui.EShapeTextDirection;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkChartAxisBase {
        getPosition() {
            return DChartAxisPosition.BOTTOM;
        }
        getPadding() {
            return 75;
        }
        getLabelAlignHorizontal(position) {
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
        }
        getLabelAlignVertical(position) {
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
        }
        getLabelPaddingHorizontal() {
            return 60;
        }
        getLabelPaddingVertical() {
            return 50;
        }
        getLabelDirection() {
            return EShapeTextDirection.LEFT_TO_RIGHT;
        }
        getLabelColor() {
            return this.getStrokeColor();
        }
        getStyle() {
            return undefined;
        }
        getStrokeEnable() {
            return true;
        }
        getStrokeColor() {
            return undefined;
        }
        getStrokeAlpha() {
            return undefined;
        }
        getStrokeWidth() {
            return undefined;
        }
        getStrokeAlign() {
            return undefined;
        }
        getStrokeSide() {
            return undefined;
        }
        getStrokeStyle() {
            return undefined;
        }
        getTickEnable() {
            return true;
        }
        getMajorTickCount() {
            return 3;
        }
        getMajorTickCapacity(count) {
            return count * 2;
        }
        getMajorTickStep() {
            return undefined;
        }
        getMajorTickSize() {
            return 10;
        }
        getMajorTickPosition() {
            return DChartAxisTickPosition.OUTSIDE;
        }
        getMajorTickStyle() {
            return undefined;
        }
        getMajorTickTextAlignHorizontal(position) {
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
        }
        getMajorTickTextAlignVertical(position) {
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
        }
        getMajorTickTextDirection() {
            return EShapeTextDirection.LEFT_TO_RIGHT;
        }
        getMajorTickTextColor() {
            return this.getStrokeColor();
        }
        getMajorTickTextFormat() {
            return "%.2f";
        }
        getMajorTickTextPaddingHorizontal() {
            return 15;
        }
        getMajorTickTextPaddingVertical() {
            return 15;
        }
        getMajorTickStrokeEnable() {
            return true;
        }
        getMajorTickStrokeColor() {
            return this.getStrokeColor();
        }
        getMajorTickStrokeAlpha() {
            return this.getStrokeAlpha();
        }
        getMajorTickStrokeWidth() {
            return this.getStrokeWidth();
        }
        getMajorTickStrokeAlign() {
            return this.getStrokeAlign();
        }
        getMajorTickStrokeSide() {
            return this.getStrokeSide();
        }
        getMajorTickStrokeStyle() {
            return this.getStrokeStyle();
        }
        getMajorTickGridlineEnable() {
            return true;
        }
        getMajorTickGridlineStyle() {
            return undefined;
        }
        getMajorTickGridlineStrokeEnable() {
            return true;
        }
        getMajorTickGridlineStrokeColor() {
            return this.getStrokeColor();
        }
        getMajorTickGridlineStrokeAlpha() {
            return 0.1;
        }
        getMajorTickGridlineStrokeWidth() {
            return this.getStrokeWidth();
        }
        getMajorTickGridlineStrokeAlign() {
            return this.getStrokeAlign();
        }
        getMajorTickGridlineStrokeSide() {
            return this.getStrokeSide();
        }
        getMajorTickGridlineStrokeStyle() {
            return this.getStrokeStyle();
        }
        getMinorTickCount() {
            return 3;
        }
        getMinorTickStep() {
            return undefined;
        }
        getMinorTickSize() {
            return 5;
        }
        getMinorTickPosition() {
            return DChartAxisTickPosition.OUTSIDE;
        }
        getMinorTickStyle() {
            return undefined;
        }
        getMinorTickTextAlignHorizontal(position) {
            return this.getMajorTickTextAlignHorizontal(position);
        }
        getMinorTickTextAlignVertical(position) {
            return this.getMajorTickTextAlignVertical(position);
        }
        getMinorTickTextDirection() {
            return this.getMajorTickTextDirection();
        }
        getMinorTickTextColor() {
            return this.getStrokeColor();
        }
        getMinorTickTextFormat() {
            return undefined;
        }
        getMinorTickTextPaddingHorizontal() {
            return this.getMajorTickTextPaddingHorizontal();
        }
        getMinorTickTextPaddingVertical() {
            return this.getMajorTickTextPaddingVertical();
        }
        getMinorTickStrokeEnable() {
            return true;
        }
        getMinorTickStrokeColor() {
            return this.getStrokeColor();
        }
        getMinorTickStrokeAlpha() {
            return this.getStrokeAlpha();
        }
        getMinorTickStrokeWidth() {
            return this.getStrokeWidth();
        }
        getMinorTickStrokeAlign() {
            return this.getStrokeAlign();
        }
        getMinorTickStrokeSide() {
            return this.getStrokeSide();
        }
        getMinorTickStrokeStyle() {
            return this.getStrokeStyle();
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkChartAxisX extends DThemeDarkChartAxisBase {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const STEP_FUNCTION = (domainMin, domainMax, majorCount) => {
        const span = Math.abs(domainMax - domainMin) / majorCount;
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
            const minutes = 3600000;
            const hours = span / minutes;
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
                const days = hours / 24;
                const base = Math.pow(10, Math.floor(Math.log(days) / Math.LN10));
                const scale = days / base;
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
    class DThemeDarkChartAxisXDatetime extends DThemeDarkChartAxisX {
        getMajorTickTextFormat() {
            return "%YMD\n%Hms";
        }
        getMajorTickStep() {
            return STEP_FUNCTION;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkChartAxisY extends DThemeDarkChartAxisBase {
        getPosition() {
            return DChartAxisPosition.LEFT;
        }
        getLabelDirection() {
            return EShapeTextDirection.BOTTOM_TO_TOP;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkChartCoordinate {
        isZero(value) {
            return Math.abs(value) < Number.EPSILON;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkChartCoordinateTick {
        toStep(domainMin, domainMax, majorCount) {
            const span = Math.abs(domainMax - domainMin) / majorCount;
            const power = Math.floor(Math.log(span) / Math.LN10);
            const base = Math.pow(10, power);
            const scale = span / base;
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
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkChartCoordinateTransform {
        isZero(value) {
            return Math.abs(value) < Number.EPSILON;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkChartLegend extends DThemeDarkBase {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkChartLegendItem extends DThemeDarkBase {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkChartOverview extends DThemeDarkBase {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkChartPlotArea extends DThemeDarkBase {
        getX() {
            return "padding";
        }
        getY() {
            return "padding";
        }
        getWidth() {
            return "padding";
        }
        getHeight() {
            return "padding";
        }
        getPaddingTop() {
            return 10;
        }
        getPaddingRight() {
            return 10;
        }
        getPaddingBottom() {
            return 10;
        }
        getPaddingLeft() {
            return 10;
        }
        getBorderColor(state) {
            return null;
        }
        getCornerMask() {
            return DCornerMask.ALL;
        }
        isOverflowMaskEnabled() {
            return true;
        }
        getMargin() {
            return 20;
        }
    }

    const EShapeStrokeStyle = wcardinal.ui.EShapeStrokeStyle;

    const EShapeBar = wcardinal.ui.EShapeBar;

    const EShapeBarPosition = wcardinal.ui.EShapeBarPosition;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkChartSelectionShape {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkChartSelectionGridlineX extends DThemeDarkChartSelectionShape {
        isEnabled(state) {
            return state.isHovered;
        }
        newShape(state) {
            const result = new EShapeBar();
            result.points.position = EShapeBarPosition.TOP;
            result.stroke.style = EShapeStrokeStyle.DASHED;
            result.stroke.alpha = 0.75;
            return result;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkChartSelectionGridlineY extends DThemeDarkChartSelectionShape {
        isEnabled(state) {
            return state.isHovered;
        }
        newShape(state) {
            const result = new EShapeBar();
            result.points.position = EShapeBarPosition.LEFT;
            result.stroke.style = EShapeStrokeStyle.DASHED;
            result.stroke.alpha = 0.75;
            return result;
        }
    }

    const EShapeCircle = wcardinal.ui.EShapeCircle;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkChartSelectionMarker extends DThemeDarkChartSelectionShape {
        isEnabled(state) {
            return state.isActive;
        }
        newShape(state) {
            const result = new EShapeCircle();
            result.size.set(14, 14);
            result.fill.enable = false;
            result.stroke.alpha = 0.75;
            return result;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkChart = () => {
        DThemeDark.set("DChart", DThemeDarkChart);
        DThemeDark.set("DChartAxisX", DThemeDarkChartAxisX);
        DThemeDark.set("DChartAxisXDatetime", DThemeDarkChartAxisXDatetime);
        DThemeDark.set("DChartAxisY", DThemeDarkChartAxisY);
        DThemeDark.set("DChartCoordinate", DThemeDarkChartCoordinate);
        DThemeDark.set("DChartCoordinateTick", DThemeDarkChartCoordinateTick);
        DThemeDark.set("DChartCoordinateTransform", DThemeDarkChartCoordinateTransform);
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
    class DThemeDarkColorRecent {
        getCapacity() {
            return 10;
        }
        newColors() {
            return [];
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkColorStandard {
        newColors() {
            const result = [
                0x000000, 0x434343, 0x666666, 0x999999, 0xb7b7b7, 0xcccccc, 0xd9d9d9, 0xefefef,
                0xf3f3f3, 0xffffff, 0xc00000, 0xff0000, 0xffc000, 0xffff00, 0x92d050, 0x00b050,
                0x00b0f0, 0x0070c0, 0x002060, 0x7030a0
            ];
            for (let i = 10; i < 20; ++i) {
                result.push(UtilRgb.brighten(result[i], 0.75));
            }
            for (let i = 10; i < 20; ++i) {
                result.push(UtilRgb.brighten(result[i], 0.45));
            }
            for (let i = 10; i < 20; ++i) {
                result.push(UtilRgb.brighten(result[i], 0.15));
            }
            for (let i = 10; i < 20; ++i) {
                result.push(UtilRgb.darken(result[i], 0.15));
            }
            for (let i = 10; i < 20; ++i) {
                result.push(UtilRgb.darken(result[i], 0.45));
            }
            for (let i = 10; i < 20; ++i) {
                result.push(UtilRgb.darken(result[i], 0.75));
            }
            return result;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkColor = () => {
        DThemeDark.set("DColorRecent", DThemeDarkColorRecent);
        DThemeDark.set("DColorStandard", DThemeDarkColorStandard);
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
    class DThemeDarkDialog extends DThemeDarkBase {
        getMode() {
            return DDialogMode.MODAL;
        }
        closeOn(mode) {
            switch (mode) {
                case DDialogMode.MODAL:
                case DDialogMode.MENU:
                    return DDialogCloseOn.ESC | DDialogCloseOn.CLICK_OUTSIDE;
                case DDialogMode.MODELESS:
                    return DDialogCloseOn.NONE;
            }
        }
        isSticky(mode) {
            return false;
        }
        isAlwaysOnTop() {
            return false;
        }
        isGestureEnabled(mode) {
            switch (mode) {
                case DDialogMode.MODAL:
                case DDialogMode.MODELESS:
                    return true;
                case DDialogMode.MENU:
                    return false;
            }
        }
        getGestureMode(mode) {
            return DDialogGestureMode.DIRTY;
        }
        getOffsetX(mode) {
            return 5;
        }
        getOffsetY(mode) {
            return 5;
        }
        getAlign(mode) {
            return DDialogAlign.BOTTOM;
        }
        newAnimation(mode) {
            switch (mode) {
                case DDialogMode.MODAL:
                    return new DAnimationFadeIn();
                case DDialogMode.MODELESS:
                    return null;
                case DDialogMode.MENU:
                    return null;
            }
        }
        getBackgroundColor(state) {
            if (state.is(DDialogState.MENU)) {
                return DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD;
            }
            else {
                return DThemeDarkConstants.BACKGROUND_COLOR;
            }
        }
        getBorderColor(state) {
            if (state.is(DDialogState.MENU)) {
                return null;
            }
            else {
                return 0x393939;
            }
        }
        getOutlineColor(state) {
            return null;
        }
        getPaddingLeft() {
            return 0;
        }
        getPaddingTop() {
            return 0;
        }
        getPaddingRight() {
            return 0;
        }
        getPaddingBottom() {
            return 0;
        }
        getX() {
            return 0;
        }
        getY() {
            return 0;
        }
        getWidth() {
            return 400;
        }
        getHeight() {
            return "auto";
        }
        getShadow() {
            return this.newShadow();
        }
        getInteractive() {
            return DBaseInteractive.BOTH;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkDialogLayered extends DThemeDarkDialog {
        getLayout() {
            return undefined;
        }
        getHeader() {
            return null;
        }
        getContent() {
            return undefined;
        }
        getFooter() {
            return undefined;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkDialogFitted extends DThemeDarkDialogLayered {
        getWidth() {
            return "auto";
        }
    }

    const DLayoutDirection = wcardinal.ui.DLayoutDirection;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkLayout extends DThemeDarkBase {
        getBackgroundColor(state) {
            return null;
        }
        getBorderColor(state) {
            return null;
        }
        getMargin() {
            return 5;
        }
        getInteractive() {
            return DBaseInteractive.CHILDREN;
        }
        newState(state) {
            super.newState(state);
            state.isFocusable = false;
        }
        getDirection() {
            return DLayoutDirection.VERTICAL;
        }
        getCornerAdjust() {
            return false;
        }
        getMultiplicity() {
            return 1;
        }
        getReverse() {
            return false;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkLayoutVertical extends DThemeDarkLayout {
        getDirection() {
            return DLayoutDirection.VERTICAL;
        }
        getWidth() {
            return "auto";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkDialogLayeredContent extends DThemeDarkLayoutVertical {
        getX() {
            return "padding";
        }
        getY() {
            return "padding";
        }
        getWidth() {
            return "padding";
        }
        getHeight() {
            return "auto";
        }
        getPaddingTop() {
            return 16;
        }
        getPaddingRight() {
            return 16;
        }
        getPaddingBottom() {
            return 16;
        }
        getPaddingLeft() {
            return 16;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkDialogFittedContent extends DThemeDarkDialogLayeredContent {
        getWidth() {
            return "auto";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkDialogFitted = () => {
        DThemeDark.set("DDialogFittedContent", DThemeDarkDialogFittedContent);
        DThemeDark.set("DDialogFitted", DThemeDarkDialogFitted);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkDialogInput extends DThemeDarkDialogLayered {
        getLabel() {
            return "";
        }
        getInputMargin() {
            return 32;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkDialogInputBoolean extends DThemeDarkDialogInput {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkDialogInputBoolean = () => {
        DThemeDark.set("DDialogInputBoolean", DThemeDarkDialogInputBoolean);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkDialogInputInteger extends DThemeDarkDialogInput {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkDialogInputInteger = () => {
        DThemeDark.set("DDialogInputInteger", DThemeDarkDialogInputInteger);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkDialogInputReal extends DThemeDarkDialogInput {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkDialogInputReal = () => {
        DThemeDark.set("DDialogInputReal", DThemeDarkDialogInputReal);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkDialogInputText extends DThemeDarkDialogInput {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkDialogInputText = () => {
        DThemeDark.set("DDialogInputText", DThemeDarkDialogInputText);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkDialog = () => {
        DThemeDark.set("DDialog", DThemeDarkDialog);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    /* eslint-disable prettier/prettier */
    DThemeDarkAtlas.add("dropdown_mark", 20, 14, `<g>` +
        `<polyline fill="none" stroke="#fff" stroke-width="1" points="16 5 10 11 4 5"></polyline>` +
        `</g>`);
    /* eslint-enable prettier/prettier */
    class DThemeDarkDropdownBase extends DThemeDarkButtonBase {
        constructor() {
            super(DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD);
        }
        getSecondaryImageAlignHorizontal() {
            return DAlignHorizontal.RIGHT;
        }
        getSecondaryImageAlignWith() {
            return DAlignWith.PADDING;
        }
        getSecondaryImageMarginHorizontal() {
            return -20;
        }
        getPaddingLeft() {
            return 25;
        }
        getPaddingRight() {
            return 25;
        }
        getSecondaryImageSource(state) {
            return DThemeDarkAtlas.mappings.dropdown_mark;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkDropdown extends DThemeDarkDropdownBase {
        newTextValue() {
            return "";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkDropdown = () => {
        DThemeDark.set("DDropdown", DThemeDarkDropdown);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkExpandable extends DThemeDarkLayoutVertical {
        getBackgroundColor(state) {
            if (state.isActive) {
                return 0x0f0700;
            }
            return null;
        }
        getBackgroundAlpha(state) {
            if (state.isActive) {
                return 0.1;
            }
            return 0;
        }
        getMargin() {
            return 0;
        }
        getCornerMask() {
            return DCornerMask.ALL;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkImage extends DThemeDarkImageBase {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    /* eslint-disable prettier/prettier */
    DThemeDarkAtlas.add("menu_item_expandable_header_closed", 14, 14, `<g transform="scale(1, 0.7)">` +
        `<polyline fill="none" stroke="#fff" stroke-width="1" points="6 16 10 10 6 4"></polyline>` +
        `</g>`);
    DThemeDarkAtlas.add("menu_item_expandable_header_opened", 14, 14, `<g transform="scale(0.7, 1)">` +
        `<polyline fill="none" stroke="#fff" stroke-width="1" points="16 6 10 10 4 6"></polyline>` +
        `</g>`);
    /* eslint-enable prettier/prettier */
    class DThemeDarkExpandableHeader extends DThemeDarkImage {
        getBackgroundColor(state) {
            if (state.inDisabled) {
                return null;
            }
            else if (state.isHovered) {
                return 0x2e2e2e;
            }
            else if (state.inActive) {
                return 0x2e2e2e;
            }
            else {
                return null;
            }
        }
        getBorderColor(state) {
            return null;
        }
        getHeight() {
            return 30;
        }
        getWidth() {
            return "padding";
        }
        getPaddingLeft() {
            return 16;
        }
        getPaddingRight() {
            return 16;
        }
        getCornerMask() {
            return DCornerMask.ALL;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkExpandable = () => {
        DThemeDark.set("DExpandableHeader", DThemeDarkExpandableHeader);
        DThemeDark.set("DExpandable", DThemeDarkExpandable);
    };

    const DHtmlElementState = wcardinal.ui.DHtmlElementState;

    const UtilHtmlElementWhen = wcardinal.ui.UtilHtmlElementWhen;

    const nullCreator = () => {
        return null;
    };
    const divCreator$2 = (container) => {
        const result = document.createElement("div");
        container.appendChild(result);
        return result;
    };
    class DThemeDarkHtmlElement extends DThemeDarkImageBase {
        getElementCreator() {
            return nullCreator;
        }
        setElementStyle(target, state, padding, elementRect, elementMatrix, clipperRect, clipperEx) {
            // Style
            const style = this.getElementStylePointerEvent(state) +
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
        }
        getElementStylePointerEvent(state) {
            if (!state.is(DHtmlElementState.NO_POINTER_EVENTS)) {
                return `pointer-events: auto;`;
            }
            return "";
        }
        getElementStyleBackground(state) {
            return `background-color: transparent;`;
        }
        getElementStyleBorder(state) {
            return `border: none; box-sizing: border-box;`;
        }
        getElementStylePadding(state, padding) {
            if (padding) {
                if ("getLeft" in padding) {
                    return (`padding: ${padding.getTop()}px ${padding.getRight()}px ` +
                        `${padding.getBottom()}px ${padding.getLeft()}px;`);
                }
                else {
                    return `padding: ${padding.vertical}px ${padding.horizontal}px;`;
                }
            }
            return `padding: 0px;`;
        }
        getElementStyleOutline(state) {
            return `outline: none;`;
        }
        getElementStylePositionPosition(elementRect, clipperRect) {
            if (elementRect) {
                if (clipperRect) {
                    const left = elementRect.x - clipperRect.x;
                    const top = elementRect.y - clipperRect.y;
                    return `left:${left}px; top:${top}px;`;
                }
                return `left:${elementRect.x}px; top: ${elementRect.y}px;`;
            }
            return `left: 0px; top: 0px;`;
        }
        getElementStylePositionSize(rect) {
            if (rect) {
                return `width: ${rect.width}px; height: ${rect.height}px;`;
            }
            return "width: 0px; height: 0px;";
        }
        getElementStylePositionTransform(matrix) {
            if (matrix) {
                return `transform: matrix(${matrix.a},${matrix.b},${matrix.c},${matrix.d},${matrix.tx},${matrix.ty});`;
            }
            return "";
        }
        getElementStylePosition(state, elementRect, elementMatrix, clipperRect) {
            return (`position: absolute;` +
                this.getElementStylePositionPosition(elementRect, clipperRect) +
                this.getElementStylePositionSize(elementRect) +
                this.getElementStylePositionTransform(elementMatrix));
        }
        getElementStyleText(state) {
            return (`font-family: ${this.getFontFamilly()};` +
                `font-size: ${this.getFontSize()}px;` +
                `color: #${this.getColor(state).toString(16)};` +
                `line-height: ${this.getLineHeight()}px;` +
                `-moz-tab-size: 4; -o-tab-size: 4; tab-size: 4;`);
        }
        getElementStyleMargin(state) {
            return "margin: 0;";
        }
        getElementStyleClipPath(state, clipperEx) {
            if (clipperEx != null) {
                const id = clipperEx.id;
                return `-webkit-clip-path: url(#${id}); clip-path: url(#${id});`;
            }
            return "";
        }
        getClipperCreator() {
            return divCreator$2;
        }
        setClipperStyle(target, state, padding, elementRect, elementMatrix, clipperRect, clipperEx) {
            const style = `outline: none; padding: 0; margin: 0; border: none;` +
                `background-color: transparent; pointer-events: none;` +
                this.getClipperStyleOverflow(clipperRect) +
                this.getClipperStylePosition(clipperRect);
            target.setAttribute("style", style);
        }
        getClipperStyleOverflow(rect) {
            if (rect) {
                return `overflow: hidden;`;
            }
            return "overflow: visible;";
        }
        getClipperStylePositionPosition(rect) {
            if (rect) {
                return `left: ${rect.x}px; top: ${rect.y}px;`;
            }
            return `left: 0px; top: 0px;`;
        }
        getClipperStylePositionSize(rect) {
            if (rect) {
                return (`width: ${rect.width}px; height: ${rect.height}px;` +
                    `line-height: ${rect.height}px;`);
            }
            return "width: 0px; height: 0px;";
        }
        getClipperStylePosition(rect) {
            return (`position: absolute;` +
                this.getClipperStylePositionPosition(rect) +
                this.getClipperStylePositionSize(rect));
        }
        isClipperExEnabled() {
            return false;
        }
        getBeforeCreator() {
            return divCreator$2;
        }
        setBeforeStyle(target) {
            const style = "overflow: hidden; outline: none;" +
                "padding: 0; margin: 0; border: none; background-color: transparent;" +
                "position: absolute; left: 0; top: 0; width: 0; height: 0; line-height: 0;";
            target.setAttribute("style", style);
            target.setAttribute("tabindex", "0");
        }
        getAfterCreator() {
            return divCreator$2;
        }
        setAfterStyle(target) {
            this.setBeforeStyle(target);
        }
        getWhen() {
            return UtilHtmlElementWhen.FOCUSED;
        }
        getSelect() {
            return false;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkHtmlElement = () => {
        DThemeDark.set("DHtmlElement", DThemeDarkHtmlElement);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkImage = () => {
        DThemeDark.set("DImage", DThemeDarkImage);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkLayoutHorizontal extends DThemeDarkLayout {
        getDirection() {
            return DLayoutDirection.HORIZONTAL;
        }
        getHeight() {
            return "auto";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkInputAndLabel extends DThemeDarkLayoutHorizontal {
        getHeight() {
            return this.getLineHeight();
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkInputAndLabel = () => {
        DThemeDark.set("DInputAndLabel", DThemeDarkInputAndLabel);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const editingValidator = () => {
        return null;
    };
    const editingUnformatter$2 = (text) => {
        return text;
    };
    class DThemeDarkInput extends DThemeDarkHtmlElement {
        constructor() {
            super(...arguments);
            this.BACKGROUND_COLOR = DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD;
            this.BACKGROUND_COLOR_HOVERED = UtilRgb.brighten(this.BACKGROUND_COLOR, 0.017);
        }
        getBackgroundColor(state) {
            if (state.inDisabled || state.inReadOnly) {
                return null;
            }
            else if (state.isHovered) {
                return this.BACKGROUND_COLOR_HOVERED;
            }
            else {
                return this.BACKGROUND_COLOR;
            }
        }
        getBorderColor(state) {
            if (state.isInvalid) {
                return DThemeDarkConstants.INVALID_COLOR;
            }
            return null;
        }
        getOutlineColor(state) {
            if (state.isInvalid) {
                return DThemeDarkConstants.INVALID_COLOR;
            }
            return super.getOutlineColor(state);
        }
        getHeight() {
            return this.getLineHeight();
        }
        getWidth() {
            return 100;
        }
        getPlaceholder() {
            return "";
        }
        getPaddingLeft() {
            return 10;
        }
        getPaddingRight() {
            return 10;
        }
        getCursor(state) {
            if (!state.isActionable) {
                return "";
            }
            return "text";
        }
        getEditingFormatter() {
            return this.getTextFormatter();
        }
        getEditingUnformatter() {
            return editingUnformatter$2;
        }
        getEditingValidator() {
            return editingValidator;
        }
        getSelect() {
            return true;
        }
        getElementStyleBorder(state) {
            return `border: 1.5px solid transparent; box-sizing: border-box;`;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const CREATOR_CLASSNAME$1 = "d-theme-dark-input";
    const CREATOR_CLASSNAME_ELEMENT$1 = `${CREATOR_CLASSNAME$1}-element`;
    const elementCreator$1 = (container) => {
        const found = container.getElementsByClassName(CREATOR_CLASSNAME_ELEMENT$1);
        if (0 < found.length) {
            return found[0];
        }
        const element = document.createElement("input");
        element.setAttribute("spellcheck", "false");
        element.setAttribute("class", CREATOR_CLASSNAME_ELEMENT$1);
        container.appendChild(element);
        return element;
    };
    const divCreator$1 = (container, classname) => {
        const found = container.getElementsByClassName(classname);
        if (0 < found.length) {
            return found[0];
        }
        const result = document.createElement("div");
        result.setAttribute("class", classname);
        container.appendChild(result);
        return result;
    };
    const CREATOR_CLASSNAME_CLIPPER$1 = `${CREATOR_CLASSNAME$1}-clipper`;
    const clipperCreator$1 = (container) => {
        return divCreator$1(container, CREATOR_CLASSNAME_CLIPPER$1);
    };
    const CREATOR_CLASSNAME_BEFORE$1 = `${CREATOR_CLASSNAME$1}-before`;
    const beforeCreator$1 = (container) => {
        return divCreator$1(container, CREATOR_CLASSNAME_BEFORE$1);
    };
    const CREATOR_CLASSNAME_AFTER$1 = `${CREATOR_CLASSNAME$1}-after`;
    const afterCreator$1 = (container) => {
        return divCreator$1(container, CREATOR_CLASSNAME_AFTER$1);
    };
    class DThemeDarkInputInput extends DThemeDarkInput {
        getElementCreator() {
            return elementCreator$1;
        }
        getClipperCreator() {
            return clipperCreator$1;
        }
        getBeforeCreator() {
            return beforeCreator$1;
        }
        getAfterCreator() {
            return afterCreator$1;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkInputNumber extends DThemeDarkInputInput {
        getTextAlignHorizontal() {
            return DAlignHorizontal.CENTER;
        }
        getStep() {
            return null;
        }
        getMin() {
            return null;
        }
        getMax() {
            return null;
        }
        newTextValue() {
            return 0;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const editingUnformatter$1 = (text) => {
        const result = parseInt(text, 10);
        if (result === result) {
            return result;
        }
        return 0;
    };
    class DThemeDarkInputInteger extends DThemeDarkInputNumber {
        getEditingUnformatter() {
            return editingUnformatter$1;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkInputInteger = () => {
        DThemeDark.set("DInputInteger", DThemeDarkInputInteger);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkText extends DThemeDarkTextBase {
        getHeight() {
            return this.getLineHeight();
        }
        newState(state) {
            super.newState(state);
            state.isFocusable = false;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkInputLabel extends DThemeDarkText {
        getTextAlignHorizontal() {
            return DAlignHorizontal.RIGHT;
        }
        getWidth() {
            return 60;
        }
        getHeight() {
            return this.getLineHeight();
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkInputLabel = () => {
        DThemeDark.set("DInputLabel", DThemeDarkInputLabel);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const editingUnformatter = (text) => {
        const result = parseFloat(text);
        if (result === result) {
            return result;
        }
        return 0;
    };
    class DThemeDarkInputReal extends DThemeDarkInputNumber {
        getEditingUnformatter() {
            return editingUnformatter;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkInputReal = () => {
        DThemeDark.set("DInputReal", DThemeDarkInputReal);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkInputText extends DThemeDarkInputInput {
        newTextValue() {
            return "";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    // Material Design icons by Google.
    // Apache license version 2.0.
    /* eslint-disable prettier/prettier */
    DThemeDarkAtlas.add("input_search", 21, 21, `<g transform="scale(0.875,0.875)">` +
        `<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 ` +
        `9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 ` +
        `14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#fff"/>` +
        `</g>`);
    /* eslint-enable prettier/prettier */
    class DThemeDarkInputSearch extends DThemeDarkInputText {
        getPaddingRight() {
            return 31;
        }
        getImageSource(state) {
            return DThemeDarkAtlas.mappings.input_search;
        }
        getImageAlignWith() {
            return DAlignWith.BORDER;
        }
        getImageAlignHorizontal() {
            return DAlignHorizontal.RIGHT;
        }
        getImageMarginHorizontal() {
            return 6;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkInputSearch = () => {
        DThemeDark.set("DInputSearch", DThemeDarkInputSearch);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const CREATOR_CLASSNAME = "d-theme-dark-input-text-area";
    const CREATOR_CLASSNAME_ELEMENT = `${CREATOR_CLASSNAME}-element`;
    const elementCreator = (container) => {
        const found = container.getElementsByClassName(CREATOR_CLASSNAME_ELEMENT);
        if (0 < found.length) {
            return found[0];
        }
        const element = document.createElement("textarea");
        element.setAttribute("spellcheck", "false");
        element.setAttribute("class", CREATOR_CLASSNAME_ELEMENT);
        container.appendChild(element);
        return element;
    };
    const divCreator = (container, classname) => {
        const found = container.getElementsByClassName(classname);
        if (0 < found.length) {
            return found[0];
        }
        const result = document.createElement("div");
        result.setAttribute("class", classname);
        container.appendChild(result);
        return result;
    };
    const CREATOR_CLASSNAME_CLIPPER = `${CREATOR_CLASSNAME}-clipper`;
    const clipperCreator = (container) => {
        return divCreator(container, CREATOR_CLASSNAME_CLIPPER);
    };
    const CREATOR_CLASSNAME_BEFORE = `${CREATOR_CLASSNAME}-before`;
    const beforeCreator = (container) => {
        return divCreator(container, CREATOR_CLASSNAME_BEFORE);
    };
    const CREATOR_CLASSNAME_AFTER = `${CREATOR_CLASSNAME}-after`;
    const afterCreator = (container) => {
        return divCreator(container, CREATOR_CLASSNAME_AFTER);
    };
    class DThemeDarkInputTextArea extends DThemeDarkInput {
        getTextAlignVertical() {
            return DAlignVertical.TOP;
        }
        getTextStyleWordWrap() {
            return DDynamicTextStyleWordWrap.NORMAL;
        }
        getElementCreator() {
            return elementCreator;
        }
        getClipperCreator() {
            return clipperCreator;
        }
        getBeforeCreator() {
            return beforeCreator;
        }
        getAfterCreator() {
            return afterCreator;
        }
        newTextValue() {
            return "";
        }
        getElementStyleText(state) {
            return (super.getElementStyleText(state) +
                this.getElementStyleTextResize(state) +
                this.getElementStyleTextWordWrap(state));
        }
        getElementStyleTextResize(state) {
            return "resize: none;";
        }
        getElementStyleTextWordWrap(state) {
            let result = `overflow-wrap: break-word; word-wrap: break-word;`;
            switch (this.getTextStyleWordWrap()) {
                case DDynamicTextStyleWordWrap.NORMAL:
                    result += `word-break: normal;`;
                    break;
                default:
                    result += `word-break: break-all;`;
                    break;
            }
            return result;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkInputTextArea = () => {
        DThemeDark.set("DInputTextArea", DThemeDarkInputTextArea);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkInputText = () => {
        DThemeDark.set("DInputText", DThemeDarkInputText);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkLayoutBoard extends DThemeDarkBase {
        getBackgroundColor(state) {
            return null;
        }
        getBorderColor(state) {
            return null;
        }
        getInteractive() {
            return DBaseInteractive.CHILDREN;
        }
        newState(state) {
            super.newState(state);
            state.isFocusable = false;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkLayoutSpace extends DThemeDarkBase {
        getBackgroundColor(state) {
            return null;
        }
        getBorderColor(state) {
            return null;
        }
        getWidth() {
            return 0;
        }
        getHeight() {
            return 0;
        }
        getClearType() {
            return DLayoutClearType.BOTH;
        }
        getInteractive() {
            return DBaseInteractive.CHILDREN;
        }
        newState(state) {
            super.newState(state);
            state.isFocusable = false;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkLayout = () => {
        DThemeDark.set("DLayout", DThemeDarkLayout);
        DThemeDark.set("DLayoutHorizontal", DThemeDarkLayoutHorizontal);
        DThemeDark.set("DLayoutSpace", DThemeDarkLayoutSpace);
        DThemeDark.set("DLayoutVertical", DThemeDarkLayoutVertical);
        DThemeDark.set("DLayoutBoard", DThemeDarkLayoutBoard);
    };

    const UtilGestureMode = wcardinal.ui.UtilGestureMode;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkPane extends DThemeDarkBase {
        isOverflowMaskEnabled() {
            return true;
        }
        getBackgroundColor(state) {
            return DThemeDarkConstants.BACKGROUND_COLOR;
        }
        getBorderAlign(state) {
            return 1;
        }
        getOutlineAlign(state) {
            return 1;
        }
        getInteractive() {
            return DBaseInteractive.BOTH;
        }
        getWheelSpeed() {
            return 2.24;
        }
        getGestureMode() {
            return UtilGestureMode.TOUCH;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkList extends DThemeDarkPane {
        getBackgroundColor(state) {
            return DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkListItems {
        constructor(baseColor, isStripeEnabled, isVivid) {
            this._isStripeEnabled = isStripeEnabled;
            if (baseColor != null) {
                this._backgroundColorEven = baseColor;
                this._backgroundAlphaEven = 1;
                this._backgroundColorOdd = UtilRgb.brighten(baseColor, 0.0075);
                this._backgroundAlphaOdd = 1;
                this._invalidColor = UtilRgb.blend(baseColor, DThemeDarkConstants.INVALID_COLOR, DThemeDarkConstants.INVALID_ALPHA);
                this._invalidAlpha = 1;
                if (isVivid) {
                    this._highlightColor = DThemeDarkConstants.HIGHLIGHT_COLOR;
                }
                else {
                    this._highlightColor = UtilRgb.blend(baseColor, DThemeDarkConstants.HIGHLIGHT_COLOR, DThemeDarkConstants.HIGHLIGHT_ALPHA);
                }
                this._highlightAlpha = 1;
                this._weakHighlightColor = UtilRgb.blend(baseColor, DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR, DThemeDarkConstants.WEAK_HIGHLIGHT_ALPHA);
                this._weakHighlightAlpha = 1;
            }
            else {
                this._backgroundColorEven = 0xffffff;
                this._backgroundAlphaEven = 0;
                this._backgroundColorOdd = 0xffffff;
                this._backgroundAlphaOdd = 0.0075;
                this._invalidColor = DThemeDarkConstants.INVALID_COLOR;
                this._invalidAlpha = DThemeDarkConstants.INVALID_ALPHA;
                this._highlightColor = DThemeDarkConstants.HIGHLIGHT_COLOR;
                if (isVivid) {
                    this._highlightAlpha = 1;
                }
                else {
                    this._highlightAlpha = DThemeDarkConstants.HIGHLIGHT_ALPHA;
                }
                this._weakHighlightColor = DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR;
                this._weakHighlightAlpha = DThemeDarkConstants.WEAK_HIGHLIGHT_ALPHA;
            }
            this._imageTintColorWeak = DThemeDarkConstants.COLOR;
            if (isVivid) {
                this._imageTintColorHighlight = DThemeDarkConstants.ACTIVE_COLOR;
            }
            else {
                this._imageTintColorHighlight = DThemeDarkConstants.COLOR;
            }
            if (isVivid) {
                this._color = DThemeDarkConstants.COLOR;
                this._colorActive = DThemeDarkConstants.ACTIVE_COLOR;
            }
            else {
                this._color = DThemeDarkConstants.COLOR;
                this._colorActive = DThemeDarkConstants.COLOR;
            }
        }
        getBackgroundColor(state) {
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
        }
        getBackgroundAlpha(state) {
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
        }
        getBorderColor(state) {
            return null;
        }
        getBorderMask(state) {
            return DBorderMask.NONE;
        }
        getColor(state) {
            if (state.isActive) {
                return this._colorActive;
            }
            return this._color;
        }
        getAlpha(state) {
            if (state.inEnabled) {
                return 1.0;
            }
            return 0;
        }
        getImageTintColor(state, isActive) {
            if (state.inDisabled || state.inReadOnly || !(state.isActive || isActive)) {
                return this._imageTintColorWeak;
            }
            else {
                return this._imageTintColorHighlight;
            }
        }
        getHeight() {
            return 30;
        }
        getCornerMask() {
            return DCornerMask.ALL;
        }
        getCursor(state) {
            if (!state.isActionable) {
                return "";
            }
            return "pointer";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkListItem extends DThemeDarkImageBase {
        constructor() {
            super();
            this._style = this.newStyle();
        }
        newStyle() {
            return new DThemeDarkListItems(null, true, false);
        }
        getBackgroundColor(state) {
            return this._style.getBackgroundColor(state);
        }
        getBackgroundAlpha(state) {
            return this._style.getBackgroundAlpha(state);
        }
        getBorderColor(state) {
            return this._style.getBorderColor(state);
        }
        getBorderMask(state) {
            return this._style.getBorderMask(state);
        }
        getColor(state) {
            return this._style.getColor(state);
        }
        getAlpha(state) {
            return this._style.getAlpha(state);
        }
        getHeight() {
            return this._style.getHeight();
        }
        getCornerMask() {
            return this._style.getCornerMask();
        }
        getImageTintColor(state) {
            return this._style.getImageTintColor(state);
        }
        getCursor(state) {
            return this._style.getCursor(state);
        }
        getPaddingLeft() {
            return 10;
        }
        getPaddingRight() {
            return 10;
        }
        newTextValue() {
            return undefined;
        }
        getWidth() {
            return "padding";
        }
        newState(state) {
            super.newState(state);
            state.isDisabled = true;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkListItemAmbient extends DThemeDarkListItem {
        newStyle() {
            return new DThemeDarkListItems(null, false, true);
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkList = () => {
        DThemeDark.set("DListItemAmbient", DThemeDarkListItemAmbient);
        DThemeDark.set("DListItem", DThemeDarkListItem);
        DThemeDark.set("DList", DThemeDarkList);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkMenuBar extends DThemeDarkLayoutHorizontal {
        getBackgroundColor() {
            return DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD;
        }
        getBorderColor(state) {
            return null;
        }
        getHeight() {
            return 30;
        }
        getMargin() {
            return 0;
        }
        getPaddingLeft() {
            return 5;
        }
        getPaddingRight() {
            return 5;
        }
        getInteractive() {
            return DBaseInteractive.BOTH;
        }
        newState(state) {
            super.newState(state);
            state.isFocusRoot = true;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkMenuBarItem extends DThemeDarkButton {
        getBackgroundColor(state) {
            if (state.inDisabled) {
                return null;
            }
            else if (state.isActive) {
                return DThemeDarkConstants.HIGHLIGHT_COLOR;
            }
            else if (state.isHovered) {
                return DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR;
            }
            else {
                return null;
            }
        }
        getBackgroundAlpha(state) {
            return DThemeDarkConstants.WEAK_HIGHLIGHT_ALPHA;
        }
        getBorderColor() {
            return null;
        }
        getWidth() {
            return "auto";
        }
        getHeight() {
            return "100%";
        }
        getPaddingLeft() {
            return 10;
        }
        getPaddingRight() {
            return 10;
        }
        getCornerMask() {
            return DCornerMask.ALL;
        }
        getTextAlignHorizontal() {
            return DAlignHorizontal.LEFT;
        }
        getTextStyleClipping() {
            return false;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkMenu extends DThemeDarkLayoutVertical {
        getBackgroundColor(state) {
            return DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD;
        }
        getOffsetX() {
            return 5;
        }
        getOffsetY() {
            return 5;
        }
        getPaddingTop() {
            return 5;
        }
        getPaddingBottom() {
            return 5;
        }
        getWidth() {
            return 200;
        }
        getHeight() {
            return "auto";
        }
        getMargin() {
            return 0;
        }
        getShadow() {
            return this.newShadowWeak();
        }
        getInteractive() {
            return DBaseInteractive.BOTH;
        }
        newState(state) {
            super.newState(state);
            state.isFocusRoot = true;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkMenuItemBase extends DThemeDarkImage {
        getBackgroundColor(state) {
            if (state.inDisabled) {
                return null;
            }
            else if (state.isActive) {
                return this.getBackgroundColorActive(state);
            }
            else if (state.isHovered) {
                return DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR;
            }
            else {
                return null;
            }
        }
        getBackgroundColorActive(state) {
            return DThemeDarkConstants.HIGHLIGHT_COLOR;
        }
        getBackgroundAlpha(state) {
            if (state.inDisabled) {
                return DThemeDarkConstants.WEAK_HIGHLIGHT_ALPHA;
            }
            else if (state.isActive) {
                return this.getBackgroundAlphaActive(state);
            }
            else {
                return DThemeDarkConstants.WEAK_HIGHLIGHT_ALPHA;
            }
        }
        getBackgroundAlphaActive(state) {
            return DThemeDarkConstants.HIGHLIGHT_ALPHA;
        }
        getColor(state) {
            if (state.inDisabled) {
                return super.getColor(state);
            }
            else if (state.isActive) {
                return this.getColorActive(state);
            }
            else {
                return super.getColor(state);
            }
        }
        getColorActive(state) {
            return DThemeDarkConstants.COLOR;
        }
        getBorderColor(state) {
            return null;
        }
        getHeight() {
            return 30;
        }
        getWidth() {
            return "padding";
        }
        getTextAlignHorizontal() {
            return DAlignHorizontal.LEFT;
        }
        getPaddingLeft() {
            return 10;
        }
        getPaddingRight() {
            return 10;
        }
        getCornerMask() {
            return DCornerMask.ALL;
        }
        getCursor(state) {
            if (!state.isActionable) {
                return "";
            }
            return "pointer";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkMenuItem extends DThemeDarkMenuItemBase {
        getBackgroundColorActive(state) {
            return DThemeDarkConstants.HIGHLIGHT_COLOR;
        }
        getBackgroundAlphaActive(state) {
            return 1.0;
        }
        getColorActive(state) {
            return DThemeDarkConstants.ACTIVE_COLOR;
        }
        getPaddingLeft() {
            return this.getPaddingRight();
        }
        getPaddingRight() {
            return 26;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkMenuItemText extends DThemeDarkMenuItem {
        getShortcutTextMargin() {
            return this.getPaddingRight();
        }
        getShortcutColor(state) {
            return this.getColor(state);
        }
        getShortcutAlpha(state) {
            return this.getAlpha(state) * 0.5;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    /* eslint-disable prettier/prettier */
    DThemeDarkAtlas.add("menu_item_mark_check_active", 14, 14, `<g>` +
        `<polyline fill="none" stroke="#fff" stroke-width="1" points="1 6.5 5 11 13 2.5"></polyline>` +
        `</g>`);
    /* eslint-enable prettier/prettier */
    DThemeDarkAtlas.add("menu_item_mark_check_inactive", 14, 14, `<g></g>`);
    class DThemeDarkMenuItemCheck extends DThemeDarkMenuItemText {
        getBackgroundColorActive(state) {
            if (state.isHovered) {
                return DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR;
            }
            else {
                return null;
            }
        }
        getBackgroundAlphaActive(state) {
            return DThemeDarkConstants.WEAK_HIGHLIGHT_ALPHA;
        }
        getColorActive(state) {
            return DThemeDarkConstants.COLOR;
        }
        getImageSource(state) {
            if (state.isActive) {
                return DThemeDarkAtlas.mappings.menu_item_mark_check_active;
            }
            return DThemeDarkAtlas.mappings.menu_item_mark_check_inactive;
        }
        getImageAlignWith() {
            return DAlignWith.BORDER;
        }
        getImageMarginHorizontal() {
            return 7;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkMenuItemExpandable extends DThemeDarkLayoutVertical {
        getBackgroundColor(state) {
            if (state.isActive) {
                return 0x0f0700;
            }
            return null;
        }
        getBackgroundAlpha(state) {
            if (state.isActive) {
                return 0.1;
            }
            return 0;
        }
        getMargin() {
            return 0;
        }
        getWidth() {
            return "padding";
        }
        getHeight() {
            return "auto";
        }
        getCornerMask() {
            return DCornerMask.ALL;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkMenuItemExpandableBody extends DThemeDarkLayoutVertical {
        getWidth() {
            return "padding";
        }
        getHeight() {
            return "auto";
        }
        getCornerMask() {
            return DCornerMask.ALL;
        }
    }

    class DThemeDarkExpandables {
        static init() {
            /* eslint-disable prettier/prettier */
            DThemeDarkAtlas.add("expandable_closed", 14, 14, `<g transform="scale(1, 0.7)">` +
                `<polyline fill="none" stroke="#fff" stroke-width="1" points="6 16 10 10 6 4"></polyline>` +
                `</g>`);
            DThemeDarkAtlas.add("expandable_opened", 14, 14, `<g transform="scale(0.7, 1)">` +
                `<polyline fill="none" stroke="#fff" stroke-width="1" points="16 6 10 10 4 6"></polyline>` +
                `</g>`);
            /* eslint-enable prettier/prettier */
        }
        static getImageOpened() {
            return DThemeDarkAtlas.mappings.expandable_opened;
        }
        static getImageClosed() {
            return DThemeDarkAtlas.mappings.expandable_closed;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    DThemeDarkExpandables.init();
    class DThemeDarkMenuItemExpandableHeader extends DThemeDarkMenuItemBase {
        getPaddingLeft() {
            return this.getPaddingRight();
        }
        getPaddingRight() {
            return 26;
        }
        getImageSource(state) {
            if (state.inActive) {
                return DThemeDarkExpandables.getImageOpened();
            }
            return DThemeDarkExpandables.getImageClosed();
        }
        getImageAlignWith() {
            return DAlignWith.BORDER;
        }
        getImageMarginHorizontal() {
            return 7;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkMenuItemExpandableItemCheck extends DThemeDarkMenuItemCheck {
        getPaddingLeft() {
            return super.getPaddingLeft() + 16;
        }
        getImageMarginHorizontal() {
            return super.getImageMarginHorizontal() + 16;
        }
    }

    const DBaseState = wcardinal.ui.DBaseState;

    const DThemes = wcardinal.ui.DThemes;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkMenuItemLink extends DThemeDarkMenuItemText {
        constructor() {
            super();
            this._link = DThemes.getInstance().get("DLink");
        }
        getImageSource(state) {
            if (state.is(DBaseState.NEW_WINDOW)) {
                return this._link.getImageSource(state);
            }
            return null;
        }
        getImageTintAlpha(state) {
            if (state.isHovered) {
                return super.getImageTintAlpha(state);
            }
            return 0;
        }
        getImageAlignWith() {
            return DAlignWith.BORDER;
        }
        getImageAlignHorizontal() {
            return DAlignHorizontal.RIGHT;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkMenuItemExpandableItemLink extends DThemeDarkMenuItemLink {
        getPaddingLeft() {
            return super.getPaddingLeft() + 16;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    /* eslint-disable prettier/prettier */
    DThemeDarkAtlas.add("menu_item_mark_next", 14, 20, `<g>` +
        `<polyline fill="none" stroke="#fff" stroke-width="1" points="5 16 11 10 5 4"></polyline>` +
        `</g>`);
    /* eslint-enable prettier/prettier */
    class DThemeDarkMenuItemMenu extends DThemeDarkMenuItem {
        getImageSource(state) {
            return DThemeDarkAtlas.mappings.menu_item_mark_next;
        }
        getImageAlignWith() {
            return DAlignWith.BORDER;
        }
        getImageAlignHorizontal() {
            return DAlignHorizontal.RIGHT;
        }
        getImageMarginHorizontal() {
            return 12;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkMenuItemExpandableItemMenu extends DThemeDarkMenuItemMenu {
        getPaddingLeft() {
            return super.getPaddingLeft() + 16;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkMenuItemSeparator extends DThemeDarkMenuItemBase {
        getBorderColor(state) {
            return DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR;
        }
        getBorderAlpha(state) {
            return DThemeDarkConstants.WEAK_HIGHLIGHT_ALPHA;
        }
        getHeight() {
            return 15;
        }
        getWidth() {
            return "padding";
        }
        getPaddingLeft() {
            return 10;
        }
        getPaddingRight() {
            return 10;
        }
        getInteractive() {
            return DBaseInteractive.NONE;
        }
        newState(state) {
            super.newState(state);
            state.isFocusable = false;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkMenuItemExpandableItemSeparator extends DThemeDarkMenuItemSeparator {
        getPaddingLeft() {
            return super.getPaddingLeft() + 16;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkMenuItemSpace extends DThemeDarkLayoutSpace {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkMenuItemExpandableItemSpace extends DThemeDarkMenuItemSpace {
        getPaddingLeft() {
            return super.getPaddingLeft() + 16;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkMenuItemExpandableItemText extends DThemeDarkMenuItemText {
        getPaddingLeft() {
            return super.getPaddingLeft() + 16;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkMenu = () => {
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
    const loadThemeDarkMenuBar = () => {
        DThemeDark.set("DMenuBarItem", DThemeDarkMenuBarItem);
        DThemeDark.set("DMenuBar", DThemeDarkMenuBar);
        loadThemeDarkMenu();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkMenuSided extends DThemeDarkPane {
        getBackgroundColor(state) {
            return DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD;
        }
        getBorderColor(state) {
            return null;
        }
        getInteractive() {
            return DBaseInteractive.BOTH;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkMenuSidedContent extends DThemeDarkLayoutVertical {
        getWidth() {
            return "100%";
        }
        getHeight() {
            return "auto";
        }
        getPaddingTop() {
            return 16;
        }
        getPaddingBottom() {
            return 16;
        }
        getMargin() {
            return 0;
        }
        newState(state) {
            super.newState(state);
            state.isFocusable = false;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkMenuSidedItemCheck extends DThemeDarkMenuItemCheck {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkMenuSidedItemExpandable extends DThemeDarkMenuItemExpandable {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkMenuSidedItemExpandableItemCheck extends DThemeDarkMenuItemExpandableItemCheck {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkMenuSidedItemExpandableItemLink extends DThemeDarkMenuItemExpandableItemLink {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkMenuSidedItemExpandableItemMenu extends DThemeDarkMenuItemExpandableItemMenu {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkMenuSidedItemExpandableItemSeparator extends DThemeDarkMenuItemExpandableItemSeparator {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkMenuSidedItemExpandableItemSpace extends DThemeDarkMenuItemExpandableItemSpace {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkMenuSidedItemExpandableItemText extends DThemeDarkMenuItemExpandableItemText {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkMenuSidedItemLink extends DThemeDarkMenuItemLink {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkMenuSidedItemMenu extends DThemeDarkMenuItemMenu {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkMenuSidedItemSeparator extends DThemeDarkMenuItemSeparator {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkMenuSidedItemSpace extends DThemeDarkMenuItemSpace {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkMenuSidedItemText extends DThemeDarkMenuItemText {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkMenuSided = () => {
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
    class DThemeDarkPagination extends DThemeDarkLayoutHorizontal {
        getWidth() {
            return "auto";
        }
        getMargin() {
            return 10;
        }
        getButtonSpace() {
            return 10;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    /* eslint-disable prettier/prettier */
    DThemeDarkAtlas.add("pagination_dots", 21, 21, `<g>` +
        `<circle cx="2" cy="11" r="1.1" fill="#fff" stroke="none" />` +
        `<circle cx="10.5" cy="11" r="1.1" fill="#fff" stroke="none" />` +
        `<circle cx="19" cy="11" r="1.1" fill="#fff" stroke="none" />` +
        `</g>`);
    /* eslint-enable prettier/prettier */
    class DThemeDarkPaginationDots extends DThemeDarkImageBase {
        getWidth() {
            return 30;
        }
        getHeight() {
            return 30;
        }
        getInteractive() {
            return DBaseInteractive.NONE;
        }
        newState(state) {
            super.newState(state);
            state.isFocusable = false;
        }
        getImageSource(state) {
            return DThemeDarkAtlas.mappings.pagination_dots;
        }
        getImageAlignHorizontal() {
            return DAlignHorizontal.CENTER;
        }
        getImageAlignWith() {
            return DAlignWith.BORDER;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    /* eslint-disable prettier/prettier */
    DThemeDarkAtlas.add("pagination_button_last", 21, 21, `<g>` +
        `<polyline fill="none" stroke="#fff" stroke-width="1" points="9 15 15 10 9 5"></polyline>` +
        `<polyline fill="none" stroke="#fff" stroke-width="1" points="5 15 11 10 5 5"></polyline>` +
        `</g>`);
    /* eslint-enable prettier/prettier */
    class DThemeDarkPaginationButtonLast extends DThemeDarkButtonAmbient {
        getWidth() {
            return 30;
        }
        getImageSource(state) {
            return DThemeDarkAtlas.mappings.pagination_button_last;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    /* eslint-disable prettier/prettier */
    DThemeDarkAtlas.add("pagination_button_next", 21, 21, `<g>` +
        `<polyline fill="none" stroke="#fff" stroke-width="1" points="7 15 13 10 7 5"></polyline>` +
        `</g>`);
    /* eslint-enable prettier/prettier */
    class DThemeDarkPaginationButtonNext extends DThemeDarkButtonAmbient {
        getWidth() {
            return 30;
        }
        getImageSource(state) {
            return DThemeDarkAtlas.mappings.pagination_button_next;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkPaginationButtonPage extends DThemeDarkButtonAmbient {
        getWidth() {
            return 30;
        }
        newTextValue() {
            return 0;
        }
        getTextStyleClipping() {
            return false;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    /* eslint-disable prettier/prettier */
    DThemeDarkAtlas.add("pagination_button_previous", 21, 21, `<g>` +
        `<polyline fill="none" stroke="#fff" stroke-width="1" points="13 15 7 10 13 5"></polyline>` +
        `</g>`);
    /* eslint-enable prettier/prettier */
    class DThemeDarkPaginationButtonPrevious extends DThemeDarkButtonAmbient {
        getWidth() {
            return 30;
        }
        getImageSource(state) {
            return DThemeDarkAtlas.mappings.pagination_button_previous;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    /* eslint-disable prettier/prettier */
    DThemeDarkAtlas.add("pagination_button_top", 21, 21, `<g>` +
        `<polyline fill="none" stroke="#fff" stroke-width="1" points="11 15 5 10 11 5"></polyline>` +
        `<polyline fill="none" stroke="#fff" stroke-width="1" points="15 15 9 10 15 5"></polyline>` +
        `</g>`);
    /* eslint-enable prettier/prettier */
    class DThemeDarkPaginationButtonTop extends DThemeDarkButtonAmbient {
        getWidth() {
            return 30;
        }
        getImageSource(state) {
            return DThemeDarkAtlas.mappings.pagination_button_top;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkPaginationPage extends DThemeDarkImageBase {
        getBackgroundColor(state) {
            return DThemeDarkConstants.HIGHLIGHT_COLOR;
        }
        getColor(state) {
            return DThemeDarkConstants.ACTIVE_COLOR;
        }
        getWidth() {
            return 30;
        }
        getHeight() {
            return 30;
        }
        newState(state) {
            super.newState(state);
            state.isFocusable = false;
        }
        getTextStyleClipping() {
            return false;
        }
        getTextAlignHorizontal() {
            return DAlignHorizontal.CENTER;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkPagination = () => {
        DThemeDark.set("DPagination", DThemeDarkPagination);
        DThemeDark.set("DPaginationPage", DThemeDarkPaginationPage);
        DThemeDark.set("DPaginationDots", DThemeDarkPaginationDots);
        DThemeDark.set("DPaginationButtonLast", DThemeDarkPaginationButtonLast);
        DThemeDark.set("DPaginationButtonNext", DThemeDarkPaginationButtonNext);
        DThemeDark.set("DPaginationButtonPage", DThemeDarkPaginationButtonPage);
        DThemeDark.set("DPaginationButtonPrevious", DThemeDarkPaginationButtonPrevious);
        DThemeDark.set("DPaginationButtonTop", DThemeDarkPaginationButtonTop);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkContent extends DThemeDarkBase {
        getWidth() {
            return "100%";
        }
        getBorderColor(state) {
            return null;
        }
        getInteractive() {
            return DBaseInteractive.BOTH;
        }
        newState(state) {
            super.newState(state);
            state.isFocusable = false;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkScrollBar extends DThemeDarkBase {
        getBackgroundColor(state) {
            return 0xffffff;
        }
        getBackgroundAlpha(state) {
            return 0;
        }
        getWidth() {
            return 13;
        }
        getHeight() {
            return 13;
        }
        getInteractive() {
            return DBaseInteractive.BOTH;
        }
        newState(state) {
            super.newState(state);
            state.isFocusable = false;
        }
        getFadeOutDelay() {
            return 1500;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkScrollBarThumb extends DThemeDarkBase {
        constructor() {
            super(...arguments);
            this.BORDER_COLOR = UtilRgb.brighten(DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR, 0.25);
            this.BORDER_COLOR_DISABLED = UtilRgb.darken(this.BORDER_COLOR, 0.75);
            this.BORDER_COLOR_HOVERED = UtilRgb.darken(this.BORDER_COLOR, 0.25);
            this.BORDER_COLOR_OTHER = UtilRgb.darken(this.BORDER_COLOR, 0.5);
        }
        getBackgroundColor(state) {
            return null;
        }
        getBackgroundAlpha(state) {
            return 1;
        }
        getBorderColor(state) {
            if (state.inDisabled) {
                return this.BORDER_COLOR_DISABLED;
            }
            else if (state.isHovered || state.isGesturing) {
                return this.BORDER_COLOR_HOVERED;
            }
            else {
                return this.BORDER_COLOR_OTHER;
            }
        }
        getBorderAlpha(state) {
            return 1;
        }
        getBorderWidth(state) {
            return 3;
        }
        getBorderAlign(state) {
            return 1;
        }
        getWidth() {
            return 13;
        }
        getHeight() {
            return 13;
        }
        getThumbMinimumLength() {
            return 16;
        }
        newState(state) {
            super.newState(state);
            state.isFocusable = false;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkScrollBar = () => {
        DThemeDark.set("DScrollBar", DThemeDarkScrollBar);
        DThemeDark.set("DScrollBarThumb", DThemeDarkScrollBarThumb);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkPane = () => {
        DThemeDark.set("DPane", DThemeDarkPane);
        DThemeDark.set("DContent", DThemeDarkContent);
        loadThemeDarkScrollBar();
    };

    const isString = wcardinal.ui.isString;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const formatter$a = (item) => {
        if (item) {
            const value = item.text.value;
            if (isString(value)) {
                return value;
            }
            else if (value != null) {
                const computed = value(item.state);
                if (computed != null) {
                    return computed;
                }
            }
        }
        return "";
    };
    class DThemeDarkSelect extends DThemeDarkDropdownBase {
        getTextFormatter() {
            return formatter$a;
        }
        newTextValue() {
            return null;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const formatter$9 = (items) => {
        if (items) {
            let result = "";
            let delimiter = "";
            for (let i = 0, imax = items.length; i < imax; ++i) {
                const item = items[i];
                const value = item.text.value;
                if (isString(value)) {
                    result += delimiter + value;
                    delimiter = ", ";
                }
                else if (value != null) {
                    const computed = value(item.state);
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
    class DThemeDarkSelectMultiple extends DThemeDarkDropdownBase {
        getTextFormatter() {
            return formatter$9;
        }
        newTextValue() {
            return [];
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkSelect = () => {
        DThemeDark.set("DSelectMultiple", DThemeDarkSelectMultiple);
        DThemeDark.set("DSelect", DThemeDarkSelect);
        loadThemeDarkDropdown();
    };

    const EShapeActionMiscExtensions = wcardinal.ui.EShapeActionMiscExtensions;

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
    class EThemeDarkShapeActionValue {
        toLabel(value) {
            const type = value.type;
            if (value instanceof EShapeActionValueSubtyped) {
                const subtype = value.subtype;
                if (value instanceof EShapeActionValueOpetyped) {
                    const result = this.toOpetypedLabel(type, subtype, value.opetype, value);
                    if (result != null) {
                        return result;
                    }
                }
                else {
                    const result = this.toSubtypedLabel(type, subtype, value);
                    if (result != null) {
                        return result;
                    }
                }
            }
            return this.toTypedLabel(type, value);
        }
        toTypedLabel(type, value) {
            return `${this.toTypeLabel(type)}: ${this.toConditionLabel(value.condition)}`;
        }
        toSubtypedLabel(type, subtype, value) {
            const typeLabel = this.toTypeLabel(type);
            switch (type) {
                case EShapeActionValueType.SHOW_HIDE:
                    return `${typeLabel}: ${this.toShowHideTypeLabel(subtype)}`;
                case EShapeActionValueType.BLINK:
                    return `${typeLabel}: ${this.toBlinkTypeLabel(subtype)}`;
                case EShapeActionValueType.CHANGE_COLOR:
                case EShapeActionValueType.CHANGE_COLOR_LEGACY:
                    return `${typeLabel}: ${this.toChangeColorTypeLabel(subtype)}`;
                case EShapeActionValueType.CHANGE_TEXT:
                    return `${typeLabel}: ${this.toChangeTextTypeLabel(subtype)}`;
                case EShapeActionValueType.OPEN:
                    return `${typeLabel}: ${this.toOpenTypeLabel(subtype)}`;
                case EShapeActionValueType.GESTURE:
                    return `${typeLabel}: ${this.toGestureTypeLabel(subtype)}`;
                case EShapeActionValueType.MISC:
                    return `${typeLabel}: ${this.toMiscTypeLabel(subtype)}`;
            }
            return null;
        }
        toOpetypedLabel(type, subtype, opetype, value) {
            switch (type) {
                case EShapeActionValueType.TRANSFORM:
                    const subtypeLabel = this.toTransformTypeLabel(subtype);
                    switch (subtype) {
                        case EShapeActionValueTransformType.ROTATE:
                            return `${subtypeLabel}: ${this.toTransformRotateTypeLabel(opetype)}`;
                        case EShapeActionValueTransformType.MOVE:
                            return `${subtypeLabel}: ${this.toTransformMoveTypeLabel(opetype)}`;
                        case EShapeActionValueTransformType.RESIZE:
                            return `${subtypeLabel}: ${this.toTransformResizeTypeLabel(opetype)}`;
                    }
            }
            return null;
        }
        toTypeLabel(type) {
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
        }
        toConditionLabel(condition) {
            const l = 20;
            if (l < condition.length) {
                return condition.substring(0, l) + "...";
            }
            else {
                return condition;
            }
        }
        toBlinkTypeLabel(type) {
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
        }
        toShowHideTypeLabel(type) {
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
        }
        toTransformTypeLabel(type) {
            switch (type) {
                case EShapeActionValueTransformType.RESIZE:
                    return "Resize";
                case EShapeActionValueTransformType.MOVE:
                    return "Move";
                case EShapeActionValueTransformType.ROTATE:
                    return "Rotate";
            }
        }
        toTransformRotateTypeLabel(type) {
            switch (type) {
                case EShapeActionValueTransformRotateType.RELATIVE:
                    return "Relative";
                case EShapeActionValueTransformRotateType.ABSOLUTE:
                    return "Absolute";
            }
        }
        toTransformMoveTypeLabel(type) {
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
        }
        toTransformResizeTypeLabel(type) {
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
        }
        toChangeColorTypeLabel(type) {
            if (type === EShapeActionValueChangeColorType.NONE) {
                return "None";
            }
            let result = "";
            let delimiter = "";
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
        }
        toChangeColorTargetLabel(type) {
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
        }
        toChangeTextTypeLabel(type) {
            switch (type) {
                case EShapeActionValueChangeTextType.TEXT:
                    return "Text";
                case EShapeActionValueChangeTextType.NUMBER:
                    return "Number";
            }
        }
        toOpenTypeLabel(type) {
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
                        const extension = EShapeActionOpenExtensions.get(type);
                        if (extension) {
                            return extension.label;
                        }
                        return "Extension";
                    }
                    else {
                        return "Unknown";
                    }
            }
        }
        toOpenDialogTypeLabel(type) {
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
                        const extension = EShapeActionOpenDialogExtensions.get(type);
                        if (extension) {
                            return extension.label;
                        }
                        return "Extension";
                    }
                    else {
                        return "Unknown";
                    }
            }
        }
        toGestureTypeLabel(type) {
            switch (type) {
                case EShapeActionValueGestureType.SHAPE:
                    return "Shape";
                case EShapeActionValueGestureType.LAYER:
                    return "Layer";
            }
        }
        toGestureOperationTypeLabel(type) {
            switch (type) {
                case EShapeActionValueGestureOperationType.DRAG:
                    return "Drag";
                case EShapeActionValueGestureOperationType.PINCH:
                    return "Pinch";
            }
            return "Unknown";
        }
        toMiscTypeLabel(type) {
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
                default:
                    if (EShapeActionValueMiscType.EXTENSION <= type) {
                        const extension = EShapeActionMiscExtensions.get(type);
                        if (extension) {
                            return extension.label;
                        }
                        return "Extension";
                    }
                    else {
                        return "Unknown";
                    }
            }
        }
        toHtmlElementWhenLabel(when) {
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
            return "Unknown";
        }
        toOnInputActionLabel(type) {
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
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkShapeActionValue = () => {
        DThemeDark.set("EShapeActionValue", EThemeDarkShapeActionValue);
    };

    const EShapeStrokeSide = wcardinal.ui.EShapeStrokeSide;

    /*
     * Copyright (C) 2021 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class EThemeDarkShape {
        getFillColor() {
            return 0xffffff;
        }
        getFillAlpha() {
            return 0.2;
        }
        getStrokeColor() {
            return 0xdddddd;
        }
        getStrokeAlpha() {
            return 1;
        }
        getStrokeWidth() {
            return 2;
        }
        getStrokeAlign() {
            return 0;
        }
        getStrokeSide() {
            return EShapeStrokeSide.ALL;
        }
        getStrokeStyle() {
            return EShapeStrokeStyle.NONE;
        }
        getTextValue() {
            return "";
        }
        getTextColor() {
            return this.getStrokeColor();
        }
        getTextAlpha() {
            return this.getStrokeAlpha();
        }
        getTextFamily() {
            return "auto";
        }
        getTextSize() {
            return 14;
        }
        getRadius() {
            return 0.25;
        }
        getSizeX() {
            return 100;
        }
        getSizeY() {
            return 100;
        }
        getHighlightColor() {
            return 0x1e87f0;
        }
        getCurveSegmentCount() {
            return 24;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkShape = () => {
        DThemeDark.set("EShape", EThemeDarkShape);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkSlider extends DThemeDarkBase {
        getInteractive() {
            return DBaseInteractive.CHILDREN;
        }
        getOutlineColor(state) {
            return null;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkSliderHorizontal extends DThemeDarkSlider {
        getHeight() {
            return 33;
        }
        getWidth() {
            return 300;
        }
        getX() {
            return "CENTER";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkSliderLabel extends DThemeDarkTextBase {
        getHeight() {
            return 15;
        }
        getWidth() {
            return 30;
        }
        getTextAlignHorizontal() {
            return DAlignHorizontal.CENTER;
        }
        getTextAlignVertical() {
            return DAlignVertical.MIDDLE;
        }
        newState(state) {
            super.newState(state);
            state.isFocusable = false;
        }
    }

    class DThemeDarkSliders {
        static getBackgroundColor(state, isActive) {
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
        }
    }
    DThemeDarkSliders.BACKGROUND_COLOR_ACTIVE = DThemeDarkConstants.HIGHLIGHT_COLOR;
    DThemeDarkSliders.BACKGROUND_COLOR_ACTIVE_HOVERED = UtilRgb.darken(DThemeDarkSliders.BACKGROUND_COLOR_ACTIVE, 0.1);
    DThemeDarkSliders.BACKGROUND_COLOR_ACTIVE_PRESSED = UtilRgb.darken(DThemeDarkSliders.BACKGROUND_COLOR_ACTIVE, 0.2);
    DThemeDarkSliders.BACKGROUND_COLOR = DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR;
    DThemeDarkSliders.BACKGROUND_COLOR_HOVERED = UtilRgb.darken(DThemeDarkSliders.BACKGROUND_COLOR, 0.1);
    DThemeDarkSliders.BACKGROUND_COLOR_PRESSED = UtilRgb.darken(DThemeDarkSliders.BACKGROUND_COLOR, 0.2);
    DThemeDarkSliders.BACKGROUND_COLOR_DISABLED = UtilRgb.blend(DThemeDarkSliders.BACKGROUND_COLOR, DThemeDarkConstants.BACKGROUND_COLOR, 0.5);

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    /* eslint-disable prettier/prettier */
    DThemeDarkAtlas.add("slider_thumb", 16, 16, `<circle cx="8" cy="8" r="7.5" stroke="none" fill="#ffffff" />`);
    /* eslint-enable prettier/prettier */
    class DThemeDarkSliderThumb extends DThemeDarkButton {
        getX() {
            return "CENTER";
        }
        getY() {
            return "CENTER";
        }
        getWidth() {
            return 16;
        }
        getHeight() {
            return 16;
        }
        getBackgroundColor(state) {
            return null;
        }
        getBorderColor(state) {
            return null;
        }
        getImageSource(state) {
            return DThemeDarkAtlas.mappings.slider_thumb;
        }
        getImageTintColor(state) {
            return DThemeDarkSliders.getBackgroundColor(state, true);
        }
        getImageTintAlpha(state) {
            return 1;
        }
        getImageAlignHorizontal() {
            return DAlignHorizontal.CENTER;
        }
        getOutlineColor(state) {
            return null;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkSliderTrack extends DThemeDarkButton {
        getBackgroundColor(state) {
            return DThemeDarkSliders.getBackgroundColor(state);
        }
        getBorderColor(state) {
            return null;
        }
        getOutlineColor(state) {
            return super.getOutlineColorNonActive(state);
        }
        getOutlineOffset(state) {
            return super.getOutlineOffsetNonActive(state);
        }
        newState(state) {
            super.newState(state);
            state.isFocusable = false;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkSliderTrackHorizontal extends DThemeDarkSliderTrack {
        getX() {
            return 0;
        }
        getY() {
            return "CENTER";
        }
        getWidth() {
            return "100%";
        }
        getHeight() {
            return 5;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkSliderTrackVertical extends DThemeDarkSliderTrack {
        getX() {
            return "CENTER";
        }
        getY() {
            return 0;
        }
        getWidth() {
            return 5;
        }
        getHeight() {
            return "100%";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkSliderValue extends DThemeDarkTextBase {
        getX() {
            return "CENTER";
        }
        getY() {
            return "CENTER";
        }
        getWidth() {
            return this.getLineHeight() * 2;
        }
        getHeight() {
            return this.getLineHeight();
        }
        getBackgroundColor(state) {
            if (state.inDisabled) {
                return 0x646464;
            }
            return DThemeDarkConstants.HIGHLIGHT_COLOR;
        }
        getBorderColor(state) {
            return null;
        }
        getColor(state) {
            return DThemeDarkConstants.ACTIVE_COLOR;
        }
        getAlpha(state) {
            if (state.inDisabled) {
                return 0.38;
            }
            return 1;
        }
        getTextAlignHorizontal() {
            return DAlignHorizontal.CENTER;
        }
        getTextAlignVertical() {
            return DAlignVertical.TOP;
        }
        getPrecision() {
            return 0;
        }
        newState(state) {
            super.newState(state);
            state.isFocusable = false;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkSliderVertical extends DThemeDarkSlider {
        getHeight() {
            return 322;
        }
        getWidth() {
            return 35;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkSlider = () => {
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
    const loadThemeDarkText = () => {
        DThemeDark.set("DText", DThemeDarkText);
    };

    const DTableState = wcardinal.ui.DTableState;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkTableBodyCellTrees {
        static init() {
            DThemeDarkExpandables.init();
        }
        static getImageSource(state) {
            if (state.is(DTableState.HAS_CHILDREN)) {
                if (state.is(DTableState.OPENED)) {
                    return DThemeDarkExpandables.getImageOpened();
                }
                else {
                    return DThemeDarkExpandables.getImageClosed();
                }
            }
            return null;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkTreeItems extends DThemeDarkListItems {
        getSecondaryImageSource(state) {
            return DThemeDarkTableBodyCellTrees.getImageSource(state);
        }
        getSecondaryImageTintColor(state) {
            return this.getColor(state);
        }
        getSecondaryImageTintAlpha(state) {
            return this.getAlpha(state) * 0.5;
        }
        getSecondaryImageAlignWith() {
            return DAlignWith.PADDING;
        }
        getSecondaryImageMarginHorizontal() {
            return -19;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkTree extends DThemeDarkPane {
        constructor() {
            super();
            this._style = this.newStyle();
        }
        newStyle() {
            return new DThemeDarkTreeItems(null, true, false);
        }
        getBackgroundColor(state) {
            return DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkTreeItemText extends DThemeDarkImageBase {
        constructor() {
            super();
            this._style = this.newStyle();
        }
        newStyle() {
            return new DThemeDarkTreeItems(null, true, false);
        }
        getBackgroundColor(state) {
            return this._style.getBackgroundColor(state);
        }
        getBackgroundAlpha(state) {
            return this._style.getBackgroundAlpha(state);
        }
        getBorderColor(state) {
            return this._style.getBorderColor(state);
        }
        getBorderMask(state) {
            return this._style.getBorderMask(state);
        }
        getColor(state) {
            return this._style.getColor(state);
        }
        getAlpha(state) {
            return this._style.getAlpha(state);
        }
        getHeight() {
            return this._style.getHeight();
        }
        getCornerMask() {
            return this._style.getCornerMask();
        }
        getImageTintColor(state) {
            return this._style.getImageTintColor(state);
        }
        getCursor(state) {
            return this._style.getCursor(state);
        }
        getPaddingLeft() {
            return 10;
        }
        getPaddingRight() {
            return 10;
        }
        newTextValue() {
            return undefined;
        }
        getWidth() {
            return "padding";
        }
        getLevelPadding(level) {
            return 24 + level * 20 - this.getPaddingLeft();
        }
        newState(state) {
            super.newState(state);
            state.isDisabled = true;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkTreeItemButton extends DThemeDarkTreeItemText {
        getCursor(state) {
            if (!state.isActionable) {
                return "";
            }
            return "pointer";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    DThemeDarkTableBodyCellTrees.init();
    class DThemeDarkTreeItemNonEditable extends DThemeDarkTreeItemButton {
        getSecondaryImageSource(state) {
            return this._style.getSecondaryImageSource(state);
        }
        getSecondaryImageTintColor(state) {
            return this._style.getSecondaryImageTintColor(state);
        }
        getSecondaryImageTintAlpha(state) {
            return this._style.getSecondaryImageTintAlpha(state);
        }
        getSecondaryImageAlignWith() {
            return this._style.getSecondaryImageAlignWith();
        }
        getSecondaryImageMarginHorizontal() {
            return this._style.getSecondaryImageMarginHorizontal();
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkTree = () => {
        DThemeDark.set("DTree", DThemeDarkTree);
        DThemeDark.set("DTreeItemText", DThemeDarkTreeItemText);
        DThemeDark.set("DTreeItemButton", DThemeDarkTreeItemButton);
        DThemeDark.set("DTreeItemNonEditable", DThemeDarkTreeItemNonEditable);
    };

    const UtilGestureModifier = wcardinal.ui.UtilGestureModifier;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkView {
        isWheelZoomEnabled() {
            return true;
        }
        getWheelZoomSpeed() {
            return 0.004;
        }
        getWheelZoomModifier() {
            return UtilGestureModifier.NOT_NONE;
        }
        isWheelTranslationEnabled() {
            return true;
        }
        getWheelTranslationSpeed() {
            return 14 * 0.16;
        }
        getWheelTranslationModifier() {
            return UtilGestureModifier.NONE;
        }
        isDblClickZoomEnabled() {
            return true;
        }
        getDblClickZoomSpeed() {
            return 2;
        }
        getDblClickZoomModifier() {
            return UtilGestureModifier.NONE;
        }
        getDblClickZoomDuration() {
            return 333;
        }
        getZoomMin() {
            return 0.01;
        }
        getZoomMax() {
            return 100;
        }
        getZoomKeepRatio() {
            return true;
        }
        getGestureMode() {
            return UtilGestureMode.ON;
        }
        getGestureModifier() {
            return UtilGestureModifier.NONE;
        }
        getGestureDuration() {
            return 1;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkView = () => {
        DThemeDark.set("DView", DThemeDarkView);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDark = () => {
        DThemes.setDefaultThemeClass(DThemeDark);
    };

    const newSvgRoundedRect = (x, y, width, height, fill, stroke, strokeWidth, strokeOpacity) => {
        const sw = strokeWidth !== null && strokeWidth !== void 0 ? strokeWidth : 0;
        const o = sw * 0.5;
        const r = Math.max(0, 3 - o);
        const w = width - sw - r - r;
        const h = height - sw - r - r;
        x += o + r;
        y += o;
        return (`<path d="M${x},${y} h${w} a${r},${r} 0 0 1 ${r},${r} v${h} a${r},${r} 0 0 1 -${r},${r} h-${w} a${r},${r} 0 0 1 -${r},-${r} v-${h} a${r},${r} 0 0 1 ${r},-${r}z" fill="${fill}"` +
            (stroke ? ` stroke="${stroke}"` : ``) +
            (strokeWidth != null ? ` stroke-width="${strokeWidth}"` : ``) +
            (strokeOpacity != null ? ` stroke-opacity="${strokeOpacity}"` : ``) +
            ` />`);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    /* eslint-disable prettier/prettier */
    DThemeDarkAtlas.add("button_color_sample", 21, 21, newSvgRoundedRect(3, 3, 15, 15, "#fff", "#eee", 1));
    /* eslint-enable prettier/prettier */
    const formatter$8 = (colorAndAlpha) => {
        return `#${UtilRgb.toCode(colorAndAlpha.color)} A${colorAndAlpha.alpha.toFixed(2)}`;
    };
    class DThemeDarkButtonColor extends DThemeDarkButton {
        getImageTintColor(state) {
            return 0xffffff;
        }
        getImageSource(state) {
            return DThemeDarkAtlas.mappings.button_color_sample;
        }
        getTextFormatter() {
            return formatter$8;
        }
        newTextValue() {
            return {
                color: 0xdedede,
                alpha: 1
            };
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkDialogColor extends DThemeDarkDialogFitted {
    }

    const DColorType = wcardinal.ui.DColorType;

    let isPatternInjected = false;
    const newSvgRoundedCheckerboard = (width, height, color1, color2, stroke, strokeWidth, strokeOpacity) => {
        let result = "";
        if (!isPatternInjected) {
            isPatternInjected = true;
            result =
                `<defs>` +
                    `<pattern id="rounded-checkerboard-pattern" patternUnits="userSpaceOnUse" width="18" height="18">` +
                    `<rect x="0" y="0" width="9" height="9" fill="${color1}" />` +
                    `<rect x="9" y="0" width="9" height="9" fill="${color2}" />` +
                    `<rect x="0" y="9" width="9" height="9" fill="${color2}" />` +
                    `<rect x="9" y="9" width="9" height="9" fill="${color1}" />` +
                    `</pattern>` +
                    `</defs>`;
        }
        result += newSvgRoundedRect(0, 0, width, height, "url(#rounded-checkerboard-pattern)", stroke, strokeWidth, strokeOpacity);
        return result;
    };

    const newDarkSvgRoundedCheckerboard = (width, height, stroke, strokeWidth, strokeOpacity) => {
        return newSvgRoundedCheckerboard(width, height, "#5f5f5f", "#454545", stroke, strokeWidth, strokeOpacity);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    /* eslint-disable prettier/prettier */
    DThemeDarkAtlas.add("picker_color_main", 234, 162, `<g>` +
        `<linearGradient id="fs7w3iusfdnb" x1="0%" y1="0%" x2="100%" y2="0%">` +
        `<stop stop-color="#FFFFFF" stop-opacity="0" offset="0"/>` +
        `<stop stop-color="#FFFFFF" stop-opacity="1" offset="1"/>` +
        `</linearGradient>` +
        `<linearGradient id="2rfcfe9874bw" x1="0%" y1="0%" x2="0%" y2="100%">` +
        `<stop stop-color="#000000" stop-opacity="0" offset="0"/>` +
        `<stop stop-color="#000000" stop-opacity="1" offset="1"/>` +
        `</linearGradient>` +
        newSvgRoundedRect(0, 0, 234, 162, "url(#fs7w3iusfdnb)") +
        newSvgRoundedRect(0, 0, 234, 162, "url(#2rfcfe9874bw)") +
        `</g>`);
    DThemeDarkAtlas.add("picker_color_main_base", 234, 162, `<rect x="0" y="0" width="236" height="164" fill="#fff" />`);
    DThemeDarkAtlas.add("picker_color_alpha_checkerboard", 234, 18, newDarkSvgRoundedCheckerboard(234, 18));
    DThemeDarkAtlas.add("picker_color_alpha", 234, 18, `<g>` +
        `<linearGradient id="s48afbuh44" x1="0%" y1="0%" x2="100%" y2="0%">` +
        `<stop stop-color="#FFFFFF" stop-opacity="0" offset="0"/>` +
        `<stop stop-color="#FFFFFF" stop-opacity="1" offset="1"/>` +
        `</linearGradient>` +
        `<rect x="0" y="0" width="234" height="18" fill="url(#s48afbuh44)" />` +
        `</g>`);
    DThemeDarkAtlas.add("picker_color_base", 234, 18, `<g>` +
        `<linearGradient id="ni2rbisdf3" x1="0%" y1="0%" x2="100%" y2="0%">` +
        `<stop stop-color="#FF0000" offset="0"/>` +
        `<stop stop-color="#FFFF00" offset="0.167"/>` +
        `<stop stop-color="#00FF00" offset="0.333"/>` +
        `<stop stop-color="#00FFFF" offset="0.5"/>` +
        `<stop stop-color="#0000FF" offset="0.667"/>` +
        `<stop stop-color="#FF00FF" offset="0.833"/>` +
        `<stop stop-color="#FF0000" offset="1"/>` +
        `</linearGradient>` +
        newSvgRoundedRect(0, 0, 234, 18, "url(#ni2rbisdf3)") +
        `</g>`);
    DThemeDarkAtlas.add("picker_color_base_pointer", 16.2, 31.8, `<rect x="4.5" y="4.5" width="7.2" height="22.8" stroke="#ffffff" stroke-width="2.4" fill="none" />`);
    DThemeDarkAtlas.add("picker_color_pointer", 25.8, 25.8, `<circle cx="12.9" cy="12.9" r="4.8" stroke="#5f5f5f" stroke-width="2.4" fill="none" />` +
        `<circle cx="12.9" cy="12.9" r="7.2" stroke="#ffffff" stroke-width="2.4" fill="none" />`);
    DThemeDarkAtlas.add("picker_color_recent_checkerboard", 18, 18, newDarkSvgRoundedCheckerboard(18, 18));
    DThemeDarkAtlas.add("picker_color_recent", 18, 18, newSvgRoundedRect(0, 0, 18, 18, "#fff", "#eee", 1));
    DThemeDarkAtlas.add("picker_color_sample_checkerboard", 42, 66, newDarkSvgRoundedCheckerboard(42, 66, "#fff", 1, 0));
    DThemeDarkAtlas.add("picker_color_sample", 42, 66, newSvgRoundedRect(0, 0, 42, 66, "#fff", "#eee", 1));
    DThemeDarkAtlas.add("picker_color_anchor_outlined", 25.8, 25.8, `<circle cx="12.9" cy="12.9" r="8.4" stroke="none" fill="#ffffff" />` +
        `<circle cx="12.9" cy="12.9" r="9.6" stroke="#5f5f5f" stroke-width="2.4" fill="none" />`);
    DThemeDarkAtlas.add("picker_color_anchor", 28.2, 28.2, `<circle cx="14.1" cy="14.1" r="6" stroke="none" fill="#ffffff" />` +
        `<circle cx="14.1" cy="14.1" r="7.2" stroke="#5f5f5f" stroke-width="2.4" fill="none" />`);
    DThemeDarkAtlas.add("picker_color_direction", 12, 30, `<path d="M0.6 25.8 L 12.0375 5.9895" stroke="#5f5f5f" stroke-width="1.2" fill="none" />` +
        `<path d="M8.5125 25.8 A 8.475 8.475 0 0 0 4.275 18.4605" stroke="#5f5f5f" stroke-width="1.2" fill="none" />` +
        `<rect x="0.6" y="24.6" width="11.4375" height="1.2" rx="0.6" ry="0.6" stroke="none" fill="#5f5f5f" />`);
    DThemeDarkAtlas.add("picker_color_standard", 18, 18, newSvgRoundedRect(0, 0, 18, 18, "#fff", "#eee", 1));
    /* eslint-enable prettier/prettier */
    class DThemeDarkPickerColor extends DThemeDarkBase {
        getMainWidth() {
            return 234;
        }
        getMainHeight() {
            return 162;
        }
        getMainTexture() {
            return DThemeDarkAtlas.mappings.picker_color_main;
        }
        getMainBaseTexture() {
            return DThemeDarkAtlas.mappings.picker_color_main_base;
        }
        getMainPointerTexture() {
            return DThemeDarkAtlas.mappings.picker_color_pointer;
        }
        getMainPointerColor() {
            return 0xffffff;
        }
        getMainPointerAlpha() {
            return 1;
        }
        getBaseHeight() {
            return 18;
        }
        getBaseMargin() {
            return 6;
        }
        getBaseTexture() {
            return DThemeDarkAtlas.mappings.picker_color_base;
        }
        getBasePointerTexture() {
            return DThemeDarkAtlas.mappings.picker_color_base_pointer;
        }
        getBasePointerColor() {
            return 0xffffff;
        }
        getBasePointerAlpha() {
            return this.getMainPointerAlpha();
        }
        getAlphaHeight() {
            return this.getBaseHeight();
        }
        getAlphaMargin() {
            return this.getBaseMargin();
        }
        getAlphaTexture() {
            return DThemeDarkAtlas.mappings.picker_color_alpha;
        }
        getAlphaCheckerboardTexture() {
            return DThemeDarkAtlas.mappings.picker_color_alpha_checkerboard;
        }
        getAlphaPointerTexture() {
            return this.getBasePointerTexture();
        }
        getAlphaPointerColor() {
            return this.getBasePointerColor();
        }
        getAlphaPointerAlpha() {
            return this.getMainPointerAlpha();
        }
        getRecentMargin() {
            return this.getBaseMargin();
        }
        getRecentColorWidth() {
            return this.getBaseHeight();
        }
        getRecentColorHeight() {
            return this.getRecentColorWidth();
        }
        getRecentColorMargin() {
            return this.getRecentMargin();
        }
        getRecentColorCount() {
            return 10;
        }
        getRecentCheckerboardTexture() {
            return DThemeDarkAtlas.mappings.picker_color_recent_checkerboard;
        }
        getRecentTexture() {
            return DThemeDarkAtlas.mappings.picker_color_recent;
        }
        getInputMargin() {
            return this.getBaseMargin();
        }
        getInputLabelWidth() {
            return 18;
        }
        getSampleWidth() {
            return 42;
        }
        getSampleHeight() {
            return 66;
        }
        getSampleMargin() {
            return this.getBaseMargin();
        }
        getSampleCheckerboardOldTexture() {
            return DThemeDarkAtlas.mappings.picker_color_sample_checkerboard;
        }
        getSampleCheckerboardNewTexture() {
            return DThemeDarkAtlas.mappings.picker_color_sample_checkerboard;
        }
        getSampleOldTexture() {
            return DThemeDarkAtlas.mappings.picker_color_sample;
        }
        getSampleNewTexture() {
            return DThemeDarkAtlas.mappings.picker_color_sample;
        }
        getStandardColorCount() {
            return 80;
        }
        getStandardColorWidth() {
            return this.getBaseHeight();
        }
        getStandardColorHeight() {
            return this.getStandardColorWidth();
        }
        getStandardColorMargin() {
            return this.getBaseMargin();
        }
        getStandardTexture() {
            return DThemeDarkAtlas.mappings.picker_color_standard;
        }
        getBackgroundColor(state) {
            return null;
        }
        getBorderColor(state) {
            return null;
        }
        getInteractive() {
            return DBaseInteractive.CHILDREN;
        }
        newState(state) {
            super.newState(state);
            state.isFocusable = false;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkEnUsPickerColor extends DThemeDarkPickerColor {
        toColorTypeLabel(type) {
            switch (type) {
                case DColorType.STANDARD:
                    return "Standard";
                case DColorType.CUSTOM:
                    return "Custom";
            }
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkEnUsPickerColor = () => {
        DThemeDark.set("DPickerColor", DThemeDarkEnUsPickerColor);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkEnUsDialogColor = () => {
        DThemeDark.set("DDialogColor", DThemeDarkDialogColor);
        loadThemeDarkEnUsPickerColor();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkEnUsButtonColor = () => {
        DThemeDark.set("DButtonColor", DThemeDarkButtonColor);
        loadThemeDarkEnUsDialogColor();
    };

    const DColorGradientObservable = wcardinal.ui.DColorGradientObservable;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    /* eslint-disable prettier/prettier */
    DThemeDarkAtlas.add("button_color_gradient_sample", 21, 21, newSvgRoundedRect(3, 3, 15, 15, "#fff", "#eee", 1));
    /* eslint-enable prettier/prettier */
    const formatter$7 = () => {
        return "";
    };
    class DThemeDarkButtonColorGradient extends DThemeDarkButton {
        getViewBaseTexture() {
            return DThemeDarkAtlas.mappings.button_color_gradient_sample;
        }
        getTextFormatter() {
            return formatter$7;
        }
        newTextValue() {
            return new DColorGradientObservable();
        }
        getCheckerColors() {
            return [0x37255, 0.27];
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkDialogColorGradient extends DThemeDarkDialogFitted {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkPickerColorGradient extends DThemeDarkBase {
        getGradientPointsWidth() {
            return 30;
        }
        getGradientPointsMargin() {
            return 24;
        }
        getGradientAnchorTexture() {
            return DThemeDarkAtlas.mappings.picker_color_anchor;
        }
        getGradientAnchorOutlinedTexture() {
            return DThemeDarkAtlas.mappings.picker_color_anchor_outlined;
        }
        getGradientAnchorOutlineTexture() {
            return DThemeDarkAtlas.mappings.picker_color_anchor_outline;
        }
        getGradientDirectionMargin() {
            return 5;
        }
        getGradientDirectionTexture() {
            return DThemeDarkAtlas.mappings.picker_color_direction;
        }
        getGradientRecentColumn() {
            return 4;
        }
        getGradientRecentWidth() {
            return 30;
        }
        getGradientRecentMargin() {
            return 5;
        }
        getGradientRecentCount() {
            return 16;
        }
        getGradientRecents() {
            return [];
        }
        getGradientCheckerColors() {
            return [0.37255, 0.27];
        }
        getBackgroundColor(state) {
            return null;
        }
        getBorderColor(state) {
            return null;
        }
        getInteractive() {
            return DBaseInteractive.CHILDREN;
        }
        newState(state) {
            super.newState(state);
            state.isFocusable = false;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkEnUsPickerColorGradient = () => {
        DThemeDark.set("DPickerColorGradient", DThemeDarkPickerColorGradient);
        loadThemeDarkEnUsPickerColor();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkEnUsDialogColorGradient = () => {
        DThemeDark.set("DDialogColorGradient", DThemeDarkDialogColorGradient);
        loadThemeDarkEnUsPickerColorGradient();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkEnUsButtonColorGradient = () => {
        DThemeDark.set("DButtonColorGradient", DThemeDarkButtonColorGradient);
        loadThemeDarkEnUsDialogColorGradient();
    };

    const DPickerDates = wcardinal.ui.DPickerDates;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const formatter$6 = (value) => {
        return DPickerDates.format(value);
    };
    class DThemeDarkButtonDate extends DThemeDarkButton {
        getTextFormatter() {
            return formatter$6;
        }
        newTextValue() {
            return new Date();
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkDialogDate extends DThemeDarkDialogFitted {
    }

    const DPickerDatetimeMask = wcardinal.ui.DPickerDatetimeMask;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkPickerTime extends DThemeDarkBase {
        getBackgroundColor(state) {
            return null;
        }
        getInteractive() {
            return DBaseInteractive.CHILDREN;
        }
        newState(state) {
            super.newState(state);
            state.isFocusable = false;
        }
        getMargin() {
            return 8;
        }
        getMask() {
            return DPickerDatetimeMask.HOURS | DPickerDatetimeMask.MINUTES;
        }
        getWidth() {
            return "auto";
        }
        getHeight() {
            return "auto";
        }
        getLowerBound() {
            return null;
        }
        isLowerBoundInclusive() {
            return false;
        }
        getUpperBound() {
            return null;
        }
        isUpperBoundInclusive() {
            return false;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkEnUsPickerTime extends DThemeDarkPickerTime {
        getHoursOptions() {
            return {
                width: 100,
                title: "Hours"
            };
        }
        getMinutesOptions() {
            return {
                width: 100,
                title: "Minutes"
            };
        }
        getSecondsOptions() {
            return {
                width: 100,
                title: "Seconds"
            };
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const MONTH_LABELS = [
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
    const DAY_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    const defaultLabelFormatter = (date) => {
        return `${MONTH_LABELS[date.getMonth()]} ${date.getFullYear()}`;
    };
    const defaultDateDecorator = () => {
        /* DO NOTHING*/
    };
    class DThemeDarkEnUsPickerDatetime extends DThemeDarkEnUsPickerTime {
        getDayLabels() {
            return DAY_LABELS;
        }
        getLabelFormatter() {
            return defaultLabelFormatter;
        }
        getDateDecorator() {
            return defaultDateDecorator;
        }
        getBackButtonOptions() {
            return {
                title: "Previous"
            };
        }
        getNextButtonOptions() {
            return {
                title: "Next"
            };
        }
        getDayStart() {
            return 0;
        }
        getMask() {
            return DPickerDatetimeMask.DATE | super.getMask();
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkEnUsPickerDate extends DThemeDarkEnUsPickerDatetime {
        getMask() {
            return DPickerDatetimeMask.DATE;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    /* eslint-disable prettier/prettier */
    DThemeDarkAtlas.add("picker_date_back", 24, 24, `<g>` +
        `<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="#fff" />` +
        `</g>`);
    /* eslint-enable prettier/prettier */
    class DThemeDarkPickerDatetimeButtonBack extends DThemeDarkButtonAmbient {
        getWidth() {
            return "auto";
        }
        getImageAlignWith() {
            return DAlignWith.PADDING;
        }
        getImageMarginHorizontal() {
            return 0;
        }
        getImageAlignHorizontal() {
            return DAlignHorizontal.LEFT;
        }
        getImageSource(state) {
            return DThemeDarkAtlas.mappings.picker_date_back;
        }
        getAlpha(state) {
            return super.getAlpha(state) * 0.9;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkPickerDatetimeButtonDate extends DThemeDarkButtonAmbient {
        getTextAlignHorizontal() {
            return DAlignHorizontal.CENTER;
        }
        getTextStyleClipping() {
            return false;
        }
        getWidth() {
            return 30;
        }
        getHeight() {
            return 30;
        }
        isToggle() {
            return true;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    /* eslint-disable prettier/prettier */
    DThemeDarkAtlas.add("picker_date_next", 24, 24, `<g>` +
        `<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="#fff" />` +
        `</g>`);
    /* eslint-enable prettier/prettier */
    class DThemeDarkPickerDatetimeButtonNext extends DThemeDarkButtonAmbient {
        getWidth() {
            return "auto";
        }
        getImageAlignWith() {
            return DAlignWith.PADDING;
        }
        getImageMarginHorizontal() {
            return 0;
        }
        getImageAlignHorizontal() {
            return DAlignHorizontal.LEFT;
        }
        getImageSource(state) {
            return DThemeDarkAtlas.mappings.picker_date_next;
        }
        getAlpha(state) {
            return super.getAlpha(state) * 0.9;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkPickerDatetimeLabel extends DThemeDarkText {
        getWidth() {
            return 30;
        }
        getHeight() {
            return 30;
        }
        getTextStyleClipping() {
            return false;
        }
        getTextAlignHorizontal() {
            return DAlignHorizontal.CENTER;
        }
        getAlpha(state) {
            return super.getAlpha(state) * 0.9;
        }
        getFontWeight() {
            return "bold";
        }
        getFontSize() {
            return Math.round(super.getFontSize() * 1.25);
        }
        newTextValue() {
            return new Date();
        }
        getInteractive() {
            return DBaseInteractive.NONE;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkPickerDatetimeLabelDate extends DThemeDarkText {
        getWidth() {
            return 30;
        }
        getHeight() {
            return 30;
        }
        getTextStyleClipping() {
            return false;
        }
        getTextAlignHorizontal() {
            return DAlignHorizontal.CENTER;
        }
        getAlpha(state) {
            return super.getAlpha(state) * 0.9;
        }
        getFontWeight() {
            return "bold";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkPickerDatetimeSpace extends DThemeDarkBase {
        getBackgroundColor(state) {
            return null;
        }
        getBorderColor(state) {
            return null;
        }
        getWidth() {
            return 30;
        }
        getHeight() {
            return 30;
        }
        newState(state) {
            super.newState(state);
            state.isFocusable = false;
        }
        getInteractive() {
            return DBaseInteractive.NONE;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkEnUsPickerTime = () => {
        DThemeDark.set("DPickerTime", DThemeDarkEnUsPickerTime);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkEnUsPickerDatetime = () => {
        DThemeDark.set("DPickerDatetimeButtonBack", DThemeDarkPickerDatetimeButtonBack);
        DThemeDark.set("DPickerDatetimeButtonDate", DThemeDarkPickerDatetimeButtonDate);
        DThemeDark.set("DPickerDatetimeButtonNext", DThemeDarkPickerDatetimeButtonNext);
        DThemeDark.set("DPickerDatetimeLabelDate", DThemeDarkPickerDatetimeLabelDate);
        DThemeDark.set("DPickerDatetimeLabel", DThemeDarkPickerDatetimeLabel);
        DThemeDark.set("DPickerDatetimeSpace", DThemeDarkPickerDatetimeSpace);
        DThemeDark.set("DPickerDatetime", DThemeDarkEnUsPickerDatetime);
        loadThemeDarkEnUsPickerTime();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkEnUsPickerDate = () => {
        DThemeDark.set("DPickerDate", DThemeDarkEnUsPickerDate);
        loadThemeDarkEnUsPickerDatetime();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkEnUsDialogDate = () => {
        DThemeDark.set("DDialogDate", DThemeDarkDialogDate);
        loadThemeDarkEnUsPickerDate();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkEnUsButtonDate = () => {
        DThemeDark.set("DButtonDate", DThemeDarkButtonDate);
        loadThemeDarkEnUsDialogDate();
    };

    const DPickerDatetimes = wcardinal.ui.DPickerDatetimes;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const formatter$5 = (value, caller) => {
        return DPickerDatetimes.format(value, caller.getDatetimeMask());
    };
    class DThemeDarkButtonDatetime extends DThemeDarkButton {
        getTextFormatter() {
            return formatter$5;
        }
        newTextValue() {
            return new Date();
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkDialogDatetime extends DThemeDarkDialogFitted {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkEnUsDialogDatetime = () => {
        DThemeDark.set("DDialogDatetime", DThemeDarkDialogDatetime);
        loadThemeDarkEnUsPickerDatetime();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkEnUsButtonDatetime = () => {
        DThemeDark.set("DButtonDatetime", DThemeDarkButtonDatetime);
        loadThemeDarkEnUsDialogDatetime();
    };

    const toLabel = wcardinal.ui.toLabel;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkButtonSelect extends DThemeDarkButton {
        getTextFormatter() {
            return toLabel;
        }
        newTextValue() {
            return null;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkDialogSelectList extends DThemeDarkList {
        getBackgroundColor(state) {
            return null;
        }
        getBorderColor(state) {
            return null;
        }
        getHeight() {
            return 250;
        }
        getCornerMask() {
            return DCornerMask.ALL;
        }
        newState(state) {
            super.newState(state);
            state.isFocusable = false;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkDialogSelectListItem extends DThemeDarkListItem {
        newStyle() {
            return new DThemeDarkListItems(null, false, true);
        }
        getCornerMask() {
            return DCornerMask.NONE;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkDialogSelect extends DThemeDarkDialogLayered {
        getWidth() {
            return 480;
        }
        getFooter() {
            return null;
        }
        getInputMargin() {
            return 19;
        }
        isDismissable() {
            return false;
        }
        isCategoryDismissable() {
            return true;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkEnUsDialogSelect extends DThemeDarkDialogSelect {
        getDismissLabel() {
            return "None";
        }
        getCategoryDismissLabel() {
            return "All";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkEnUsDialogSelect = () => {
        DThemeDark.set("DDialogSelect", DThemeDarkEnUsDialogSelect);
        DThemeDark.set("DDialogSelectList", DThemeDarkDialogSelectList);
        DThemeDark.set("DDialogSelectListItem", DThemeDarkDialogSelectListItem);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkEnUsButtonSelect = () => {
        DThemeDark.set("DButtonSelect", DThemeDarkButtonSelect);
        loadThemeDarkEnUsDialogSelect();
    };

    const DPickerTimes = wcardinal.ui.DPickerTimes;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const formatter$4 = (value, caller) => {
        return DPickerTimes.format(value, caller.getDatetimeMask());
    };
    class DThemeDarkButtonTime extends DThemeDarkButton {
        getTextFormatter() {
            return formatter$4;
        }
        newTextValue() {
            return new Date();
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkDialogTime extends DThemeDarkDialogFitted {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkEnUsDialogTime = () => {
        DThemeDark.set("DDialogTime", DThemeDarkDialogTime);
        loadThemeDarkEnUsPickerTime();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkEnUsButtonTime = () => {
        DThemeDark.set("DButtonTime", DThemeDarkButtonTime);
        loadThemeDarkEnUsDialogTime();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkEnUsButtonAll = () => {
        loadThemeDarkButtonAmbient();
        loadThemeDarkButtonCheckRight();
        loadThemeDarkButtonCheck();
        loadThemeDarkEnUsButtonColorGradient();
        loadThemeDarkEnUsButtonColor();
        loadThemeDarkEnUsButtonSelect();
        loadThemeDarkButtonDanger();
        loadThemeDarkEnUsButtonDate();
        loadThemeDarkEnUsButtonDatetime();
        loadThemeDarkButtonFile();
        loadThemeDarkButtonLink();
        loadThemeDarkButtonPrimary();
        loadThemeDarkButtonRadioRight();
        loadThemeDarkButtonRadio();
        loadThemeDarkButtonSecondary();
        loadThemeDarkEnUsButtonTime();
        loadThemeDarkButton();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkDiagramBase extends DThemeDarkCanvasContainer {
        getCanvasBackgroundColor() {
            return 0x2e2e2e;
        }
        getCanvasBackgroundAlpha() {
            return 1.0;
        }
        isAmbient() {
            return true;
        }
        getCanvasShadow() {
            return "WEAK";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkDiagram extends DThemeDarkDiagramBase {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkDiagramCanvasBase extends DThemeDarkCanvas {
        isAmbient() {
            return true;
        }
        getBackgroundBase() {
            return DThemeDarkConstants.BACKGROUND_COLOR;
        }
        getLocalBoundsLimit() {
            return 0;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkDiagramCanvas extends DThemeDarkDiagramCanvasBase {
        newState(state) {
            super.newState(state);
            state.isFocusable = false;
        }
    }

    class EThemeDarkShapePointsFormatter {
    }

    class EThemeDarkEnUsShapePointsFormatter extends EThemeDarkShapePointsFormatter {
        getCurveSplineLabel() {
            return "Spline Curve";
        }
        getCurveBezierQuadraticLabel() {
            return "Quadratic Bezier Curve";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkEnUsShapePointsFormatter = () => {
        DThemeDark.set("EShapePointsFormatter", EThemeDarkEnUsShapePointsFormatter);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkEnUsDiagram = () => {
        DThemeDark.set("DDiagram", DThemeDarkDiagram);
        DThemeDark.set("DDiagramCanvas", DThemeDarkDiagramCanvas);
        loadThemeDarkEnUsShapePointsFormatter();
        loadThemeDarkShape();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const toGridScale = (scale) => {
        if (scale <= 0 || 1 <= scale) {
            return 1;
        }
        let s = 1 / scale;
        s = s | (s >> 1);
        s = s | (s >> 2);
        s = s | (s >> 4);
        s = s | (s >> 8);
        s = s | (s >> 16);
        s = s | (s >> 32);
        return s - (s >> 1);
    };
    const toGridSize = (grid, width, height, scale) => {
        const canvas = Math.max(width, height);
        if (0 < grid) {
            grid *= toGridScale(scale);
            const minimum = canvas / 1000;
            for (let i = 0; i < 10 && grid < minimum; ++i) {
                grid *= 10;
            }
            if (minimum <= grid) {
                return grid;
            }
        }
        return canvas;
    };
    class DThemeDarkDiagramCanvasEditor extends DThemeDarkDiagramCanvasBase {
        isAmbient() {
            return false;
        }
        getLocalBoundsLimit() {
            return 1000;
        }
        getOutlineColor(state) {
            return null;
        }
        getSnapGridMajorInterval() {
            return 10;
        }
        getSnapGridMajorColor() {
            return 0x999999;
        }
        getSnapGridMajorAlpha() {
            return 0.5;
        }
        getSnapGridMajorWidth() {
            var _a;
            return Math.max(1, 2 / ((_a = window.devicePixelRatio) !== null && _a !== void 0 ? _a : 1));
        }
        getSnapGridMajorStyle() {
            return EShapeStrokeStyle.DASHED | EShapeStrokeStyle.NON_SCALING;
        }
        getSnapGridMinorColor() {
            return this.getSnapGridMajorColor();
        }
        getSnapGridMinorAlpha() {
            return 0.125;
        }
        getSnapGridMinorWidth() {
            return this.getSnapGridMajorWidth();
        }
        getSnapGridMinorStyle() {
            return this.getSnapGridMajorStyle();
        }
        getSnapGridSize() {
            return toGridSize;
        }
        getSnapTargetColor() {
            return DThemeDarkConstants.HIGHLIGHT_COLOR;
        }
        getSnapTargetAlpha() {
            return 1.0;
        }
        getSnapTargetWidth() {
            return this.getSnapGridMajorWidth();
        }
        getSnapTargetStyle() {
            return this.getSnapGridMajorStyle();
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkDiagramEditor extends DThemeDarkDiagramBase {
        isAmbient() {
            return false;
        }
        isThumbnailEnabled() {
            return false;
        }
        getThumbnailSize() {
            return null;
        }
        isSnapEnabled() {
            return true;
        }
        isSnapGridVisible() {
            return true;
        }
        isSnapGridEnabled() {
            return true;
        }
        getSnapGridSize() {
            return 10;
        }
        isSnapTargetVisible() {
            return true;
        }
        isSnapTargetEnabled() {
            return true;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkEnUsDiagramEditor extends DThemeDarkDiagramEditor {
        getBaseLayerLabel() {
            return "Base Layer";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkEnUsDiagramEditor = () => {
        DThemeDark.set("DDiagramEditor", DThemeDarkEnUsDiagramEditor);
        DThemeDark.set("DDiagramCanvasEditor", DThemeDarkDiagramCanvasEditor);
        loadThemeDarkShapeActionValue();
        loadThemeDarkEnUsShapePointsFormatter();
        loadThemeDarkShape();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkDialogLayeredHeader extends DThemeDarkImageBase {
        getWidth() {
            return "padding";
        }
        getHeight() {
            return 38;
        }
        getPaddingLeft() {
            return 16;
        }
        getPaddingRight() {
            return 16;
        }
        getBackgroundColor() {
            return null;
        }
        getCornerMask() {
            return DCornerMask.BOTTOM;
        }
        getBorderColor(state) {
            return null;
        }
        getInteractive() {
            return DBaseInteractive.CHILDREN;
        }
        newState(state) {
            state.isFocusable = false;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    /* eslint-disable prettier/prettier */
    DThemeDarkAtlas.add("dialog_layered_header_button_close", 20, 14, `<g>` +
        `<polyline fill="none" stroke="#fff" stroke-width="1" points="15 2 5 12"></polyline>` +
        `<polyline fill="none" stroke="#fff" stroke-width="1" points="5 2 15 12"></polyline>` +
        `</g>`);
    /* eslint-enable prettier/prettier */
    const X = (p, s) => {
        return p - 34;
    };
    class DThemeDarkDialogLayeredHeaderButtonClose extends DThemeDarkButtonAmbient {
        getX() {
            return X;
        }
        getY() {
            return "center";
        }
        getWidth() {
            return 30;
        }
        getHeight() {
            return 30;
        }
        getSecondaryImageAlignHorizontal() {
            return DAlignHorizontal.CENTER;
        }
        getSecondaryImageAlignVertical() {
            return DAlignVertical.MIDDLE;
        }
        getSecondaryImageAlignWith() {
            return DAlignWith.PADDING;
        }
        getSecondaryImageSource(state) {
            return DThemeDarkAtlas.mappings.dialog_layered_header_button_close;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const y = (p) => {
        return p - 1;
    };
    const width = (p) => {
        return p - 16;
    };
    class DThemeDarkDialogLayeredHeaderSeparator extends DThemeDarkImageBase {
        getX() {
            return 8;
        }
        getY() {
            return y;
        }
        getWidth() {
            return width;
        }
        getHeight() {
            return 1;
        }
        getBackgroundColor(state) {
            return DThemeDarkConstants.BORDER_COLOR;
        }
        getBorderColor(state) {
            return null;
        }
        getInteractive() {
            return DBaseInteractive.NONE;
        }
        newState(state) {
            state.isFocusable = false;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkDialogLayeredFooter extends DThemeDarkLayoutHorizontal {
        isButtonSpaceLeftEnabled() {
            return true;
        }
        isButtonSpaceRightEnabled() {
            return true;
        }
        getX() {
            return "padding";
        }
        getY() {
            return "padding";
        }
        getWidth() {
            return "padding";
        }
        getHeight() {
            return "auto";
        }
        getPaddingTop() {
            return 0;
        }
        getPaddingRight() {
            return 16;
        }
        getPaddingBottom() {
            return 16;
        }
        getPaddingLeft() {
            return 16;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkEnUsDialogLayeredFooter extends DThemeDarkDialogLayeredFooter {
        getButtonOk() {
            return "OK";
        }
        getButtonCancel() {
            return "Cancel";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkEnUsDialogLayered = () => {
        DThemeDark.set("DDialogLayeredContent", DThemeDarkDialogLayeredContent);
        DThemeDark.set("DDialogLayeredFooter", DThemeDarkEnUsDialogLayeredFooter);
        DThemeDark.set("DDialogLayeredHeaderButtonClose", DThemeDarkDialogLayeredHeaderButtonClose);
        DThemeDark.set("DDialogLayeredHeaderSeparator", DThemeDarkDialogLayeredHeaderSeparator);
        DThemeDark.set("DDialogLayeredHeader", DThemeDarkDialogLayeredHeader);
        DThemeDark.set("DDialogLayered", DThemeDarkDialogLayered);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkDialogConfirmMessage extends DThemeDarkImage {
        getWidth() {
            return "padding";
        }
        getHeight() {
            return "auto";
        }
        getTextAlignHorizontal() {
            return DAlignHorizontal.CENTER;
        }
        newState(state) {
            super.newState(state);
            state.isFocusable = false;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkDialogConfirm extends DThemeDarkDialogLayered {
        getMessage() {
            return "";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkEnUsDialogConfirm extends DThemeDarkDialogConfirm {
        getFooter() {
            return {
                button: {
                    ok: "Yes",
                    cancel: "No"
                }
            };
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkEnUsDialogConfirm = () => {
        DThemeDark.set("DDialogConfirm", DThemeDarkEnUsDialogConfirm);
        DThemeDark.set("DDialogConfirmMessage", DThemeDarkDialogConfirmMessage);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkEnUsDialogConfirmDelete extends DThemeDarkEnUsDialogConfirm {
        getMessage() {
            return "Are you sure you want to delete this data?";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkEnUsDialogConfirmDelete = () => {
        DThemeDark.set("DDialogConfirmDelete", DThemeDarkEnUsDialogConfirmDelete);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkEnUsDialogConfirmDiscard extends DThemeDarkEnUsDialogConfirm {
        getMessage() {
            return ("Your changes have not been saved.\n" +
                "Do you want to discard the changes and continue?");
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkEnUsDialogConfirmDiscard = () => {
        DThemeDark.set("DDialogConfirmDiscard", DThemeDarkEnUsDialogConfirmDiscard);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkDialogMessage extends DThemeDarkDialogConfirm {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkEnUsDialogMessage extends DThemeDarkDialogMessage {
        getFooter() {
            return {
                button: {
                    ok: "OK",
                    cancel: null
                }
            };
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkEnUsDialogMessage = () => {
        DThemeDark.set("DDialogMessage", DThemeDarkEnUsDialogMessage);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    // Material Design icons by Google.
    // Apache license version 2.0.
    /* eslint-disable prettier/prettier */
    DThemeDarkAtlas.add("success_mark", 21, 21, `<g transform="scale(0.875,0.875)">` +
        `<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="#fff" />` +
        `</g>`);
    /* eslint-enable prettier/prettier */
    class DThemeDarkDialogProcessingMessage extends DThemeDarkDialogConfirmMessage {
        getHeight() {
            return 90;
        }
        getImageSource(state) {
            if (state.isSucceeded) {
                return DThemeDarkAtlas.mappings.success_mark;
            }
            return null;
        }
        getImageTintAlpha(state) {
            return 0.75;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkDialogProcessing extends DThemeDarkDialogConfirm {
        getDoneDelay() {
            return 400;
        }
        getCloseDelay() {
            return 600;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const dThemeDarkEnUsDialogProcessingMessage = (state) => {
        if (state.isSucceeded) {
            return "Processed successfully";
        }
        else if (state.isFailed) {
            return "Failed to process the request";
        }
        else {
            return "Processing...";
        }
    };
    class DThemeDarkEnUsDialogProcessing extends DThemeDarkDialogProcessing {
        getFooter() {
            return {
                button: {
                    ok: "OK",
                    cancel: null
                }
            };
        }
        getMessage() {
            return dThemeDarkEnUsDialogProcessingMessage;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkEnUsDialogProcessing = () => {
        DThemeDark.set("DDialogProcessing", DThemeDarkEnUsDialogProcessing);
        DThemeDark.set("DDialogProcessingMessage", DThemeDarkDialogProcessingMessage);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkDialogSaveAs extends DThemeDarkDialogInputText {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkEnUsDialogSaveAs extends DThemeDarkDialogSaveAs {
        getFooter() {
            return {
                button: {
                    ok: "Save",
                    cancel: null
                }
            };
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkEnUsDialogSaveAs = () => {
        DThemeDark.set("DDialogSaveAs", DThemeDarkEnUsDialogSaveAs);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkEnUsDialogAll = () => {
        loadThemeDarkEnUsDialogColorGradient();
        loadThemeDarkEnUsDialogColor();
        loadThemeDarkEnUsDialogConfirmDelete();
        loadThemeDarkEnUsDialogConfirmDiscard();
        loadThemeDarkEnUsDialogConfirm();
        loadThemeDarkEnUsDialogDate();
        loadThemeDarkEnUsDialogDatetime();
        loadThemeDarkDialogFitted();
        loadThemeDarkDialogInputBoolean();
        loadThemeDarkDialogInputInteger();
        loadThemeDarkDialogInputReal();
        loadThemeDarkDialogInputText();
        loadThemeDarkEnUsDialogLayered();
        loadThemeDarkEnUsDialogMessage();
        loadThemeDarkEnUsDialogProcessing();
        loadThemeDarkEnUsDialogSaveAs();
        loadThemeDarkEnUsDialogSelect();
        loadThemeDarkEnUsDialogTime();
        loadThemeDarkDialog();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkInputBoolean extends DThemeDarkLayoutHorizontal {
        getCornerAdjust() {
            return true;
        }
        getMargin() {
            return 0;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkInputBooleanButtonOff extends DThemeDarkButton {
        isToggle() {
            return true;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkEnUsInputBooleanButtonOff extends DThemeDarkInputBooleanButtonOff {
        newTextValue() {
            return "OFF";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkInputBooleanButtonOn extends DThemeDarkButton {
        isToggle() {
            return true;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkEnUsInputBooleanButtonOn extends DThemeDarkInputBooleanButtonOn {
        newTextValue() {
            return "ON";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkEnUsInputBoolean = () => {
        DThemeDark.set("DInputBoolean", DThemeDarkInputBoolean);
        DThemeDark.set("DInputBooleanButtonOn", DThemeDarkEnUsInputBooleanButtonOn);
        DThemeDark.set("DInputBooleanButtonOff", DThemeDarkEnUsInputBooleanButtonOff);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkEnUsInputAll = () => {
        loadThemeDarkInputAndLabel();
        loadThemeDarkEnUsInputBoolean();
        loadThemeDarkInputInteger();
        loadThemeDarkInputLabel();
        loadThemeDarkInputReal();
        loadThemeDarkInputSearch();
        loadThemeDarkInputTextArea();
        loadThemeDarkInputText();
    };

    const DLinkMenuItemId = wcardinal.ui.DLinkMenuItemId;

    /* eslint-disable prettier/prettier */
    DThemeDarkAtlas.add("link_mark", 24, 24, `<g>` +
        `<path fill="none" stroke="#fff" stroke-width="1" ` +
        `d="M10 6H7c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2v-3 M19 11V4h-7 M18.75 4.5l-8 8" />` +
        `</g>`);
    /* eslint-enable prettier/prettier */
    class DThemeDarkLink {
        getImageSource(state) {
            return DThemeDarkAtlas.mappings.link_mark;
        }
        getMenuOptions() {
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
        }
    }

    class DThemeDarkEnUsLink extends DThemeDarkLink {
        getLabelOpenLink() {
            return "Open";
        }
        getLabelOpenLinkInNewWindow() {
            return "Open in New Window";
        }
        getLabelCopyLinkAddress() {
            return "Copy Link Address";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkEnUsLink = () => {
        DThemeDark.set("DLink", DThemeDarkEnUsLink);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkNote extends DThemeDarkImageBase {
        getWidth() {
            return "100%";
        }
        getHeight() {
            return "100%";
        }
        getTextAlignHorizontal() {
            return DAlignHorizontal.CENTER;
        }
        getInteractive() {
            return DBaseInteractive.NONE;
        }
        getAlpha() {
            return 0.2;
        }
        getFontSize() {
            return 26;
        }
        getFontWeight() {
            return "bold";
        }
        getImageTintAlpha(state) {
            return 0.2;
        }
        getImageAlignWith() {
            return DAlignWith.TEXT;
        }
        getImageAlignHorizontal() {
            return DAlignHorizontal.LEFT;
        }
        getImageAlignVertical() {
            return DAlignVertical.MIDDLE;
        }
        newState(state) {
            super.newState(state);
            state.isFocusable = false;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkNoteError extends DThemeDarkNote {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkEnUsNoteError extends DThemeDarkNoteError {
        newTextValue() {
            return "Something went wrong";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkNoteNoItemsFound extends DThemeDarkNote {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkEnUsNoteNoItemsFound extends DThemeDarkNoteNoItemsFound {
        newTextValue() {
            return "No items found";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkNoteSearching extends DThemeDarkNote {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkEnUsNoteSearching extends DThemeDarkNoteSearching {
        newTextValue() {
            return "Searching";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkNoteSmall extends DThemeDarkNote {
        getFontSize() {
            return 18;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkNoteSmallError extends DThemeDarkNoteSmall {
        constructor() {
            super();
            this._note = DThemes.get("DNoteError");
        }
        newTextValue() {
            return this._note.newTextValue();
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkNoteSmallNoItemsFound extends DThemeDarkNoteSmall {
        constructor() {
            super();
            this._note = DThemes.get("DNoteNoItemsFound");
        }
        newTextValue() {
            return this._note.newTextValue();
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkNoteSmallSearching extends DThemeDarkNoteSmall {
        constructor() {
            super();
            this._note = DThemes.get("DNoteSearching");
        }
        newTextValue() {
            return this._note.newTextValue();
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkEnUsNote = () => {
        DThemeDark.set("DNote", DThemeDarkNote);
        DThemeDark.set("DNoteError", DThemeDarkEnUsNoteError);
        DThemeDark.set("DNoteNoItemsFound", DThemeDarkEnUsNoteNoItemsFound);
        DThemeDark.set("DNoteSearching", DThemeDarkEnUsNoteSearching);
        DThemeDark.set("DNoteSmallError", DThemeDarkNoteSmallError);
        DThemeDark.set("DNoteSmallNoItemsFound", DThemeDarkNoteSmallNoItemsFound);
        DThemeDark.set("DNoteSmallSearching", DThemeDarkNoteSmallSearching);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkTable extends DThemeDarkPane {
        getBackgroundColor() {
            return DThemeDarkConstants.BACKGROUND_COLOR;
        }
        getBorderColor(state) {
            return null;
        }
        getMargin() {
            return 0;
        }
        getInteractive() {
            return DBaseInteractive.BOTH;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkTableBody extends DThemeDarkBase {
        getWidth() {
            return "100%";
        }
        getCornerMask() {
            return DCornerMask.TOP;
        }
        getBorderColor(state) {
            return null;
        }
        getRowHeight() {
            return 30;
        }
        getInteractive() {
            return DBaseInteractive.BOTH;
        }
        newState(state) {
            super.newState(state);
            state.isFocusable = false;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    var _a;
    class DThemeDarkTableBodyCells {
        static getBackgroundColor(state) {
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
                return DThemeDarkConstants.INVALID_BLENDED_ON_BOARD;
            }
            else if (state.underActive) {
                return DThemeDarkConstants.HIGHLIGHT_BLENDED_ON_BOARD;
            }
            else if (state.onHovered || state.isHovered) {
                return DThemeDarkConstants.WEAK_HIGHLIGHT_BLENDED_ON_BOARD;
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
        }
        static getBackgroundAlpha(state) {
            return 1;
        }
        static getBorderColor(state) {
            return this.BORDER_COLOR;
        }
        static getBorderMask(state) {
            if (state.is(DTableState.END)) {
                return DBorderMask.ALL;
            }
            else {
                return DBorderMask.NOT_RIGHT;
            }
        }
        static getColor(state) {
            return DThemeDarkConstants.COLOR;
        }
        static getAlpha(state) {
            if (state.in(DTableState.HAS_DATA)) {
                if (state.inEnabled) {
                    return 1.0;
                }
                else {
                    return 0.5;
                }
            }
            return 0;
        }
        static getImageTintColor(state, isActive) {
            if (state.inDisabled || state.inReadOnly || !(state.isActive || isActive)) {
                return 0x646464;
            }
            else {
                return DThemeDarkConstants.HIGHLIGHT_COLOR;
            }
        }
        static getHeight() {
            return "padding";
        }
        static getCornerMask() {
            return DCornerMask.ALL;
        }
    }
    _a = DThemeDarkTableBodyCells;
    DThemeDarkTableBodyCells.BACKGROUND_COLOR = DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD;
    DThemeDarkTableBodyCells.BACKGROUND_COLOR_FROZEN_EVEN = UtilRgb.brighten(_a.BACKGROUND_COLOR, 0.03);
    DThemeDarkTableBodyCells.BACKGROUND_COLOR_FROZEN_ODD = UtilRgb.brighten(_a.BACKGROUND_COLOR_FROZEN_EVEN, 0.03);
    DThemeDarkTableBodyCells.BORDER_COLOR = UtilRgb.darken(_a.BACKGROUND_COLOR, 0.035);
    DThemeDarkTableBodyCells.BORDER_COLOR_FROZEN = UtilRgb.darken(_a.BORDER_COLOR, 0.035);

    class DThemeDarkTableBodyCellActions {
        static init() {
            // Material Design icons by Google.
            // Apache license version 2.0.
            /* eslint-disable prettier/prettier */
            DThemeDarkAtlas.add("action_mark", 21, 21, `<g transform="scale(0.875,0.875)">` +
                `<path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83` +
                ` 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm` +
                `-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" fill="#fff"/>` +
                `</g>`);
            /* eslint-enable prettier/prettier */
        }
        static getImageSource(state) {
            return DThemeDarkAtlas.mappings.action_mark;
        }
        static getImageTintColor(state) {
            return DThemeDarkTableBodyCells.getImageTintColor(state, true);
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkTableBodyCellSelectDialog extends DThemeDarkButton {
        getBackgroundColor(state) {
            return DThemeDarkTableBodyCells.getBackgroundColor(state);
        }
        getBackgroundAlpha(state) {
            return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
        }
        getBorderColor(state) {
            return DThemeDarkTableBodyCells.getBorderColor(state);
        }
        getBorderMask(state) {
            return DThemeDarkTableBodyCells.getBorderMask(state);
        }
        getColor(state) {
            return DThemeDarkTableBodyCells.getColor(state);
        }
        getAlpha(state) {
            return DThemeDarkTableBodyCells.getAlpha(state);
        }
        getHeight() {
            return DThemeDarkTableBodyCells.getHeight();
        }
        getCornerMask() {
            return DThemeDarkTableBodyCells.getCornerMask();
        }
        isSyncEnabled() {
            return true;
        }
        newTextValue() {
            return null;
        }
    }

    /*
     * Copyright (C) 2020 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    DThemeDarkTableBodyCellActions.init();
    class DThemeDarkTableBodyCellActionDialog extends DThemeDarkTableBodyCellSelectDialog {
        getImageTintColor(state) {
            return DThemeDarkTableBodyCellActions.getImageTintColor(state);
        }
        getImageSource(state) {
            return DThemeDarkTableBodyCellActions.getImageSource(state);
        }
        isSyncEnabled() {
            return false;
        }
    }

    /*
     * Copyright (C) 2020 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    DThemeDarkTableBodyCellActions.init();
    class DThemeDarkTableBodyCellActionMenu extends DThemeDarkDropdown {
        getBackgroundColor(state) {
            return DThemeDarkTableBodyCells.getBackgroundColor(state);
        }
        getBackgroundAlpha(state) {
            return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
        }
        getBorderColor(state) {
            return DThemeDarkTableBodyCells.getBorderColor(state);
        }
        getBorderMask(state) {
            return DThemeDarkTableBodyCells.getBorderMask(state);
        }
        getColor(state) {
            return DThemeDarkTableBodyCells.getColor(state);
        }
        getAlpha(state) {
            return DThemeDarkTableBodyCells.getAlpha(state);
        }
        getHeight() {
            return DThemeDarkTableBodyCells.getHeight();
        }
        getCornerMask() {
            return DThemeDarkTableBodyCells.getCornerMask();
        }
        getSecondaryImageSource(state) {
            return null;
        }
        getPaddingLeft() {
            return 10;
        }
        getPaddingRight() {
            return 10;
        }
        getImageTintColor(state) {
            return DThemeDarkTableBodyCellActions.getImageTintColor(state);
        }
        getImageSource(state) {
            return DThemeDarkTableBodyCellActions.getImageSource(state);
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkTableBodyCellSelectPromise extends DThemeDarkButton {
        getBackgroundColor(state) {
            return DThemeDarkTableBodyCells.getBackgroundColor(state);
        }
        getBackgroundAlpha(state) {
            return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
        }
        getBorderColor(state) {
            return DThemeDarkTableBodyCells.getBorderColor(state);
        }
        getBorderMask(state) {
            return DThemeDarkTableBodyCells.getBorderMask(state);
        }
        getColor(state) {
            return DThemeDarkTableBodyCells.getColor(state);
        }
        getAlpha(state) {
            return DThemeDarkTableBodyCells.getAlpha(state);
        }
        getHeight() {
            return DThemeDarkTableBodyCells.getHeight();
        }
        getCornerMask() {
            return DThemeDarkTableBodyCells.getCornerMask();
        }
        isSyncEnabled() {
            return true;
        }
        newTextValue() {
            return null;
        }
    }

    /*
     * Copyright (C) 2020 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    DThemeDarkTableBodyCellActions.init();
    class DThemeDarkTableBodyCellActionPromise extends DThemeDarkTableBodyCellSelectPromise {
        getImageTintColor(state) {
            return DThemeDarkTableBodyCellActions.getImageTintColor(state);
        }
        getImageSource(state) {
            return DThemeDarkTableBodyCellActions.getImageSource(state);
        }
        isSyncEnabled() {
            return false;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkTableBodyCellText extends DThemeDarkImageBase {
        getBackgroundColor(state) {
            return DThemeDarkTableBodyCells.getBackgroundColor(state);
        }
        getBackgroundAlpha(state) {
            return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
        }
        getBorderColor(state) {
            return DThemeDarkTableBodyCells.getBorderColor(state);
        }
        getBorderMask(state) {
            return DThemeDarkTableBodyCells.getBorderMask(state);
        }
        getColor(state) {
            return DThemeDarkTableBodyCells.getColor(state);
        }
        getAlpha(state) {
            return DThemeDarkTableBodyCells.getAlpha(state);
        }
        getHeight() {
            return DThemeDarkTableBodyCells.getHeight();
        }
        getCornerMask() {
            return DThemeDarkTableBodyCells.getCornerMask();
        }
        getImageTintColor(state) {
            return DThemeDarkTableBodyCells.getImageTintColor(state);
        }
        getPaddingLeft() {
            return 10;
        }
        getPaddingRight() {
            return 10;
        }
        newTextValue() {
            return undefined;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkTableBodyCellButton extends DThemeDarkTableBodyCellText {
        getCursor(state) {
            if (!state.isActionable) {
                return "";
            }
            return "pointer";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkTableBodyCellCheck extends DThemeDarkButtonCheck {
        getBackgroundColor(state) {
            return DThemeDarkTableBodyCells.getBackgroundColor(state);
        }
        getBackgroundAlpha(state) {
            return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
        }
        getBorderColor(state) {
            return DThemeDarkTableBodyCells.getBorderColor(state);
        }
        getBorderMask(state) {
            return DThemeDarkTableBodyCells.getBorderMask(state);
        }
        getColor(state) {
            return DThemeDarkTableBodyCells.getColor(state);
        }
        getAlpha(state) {
            return DThemeDarkTableBodyCells.getAlpha(state);
        }
        getImageTintColor(state) {
            return DThemeDarkTableBodyCells.getImageTintColor(state);
        }
        getHeight() {
            return DThemeDarkTableBodyCells.getHeight();
        }
        getCornerMask() {
            return DThemeDarkTableBodyCells.getCornerMask();
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkTableBodyCellColor extends DThemeDarkButtonColor {
        getBackgroundColor(state) {
            return DThemeDarkTableBodyCells.getBackgroundColor(state);
        }
        getBackgroundAlpha(state) {
            return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
        }
        getBorderColor(state) {
            return DThemeDarkTableBodyCells.getBorderColor(state);
        }
        getBorderMask(state) {
            return DThemeDarkTableBodyCells.getBorderMask(state);
        }
        getColor(state) {
            return DThemeDarkTableBodyCells.getColor(state);
        }
        getAlpha(state) {
            return DThemeDarkTableBodyCells.getAlpha(state);
        }
        getHeight() {
            return DThemeDarkTableBodyCells.getHeight();
        }
        getCornerMask() {
            return DThemeDarkTableBodyCells.getCornerMask();
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const formatter$3 = (value) => {
        return DPickerDates.format(value);
    };
    class DThemeDarkTableBodyCellDate extends DThemeDarkButton {
        getBackgroundColor(state) {
            return DThemeDarkTableBodyCells.getBackgroundColor(state);
        }
        getBackgroundAlpha(state) {
            return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
        }
        getBorderColor(state) {
            return DThemeDarkTableBodyCells.getBorderColor(state);
        }
        getBorderMask(state) {
            return DThemeDarkTableBodyCells.getBorderMask(state);
        }
        getColor(state) {
            return DThemeDarkTableBodyCells.getColor(state);
        }
        getAlpha(state) {
            return DThemeDarkTableBodyCells.getAlpha(state);
        }
        getHeight() {
            return DThemeDarkTableBodyCells.getHeight();
        }
        getCornerMask() {
            return DThemeDarkTableBodyCells.getCornerMask();
        }
        getTextFormatter() {
            return formatter$3;
        }
        newTextValue() {
            return new Date();
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const formatter$2 = (value, caller) => {
        return DPickerDatetimes.format(value, caller.getDatetimeMask());
    };
    class DThemeDarkTableBodyCellDatetime extends DThemeDarkButton {
        getBackgroundColor(state) {
            return DThemeDarkTableBodyCells.getBackgroundColor(state);
        }
        getBackgroundAlpha(state) {
            return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
        }
        getBorderColor(state) {
            return DThemeDarkTableBodyCells.getBorderColor(state);
        }
        getBorderMask(state) {
            return DThemeDarkTableBodyCells.getBorderMask(state);
        }
        getColor(state) {
            return DThemeDarkTableBodyCells.getColor(state);
        }
        getAlpha(state) {
            return DThemeDarkTableBodyCells.getAlpha(state);
        }
        getHeight() {
            return DThemeDarkTableBodyCells.getHeight();
        }
        getCornerMask() {
            return DThemeDarkTableBodyCells.getCornerMask();
        }
        getTextFormatter() {
            return formatter$2;
        }
        newTextValue() {
            return new Date();
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const formatter$1 = (index) => {
        return String(Number(index) + 1);
    };
    class DThemeDarkTableBodyCellIndex extends DThemeDarkImageBase {
        getBackgroundColor(state) {
            return DThemeDarkTableBodyCells.getBackgroundColor(state);
        }
        getBackgroundAlpha(state) {
            return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
        }
        getBorderColor(state) {
            return DThemeDarkTableBodyCells.getBorderColor(state);
        }
        getBorderMask(state) {
            return DThemeDarkTableBodyCells.getBorderMask(state);
        }
        getColor(state) {
            return DThemeDarkTableBodyCells.getColor(state);
        }
        getAlpha(state) {
            return DThemeDarkTableBodyCells.getAlpha(state);
        }
        getHeight() {
            return DThemeDarkTableBodyCells.getHeight();
        }
        getCornerMask() {
            return DThemeDarkTableBodyCells.getCornerMask();
        }
        getPaddingLeft() {
            return 10;
        }
        getPaddingRight() {
            return 10;
        }
        getTextFormatter() {
            return formatter$1;
        }
        newTextValue() {
            return 0;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkTableBodyCellInputInteger extends DThemeDarkInputInteger {
        getTextAlignHorizontal() {
            return DAlignHorizontal.RIGHT;
        }
        getBackgroundColor(state) {
            return DThemeDarkTableBodyCells.getBackgroundColor(state);
        }
        getBackgroundAlpha(state) {
            return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
        }
        getBorderColor(state) {
            return DThemeDarkTableBodyCells.getBorderColor(state);
        }
        getBorderMask(state) {
            return DThemeDarkTableBodyCells.getBorderMask(state);
        }
        getColor(state) {
            return DThemeDarkTableBodyCells.getColor(state);
        }
        getAlpha(state) {
            return DThemeDarkTableBodyCells.getAlpha(state);
        }
        getHeight() {
            return DThemeDarkTableBodyCells.getHeight();
        }
        getCornerMask() {
            return DThemeDarkTableBodyCells.getCornerMask();
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkTableBodyCellInputReal extends DThemeDarkInputReal {
        getTextAlignHorizontal() {
            return DAlignHorizontal.RIGHT;
        }
        getBackgroundColor(state) {
            return DThemeDarkTableBodyCells.getBackgroundColor(state);
        }
        getBackgroundAlpha(state) {
            return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
        }
        getBorderColor(state) {
            return DThemeDarkTableBodyCells.getBorderColor(state);
        }
        getBorderMask(state) {
            return DThemeDarkTableBodyCells.getBorderMask(state);
        }
        getColor(state) {
            return DThemeDarkTableBodyCells.getColor(state);
        }
        getAlpha(state) {
            return DThemeDarkTableBodyCells.getAlpha(state);
        }
        getHeight() {
            return DThemeDarkTableBodyCells.getHeight();
        }
        getCornerMask() {
            return DThemeDarkTableBodyCells.getCornerMask();
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkTableBodyCellInputText extends DThemeDarkInputText {
        getBackgroundColor(state) {
            return DThemeDarkTableBodyCells.getBackgroundColor(state);
        }
        getBackgroundAlpha(state) {
            return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
        }
        getBorderColor(state) {
            return DThemeDarkTableBodyCells.getBorderColor(state);
        }
        getBorderMask(state) {
            return DThemeDarkTableBodyCells.getBorderMask(state);
        }
        getColor(state) {
            return DThemeDarkTableBodyCells.getColor(state);
        }
        getAlpha(state) {
            return DThemeDarkTableBodyCells.getAlpha(state);
        }
        getHeight() {
            return DThemeDarkTableBodyCells.getHeight();
        }
        getCornerMask() {
            return DThemeDarkTableBodyCells.getCornerMask();
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkTableBodyCellInputTextArea extends DThemeDarkInputTextArea {
        getBackgroundColor(state) {
            return DThemeDarkTableBodyCells.getBackgroundColor(state);
        }
        getBackgroundAlpha(state) {
            return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
        }
        getBorderColor(state) {
            return DThemeDarkTableBodyCells.getBorderColor(state);
        }
        getBorderMask(state) {
            return DThemeDarkTableBodyCells.getBorderMask(state);
        }
        getColor(state) {
            return DThemeDarkTableBodyCells.getColor(state);
        }
        getAlpha(state) {
            return DThemeDarkTableBodyCells.getAlpha(state);
        }
        getHeight() {
            return DThemeDarkTableBodyCells.getHeight();
        }
        getCornerMask() {
            return DThemeDarkTableBodyCells.getCornerMask();
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    DThemeDarkTableBodyCellTrees.init();
    class DThemeDarkTableBodyCellInputTree extends DThemeDarkBase {
        getHeight() {
            return DThemeDarkTableBodyCells.getHeight();
        }
        getBackgroundColor(state) {
            return null;
        }
        getBorderColor(state) {
            return null;
        }
        getLevelPadding(level) {
            return 24 + level * 20;
        }
        getInteractive() {
            return DBaseInteractive.CHILDREN;
        }
        newState(state) {
            super.newState(state);
            state.isFocusable = false;
            state.isFocusReverse = true;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkTableBodyCellInputTreeInput extends DThemeDarkInputText {
        getX() {
            return "padding";
        }
        getY() {
            return "padding";
        }
        getWidth() {
            return "padding";
        }
        getHeight() {
            return DThemeDarkTableBodyCells.getHeight();
        }
        getBackgroundColor(state) {
            return DThemeDarkTableBodyCells.getBackgroundColor(state);
        }
        getBackgroundAlpha(state) {
            return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
        }
        getBorderColor(state) {
            return DThemeDarkTableBodyCells.getBorderColor(state);
        }
        getBorderMask(state) {
            return DThemeDarkTableBodyCells.getBorderMask(state);
        }
        getColor(state) {
            return DThemeDarkTableBodyCells.getColor(state);
        }
        getAlpha(state) {
            return DThemeDarkTableBodyCells.getAlpha(state);
        }
        getCornerMask() {
            return DThemeDarkTableBodyCells.getCornerMask();
        }
        getPaddingLeft() {
            return 0;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkTableBodyCellInputTreeMarker extends DThemeDarkButtonBase {
        getX() {
            return "padding";
        }
        getY() {
            return "padding";
        }
        getHeight() {
            return DThemeDarkTableBodyCells.getHeight();
        }
        getBackgroundColor(state) {
            return null;
        }
        getBackgroundAlpha(state) {
            return 1;
        }
        getBorderColor(state) {
            return null;
        }
        getBorderMask(state) {
            return DThemeDarkTableBodyCells.getBorderMask(state);
        }
        getColor(state) {
            return DThemeDarkTableBodyCells.getColor(state);
        }
        getAlpha(state) {
            return DThemeDarkTableBodyCells.getAlpha(state);
        }
        getCornerMask() {
            return DThemeDarkTableBodyCells.getCornerMask();
        }
        getImageAlignWith() {
            return DAlignWith.BORDER;
        }
        getImageAlignHorizontal() {
            return DAlignHorizontal.RIGHT;
        }
        getImageSource(state) {
            return DThemeDarkTableBodyCellTrees.getImageSource(state);
        }
        getImageTintColor(state) {
            return this.getColor(state);
        }
        getImageTintAlpha(state) {
            return this.getAlpha(state) * 0.5;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkTableBodyCellLink extends DThemeDarkTableBodyCellButton {
        constructor() {
            super();
            this._link = DThemes.getInstance().get("DLink");
        }
        getImageTintColor(state) {
            return DThemeDarkTableBodyCells.getImageTintColor(state, true);
        }
        getImageSource(state) {
            return this._link.getImageSource(state);
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkTableBodyCellSelectMenu extends DThemeDarkSelect {
        getBackgroundColor(state) {
            return DThemeDarkTableBodyCells.getBackgroundColor(state);
        }
        getBackgroundAlpha(state) {
            return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
        }
        getBorderColor(state) {
            return DThemeDarkTableBodyCells.getBorderColor(state);
        }
        getBorderMask(state) {
            return DThemeDarkTableBodyCells.getBorderMask(state);
        }
        getColor(state) {
            return DThemeDarkTableBodyCells.getColor(state);
        }
        getAlpha(state) {
            return DThemeDarkTableBodyCells.getAlpha(state);
        }
        getHeight() {
            return DThemeDarkTableBodyCells.getHeight();
        }
        getCornerMask() {
            return DThemeDarkTableBodyCells.getCornerMask();
        }
        getSecondaryImageSource(state) {
            return null;
        }
        getPaddingLeft() {
            return 10;
        }
        getPaddingRight() {
            return 10;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkTableBodyCellSelectMultiple extends DThemeDarkSelectMultiple {
        getBackgroundColor(state) {
            return DThemeDarkTableBodyCells.getBackgroundColor(state);
        }
        getBackgroundAlpha(state) {
            return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
        }
        getBorderColor(state) {
            return DThemeDarkTableBodyCells.getBorderColor(state);
        }
        getBorderMask(state) {
            return DThemeDarkTableBodyCells.getBorderMask(state);
        }
        getColor(state) {
            return DThemeDarkTableBodyCells.getColor(state);
        }
        getAlpha(state) {
            return DThemeDarkTableBodyCells.getAlpha(state);
        }
        getHeight() {
            return DThemeDarkTableBodyCells.getHeight();
        }
        getCornerMask() {
            return DThemeDarkTableBodyCells.getCornerMask();
        }
        getSecondaryImageSource(state) {
            return null;
        }
        getPaddingLeft() {
            return 10;
        }
        getPaddingRight() {
            return 10;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkTableBodyCellTextArea extends DThemeDarkTableBodyCellText {
        getTextAlignVertical() {
            return DAlignVertical.TOP;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const formatter = (value, caller) => {
        return DPickerTimes.format(value, caller.getDatetimeMask());
    };
    class DThemeDarkTableBodyCellTime extends DThemeDarkButton {
        getBackgroundColor(state) {
            return DThemeDarkTableBodyCells.getBackgroundColor(state);
        }
        getBackgroundAlpha(state) {
            return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
        }
        getBorderColor(state) {
            return DThemeDarkTableBodyCells.getBorderColor(state);
        }
        getBorderMask(state) {
            return DThemeDarkTableBodyCells.getBorderMask(state);
        }
        getColor(state) {
            return DThemeDarkTableBodyCells.getColor(state);
        }
        getAlpha(state) {
            return DThemeDarkTableBodyCells.getAlpha(state);
        }
        getHeight() {
            return DThemeDarkTableBodyCells.getHeight();
        }
        getCornerMask() {
            return DThemeDarkTableBodyCells.getCornerMask();
        }
        getTextFormatter() {
            return formatter;
        }
        newTextValue() {
            return new Date();
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    DThemeDarkTableBodyCellTrees.init();
    class DThemeDarkTableBodyCellTree extends DThemeDarkTableBodyCellButton {
        getLevelPadding(level) {
            return 24 + level * 20 - this.getPaddingLeft();
        }
        getImageAlignWith() {
            return DAlignWith.PADDING;
        }
        getImageMarginHorizontal() {
            return -19;
        }
        getImageSource(state) {
            return DThemeDarkTableBodyCellTrees.getImageSource(state);
        }
        getImageTintColor(state) {
            return this.getColor(state);
        }
        getImageTintAlpha(state) {
            return this.getAlpha(state) * 0.5;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkTableRow extends DThemeDarkLayoutHorizontal {
        getBorderColor(state) {
            return null;
        }
        getCornerMask() {
            return DCornerMask.ALL;
        }
        getMargin() {
            return 0;
        }
        getInteractive() {
            return DBaseInteractive.BOTH;
        }
        newState(state) {
            super.newState(state);
            state.isFocusReverse = true;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkTableBodyRow extends DThemeDarkTableRow {
        constructor() {
            super(...arguments);
            this.BACKGROUND_COLOR_EVEN = DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD;
            this.BACKGROUND_COLOR_ODD = UtilRgb.brighten(DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD, 0.01);
        }
        getBackgroundColor(state) {
            if (state.inDisabled) {
                return state.isAlternated ? this.BACKGROUND_COLOR_ODD : this.BACKGROUND_COLOR_EVEN;
            }
            else if (state.isActive) {
                return DThemeDarkConstants.HIGHLIGHT_BLENDED_ON_BOARD;
            }
            else if (state.isHovered) {
                return DThemeDarkConstants.WEAK_HIGHLIGHT_BLENDED_ON_BOARD;
            }
            else {
                return state.isAlternated ? this.BACKGROUND_COLOR_ODD : this.BACKGROUND_COLOR_EVEN;
            }
        }
        getWidth() {
            return "100%";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkTableHeader extends DThemeDarkTableRow {
        constructor() {
            super(...arguments);
            this.BACKGROUND_COLOR = UtilRgb.brighten(DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD, 0.03);
            this.BORDER_COLOR = UtilRgb.darken(DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD, 0.05);
        }
        getBackgroundColor(state) {
            if (state.inDisabled) {
                return null;
            }
            else {
                return this.BACKGROUND_COLOR;
            }
        }
        getBorderColor(state) {
            return this.BORDER_COLOR;
        }
        getBorderMask(state) {
            return DBorderMask.NOT_BOTTOM;
        }
        getWidth() {
            return "100%";
        }
        getHeight() {
            return 30;
        }
        getCursor(state) {
            if (state.is(DTableState.RESIZING)) {
                return "col-resize";
            }
            return super.getCursor(state);
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkTableCategory extends DThemeDarkTableHeader {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    // Material Design icons by Google.
    // Apache license version 2.0.
    /* eslint-disable prettier/prettier */
    DThemeDarkAtlas.add("sorted_descending", 16, 16, `<g transform="scale(0.875,0.875)">` +
        `<path d="M3 12l5-5 5 5H3z" fill="#fff"/>` +
        `</g>`);
    DThemeDarkAtlas.add("sorted_ascending", 16, 16, `<g transform="scale(0.875,0.875)">` +
        `<path d="M3 8l5 5 5-5H3z" fill="#fff"/>` +
        `</g>`);
    /* eslint-enable prettier/prettier */
    class DThemeDarkTableHeaderCell extends DThemeDarkImage {
        constructor() {
            super(...arguments);
            this.BACKGROUND_COLOR = UtilRgb.brighten(DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD, 0.03);
            this.BACKGROUND_COLOR_HOVERED = UtilRgb.brighten(this.BACKGROUND_COLOR, 0.08);
            this.BACKGROUND_COLOR_PRESSED = UtilRgb.brighten(this.BACKGROUND_COLOR, 0.32);
            this.BACKGROUND_COLOR_FROZEN = UtilRgb.brighten(this.BACKGROUND_COLOR, 0.02);
            this.BORDER_COLOR = UtilRgb.darken(DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD, 0.05);
            this.BORDER_COLOR_FROZEN = UtilRgb.darken(this.BORDER_COLOR, 0.05);
        }
        getBackgroundColor(state) {
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
        }
        getBackgroundAlpha(state) {
            return 1;
        }
        getBorderColor(state) {
            if (state.is(DTableState.FROZEN_END)) {
                return this.BORDER_COLOR_FROZEN;
            }
            return this.BORDER_COLOR;
        }
        getBorderMask(state) {
            if (state.is(DTableState.END)) {
                return DBorderMask.ALL;
            }
            else {
                return DBorderMask.NOT_RIGHT;
            }
        }
        getTextAlignHorizontal() {
            return DAlignHorizontal.CENTER;
        }
        getCornerMask() {
            return DCornerMask.ALL;
        }
        getHeight() {
            return "padding";
        }
        getPaddingLeft() {
            return 10;
        }
        getPaddingRight() {
            return 10;
        }
        newTextValue() {
            return null;
        }
        getImageTintColor(state, isActive) {
            if (state.inDisabled || state.inReadOnly || !(state.isActive || isActive)) {
                return DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR;
            }
            else {
                return DThemeDarkConstants.HIGHLIGHT_COLOR;
            }
        }
        getSecondaryImageTintColor(state) {
            if (state.is(DTableState.CHECKABLE)) {
                return DThemeDarkButtonChecks.getImageTintColor(state);
            }
            return super.getSecondaryImageTintColor(state);
        }
        getSecondaryImageSource(state) {
            if (state.is(DTableState.CHECKABLE)) {
                return DThemeDarkButtonChecks.getImageSource(state);
            }
            return null;
        }
        getSecondaryImageAlignHorizontal() {
            return DAlignHorizontal.LEFT;
        }
        getSecondaryImageAlignVertical() {
            return DAlignVertical.MIDDLE;
        }
        getSecondaryImageAlignWith() {
            return DAlignWith.TEXT;
        }
        getTertiaryImageSource(state) {
            if (state.is(DTableState.SORTED_ASCENDING)) {
                return DThemeDarkAtlas.mappings.sorted_ascending;
            }
            else if (state.is(DTableState.SORTED_DESCENDING)) {
                return DThemeDarkAtlas.mappings.sorted_descending;
            }
            else {
                return null;
            }
        }
        getTertiaryImageTintColor(state) {
            return super.getImageTintColor(state);
        }
        getTertiaryImageAlignHorizontal() {
            return DAlignHorizontal.RIGHT;
        }
        getTertiaryImageAlignWith() {
            return DAlignWith.BORDER;
        }
        getCursor(state) {
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
        }
        getEdgeWidth() {
            return 10;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkTableCategoryCell extends DThemeDarkTableHeaderCell {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkEnUsTable = () => {
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
        DThemeDark.set("DTableBodyCellInputTextArea", DThemeDarkTableBodyCellInputTextArea);
        DThemeDark.set("DTableBodyCellInputText", DThemeDarkTableBodyCellInputText);
        DThemeDark.set("DTableBodyCellInputTreeMarker", DThemeDarkTableBodyCellInputTreeMarker);
        DThemeDark.set("DTableBodyCellInputTreeInput", DThemeDarkTableBodyCellInputTreeInput);
        DThemeDark.set("DTableBodyCellInputTree", DThemeDarkTableBodyCellInputTree);
        DThemeDark.set("DTableBodyCellLink", DThemeDarkTableBodyCellLink);
        DThemeDark.set("DTableBodyCellSelectDialog", DThemeDarkTableBodyCellSelectDialog);
        DThemeDark.set("DTableBodyCellSelectMenu", DThemeDarkTableBodyCellSelectMenu);
        DThemeDark.set("DTableBodyCellSelectMultiple", DThemeDarkTableBodyCellSelectMultiple);
        DThemeDark.set("DTableBodyCellSelectPromise", DThemeDarkTableBodyCellSelectPromise);
        DThemeDark.set("DTableBodyCellTextArea", DThemeDarkTableBodyCellTextArea);
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
        loadThemeDarkEnUsButtonColor();
        loadThemeDarkEnUsButtonDate();
        loadThemeDarkEnUsButtonDatetime();
        loadThemeDarkInputInteger();
        loadThemeDarkInputReal();
        loadThemeDarkInputTextArea();
        loadThemeDarkInputText();
        loadThemeDarkEnUsDialogSelect();
        loadThemeDarkMenu();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    // Material Design icons by Google.
    // Apache license version 2.0.
    /* eslint-disable prettier/prettier */
    DThemeDarkAtlas.add("button_process_processing", 24, 24, `<g transform="scale(0.025,0.025) translate(0,960)">` +
        `<path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T` +
        `480-880q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133` +
        ` 0 226.5-93.5T800-480q0-17 11.5-28.5T840-520q17 0 28.5 11.5T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 8` +
        `6T480-80Z" fill="#fff"/>` +
        `</g>`);
    DThemeDarkAtlas.add("button_process_success", 24, 24, `<g transform="scale(0.025,0.025) translate(0,960)">` +
        `<path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" fill="#fff" />` +
        `</g>`);
    DThemeDarkAtlas.add("button_process_fail", 24, 24, `<g transform="scale(0.025,0.025) translate(0,960)">` +
        `<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" fill="#fff" />` +
        `</g>`);
    /* eslint-enable prettier/prettier */
    const imageSource = (state) => {
        if (state.isProcessing) {
            return DThemeDarkAtlas.mappings.button_process_processing;
        }
        else if (state.isSucceeded) {
            return DThemeDarkAtlas.mappings.button_process_success;
        }
        else {
            return DThemeDarkAtlas.mappings.button_process_fail;
        }
    };
    const imageRotation = (state) => {
        const value = state.valueOf(DBaseState.PROCESSING);
        if (value != null) {
            return value * Math.PI * 0.02;
        }
        return 0;
    };
    class DThemeDarkIndicatorProcess {
        getProcessDoneDelay() {
            return 400;
        }
        getProcessCloseDelay() {
            return 3000;
        }
        isProcessTextEnabled() {
            return false;
        }
        isProcessImageEnabled() {
            return true;
        }
        getProcessImageIndex() {
            return 0;
        }
        newProcessImageSource() {
            return imageSource;
        }
        newProcessImageRotation() {
            return imageRotation;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkEnUsIndicatorProcessing extends DThemeDarkIndicatorProcess {
        newProcessTextValue() {
            return dThemeDarkEnUsDialogProcessingMessage;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkEnUsIndicatorProcessing = () => {
        DThemeDark.set("DIndicatorProcessing", DThemeDarkEnUsIndicatorProcessing);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeDarkEnUsAll = () => {
        loadThemeDark();
        loadThemeDarkBase();
        loadThemeDarkBoard();
        loadThemeDarkEnUsButtonAll();
        loadThemeDarkView();
        loadThemeDarkCanvasContainer();
        loadThemeDarkChart();
        loadThemeDarkColor();
        loadThemeDarkEnUsDiagramEditor();
        loadThemeDarkEnUsDiagram();
        loadThemeDarkEnUsDialogAll();
        loadThemeDarkExpandable();
        loadThemeDarkHtmlElement();
        loadThemeDarkImage();
        loadThemeDarkEnUsIndicatorProcessing();
        loadThemeDarkEnUsInputAll();
        loadThemeDarkLayout();
        loadThemeDarkEnUsLink();
        loadThemeDarkList();
        loadThemeDarkTree();
        loadThemeDarkMenuBar();
        loadThemeDarkMenuSided();
        loadThemeDarkMenu();
        loadThemeDarkEnUsNote();
        loadThemeDarkPane();
        loadThemeDarkPagination();
        loadThemeDarkEnUsPickerColorGradient();
        loadThemeDarkEnUsPickerColor();
        loadThemeDarkEnUsPickerDate();
        loadThemeDarkEnUsPickerDatetime();
        loadThemeDarkEnUsPickerTime();
        loadThemeDarkSelect();
        loadThemeDarkEnUsTable();
        loadThemeDarkText();
        loadThemeDarkSlider();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeDarkDialogConfirmDelete extends DThemeDarkDialogConfirm {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */

    var dark = {
        __proto__: null,
        loadThemeDarkBase: loadThemeDarkBase,
        loadThemeDarkBoard: loadThemeDarkBoard,
        loadThemeDarkButtonAmbient: loadThemeDarkButtonAmbient,
        loadThemeDarkButtonCheckRight: loadThemeDarkButtonCheckRight,
        loadThemeDarkButtonCheck: loadThemeDarkButtonCheck,
        loadThemeDarkButtonDanger: loadThemeDarkButtonDanger,
        loadThemeDarkButtonFile: loadThemeDarkButtonFile,
        loadThemeDarkButtonLink: loadThemeDarkButtonLink,
        loadThemeDarkButtonPrimary: loadThemeDarkButtonPrimary,
        loadThemeDarkButtonRadioRight: loadThemeDarkButtonRadioRight,
        loadThemeDarkButtonRadio: loadThemeDarkButtonRadio,
        loadThemeDarkButtonSecondary: loadThemeDarkButtonSecondary,
        loadThemeDarkButton: loadThemeDarkButton,
        loadThemeDarkCanvasContainer: loadThemeDarkCanvasContainer,
        loadThemeDarkChart: loadThemeDarkChart,
        loadThemeDarkColor: loadThemeDarkColor,
        loadThemeDarkDialogFitted: loadThemeDarkDialogFitted,
        loadThemeDarkDialogInputBoolean: loadThemeDarkDialogInputBoolean,
        loadThemeDarkDialogInputInteger: loadThemeDarkDialogInputInteger,
        loadThemeDarkDialogInputReal: loadThemeDarkDialogInputReal,
        loadThemeDarkDialogInputText: loadThemeDarkDialogInputText,
        loadThemeDarkDialog: loadThemeDarkDialog,
        loadThemeDarkDropdown: loadThemeDarkDropdown,
        loadThemeDarkExpandable: loadThemeDarkExpandable,
        loadThemeDarkHtmlElement: loadThemeDarkHtmlElement,
        loadThemeDarkImage: loadThemeDarkImage,
        loadThemeDarkInputAndLabel: loadThemeDarkInputAndLabel,
        loadThemeDarkInputInteger: loadThemeDarkInputInteger,
        loadThemeDarkInputLabel: loadThemeDarkInputLabel,
        loadThemeDarkInputReal: loadThemeDarkInputReal,
        loadThemeDarkInputSearch: loadThemeDarkInputSearch,
        loadThemeDarkInputTextArea: loadThemeDarkInputTextArea,
        loadThemeDarkInputText: loadThemeDarkInputText,
        loadThemeDarkLayout: loadThemeDarkLayout,
        loadThemeDarkList: loadThemeDarkList,
        loadThemeDarkMenuBar: loadThemeDarkMenuBar,
        loadThemeDarkMenuSided: loadThemeDarkMenuSided,
        loadThemeDarkMenu: loadThemeDarkMenu,
        loadThemeDarkPagination: loadThemeDarkPagination,
        loadThemeDarkPane: loadThemeDarkPane,
        loadThemeDarkScrollBar: loadThemeDarkScrollBar,
        loadThemeDarkSelect: loadThemeDarkSelect,
        loadThemeDarkShapeActionValue: loadThemeDarkShapeActionValue,
        loadThemeDarkShape: loadThemeDarkShape,
        loadThemeDarkSlider: loadThemeDarkSlider,
        loadThemeDarkText: loadThemeDarkText,
        loadThemeDarkTree: loadThemeDarkTree,
        loadThemeDarkView: loadThemeDarkView,
        loadThemeDark: loadThemeDark,
        loadThemeDarkEnUsAll: loadThemeDarkEnUsAll,
        loadThemeDarkEnUsButtonAll: loadThemeDarkEnUsButtonAll,
        loadThemeDarkEnUsButtonColorGradient: loadThemeDarkEnUsButtonColorGradient,
        loadThemeDarkEnUsButtonColor: loadThemeDarkEnUsButtonColor,
        loadThemeDarkEnUsButtonDate: loadThemeDarkEnUsButtonDate,
        loadThemeDarkEnUsButtonDatetime: loadThemeDarkEnUsButtonDatetime,
        loadThemeDarkEnUsButtonSelect: loadThemeDarkEnUsButtonSelect,
        loadThemeDarkEnUsButtonTime: loadThemeDarkEnUsButtonTime,
        loadThemeDarkEnUsDiagramEditor: loadThemeDarkEnUsDiagramEditor,
        loadThemeDarkEnUsDiagram: loadThemeDarkEnUsDiagram,
        loadThemeDarkEnUsDialogAll: loadThemeDarkEnUsDialogAll,
        loadThemeDarkEnUsDialogColorGradient: loadThemeDarkEnUsDialogColorGradient,
        loadThemeDarkEnUsDialogColor: loadThemeDarkEnUsDialogColor,
        loadThemeDarkEnUsDialogConfirmDelete: loadThemeDarkEnUsDialogConfirmDelete,
        loadThemeDarkEnUsDialogConfirmDiscard: loadThemeDarkEnUsDialogConfirmDiscard,
        loadThemeDarkEnUsDialogConfirm: loadThemeDarkEnUsDialogConfirm,
        loadThemeDarkEnUsDialogDate: loadThemeDarkEnUsDialogDate,
        loadThemeDarkEnUsDialogDatetime: loadThemeDarkEnUsDialogDatetime,
        loadThemeDarkEnUsDialogLayered: loadThemeDarkEnUsDialogLayered,
        loadThemeDarkEnUsDialogMessage: loadThemeDarkEnUsDialogMessage,
        loadThemeDarkEnUsDialogProcessing: loadThemeDarkEnUsDialogProcessing,
        loadThemeDarkEnUsDialogSaveAs: loadThemeDarkEnUsDialogSaveAs,
        loadThemeDarkEnUsDialogSelect: loadThemeDarkEnUsDialogSelect,
        loadThemeDarkEnUsDialogTime: loadThemeDarkEnUsDialogTime,
        loadThemeDarkEnUsIndicatorProcessing: loadThemeDarkEnUsIndicatorProcessing,
        loadThemeDarkEnUsInputAll: loadThemeDarkEnUsInputAll,
        loadThemeDarkEnUsInputBoolean: loadThemeDarkEnUsInputBoolean,
        loadThemeDarkEnUsLink: loadThemeDarkEnUsLink,
        loadThemeDarkEnUsNote: loadThemeDarkEnUsNote,
        loadThemeDarkEnUsPickerColorGradient: loadThemeDarkEnUsPickerColorGradient,
        loadThemeDarkEnUsPickerColor: loadThemeDarkEnUsPickerColor,
        loadThemeDarkEnUsPickerDate: loadThemeDarkEnUsPickerDate,
        loadThemeDarkEnUsPickerDatetime: loadThemeDarkEnUsPickerDatetime,
        loadThemeDarkEnUsPickerTime: loadThemeDarkEnUsPickerTime,
        loadThemeDarkEnUsShapePointsFormatter: loadThemeDarkEnUsShapePointsFormatter,
        loadThemeDarkEnUsTable: loadThemeDarkEnUsTable,
        DThemeDarkAtlas: DThemeDarkAtlas,
        DThemeDarkBase: DThemeDarkBase,
        DThemeDarkBoard: DThemeDarkBoard,
        DThemeDarkButtonAmbient: DThemeDarkButtonAmbient,
        DThemeDarkButtonBase: DThemeDarkButtonBase,
        DThemeDarkButtonCheckRight: DThemeDarkButtonCheckRight,
        DThemeDarkButtonCheck: DThemeDarkButtonCheck,
        DThemeDarkButtonChecks: DThemeDarkButtonChecks,
        DThemeDarkButtonColorGradient: DThemeDarkButtonColorGradient,
        DThemeDarkButtonColor: DThemeDarkButtonColor,
        DThemeDarkButtonDanger: DThemeDarkButtonDanger,
        DThemeDarkButtonDate: DThemeDarkButtonDate,
        DThemeDarkButtonDatetime: DThemeDarkButtonDatetime,
        DThemeDarkButtonFile: DThemeDarkButtonFile,
        DThemeDarkButtonLink: DThemeDarkButtonLink,
        DThemeDarkButtonPrimary: DThemeDarkButtonPrimary,
        DThemeDarkButtonRadioRight: DThemeDarkButtonRadioRight,
        DThemeDarkButtonRadio: DThemeDarkButtonRadio,
        DThemeDarkButtonSecondary: DThemeDarkButtonSecondary,
        DThemeDarkButtonSelect: DThemeDarkButtonSelect,
        DThemeDarkButtonTime: DThemeDarkButtonTime,
        DThemeDarkButton: DThemeDarkButton,
        DThemeDarkCanvasContainer: DThemeDarkCanvasContainer,
        DThemeDarkCanvas: DThemeDarkCanvas,
        DThemeDarkChartAxisBase: DThemeDarkChartAxisBase,
        DThemeDarkChartAxisXDatetime: DThemeDarkChartAxisXDatetime,
        DThemeDarkChartAxisX: DThemeDarkChartAxisX,
        DThemeDarkChartAxisY: DThemeDarkChartAxisY,
        DThemeDarkChartCoordinateTick: DThemeDarkChartCoordinateTick,
        DThemeDarkChartCoordinateTransform: DThemeDarkChartCoordinateTransform,
        DThemeDarkChartCoordinate: DThemeDarkChartCoordinate,
        DThemeDarkChartLegendItem: DThemeDarkChartLegendItem,
        DThemeDarkChartLegend: DThemeDarkChartLegend,
        DThemeDarkChartOverview: DThemeDarkChartOverview,
        DThemeDarkChartPlotArea: DThemeDarkChartPlotArea,
        DThemeDarkChartSelectionGridlineX: DThemeDarkChartSelectionGridlineX,
        DThemeDarkChartSelectionGridlineY: DThemeDarkChartSelectionGridlineY,
        DThemeDarkChartSelectionMarker: DThemeDarkChartSelectionMarker,
        DThemeDarkChartSelectionShape: DThemeDarkChartSelectionShape,
        DThemeDarkChart: DThemeDarkChart,
        DThemeDarkColorRecent: DThemeDarkColorRecent,
        DThemeDarkColorStandard: DThemeDarkColorStandard,
        DThemeDarkConstants: DThemeDarkConstants,
        DThemeDarkContent: DThemeDarkContent,
        DThemeDarkDiagramBase: DThemeDarkDiagramBase,
        DThemeDarkDiagramCanvasBase: DThemeDarkDiagramCanvasBase,
        DThemeDarkDiagramCanvasEditor: DThemeDarkDiagramCanvasEditor,
        DThemeDarkDiagramCanvas: DThemeDarkDiagramCanvas,
        DThemeDarkDiagramEditor: DThemeDarkDiagramEditor,
        DThemeDarkDiagram: DThemeDarkDiagram,
        DThemeDarkDialogColorGradient: DThemeDarkDialogColorGradient,
        DThemeDarkDialogColor: DThemeDarkDialogColor,
        DThemeDarkDialogConfirmDelete: DThemeDarkDialogConfirmDelete,
        DThemeDarkDialogConfirmMessage: DThemeDarkDialogConfirmMessage,
        DThemeDarkDialogConfirm: DThemeDarkDialogConfirm,
        DThemeDarkDialogDate: DThemeDarkDialogDate,
        DThemeDarkDialogDatetime: DThemeDarkDialogDatetime,
        DThemeDarkDialogFittedContent: DThemeDarkDialogFittedContent,
        DThemeDarkDialogFitted: DThemeDarkDialogFitted,
        DThemeDarkDialogInputBoolean: DThemeDarkDialogInputBoolean,
        DThemeDarkDialogInputInteger: DThemeDarkDialogInputInteger,
        DThemeDarkDialogInputReal: DThemeDarkDialogInputReal,
        DThemeDarkDialogInputText: DThemeDarkDialogInputText,
        DThemeDarkDialogInput: DThemeDarkDialogInput,
        DThemeDarkDialogLayeredContent: DThemeDarkDialogLayeredContent,
        DThemeDarkDialogLayeredFooter: DThemeDarkDialogLayeredFooter,
        DThemeDarkDialogLayeredHeaderButtonClose: DThemeDarkDialogLayeredHeaderButtonClose,
        DThemeDarkDialogLayeredHeaderSeparator: DThemeDarkDialogLayeredHeaderSeparator,
        DThemeDarkDialogLayeredHeader: DThemeDarkDialogLayeredHeader,
        DThemeDarkDialogLayered: DThemeDarkDialogLayered,
        DThemeDarkDialogMessage: DThemeDarkDialogMessage,
        DThemeDarkDialogProcessingMessage: DThemeDarkDialogProcessingMessage,
        DThemeDarkDialogProcessing: DThemeDarkDialogProcessing,
        DThemeDarkDialogSaveAs: DThemeDarkDialogSaveAs,
        DThemeDarkDialogSelectListItem: DThemeDarkDialogSelectListItem,
        DThemeDarkDialogSelectList: DThemeDarkDialogSelectList,
        DThemeDarkDialogSelect: DThemeDarkDialogSelect,
        DThemeDarkDialogTime: DThemeDarkDialogTime,
        DThemeDarkDialog: DThemeDarkDialog,
        DThemeDarkDropdownBase: DThemeDarkDropdownBase,
        DThemeDarkDropdown: DThemeDarkDropdown,
        DThemeDarkExpandableHeader: DThemeDarkExpandableHeader,
        DThemeDarkExpandable: DThemeDarkExpandable,
        DThemeDarkExpandables: DThemeDarkExpandables,
        DThemeDarkFont: DThemeDarkFont,
        DThemeDarkHtmlElement: DThemeDarkHtmlElement,
        DThemeDarkImageBase: DThemeDarkImageBase,
        DThemeDarkImage: DThemeDarkImage,
        DThemeDarkIndicatorProcess: DThemeDarkIndicatorProcess,
        DThemeDarkInputAndLabel: DThemeDarkInputAndLabel,
        DThemeDarkInputBooleanButtonOff: DThemeDarkInputBooleanButtonOff,
        DThemeDarkInputBooleanButtonOn: DThemeDarkInputBooleanButtonOn,
        DThemeDarkInputBoolean: DThemeDarkInputBoolean,
        DThemeDarkInputInput: DThemeDarkInputInput,
        DThemeDarkInputInteger: DThemeDarkInputInteger,
        DThemeDarkInputLabel: DThemeDarkInputLabel,
        DThemeDarkInputNumber: DThemeDarkInputNumber,
        DThemeDarkInputReal: DThemeDarkInputReal,
        DThemeDarkInputSearch: DThemeDarkInputSearch,
        DThemeDarkInputTextArea: DThemeDarkInputTextArea,
        DThemeDarkInputText: DThemeDarkInputText,
        DThemeDarkInput: DThemeDarkInput,
        DThemeDarkLayoutBoard: DThemeDarkLayoutBoard,
        DThemeDarkLayoutHorizontal: DThemeDarkLayoutHorizontal,
        DThemeDarkLayoutSpace: DThemeDarkLayoutSpace,
        DThemeDarkLayoutVertical: DThemeDarkLayoutVertical,
        DThemeDarkLayout: DThemeDarkLayout,
        DThemeDarkLink: DThemeDarkLink,
        DThemeDarkListItemAmbient: DThemeDarkListItemAmbient,
        DThemeDarkListItem: DThemeDarkListItem,
        DThemeDarkListItems: DThemeDarkListItems,
        DThemeDarkList: DThemeDarkList,
        DThemeDarkMenuBarItem: DThemeDarkMenuBarItem,
        DThemeDarkMenuBar: DThemeDarkMenuBar,
        DThemeDarkMenuItemBase: DThemeDarkMenuItemBase,
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
        DThemeDarkMenuSidedContent: DThemeDarkMenuSidedContent,
        DThemeDarkMenuSidedItemCheck: DThemeDarkMenuSidedItemCheck,
        DThemeDarkMenuSidedItemExpandableItemCheck: DThemeDarkMenuSidedItemExpandableItemCheck,
        DThemeDarkMenuSidedItemExpandableItemLink: DThemeDarkMenuSidedItemExpandableItemLink,
        DThemeDarkMenuSidedItemExpandableItemMenu: DThemeDarkMenuSidedItemExpandableItemMenu,
        DThemeDarkMenuSidedItemExpandableItemSeparator: DThemeDarkMenuSidedItemExpandableItemSeparator,
        DThemeDarkMenuSidedItemExpandableItemSpace: DThemeDarkMenuSidedItemExpandableItemSpace,
        DThemeDarkMenuSidedItemExpandableItemText: DThemeDarkMenuSidedItemExpandableItemText,
        DThemeDarkMenuSidedItemExpandable: DThemeDarkMenuSidedItemExpandable,
        DThemeDarkMenuSidedItemLink: DThemeDarkMenuSidedItemLink,
        DThemeDarkMenuSidedItemMenu: DThemeDarkMenuSidedItemMenu,
        DThemeDarkMenuSidedItemSeparator: DThemeDarkMenuSidedItemSeparator,
        DThemeDarkMenuSidedItemSpace: DThemeDarkMenuSidedItemSpace,
        DThemeDarkMenuSidedItemText: DThemeDarkMenuSidedItemText,
        DThemeDarkMenuSided: DThemeDarkMenuSided,
        DThemeDarkMenu: DThemeDarkMenu,
        DThemeDarkNoteError: DThemeDarkNoteError,
        DThemeDarkNoteNoItemsFound: DThemeDarkNoteNoItemsFound,
        DThemeDarkNoteSearching: DThemeDarkNoteSearching,
        DThemeDarkNoteSmallError: DThemeDarkNoteSmallError,
        DThemeDarkNoteSmallNoItemsFound: DThemeDarkNoteSmallNoItemsFound,
        DThemeDarkNoteSmallSearching: DThemeDarkNoteSmallSearching,
        DThemeDarkNoteSmall: DThemeDarkNoteSmall,
        DThemeDarkNote: DThemeDarkNote,
        DThemeDarkPaginationButtonLast: DThemeDarkPaginationButtonLast,
        DThemeDarkPaginationButtonNext: DThemeDarkPaginationButtonNext,
        DThemeDarkPaginationButtonPage: DThemeDarkPaginationButtonPage,
        DThemeDarkPaginationButtonPrevious: DThemeDarkPaginationButtonPrevious,
        DThemeDarkPaginationButtonTop: DThemeDarkPaginationButtonTop,
        DThemeDarkPaginationDots: DThemeDarkPaginationDots,
        DThemeDarkPaginationPage: DThemeDarkPaginationPage,
        DThemeDarkPagination: DThemeDarkPagination,
        DThemeDarkPane: DThemeDarkPane,
        DThemeDarkPickerColorGradient: DThemeDarkPickerColorGradient,
        DThemeDarkPickerColor: DThemeDarkPickerColor,
        DThemeDarkPickerDatetimeButtonBack: DThemeDarkPickerDatetimeButtonBack,
        DThemeDarkPickerDatetimeButtonDate: DThemeDarkPickerDatetimeButtonDate,
        DThemeDarkPickerDatetimeButtonNext: DThemeDarkPickerDatetimeButtonNext,
        DThemeDarkPickerDatetimeLabelDate: DThemeDarkPickerDatetimeLabelDate,
        DThemeDarkPickerDatetimeLabel: DThemeDarkPickerDatetimeLabel,
        DThemeDarkPickerDatetimeSpace: DThemeDarkPickerDatetimeSpace,
        DThemeDarkPickerTime: DThemeDarkPickerTime,
        DThemeDarkScrollBarThumb: DThemeDarkScrollBarThumb,
        DThemeDarkScrollBar: DThemeDarkScrollBar,
        DThemeDarkSelectMultiple: DThemeDarkSelectMultiple,
        DThemeDarkSelect: DThemeDarkSelect,
        DThemeDarkSliderHorizontal: DThemeDarkSliderHorizontal,
        DThemeDarkSliderLabel: DThemeDarkSliderLabel,
        DThemeDarkSliderThumb: DThemeDarkSliderThumb,
        DThemeDarkSliderTrackHorizontal: DThemeDarkSliderTrackHorizontal,
        DThemeDarkSliderTrackVertical: DThemeDarkSliderTrackVertical,
        DThemeDarkSliderTrack: DThemeDarkSliderTrack,
        DThemeDarkSliderValue: DThemeDarkSliderValue,
        DThemeDarkSliderVertical: DThemeDarkSliderVertical,
        DThemeDarkSlider: DThemeDarkSlider,
        DThemeDarkSliders: DThemeDarkSliders,
        DThemeDarkTableBodyCellActionDialog: DThemeDarkTableBodyCellActionDialog,
        DThemeDarkTableBodyCellActionMenu: DThemeDarkTableBodyCellActionMenu,
        DThemeDarkTableBodyCellActionPromise: DThemeDarkTableBodyCellActionPromise,
        DThemeDarkTableBodyCellActions: DThemeDarkTableBodyCellActions,
        DThemeDarkTableBodyCellButton: DThemeDarkTableBodyCellButton,
        DThemeDarkTableBodyCellCheck: DThemeDarkTableBodyCellCheck,
        DThemeDarkTableBodyCellColor: DThemeDarkTableBodyCellColor,
        DThemeDarkTableBodyCellDate: DThemeDarkTableBodyCellDate,
        DThemeDarkTableBodyCellDatetime: DThemeDarkTableBodyCellDatetime,
        DThemeDarkTableBodyCellIndex: DThemeDarkTableBodyCellIndex,
        DThemeDarkTableBodyCellInputInteger: DThemeDarkTableBodyCellInputInteger,
        DThemeDarkTableBodyCellInputReal: DThemeDarkTableBodyCellInputReal,
        DThemeDarkTableBodyCellInputTextArea: DThemeDarkTableBodyCellInputTextArea,
        DThemeDarkTableBodyCellInputText: DThemeDarkTableBodyCellInputText,
        DThemeDarkTableBodyCellInputTreeInput: DThemeDarkTableBodyCellInputTreeInput,
        DThemeDarkTableBodyCellInputTreeMarker: DThemeDarkTableBodyCellInputTreeMarker,
        DThemeDarkTableBodyCellInputTree: DThemeDarkTableBodyCellInputTree,
        DThemeDarkTableBodyCellLink: DThemeDarkTableBodyCellLink,
        DThemeDarkTableBodyCellSelectDialog: DThemeDarkTableBodyCellSelectDialog,
        DThemeDarkTableBodyCellSelectMenu: DThemeDarkTableBodyCellSelectMenu,
        DThemeDarkTableBodyCellSelectMultiple: DThemeDarkTableBodyCellSelectMultiple,
        DThemeDarkTableBodyCellSelectPromise: DThemeDarkTableBodyCellSelectPromise,
        DThemeDarkTableBodyCellTextArea: DThemeDarkTableBodyCellTextArea,
        DThemeDarkTableBodyCellText: DThemeDarkTableBodyCellText,
        DThemeDarkTableBodyCellTime: DThemeDarkTableBodyCellTime,
        DThemeDarkTableBodyCellTree: DThemeDarkTableBodyCellTree,
        DThemeDarkTableBodyCellTrees: DThemeDarkTableBodyCellTrees,
        DThemeDarkTableBodyCells: DThemeDarkTableBodyCells,
        DThemeDarkTableBodyRow: DThemeDarkTableBodyRow,
        DThemeDarkTableBody: DThemeDarkTableBody,
        DThemeDarkTableCategoryCell: DThemeDarkTableCategoryCell,
        DThemeDarkTableCategory: DThemeDarkTableCategory,
        DThemeDarkTableHeaderCell: DThemeDarkTableHeaderCell,
        DThemeDarkTableHeader: DThemeDarkTableHeader,
        DThemeDarkTableRow: DThemeDarkTableRow,
        DThemeDarkTable: DThemeDarkTable,
        DThemeDarkTextBase: DThemeDarkTextBase,
        DThemeDarkText: DThemeDarkText,
        DThemeDarkTreeItemButton: DThemeDarkTreeItemButton,
        DThemeDarkTreeItemNonEditable: DThemeDarkTreeItemNonEditable,
        DThemeDarkTreeItemText: DThemeDarkTreeItemText,
        DThemeDarkTreeItems: DThemeDarkTreeItems,
        DThemeDarkTree: DThemeDarkTree,
        DThemeDarkView: DThemeDarkView,
        DThemeDark: DThemeDark,
        EThemeDarkShapeActionValue: EThemeDarkShapeActionValue,
        EThemeDarkShapePointsFormatter: EThemeDarkShapePointsFormatter,
        EThemeDarkShape: EThemeDarkShape,
        DThemeDarkEnUsDiagramEditor: DThemeDarkEnUsDiagramEditor,
        DThemeDarkEnUsDialogConfirmDelete: DThemeDarkEnUsDialogConfirmDelete,
        DThemeDarkEnUsDialogConfirmDiscard: DThemeDarkEnUsDialogConfirmDiscard,
        DThemeDarkEnUsDialogConfirm: DThemeDarkEnUsDialogConfirm,
        DThemeDarkEnUsDialogLayeredFooter: DThemeDarkEnUsDialogLayeredFooter,
        DThemeDarkEnUsDialogMessage: DThemeDarkEnUsDialogMessage,
        dThemeDarkEnUsDialogProcessingMessage: dThemeDarkEnUsDialogProcessingMessage,
        DThemeDarkEnUsDialogProcessing: DThemeDarkEnUsDialogProcessing,
        DThemeDarkEnUsDialogSaveAs: DThemeDarkEnUsDialogSaveAs,
        DThemeDarkEnUsDialogSelect: DThemeDarkEnUsDialogSelect,
        DThemeDarkEnUsIndicatorProcessing: DThemeDarkEnUsIndicatorProcessing,
        DThemeDarkEnUsInputBooleanButtonOff: DThemeDarkEnUsInputBooleanButtonOff,
        DThemeDarkEnUsInputBooleanButtonOn: DThemeDarkEnUsInputBooleanButtonOn,
        DThemeDarkEnUsLink: DThemeDarkEnUsLink,
        DThemeDarkEnUsNoteError: DThemeDarkEnUsNoteError,
        DThemeDarkEnUsNoteNoItemsFound: DThemeDarkEnUsNoteNoItemsFound,
        DThemeDarkEnUsNoteSearching: DThemeDarkEnUsNoteSearching,
        DThemeDarkEnUsPickerColor: DThemeDarkEnUsPickerColor,
        DThemeDarkEnUsPickerDate: DThemeDarkEnUsPickerDate,
        DThemeDarkEnUsPickerDatetime: DThemeDarkEnUsPickerDatetime,
        DThemeDarkEnUsPickerTime: DThemeDarkEnUsPickerTime,
        EThemeDarkEnUsShapePointsFormatter: EThemeDarkEnUsShapePointsFormatter
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    loadThemeDarkEnUsAll();
    const global = window;
    global.wcardinal = global.wcardinal || {};
    const dest = (global.wcardinal.ui = global.wcardinal.ui || {});
    const src = dark;
    for (const name in src) {
        dest[name] = src[name];
    }

})(PIXI);
