/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix } from "pixi.js";
import { EShape } from "./e-shape";
import { EShapeEditor } from "./e-shape-editor";
import { EShapeBase } from "./variant/e-shape-base";
import { toSizeNormalized } from "./variant/to-size-normalized";

export class EShapeTransforms {
	static prepare(shape: EShape): void {
		const editor = shape.editor || new EShapeEditor();
		shape.editor = editor;

		// Transform
		shape.updateTransform();
		const parent = shape.parent;
		if (parent instanceof EShapeBase) {
			parent.transform.internalTransform
				.copyTo(editor.internalTransformParentInverse)
				.invert();
		} else {
			editor.internalTransformParentInverse.identity();
		}
		shape.transform.internalTransform.copyTo(editor.internalTransform);

		// Rotation
		editor.rotation = shape.transform.rotation;

		// Size
		editor.size.copyFrom(shape.size);

		//
		shape.disallowOnTransformChange();
	}

	static finalize(shape: EShape): void {
		shape.allowOnTransformChange(true);
	}

	static apply(shape: EShape, transform: Matrix, keepSize: boolean): void {
		const editor = shape.editor;
		if (editor != null) {
			const newLocalTransform = editor.localTransform;
			editor.internalTransformParentInverse
				.copyTo(newLocalTransform)
				.append(transform)
				.append(editor.internalTransform);
			if (keepSize) {
				this.applyLocal(shape, newLocalTransform);
			} else {
				const size = editor.size;
				this.applyLocal(shape, newLocalTransform, size.x, size.y);
			}
		}
	}

	static applyLocal(shape: EShape, localTransform: Matrix, bx?: number, by?: number): void {
		shape.disallowUploadedUpdate();

		// Reconstruct the position, the rotation and the size
		const a = localTransform.a;
		const b = localTransform.b;
		const c = localTransform.c;
		const d = localTransform.d;
		const tx = localTransform.tx;
		const ty = localTransform.ty;

		// Rotation
		const transform = shape.transform;
		const rx = Math.atan2(-c, d); // rotation - skewX
		const ry = Math.atan2(+b, a); // rotation + skewY
		transform.rotation = (rx + ry) * 0.5; // Here, assumes `skewX` === `skewY`

		// Skew
		const skew = (ry - rx) * 0.5;
		transform.skew.set(skew, skew);

		// Position: Assumes the pivot is invariant.
		// tx = position.x - (a * px + c * py)
		// ty = position.y - (b * px + d * py)
		//
		// Thus,
		// position.x = tx + (a * px + c * py)
		// position.y = ty + (b * px + d * py)
		const pivot = transform.pivot;
		const px = pivot.x;
		const py = pivot.y;
		transform.position.set(tx + (a * px + c * py), ty + (b * px + d * py));

		// Scale
		if (bx != null && by != null) {
			const sx = Math.sqrt(a * a + b * b);
			const sy = Math.sqrt(c * c + d * d);
			shape.size.set(toSizeNormalized(bx * sx), toSizeNormalized(by * sy));
		}

		//
		shape.allowUploadedUpdate();
	}
}
