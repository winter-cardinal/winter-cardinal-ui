/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DChartCoordinateDirection } from "./d-chart-coordinate-direction";
import { DChartCoordinateContainerSub } from "./d-chart-coordinate-container-sub";
import {
	DChartCoordinateTransform,
	DChartCoordinateTransformOptions,
	DThemeChartCoordinateTransform
} from "./d-chart-coordinate-transform";
import { DChartCoordinateTransformMark } from "./d-chart-coordinate-transform-mark";
import { DThemes } from "./theme/d-themes";

export class DChartCoordinateTransformImpl<CHART extends DBase = DBase>
	implements DChartCoordinateTransform<CHART>
{
	protected _theme: DThemeChartCoordinateTransform;
	protected _id: number;
	protected _isTranslationEnabled?: boolean;
	protected _translate: number;
	protected _isScalingEnabled?: boolean;
	protected _scale: number;
	protected _itranslate: number;
	protected _iscale: number;

	constructor(options?: DChartCoordinateTransformOptions) {
		this._theme = this.toTheme(options);
		this._id = 0;
		this._isTranslationEnabled = options?.translation;
		this._translate = 0;
		this._isScalingEnabled = options?.scaling;
		this._scale = 1;
		this._itranslate = 0;
		this._iscale = 1;
	}

	get id(): number {
		return this._id;
	}

	get translate(): number {
		return this._translate;
	}

	set translate(translate: number) {
		this.set(translate);
	}

	get scale(): number {
		return this._scale;
	}

	set scale(scale: number) {
		this.set(undefined, scale);
	}

	bind(
		container: DChartCoordinateContainerSub<CHART>,
		direction: DChartCoordinateDirection
	): void {
		this.set(0, direction === DChartCoordinateDirection.X ? +1 : -1);
	}

	unbind(): void {
		// DO NOTHING
	}

	set(translate?: number, scale?: number): void {
		let isChanged = false;

		if (
			translate != null &&
			this._isTranslationEnabled !== false &&
			this._translate !== translate
		) {
			isChanged = true;
			this._translate = translate;
		}

		if (scale != null && this._isScalingEnabled !== false && this._scale !== scale) {
			isChanged = true;
			this._scale = scale;
		}

		if (isChanged) {
			this._id += 1;
			this._iscale = this._theme.isZero(this._scale) ? 0 : 1 / this._scale;
			this._itranslate = -this._translate * this._iscale;
		}
	}

	blend(ratio: number, mark: DChartCoordinateTransformMark): void {
		const ratioi = 1 - ratio;
		const newTranslate = mark.newTranslate * ratio + mark.oldTranslate * ratioi;
		const newScale = mark.newScale * ratio + mark.oldScale * ratioi;
		this.set(newTranslate, newScale);
	}

	map(value: number): number {
		return this._translate + this._scale * value;
	}

	mapAll(values: number[], ifrom: number, iend: number, stride: number, offset: number): void {
		const translate = this._translate;
		const scale = this._scale;
		for (let i = ifrom + offset; i < iend; i += stride) {
			values[i] = translate + scale * values[i];
		}
	}

	unmap(value: number): number {
		return this._itranslate + this._iscale * value;
	}

	unmapAll(values: number[], ifrom: number, iend: number, stride: number, offset: number): void {
		const itranslate = this._itranslate;
		const iscale = this._iscale;
		for (let i = ifrom + offset; i < iend; i += stride) {
			values[i] = itranslate + iscale * values[i];
		}
	}

	protected toTheme(options?: DChartCoordinateTransformOptions): DThemeChartCoordinateTransform {
		return (options && options.theme) || this.getThemeDefault();
	}

	protected getThemeDefault(): DThemeChartCoordinateTransform {
		return DThemes.getInstance().get(this.getType());
	}

	protected getType(): string {
		return "DChartCoordinateTransform";
	}
}
