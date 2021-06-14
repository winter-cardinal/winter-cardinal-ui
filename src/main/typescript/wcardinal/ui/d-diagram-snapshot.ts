/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBase } from "./d-base";
import { DBaseSnippetContainer } from "./d-base-snippet-container";
import { DOnOptions } from "./d-on-options";
import { DView } from "./d-view";
import { EShapeContainer } from "./shape";
import { isNumber } from "./util";
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

export interface DDiagramSnapshotCanvasSnap {
	container: EShapeContainer;
}

export interface DDiagramSnapshotCanvas extends DBase {
	snap?: DDiagramSnapshotCanvasSnap | null;
}

export interface DDiagramSnapshotOnOptions<CANVAS, EMITTER>
	extends Partial<DDiagramSnapshotEvents<CANVAS, EMITTER>>,
		DOnOptions {}

/**
 * Options to eliminate the snap grid, the snap targets and the canvas background from a snapshot.
 */
export interface DDiagramSnapshotCleanupOptions {
	snap?: boolean;
	background?: boolean;
}

export interface DDiagramSnapshotCreateAsUrlOptions {
	size?: number | null;
	cleanup?: boolean | DDiagramSnapshotCleanupOptions;
}

export interface DDiagramSnapshotCreateAsFileOptions {
	size?: number | null;
	filename: string;
	cleanup?: boolean | DDiagramSnapshotCleanupOptions;
}

export interface DDiagramSnapshotCreateOptions<CANVAS, DATA> {
	size?: number | null;
	cleanup?: boolean | DDiagramSnapshotCleanupOptions;
	extractor: (canvas: CANVAS) => DATA;
}

export interface DDiagramSnapshotOptions<CANVAS, EMITTER = any> {
	on?: DDiagramSnapshotOnOptions<CANVAS, EMITTER>;
}

export class DDiagramSnapshot<
	CANVAS extends DDiagramSnapshotCanvas = DDiagramSnapshotCanvas
> extends utils.EventEmitter {
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
	createAsUrl(size?: number | null): string | undefined;

	/**
	 * Creates a snapshot.
	 *
	 * @param options options
	 * @returns an URL of a created image or undefined
	 */
	createAsUrl(options: DDiagramSnapshotCreateAsUrlOptions): string | undefined;

	createAsUrl(
		sizeOrOptions?: number | null | DDiagramSnapshotCreateAsUrlOptions
	): string | undefined {
		if (sizeOrOptions == null || isNumber(sizeOrOptions)) {
			return this.create({
				size: sizeOrOptions,
				extractor: (canvas: CANVAS): string => {
					return UtilExtract.base64({ target: canvas });
				}
			});
		} else {
			return this.create({
				size: sizeOrOptions.size,
				cleanup: sizeOrOptions.cleanup,
				extractor: (canvas: CANVAS): string => {
					return UtilExtract.base64({ target: canvas });
				}
			});
		}
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
	createAsFile(size: number | null, filename: string): void;

	/**
	 * Creates and downloads a snapshot.
	 *
	 * @param options options
	 */
	createAsFile(options: DDiagramSnapshotCreateAsFileOptions): void;

	createAsFile(
		sizeOrFilenameOrOptions: number | string | null | DDiagramSnapshotCreateAsFileOptions,
		filename?: string
	): void {
		if (isString(sizeOrFilenameOrOptions)) {
			this.create({
				extractor: (canvas): void => {
					UtilExtract.file({ target: canvas, filename: sizeOrFilenameOrOptions });
				}
			});
		} else if (sizeOrFilenameOrOptions === null || isNumber(sizeOrFilenameOrOptions)) {
			this.create({
				size: sizeOrFilenameOrOptions,
				extractor: (canvas): void => {
					UtilExtract.file({ target: canvas, filename: filename! });
				}
			});
		} else {
			this.create({
				size: sizeOrFilenameOrOptions.size,
				cleanup: sizeOrFilenameOrOptions.cleanup,
				extractor: (canvas): void => {
					UtilExtract.file({
						target: canvas,
						filename: sizeOrFilenameOrOptions.filename
					});
				}
			});
		}
	}

	protected toScale(size: number | null | undefined, canvas: CANVAS): number {
		if (size == null) {
			return 1;
		}
		return size / DApplications.getResolution(canvas) / Math.max(canvas.width, canvas.height);
	}

	protected toCleanupSnap(options?: DDiagramSnapshotCreateOptions<CANVAS, unknown>): boolean {
		if (options == null) {
			return true;
		}
		const cleanup = options.cleanup;
		if (cleanup == null || cleanup === true) {
			return true;
		}
		return cleanup !== false && cleanup.snap !== false;
	}

	protected toCleanupBackground(
		options?: DDiagramSnapshotCreateOptions<CANVAS, unknown>
	): boolean {
		if (options == null) {
			return false;
		}
		const cleanup = options.cleanup;
		if (cleanup == null || cleanup === false) {
			return false;
		}
		return cleanup === true || cleanup.background === true;
	}

	create<DATA>(options: DDiagramSnapshotCreateOptions<CANVAS, DATA>): DATA | undefined {
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

			const newScale: number = this.toScale(options.size, canvas);
			view.transform(0, 0, newScale, newScale, 0);

			// Turns off the snap grid and targets
			let container: EShapeContainer | undefined;
			if (this.toCleanupSnap(options) && "snap" in canvas) {
				const snap = canvas.snap;
				if (snap != null) {
					container = snap.container;
					if (container.renderable) {
						container.renderable = false;
					} else {
						container = undefined;
					}
				}
			}

			// Turns off the canvas snippets
			let snippet: DBaseSnippetContainer | undefined;
			if (this.toCleanupBackground(options)) {
				snippet = canvas.snippet;
				if (snippet.renderable) {
					snippet.renderable = false;
				} else {
					snippet = undefined;
				}
			}

			// Extracts
			this.emit("taking", canvas, this);
			const result = options.extractor(canvas);
			this.emit("took", canvas, null, this);

			// Turn on the canvas snippets
			if (snippet) {
				snippet.renderable = true;
			}

			// Turn on the snap grid and targets
			if (container != null) {
				container.renderable = true;
			}

			view.transform(oldPositionX, oldPositionY, oldScaleX, oldScaleY, 0);
			return result;
		}
	}
}
