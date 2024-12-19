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
    const DThemeWhiteAtlas = new UtilSvgAtlasBuilder({
        width: 1024,
        scaling: pixi_js.SCALE_MODES.LINEAR,
        mipmap: pixi_js.MIPMAP_MODES.OFF
    });

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhite {
        constructor() {
            this._instances = {};
        }
        get(type) {
            let instance = this._instances[type];
            if (instance != null) {
                return instance;
            }
            else {
                const klass = DThemeWhite._classes[type];
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
            const result = DThemeWhite._classes[type];
            if (result != null) {
                return result;
            }
            else {
                throw new Error(`No theme for the type '${type}'`);
            }
        }
        setClass(type, themeClass) {
            DThemeWhite._classes[type] = themeClass;
            return this;
        }
        getAtlas() {
            return DThemeWhiteAtlas;
        }
        static set(type, themeClass) {
            this._classes[type] = themeClass;
        }
    }
    DThemeWhite._classes = {};

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
    class DThemeWhiteConstants {
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

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteFont {
        getFontFamilly() {
            return `"Helvetica Neue","Helvetica","Hiragino Sans","Hiragino Kaku Gothic ProN","BIZ UDPGothic","Arial","Yu Gothic UI","Meiryo UI",sans-serif`;
        }
        getFontSize() {
            return 14;
        }
        getColor(state) {
            return DThemeWhiteConstants.COLOR;
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
        DThemeWhiteAtlas.add(id, d, d, `<g>` +
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
    newShadow("shadow_weak", 24, 0.3);
    newShadow("shadow", 48, 0.3);
    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("background", 16, 16, `<g>` +
        `<defs>` +
        `<radialGradient id="234sfdhjfpijsrnsedsd435jseflkm">` +
        `<stop offset="25%" stop-color="white" stop-opacity="1" />` +
        `<stop offset="75%" stop-color="white" stop-opacity="0.25" />` +
        `</radialGradient>` +
        `</defs>` +
        `<rect x="0" y="0" width="16" height="16" fill="url(#234sfdhjfpijsrnsedsd435jseflkm)"/>` +
        `</g>`);
    /* eslint-enable prettier/prettier */
    class DThemeWhiteBase extends DThemeWhiteFont {
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
            return DThemeWhiteAtlas.mappings.background;
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
            return DThemeWhiteAtlas.mappings.background;
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
            return DThemeWhiteConstants.HIGHLIGHT_COLOR;
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
            return new DShadowImpl(DThemeWhiteAtlas.mappings.shadow, 48, 48, 0, 4.8);
        }
        newShadowWeak() {
            return new DShadowImpl(DThemeWhiteAtlas.mappings.shadow_weak, 24, 24, 0, 2.4);
        }
        getCursor(state) {
            return "";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteBase = () => {
        DThemeWhite.set("DBase", DThemeWhiteBase);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteBoard extends DThemeWhiteBase {
        getBackgroundColor() {
            return DThemeWhiteConstants.BACKGROUND_COLOR;
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
    const loadThemeWhiteBoard = () => {
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
    class DThemeWhiteTextBase extends DThemeWhiteBase {
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
    class DThemeWhiteImageBase extends DThemeWhiteTextBase {
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
    class DThemeWhiteButtonBase extends DThemeWhiteImageBase {
        constructor(backgroundColor = 0xffffff, hover = 0.017, pressed = 0.034) {
            super();
            this.BACKGROUND_COLOR = backgroundColor;
            this.BACKGROUND_COLOR_HOVERED = UtilRgb.darken(backgroundColor, hover);
            this.BACKGROUND_COLOR_PRESSED = UtilRgb.darken(backgroundColor, pressed);
            this.OUTLINE_COLOR = UtilRgb.brighten(backgroundColor, 0.75);
        }
        getBackgroundColor(state) {
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
        }
        getColor(state) {
            if (state.inDisabled || !state.isActive) {
                return super.getColor(state);
            }
            else {
                return DThemeWhiteConstants.ACTIVE_COLOR;
            }
        }
        getBorderColor(state) {
            if (state.inDisabled || !state.isActive) {
                return DThemeWhiteConstants.BORDER_COLOR;
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
    class DThemeWhiteButtonAmbient extends DThemeWhiteButtonBase {
        getBackgroundColor(state) {
            if (state.isActive) {
                return DThemeWhiteConstants.HIGHLIGHT_COLOR;
            }
            else {
                return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
            }
        }
        getBackgroundAlpha(state) {
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
        }
        getBorderColor(state) {
            return null;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteButtonAmbient = () => {
        DThemeWhite.set("DButtonAmbient", DThemeWhiteButtonAmbient);
    };

    // Material Design icons by Google.
    // Apache license version 2.0.
    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("button_check_mark_on", 21, 21, `<g transform="scale(0.875,0.875)">` +
        `<path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89` +
        `-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#fff" />` +
        `</g>`);
    DThemeWhiteAtlas.add("button_check_mark_off", 21, 21, `<g transform="scale(0.875,0.875)">` +
        `<path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" ` +
        `fill="#fff" />` +
        `</g>`);
    /* eslint-enable prettier/prettier */
    class DThemeWhiteButtonChecks {
        static getImageTintColor(state) {
            if (state.inDisabled || state.inReadOnly || !state.isActive) {
                return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
            }
            else {
                return DThemeWhiteConstants.HIGHLIGHT_COLOR;
            }
        }
        static getImageSource(state) {
            if (state.isActive) {
                return DThemeWhiteAtlas.mappings.button_check_mark_on;
            }
            else {
                return DThemeWhiteAtlas.mappings.button_check_mark_off;
            }
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    // Material Design icons by Google.
    // Apache license version 2.0.
    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("button_check_mark_on", 21, 21, `<g transform="scale(0.875,0.875)">` +
        `<path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89` +
        `-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#fff" />` +
        `</g>`);
    DThemeWhiteAtlas.add("button_check_mark_off", 21, 21, `<g transform="scale(0.875,0.875)">` +
        `<path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" ` +
        `fill="#fff" />` +
        `</g>`);
    /* eslint-prettier prettier/prettier */
    class DThemeWhiteButtonCheck extends DThemeWhiteButtonAmbient {
        getBackgroundColor(state) {
            return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
        }
        getColor(state) {
            return DThemeWhiteConstants.COLOR;
        }
        getBackgroundAlpha(state) {
            if (state.inEnabled) {
                if (state.isHovered) {
                    return DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA;
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
            return DThemeWhiteButtonChecks.getImageTintColor(state);
        }
        isToggle() {
            return true;
        }
        getImageSource(state) {
            return DThemeWhiteButtonChecks.getImageSource(state);
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteButtonCheckRight extends DThemeWhiteButtonCheck {
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
    const loadThemeWhiteButtonCheckRight = () => {
        DThemeWhite.set("DButtonCheckRight", DThemeWhiteButtonCheckRight);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteButtonCheck = () => {
        DThemeWhite.set("DButtonCheck", DThemeWhiteButtonCheck);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteButtonDanger extends DThemeWhiteButtonBase {
        constructor() {
            super(0xff5566, 0.1, 0.2);
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
        getBorderColor(state) {
            if (state.inDisabled) {
                return DThemeWhiteConstants.BORDER_COLOR;
            }
            else {
                return null;
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
                return DThemeWhiteConstants.ACTIVE_COLOR;
            }
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteButtonDanger = () => {
        DThemeWhite.set("DButtonDanger", DThemeWhiteButtonDanger);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteButton extends DThemeWhiteButtonBase {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteButtonFile extends DThemeWhiteButton {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteButtonFile = () => {
        DThemeWhite.set("DButtonFile", DThemeWhiteButtonFile);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteButtonLink extends DThemeWhiteButtonAmbient {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteButtonLink = () => {
        DThemeWhite.set("DButtonLink", DThemeWhiteButtonLink);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteButtonPrimary extends DThemeWhiteButtonBase {
        constructor() {
            super(DThemeWhiteConstants.HIGHLIGHT_COLOR, 0.1, 0.2);
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
        getBorderColor(state) {
            if (state.inDisabled) {
                return DThemeWhiteConstants.BORDER_COLOR;
            }
            else {
                return null;
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
                return DThemeWhiteConstants.ACTIVE_COLOR;
            }
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteButtonPrimary = () => {
        DThemeWhite.set("DButtonPrimary", DThemeWhiteButtonPrimary);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    // Material Design icons by Google.
    // Apache license version 2.0.
    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("button_radio_mark_on", 21, 21, `<g transform="scale(0.875,0.875)">` +
        `<path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48` +
        ` 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8` +
        ` 8 3.58 8 8-3.58 8-8 8z" fill="#fff" />` +
        `</g>`);
    DThemeWhiteAtlas.add("button_radio_mark_off", 21, 21, `<g transform="scale(0.875,0.875)">` +
        `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42` +
        ` 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="#fff" />` +
        `</g>`);
    /* eslint-enable prettier/prettier */
    class DThemeWhiteButtonRadio extends DThemeWhiteButtonAmbient {
        getBackgroundColor(state) {
            return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
        }
        getColor(state) {
            return DThemeWhiteConstants.COLOR;
        }
        getBackgroundAlpha(state) {
            if (state.inEnabled) {
                if (state.isHovered) {
                    return DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA;
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
                return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
            }
            else {
                return DThemeWhiteConstants.HIGHLIGHT_COLOR;
            }
        }
        isToggle() {
            return true;
        }
        getImageSource(state) {
            if (state.isActive) {
                return DThemeWhiteAtlas.mappings.button_radio_mark_on;
            }
            else {
                return DThemeWhiteAtlas.mappings.button_radio_mark_off;
            }
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteButtonRadioRight extends DThemeWhiteButtonRadio {
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
    const loadThemeWhiteButtonRadioRight = () => {
        DThemeWhite.set("DButtonRadioRight", DThemeWhiteButtonRadioRight);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteButtonRadio = () => {
        DThemeWhite.set("DButtonRadio", DThemeWhiteButtonRadio);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteButtonSecondary extends DThemeWhiteButtonBase {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteButtonSecondary = () => {
        DThemeWhite.set("DButtonSecondary", DThemeWhiteButtonSecondary);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteButton = () => {
        DThemeWhite.set("DButton", DThemeWhiteButton);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteCanvas extends DThemeWhiteBase {
        getBackgroundColor() {
            return 0xffffff;
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
    class DThemeWhiteCanvasContainer extends DThemeWhiteBase {
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
        getCornerMask() {
            return DCornerMask.ALL;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteCanvasContainer = () => {
        DThemeWhite.set("DCanvasContainer", DThemeWhiteCanvasContainer);
        DThemeWhite.set("DCanvas", DThemeWhiteCanvas);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteChart extends DThemeWhiteBase {
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
        newState(state) {
            super.newState(state);
            state.isFocusable = false;
        }
        isOverflowMaskEnabled() {
            return true;
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
    class DThemeWhiteChartAxisBase {
        getPosition() {
            return DChartAxisPosition.BOTTOM;
        }
        getPadding() {
            return 90;
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
    class DThemeWhiteChartAxisX extends DThemeWhiteChartAxisBase {
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
    class DThemeWhiteChartAxisXDatetime extends DThemeWhiteChartAxisX {
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
    class DThemeWhiteChartAxisY extends DThemeWhiteChartAxisBase {
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
    class DThemeWhiteChartCoordinate {
        isZero(value) {
            return Math.abs(value) < Number.EPSILON;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteChartCoordinateTick {
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
    class DThemeWhiteChartCoordinateTransform {
        isZero(value) {
            return Math.abs(value) < Number.EPSILON;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteChartLegend extends DThemeWhiteBase {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteChartLegendItem extends DThemeWhiteBase {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteChartOverview extends DThemeWhiteBase {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteChartPlotArea extends DThemeWhiteBase {
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
    class DThemeWhiteChartSelectionShape {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteChartSelectionGridlineX extends DThemeWhiteChartSelectionShape {
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
    class DThemeWhiteChartSelectionGridlineY extends DThemeWhiteChartSelectionShape {
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
    class DThemeWhiteChartSelectionMarker extends DThemeWhiteChartSelectionShape {
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
    const loadThemeWhiteChart = () => {
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
    class DThemeWhiteColorRecent {
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
    class DThemeWhiteColorStandard {
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
    const loadThemeWhiteColor = () => {
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
    class DThemeWhiteDialog extends DThemeWhiteBase {
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
                return DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD;
            }
            else {
                return DThemeWhiteConstants.BACKGROUND_COLOR;
            }
        }
        getBorderColor(state) {
            if (state.is(DDialogState.MENU)) {
                return null;
            }
            else {
                return 0xfafafa;
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
    class DThemeWhiteDialogLayered extends DThemeWhiteDialog {
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
    class DThemeWhiteDialogFitted extends DThemeWhiteDialogLayered {
        getWidth() {
            return "auto";
        }
    }

    const DLayoutDirection = wcardinal.ui.DLayoutDirection;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteLayout extends DThemeWhiteBase {
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
    class DThemeWhiteLayoutVertical extends DThemeWhiteLayout {
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
    class DThemeWhiteDialogLayeredContent extends DThemeWhiteLayoutVertical {
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
    class DThemeWhiteDialogFittedContent extends DThemeWhiteDialogLayeredContent {
        getWidth() {
            return "auto";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteDialogFitted = () => {
        DThemeWhite.set("DDialogFittedContent", DThemeWhiteDialogFittedContent);
        DThemeWhite.set("DDialogFitted", DThemeWhiteDialogFitted);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteDialogInput extends DThemeWhiteDialogLayered {
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
    class DThemeWhiteDialogInputBoolean extends DThemeWhiteDialogInput {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteDialogInputBoolean = () => {
        DThemeWhite.set("DDialogInputBoolean", DThemeWhiteDialogInputBoolean);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteDialogInputInteger extends DThemeWhiteDialogInput {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteDialogInputInteger = () => {
        DThemeWhite.set("DDialogInputInteger", DThemeWhiteDialogInputInteger);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteDialogInputReal extends DThemeWhiteDialogInput {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteDialogInputReal = () => {
        DThemeWhite.set("DDialogInputReal", DThemeWhiteDialogInputReal);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteDialogInputText extends DThemeWhiteDialogInput {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteDialogInputText = () => {
        DThemeWhite.set("DDialogInputText", DThemeWhiteDialogInputText);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteDialog = () => {
        DThemeWhite.set("DDialog", DThemeWhiteDialog);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("dropdown_mark", 20, 14, `<g>` +
        `<polyline fill="none" stroke="#fff" stroke-width="1" points="16 5 10 11 4 5"></polyline>` +
        `</g>`);
    /* eslint-enable prettier/prettier */
    class DThemeWhiteDropdownBase extends DThemeWhiteButtonBase {
        constructor() {
            super(DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD);
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
            return DThemeWhiteAtlas.mappings.dropdown_mark;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteDropdown extends DThemeWhiteDropdownBase {
        newTextValue() {
            return "";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteDropdown = () => {
        DThemeWhite.set("DDropdown", DThemeWhiteDropdown);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteExpandable extends DThemeWhiteLayoutVertical {
        getBackgroundColor(state) {
            if (state.isActive) {
                return 0xf0f8ff;
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
    class DThemeWhiteImage extends DThemeWhiteImageBase {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("menu_item_expandable_header_closed", 14, 14, `<g transform="scale(1, 0.7)">` +
        `<polyline fill="none" stroke="#fff" stroke-width="1" points="6 16 10 10 6 4"></polyline>` +
        `</g>`);
    DThemeWhiteAtlas.add("menu_item_expandable_header_opened", 14, 14, `<g transform="scale(0.7, 1)">` +
        `<polyline fill="none" stroke="#fff" stroke-width="1" points="16 6 10 10 4 6"></polyline>` +
        `</g>`);
    /* eslint-enable prettier/prettier */
    class DThemeWhiteExpandableHeader extends DThemeWhiteImage {
        getBackgroundColor(state) {
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
    const loadThemeWhiteExpandable = () => {
        DThemeWhite.set("DExpandableHeader", DThemeWhiteExpandableHeader);
        DThemeWhite.set("DExpandable", DThemeWhiteExpandable);
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
    class DThemeWhiteHtmlElement extends DThemeWhiteImageBase {
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
    const loadThemeWhiteHtmlElement = () => {
        DThemeWhite.set("DHtmlElement", DThemeWhiteHtmlElement);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteImage = () => {
        DThemeWhite.set("DImage", DThemeWhiteImage);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteLayoutHorizontal extends DThemeWhiteLayout {
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
    class DThemeWhiteInputAndLabel extends DThemeWhiteLayoutHorizontal {
        getHeight() {
            return this.getLineHeight();
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteInputAndLabel = () => {
        DThemeWhite.set("DInputAndLabel", DThemeWhiteInputAndLabel);
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
    class DThemeWhiteInput extends DThemeWhiteHtmlElement {
        constructor() {
            super(...arguments);
            this.BACKGROUND_COLOR = DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD;
            this.BACKGROUND_COLOR_HOVERED = UtilRgb.darken(this.BACKGROUND_COLOR, 0.017);
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
                return DThemeWhiteConstants.INVALID_COLOR;
            }
            return DThemeWhiteConstants.BORDER_COLOR;
        }
        getOutlineColor(state) {
            if (state.isInvalid) {
                return DThemeWhiteConstants.INVALID_COLOR;
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
    const CREATOR_CLASSNAME$1 = "d-theme-white-input-input";
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
    class DThemeWhiteInputInput extends DThemeWhiteInput {
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
    class DThemeWhiteInputNumber extends DThemeWhiteInputInput {
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
    class DThemeWhiteInputInteger extends DThemeWhiteInputNumber {
        getEditingUnformatter() {
            return editingUnformatter$1;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteInputInteger = () => {
        DThemeWhite.set("DInputInteger", DThemeWhiteInputInteger);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteText extends DThemeWhiteTextBase {
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
    class DThemeWhiteInputLabel extends DThemeWhiteText {
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
    const loadThemeWhiteInputLabel = () => {
        DThemeWhite.set("DInputLabel", DThemeWhiteInputLabel);
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
    class DThemeWhiteInputReal extends DThemeWhiteInputNumber {
        getEditingUnformatter() {
            return editingUnformatter;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteInputReal = () => {
        DThemeWhite.set("DInputReal", DThemeWhiteInputReal);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteInputText extends DThemeWhiteInputInput {
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
    DThemeWhiteAtlas.add("input_search", 21, 21, `<g transform="scale(0.875,0.875)">` +
        `<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 ` +
        `9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 ` +
        `14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#fff"/>` +
        `</g>`);
    /* eslint-enable prettier/prettier */
    class DThemeWhiteInputSearch extends DThemeWhiteInputText {
        getPaddingRight() {
            return 31;
        }
        getImageSource(state) {
            return DThemeWhiteAtlas.mappings.input_search;
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
    const loadThemeWhiteInputSearch = () => {
        DThemeWhite.set("DInputSearch", DThemeWhiteInputSearch);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const CREATOR_CLASSNAME = "d-theme-white-input-text-area";
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
    class DThemeWhiteInputTextArea extends DThemeWhiteInput {
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
    const loadThemeWhiteInputTextArea = () => {
        DThemeWhite.set("DInputTextArea", DThemeWhiteInputTextArea);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteInputText = () => {
        DThemeWhite.set("DInputText", DThemeWhiteInputText);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteLayoutBoard extends DThemeWhiteBase {
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
    class DThemeWhiteLayoutSpace extends DThemeWhiteBase {
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
    const loadThemeWhiteLayout = () => {
        DThemeWhite.set("DLayout", DThemeWhiteLayout);
        DThemeWhite.set("DLayoutHorizontal", DThemeWhiteLayoutHorizontal);
        DThemeWhite.set("DLayoutSpace", DThemeWhiteLayoutSpace);
        DThemeWhite.set("DLayoutVertical", DThemeWhiteLayoutVertical);
        DThemeWhite.set("DLayoutBoard", DThemeWhiteLayoutBoard);
    };

    const UtilGestureMode = wcardinal.ui.UtilGestureMode;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhitePane extends DThemeWhiteBase {
        isOverflowMaskEnabled() {
            return true;
        }
        getBackgroundColor(state) {
            return DThemeWhiteConstants.BACKGROUND_COLOR;
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
    class DThemeWhiteList extends DThemeWhitePane {
        getBackgroundColor(state) {
            return DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteListItems {
        constructor(baseColor, isStripeEnabled, isVivid) {
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
    class DThemeWhiteListItem extends DThemeWhiteImageBase {
        constructor() {
            super();
            this._style = this.newStyle();
        }
        newStyle() {
            return new DThemeWhiteListItems(null, true, false);
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
    class DThemeWhiteListItemAmbient extends DThemeWhiteListItem {
        newStyle() {
            return new DThemeWhiteListItems(null, false, true);
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteList = () => {
        DThemeWhite.set("DListItemAmbient", DThemeWhiteListItemAmbient);
        DThemeWhite.set("DListItem", DThemeWhiteListItem);
        DThemeWhite.set("DList", DThemeWhiteList);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteMenuBar extends DThemeWhiteLayoutHorizontal {
        getBackgroundColor() {
            return 0xfdfdfd;
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
    class DThemeWhiteMenuBarItem extends DThemeWhiteButton {
        getBackgroundColor(state) {
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
        }
        getBackgroundAlpha(state) {
            return DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA;
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
    class DThemeWhiteMenu extends DThemeWhiteLayoutVertical {
        getBackgroundColor(state) {
            return DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD;
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
    class DThemeWhiteMenuItemBase extends DThemeWhiteImage {
        getBackgroundColor(state) {
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
        }
        getBackgroundColorActive(state) {
            return DThemeWhiteConstants.HIGHLIGHT_COLOR;
        }
        getBackgroundAlpha(state) {
            if (state.inDisabled) {
                return DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA;
            }
            else if (state.isActive) {
                return this.getBackgroundAlphaActive(state);
            }
            else {
                return DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA;
            }
        }
        getBackgroundAlphaActive(state) {
            return DThemeWhiteConstants.HIGHLIGHT_ALPHA;
        }
        getColor(state) {
            if (state.inDisabled) {
                return DThemeWhiteConstants.COLOR;
            }
            else if (state.isActive) {
                return this.getColorActive(state);
            }
            else {
                return DThemeWhiteConstants.COLOR;
            }
        }
        getColorActive(state) {
            return DThemeWhiteConstants.COLOR;
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
    class DThemeWhiteMenuItem extends DThemeWhiteMenuItemBase {
        getBackgroundColorActive(state) {
            return DThemeWhiteConstants.HIGHLIGHT_COLOR;
        }
        getBackgroundAlphaActive(state) {
            return 1.0;
        }
        getColorActive(state) {
            return DThemeWhiteConstants.ACTIVE_COLOR;
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
    class DThemeWhiteMenuItemText extends DThemeWhiteMenuItem {
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
    DThemeWhiteAtlas.add("menu_item_mark_check_active", 14, 14, `<g>` +
        `<polyline fill="none" stroke="#fff" stroke-width="1" points="1 6.5 5 11 13 2.5"></polyline>` +
        `</g>`);
    DThemeWhiteAtlas.add("menu_item_mark_check_inactive", 14, 14, `<g></g>`);
    /* eslint-enable prettier/prettier */
    class DThemeWhiteMenuItemCheck extends DThemeWhiteMenuItemText {
        getBackgroundColorActive(state) {
            if (state.isHovered) {
                return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
            }
            else {
                return null;
            }
        }
        getBackgroundAlphaActive(state) {
            return DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA;
        }
        getColorActive(state) {
            return DThemeWhiteConstants.COLOR;
        }
        getImageSource(state) {
            if (state.isActive) {
                return DThemeWhiteAtlas.mappings.menu_item_mark_check_active;
            }
            else {
                return DThemeWhiteAtlas.mappings.menu_item_mark_check_inactive;
            }
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
    class DThemeWhiteMenuItemExpandable extends DThemeWhiteLayoutVertical {
        getBackgroundColor(state) {
            if (state.isActive) {
                return 0xf0f8ff;
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
    class DThemeWhiteMenuItemExpandableBody extends DThemeWhiteLayoutVertical {
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

    class DThemeWhiteExpandables {
        static init() {
            /* eslint-disable prettier/prettier */
            DThemeWhiteAtlas.add("expandable_closed", 14, 14, `<g transform="scale(1, 0.7)">` +
                `<polyline fill="none" stroke="#fff" stroke-width="1" points="6 16 10 10 6 4"></polyline>` +
                `</g>`);
            DThemeWhiteAtlas.add("expandable_opened", 14, 14, `<g transform="scale(0.7, 1)">` +
                `<polyline fill="none" stroke="#fff" stroke-width="1" points="16 6 10 10 4 6"></polyline>` +
                `</g>`);
            /* eslint-enable prettier/prettier */
        }
        static getImageOpened() {
            return DThemeWhiteAtlas.mappings.expandable_opened;
        }
        static getImageClosed() {
            return DThemeWhiteAtlas.mappings.expandable_closed;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    DThemeWhiteExpandables.init();
    class DThemeWhiteMenuItemExpandableHeader extends DThemeWhiteMenuItemBase {
        getPaddingLeft() {
            return this.getPaddingRight();
        }
        getPaddingRight() {
            return 26;
        }
        getImageSource(state) {
            if (state.inActive) {
                return DThemeWhiteExpandables.getImageOpened();
            }
            return DThemeWhiteExpandables.getImageClosed();
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
    class DThemeWhiteMenuItemExpandableItemCheck extends DThemeWhiteMenuItemCheck {
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
    class DThemeWhiteMenuItemLink extends DThemeWhiteMenuItemText {
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
    class DThemeWhiteMenuItemExpandableItemLink extends DThemeWhiteMenuItemLink {
        getPaddingLeft() {
            return super.getPaddingLeft() + 16;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("menu_item_mark_next", 14, 20, `<g>` +
        `<polyline fill="none" stroke="#fff" stroke-width="1" points="5 16 11 10 5 4"></polyline>` +
        `</g>`);
    /* eslint-enable prettier/prettier */
    class DThemeWhiteMenuItemMenu extends DThemeWhiteMenuItem {
        getImageSource(state) {
            return DThemeWhiteAtlas.mappings.menu_item_mark_next;
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
    class DThemeWhiteMenuItemExpandableItemMenu extends DThemeWhiteMenuItemMenu {
        getPaddingLeft() {
            return super.getPaddingLeft() + 16;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteMenuItemSeparator extends DThemeWhiteMenuItemBase {
        getBorderColor(state) {
            return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
        }
        getBorderAlpha(state) {
            return DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA;
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
    class DThemeWhiteMenuItemExpandableItemSeparator extends DThemeWhiteMenuItemSeparator {
        getPaddingLeft() {
            return super.getPaddingLeft() + 16;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteMenuItemSpace extends DThemeWhiteLayoutSpace {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteMenuItemExpandableItemSpace extends DThemeWhiteMenuItemSpace {
        getPaddingLeft() {
            return super.getPaddingLeft() + 16;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteMenuItemExpandableItemText extends DThemeWhiteMenuItemText {
        getPaddingLeft() {
            return super.getPaddingLeft() + 16;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteMenu = () => {
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
    const loadThemeWhiteMenuBar = () => {
        DThemeWhite.set("DMenuBarItem", DThemeWhiteMenuBarItem);
        DThemeWhite.set("DMenuBar", DThemeWhiteMenuBar);
        loadThemeWhiteMenu();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteMenuSided extends DThemeWhitePane {
        getBackgroundColor(state) {
            return DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD;
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
    class DThemeWhiteMenuSidedContent extends DThemeWhiteLayoutVertical {
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
    class DThemeWhiteMenuSidedItemCheck extends DThemeWhiteMenuItemCheck {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteMenuSidedItemExpandable extends DThemeWhiteMenuItemExpandable {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteMenuSidedItemExpandableItemCheck extends DThemeWhiteMenuItemExpandableItemCheck {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteMenuSidedItemExpandableItemLink extends DThemeWhiteMenuItemExpandableItemLink {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteMenuSidedItemExpandableItemMenu extends DThemeWhiteMenuItemExpandableItemMenu {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteMenuSidedItemExpandableItemSeparator extends DThemeWhiteMenuItemExpandableItemSeparator {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteMenuSidedItemExpandableItemSpace extends DThemeWhiteMenuItemExpandableItemSpace {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteMenuSidedItemExpandableItemText extends DThemeWhiteMenuItemExpandableItemText {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteMenuSidedItemLink extends DThemeWhiteMenuItemLink {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteMenuSidedItemMenu extends DThemeWhiteMenuItemMenu {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteMenuSidedItemSeparator extends DThemeWhiteMenuItemSeparator {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteMenuSidedItemSpace extends DThemeWhiteMenuItemSpace {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteMenuSidedItemText extends DThemeWhiteMenuItemText {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteMenuSided = () => {
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
    class DThemeWhitePagination extends DThemeWhiteLayoutHorizontal {
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
    DThemeWhiteAtlas.add("pagination_dots", 21, 21, `<g>` +
        `<circle cx="2" cy="11" r="1.1" fill="#fff" stroke="none" />` +
        `<circle cx="10.5" cy="11" r="1.1" fill="#fff" stroke="none" />` +
        `<circle cx="19" cy="11" r="1.1" fill="#fff" stroke="none" />` +
        `</g>`);
    /* eslint-enable prettier/prettier */
    class DThemeWhitePaginationDots extends DThemeWhiteImageBase {
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
            return DThemeWhiteAtlas.mappings.pagination_dots;
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
    DThemeWhiteAtlas.add("pagination_button_last", 21, 21, `<g>` +
        `<polyline fill="none" stroke="#fff" stroke-width="1" points="9 15 15 10 9 5"></polyline>` +
        `<polyline fill="none" stroke="#fff" stroke-width="1" points="5 15 11 10 5 5"></polyline>` +
        `</g>`);
    /* eslint-enable prettier/prettier */
    class DThemeWhitePaginationButtonLast extends DThemeWhiteButtonAmbient {
        getWidth() {
            return 30;
        }
        getImageSource(state) {
            return DThemeWhiteAtlas.mappings.pagination_button_last;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("pagination_button_next", 21, 21, `<g>` +
        `<polyline fill="none" stroke="#fff" stroke-width="1" points="7 15 13 10 7 5"></polyline>` +
        `</g>`);
    /* eslint-enable prettier/prettier */
    class DThemeWhitePaginationButtonNext extends DThemeWhiteButtonAmbient {
        getWidth() {
            return 30;
        }
        getImageSource(state) {
            return DThemeWhiteAtlas.mappings.pagination_button_next;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhitePaginationButtonPage extends DThemeWhiteButtonAmbient {
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
    DThemeWhiteAtlas.add("pagination_button_previous", 21, 21, `<g>` +
        `<polyline fill="none" stroke="#fff" stroke-width="1" points="13 15 7 10 13 5"></polyline>` +
        `</g>`);
    /* eslint-enable prettier/prettier */
    class DThemeWhitePaginationButtonPrevious extends DThemeWhiteButtonAmbient {
        getWidth() {
            return 30;
        }
        getImageSource(state) {
            return DThemeWhiteAtlas.mappings.pagination_button_previous;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("pagination_button_top", 21, 21, `<g>` +
        `<polyline fill="none" stroke="#fff" stroke-width="1" points="11 15 5 10 11 5"></polyline>` +
        `<polyline fill="none" stroke="#fff" stroke-width="1" points="15 15 9 10 15 5"></polyline>` +
        `</g>`);
    /* eslint-enable prettier/prettier */
    class DThemeWhitePaginationButtonTop extends DThemeWhiteButtonAmbient {
        getWidth() {
            return 30;
        }
        getImageSource(state) {
            return DThemeWhiteAtlas.mappings.pagination_button_top;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhitePaginationPage extends DThemeWhiteImageBase {
        getBackgroundColor(state) {
            return DThemeWhiteConstants.HIGHLIGHT_COLOR;
        }
        getColor(state) {
            return DThemeWhiteConstants.ACTIVE_COLOR;
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
    const loadThemeWhitePagination = () => {
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
    class DThemeWhiteContent extends DThemeWhiteBase {
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
    class DThemeWhiteScrollBar extends DThemeWhiteBase {
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
    class DThemeWhiteScrollBarThumb extends DThemeWhiteBase {
        constructor() {
            super(...arguments);
            this.BORDER_COLOR = UtilRgb.darken(DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR, 0.25);
            this.BORDER_COLOR_DISABLED = UtilRgb.brighten(this.BORDER_COLOR, 0.75);
            this.BORDER_COLOR_HOVERED = UtilRgb.brighten(this.BORDER_COLOR, 0.25);
            this.BORDER_COLOR_OTHER = UtilRgb.brighten(this.BORDER_COLOR, 0.5);
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
    const loadThemeWhiteScrollBar = () => {
        DThemeWhite.set("DScrollBar", DThemeWhiteScrollBar);
        DThemeWhite.set("DScrollBarThumb", DThemeWhiteScrollBarThumb);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhitePane = () => {
        DThemeWhite.set("DPane", DThemeWhitePane);
        DThemeWhite.set("DContent", DThemeWhiteContent);
        loadThemeWhiteScrollBar();
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
    class DThemeWhiteSelect extends DThemeWhiteDropdownBase {
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
    class DThemeWhiteSelectMultiple extends DThemeWhiteDropdownBase {
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
    const loadThemeWhiteSelect = () => {
        DThemeWhite.set("DSelectMultiple", DThemeWhiteSelectMultiple);
        DThemeWhite.set("DSelect", DThemeWhiteSelect);
        loadThemeWhiteDropdown();
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
    class EThemeWhiteShapeActionValue {
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
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteShapeActionValue = () => {
        DThemeWhite.set("EShapeActionValue", EThemeWhiteShapeActionValue);
    };

    const EShapeStrokeSide = wcardinal.ui.EShapeStrokeSide;

    class EThemeWhiteShape {
        getFillColor() {
            return 0xffffff;
        }
        getFillAlpha() {
            return 0.5;
        }
        getStrokeColor() {
            return 0x4f4f4f;
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
    const loadThemeWhiteShape = () => {
        DThemeWhite.set("EShape", EThemeWhiteShape);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteSlider extends DThemeWhiteBase {
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
    class DThemeWhiteSliderHorizontal extends DThemeWhiteSlider {
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
    class DThemeWhiteSliderLabel extends DThemeWhiteTextBase {
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

    class DThemeWhiteSliders {
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
    DThemeWhiteSliders.BACKGROUND_COLOR_ACTIVE = DThemeWhiteConstants.HIGHLIGHT_COLOR;
    DThemeWhiteSliders.BACKGROUND_COLOR_ACTIVE_HOVERED = UtilRgb.darken(DThemeWhiteSliders.BACKGROUND_COLOR_ACTIVE, 0.1);
    DThemeWhiteSliders.BACKGROUND_COLOR_ACTIVE_PRESSED = UtilRgb.darken(DThemeWhiteSliders.BACKGROUND_COLOR_ACTIVE, 0.2);
    DThemeWhiteSliders.BACKGROUND_COLOR = DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
    DThemeWhiteSliders.BACKGROUND_COLOR_HOVERED = UtilRgb.darken(DThemeWhiteSliders.BACKGROUND_COLOR, 0.1);
    DThemeWhiteSliders.BACKGROUND_COLOR_PRESSED = UtilRgb.darken(DThemeWhiteSliders.BACKGROUND_COLOR, 0.2);
    DThemeWhiteSliders.BACKGROUND_COLOR_DISABLED = UtilRgb.blend(DThemeWhiteSliders.BACKGROUND_COLOR, DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD, 0.5);

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("slider_thumb", 16, 16, `<circle cx="8" cy="8" r="7.5" stroke="none" fill="#ffffff" />`);
    /* eslint-enable prettier/prettier */
    class DThemeWhiteSliderThumb extends DThemeWhiteButton {
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
            return DThemeWhiteAtlas.mappings.slider_thumb;
        }
        getImageTintColor(state) {
            return DThemeWhiteSliders.getBackgroundColor(state, true);
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
    class DThemeWhiteSliderTrack extends DThemeWhiteButton {
        getBackgroundColor(state) {
            return DThemeWhiteSliders.getBackgroundColor(state);
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
    class DThemeWhiteSliderTrackHorizontal extends DThemeWhiteSliderTrack {
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
    class DThemeWhiteSliderTrackVertical extends DThemeWhiteSliderTrack {
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
    class DThemeWhiteSliderValue extends DThemeWhiteTextBase {
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
                return 0xaaaaaa;
            }
            return DThemeWhiteConstants.HIGHLIGHT_COLOR;
        }
        getBorderColor(state) {
            return null;
        }
        getColor(state) {
            return DThemeWhiteConstants.ACTIVE_COLOR;
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
    class DThemeWhiteSliderVertical extends DThemeWhiteSlider {
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
    const loadThemeWhiteSlider = () => {
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
    const loadThemeWhiteText = () => {
        DThemeWhite.set("DText", DThemeWhiteText);
    };

    const DTableState = wcardinal.ui.DTableState;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteTableBodyCellTrees {
        static init() {
            DThemeWhiteExpandables.init();
        }
        static getImageSource(state) {
            if (state.is(DTableState.HAS_CHILDREN)) {
                if (state.is(DTableState.OPENED)) {
                    return DThemeWhiteExpandables.getImageOpened();
                }
                else {
                    return DThemeWhiteExpandables.getImageClosed();
                }
            }
            return null;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    DThemeWhiteTableBodyCellTrees.init();
    class DThemeWhiteTreeItems extends DThemeWhiteListItems {
        getSecondaryImageSource(state) {
            return DThemeWhiteTableBodyCellTrees.getImageSource(state);
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
    class DThemeWhiteTree extends DThemeWhitePane {
        constructor() {
            super();
            this._style = this.newStyle();
        }
        newStyle() {
            return new DThemeWhiteTreeItems(null, true, false);
        }
        getBackgroundColor(state) {
            return DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteTreeItemText extends DThemeWhiteImageBase {
        constructor() {
            super();
            this._style = this.newStyle();
        }
        newStyle() {
            return new DThemeWhiteTreeItems(null, true, false);
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
    class DThemeWhiteTreeItemButton extends DThemeWhiteTreeItemText {
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
    DThemeWhiteTableBodyCellTrees.init();
    class DThemeWhiteTreeItemNonEditable extends DThemeWhiteTreeItemButton {
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
    const loadThemeWhiteTree = () => {
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
    class DThemeWhiteView {
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
    const loadThemeWhiteView = () => {
        DThemeWhite.set("DView", DThemeWhiteView);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhite = () => {
        DThemes.setDefaultThemeClass(DThemeWhite);
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
    DThemeWhiteAtlas.add("button_color_sample", 21, 21, newSvgRoundedRect(3, 3, 15, 15, "#fff", "#eee", 1));
    /* eslint-enable prettier/prettier */
    const formatter$8 = (colorAndAlpha) => {
        return `#${UtilRgb.toCode(colorAndAlpha.color)} A${colorAndAlpha.alpha.toFixed(2)}`;
    };
    class DThemeWhiteButtonColor extends DThemeWhiteButton {
        getImageTintColor(state) {
            return 0xffffff;
        }
        getImageSource(state) {
            return DThemeWhiteAtlas.mappings.button_color_sample;
        }
        getTextFormatter() {
            return formatter$8;
        }
        newTextValue() {
            return {
                color: 0xffffff,
                alpha: 1
            };
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteDialogColor extends DThemeWhiteDialogFitted {
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

    const newWhiteSvgRoundedCheckerboard = (width, height, stroke, strokeWidth, strokeOpacity) => {
        return newSvgRoundedCheckerboard(width, height, "#bfbfbf", "#a5a5a5", stroke, strokeWidth, strokeOpacity);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("picker_color_main", 234, 162, `<g>` +
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
    DThemeWhiteAtlas.add("picker_color_main_base", 234, 162, `<rect x="0" y="0" width="236" height="164" fill="#fff" />`);
    DThemeWhiteAtlas.add("picker_color_alpha_checkerboard", 234, 18, newWhiteSvgRoundedCheckerboard(234, 18));
    DThemeWhiteAtlas.add("picker_color_alpha", 234, 18, `<g>` +
        `<linearGradient id="s48afbuh44" x1="0%" y1="0%" x2="100%" y2="0%">` +
        `<stop stop-color="#FFFFFF" stop-opacity="0" offset="0"/>` +
        `<stop stop-color="#FFFFFF" stop-opacity="1" offset="1"/>` +
        `</linearGradient>` +
        `<rect x="0" y="0" width="234" height="18" fill="url(#s48afbuh44)" />` +
        `</g>`);
    DThemeWhiteAtlas.add("picker_color_base", 234, 18, `<g>` +
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
    DThemeWhiteAtlas.add("picker_color_base_pointer", 16.2, 31.8, `<rect x="4.5" y="4.5" width="7.2" height="22.8" stroke="#5f5f5f" stroke-width="2.4" fill="none" />`);
    DThemeWhiteAtlas.add("picker_color_pointer", 25.8, 25.8, `<circle cx="12.9" cy="12.9" r="4.8" stroke="#5f5f5f" stroke-width="2.4" fill="none" />` +
        `<circle cx="12.9" cy="12.9" r="7.2" stroke="#ffffff" stroke-width="2.4" fill="none" />`);
    DThemeWhiteAtlas.add("picker_color_recent_checkerboard", 18, 18, newWhiteSvgRoundedCheckerboard(18, 18));
    DThemeWhiteAtlas.add("picker_color_recent", 18, 18, newSvgRoundedRect(0, 0, 18, 18, "#fff", "#eee", 1));
    DThemeWhiteAtlas.add("picker_color_sample_checkerboard", 42, 66, newWhiteSvgRoundedCheckerboard(42, 66, "#fff", 1, 0));
    DThemeWhiteAtlas.add("picker_color_sample", 42, 66, newSvgRoundedRect(0, 0, 42, 66, "#fff", "#eee", 1));
    DThemeWhiteAtlas.add("picker_color_anchor_outlined", 25.8, 25.8, `<circle cx="12.9" cy="12.9" r="8.4" stroke="none" fill="#ffffff" />` +
        `<circle cx="12.9" cy="12.9" r="9.6" stroke="#5f5f5f" stroke-width="2.4" fill="none" />`);
    DThemeWhiteAtlas.add("picker_color_anchor", 28.2, 28.2, `<circle cx="14.1" cy="14.1" r="6" stroke="none" fill="#ffffff" />` +
        `<circle cx="14.1" cy="14.1" r="7.2" stroke="#5f5f5f" stroke-width="2.4" fill="none" />`);
    DThemeWhiteAtlas.add("picker_color_direction", 12, 30, `<path d="M0.6 25.8 L 12.0375 5.9895" stroke="#5f5f5f" stroke-width="1.2" fill="none" />` +
        `<path d="M8.5125 25.8 A 8.475 8.475 0 0 0 4.275 18.4605" stroke="#5f5f5f" stroke-width="1.2" fill="none" />` +
        `<rect x="0.6" y="24.6" width="11.4375" height="1.2" rx="0.6" ry="0.6" stroke="none" fill="#5f5f5f" />`);
    DThemeWhiteAtlas.add("picker_color_standard", 18, 18, newSvgRoundedRect(0, 0, 18, 18, "#fff", "#eee", 1));
    /* eslint-enable prettier/prettier */
    class DThemeWhitePickerColor extends DThemeWhiteBase {
        getMainWidth() {
            return 234;
        }
        getMainHeight() {
            return 162;
        }
        getMainTexture() {
            return DThemeWhiteAtlas.mappings.picker_color_main;
        }
        getMainBaseTexture() {
            return DThemeWhiteAtlas.mappings.picker_color_main_base;
        }
        getMainPointerTexture() {
            return DThemeWhiteAtlas.mappings.picker_color_pointer;
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
            return DThemeWhiteAtlas.mappings.picker_color_base;
        }
        getBasePointerTexture() {
            return DThemeWhiteAtlas.mappings.picker_color_base_pointer;
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
            return DThemeWhiteAtlas.mappings.picker_color_alpha;
        }
        getAlphaCheckerboardTexture() {
            return DThemeWhiteAtlas.mappings.picker_color_alpha_checkerboard;
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
            return DThemeWhiteAtlas.mappings.picker_color_recent_checkerboard;
        }
        getRecentTexture() {
            return DThemeWhiteAtlas.mappings.picker_color_recent;
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
            return DThemeWhiteAtlas.mappings.picker_color_sample_checkerboard;
        }
        getSampleCheckerboardNewTexture() {
            return DThemeWhiteAtlas.mappings.picker_color_sample_checkerboard;
        }
        getSampleOldTexture() {
            return DThemeWhiteAtlas.mappings.picker_color_sample;
        }
        getSampleNewTexture() {
            return DThemeWhiteAtlas.mappings.picker_color_sample;
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
            return DThemeWhiteAtlas.mappings.picker_color_standard;
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
    class DThemeWhiteJaJpPickerColor extends DThemeWhitePickerColor {
        toColorTypeLabel(type) {
            switch (type) {
                case DColorType.STANDARD:
                    return "標準";
                case DColorType.CUSTOM:
                    return "カスタム";
            }
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteJaJpPickerColor = () => {
        DThemeWhite.set("DPickerColor", DThemeWhiteJaJpPickerColor);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteJaJpDialogColor = () => {
        DThemeWhite.set("DDialogColor", DThemeWhiteDialogColor);
        loadThemeWhiteJaJpPickerColor();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteJaJpButtonColor = () => {
        DThemeWhite.set("DButtonColor", DThemeWhiteButtonColor);
        loadThemeWhiteJaJpDialogColor();
    };

    const DColorGradientObservable = wcardinal.ui.DColorGradientObservable;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("button_color_gradient_sample", 21, 21, newSvgRoundedRect(3, 3, 15, 15, "#fff", "#eee", 1));
    /* eslint-enable prettier/prettier */
    const formatter$7 = () => {
        return "";
    };
    class DThemeWhiteButtonColorGradient extends DThemeWhiteButton {
        getViewBaseTexture() {
            return DThemeWhiteAtlas.mappings.button_color_gradient_sample;
        }
        getTextFormatter() {
            return formatter$7;
        }
        newTextValue() {
            return new DColorGradientObservable();
        }
        getCheckerColors() {
            return [0.75, 0.65];
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteDialogColorGradient extends DThemeWhiteDialogFitted {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhitePickerColorGradient extends DThemeWhiteBase {
        getGradientPointsWidth() {
            return 30;
        }
        getGradientPointsMargin() {
            return 24;
        }
        getGradientAnchorTexture() {
            return DThemeWhiteAtlas.mappings.picker_color_anchor;
        }
        getGradientAnchorOutlinedTexture() {
            return DThemeWhiteAtlas.mappings.picker_color_anchor_outlined;
        }
        getGradientAnchorOutlineTexture() {
            return DThemeWhiteAtlas.mappings.picker_color_anchor_outline;
        }
        getGradientDirectionMargin() {
            return 5;
        }
        getGradientDirectionTexture() {
            return DThemeWhiteAtlas.mappings.picker_color_direction;
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
            return [0.75, 0.65];
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
    const loadThemeWhiteJaJpPickerColorGradient = () => {
        DThemeWhite.set("DPickerColorGradient", DThemeWhitePickerColorGradient);
        loadThemeWhiteJaJpPickerColor();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteJaJpDialogColorGradient = () => {
        DThemeWhite.set("DDialogColorGradient", DThemeWhiteDialogColorGradient);
        loadThemeWhiteJaJpPickerColorGradient();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteJaJpButtonColorGradient = () => {
        DThemeWhite.set("DButtonColorGradient", DThemeWhiteButtonColorGradient);
        loadThemeWhiteJaJpDialogColorGradient();
    };

    const DPickerDates = wcardinal.ui.DPickerDates;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const formatter$6 = (value) => {
        return DPickerDates.format(value);
    };
    class DThemeWhiteButtonDate extends DThemeWhiteButton {
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
    class DThemeWhiteDialogDate extends DThemeWhiteDialogFitted {
    }

    const DPickerDatetimeMask = wcardinal.ui.DPickerDatetimeMask;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhitePickerTime extends DThemeWhiteBase {
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
    class DThemeWhiteJaJpPickerTime extends DThemeWhitePickerTime {
        getHoursOptions() {
            return {
                width: 100,
                title: "時"
            };
        }
        getMinutesOptions() {
            return {
                width: 100,
                title: "分"
            };
        }
        getSecondsOptions() {
            return {
                width: 100,
                title: "秒"
            };
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const MONTH_LABELS = [
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
    const DAY_LABELS = ["日", "月", "火", "水", "木", "金", "土"];
    const defaultLabelFormatter = (date) => {
        return `${date.getFullYear()}年${MONTH_LABELS[date.getMonth()]}`;
    };
    const defaultDateDecorator = () => {
        /* DO NOTHING*/
    };
    class DThemeWhiteJaJpPickerDatetime extends DThemeWhiteJaJpPickerTime {
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
                title: "前月"
            };
        }
        getNextButtonOptions() {
            return {
                title: "翌月"
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
    class DThemeWhiteJaJpPickerDate extends DThemeWhiteJaJpPickerDatetime {
        getMask() {
            return DPickerDatetimeMask.DATE;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("picker_date_back", 24, 24, `<g>` +
        `<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="#fff" />` +
        `</g>`);
    /* eslint-enable prettier/prettier */
    class DThemeWhitePickerDatetimeButtonBack extends DThemeWhiteButtonAmbient {
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
            return DThemeWhiteAtlas.mappings.picker_date_back;
        }
        getAlpha(state) {
            return super.getAlpha(state) * 0.9;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhitePickerDatetimeButtonDate extends DThemeWhiteButtonAmbient {
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
    DThemeWhiteAtlas.add("picker_date_next", 24, 24, `<g>` +
        `<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="#fff" />` +
        `</g>`);
    /* eslint-enable prettier/prettier */
    class DThemeWhitePickerDatetimeButtonNext extends DThemeWhiteButtonAmbient {
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
            return DThemeWhiteAtlas.mappings.picker_date_next;
        }
        getAlpha(state) {
            return super.getAlpha(state) * 0.9;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhitePickerDatetimeLabel extends DThemeWhiteText {
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
    class DThemeWhitePickerDatetimeLabelDate extends DThemeWhiteText {
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
    class DThemeWhitePickerDatetimeSpace extends DThemeWhiteBase {
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
    const loadThemeWhiteJaJpPickerTime = () => {
        DThemeWhite.set("DPickerTime", DThemeWhiteJaJpPickerTime);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteJaJpPickerDatetime = () => {
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
    const loadThemeWhiteJaJpPickerDate = () => {
        DThemeWhite.set("DPickerDate", DThemeWhiteJaJpPickerDate);
        loadThemeWhiteJaJpPickerDatetime();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteJaJpDialogDate = () => {
        DThemeWhite.set("DDialogDate", DThemeWhiteDialogDate);
        loadThemeWhiteJaJpPickerDate();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteJaJpButtonDate = () => {
        DThemeWhite.set("DButtonDate", DThemeWhiteButtonDate);
        loadThemeWhiteJaJpDialogDate();
    };

    const DPickerDatetimes = wcardinal.ui.DPickerDatetimes;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const formatter$5 = (value, caller) => {
        return DPickerDatetimes.format(value, caller.getDatetimeMask());
    };
    class DThemeWhiteButtonDatetime extends DThemeWhiteButton {
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
    class DThemeWhiteDialogDatetime extends DThemeWhiteDialogFitted {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteJaJpDialogDatetime = () => {
        DThemeWhite.set("DDialogDatetime", DThemeWhiteDialogDatetime);
        loadThemeWhiteJaJpPickerDatetime();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteJaJpButtonDatetime = () => {
        DThemeWhite.set("DButtonDatetime", DThemeWhiteButtonDatetime);
        loadThemeWhiteJaJpDialogDatetime();
    };

    const toLabel = wcardinal.ui.toLabel;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteButtonSelect extends DThemeWhiteButton {
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
    class DThemeWhiteDialogSelectList extends DThemeWhiteList {
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
    class DThemeWhiteDialogSelectListItem extends DThemeWhiteListItem {
        newStyle() {
            return new DThemeWhiteListItems(null, false, true);
        }
        getCornerMask() {
            return DCornerMask.NONE;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteDialogSelect extends DThemeWhiteDialogLayered {
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
    class DThemeWhiteJaJpDialogSelect extends DThemeWhiteDialogSelect {
        getDismissLabel() {
            return "なし";
        }
        getCategoryDismissLabel() {
            return "全て";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteJaJpDialogSelect = () => {
        DThemeWhite.set("DDialogSelect", DThemeWhiteJaJpDialogSelect);
        DThemeWhite.set("DDialogSelectList", DThemeWhiteDialogSelectList);
        DThemeWhite.set("DDialogSelectListItem", DThemeWhiteDialogSelectListItem);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteJaJpButtonSelect = () => {
        DThemeWhite.set("DButtonSelect", DThemeWhiteButtonSelect);
        loadThemeWhiteJaJpDialogSelect();
    };

    const DPickerTimes = wcardinal.ui.DPickerTimes;

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const formatter$4 = (value, caller) => {
        return DPickerTimes.format(value, caller.getDatetimeMask());
    };
    class DThemeWhiteButtonTime extends DThemeWhiteButton {
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
    class DThemeWhiteDialogTime extends DThemeWhiteDialogFitted {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteJaJpDialogTime = () => {
        DThemeWhite.set("DDialogTime", DThemeWhiteDialogTime);
        loadThemeWhiteJaJpPickerTime();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteJaJpButtonTime = () => {
        DThemeWhite.set("DButtonTime", DThemeWhiteButtonTime);
        loadThemeWhiteJaJpDialogTime();
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteJaJpButtonAll = () => {
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
    class DThemeWhiteDiagramBase extends DThemeWhiteCanvasContainer {
        getCanvasBackgroundColor() {
            return 0xffffff;
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
    class DThemeWhiteDiagram extends DThemeWhiteDiagramBase {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteDiagramCanvasBase extends DThemeWhiteCanvas {
        isAmbient() {
            return true;
        }
        getBackgroundBase() {
            return 0xeeeeee;
        }
        getLocalBoundsLimit() {
            return 0;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteDiagramCanvas extends DThemeWhiteDiagramCanvasBase {
        newState(state) {
            super.newState(state);
            state.isFocusable = false;
        }
    }

    class EThemeWhiteShapePointsFormatter {
    }

    class EThemeWhiteJaJpShapePointsFormatter extends EThemeWhiteShapePointsFormatter {
        getCurveSplineLabel() {
            return "スプライン曲線";
        }
        getCurveBezierQuadraticLabel() {
            return "２次ベジェ曲線";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteJaJpShapePointsFormatter = () => {
        DThemeWhite.set("EShapePointsFormatter", EThemeWhiteJaJpShapePointsFormatter);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteJaJpDiagram = () => {
        DThemeWhite.set("DDiagram", DThemeWhiteDiagram);
        DThemeWhite.set("DDiagramCanvas", DThemeWhiteDiagramCanvas);
        loadThemeWhiteJaJpShapePointsFormatter();
        loadThemeWhiteShape();
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
    class DThemeWhiteDiagramCanvasEditor extends DThemeWhiteDiagramCanvasBase {
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
            return DThemeWhiteConstants.HIGHLIGHT_COLOR;
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
    class DThemeWhiteDiagramEditor extends DThemeWhiteDiagramBase {
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
    class DThemeWhiteJaJpDiagramEditor extends DThemeWhiteDiagramEditor {
        getBaseLayerLabel() {
            return "ベースレイヤー";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteJaJpDiagramEditor = () => {
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
    class DThemeWhiteDialogLayeredHeader extends DThemeWhiteImageBase {
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
        getBackgroundColor(state) {
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
    DThemeWhiteAtlas.add("dialog_layered_header_button_close", 20, 14, `<g>` +
        `<polyline fill="none" stroke="#fff" stroke-width="1" points="15 2 5 12"></polyline>` +
        `<polyline fill="none" stroke="#fff" stroke-width="1" points="5 2 15 12"></polyline>` +
        `</g>`);
    /* eslint-enable prettier/prettier */
    const X = (p, s) => {
        return p - 34;
    };
    class DThemeWhiteDialogLayeredHeaderButtonClose extends DThemeWhiteButtonAmbient {
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
            return DThemeWhiteAtlas.mappings.dialog_layered_header_button_close;
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
    class DThemeWhiteDialogLayeredHeaderSeparator extends DThemeWhiteImageBase {
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
            return DThemeWhiteConstants.BORDER_COLOR;
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
    class DThemeWhiteDialogLayeredFooter extends DThemeWhiteLayoutHorizontal {
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
    class DThemeWhiteJaJpDialogLayeredFooter extends DThemeWhiteDialogLayeredFooter {
        getButtonOk() {
            return "OK";
        }
        getButtonCancel() {
            return "キャンセル";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteJaJpDialogLayered = () => {
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
    class DThemeWhiteDialogConfirmMessage extends DThemeWhiteImage {
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
    class DThemeWhiteDialogConfirm extends DThemeWhiteDialogLayered {
        getMessage() {
            return "";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteJaJpDialogConfirm extends DThemeWhiteDialogConfirm {
        getFooter() {
            return {
                button: {
                    ok: "はい",
                    cancel: "いいえ"
                }
            };
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteJaJpDialogConfirm = () => {
        DThemeWhite.set("DDialogConfirm", DThemeWhiteJaJpDialogConfirm);
        DThemeWhite.set("DDialogConfirmMessage", DThemeWhiteDialogConfirmMessage);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteJaJpDialogConfirmDelete extends DThemeWhiteJaJpDialogConfirm {
        getMessage() {
            return "このデータを削除しますか？";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteJaJpDialogConfirmDelete = () => {
        DThemeWhite.set("DDialogConfirmDelete", DThemeWhiteJaJpDialogConfirmDelete);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteJaJpDialogConfirmDiscard extends DThemeWhiteJaJpDialogConfirm {
        getMessage() {
            return "保存されていない変更があります。\nこれらの変更を破棄し続行しますか？";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteJaJpDialogConfirmDiscard = () => {
        DThemeWhite.set("DDialogConfirmDiscard", DThemeWhiteJaJpDialogConfirmDiscard);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteDialogMessage extends DThemeWhiteDialogConfirm {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteJaJpDialogMessage extends DThemeWhiteDialogMessage {
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
    const loadThemeWhiteJaJpDialogMessage = () => {
        DThemeWhite.set("DDialogMessage", DThemeWhiteJaJpDialogMessage);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    // Material Design icons by Google.
    // Apache license version 2.0.
    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("success_mark", 21, 21, `<g transform="scale(0.875,0.875)">` +
        `<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="#fff" />` +
        `</g>`);
    /* eslint-enable prettier/prettier */
    class DThemeWhiteDialogProcessingMessage extends DThemeWhiteDialogConfirmMessage {
        getHeight() {
            return 90;
        }
        getImageSource(state) {
            if (state.isSucceeded) {
                return DThemeWhiteAtlas.mappings.success_mark;
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
    class DThemeWhiteDialogProcessing extends DThemeWhiteDialogConfirm {
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
    const dThemeWhiteJaJpDialogProcessingMessage = (state) => {
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
    class DThemeWhiteJaJpDialogProcessing extends DThemeWhiteDialogProcessing {
        getFooter() {
            return {
                button: {
                    ok: "OK",
                    cancel: null
                }
            };
        }
        getMessage() {
            return dThemeWhiteJaJpDialogProcessingMessage;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteJaJpDialogProcessing = () => {
        DThemeWhite.set("DDialogProcessing", DThemeWhiteJaJpDialogProcessing);
        DThemeWhite.set("DDialogProcessingMessage", DThemeWhiteDialogProcessingMessage);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteDialogSaveAs extends DThemeWhiteDialogInputText {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteJaJpDialogSaveAs extends DThemeWhiteDialogSaveAs {
        getFooter() {
            return {
                button: {
                    ok: "保存",
                    cancel: null
                }
            };
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteJaJpDialogSaveAs = () => {
        DThemeWhite.set("DDialogSaveAs", DThemeWhiteJaJpDialogSaveAs);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteJaJpDialogAll = () => {
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
    class DThemeWhiteInputBoolean extends DThemeWhiteLayoutHorizontal {
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
    class DThemeWhiteInputBooleanButtonOff extends DThemeWhiteButton {
        isToggle() {
            return true;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteJaJpInputBooleanButtonOff extends DThemeWhiteInputBooleanButtonOff {
        newTextValue() {
            return "OFF";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteInputBooleanButtonOn extends DThemeWhiteButton {
        isToggle() {
            return true;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteJaJpInputBooleanButtonOn extends DThemeWhiteInputBooleanButtonOn {
        newTextValue() {
            return "ON";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteJaJpInputBoolean = () => {
        DThemeWhite.set("DInputBoolean", DThemeWhiteInputBoolean);
        DThemeWhite.set("DInputBooleanButtonOn", DThemeWhiteJaJpInputBooleanButtonOn);
        DThemeWhite.set("DInputBooleanButtonOff", DThemeWhiteJaJpInputBooleanButtonOff);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteJaJpInputAll = () => {
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
    DThemeWhiteAtlas.add("link_mark", 24, 24, `<g>` +
        `<path fill="none" stroke="#fff" stroke-width="1" ` +
        `d="M10 6H7c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2v-3 M19 11V4h-7 M18.75 4.5l-8 8" />` +
        `</g>`);
    /* eslint-enable prettier/prettier */
    class DThemeWhiteLink {
        getImageSource(state) {
            return DThemeWhiteAtlas.mappings.link_mark;
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

    class DThemeWhiteJaJpLink extends DThemeWhiteLink {
        getLabelOpenLink() {
            return "開く";
        }
        getLabelOpenLinkInNewWindow() {
            return "新しいウィンドウで開く";
        }
        getLabelCopyLinkAddress() {
            return "アドレスをコピーする";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteJaJpLink = () => {
        DThemeWhite.set("DLink", DThemeWhiteJaJpLink);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteNote extends DThemeWhiteImageBase {
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
    class DThemeWhiteNoteError extends DThemeWhiteNote {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteJaJpNoteError extends DThemeWhiteNoteError {
        newTextValue() {
            return "異常が発生しました";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteNoteNoItemsFound extends DThemeWhiteNote {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteJaJpNoteNoItemsFound extends DThemeWhiteNoteNoItemsFound {
        newTextValue() {
            return "アイテムはありません";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteNoteSearching extends DThemeWhiteNote {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteJaJpNoteSearching extends DThemeWhiteNoteSearching {
        newTextValue() {
            return "検索中です";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteNoteSmall extends DThemeWhiteNote {
        getFontSize() {
            return 18;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteNoteSmallError extends DThemeWhiteNoteSmall {
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
    class DThemeWhiteNoteSmallNoItemsFound extends DThemeWhiteNoteSmall {
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
    class DThemeWhiteNoteSmallSearching extends DThemeWhiteNoteSmall {
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
    const loadThemeWhiteJaJpNote = () => {
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
    class DThemeWhiteTable extends DThemeWhitePane {
        getBackgroundColor() {
            return DThemeWhiteConstants.BACKGROUND_COLOR;
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
    class DThemeWhiteTableBody extends DThemeWhiteBase {
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
    class DThemeWhiteTableBodyCells {
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
        }
        static getBackgroundAlpha(state) {
            return 1;
        }
        static getBorderColor(state) {
            if (state.is(DTableState.FROZEN_END)) {
                return this.BORDER_COLOR_FROZEN;
            }
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
            return DThemeWhiteConstants.COLOR;
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
                return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
            }
            else {
                return DThemeWhiteConstants.HIGHLIGHT_COLOR;
            }
        }
        static getHeight() {
            return "padding";
        }
        static getCornerMask() {
            return DCornerMask.ALL;
        }
    }
    _a = DThemeWhiteTableBodyCells;
    DThemeWhiteTableBodyCells.BACKGROUND_COLOR = DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD;
    DThemeWhiteTableBodyCells.BACKGROUND_COLOR_FROZEN_EVEN = UtilRgb.darken(_a.BACKGROUND_COLOR, 0.015);
    DThemeWhiteTableBodyCells.BACKGROUND_COLOR_FROZEN_ODD = UtilRgb.darken(_a.BACKGROUND_COLOR_FROZEN_EVEN, 0.015);
    DThemeWhiteTableBodyCells.BORDER_COLOR = UtilRgb.darken(_a.BACKGROUND_COLOR, 0.035);
    DThemeWhiteTableBodyCells.BORDER_COLOR_FROZEN = UtilRgb.darken(_a.BORDER_COLOR, 0.035);

    class DThemeWhiteTableBodyCellActions {
        static init() {
            // Material Design icons by Google.
            // Apache license version 2.0.
            /* eslint-disable prettier/prettier */
            DThemeWhiteAtlas.add("action_mark", 21, 21, `<g transform="scale(0.875,0.875)">` +
                `<path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83` +
                ` 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm` +
                `-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" fill="#fff"/>` +
                `</g>`);
            /* eslint-enable prettier/prettier */
        }
        static getImageSource(state) {
            return DThemeWhiteAtlas.mappings.action_mark;
        }
        static getImageTintColor(state) {
            return DThemeWhiteTableBodyCells.getImageTintColor(state, true);
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteTableBodyCellSelectDialog extends DThemeWhiteButton {
        getBackgroundColor(state) {
            return DThemeWhiteTableBodyCells.getBackgroundColor(state);
        }
        getBackgroundAlpha(state) {
            return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
        }
        getBorderColor(state) {
            return DThemeWhiteTableBodyCells.getBorderColor(state);
        }
        getBorderMask(state) {
            return DThemeWhiteTableBodyCells.getBorderMask(state);
        }
        getColor(state) {
            return DThemeWhiteTableBodyCells.getColor(state);
        }
        getAlpha(state) {
            return DThemeWhiteTableBodyCells.getAlpha(state);
        }
        getHeight() {
            return DThemeWhiteTableBodyCells.getHeight();
        }
        getCornerMask() {
            return DThemeWhiteTableBodyCells.getCornerMask();
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
    DThemeWhiteTableBodyCellActions.init();
    class DThemeWhiteTableBodyCellActionDialog extends DThemeWhiteTableBodyCellSelectDialog {
        getImageTintColor(state) {
            return DThemeWhiteTableBodyCellActions.getImageTintColor(state);
        }
        getImageSource(state) {
            return DThemeWhiteTableBodyCellActions.getImageSource(state);
        }
        isSyncEnabled() {
            return false;
        }
    }

    /*
     * Copyright (C) 2020 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    DThemeWhiteTableBodyCellActions.init();
    class DThemeWhiteTableBodyCellActionMenu extends DThemeWhiteDropdown {
        getBackgroundColor(state) {
            return DThemeWhiteTableBodyCells.getBackgroundColor(state);
        }
        getBackgroundAlpha(state) {
            return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
        }
        getBorderColor(state) {
            return DThemeWhiteTableBodyCells.getBorderColor(state);
        }
        getBorderMask(state) {
            return DThemeWhiteTableBodyCells.getBorderMask(state);
        }
        getColor(state) {
            return DThemeWhiteTableBodyCells.getColor(state);
        }
        getAlpha(state) {
            return DThemeWhiteTableBodyCells.getAlpha(state);
        }
        getHeight() {
            return DThemeWhiteTableBodyCells.getHeight();
        }
        getCornerMask() {
            return DThemeWhiteTableBodyCells.getCornerMask();
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
            return DThemeWhiteTableBodyCellActions.getImageTintColor(state);
        }
        getImageSource(state) {
            return DThemeWhiteTableBodyCellActions.getImageSource(state);
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteTableBodyCellSelectPromise extends DThemeWhiteButton {
        getBackgroundColor(state) {
            return DThemeWhiteTableBodyCells.getBackgroundColor(state);
        }
        getBackgroundAlpha(state) {
            return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
        }
        getBorderColor(state) {
            return DThemeWhiteTableBodyCells.getBorderColor(state);
        }
        getBorderMask(state) {
            return DThemeWhiteTableBodyCells.getBorderMask(state);
        }
        getColor(state) {
            return DThemeWhiteTableBodyCells.getColor(state);
        }
        getAlpha(state) {
            return DThemeWhiteTableBodyCells.getAlpha(state);
        }
        getHeight() {
            return DThemeWhiteTableBodyCells.getHeight();
        }
        getCornerMask() {
            return DThemeWhiteTableBodyCells.getCornerMask();
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
    DThemeWhiteTableBodyCellActions.init();
    class DThemeWhiteTableBodyCellActionPromise extends DThemeWhiteTableBodyCellSelectPromise {
        getImageTintColor(state) {
            return DThemeWhiteTableBodyCellActions.getImageTintColor(state);
        }
        getImageSource(state) {
            return DThemeWhiteTableBodyCellActions.getImageSource(state);
        }
        isSyncEnabled() {
            return false;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteTableBodyCellText extends DThemeWhiteImageBase {
        getBackgroundColor(state) {
            return DThemeWhiteTableBodyCells.getBackgroundColor(state);
        }
        getBackgroundAlpha(state) {
            return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
        }
        getBorderColor(state) {
            return DThemeWhiteTableBodyCells.getBorderColor(state);
        }
        getBorderMask(state) {
            return DThemeWhiteTableBodyCells.getBorderMask(state);
        }
        getColor(state) {
            return DThemeWhiteTableBodyCells.getColor(state);
        }
        getAlpha(state) {
            return DThemeWhiteTableBodyCells.getAlpha(state);
        }
        getHeight() {
            return DThemeWhiteTableBodyCells.getHeight();
        }
        getCornerMask() {
            return DThemeWhiteTableBodyCells.getCornerMask();
        }
        getImageTintColor(state) {
            return DThemeWhiteTableBodyCells.getImageTintColor(state);
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
    class DThemeWhiteTableBodyCellButton extends DThemeWhiteTableBodyCellText {
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
    class DThemeWhiteTableBodyCellCheck extends DThemeWhiteButtonCheck {
        getBackgroundColor(state) {
            return DThemeWhiteTableBodyCells.getBackgroundColor(state);
        }
        getBackgroundAlpha(state) {
            return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
        }
        getBorderColor(state) {
            return DThemeWhiteTableBodyCells.getBorderColor(state);
        }
        getBorderMask(state) {
            return DThemeWhiteTableBodyCells.getBorderMask(state);
        }
        getColor(state) {
            return DThemeWhiteTableBodyCells.getColor(state);
        }
        getAlpha(state) {
            return DThemeWhiteTableBodyCells.getAlpha(state);
        }
        getImageTintColor(state) {
            return DThemeWhiteTableBodyCells.getImageTintColor(state);
        }
        getHeight() {
            return DThemeWhiteTableBodyCells.getHeight();
        }
        getCornerMask() {
            return DThemeWhiteTableBodyCells.getCornerMask();
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteTableBodyCellColor extends DThemeWhiteButtonColor {
        getBackgroundColor(state) {
            return DThemeWhiteTableBodyCells.getBackgroundColor(state);
        }
        getBackgroundAlpha(state) {
            return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
        }
        getBorderColor(state) {
            return DThemeWhiteTableBodyCells.getBorderColor(state);
        }
        getBorderMask(state) {
            return DThemeWhiteTableBodyCells.getBorderMask(state);
        }
        getColor(state) {
            return DThemeWhiteTableBodyCells.getColor(state);
        }
        getAlpha(state) {
            return DThemeWhiteTableBodyCells.getAlpha(state);
        }
        getHeight() {
            return DThemeWhiteTableBodyCells.getHeight();
        }
        getCornerMask() {
            return DThemeWhiteTableBodyCells.getCornerMask();
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const formatter$3 = (value) => {
        return DPickerDates.format(value);
    };
    class DThemeWhiteTableBodyCellDate extends DThemeWhiteButton {
        getBackgroundColor(state) {
            return DThemeWhiteTableBodyCells.getBackgroundColor(state);
        }
        getBackgroundAlpha(state) {
            return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
        }
        getBorderColor(state) {
            return DThemeWhiteTableBodyCells.getBorderColor(state);
        }
        getBorderMask(state) {
            return DThemeWhiteTableBodyCells.getBorderMask(state);
        }
        getColor(state) {
            return DThemeWhiteTableBodyCells.getColor(state);
        }
        getAlpha(state) {
            return DThemeWhiteTableBodyCells.getAlpha(state);
        }
        getHeight() {
            return DThemeWhiteTableBodyCells.getHeight();
        }
        getCornerMask() {
            return DThemeWhiteTableBodyCells.getCornerMask();
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
    class DThemeWhiteTableBodyCellDatetime extends DThemeWhiteButton {
        getBackgroundColor(state) {
            return DThemeWhiteTableBodyCells.getBackgroundColor(state);
        }
        getBackgroundAlpha(state) {
            return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
        }
        getBorderColor(state) {
            return DThemeWhiteTableBodyCells.getBorderColor(state);
        }
        getBorderMask(state) {
            return DThemeWhiteTableBodyCells.getBorderMask(state);
        }
        getColor(state) {
            return DThemeWhiteTableBodyCells.getColor(state);
        }
        getAlpha(state) {
            return DThemeWhiteTableBodyCells.getAlpha(state);
        }
        getHeight() {
            return DThemeWhiteTableBodyCells.getHeight();
        }
        getCornerMask() {
            return DThemeWhiteTableBodyCells.getCornerMask();
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
    class DThemeWhiteTableBodyCellIndex extends DThemeWhiteImageBase {
        getBackgroundColor(state) {
            return DThemeWhiteTableBodyCells.getBackgroundColor(state);
        }
        getBackgroundAlpha(state) {
            return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
        }
        getBorderColor(state) {
            return DThemeWhiteTableBodyCells.getBorderColor(state);
        }
        getBorderMask(state) {
            return DThemeWhiteTableBodyCells.getBorderMask(state);
        }
        getColor(state) {
            return DThemeWhiteTableBodyCells.getColor(state);
        }
        getAlpha(state) {
            return DThemeWhiteTableBodyCells.getAlpha(state);
        }
        getHeight() {
            return DThemeWhiteTableBodyCells.getHeight();
        }
        getCornerMask() {
            return DThemeWhiteTableBodyCells.getCornerMask();
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
    class DThemeWhiteTableBodyCellInputInteger extends DThemeWhiteInputInteger {
        getTextAlignHorizontal() {
            return DAlignHorizontal.RIGHT;
        }
        getBackgroundColor(state) {
            return DThemeWhiteTableBodyCells.getBackgroundColor(state);
        }
        getBackgroundAlpha(state) {
            return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
        }
        getBorderColor(state) {
            return DThemeWhiteTableBodyCells.getBorderColor(state);
        }
        getBorderMask(state) {
            return DThemeWhiteTableBodyCells.getBorderMask(state);
        }
        getColor(state) {
            return DThemeWhiteTableBodyCells.getColor(state);
        }
        getAlpha(state) {
            return DThemeWhiteTableBodyCells.getAlpha(state);
        }
        getHeight() {
            return DThemeWhiteTableBodyCells.getHeight();
        }
        getCornerMask() {
            return DThemeWhiteTableBodyCells.getCornerMask();
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteTableBodyCellInputReal extends DThemeWhiteInputReal {
        getTextAlignHorizontal() {
            return DAlignHorizontal.RIGHT;
        }
        getBackgroundColor(state) {
            return DThemeWhiteTableBodyCells.getBackgroundColor(state);
        }
        getBackgroundAlpha(state) {
            return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
        }
        getBorderColor(state) {
            return DThemeWhiteTableBodyCells.getBorderColor(state);
        }
        getBorderMask(state) {
            return DThemeWhiteTableBodyCells.getBorderMask(state);
        }
        getColor(state) {
            return DThemeWhiteTableBodyCells.getColor(state);
        }
        getAlpha(state) {
            return DThemeWhiteTableBodyCells.getAlpha(state);
        }
        getHeight() {
            return DThemeWhiteTableBodyCells.getHeight();
        }
        getCornerMask() {
            return DThemeWhiteTableBodyCells.getCornerMask();
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteTableBodyCellInputText extends DThemeWhiteInputText {
        getBackgroundColor(state) {
            return DThemeWhiteTableBodyCells.getBackgroundColor(state);
        }
        getBackgroundAlpha(state) {
            return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
        }
        getBorderColor(state) {
            return DThemeWhiteTableBodyCells.getBorderColor(state);
        }
        getBorderMask(state) {
            return DThemeWhiteTableBodyCells.getBorderMask(state);
        }
        getColor(state) {
            return DThemeWhiteTableBodyCells.getColor(state);
        }
        getAlpha(state) {
            return DThemeWhiteTableBodyCells.getAlpha(state);
        }
        getHeight() {
            return DThemeWhiteTableBodyCells.getHeight();
        }
        getCornerMask() {
            return DThemeWhiteTableBodyCells.getCornerMask();
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteTableBodyCellInputTextArea extends DThemeWhiteInputTextArea {
        getBackgroundColor(state) {
            return DThemeWhiteTableBodyCells.getBackgroundColor(state);
        }
        getBackgroundAlpha(state) {
            return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
        }
        getBorderColor(state) {
            return DThemeWhiteTableBodyCells.getBorderColor(state);
        }
        getBorderMask(state) {
            return DThemeWhiteTableBodyCells.getBorderMask(state);
        }
        getColor(state) {
            return DThemeWhiteTableBodyCells.getColor(state);
        }
        getAlpha(state) {
            return DThemeWhiteTableBodyCells.getAlpha(state);
        }
        getHeight() {
            return DThemeWhiteTableBodyCells.getHeight();
        }
        getCornerMask() {
            return DThemeWhiteTableBodyCells.getCornerMask();
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    DThemeWhiteTableBodyCellTrees.init();
    class DThemeWhiteTableBodyCellInputTree extends DThemeWhiteBase {
        getHeight() {
            return DThemeWhiteTableBodyCells.getHeight();
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
    class DThemeWhiteTableBodyCellInputTreeInput extends DThemeWhiteInputText {
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
            return DThemeWhiteTableBodyCells.getHeight();
        }
        getBackgroundColor(state) {
            return DThemeWhiteTableBodyCells.getBackgroundColor(state);
        }
        getBackgroundAlpha(state) {
            return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
        }
        getBorderColor(state) {
            return DThemeWhiteTableBodyCells.getBorderColor(state);
        }
        getBorderMask(state) {
            return DThemeWhiteTableBodyCells.getBorderMask(state);
        }
        getColor(state) {
            return DThemeWhiteTableBodyCells.getColor(state);
        }
        getAlpha(state) {
            return DThemeWhiteTableBodyCells.getAlpha(state);
        }
        getCornerMask() {
            return DThemeWhiteTableBodyCells.getCornerMask();
        }
        getPaddingLeft() {
            return 0;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteTableBodyCellInputTreeMarker extends DThemeWhiteButtonBase {
        getX() {
            return "padding";
        }
        getY() {
            return "padding";
        }
        getHeight() {
            return DThemeWhiteTableBodyCells.getHeight();
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
            return DThemeWhiteTableBodyCells.getBorderMask(state);
        }
        getColor(state) {
            return DThemeWhiteTableBodyCells.getColor(state);
        }
        getAlpha(state) {
            return DThemeWhiteTableBodyCells.getAlpha(state);
        }
        getCornerMask() {
            return DThemeWhiteTableBodyCells.getCornerMask();
        }
        getImageAlignWith() {
            return DAlignWith.BORDER;
        }
        getImageAlignHorizontal() {
            return DAlignHorizontal.RIGHT;
        }
        getImageSource(state) {
            return DThemeWhiteTableBodyCellTrees.getImageSource(state);
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
    class DThemeWhiteTableBodyCellLink extends DThemeWhiteTableBodyCellButton {
        constructor() {
            super();
            this._link = DThemes.getInstance().get("DLink");
        }
        getImageTintColor(state) {
            return DThemeWhiteTableBodyCells.getImageTintColor(state, true);
        }
        getImageSource(state) {
            return this._link.getImageSource(state);
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteTableBodyCellSelectMenu extends DThemeWhiteSelect {
        getBackgroundColor(state) {
            return DThemeWhiteTableBodyCells.getBackgroundColor(state);
        }
        getBackgroundAlpha(state) {
            return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
        }
        getBorderColor(state) {
            return DThemeWhiteTableBodyCells.getBorderColor(state);
        }
        getBorderMask(state) {
            return DThemeWhiteTableBodyCells.getBorderMask(state);
        }
        getColor(state) {
            return DThemeWhiteTableBodyCells.getColor(state);
        }
        getAlpha(state) {
            return DThemeWhiteTableBodyCells.getAlpha(state);
        }
        getHeight() {
            return DThemeWhiteTableBodyCells.getHeight();
        }
        getCornerMask() {
            return DThemeWhiteTableBodyCells.getCornerMask();
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
    class DThemeWhiteTableBodyCellSelectMultiple extends DThemeWhiteSelectMultiple {
        getBackgroundColor(state) {
            return DThemeWhiteTableBodyCells.getBackgroundColor(state);
        }
        getBackgroundAlpha(state) {
            return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
        }
        getBorderColor(state) {
            return DThemeWhiteTableBodyCells.getBorderColor(state);
        }
        getBorderMask(state) {
            return DThemeWhiteTableBodyCells.getBorderMask(state);
        }
        getColor(state) {
            return DThemeWhiteTableBodyCells.getColor(state);
        }
        getAlpha(state) {
            return DThemeWhiteTableBodyCells.getAlpha(state);
        }
        getHeight() {
            return DThemeWhiteTableBodyCells.getHeight();
        }
        getCornerMask() {
            return DThemeWhiteTableBodyCells.getCornerMask();
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
    class DThemeWhiteTableBodyCellTextArea extends DThemeWhiteTableBodyCellText {
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
    class DThemeWhiteTableBodyCellTime extends DThemeWhiteButton {
        getBackgroundColor(state) {
            return DThemeWhiteTableBodyCells.getBackgroundColor(state);
        }
        getBackgroundAlpha(state) {
            return DThemeWhiteTableBodyCells.getBackgroundAlpha(state);
        }
        getBorderColor(state) {
            return DThemeWhiteTableBodyCells.getBorderColor(state);
        }
        getBorderMask(state) {
            return DThemeWhiteTableBodyCells.getBorderMask(state);
        }
        getColor(state) {
            return DThemeWhiteTableBodyCells.getColor(state);
        }
        getAlpha(state) {
            return DThemeWhiteTableBodyCells.getAlpha(state);
        }
        getHeight() {
            return DThemeWhiteTableBodyCells.getHeight();
        }
        getCornerMask() {
            return DThemeWhiteTableBodyCells.getCornerMask();
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
    DThemeWhiteTableBodyCellTrees.init();
    class DThemeWhiteTableBodyCellTree extends DThemeWhiteTableBodyCellButton {
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
            return DThemeWhiteTableBodyCellTrees.getImageSource(state);
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
    class DThemeWhiteTableRow extends DThemeWhiteLayoutHorizontal {
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
    class DThemeWhiteTableBodyRow extends DThemeWhiteTableRow {
        constructor() {
            super(...arguments);
            this.BACKGROUND_COLOR_EVEN = DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD;
            this.BACKGROUND_COLOR_ODD = UtilRgb.darken(DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD, 0.0125);
        }
        getBackgroundColor(state) {
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
        }
        getWidth() {
            return "100%";
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    class DThemeWhiteTableHeader extends DThemeWhiteTableRow {
        constructor() {
            super(...arguments);
            this.BACKGROUND_COLOR = UtilRgb.darken(DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD, 0.03);
            this.BORDER_COLOR = UtilRgb.darken(DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD, 0.055);
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
    class DThemeWhiteTableCategory extends DThemeWhiteTableHeader {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    // Material Design icons by Google.
    // Apache license version 2.0.
    /* eslint-disable prettier/prettier */
    DThemeWhiteAtlas.add("sorted_descending", 16, 16, `<g transform="scale(0.875,0.875)">` +
        `<path d="M3 12l5-5 5 5H3z" fill="#fff"/>` +
        `</g>`);
    DThemeWhiteAtlas.add("sorted_ascending", 16, 16, `<g transform="scale(0.875,0.875)">` +
        `<path d="M3 8l5 5 5-5H3z" fill="#fff"/>` +
        `</g>`);
    /* eslint-enable prettier/prettier */
    class DThemeWhiteTableHeaderCell extends DThemeWhiteImage {
        constructor() {
            super(...arguments);
            this.BACKGROUND_COLOR = UtilRgb.darken(DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD, 0.03);
            this.BACKGROUND_COLOR_HOVERED = UtilRgb.darken(this.BACKGROUND_COLOR, 0.017);
            this.BACKGROUND_COLOR_PRESSED = UtilRgb.darken(this.BACKGROUND_COLOR, 0.034);
            this.BACKGROUND_COLOR_FROZEN = UtilRgb.darken(this.BACKGROUND_COLOR, 0.02);
            this.BORDER_COLOR = UtilRgb.darken(DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD, 0.055);
            this.BORDER_COLOR_FROZEN = UtilRgb.darken(this.BORDER_COLOR, 0.055);
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
                return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
            }
            else {
                return DThemeWhiteConstants.HIGHLIGHT_COLOR;
            }
        }
        getSecondaryImageTintColor(state) {
            if (state.is(DTableState.CHECKABLE)) {
                return DThemeWhiteButtonChecks.getImageTintColor(state);
            }
            return super.getSecondaryImageTintColor(state);
        }
        getSecondaryImageSource(state) {
            if (state.is(DTableState.CHECKABLE)) {
                return DThemeWhiteButtonChecks.getImageSource(state);
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
                return DThemeWhiteAtlas.mappings.sorted_ascending;
            }
            else if (state.is(DTableState.SORTED_DESCENDING)) {
                return DThemeWhiteAtlas.mappings.sorted_descending;
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
    class DThemeWhiteTableCategoryCell extends DThemeWhiteTableHeaderCell {
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteJaJpTable = () => {
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
    DThemeWhiteAtlas.add("button_process_processing", 24, 24, `<g transform="scale(0.025,0.025) translate(0,960)">` +
        `<path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T` +
        `480-880q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133` +
        ` 0 226.5-93.5T800-480q0-17 11.5-28.5T840-520q17 0 28.5 11.5T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 8` +
        `6T480-80Z" fill="#fff"/>` +
        `</g>`);
    DThemeWhiteAtlas.add("button_process_success", 24, 24, `<g transform="scale(0.025,0.025) translate(0,960)">` +
        `<path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" fill="#fff" />` +
        `</g>`);
    DThemeWhiteAtlas.add("button_process_fail", 24, 24, `<g transform="scale(0.025,0.025) translate(0,960)">` +
        `<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" fill="#fff" />` +
        `</g>`);
    /* eslint-enable prettier/prettier */
    const imageSource = (state) => {
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
    const imageRotation = (state) => {
        const value = state.valueOf(DBaseState.PROCESSING);
        if (value != null) {
            return value * Math.PI * 0.02;
        }
        return 0;
    };
    class DThemeWhiteIndicatorProcess {
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
    class DThemeWhiteJaJpIndicatorProcessing extends DThemeWhiteIndicatorProcess {
        newProcessTextValue() {
            return dThemeWhiteJaJpDialogProcessingMessage;
        }
    }

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteJaJpIndicatorProcessing = () => {
        DThemeWhite.set("DIndicatorProcessing", DThemeWhiteJaJpIndicatorProcessing);
    };

    /*
     * Copyright (C) 2019 Toshiba Corporation
     * SPDX-License-Identifier: Apache-2.0
     */
    const loadThemeWhiteJaJpAll = () => {
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
    class DThemeWhiteDialogConfirmDelete extends DThemeWhiteDialogConfirm {
    }

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
        DThemeWhiteLayoutBoard: DThemeWhiteLayoutBoard,
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
    const global = window;
    global.wcardinal = global.wcardinal || {};
    const dest = (global.wcardinal.ui = global.wcardinal.ui || {});
    const src = white;
    for (const name in src) {
        dest[name] = src[name];
    }

})(PIXI);
