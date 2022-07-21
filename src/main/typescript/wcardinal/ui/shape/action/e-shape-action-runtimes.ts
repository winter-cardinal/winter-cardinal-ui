/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DApplications } from "../../d-applications";
import { DCanvasContainer } from "../../d-canvas-container";
import {
	DDiagramBaseController,
	DDiagramBaseControllerOpenType
} from "../../d-diagram-base-controller";
import { DDiagramData } from "../../d-diagram-data";
import { DDiagramSerialized } from "../../d-diagram-serialized";
import { DDiagrams } from "../../d-diagrams";
import { EShape } from "../e-shape";
import { EShapeDataValueState } from "../e-shape-data-value-state";
import { EShapeEmbedded } from "../variant/e-shape-embedded";
import { EShapeActionOpenOpeners } from "./e-shape-action-open-openers";

export interface EShapeActionRuntimeContainer extends DCanvasContainer {
	readonly shape: utils.EventEmitter;
	readonly data: DDiagramData;
	readonly controller: DDiagramBaseController | null;

	set(serialized: DDiagramSerialized | null): void;
}

export class EShapeActionRuntimes {
	static isContainer(target: unknown): target is EShapeActionRuntimeContainer {
		return target instanceof DCanvasContainer;
	}

	static isEmbedded(target: unknown): target is EShapeEmbedded {
		return target instanceof EShapeEmbedded;
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
		const opener = EShapeActionOpenOpeners[type];
		if (opener != null) {
			opener(target, inNewWindow, shape);
		} else {
			switch (type) {
				case DDiagramBaseControllerOpenType.DIAGRAM:
					const container = this.toContainer(shape);
					if (container) {
						const controller = container.controller;
						if (controller) {
							controller.getByName(target).then((found): void => {
								container.set(DDiagrams.toSerialized(found));
							});
						}
					}
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

	static writeLocal(
		shape: EShape,
		id: string,
		value: unknown,
		time: number,
		state: EShapeDataValueState = EShapeDataValueState.FOUND
	): boolean {
		let current: { parent: any } | null | undefined = shape;
		while (current != null) {
			if (this.isContainer(current)) {
				if (current.data.private.set(id, value, time, state)) {
					DApplications.update(current);
					return true;
				} else if (current.data.protected.set(id, value, time, state)) {
					DApplications.update(current);
					return true;
				} else {
					if (current.data.set(id, value, time, state)) {
						DApplications.update(current);
						return true;
					}
				}
				return false;
			} else if (this.isEmbedded(current)) {
				if (current.data.getPrivate()?.set(id, value, time, state)) {
					DApplications.update(current);
					return true;
				}
			}
			current = current.parent;
		}
		return false;
	}

	static writeRemote(shape: EShape, id: string, value: unknown): boolean {
		const container = this.toContainer(shape);
		if (container) {
			return container.data.remote.set(id, value);
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
