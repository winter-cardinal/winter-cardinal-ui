/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { isArray } from "../../util/is-array";
import { isNumber } from "../../util/is-number";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeActionValue } from "./e-shape-action-value";
import {
	EShapeActionValueBlink,
	EShapeActionValueBlinkSerialized
} from "./e-shape-action-value-blink";
import {
	EShapeActionValueChangeColor,
	EShapeActionValueChangeColorSerialized,
	EShapeActionValueChangeColorSerializedLegacy
} from "./e-shape-action-value-change-color";
import {
	EShapeActionValueChangeColorBrightness,
	EShapeActionValueChangeColorBrightnessSerialized,
	EShapeActionValueChangeColorBrightnessSerializedLegacy
} from "./e-shape-action-value-change-color-brightness";
import {
	EShapeActionValueChangeColorCode,
	EShapeActionValueChangeColorCodeSerialized,
	EShapeActionValueChangeColorCodeSerializedLegacy
} from "./e-shape-action-value-change-color-code";
import { EShapeActionValueChangeColorTarget } from "./e-shape-action-value-change-color-target";
import {
	EShapeActionValueChangeCursor,
	EShapeActionValueChangeCursorSerialized
} from "./e-shape-action-value-change-cursor";
import {
	EShapeActionValueChangeText,
	EShapeActionValueChangeTextSerialized
} from "./e-shape-action-value-change-text";
import {
	EShapeActionValueEmitEvent,
	EShapeActionValueEmitEventSerialized
} from "./e-shape-action-value-emit-event";
import {
	EShapeActionValueMisc,
	EShapeActionValueMiscSerialized
} from "./e-shape-action-value-misc";
import {
	EShapeActionValueMiscGesture,
	EShapeActionValueMiscGestureSerialized
} from "./e-shape-action-value-misc-gesture";
import {
	EShapeActionValueMiscLayerGesture,
	EShapeActionValueMiscLayerGestureSerialized
} from "./e-shape-action-value-misc-layer-gesture";
import {
	EShapeActionValueMiscLayerShowHide,
	EShapeActionValueMiscLayerShowHideSerialized
} from "./e-shape-action-value-misc-layer-show-hide";
import { EShapeActionValueMiscType } from "./e-shape-action-value-misc-type";
import {
	EShapeActionValueOpen,
	EShapeActionValueOpenSerialized
} from "./e-shape-action-value-open";
import {
	EShapeActionValueShowHide,
	EShapeActionValueShowHideSerialized
} from "./e-shape-action-value-show-hide";
import { EShapeActionValueShowHideType } from "./e-shape-action-value-show-hide-type";
import {
	EShapeActionValueTransformMove,
	EShapeActionValueTransformMoveSerialized
} from "./e-shape-action-value-transform-move";
import {
	EShapeActionValueTransformResize,
	EShapeActionValueTransformResizeSerialized
} from "./e-shape-action-value-transform-resize";
import {
	EShapeActionValueTransformRotate,
	EShapeActionValueTransformRotateSerialized
} from "./e-shape-action-value-transform-rotate";
import { EShapeActionValueTransformType } from "./e-shape-action-value-transform-type";
import { EShapeActionValueType } from "./e-shape-action-value-type";

export type EShapeActionValueSerialized =
	| EShapeActionValueShowHideSerialized
	| EShapeActionValueBlinkSerialized
	| EShapeActionValueBlinkSerialized
	| EShapeActionValueChangeColorSerialized
	| EShapeActionValueChangeColorSerializedLegacy
	| EShapeActionValueChangeColorCodeSerialized
	| EShapeActionValueChangeColorCodeSerializedLegacy
	| EShapeActionValueChangeColorBrightnessSerialized
	| EShapeActionValueChangeColorBrightnessSerializedLegacy
	| EShapeActionValueChangeTextSerialized
	| EShapeActionValueChangeCursorSerialized
	| EShapeActionValueEmitEventSerialized
	| EShapeActionValueOpenSerialized
	| EShapeActionValueTransformMoveSerialized
	| EShapeActionValueTransformResizeSerialized
	| EShapeActionValueTransformRotateSerialized
	| EShapeActionValueMiscSerialized
	| EShapeActionValueMiscGestureSerialized
	| EShapeActionValueMiscLayerGestureSerialized
	| EShapeActionValueMiscLayerShowHideSerialized;

export class EShapeActionValueDeserializer {
	static toSerialized(resource: string): EShapeActionValueSerialized | null {
		try {
			const parsed = JSON.parse(resource);
			if (isArray(parsed)) {
				for (let i = 0, imax = parsed.length; i < imax; ++i) {
					if (!isNumber(parsed[i])) {
						return null;
					}
				}
				if (2 <= parsed.length) {
					return parsed as EShapeActionValueSerialized;
				}
			}
			return null;
		} catch (e) {
			return null;
		}
	}

	static deserialize(
		id: number,
		manager: EShapeResourceManagerDeserialization
	): EShapeActionValue {
		const action = manager.getAction(id);
		if (action != null) {
			return action;
		}

		const resources = manager.resources;
		const resource = resources[id];
		if (resource != null) {
			const serialized = this.toSerialized(resource);
			if (serialized != null) {
				switch (serialized[0]) {
					case EShapeActionValueType.SHOW_HIDE:
						return EShapeActionValueShowHide.deserialize(serialized, manager);
					case EShapeActionValueType.BLINK:
						return EShapeActionValueBlink.deserialize(serialized, manager);
					case EShapeActionValueType.CHANGE_COLOR:
					case EShapeActionValueType.CHANGE_COLOR_LEGACY:
						switch (serialized[3]) {
							case EShapeActionValueChangeColorTarget.COLOR_AND_ALPHA:
							case EShapeActionValueChangeColorTarget.COLOR:
							case EShapeActionValueChangeColorTarget.ALPHA:
								return EShapeActionValueChangeColor.deserialize(
									serialized,
									manager
								);
							case EShapeActionValueChangeColorTarget.CODE:
								return EShapeActionValueChangeColorCode.deserialize(
									serialized,
									manager
								);
							case EShapeActionValueChangeColorTarget.BRIGHTNESS:
								return EShapeActionValueChangeColorBrightness.deserialize(
									serialized,
									manager
								);
						}
						break;
					case EShapeActionValueType.CHANGE_TEXT:
						return EShapeActionValueChangeText.deserialize(serialized, manager);
					case EShapeActionValueType.CHANGE_CURSOR:
						return EShapeActionValueChangeCursor.deserialize(serialized, manager);
					case EShapeActionValueType.EMIT_EVENT:
						return EShapeActionValueEmitEvent.deserialize(serialized, manager);
					case EShapeActionValueType.OPEN:
						return EShapeActionValueOpen.deserialize(serialized, manager);
					case EShapeActionValueType.TRANSFORM:
						switch (serialized[2]) {
							case EShapeActionValueTransformType.MOVE:
								return EShapeActionValueTransformMove.deserialize(
									serialized,
									manager
								);
							case EShapeActionValueTransformType.RESIZE:
								return EShapeActionValueTransformResize.deserialize(
									serialized,
									manager
								);
							case EShapeActionValueTransformType.ROTATE:
								return EShapeActionValueTransformRotate.deserialize(
									serialized,
									manager
								);
						}
						break;
					case EShapeActionValueType.MISC:
						switch (serialized[2]) {
							case EShapeActionValueMiscType.GESTURE:
								return EShapeActionValueMiscGesture.deserialize(
									serialized,
									manager
								);
							case EShapeActionValueMiscType.LAYER_SHOW_HIDE:
								return EShapeActionValueMiscLayerShowHide.deserialize(
									serialized,
									manager
								);
							case EShapeActionValueMiscType.LAYER_GESTURE:
								return EShapeActionValueMiscLayerGesture.deserialize(
									serialized,
									manager
								);
							default:
								return EShapeActionValueMisc.deserialize(serialized, manager);
						}
				}
			}
		}
		return new EShapeActionValueShowHide(EShapeActionValueShowHideType.SHOW, "");
	}
}
