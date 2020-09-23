/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Point } from "pixi.js";
import { DApplications } from "../d-applications";
import { DBaseState } from "../d-base-state";
import { DBaseStateSet } from "../d-base-state-set";
import { UtilKeyboardEvent } from "../util/util-keyboard-event";
import { EShapeActionRuntime } from "./action/e-shape-action-runtime";
import { EShape } from "./e-shape";
import { EShapeFillLike } from "./e-shape-fill";
import { EShapeState } from "./e-shape-state";
import { EShapeStrokeLike } from "./e-shape-stroke";
import { EShapeTextLike } from "./e-shape-text";

export enum EShapeRuntimeReset {
	NONE = 0,
	POSITION_X = 1,
	POSITION_Y = 2,
	POSITION = POSITION_X | POSITION_Y,
	ROTATION = 4,
	COLOR_FILL = 8,
	COLOR_STROKE = 16,
	COLOR_FILL_AND_STROKE = COLOR_FILL | COLOR_STROKE,
	COLOR_TEXT = 32,
	COLOR_TEXT_OUTLINE = 64,
	COLOR = COLOR_FILL | COLOR_STROKE | COLOR_TEXT | COLOR_TEXT_OUTLINE,
	VISIBILITY = 128,
	HEIGHT = 256,
	WIDTH = 512,
	SIZE = HEIGHT | WIDTH,
	TEXT = 1024,
	CURSOR = 2048
}

export class EShapeRuntime {
	x: number;
	y: number;
	size: Point;
	rotation: number;
	actions: EShapeActionRuntime[];
	fill: EShapeFillLike;
	stroke: EShapeStrokeLike;
	text: EShapeTextLike;
	cursor: string;

	reset: EShapeRuntimeReset;
	written: EShapeRuntimeReset;

	effect: number;

	isStateChanged: boolean;
	interactive: boolean;

	constructor( shape: EShape ) {
		const transform = shape.transform;
		const position = transform.position;
		this.x = position.x;
		this.y = position.y;
		this.size = new Point( shape.size.x, shape.size.y );
		this.rotation = transform.rotation;
		this.actions = [];
		this.fill = shape.fill.toObject();
		this.stroke = shape.stroke.toObject();
		this.text = shape.text.toObject();
		this.cursor = shape.cursor;
		this.reset = EShapeRuntimeReset.NONE;
		this.written = EShapeRuntimeReset.NONE;
		this.effect = NaN;
		this.isStateChanged = false;
		this.interactive = false;
	}

	onPointerClick( shape: EShape, e?: interaction.InteractionEvent ): void {
		if( ! shape.state.inDisabled ) {
			shape.state.isClicked = true;
		}
	}

	onPointerDblClick( shape: EShape, e?: MouseEvent | TouchEvent ): boolean {
		return false;
	}

	onPointerOver( shape: EShape, e?: interaction.InteractionEvent ): void {
		shape.state.isHovered = true;
	}

	onPointerOut( shape: EShape, e?: interaction.InteractionEvent ): void {
		shape.state.isHovered = false;
	}

	onPointerDown( shape: EShape, e?: interaction.InteractionEvent ): void {
		if( ! shape.state.isDown ) {
			shape.state.add( EShapeState.DOWN | DBaseState.PRESSED );

			// Focus
			const layer = DApplications.getLayer( shape );
			if( layer ) {
				const focusController = layer.getFocusController();
				focusController.setFocused( focusController.findFocusableParent( shape ), true, true );
			}
		}
	}

	onPointerUp( shape: EShape, e?: interaction.InteractionEvent ): void {
		if( ! shape.state.isUp && shape.state.isPressed ) {
			shape.state.set( EShapeState.UP, DBaseState.PRESSED );

			// Click
			this.onPointerClick( shape );
		}
	}

	onPointerMove( shape: EShape, e?: interaction.InteractionEvent ): void {
		//
	}

	onKeyDown( shape: EShape, e: KeyboardEvent ): boolean {
		if( UtilKeyboardEvent.isActivateKey( e ) ) {
			this.onPointerDown( shape );
		}
		return false;
	}

	onKeyUp( shape: EShape, e: KeyboardEvent ): boolean {
		if( UtilKeyboardEvent.isActivateKey( e ) ) {
			this.onPointerUp( shape );
		}
		return false;
	}

	onStateChange( shape: EShape, newState: DBaseStateSet, oldState: DBaseStateSet ): void {
		this.isStateChanged = true;
		DApplications.update( shape );
	}

	update( shape: EShape, time: number ): void {
		const tag = shape.tag;
		const isEffectTimeUp = ( this.effect <= time );
		if( tag.isChanged || this.isStateChanged || isEffectTimeUp ) {
			if( isEffectTimeUp ) {
				this.effect = NaN;
			}
			shape.disallowUploadedUpdate();
			this.onUpdate( shape, time );
			shape.allowUploadedUpdate();
			shape.state.remove( EShapeState.CLICKED | EShapeState.DOWN | EShapeState.UP );
			this.isStateChanged = false;
			tag.isChanged = false;
		}
	}

	protected onUpdate( shape: EShape, time: number ): void {
		if( 0 < this.actions.length ) {
			this.executeActions( shape, time );
			this.resetUnwrittenProperties( shape );
		}
	}

	protected executeActions( shape: EShape, time: number ): void {
		this.written = EShapeRuntimeReset.NONE;
		const actions = this.actions;
		for( let i = 0, imax = actions.length; i < imax; ++i ) {
			actions[ i ].execute( shape, this, time );
		}
	}

	protected resetUnwrittenProperties( shape: EShape ): void {
		const target = (~this.written) & this.reset;
		if( target !== EShapeRuntimeReset.NONE ) {
			if( target & EShapeRuntimeReset.POSITION_X ) {
				shape.transform.position.x = this.x;
			}
			if( target & EShapeRuntimeReset.POSITION_Y ) {
				shape.transform.position.y = this.y;
			}
			if( target & EShapeRuntimeReset.VISIBILITY ) {
				shape.visible = true;
			}
			if( target & EShapeRuntimeReset.COLOR_FILL ) {
				const fill = this.fill;
				shape.fill.set(
					undefined,
					fill.color,
					fill.alpha
				);
			}
			if( target & EShapeRuntimeReset.COLOR_STROKE ) {
				const stroke = this.stroke;
				shape.stroke.set(
					undefined,
					stroke.color,
					stroke.alpha
				);
			}
			if( target & EShapeRuntimeReset.COLOR_TEXT ) {
				const text = this.text;
				shape.text.set(
					undefined,
					text.color,
					text.alpha
				);
			}
			if( target & EShapeRuntimeReset.COLOR_TEXT_OUTLINE ) {
				const outline = this.text.outline;
				shape.text.outline.set(
					undefined,
					outline.color,
					outline.alpha
				);
			}
			if( target & EShapeRuntimeReset.HEIGHT ) {
				shape.size.y = this.size.y;
			}
			if( target & EShapeRuntimeReset.WIDTH ) {
				shape.size.x = this.size.x;
			}
			if( target & EShapeRuntimeReset.ROTATION ) {
				shape.transform.rotation = this.rotation;
			}
			if( target & EShapeRuntimeReset.TEXT ) {
				shape.text.value = this.text.value;
			}
			if( target & EShapeRuntimeReset.CURSOR ) {
				shape.cursor = this.cursor;
			}
		}
	}
}
