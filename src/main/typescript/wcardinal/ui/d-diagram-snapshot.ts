/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBase } from "./d-base";
import { DOnOptions } from "./d-on-options";
import { DView } from "./d-view";
import { isString } from "./util/is-string";
import { UtilExtract } from "./util/util-extract";

export interface DDiagramSnapshotParent<CANVAS> {
	canvas: CANVAS | null;
	view: DView;
}

export interface DDiagramSnapshotEvents<CANVAS, EMITTER> {
	/**
	 * Triggered before taking a snapshot.
	 *
	 * @param canvas a canvas
	 * @param emitter an emitter
	 */
	taking(canvas: CANVAS, emitter: EMITTER): void;

	/**
	 * Triggered when a snapshot is taken successfully or when failed to take.
	 *
	 * @param canvas a canvas
	 * @param reason Null if succeeded. Otherwise, a string representing a reason why failed.
	 * @param emitter an emitter
	 */
	took(canvas: CANVAS, reason: string | null, emitter: EMITTER): void;
}

export interface DDiagramSnapshotOnOptions<CANVAS, EMITTER>
	extends Partial<DDiagramSnapshotEvents<CANVAS, EMITTER>>,
		DOnOptions {}

export interface DDiagramSnapshotOptions<CANVAS, EMITTER = any> {
	on?: DDiagramSnapshotOnOptions<CANVAS, EMITTER>;
}

export class DDiagramSnapshot<CANVAS extends DBase = DBase> extends utils.EventEmitter {
	protected _parent: DDiagramSnapshotParent<CANVAS>;

	constructor(parent: DDiagramSnapshotParent<CANVAS>, options?: DDiagramSnapshotOptions<CANVAS>) {
		super();
		this._parent = parent;

		const on = options?.on;
		if (on) {
			for (const name in on) {
				const handler = on[name];
				if (handler) {
					this.on(name, handler);
				}
			}
		}
	}

	/**
	 * Creates a snapshot.
	 *
	 * @param size a maximum image size
	 * @returns an URL of a created image or undefined
	 */
	createAsUrl(size?: number | null): string | undefined {
		return this.create(size, (canvas) => {
			return UtilExtract.base64({ target: canvas });
		});
	}

	/**
	 * Creates and downloads a snapshot.
	 *
	 * @param filename a filename
	 */
	createAsFile(filename: string): void;

	/**
	 * Creates and downloads a snapshot.
	 *
	 * @param size a maximum image size
	 * @param filename a filename
	 */
	createAsFile(size: number, filename: string): void;
	createAsFile(sizeOrFilename: number | string | null, filename?: string): void {
		if (isString(sizeOrFilename)) {
			this.create(undefined, (canvas) => {
				return UtilExtract.file({ target: canvas, filename: sizeOrFilename });
			});
		} else {
			this.create(sizeOrFilename, (canvas) => {
				return UtilExtract.file({ target: canvas, filename: filename! });
			});
		}
	}

	create<DATA>(
		size: number | null | undefined,
		extractor: (canvas: CANVAS) => DATA
	): DATA | undefined {
		const parent = this._parent;
		const canvas = parent.canvas;
		if (canvas) {
			const view = parent.view;
			const viewPosition = view.position;
			const viewScale = view.scale;

			const oldPositionX = viewPosition.x;
			const oldPositionY = viewPosition.y;
			const oldScaleX = viewScale.x;
			const oldScaleY = viewScale.y;

			const newScale: number =
				size == null
					? 1
					: size /
					  DApplications.getResolution(canvas) /
					  Math.max(canvas.width, canvas.height);

			view.transform(0, 0, newScale, newScale, 0);
			this.emit("taking", canvas, this);
			const result = extractor(canvas);
			this.emit("took", canvas, null, this);
			view.transform(oldPositionX, oldPositionY, oldScaleX, oldScaleY, 0);
			return result;
		}
	}
}
