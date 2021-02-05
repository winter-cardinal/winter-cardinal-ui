/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntime } from "./e-shape-action-runtime";
import { EShapeActionValueBlinkType } from "./e-shape-action-value-blink-type";
import { EShapeActionValueChangeColorTarget } from "./e-shape-action-value-change-color-target";
import { EShapeActionValueChangeColorType } from "./e-shape-action-value-change-color-type";
import { EShapeActionValueChangeTextType } from "./e-shape-action-value-change-text-type";
import { EShapeActionValueMiscType } from "./e-shape-action-value-misc-type";
import { EShapeActionValueOnInputAction } from "./e-shape-action-value-on-input-action";
import { EShapeActionValueOpenType } from "./e-shape-action-value-open-type";
import { EShapeActionValueShowHideType } from "./e-shape-action-value-show-hide-type";
import { EShapeActionValueTransformMoveType } from "./e-shape-action-value-transform-move-type";
import { EShapeActionValueTransformResizeType } from "./e-shape-action-value-transform-resize-type";
import { EShapeActionValueTransformRotateType } from "./e-shape-action-value-transform-rotate-type";
import { EShapeActionValueTransformType } from "./e-shape-action-value-transform-type";
import { EShapeActionValueType } from "./e-shape-action-value-type";

export interface EThemeShapeActionValue {
	toLabel( target: EShapeActionValue ): string;
	toTypeLabel( type: EShapeActionValueType ): string;
	toConditionLabel( condition: string ): string;
	toBlinkTypeLabel( type: EShapeActionValueBlinkType ): string;
	toShowHideTypeLabel( type: EShapeActionValueShowHideType ): string;
	toTransformTypeLabel( type: EShapeActionValueTransformType ): string;
	toTransformRotateTypeLabel( type: EShapeActionValueTransformRotateType ): string;
	toTransformMoveTypeLabel( type: EShapeActionValueTransformMoveType ): string;
	toTransformResizeTypeLabel( type: EShapeActionValueTransformResizeType ): string;
	toChangeColorTypeLabel( type: EShapeActionValueChangeColorType ): string;
	toChangeColorTargetLabel( type: EShapeActionValueChangeColorTarget ): string;
	toChangeTextTypeLabel( type: EShapeActionValueChangeTextType ): string;
	toOpenTypeLabel( type: EShapeActionValueOpenType ): string;
	toMiscTypeLabel( type: EShapeActionValueMiscType ): string;
	toOnInputActionLabel( type: EShapeActionValueOnInputAction ): string;
}

export interface EShapeActionValue {
	readonly type: EShapeActionValueType;
	readonly condition: string;

	isEquals( value: EShapeActionValue ): boolean;
	toRuntime(): EShapeActionRuntime;
	toLabel(): string;
	serialize( manager: EShapeResourceManagerSerialization ): number;
}
