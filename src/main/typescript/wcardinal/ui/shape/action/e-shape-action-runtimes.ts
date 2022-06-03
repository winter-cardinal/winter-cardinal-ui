/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DApplications } from "../../d-applications";
import { DCanvasContainer } from "../../d-canvas-container";
import {
	DDiagramBaseController,
	DDiagramBaseControllerOpenType
} from "../../d-diagram-base-controller";
import { DDiagramSerialized } from "../../d-diagram-serialized";
import { DDiagrams } from "../../d-diagrams";
import { EShape } from "../e-shape";
import { EShapeType } from "../e-shape-type";
import { EShapeBase } from "../variant/e-shape-base";

export interface EShapeActionRuntimeContainerDataScoped {
	set(id: string, value: unknown, time: number): boolean;
}

export interface EShapeActionRuntimeContainerData {
	readonly remote: EShapeActionRuntimeContainerDataScoped;
	readonly protected: EShapeActionRuntimeContainerDataScoped;

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
	readonly controller: DDiagramBaseController | null;

	set(serialized: DDiagramSerialized | null): void;
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

	static open(
		shape: EShape,
		type: DDiagramBaseControllerOpenType,
		target: string,
		inNewWindow: boolean
	): void {
		const container = this.toContainer(shape);
		if (container) {
			const controller = container.controller;
			if (controller) {
				if (controller.open != null) {
					controller.open(type, target, inNewWindow);
				} else {
					switch (type) {
						case DDiagramBaseControllerOpenType.DIAGRAM:
							controller.getByName(target).then((found): void => {
								container.set(DDiagrams.toSerialized(found));
							});
							break;
						case DDiagramBaseControllerOpenType.PAGE:
							if (inNewWindow) {
								window.open(target);
							} else {
								window.location.href = target;
							}
							break;
					}
				}
			}
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
					if (current.data.protected.set(id, value, time)) {
						DApplications.update(current);
						return true;
					} else {
						if (current.data.set(id, value, time)) {
							DApplications.update(current);
							return true;
						}
					}
					return false;
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
