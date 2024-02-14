/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Graphics } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBase, DBaseEvents, DBaseOptions, DRefitable, DThemeBase } from "./d-base";
import { DImagePieceLayouter } from "./d-image-piece-layouter";
import { DOnOptions } from "./d-on-options";
import { DStateAwareOrValueMightBe } from "./d-state-aware";
import { DTextPiece, DTextPieceOptions, DThemeTextPiece } from "./d-text-piece";
import { DBaseOverflowMaskSimple } from "./d-base-overflow-mask-simple";
import { DTextPieceImpl } from "./d-text-piece-impl";

/**
 * {@link DTextBase} events.
 */
export interface DTextBaseEvents<VALUE, EMITTER> extends DBaseEvents<EMITTER> {}

/**
 * {@link DTextBase} "on" options.
 */
export interface DTextBaseOnOptions<VALUE, EMITTER>
	extends Partial<DTextBaseEvents<VALUE, EMITTER>>,
		DOnOptions {}

/**
 * {@link DTextBase} options.
 */
export interface DTextBaseOptions<
	VALUE = unknown,
	THEME extends DThemeTextBase<VALUE> = DThemeTextBase<VALUE>,
	EMITTER = any
> extends DBaseOptions<THEME, EMITTER> {
	text?: DTextPieceOptions<VALUE>;
	mask?: boolean;
	on?: DTextBaseOnOptions<VALUE, EMITTER>;
}

/**
 * {@link DTextBase} theme.
 */
export interface DThemeTextBase<VALUE = unknown> extends DThemeBase, DThemeTextPiece<VALUE> {}

/**
 * A base class for UI classes with a text support.
 * See {@link DTextBaseEvents} for event defaults.
 */
export class DTextBase<
	VALUE = unknown,
	THEME extends DThemeTextBase<VALUE> = DThemeTextBase<VALUE>,
	OPTIONS extends DTextBaseOptions<VALUE, THEME> = DTextBaseOptions<VALUE, THEME>
> extends DBase<THEME, OPTIONS> {
	protected static LAYOUTER?: DImagePieceLayouter;
	protected _text?: DTextPieceImpl<VALUE>;
	protected _overflowMask?: DBaseOverflowMaskSimple | null;

	protected init(options?: OPTIONS): void {
		super.init(options);
		this.getText();
	}

	getOverflowMask(): Graphics | null {
		let result = this._overflowMask;
		if (result === undefined) {
			result = this.newOverflowMask();
			this._overflowMask = result;
		}
		return null;
	}

	protected newOverflowMask(): DBaseOverflowMaskSimple | null {
		if (this._options?.mask ?? this.theme.isOverflowMaskEnabled()) {
			const result = new DBaseOverflowMaskSimple(this);
			this._reflowable.add(result);
			this.toDirty();
			return result;
		} else {
			return null;
		}
	}

	get text(): DTextPiece<VALUE> {
		return (this._text ??= this.newText());
	}

	protected getText(): DTextPieceImpl<VALUE> {
		return (this._text ??= this.newText());
	}

	protected newText(): DTextPieceImpl<VALUE> {
		return new DTextPieceImpl(this, this.theme, this._options?.text);
	}

	set text(text: DStateAwareOrValueMightBe<VALUE>) {
		this.text.value = text;
	}

	protected onReflow(): void {
		super.onReflow();
		this.onReflowTextAndImage();
	}

	protected getLayouter(): DImagePieceLayouter {
		return (DTextBase.LAYOUTER ??= new DImagePieceLayouter());
	}

	protected onReflowTextAndImage(): void {
		const layouter = this.getLayouter();
		const text = this.getText();
		text.update(layouter);
		const auto = this._auto;
		layouter.execute(
			this._padding,
			text.align,
			auto.width.isOn ? null : this.width,
			auto.height.isOn ? null : this.height
		);
		layouter.clear();
	}

	protected isRefitable(target: any): target is DRefitable {
		if (super.isRefitable(target)) {
			return true;
		}
		if (target != null) {
			const text = this._text;
			if (text != null && target === text.object) {
				return true;
			}
		}
		return false;
	}

	protected applyTitle(): void {
		const object = this.text.object;
		if (this._title.length <= 0 && object != null && object.clipped) {
			const layer = DApplications.getLayer(this);
			if (layer) {
				layer.view.title = object.text;
			}
		} else {
			super.applyTitle();
		}
	}

	protected getType(): string {
		return "DTextBase";
	}

	destroy(): void {
		// Text
		const text = this._text;
		if (text) {
			text.destroy();
		}

		// Overflow mask
		const overflowMask = this._overflowMask;
		if (overflowMask) {
			this._overflowMask = null;
			overflowMask.destroy();
		}

		super.destroy();
	}
}
