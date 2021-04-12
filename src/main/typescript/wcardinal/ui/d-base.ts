/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import {
	Container,
	DisplayObject,
	interaction,
	Point,
	Rectangle,
	Renderer,
	Texture,
	Transform
} from "pixi.js";
import InteractionEvent = interaction.InteractionEvent;
import InteractionManager = interaction.InteractionManager;
import { DApplications } from "./d-applications";
import { DBackgroundStateAware } from "./d-background";
import { DBaseBackground } from "./d-base-background";
import { DBaseBorder } from "./d-base-border";
import { DBaseCorner } from "./d-base-corner";
import { DBaseInteractive } from "./d-base-interactive";
import { DBaseOutline } from "./d-base-outline";
import { DBasePadding } from "./d-base-padding";
import { DBasePoint } from "./d-base-point";
import { DBaseReflowable } from "./d-base-reflowable";
import { DBaseStateSet } from "./d-base-state-set";
import { DBaseStateSetImplObservable } from "./d-base-state-set-impl-observable";
import { DBorderStateAware } from "./d-border";
import { DBorderMask } from "./d-border-mask";
import { DCoordinatePosition, DCoordinateSize } from "./d-coordinate";
import { DCorner } from "./d-corner";
import { DCornerMask } from "./d-corner-mask";
import { DThemeFont } from "./d-font";
import { DLayoutClearType } from "./d-layout-clear-type";
import { DOutline } from "./d-outline";
import { DPadding } from "./d-padding";
import { DScalarFunctions } from "./d-scalar-functions";
import { DScalarSet } from "./d-scalar-set";
import { DShadow } from "./d-shadow";
import { DStateAwareOrValueMightBe } from "./d-state-aware";
import { DThemes } from "./theme/d-themes";
import { isFunction } from "./util/is-function";
import { isNumber } from "./util/is-number";
import { isString } from "./util/is-string";
import { UtilKeyboardEvent, UtilKeyboardEventShortcut } from "./util/util-keyboard-event";
import { UtilPointerEvent } from "./util/util-pointer-event";
import { UtilWheelEventDeltas } from "./util/util-wheel-event";
import { DBaseAutoSet } from "./d-base-auto-set";
import { toEnum } from "./util/to-enum";
import { DOnOptions } from "./d-on-options";

/**
 * {@link DBase} padding options.
 */
export interface DBasePaddingOptions {
	/** A top padding */
	top?: number;

	/** A right padding */
	right?: number;

	/** A bottom padding */
	bottom?: number;

	/** A left padding */
	left?: number;
}

/**
 * {@link DBase} corner options.
 */
export interface DBaseCornerOptions {
	/** A radius */
	radius?: number;

	/** Masked corners get unrounded. */
	mask?: keyof typeof DCornerMask | DCornerMask;
}

/**
 * {@link DBase} events.
 */
export interface DBaseEvents<EMITTER> {
	/**
	 * Triggered when an initialization is finished.
	 *
	 *     on( "init", ( emitter ) => {} )
	 *
	 * @param emitter an emitter
	 */
	init(emitter: EMITTER): void;

	/**
	 * Triggered when added to a container.
	 *
	 * @param container a container added to
	 */
	added(container: Container): void;

	/**
	 * Triggered when removed from a container.
	 *
	 * @param container a container removed from
	 */
	removed(container: Container): void;

	/**
	 * Triggered when moved.
	 *
	 * @param newX a new x
	 * @param newY a new y
	 * @param oldX an old x
	 * @param oldY an old y
	 * @param emitter an emitter
	 */
	move(newX: number, newY: number, oldX: number, oldY: number, emitter: EMITTER): void;

	/**
	 * Triggered when resized.
	 *
	 * @param newWidth a new width
	 * @param newHeight a new height
	 * @param oldWidth an old width
	 * @param oldHeight an old height
	 * @param emitter an emitter
	 */
	resize(
		newWidth: number,
		newHeight: number,
		oldWidth: number,
		oldHeight: number,
		emitter: EMITTER
	): void;

	/**
	 * Triggered when scaled.
	 *
	 * @param newX a new x
	 * @param newY a new y
	 * @param oldX an old x
	 * @param oldY an old y
	 * @param emitter an emitter
	 */
	scale(newX: number, newY: number, oldX: number, oldY: number, emitter: EMITTER): void;

	/**
	 * Triggered when skewed.
	 *
	 * @param newX a new x
	 * @param newY a new y
	 * @param oldX an old x
	 * @param oldY an old y
	 * @param emitter an emitter
	 */
	skew(newX: number, newY: number, oldX: number, oldY: number, emitter: EMITTER): void;

	/**
	 * Triggered when a state is changed.
	 *
	 * @param newState a new state
	 * @param oldState an old state
	 * @param emitter an emitter
	 */
	statechange(newState: DBaseStateSet, oldState: DBaseStateSet, emitter: EMITTER): void;

	/**
	 * Triggered when a wheel moves.
	 *
	 * @param e a wheel event
	 * @param deltas wheel move amounts
	 * @param global a point wheel moved
	 * @param emitter an emitter
	 */
	wheel(e: WheelEvent, deltas: UtilWheelEventDeltas, global: Point, emitter: EMITTER): void;

	/**
	 * Triggered when a key gets down.
	 *
	 * @param e a keyboard event
	 * @param emitter an emitter
	 */
	keydown(e: KeyboardEvent, emitter: EMITTER): void;

	/**
	 * Triggered when a key gets up.
	 *
	 * @param e a keyboard event
	 * @param emitter an emitter
	 */
	keyup(e: KeyboardEvent, emitter: EMITTER): void;

	/**
	 * Triggered when a pointer gets on an emitter.
	 *
	 * @param e an interaction event.
	 * @param emitter an emitter
	 */
	over(e: InteractionEvent, emitter: EMITTER): void;

	/**
	 * Triggered when a pointer gets out of an emitter.
	 *
	 * @param e an interaction event
	 * @param emitter an emitter
	 */
	out(e: InteractionEvent, emitter: EMITTER): void;

	/**
	 * Triggered when a pointer gets down on an emitter.
	 *
	 * @param e an interaction event.
	 * @param emitter an emitter
	 */
	down(e: InteractionEvent, emitter: EMITTER): void;

	/**
	 * Triggered when a pointer gets up on an emitter.
	 *
	 * @param e an interaction event
	 * @param emitter an emitter
	 */
	up(e: InteractionEvent, emitter: EMITTER): void;

	/**
	 * Triggered when an emitter is double clicked.
	 *
	 * @param e an event
	 * @param interactionManager an interaction manager
	 * @param emitter an emitter
	 */
	dblclick(
		e: MouseEvent | TouchEvent,
		interactionManager: InteractionManager,
		emitter: EMITTER
	): void;
}

/**
 * {@link DBase} "on" options.
 */
export interface DBaseOnOptions<EMITTER> extends Partial<DBaseEvents<EMITTER>>, DOnOptions {}

/**
 * {@link DBase} background options.
 */
export interface DBaseBackgroundOptions {
	/**
	 * A color code or a function returning a color code.
	 * If a computed value is undefined, falls back to the theme color.
	 * If a computed value is null, a background is not rendered.
	 */
	color?: DStateAwareOrValueMightBe<number | null>;

	/**
	 * An alpha or a function returning an alpha.
	 * If a computed value is undefined, falls back to an background alpha of a theme.
	 */
	alpha?: DStateAwareOrValueMightBe<number>;
}

/**
 * {@link DBase} border options.
 */
export interface DBaseBorderOptions {
	/**
	 * A color code or a function returning a color code.
	 * If a computed value is undefined, falls back to the theme color.
	 * If a computed value is null, a background is not rendered.
	 */
	color?: DStateAwareOrValueMightBe<number | null>;

	/**
	 * An alpha or a function returning an alpha.
	 * If a computed value is undefined, falls back to a border alpha of a theme.
	 */
	alpha?: DStateAwareOrValueMightBe<number>;

	/**
	 * A width or a function returning a width.
	 * If a computed value is undefined, falls back to a border width of a theme.
	 */
	width?: DStateAwareOrValueMightBe<number>;

	/**
	 * An align or a function returning an align.
	 * If a computed value is undefined, falls back to a border align of a theme.
	 * If an align is 0, a border is rendered completely inside of a {@link DBase}.
	 * If an align is 1, a border is rendered completely outside of a {@link DBase}.
	 */
	align?: DStateAwareOrValueMightBe<number>;

	/** Masked borders get removed. */
	mask?: DStateAwareOrValueMightBe<DBorderMask> | keyof typeof DBorderMask;
}

/**
 * {@link DBase} outline optons.
 */
export interface DBaseOutlineOptions {
	/**
	 * A color code or a function returning a color code.
	 * If a computed value is undefined, falls back to the theme color.
	 * If a computed value is null, a background is not rendered.
	 */
	color?: DStateAwareOrValueMightBe<number | null>;

	/**
	 * An alpha or a function returning an alpha.
	 * If a computed value is undefined, falls back to an outline alpha of a theme.
	 */
	alpha?: DStateAwareOrValueMightBe<number>;

	/**
	 * A width or a function returning a width.
	 * If a computed value is undefined, falls back to an outline width of a theme.
	 */
	width?: DStateAwareOrValueMightBe<number>;

	/**
	 * An offset or a function returning an offset.
	 * If a computed value is undefined, falls back to an outline align of a theme.
	 * A outline moves to outside when an offset gets larger.
	 */
	offset?: DStateAwareOrValueMightBe<number>;

	/**
	 * An align or a function returning an align.
	 * If a computed value is undefined, falls back to an outline align of a theme.
	 * If an align is 0, an outline is rendered completely inside.
	 * If an align is 1, an outline is rendered completely outside.
	 */
	align?: DStateAwareOrValueMightBe<number>;

	/** Masked outlines get removed. */
	mask?: DStateAwareOrValueMightBe<DBorderMask> | keyof typeof DBorderMask;
}

export type DBaseShadow = "NONE" | "WEAK" | "DEFAULT" | DShadow;

/**
 * {@link DBase} options.
 */
export interface DBaseOptions<THEME extends DThemeBase = DThemeBase, EMITTER = any> {
	/**
	 * A parent.
	 *
	 * In the case of UI classes which pop up (e.g., {@link DDialog} and {@link DMenu}),
	 * if multiple application instances are there, better to set
	 * this to an `application.stage` so that they pick a right application.
	 * By default, they assume the last created application is
	 * the one they belong to at the time when they are created.
	 */
	parent?: Container;

	/** Children. */
	children?: Array<DisplayObject | null>;

	/** A name. */
	name?: string;

	/**
	 * One of the followings:
	 * * A X position
	 * * A position keyword
	 * * A position expression (Parsed by {@link DScalarExpression})
	 * * A function returning a X position ({@link DScalarFunction})
	 * * An object returning a X position ({@link DScalar})
	 */
	x?: DCoordinatePosition;

	/**
	 * One of the followings:
	 * * A Y position
	 * * A position keyword
	 * * A position expresion (Parsed by {@link DScalarExpression})
	 * * A function returning a Y position ({@link DScalarFunction})
	 * * An object returning a Y position ({@link DScalar})
	 */
	y?: DCoordinatePosition;

	/**
	 * One of the followings:
	 * * A width
	 * * A size keyword
	 * * A size expression (Parsed by {@link DScalarExpression})
	 * * A function returning a width ({@link DScalarFunction})
	 * * An object returning a width ({@link DScalar})
	 */
	width?: DCoordinateSize;

	/**
	 * One of the followings:
	 * * A height
	 * * A size keyword
	 * * A size expression (Parsed by {@link DScalarExpression})
	 * * A function returning a hight ({@link DScalarFunction})
	 * * An object returning a hight ({@link DScalar})
	 */
	height?: DCoordinateSize;

	/**
	 * A visibility.
	 * Set to true to make {@link DBase} visible.
	 * Set to false to make {@link DBase} invisible.
	 * The default values is true.
	 */
	visible?: boolean;

	/** A default state. */
	state?: string | string[];

	/** An interactivity option. */
	interactive?: keyof typeof DBaseInteractive | DBaseInteractive;

	/** A padding options. */
	padding?: number | DBasePaddingOptions;

	/** A corner options. */
	corner?: number | DBaseCornerOptions;

	/** A theme or a theme name. */
	theme?: THEME | string;

	/**
	 * Mappings of event names and event handlers.
	 */
	on?: DBaseOnOptions<EMITTER>;

	/**
	 * A weight used by {@link DLayoutVertical} and {@link DLayoutHorizontal}.
	 */
	weight?: number;

	/** A tooltip text. */
	title?: string;

	/** A shortcut option. */
	shortcut?: string | UtilKeyboardEventShortcut;

	/** A shortcut options. */
	shortcuts?: Array<string | UtilKeyboardEventShortcut>;

	/** A background options. */
	background?: DBaseBackgroundOptions;

	/** A border options. */
	border?: DBaseBorderOptions;

	/** An outline options. */
	outline?: DBaseOutlineOptions;

	/** A shadow. */
	shadow?: DBaseShadow | null;

	/** A clear type used by {@link DLayoutVertical} and {@link DLayoutHorizontal}. */
	clear?: keyof typeof DLayoutClearType | DLayoutClearType;

	/** A cursor shape. */
	cursor?: DStateAwareOrValueMightBe<string>;
}

/**
 * {@link DBase} theme.
 */
export interface DThemeBase extends DThemeFont {
	/**
	 * Returns a X coordinate.
	 */
	getX(): DCoordinatePosition;

	/**
	 * Returns a Y coordinate.
	 */
	getY(): DCoordinatePosition;

	/**
	 * Returns a height.
	 */
	getHeight(): DCoordinateSize;

	/**
	 * Returns a width.
	 */
	getWidth(): DCoordinateSize;

	/**
	 * Returns a background color.
	 * If the color is null, backgrounds are not be rendered.
	 *
	 * @param state a state
	 */
	getBackgroundColor(state: DBaseStateSet): number | null;

	/**
	 * Returns a background alpha.
	 *
	 * @param state a state
	 */
	getBackgroundAlpha(state: DBaseStateSet): number;

	/**
	 * Returns a background texture of the given radius.
	 *
	 * @param radius a corner radius
	 */
	getBackgroundTexture(radius: number): Texture;

	/**
	 * Returns a border color.
	 * If the color is null, borders are not be rendered.
	 *
	 * @param state a state
	 */
	getBorderColor(state: DBaseStateSet): number | null;

	/**
	 * Returns a border alpha.
	 *
	 * @param state a state
	 */
	getBorderAlpha(state: DBaseStateSet): number;

	/**
	 * Returns a border width.
	 *
	 * @param state a state
	 */
	getBorderWidth(state: DBaseStateSet): number;

	/**
	 * Returns a border align.
	 *
	 * @param state a state
	 */
	getBorderAlign(state: DBaseStateSet): number;

	/**
	 * Returns a border mask.
	 *
	 * @param state a mask
	 */
	getBorderMask(state: DBaseStateSet): DBorderMask;

	/**
	 * Returns a border texture of the given radius and width.
	 *
	 * @param radius a corner radius
	 * @param width a border width
	 */
	getBorderTexture(radius: number, width: number): Texture;

	/**
	 * Returns a left padding.
	 */
	getPaddingLeft(): number;

	/**
	 * Returns a right padding.
	 */
	getPaddingRight(): number;

	/**
	 * Returns a top padding.
	 */
	getPaddingTop(): number;

	/**
	 * Returns a bottom padding.
	 */
	getPaddingBottom(): number;

	/**
	 * Returns a corner radius.
	 */
	getCornerRadius(): number;

	/**
	 * Returns a corner mask.
	 */
	getCornerMask(): DCornerMask;

	/**
	 * Returns an outline color.
	 * If the color is null, outlines are not be rendered.
	 *
	 * @param state a state
	 */
	getOutlineColor(state: DBaseStateSet): number | null;

	/**
	 * Returns an outline alpha.
	 *
	 * @param state a state
	 */
	getOutlineAlpha(state: DBaseStateSet): number;

	/**
	 * Returns an outline width.
	 *
	 * @param state a state
	 */
	getOutlineWidth(state: DBaseStateSet): number;

	/**
	 * Returns an outline offset.
	 *
	 * @param state a state
	 */
	getOutlineOffset(state: DBaseStateSet): number;

	/**
	 * Returns an outline align.
	 *
	 * @param state a state
	 */
	getOutlineAlign(state: DBaseStateSet): number;

	/**
	 * Returns an outline mask.
	 *
	 * @param state a state
	 */
	getOutlineMask(state: DBaseStateSet): DBorderMask;

	/**
	 * Returns a shadow.
	 * If a shadow is null, no shadow is rendered.
	 */
	getShadow(): DShadow | null;

	/**
	 * Returns an interactivity.
	 */
	getInteractive(): DBaseInteractive;

	/**
	 * Returns a tooltip text.
	 */
	getTitle(): string;

	/**
	 * Returns a clear type.
	 * A clear type is for layout classes including {@link DLayoutVertical}.
	 */
	getClearType(): DLayoutClearType;

	/**
	 * Returns a weight.
	 * Weights are for layout classes including {@link DLayoutVertical}.
	 * If a weight is less than or equals to zero, layout classes are supposed not to change a width / height.
	 */
	getWeight(): number;

	/**
	 * Creates a new shadow.
	 */
	newShadow(): DShadow | null;

	/**
	 * Creates a new weak shadow.
	 */
	newShadowWeak(): DShadow | null;

	/**
	 * Returns a cursor.
	 */
	getCursor(state: DBaseStateSet): string;
}

const toTheme = <THEME extends DThemeBase>(options?: DBaseOptions<THEME>): THEME | undefined => {
	const theme = options?.theme;
	if (theme) {
		if (isString(theme)) {
			return DThemes.getInstance().get(theme);
		}
		return theme;
	}
};

export interface DRefitable {
	readonly width: number;
	readonly height: number;
}

const toShortcuts = <THEME extends DThemeBase>(
	options?: DBaseOptions<THEME>
): UtilKeyboardEventShortcut[] | undefined => {
	if (options) {
		const shortcut = options.shortcut;
		const shortcuts = options.shortcuts;
		if (shortcuts != null || shortcut != null) {
			const result: UtilKeyboardEventShortcut[] = [];
			if (shortcut != null) {
				result.push(UtilKeyboardEvent.toShortcut(shortcut));
			}
			if (shortcuts != null) {
				for (let i = 0, imax = shortcuts.length; i < imax; ++i) {
					UtilKeyboardEvent.toShortcut(shortcuts[i]);
				}
			}
			return result;
		}
	}
	return undefined;
};

export interface DRenderable {
	parent?: Container | null;
	render(renderer: Renderer): void;
	updateTransform(): void;
}

export interface DReflowable {
	onReflow(base: DBase, width: number, height: number): void;
}

/**
 * A base class for UI classes.
 * See {@link DBaseEvents} for event details.
 */
export class DBase<
	THEME extends DThemeBase = DThemeBase,
	OPTIONS extends DBaseOptions<THEME> = DBaseOptions<THEME>
> extends Container {
	protected static WORK_CONTAINS_POINT: Point = new Point();

	private _state: DBaseStateSet;
	private _theme: THEME;
	protected _options: OPTIONS | undefined;
	private _width: number;
	private _height: number;
	protected _padding: DPadding;
	protected _corner: DCorner;
	private _scalarSet: DScalarSet;
	protected _auto: DBaseAutoSet;
	private _isDirty: boolean;
	private _hasDirty: boolean;
	protected _isChildrenDirty: boolean;
	private _shadow: DShadow | null;
	private _onShadowUpdateBound: () => void;
	private _weight: number;
	private _position: DBasePoint;
	private _scale: DBasePoint;
	private _skew: DBasePoint;
	protected _title: string;
	protected _background: DBackgroundStateAware;
	protected _border: DBorderStateAware;
	protected _outline: DOutline;
	protected _clearType: DLayoutClearType;
	protected _shortcuts?: UtilKeyboardEventShortcut[];
	protected _befores: DRenderable[];
	protected _afters: DRenderable[];
	protected _reflowables: DReflowable[];
	protected _lastDownPoint?: Point;
	protected _cursor?: DStateAwareOrValueMightBe<string>;

	constructor(options?: OPTIONS) {
		super();

		// Transform
		const transform: Transform = this.transform;
		this._position = new DBasePoint(transform.position, (newX, newY, oldX, oldY): void => {
			this.onMove(newX, newY, oldX, oldY);
		});
		this._scale = new DBasePoint(transform.scale, (newX, newY, oldX, oldY): void => {
			this.onScale(newX, newY, oldX, oldY);
		});
		this._skew = new DBasePoint(transform.skew, (newX, newY, oldX, oldY): void => {
			this.onSkew(newX, newY, oldX, oldY);
		});

		//
		this._options = options;
		const scalarSet: DScalarSet = (this._scalarSet = {});
		this._auto = new DBaseAutoSet();
		this._isDirty = true;
		this._hasDirty = false;
		this._isChildrenDirty = false;
		this._shadow = null;
		this.name = options?.name ?? "";
		const theme = toTheme(options) || this.getThemeDefault();
		this._theme = theme;
		this._befores = [];
		this._afters = [];
		this._reflowables = [];
		this._clearType = toEnum(options?.clear ?? theme.getClearType(), DLayoutClearType);
		this._padding = new DBasePadding(theme, options, (): void => {
			this.layout();
			this.toChildrenDirty();
			DApplications.update(this);
		});
		const toDirtyAndUpdate = (): void => {
			this.toDirty();
			DApplications.update(this);
		};
		this._background = new DBaseBackground(theme, options, toDirtyAndUpdate);
		this._border = new DBaseBorder(theme, options, toDirtyAndUpdate);
		this._outline = new DBaseOutline(theme, options, toDirtyAndUpdate);
		this._corner = new DBaseCorner(theme, options, toDirtyAndUpdate);

		// X
		const position = transform.position;
		const x = options?.x ?? theme.getX();
		if (isNumber(x)) {
			position.x = x;
		} else {
			position.x = 0;
			scalarSet.x = DScalarFunctions.position(x);
		}

		// Y
		const y = options?.y ?? theme.getY();
		if (isNumber(y)) {
			position.y = y;
		} else {
			position.y = 0;
			scalarSet.y = DScalarFunctions.position(y);
		}

		// Width
		const width = options?.width ?? theme.getWidth();
		if (!this._auto.width.from(width)) {
			if (isNumber(width)) {
				this._width = width;
			} else {
				this._width = 100;
				scalarSet.width = DScalarFunctions.size(width);
			}
		} else {
			this._width = 100;
		}

		// Height
		const height = options?.height ?? theme.getHeight();
		if (!this._auto.height.from(height)) {
			if (isNumber(height)) {
				this._height = height;
			} else {
				this._height = 100;
				scalarSet.height = DScalarFunctions.size(height);
			}
		} else {
			this._height = 100;
		}

		// Visibility
		const visible = options?.visible;
		if (visible != null) {
			this.visible = visible;
		}

		// State
		this._state = new DBaseStateSetImplObservable((newState, oldState): void => {
			this.onStateChange(newState, oldState);
		});

		// Interactive
		const interactive = toEnum(
			options?.interactive ?? theme.getInteractive(),
			DBaseInteractive
		);
		this.interactive = !!(interactive & DBaseInteractive.SELF);
		this.interactiveChildren = !!(interactive & DBaseInteractive.CHILDREN);

		// Events
		const on = options?.on;
		if (on) {
			for (const name in on) {
				const handler = on[name];
				if (handler) {
					this.on(name, handler);
				}
			}
		}

		// Title
		this._title = options?.title ?? theme.getTitle();

		// Weight
		this._weight = options?.weight ?? theme.getWeight();

		// Reflowable
		this.initReflowable();

		// Shadow
		this._onShadowUpdateBound = (): void => {
			DApplications.update(this);
		};
		let shadow = options?.shadow;
		if (shadow === undefined) {
			shadow = theme.getShadow();
		}
		if (shadow) {
			if (isString(shadow)) {
				switch (shadow) {
					case "WEAK":
						this.shadow = theme.newShadowWeak();
						break;
					case "DEFAULT":
						this.shadow = theme.newShadow();
						break;
				}
			} else {
				this.shadow = shadow;
			}
		}

		// Event handlers
		this.on(UtilPointerEvent.over, (e: InteractionEvent): void => {
			this.onOver(e);
		});

		this.on(UtilPointerEvent.out, (e: InteractionEvent): void => {
			this.onOut(e);
		});

		this.on(UtilPointerEvent.down, (e: InteractionEvent): void => {
			this.onDown(e);
		});

		this.on(UtilPointerEvent.up, (e: InteractionEvent): void => {
			this.onUp(e);
		});

		// Children change detection
		this.on("added", (): void => {
			this.layout();
			if (this.isDirty() || this.hasDirty()) {
				this.toParentHasDirty();
			}
			if (this._isChildrenDirty) {
				this.toParentChildrenDirty();
			}
			const newParent = this.parent;
			if (newParent instanceof DBase) {
				this.state.parent = newParent.state;
			}
			DApplications.update(this);
		});

		this.on("removed", (): void => {
			this.blur(true);
			this.state.parent = null;
			DApplications.update(this);
		});

		// Shortcut
		const shortcuts = toShortcuts(options);
		this._shortcuts = shortcuts;
		if (shortcuts != null) {
			const onShortcutBound = (e: KeyboardEvent): void => {
				this.onShortcut(e);
			};
			for (let i = 0, imax = shortcuts.length; i < imax; ++i) {
				UtilKeyboardEvent.on(this, shortcuts[i], onShortcutBound);
			}
		}

		// Other initialization
		this.init(options);

		// State Override
		const state = options?.state;
		if (state != null) {
			if (isString(state)) {
				this._state.add(state);
			} else {
				this._state.addAll(state);
			}
		}

		// Parent
		const parent = options?.parent;
		if (parent != null) {
			parent.addChild(this);
		}

		// Children
		const children = options?.children;
		if (children != null) {
			for (let i = 0, imax = children.length; i < imax; ++i) {
				const child = children[i];
				if (child != null) {
					this.addChild(child);
				}
			}
		}

		// Cursor
		const cursor = options?.cursor;
		this._cursor = cursor;
		this.cursor = this.toCursor(cursor, this._state);

		// Done
		this.emit("init", this);
	}

	protected toCursor(
		cursor: DStateAwareOrValueMightBe<string> | undefined,
		state: DBaseStateSet
	): string {
		if (cursor) {
			if (isFunction(cursor)) {
				const result = cursor(state);
				if (result !== undefined) {
					return result;
				}
			} else if (cursor !== undefined) {
				return cursor;
			}
		}
		return this.theme.getCursor(state);
	}

	addRenderable(renderable: DRenderable, phase: boolean): void {
		const list = phase ? this._befores : this._afters;
		list.push(renderable);
		if ("parent" in renderable) {
			renderable.parent = this;
		}
	}

	addRenderableAt(renderable: DRenderable, phase: boolean, index: number): void {
		const list = phase ? this._befores : this._afters;
		if (index === 0) {
			list.unshift(renderable);
		} else if (0 < index && index < list.length) {
			list.splice(index, 0, renderable);
		} else {
			list.push(renderable);
		}
		if ("parent" in renderable) {
			renderable.parent = this;
		}
	}

	removeRenderable(renderable: DRenderable, phase: boolean): void {
		const list = phase ? this._befores : this._afters;
		const index = list.indexOf(renderable);
		if (0 <= index) {
			list.splice(index, 1);
			if ("parent" in renderable) {
				renderable.parent = null;
			}
		}
	}

	addReflowable(reflowable: DReflowable): void {
		this._reflowables.push(reflowable);
	}

	removeReflowable(reflowable: DReflowable): void {
		const reflowables = this._reflowables;
		const index = reflowables.indexOf(reflowable);
		if (0 <= index) {
			reflowables.splice(index, 1);
		}
	}

	protected initReflowable(): void {
		new DBaseReflowable(this);
	}

	protected onChildrenChange(): void {
		this.toChildrenDirty();
		super.onChildrenChange();
	}

	protected onShortcut(e: KeyboardEvent): void {
		// DO NOTHING
	}

	protected init(options?: OPTIONS): void {
		// OTHER INITIALIZATIONS BEFORE `parent.addChild( this )`
	}

	get weight(): number {
		return this._weight;
	}

	protected onMove(newX: number, newY: number, oldX: number, oldY: number): void {
		const children = this.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			const child = children[i];
			if (child instanceof DBase) {
				child.onParentMove(newX, newY, oldX, oldY);
			}
		}
		DApplications.update(this);
		this.emit("move", newX, newY, oldX, oldY, this);
	}

	resize(width: number, height: number): boolean {
		const oldWidth = this._width;
		const oldHeight = this._height;
		const widthResized = oldWidth !== width;
		const heightResized = oldHeight !== height;

		if (widthResized) {
			this._width = width;
		}

		if (heightResized) {
			this._height = height;
		}

		const resized = widthResized || heightResized;
		if (resized) {
			this.onResize(width, height, oldWidth, oldHeight);
		}

		if (widthResized) {
			const scalarSet = this._scalarSet;
			if (scalarSet.x != null) {
				const position = this.transform.position;
				const parent = this.getParentOfSize();
				if (parent) {
					this.x = scalarSet.x(parent.width, width, parent.padding.getLeft(), position.x);
				}
			}
		}

		if (heightResized) {
			const scalarSet = this._scalarSet;
			if (scalarSet.y != null) {
				const position = this.transform.position;
				const parent = this.getParentOfSize();
				if (parent) {
					this.y = scalarSet.y(
						parent.height,
						height,
						parent.padding.getTop(),
						position.y
					);
				}
			}
		}

		return resized;
	}

	getClearType(): DLayoutClearType {
		return this._clearType;
	}

	onResize(newWidth: number, newHeight: number, oldWidth: number, oldHeight: number): void {
		this.toDirty();
		this.toChildrenDirty();

		const padding = this._padding;
		const children = this.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			const child = children[i];
			if (child instanceof DBase) {
				child.onParentResize(newWidth, newHeight, padding);
			}
		}

		DApplications.update(this);
		this.emit("resize", newWidth, newHeight, oldWidth, oldHeight, this);
	}

	protected onScale(newX: number, newY: number, oldX: number, oldY: number): void {
		DApplications.update(this);
		this.emit("scale", newX, newY, oldX, oldY, this);
	}

	protected onSkew(newX: number, newY: number, oldX: number, oldY: number): void {
		DApplications.update(this);
		this.emit("skew", newX, newY, oldX, oldY, this);
	}

	get type(): string {
		return this.getType();
	}

	// @ts-ignore
	get x(): number {
		return this._position.x;
	}

	set x(x: number) {
		this._position.x = x;
	}

	getX(): DCoordinatePosition {
		const scalarSet = this._scalarSet;
		if (scalarSet.x != null) {
			return scalarSet.x;
		} else {
			return this.x;
		}
	}

	setX(x: DCoordinatePosition): void {
		if (isNumber(x)) {
			this.x = x;
		} else {
			const scalarSet = this._scalarSet;
			const scalar = DScalarFunctions.position(x);
			if (scalarSet.x !== scalar) {
				scalarSet.x = scalar;
				this.layout();
			}
		}
	}

	// @ts-ignore
	get y(): number {
		return this._position.y;
	}

	set y(y: number) {
		this._position.y = y;
	}

	getY(): DCoordinatePosition {
		const scalarSet = this._scalarSet;
		if (scalarSet.y != null) {
			return scalarSet.y;
		} else {
			return this.y;
		}
	}

	setY(y: DCoordinatePosition): void {
		if (isNumber(y)) {
			this.y = y;
		} else {
			const scalarSet = this._scalarSet;
			const scalar = DScalarFunctions.position(y);
			if (scalarSet.y !== scalar) {
				scalarSet.y = scalar;
				this.layout();
			}
		}
	}

	// @ts-ignore
	get width(): number {
		return this._width;
	}

	set width(width: number) {
		const oldWidth = this._width;
		if (oldWidth !== width) {
			this._width = width;
			const height = this._height;
			this.onResize(width, height, oldWidth, height);

			// Layout
			const scalarSet = this._scalarSet;
			if (scalarSet.x != null) {
				const position = this.transform.position;
				const parent = this.getParentOfSize();
				if (parent) {
					this.x = scalarSet.x(parent.width, width, parent.padding.getLeft(), position.x);
				}
			}
		}
	}

	getWidth(): DCoordinateSize {
		return this._auto.width.toCoordinate(this._scalarSet.width || this._width);
	}

	setWidth(width: DCoordinateSize): void {
		const auto = this._auto.width;
		const isOn = auto.isOn;
		const isAuto = auto.from(width);
		if (auto.isOn !== isOn) {
			this.toChildrenDirty();
			DApplications.update(this);
		}
		if (!isAuto) {
			if (isNumber(width)) {
				this.width = width;
			} else {
				const scalarSet = this._scalarSet;
				const scalar = DScalarFunctions.size(width);
				if (scalarSet.width !== scalar) {
					scalarSet.width = scalar;
					this.layout();
				}
			}
		}
	}

	// @ts-ignore
	get height(): number {
		return this._height;
	}

	set height(height: number) {
		const oldHeight = this._height;
		if (oldHeight !== height) {
			this._height = height;
			const width = this._width;
			this.onResize(width, height, width, oldHeight);

			// Layout
			const scalarSet = this._scalarSet;
			if (scalarSet.y != null) {
				const position = this.transform.position;
				const parent = this.getParentOfSize();
				if (parent) {
					this.y = scalarSet.y(
						parent.height,
						height,
						parent.padding.getTop(),
						position.y
					);
				}
			}
		}
	}

	getHeight(): DCoordinateSize {
		return this._auto.height.toCoordinate(this._scalarSet.height || this._height);
	}

	setHeight(height: DCoordinateSize): void {
		const auto = this._auto.height;
		const isOn = auto.isOn;
		const isAuto = auto.from(height);
		if (auto.isOn !== isOn) {
			this.toChildrenDirty();
			DApplications.update(this);
		}
		if (!isAuto) {
			if (isNumber(height)) {
				this.height = height;
			} else {
				const scalarSet = this._scalarSet;
				const scalar = DScalarFunctions.size(height);
				if (scalarSet.height !== scalar) {
					scalarSet.height = scalar;
					this.layout();
				}
			}
		}
	}

	// @ts-ignore
	get position(): DBasePoint {
		return this._position;
	}

	// @ts-ignore
	get scale(): DBasePoint {
		return this._scale;
	}

	// @ts-ignore
	get skew(): DBasePoint {
		return this._skew;
	}

	get padding(): DPadding {
		return this._padding;
	}

	get corner(): DCorner {
		return this._corner;
	}

	get background(): DBackgroundStateAware {
		return this._background;
	}

	get border(): DBorderStateAware {
		return this._border;
	}

	get outline(): DOutline {
		return this._outline;
	}

	get unsafe(): Transform {
		return this.transform;
	}

	get title(): string {
		return this._title;
	}

	set title(title: string) {
		if (this._title !== title) {
			this._title = title;
			if (this.state.isHovered) {
				this.applyTitle();
			}
		}
	}

	protected applyTitle(): void {
		const layer = DApplications.getLayer(this);
		if (layer) {
			layer.view.title = this._title;
		}
	}

	show(): this {
		if (!this.visible) {
			this.visible = true;
			this.toParentChildrenDirty();
			DApplications.update(this);
		}
		return this;
	}

	isShown(): boolean {
		return this.visible;
	}

	hide(): this {
		if (this.visible) {
			this.visible = false;
			this.toParentChildrenDirty();
			this.blur(true);
			DApplications.update(this);
		}
		return this;
	}

	isHidden(): boolean {
		return !this.visible;
	}

	toDirty(): boolean {
		if (!this._isDirty) {
			this._isDirty = true;
			this.toParentHasDirty();
			return true;
		}
		return false;
	}

	toHasDirty(): boolean {
		if (!this._hasDirty) {
			this._hasDirty = true;
			this.toParentHasDirty();
			return true;
		}
		return false;
	}

	toParentHasDirty(): void {
		const parent = this.parent;
		if (parent instanceof DBase) {
			parent.toHasDirty();
		}
	}

	toChildrenDirty(): boolean {
		if (!this._isChildrenDirty) {
			this._isChildrenDirty = true;
			this.onChildrenDirty();
			this.toParentChildrenDirty();
			return true;
		}
		return false;
	}

	toParentChildrenDirty(): void {
		const parent = this.parent;
		if (parent instanceof DBase) {
			parent.toChildrenDirty();
		}
	}

	isChildrenDirty(): boolean {
		return this._isChildrenDirty;
	}

	protected onChildrenDirty(): void {
		// DO NOTHING
	}

	isDirty(): boolean {
		return this._isDirty;
	}

	hasDirty(): boolean {
		return this._hasDirty;
	}

	protected setFocused(isFocused: boolean): this {
		if (this.state.isFocused !== isFocused) {
			const layer = DApplications.getLayer(this);
			if (layer) {
				layer.getFocusController().set(this, isFocused);
			}
		}
		return this;
	}

	focus(): this {
		return this.setFocused(true);
	}

	blur(recursively?: boolean): this {
		if (recursively) {
			const layer = DApplications.getLayer(this);
			if (layer) {
				const focusController = layer.getFocusController();
				const focused = focusController.get();
				if (focused instanceof DBase) {
					let current: Container = focused;
					while (current) {
						if (current === this) {
							focused.setFocused(false);
							break;
						}
						current = current.parent;
					}
				}
			}
		} else {
			this.setFocused(false);
		}
		return this;
	}

	protected onStateChange(newState: DBaseStateSet, oldState: DBaseStateSet): void {
		this.toDirty();
		DApplications.update(this);
		this.emit("statechange", newState, oldState, this);

		const children = this.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			const child = children[i];
			if (child instanceof DBase) {
				child.state.onParentChange(newState, oldState);
			}
		}

		if (newState.isFocused) {
			if (!oldState.isFocused) {
				this.onFocus();
			}
		} else if (oldState.isFocused) {
			this.onBlur();
		}

		this.cursor = this.toCursor(this._cursor, newState);
	}

	protected onChildFocus(focused: DBase): void {
		const parent = this.parent;
		if (parent instanceof DBase) {
			parent.onChildFocus(focused);
		}
	}

	protected onFocus(): void {
		const parent = this.parent;
		if (parent instanceof DBase) {
			parent.onChildFocus(this);
		}
	}

	protected onChildBlur(blured: DBase): void {
		const parent = this.parent;
		if (parent instanceof DBase) {
			parent.onChildBlur(blured);
		}
	}

	protected onBlur(): void {
		const parent = this.parent;
		if (parent instanceof DBase) {
			parent.onChildBlur(this);
		}
	}

	get state(): DBaseStateSet {
		return this._state;
	}

	get theme(): THEME {
		return this._theme;
	}

	set theme(theme: THEME) {
		const result = this._theme;
		if (result !== theme) {
			this._theme = theme;
			this._padding.setTheme(theme);
			this._background.setTheme(theme);
			this._border.setTheme(theme);
			this._outline.setTheme(theme);
			this._corner.setTheme(theme);
			this.toDirty();
			DApplications.update(this);
		}
	}

	refit(): void {
		if (this._isChildrenDirty) {
			this._isChildrenDirty = false;

			const children = this.children;
			for (let i = 0, imax = children.length; i < imax; ++i) {
				const child = children[i];
				if (child instanceof DBase) {
					child.refit();
				}
			}

			this.onRefit();
		}
	}

	protected onRefit(): void {
		const auto = this._auto;
		const isWidthAuto = auto.width.isOn;
		const isHeightAuto = auto.height.isOn;
		if (isWidthAuto && isHeightAuto) {
			let width = 0;
			let height = 0;
			const children = this.children;
			for (let i = 0, imax = children.length; i < imax; ++i) {
				const child = children[i];
				if (child.visible) {
					if (this.hasRefitableWidth(child)) {
						width = Math.max(width, child.x + child.width);
					}
					if (this.hasRefitableHeight(child)) {
						height = Math.max(height, child.y + child.height);
					}
				}
			}
			const padding = this.padding;
			this.resize(width + padding.getRight(), height + padding.getBottom());
		} else if (isWidthAuto) {
			let width = 0;
			const children = this.children;
			for (let i = 0, imax = children.length; i < imax; ++i) {
				const child = children[i];
				if (child.visible && this.hasRefitableWidth(child)) {
					width = Math.max(width, child.x + child.width);
				}
			}
			this.width = width + this.padding.getRight();
		} else if (isHeightAuto) {
			let height = 0;
			const children = this.children;
			for (let i = 0, imax = children.length; i < imax; ++i) {
				const child = children[i];
				if (child.visible && this.hasRefitableHeight(child)) {
					height = Math.max(height, child.y + child.height);
				}
			}
			this.height = height + this.padding.getBottom();
		}
	}

	protected isRefitable(target: any): target is DRefitable {
		return target instanceof DBase;
	}

	protected hasRefitableHeight(target: any): target is DRefitable {
		return (
			this.isRefitable(target) && !(target instanceof DBase && isFunction(target.getHeight()))
		);
	}

	protected hasRefitableWidth(target: any): target is DBase<any, any> {
		return (
			this.isRefitable(target) && !(target instanceof DBase && isFunction(target.getWidth()))
		);
	}

	reflow(): void {
		if (this._isDirty) {
			this.onReflow();
			this._isDirty = false;
		}

		if (this._hasDirty) {
			const children = this.children;
			for (let i = 0, imax = children.length; i < imax; ++i) {
				const child = children[i];
				if (child instanceof DBase) {
					child.reflow();
				}
			}
			this._hasDirty = false;
		}
	}

	protected onReflow(): void {
		const width = this._width;
		const height = this._height;
		const reflowables = this._reflowables;
		for (let i = 0, imax = reflowables.length; i < imax; ++i) {
			reflowables[i].onReflow(this, width, height);
		}
	}

	get shadow(): DShadow | null {
		return this._shadow;
	}

	set shadow(shadow: DShadow | null) {
		const previous = this._shadow;
		if (previous !== shadow) {
			if (previous != null) {
				previous.off("update", this._onShadowUpdateBound);
				this.removeReflowable(previous);
				this.removeRenderable(previous, true);
			}

			this._shadow = shadow;
			if (shadow != null) {
				shadow.on("update", this._onShadowUpdateBound);
				this.addReflowable(shadow);
				this.addRenderableAt(shadow, true, 0);
			}

			DApplications.update(this);
		}
	}

	layout(): void {
		const parent = this.getParentOfSize();
		if (parent) {
			this.onParentResize(parent.width, parent.height, parent.padding);
		}
	}

	protected getParentOfSize(): { width: number; height: number; padding: DPadding } | null {
		const parent = this.parent;
		if (parent instanceof DBase) {
			return parent;
		} else {
			return DApplications.getLayer(this);
		}
	}

	/**
	 * Called when a parent resized.
	 *
	 * @param parentWidth a parent's local width
	 * @param parentHeight a parent's local height
	 */
	onParentResize(parentWidth: number, parentHeight: number, parentPadding: DPadding): void {
		const scalarSet = this._scalarSet;
		const position = this.transform.position;
		const x = position.x;
		const y = position.y;
		const width = this._width;
		const height = this._height;

		// Width & height
		const paddingWidth = parentPadding.getLeft() + parentPadding.getRight();
		const paddingHeight = parentPadding.getTop() + parentPadding.getBottom();
		const newWidth =
			scalarSet.width != null
				? scalarSet.width(parentWidth, width, paddingWidth, width)
				: width;
		const newHeight =
			scalarSet.height != null
				? scalarSet.height(parentHeight, height, paddingHeight, height)
				: height;
		this.resize(newWidth, newHeight);

		// X & Y
		const newX =
			scalarSet.x != null
				? scalarSet.x(parentWidth, this._width, parentPadding.getLeft(), x)
				: x;
		const newY =
			scalarSet.y != null
				? scalarSet.y(parentHeight, this._height, parentPadding.getTop(), y)
				: y;
		this.position.set(newX, newY);
	}

	/**
	 * Called when a parent moved.
	 *
	 * @param newX a new parent's local x position
	 * @param newY a new parent's local y position
	 * @param oldX an old parent's local x position
	 * @param oldY an old parent's local y position
	 */
	protected onParentMove(newX: number, newY: number, oldX: number, oldY: number): void {
		// DO NOTHING
	}

	// Wheel
	onWheel(e: WheelEvent, deltas: UtilWheelEventDeltas, global: Point): boolean {
		this.emit("wheel", e, deltas, global, this);
		return false;
	}

	// Keydown
	onKeyDown(e: KeyboardEvent): boolean {
		this.emit("keydown", e, this);
		return false;
	}

	onKeyUp(e: KeyboardEvent): boolean {
		this.emit("keyup", e, this);
		return false;
	}

	// Down
	protected isEventTarget(e: InteractionEvent): boolean {
		const target = e.target;
		if (target === this) {
			return true;
		} else if (!(target instanceof DBase)) {
			let parent = target.parent;
			while (parent != null && !(parent instanceof DBase)) {
				parent = parent.parent;
			}
			return parent === this;
		}
		return false;
	}

	protected onDown(e: InteractionEvent): void {
		if (this.isEventTarget(e)) {
			this.onDownThis(e);
		}
		this.emit("down", e, this);
	}

	protected onDownThis(e: InteractionEvent): void {
		const oe = e.data.originalEvent;
		if ("touches" in oe) {
			const lastDownPoint = this._lastDownPoint || new Point();
			this._lastDownPoint = lastDownPoint;
			lastDownPoint.copyFrom(e.data.global);
		} else {
			this.focusOnClosest();
		}
	}

	protected onUp(e: InteractionEvent): void {
		if (this.isEventTarget(e)) {
			this.onUpThis(e);
		}
		this.emit("up", e, this);
	}

	protected onUpThis(e: InteractionEvent): void {
		const oe = e.data.originalEvent;
		if ("touches" in oe) {
			const lastDownPoint = this._lastDownPoint;
			if (lastDownPoint) {
				const global = e.data.global;
				const dx = Math.abs(global.x - lastDownPoint.x);
				const dy = Math.abs(global.y - lastDownPoint.y);
				const threshold = UtilPointerEvent.CLICK_DISTANCE_THRESHOLD;
				if (dx < threshold && dy < threshold) {
					this.focusOnClosest();
				}
			}
		}
	}

	protected focusOnClosest(): void {
		const layer = DApplications.getLayer(this);
		if (layer) {
			const focusController = layer.getFocusController();
			focusController.focus(focusController.findParent(this));
		}
	}

	// Over
	protected onOver(e: InteractionEvent): void {
		// Update the hover state
		this.state.isHovered = true;

		// Update the title
		if (e.target === this) {
			this.applyTitle();
		}

		// Event
		this.emit("over", e, this);
	}

	// Out
	protected onOut(e: InteractionEvent): void {
		// Update the hover state
		this.state.isHovered = false;

		// Event
		this.emit("out", e, this);
	}

	// Double click
	onDblClick(e: MouseEvent | TouchEvent, interactionManager: InteractionManager): boolean {
		this.emit("dblclick", e, interactionManager, this);
		return false;
	}

	//
	render(renderer: Renderer): void {
		if (this.visible && 0 < this.worldAlpha && this.renderable) {
			this.renderBefore(renderer);
			super.render(renderer);
			this.renderAfter(renderer);
		}
	}

	protected renderBefore(renderer: Renderer): void {
		const befores = this._befores;
		for (let i = 0, imax = befores.length; i < imax; ++i) {
			const before = befores[i];
			before.updateTransform();
			before.render(renderer);
		}
	}

	protected renderAfter(renderer: Renderer): void {
		const afters = this._afters;
		for (let i = 0, imax = afters.length; i < imax; ++i) {
			const after = afters[i];
			after.updateTransform();
			after.render(renderer);
		}
	}

	//
	protected getThemeDefault(): THEME {
		return DThemes.getInstance().get(this.getType());
	}

	protected getType(): string {
		return "DBase";
	}

	//
	protected _calculateBounds(): void {
		const worldTransform = this.transform.worldTransform;
		const bounds = this._bounds;

		const work = DBase.WORK_CONTAINS_POINT;
		work.set(0, 0);
		worldTransform.apply(work, work);
		bounds.addPoint(work);

		work.set(this._width, this._height);
		worldTransform.apply(work, work);
		bounds.addPoint(work);

		super._calculateBounds();
	}

	containsPoint(point: Point): boolean {
		return (
			this.containsGlobalPoint(point) ||
			this.containsLocalPoint(
				this.worldTransform.applyInverse(point, DBase.WORK_CONTAINS_POINT)
			)
		);
	}

	protected containsGlobalPoint(point: Point): boolean {
		return false;
	}

	protected containsLocalPoint(point: Point): boolean {
		const x = point.x;
		const y = point.y;
		const w = this._width;
		const h = this._height;
		return 0 <= x && x <= w && 0 <= y && y <= h;
	}

	/**
	 * Returns a clipping rect.
	 *
	 * @param result a clipping rect
	 */
	getClippingRect(target: unknown, result: Rectangle): void {
		result.x = 0;
		result.y = 0;
		result.width = this._width;
		result.height = this._height;
	}

	destroy(): void {
		// Layout
		const scalarSet = this._scalarSet;
		scalarSet.x = null;
		scalarSet.y = null;
		scalarSet.width = null;
		scalarSet.height = null;

		// Shadow
		const shadow = this._shadow;
		if (shadow) {
			this._shadow = null;
			shadow.destroy();
		}

		// Children
		const children = this.children;
		for (let i = children.length - 1; 0 <= i; --i) {
			children[i].destroy();
		}
		children.length = 0;

		//
		super.destroy();
	}
}
