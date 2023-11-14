/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "./e-shape";
import { EShapeContainer } from "./e-shape-container";
import { EShapeSearch } from "./e-shape-search";

export class EShapeDeleter {
	private static EXCEPTIONS?: Set<EShape>;

	private static addAll(shapes: EShape[], result: Set<EShape>): Set<EShape> {
		for (let i = 0, imax = shapes.length; i < imax; ++i) {
			const shape = shapes[i];
			result.add(shape);
			this.addAll(shape.children, result);
		}
		return result;
	}

	static delete(
		parent: EShape | EShapeContainer,
		shapes?: EShape[],
		generateListOfDetachedShapes?: boolean
	): EShape[] | null {
		const children = parent.children;
		const length = children.length;

		// Update indices
		const exceptions = (EShapeDeleter.EXCEPTIONS ??= new Set<EShape>());
		for (let i = 0; i < length; ++i) {
			const child = children[i];
			if (child.selected) {
				child.index = length + i;
				exceptions.add(child);
				this.addAll(child.children, exceptions);
			} else {
				child.index = i;
			}
		}

		// Sort
		children.sort(EShapeSearch.COMPARATOR_INDEX);

		// Detach
		if (generateListOfDetachedShapes === true) {
			for (let i = length - 1; 0 <= i; --i) {
				const child = children[i];
				if (child.selected) {
					child.index -= length;
					child.parent = null;
					child.selected = false;
					child.uploaded = undefined;
					child.onDetach(exceptions);
				} else {
					exceptions.clear();
					const size = children.length - (i + 1);
					if (0 < size) {
						const result = children.splice(i + 1, size);
						if (shapes != null) {
							shapes.length = 0;
						}
						parent.onChildTransformChange();
						parent.toDirty();
						return result;
					} else {
						if (shapes != null) {
							shapes.length = 0;
						}
						return null;
					}
				}
			}
			exceptions.clear();
			if (0 < children.length) {
				const result = children.splice(0, children.length);
				if (shapes != null) {
					shapes.length = 0;
				}
				parent.onChildTransformChange();
				parent.toDirty();
				return result;
			} else {
				if (shapes != null) {
					shapes.length = 0;
				}
				return null;
			}
		} else {
			for (let i = length - 1; 0 <= i; --i) {
				const child = children[i];
				if (child.selected) {
					child.parent = null;
					child.selected = false;
					child.uploaded = undefined;
					child.onDetach(exceptions);
				} else {
					exceptions.clear();
					children.length = i + 1;
					if (shapes != null) {
						shapes.length = 0;
					}
					parent.onChildTransformChange();
					parent.toDirty();
					return null;
				}
			}
			exceptions.clear();
			if (0 < children.length) {
				children.length = 0;
				if (shapes != null) {
					shapes.length = 0;
				}
				parent.onChildTransformChange();
				parent.toDirty();
			} else {
				if (shapes != null) {
					shapes.length = 0;
				}
			}
			return null;
		}
	}
}
