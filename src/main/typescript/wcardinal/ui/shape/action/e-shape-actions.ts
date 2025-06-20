/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DApplications } from "../../d-applications";
import { DDiagramBaseControllerOpenType } from "../../d-diagram-base-controller";
import { DDiagrams } from "../../d-diagrams";
import { EShape } from "../e-shape";
import { EShapeDataValueState } from "../e-shape-data-value-state";
import { EShapeEmbedded } from "../variant/e-shape-embedded";
import { EShapeActionOpenOpeners } from "./e-shape-action-open-openers";
import { isString } from "../../util/is-string";
import { DDiagram } from "../../d-diagram";
import { EShapeActionEnvironment } from "./e-shape-action-environment";
import { EShapes } from "./e-shapes";

export class EShapeActions {
	public static SHAPE: EShape | null = null;

	static getShape(): EShape | null {
		return EShapes.CURRENT;
	}

	static getDiagram(): DDiagram | null {
		return EShapeActions.toDiagram(EShapes.CURRENT);
	}

	static isDiagram(target: unknown): target is DDiagram {
		return target instanceof DDiagram;
	}

	static isEmbedded(target: unknown): target is EShapeEmbedded {
		return target instanceof EShapeEmbedded;
	}

	static toDiagram(shape?: EShape | null): DDiagram | null {
		let current: { parent: any } | null | undefined = shape;
		while (current != null) {
			if (this.isDiagram(current)) {
				return current;
			}
			current = current.parent;
		}
		return null;
	}

	static open(
		shape: EShape,
		type: DDiagramBaseControllerOpenType,
		target: unknown,
		inNewWindow: boolean,
		environment: EShapeActionEnvironment
	): void {
		const opener = EShapeActionOpenOpeners[type];
		if (opener != null) {
			const diagram = this.toDiagram(shape);
			if (diagram) {
				opener(target, inNewWindow, shape, diagram, environment);
			}
		} else if (isString(target)) {
			switch (type) {
				case DDiagramBaseControllerOpenType.DIAGRAM:
					const diagram = this.toDiagram(shape);
					if (diagram) {
						const controller = diagram.controller;
						if (controller) {
							controller.getByName(target).then((found): void => {
								diagram.set(DDiagrams.toSerialized(found));
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
			if (this.isDiagram(current)) {
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
		const diagram = this.toDiagram(shape);
		if (diagram) {
			return diagram.data.remote.set(id, value);
		}
		return false;
	}

	static emit(shape: EShape, name: string): void;
	static emit(shape: EShape, name: string, value: unknown, time: number): void;
	static emit(shape: EShape, name: string, value?: unknown, time?: number): void {
		const diagram = EShapeActions.toDiagram(shape);
		if (time === undefined) {
			shape.emit(name, shape);
			if (diagram) {
				diagram.shape.emit(name, shape);
			}
		} else {
			shape.emit(name, value, time, shape);
			if (diagram) {
				diagram.shape.emit(name, value, time, shape);
			}
		}
	}
}
