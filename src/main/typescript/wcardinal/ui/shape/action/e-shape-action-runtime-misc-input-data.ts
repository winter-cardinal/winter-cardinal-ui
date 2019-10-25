/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix, Point, Rectangle, Renderer } from "pixi.js";
import { DApplications } from "../../d-applications";
import { DControllers } from "../../d-controllers";
import { DynamicSDFFontAtlas } from "../../util/dynamic-sdf-font-atlas";
import { UtilKeyboardEvent } from "../../util/util-keyboard-event";
import { EShape } from "../e-shape";
import { EShapeTextWeight } from "../e-shape-text";

type OnChange = ( shape: EShape, value: string ) => void;
type OnInput = ( shape: EShape, value: string ) => void;

export class EShapeActionRuntimeMiscInputData {
	protected input: HTMLInputElement | null;
	protected shape: EShape | null;
	protected value: string;
	protected onChange?: OnChange;
	protected onInput?: OnInput;

	protected point: Point;
	protected rect: Rectangle;

	protected _onInputKeyDownBound!: ( e: KeyboardEvent ) => void;
	protected _onInputBlurBound!: ( e: FocusEvent ) => void;
	protected _updateInputBound!: () => void;
	protected _onInputChangeBound!: ( e: Event ) => void;
	protected _onInputInputBound!: ( e: Event ) => void;
	protected _updateInputBoundRenderer!: Renderer | null;

	constructor() {
		this.input = null;
		this.shape = null;
		this.value = "";

		this.point = new Point();
		this.rect = new Rectangle();

		this._onInputKeyDownBound = ( e: KeyboardEvent ) => {
			this.onInputKeyDown( e );
		};

		this._onInputBlurBound = ( e: FocusEvent ) => {
			this.onInputBlur( e );
		};

		this._updateInputBound = () => {
			this.updateInput();
		};

		this._onInputChangeBound = () => {
			this.onInputChange();
		};

		this._onInputInputBound = ( e ) => {
			this.onInputInput( e );
		};

		this._updateInputBoundRenderer = null;
	}

	protected getInput(): HTMLInputElement | null {
		if( this.input == null ) {
			DApplications.getInstance().getRootElement().appendChild(
				this.input = this.createInput()
			);
		}
		return this.input;
	}

	protected createInput(): HTMLInputElement {
		const result = document.createElement( "input" );
		result.setAttribute( "spellcheck", "false" );
		return result;
	}

	protected getInputType(): string {
		return "text";
	}

	protected initInput( shape: EShape, input: HTMLInputElement, value: string ): void {
		input.type = this.getInputType();
		input.value = value;
		input.addEventListener( "keydown", this._onInputKeyDownBound );
		input.addEventListener( "blur", this._onInputBlurBound );
		input.addEventListener( "change", this._onInputChangeBound );
		input.addEventListener( "input", this._onInputInputBound );

		// Style
		input.setAttribute( "style", this.getInputStyle( shape ) );

		// ReadOnly
		if( shape.readonly ) {
			input.setAttribute( "readonly", "readonly" );
		} else {
			input.removeAttribute( "readonly" );
		}

		// Disabled
		if( shape.disabled ) {
			input.setAttribute( "disabled", "disabled" );
		} else {
			input.removeAttribute( "disabled" );
		}
	}

	protected getInputStyleBackground(): string {
		return `background-color: transparent;`;
	}

	protected getInputStyleBorder(): string {
		return `border: none; box-sizing: border-box;`;
	}

	protected getInputStylePadding( shape: EShape, scale: number ): string {
		const padding = shape.text.padding;
		const paddingVertical = 0;
		const paddingHorizontal = padding.horizontal * scale;
		return `padding: ${paddingVertical}px ${paddingHorizontal}px ${paddingVertical}px ${paddingHorizontal}px;`;
	}

	protected getInputStyleOutline(): string {
		return `outline: none;`;
	}

	protected getInputStylePosition( rect: Rectangle, matrix: Matrix ): string {
		return `position: absolute;` +
			`left: ${rect.x}px;` +
			`top: ${rect.y}px;` +
			`width: ${rect.width}px;` +
			`height: ${rect.height}px;` +
			`line-height: ${rect.height}px;` +
			`transform: matrix(${matrix.a},${matrix.b},${matrix.c},${matrix.d},${matrix.tx},${matrix.ty});`;
	}

	protected getInputStyleText( shape: EShape, rect: Rectangle, scale: number ): string {
		const text = shape.text;
		return `font-family: ${DynamicSDFFontAtlas.toFontFamily( text.family )};` +
			`font-size: ${text.size * scale}px;` +
			`font-weight: ${text.weight === EShapeTextWeight.NORMAL ? "normal" : "bold" };` +
			`color: #${text.color.toString( 16 )};`;
	}

	protected getInputStyleMargin( shape: EShape, rect: Rectangle, scale: number ): string {
		return `margin: 0;`;
	}

	protected getInputStyle( shape: EShape ): string {
		const pivot = shape.transform.pivot;
		const size = shape.size;
		const sizeX = size.x;
		const sizeY = size.y;
		const rect = this.rect;
		rect.x = -0.5 * sizeX + pivot.x;
		rect.y = -0.5 * sizeY + pivot.y;
		rect.width = sizeX;
		rect.height = sizeY;

		shape.updateTransform();
		const scale = 1.0;
		const worldTransform = shape.transform.worldTransform;

		return this.getInputStylePosition( rect, worldTransform ) +
			this.getInputStyleMargin( shape, rect, scale ) +
			this.getInputStyleText( shape, rect, scale ) +
			this.getInputStyleBackground() +
			this.getInputStyleBorder() +
			this.getInputStylePadding( shape, scale ) +
			this.getInputStyleOutline();
	}

	protected onInputKeyDown( e: KeyboardEvent ): void {
		if( UtilKeyboardEvent.isFocusKey( e ) ) {
			const shape = this.shape;
			if( shape != null ) {
				this.onInputChange();
				this.hide();

				const focusController = DControllers.getFocusController();
				const direction = UtilKeyboardEvent.getFocusDirection( e );
				const focusable = focusController.findFocusable( shape, false, false, direction );
				if( focusable != null ) {
					DApplications.getInstance().view.focus();
					e.preventDefault();
					focusController.setFocused( focusable, true, true );
				}
			}
		} else if( UtilKeyboardEvent.isOkKey( e ) ) {
			this.onInputChange();
			this.hide();
		}
	}

	protected onInputBlur( e: FocusEvent ): void {
		this.onInputChange();
		this.hide();
	}

	protected onInputInput( e: Event ): void {
		if( e.target instanceof HTMLInputElement ) {
			const shape = this.shape;
			const onInput = this.onInput;
			if( shape != null && onInput != null ) {
				onInput( shape, e.target.value );
			}
		}
	}

	protected updateInput(): void {
		const shape = this.shape;
		if( shape != null ) {
			if( shape.visible ) {
				const input = this.input;
				if( input != null ) {
					input.setAttribute( "style", this.getInputStyle( shape ) );
				}
			} else {
				this.hide();
			}
		}
	}

	isShown( shape: EShape ): boolean {
		return ( this.shape === shape );
	}

	show(
		newShape: EShape, value: string,
		onChange?: OnChange, onInput?: OnInput
	): void {
		const oldShape = this.shape;
		if( oldShape != null && oldShape !== newShape ) {
			this.hide();
		}
		if( this.shape == null ) {
			this.shape = newShape;
			this.value = value;
			this.onChange = onChange;
			this.onInput = onInput;

			const text = newShape.text;
			if( text != null ) {
				text.enable = false;
			}

			const app = DApplications.getInstance();
			const input = this.getInput();
			if( input != null ) {
				this.initInput( newShape, input, value );

				const updateInputBound = this._updateInputBound;
				const renderer = this._updateInputBoundRenderer;
				if( renderer != null ) {
					renderer.off( "postrender", updateInputBound );
				}
				this._updateInputBoundRenderer = app.renderer;
				app.renderer.on( "postrender", updateInputBound );

				input.style.display = "";
				input.focus();
				input.select();
			}

			DApplications.update();
		}
	}

	hide(): void {
		const shape = this.shape;
		if( shape != null ) {
			this.shape = null;
			this.value = "";

			const text = shape.text;
			if( text != null ) {
				text.enable = true;
			}

			const input = this.input;
			if( input != null ) {
				input.removeEventListener( "keydown", this._onInputKeyDownBound );
				input.removeEventListener( "blur", this._onInputBlurBound );
				input.removeEventListener( "change", this._onInputChangeBound );
				input.removeEventListener( "input", this._onInputInputBound );
				input.style.display = "none";
			}

			const renderer = this._updateInputBoundRenderer;
			if( renderer != null ) {
				this._updateInputBoundRenderer = null;
				renderer.off( "postrender", this._updateInputBound );
			}

			DApplications.update();
		}
	}

	onInputChange(): void {
		const shape = this.shape;
		const input = this.input;
		const onChange = this.onChange;
		if( shape != null && input != null && onChange != null ) {
			const newValue = input.value;
			if( this.value !== newValue ) {
				onChange( shape, newValue );
			}
		}
	}
}
