/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DApplications } from "../../d-applications";
import { DCanvasContainer } from "../../d-canvas-container";
import { EShape } from "../e-shape";
import { EShapeType } from "../e-shape-type";
import { EShapeBase } from "../variant/e-shape-base";

export interface EShapeActionRuntimeContainerDataRemote {
	set(id: string, value: unknown, time: number): boolean;
}

export interface EShapeActionRuntimeContainerData {
	readonly remote: EShapeActionRuntimeContainerDataRemote;

	set(
		id: string,
		value: unknown,
		time?: number,
		from?: number | null,
		to?: number | null
	): boolean;
}

export interface EShapeActionRuntimeContainerShape {
	emit(name: string, ...args: unknown[]): void;
}

export interface EShapeActionRuntimeContainer extends DCanvasContainer {
	readonly shape: EShapeActionRuntimeContainerShape;
	readonly data: EShapeActionRuntimeContainerData;

	openByName(target: string): void;
}

export class EShapeActionRuntimes {
	static isContainer(target: unknown): target is EShapeActionRuntimeContainer {
		return target != null && target instanceof DCanvasContainer;
	}

	static isEmbedded(target: unknown): target is EShape {
		return (
			target != null && target instanceof EShapeBase && target.type === EShapeType.EMBEDDED
		);
	}

	static toContainer(shape?: EShape | null): EShapeActionRuntimeContainer | null {
		let current: { parent: any } | null | undefined = shape;
		while (current != null) {
			if (this.isContainer(current)) {
				return current;
			}
			current = current.parent;
		}
		return null;
	}

	static open(shape: EShape, target: string): void {
		const container = this.toContainer(shape);
		if (container) {
			container.openByName(target);
		}
	}

	static write(
		shape: EShape,
		id: string,
		value: unknown,
		time: number,
		remote: boolean
	): boolean {
		if (remote) {
			const container = this.toContainer(shape);
			if (container) {
				return container.data.remote.set(id, value, time);
			}
		} else {
			let current: { parent: any } | null | undefined = shape;
			while (current != null) {
				if (this.isContainer(current)) {
					current.data.set(id, value, time);
					DApplications.update(current);
					return true;
				} else if (this.isEmbedded(current)) {
					if (current.data.getPrivate()?.set(id, value, time)) {
						DApplications.update(current);
						return true;
					}
				}
				current = current.parent;
			}
		}
		return false;
	}

	static emit(shape: EShape, name: string): void;
	static emit(shape: EShape, name: string, value: unknown, time: number): void;
	static emit(shape: EShape, name: string, value?: unknown, time?: number): void {
		const container = EShapeActionRuntimes.toContainer(shape);
		if (time === undefined) {
			shape.emit(name, shape);
			if (container) {
				container.shape.emit(name, shape);
			}
		} else {
			shape.emit(name, value, time, shape);
			if (container) {
				container.shape.emit(name, value, time, shape);
			}
		}
	}
}
