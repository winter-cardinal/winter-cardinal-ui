/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../d-diagram-serialized";
import { isString } from "../util/is-string";
import { EShapeActionValueDeserializer } from "./action/e-shape-action-value-deserializer";
import { EShape } from "./e-shape";
import { EShapeDeserializers, EShapeOnDeserialized } from "./e-shape-deserializers";
import { EShapeImageElements } from "./e-shape-image-elements";
import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeSizes } from "./e-shape-sizes";
import { EShapeUuidMapping } from "./e-shape-uuid-mapping";
import { EShapeUuidMappingImpl } from "./e-shape-uuid-mapping-impl";
import { EShapeGradients } from "./variant/e-shape-gradients";

export class EShapeDeserializer {
	static toShape(
		item: DDiagramSerializedItem,
		manager: EShapeResourceManagerDeserialization
	): Promise<EShape> | EShape | null {
		const shapeDeserializer = EShapeDeserializers[item[0]];
		if (shapeDeserializer != null) {
			return shapeDeserializer(item, manager);
		}
		return null;
	}

	static deserialize<SHAPE extends EShape>(
		item: DDiagramSerializedItem,
		manager: EShapeResourceManagerDeserialization,
		result: SHAPE
	): Promise<SHAPE> | SHAPE {
		result.id = manager.resources[item[1]] || "";
		const transform = result.transform;
		transform.position.set(item[2], item[3]);
		transform.rotation = item[6];
		transform.skew.set(item[7], item[7]);
		transform.pivot.set(item[21], item[22]);
		result.size.set(EShapeSizes.toNormalized(item[4]), EShapeSizes.toNormalized(item[5]));
		result.fill.deserialize(item[8], manager);
		result.stroke.deserialize(item[9], manager);
		result.cursor = manager.resources[item[10]] || "";
		result.text.deserialize(item[11], manager);
		result.tag.deserialize(item[12], manager);
		result.radius = item[13];
		result.corner = item[14];
		const item23 = item[23];
		result.interactive = !!(item23 & 1);
		const state = result.state;
		state.isFocusable = !(item23 & 2);
		state.isActive = !!(item23 & 4);
		const item24 = item[24];
		result.shortcut = 0 <= item24 ? manager.resources[item24] : undefined;
		const item25 = item[25];
		result.title = 0 <= item25 ? manager.resources[item25] : undefined;
		const item26 = item[26];
		result.uuid = item26 != null ? item26 : 0;

		// Children
		let childrenPromise: Promise<SHAPE> | null = null;
		const childrenSerialized = item[20];
		if (0 < childrenSerialized.length) {
			const childrenOrPromises = [];
			for (let i = 0, imax = childrenSerialized.length; i < imax; ++i) {
				const childSerialized = childrenSerialized[i];
				const childOrPromise = EShapeDeserializer.toShape(childSerialized, manager);
				if (childOrPromise != null) {
					childrenOrPromises.push(childOrPromise);
				}
			}
			childrenPromise = Promise.all(childrenOrPromises).then((children: EShape[]) => {
				result.children = children;
				for (let i = 0, imax = children.length; i < imax; ++i) {
					children[i].parent = result;
				}
				result.onChildTransformChange();
				result.toDirty();
				return result;
			});
		}

		// Action
		const serializedActions = item[17];
		for (let i = 0, imax = serializedActions.length; i < imax; ++i) {
			result.action.add(
				EShapeActionValueDeserializer.deserialize(serializedActions[i], manager)
			);
		}

		// Gradient
		const gradientId = item[19];
		if (0 <= gradientId && gradientId < manager.resources.length) {
			const gradient = manager.resources[gradientId];
			if (isString(gradient)) {
				result.gradient = EShapeGradients.deserializeGradient(gradient);
			}
		}

		// Image
		let imagePromise: Promise<SHAPE> | null = null;
		const imageId = item[18];
		if (0 <= imageId && imageId < manager.resources.length) {
			const imageSrc = manager.resources[imageId];
			if (isString(imageSrc)) {
				imagePromise = EShapeImageElements.toImageElement(imageSrc).then((imageElement) => {
					result.image = imageElement;
					return result;
				});
			}
		}

		//
		if (childrenPromise != null) {
			if (imagePromise != null) {
				return Promise.all([childrenPromise, imagePromise]).then(() => {
					return result;
				});
			} else {
				return childrenPromise;
			}
		} else {
			if (imagePromise != null) {
				return imagePromise;
			} else {
				return result;
			}
		}
	}

	static deserializeAll(
		serializeds: DDiagramSerializedItem[],
		manager: EShapeResourceManagerDeserialization
	): Promise<EShape[]> | null {
		const shapes: Array<Promise<EShape> | EShape> = [];
		for (let i = 0, imax = serializeds.length; i < imax; ++i) {
			const serialized = serializeds[i];
			const shape = EShapeDeserializer.toShape(serialized, manager);
			if (shape == null) {
				if (0 < shapes.length) {
					Promise.all(shapes).then((resolved: EShape[]): void => {
						for (let j = 0, jmax = resolved.length; j < jmax; ++j) {
							resolved[j].destroy();
						}
					});
				}
				return null;
			}

			shapes.push(shape);
		}
		if (0 < shapes.length) {
			return Promise.all(shapes).then((resolved: EShape[]): EShape[] => {
				this.onDeserialized(
					serializeds,
					resolved,
					new EShapeUuidMappingImpl(resolved),
					manager
				);
				return resolved;
			});
		}
		return null;
	}

	static onDeserialized(
		serializeds: DDiagramSerializedItem[],
		shapes: EShape[],
		mapping: EShapeUuidMapping,
		manager: EShapeResourceManagerDeserialization
	): void {
		for (let i = 0, imax = serializeds.length; i < imax; ++i) {
			const serialized = serializeds[i];
			const shape = shapes[i];
			const onDeserialized = EShapeOnDeserialized[serialized[0]];
			if (onDeserialized) {
				onDeserialized(serialized, shape, mapping, manager);
			}
			this.onDeserialized(serialized[20], shape.children, mapping, manager);
		}
	}
}
