/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Point, Sprite, Texture } from "pixi.js";
import InteractionEvent = interaction.InteractionEvent;
import { DAlignWith } from "./d-align-with";
import { DApplications } from "./d-applications";
import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DColorGradient, DColorGradientPoint } from "./d-color-gradient";
import { DColorGradientObservable } from "./d-color-gradient-observable";
import { DInputReal } from "./d-input-real";
import { DPickerColor } from "./d-picker-color";
import { DPickerColorGradientRecent } from "./d-picker-color-gradient-recent";
import { DPickerColorGradientView } from "./d-picker-color-gradient-view";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { UtilPointerEvent } from "./util/util-pointer-event";

export interface DPickerColorGradientOptions<
	THEME extends DThemePickerColorGradient = DThemePickerColorGradient
> extends DBaseOptions<THEME> {}

export interface DThemePickerColorGradient extends DThemeBase {
	getGradientPointsWidth(): number;
	getGradientPointsMargin(): number;

	getGradientAnchorTexture(): Texture;
	getGradientAnchorOutlinedTexture(): Texture;
	getGradientAnchorOutlineTexture(): Texture;

	getGradientDirectionMargin(): number;
	getGradientDirectionTexture(): Texture;

	getGradientRecentColumn(): number;
	getGradientRecentWidth(): number;
	getGradientRecentMargin(): number;
	getGradientRecentCount(): number;
	getGradientRecents(): DColorGradient[];

	getGradientCheckerColors(): [number, number];
}

export class DPickerColorGradient<
	THEME extends DThemePickerColorGradient = DThemePickerColorGradient,
	OPTIONS extends DPickerColorGradientOptions<THEME> = DPickerColorGradientOptions<THEME>
> extends DBase<THEME, OPTIONS> {
	protected static RECENT_COLOR_GRADIENT: DPickerColorGradientRecent | null = null;

	protected _picker!: DPickerColor;
	protected _view!: DPickerColorGradientView;
	protected _anchors!: Sprite[];
	protected _recent!: DPickerColorGradientRecent;

	protected _onAnchorDownBound!: (e: InteractionEvent) => void;
	protected _onAnchorMoveBound!: (e: InteractionEvent) => void;
	protected _onAnchorUpBound!: (e: InteractionEvent) => void;

	protected _value!: DColorGradientObservable;
	protected _work!: Point;

	protected init(options?: OPTIONS): void {
		super.init(options);

		const theme = this.theme;
		const padding = this._padding;
		const paddingTop = padding.getTop();
		const paddingRight = padding.getRight();
		const paddingBottom = padding.getBottom();
		const paddingLeft = padding.getLeft();
		this._work = new Point();

		// Picker
		const gradientPointsWidth = theme.getGradientPointsWidth();
		const gradientPointsMargin = theme.getGradientPointsMargin();
		const picker = new DPickerColor({
			x: paddingLeft + gradientPointsWidth + gradientPointsMargin,
			y: paddingTop
		});
		this._picker = picker;
		picker.on("newcolorchange", (color: number): void => {
			this.onAnchorColorChange(color);
		});
		picker.on("newalphachange", (alpha: number): void => {
			this.onAnchorAlphaChange(alpha);
		});
		this.addChild(picker);

		// Points view
		const view = (this._view = DPickerColorGradientView.from(
			17,
			10,
			theme.getGradientCheckerColors()
		));
		view.setRectangle(0, paddingLeft, paddingTop, gradientPointsWidth, picker.height);
		this.addChild(view);
		view.on(UtilPointerEvent.down, (e: InteractionEvent): void => {
			if (view.getLastHitIndex() === 0) {
				this.onViewDown(e);
			}
		});

		// Anchor
		this._onAnchorDownBound = (e: InteractionEvent): void => {
			this.onAnchorDown(e);
		};
		this._onAnchorMoveBound = (e: InteractionEvent): void => {
			this.onAnchorMove(e);
		};
		this._onAnchorUpBound = (e: InteractionEvent): void => {
			this.onAnchorUp(e);
		};
		this._anchors = [];

		//
		const recentColumn = theme.getGradientRecentColumn();
		const recentWidth = theme.getGradientRecentWidth();
		const recentMargin = theme.getGradientRecentMargin();
		const recentWidthAndMargin = recentWidth + recentMargin;
		const inputLabelWidth = picker.theme.getInputLabelWidth();
		const inputWidth = recentWidth * recentColumn + recentMargin * (recentColumn - 1);
		const inputMargin = 5;
		const inputDirectionMargin = theme.getGradientDirectionMargin();
		const inputDirectionTexture = theme.getGradientDirectionTexture();
		const inputLeft = picker.x + picker.width + inputDirectionMargin;
		const inputDirection = new DInputReal({
			parent: this,
			x: inputLeft + inputLabelWidth + inputMargin,
			y: paddingTop,
			width: inputWidth - (inputLabelWidth + inputMargin) * 2,
			step: 1,
			image: {
				source: inputDirectionTexture,
				align: {
					with: DAlignWith.BORDER
				},
				margin: {
					horizontal: -inputDirectionTexture.width - inputMargin
				}
			},
			on: {
				change: (value: number) => {
					(this._value as any)._direction = value;
				}
			}
		});

		// Recent gradients
		const x0 = inputLeft;
		const y0 = inputDirection.y + inputDirection.height + inputDirectionMargin;
		if (DPickerColorGradient.RECENT_COLOR_GRADIENT == null) {
			DPickerColorGradient.RECENT_COLOR_GRADIENT = new DPickerColorGradientRecent(
				theme.getGradientRecents(),
				theme.getGradientRecentCount()
			);
		}
		this._recent = DPickerColorGradient.RECENT_COLOR_GRADIENT;
		const recent = this._recent;
		for (let i = 0, imax = recent.getCapacity(); i < imax; ++i) {
			const ix = i % recentColumn;
			const x = x0 + ix * recentWidthAndMargin;
			const iy = (i / recentColumn) | 0;
			const y = y0 + iy * recentWidthAndMargin;
			view.setRectangle(1 + i, x, y, recentWidth, recentWidth);
		}
		recent.on("change", (): void => {
			this.onRecentUpdate();
		});
		UtilPointerEvent.onClick(view, (e: InteractionEvent): void => {
			const lastHitIndex = view.getLastHitIndex();
			if (1 <= lastHitIndex) {
				this.onRecentClick(view.getData(lastHitIndex));
			}
		});

		// Points
		const data = new DColorGradientObservable();
		this._value = data;
		data.on("change", (): void => {
			this.updateAnchors();
			view.update();
		});
		data.on("selectionchange", (point: DColorGradientPoint): void => {
			this.onAnchorSelect(point);
		});
		data.on("directionchange", (value: number): void => {
			inputDirection.value = value;
		});
		view.setData(0, data);
		view.update();
		inputDirection.value = data.direction;
		this.updateAnchors();
		const selected = data.selected;
		if (selected != null) {
			this.onAnchorSelect(selected);
		}

		// Width
		if (options == null || options.width == null) {
			this.width =
				paddingLeft +
				gradientPointsWidth +
				gradientPointsMargin +
				picker.width +
				inputDirectionMargin +
				(recentColumn - 1) * recentMargin +
				recentColumn * recentWidth +
				paddingRight;
		}

		// Height
		if (options == null || options.height == null) {
			this.height = paddingTop + picker.height + paddingBottom;
		}
	}

	get value(): DColorGradientObservable {
		return this._value;
	}

	get recent(): DPickerColorGradientRecent {
		return this._recent;
	}

	protected onRecentClick(recentData: DColorGradient | null): void {
		const value = this._value;
		if (recentData != null) {
			value.fromObject(recentData);
		} else {
			value.reset();
		}
	}

	protected onRecentUpdate(): void {
		const recent = this._recent;
		const view = this._view;
		for (let i = 0, imax = recent.size(); i < imax; ++i) {
			view.setData(1 + i, recent.get(i));
		}
		view.update();
		DApplications.update(this);
	}

	protected toAnchorPosition(e: InteractionEvent): number {
		const local = this.toLocal(e.data.global, undefined, this._work);
		return Math.max(0, Math.min(1, (local.y - this.padding.getTop()) / this._picker.height));
	}

	protected onViewDown(e: InteractionEvent): void {
		this._value.addAt(this.toAnchorPosition(e));
		this.onAnchorDragStart();
	}

	protected onAnchorDown(e: InteractionEvent): void {
		const target = e.target;
		if (target instanceof Sprite) {
			const value = this._value;
			const index = this._anchors.indexOf(target);
			if (0 <= index && index < value.points.length) {
				value.points[index].selected = true;
				this.onAnchorDragStart();
			}
		}
	}

	protected onAnchorSelect(point: DColorGradientPoint): void {
		const picker = this._picker;
		picker.current.color = point.color;
		picker.current.alpha = point.alpha;
		picker.new.color = point.color;
		picker.new.alpha = point.alpha;
	}

	protected onAnchorColorChange(color: number): void {
		const value = this._value;
		if (value != null) {
			const selected = value.selected;
			if (selected != null) {
				selected.color = color;
			}
		}
	}

	protected onAnchorAlphaChange(alpha: number): void {
		const value = this._value;
		if (value != null) {
			const selected = value.selected;
			if (selected != null) {
				selected.alpha = alpha;
			}
		}
	}

	protected onAnchorDragStart(): void {
		const layer = DApplications.getLayer(this);
		if (layer) {
			const stage = layer.stage;
			stage.on(UtilPointerEvent.move, this._onAnchorMoveBound);
			stage.on(UtilPointerEvent.up, this._onAnchorUpBound);
		}
	}

	protected onAnchorMove(e: InteractionEvent): void {
		const value = this._value;
		if (value != null) {
			const selected = value.selected;
			if (selected != null) {
				selected.position = this.toAnchorPosition(e);
			}
		}
	}

	protected onAnchorUp(e: InteractionEvent): void {
		const layer = DApplications.getLayer(this);
		if (layer) {
			const stage = layer.stage;
			stage.off(UtilPointerEvent.move, this._onAnchorMoveBound);
			stage.off(UtilPointerEvent.up, this._onAnchorUpBound);
		}
	}

	protected updateAnchors(): void {
		const theme = this.theme;
		const anchorTexture = theme.getGradientAnchorTexture();
		const anchorOutlinedTexture = theme.getGradientAnchorOutlinedTexture();
		const gradientPointsWidth = theme.getGradientPointsWidth();

		const value = this._value;
		const pointSize = value.points.length;

		const anchors = this._anchors;
		const anchorSize = anchors.length;
		for (let i = anchorSize; i < pointSize; ++i) {
			const newAnchor = new Sprite(anchorTexture);
			newAnchor.anchor.set(0.5, 0.5);
			newAnchor.cursor = "pointer";
			newAnchor.interactive = true;
			newAnchor.on(UtilPointerEvent.down, this._onAnchorDownBound);
			anchors.push(newAnchor);
			this.addChild(newAnchor);
		}

		for (let i = anchorSize - 1; pointSize <= i; --i) {
			const oldAnchor = anchors[i];
			oldAnchor.off(UtilPointerEvent.down, this._onAnchorDownBound);
			oldAnchor.destroy();
		}
		anchors.length = pointSize;

		const y = this.padding.getTop();
		const right = this.padding.getLeft() + gradientPointsWidth;
		const height = this._picker.height;
		for (let i = 0; i < pointSize; ++i) {
			const point = value.points[i];
			const anchor = anchors[i];
			anchor.tint = point.color;
			anchor.position.set(right, y + height * point.position);
			anchor.texture = point.selected ? anchorOutlinedTexture : anchorTexture;
		}

		DApplications.update(this);
	}

	onKeyDown(e: KeyboardEvent): boolean {
		if (UtilKeyboardEvent.isDeleteKey(e)) {
			const value = this._value;
			if (value != null) {
				const selected = value.selected;
				if (selected != null) {
					value.remove(selected);
					super.onKeyDown(e);
					return true;
				}
			}
		}
		return super.onKeyDown(e);
	}

	protected getType(): string {
		return "DPickerColorGradient";
	}
}
