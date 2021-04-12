/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DeepPartial } from "../../util/deep-partial";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeText, EShapeTextLike, EShapeTextStyle, EShapeTextWeight } from "../e-shape-text";
import { EShapeTextDirection } from "../e-shape-text-direction";
import { EShapeGroupTextAlignViewer } from "./e-shape-group-text-align-viewer";
import { EShapeGroupTextOffsetViewer } from "./e-shape-group-text-offset-viewer";
import { EShapeGroupTextOutlineViewer } from "./e-shape-group-text-outline-viewer";
import { EShapeGroupTextPaddingViewer } from "./e-shape-group-text-padding-viewer";
import { EShapeGroupTextSpacingViewer } from "./e-shape-group-text-spacing-viewer";

export class EShapeGroupTextViewer implements EShapeText {
	align: EShapeGroupTextAlignViewer;
	offset: EShapeGroupTextOffsetViewer;
	outline: EShapeGroupTextOutlineViewer;
	spacing: EShapeGroupTextSpacingViewer;
	padding: EShapeGroupTextPaddingViewer;

	constructor() {
		this.align = new EShapeGroupTextAlignViewer();
		this.offset = new EShapeGroupTextOffsetViewer();
		this.outline = new EShapeGroupTextOutlineViewer();
		this.spacing = new EShapeGroupTextSpacingViewer();
		this.padding = new EShapeGroupTextPaddingViewer();
	}

	get enable(): boolean {
		return true;
	}

	set enable(enable: boolean) {
		// DO NOTHING
	}

	get value(): string {
		return "";
	}

	set value(value: string) {
		// DO NOTHING
	}

	get color(): number {
		return 0x000000;
	}

	set color(color: number) {
		// DO NOTHING
	}

	get alpha(): number {
		return 1.0;
	}

	set alpha(alpha: number) {
		// DO NOTHING
	}

	get family(): string {
		return "auto";
	}

	set family(family: string) {
		// DO NOTHING
	}

	get size(): number {
		return 24;
	}

	set size(size: number) {
		// DO NOTHING
	}

	get weight(): EShapeTextWeight {
		return EShapeTextWeight.NORMAL;
	}

	set weight(weight: EShapeTextWeight) {
		// DO NOTHING
	}

	get style(): EShapeTextStyle {
		return EShapeTextStyle.NORMAL;
	}

	set style(style: EShapeTextStyle) {
		// DO NOTHING
	}

	get direction(): number {
		return EShapeTextDirection.LEFT_TO_RIGHT;
	}

	set direction(direction: number) {
		// DO NOTHING
	}

	get clipping(): boolean {
		return false;
	}

	set clipping(clipping: boolean) {
		// DO NOTHING
	}

	copy(target?: DeepPartial<EShapeTextLike>): this {
		return this;
	}

	set(
		value?: string,
		color?: number,
		alpha?: number,
		family?: string,
		size?: number,
		weight?: EShapeTextWeight,
		style?: EShapeTextStyle,
		direction?: EShapeTextDirection,
		clipping?: boolean
	): this {
		return this;
	}

	toObject(): EShapeTextLike {
		return {
			value: "",
			color: 0x000000,
			alpha: 1.0,
			family: "auto",
			size: 24,
			weight: EShapeTextWeight.NORMAL,
			align: this.align.toObject(),
			offset: this.offset.toObject(),
			style: EShapeTextStyle.NORMAL,
			outline: this.outline.toObject(),
			spacing: this.spacing.toObject(),
			direction: EShapeTextDirection.LEFT_TO_RIGHT,
			padding: this.padding.toObject(),
			clipping: false
		};
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		return -1;
	}

	deserialize(target: number, manager: EShapeResourceManagerDeserialization): void {
		//
	}
}
