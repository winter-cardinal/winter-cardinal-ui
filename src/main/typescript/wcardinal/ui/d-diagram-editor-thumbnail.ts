/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSnapshotCleanupOptions } from "./d-diagram-snapshot";

/**
 * {@link DDiagramEditorThumbnail} options.
 */
export interface DDiagramEditorThumbnailOptions {
	enable?: boolean;
	size?: number | null;
	cleanup?: boolean | DDiagramSnapshotCleanupOptions;
}

/**
 * {@link DDiagramEditorThumbnail} theme.
 */
export interface DThemeDiagramEditorThumbnail {
	isThumbnailEnabled(): boolean;

	/**
	 * Returns a thumbnail maximum size.
	 * If the size is null, a thumbnail size will be of a canvas size.
	 */
	getThumbnailSize(): number | null;
}

export interface DDiagramEditorThumbnailSnapshot {
	createAsUrl(options: DDiagramEditorThumbnailSnapshotCreateAsUrlOptions): string | undefined;
}

export interface DDiagramEditorThumbnailSnapshotCleanupOptions {
	snap: boolean;
	background: boolean;
}

export interface DDiagramEditorThumbnailSnapshotCreateAsUrlOptions {
	size: number | null;
	cleanup: DDiagramEditorThumbnailSnapshotCleanupOptions;
}

export class DDiagramEditorThumbnail {
	protected _snapshot: DDiagramEditorThumbnailSnapshot;
	protected _isEnabled: boolean;
	protected _options: DDiagramEditorThumbnailSnapshotCreateAsUrlOptions;

	constructor(
		snapshot: DDiagramEditorThumbnailSnapshot,
		theme: DThemeDiagramEditorThumbnail,
		options?: DDiagramEditorThumbnailOptions
	) {
		this._snapshot = snapshot;
		this._isEnabled = this.toIsEnabled(theme, options);
		this._options = this.toCreateAsUrlOptions(theme, options);
	}

	protected toIsEnabled(
		theme: DThemeDiagramEditorThumbnail,
		options?: DDiagramEditorThumbnailOptions
	): boolean {
		return options?.enable ?? theme.isThumbnailEnabled();
	}

	protected toSize(theme: DThemeDiagramEditorThumbnail, options?: number | null): number | null {
		return options !== undefined ? options : theme.getThumbnailSize();
	}

	protected toCleanup(
		theme: DThemeDiagramEditorThumbnail,
		cleanup?: boolean | DDiagramSnapshotCleanupOptions
	): DDiagramEditorThumbnailSnapshotCleanupOptions {
		if (cleanup == null || cleanup === true) {
			return {
				snap: true,
				background: true
			};
		} else if (cleanup === false) {
			return {
				snap: false,
				background: false
			};
		}
		return {
			snap: cleanup.snap ?? true,
			background: cleanup.background ?? true
		};
	}

	protected toCreateAsUrlOptions(
		theme: DThemeDiagramEditorThumbnail,
		options?: DDiagramEditorThumbnailOptions
	): DDiagramEditorThumbnailSnapshotCreateAsUrlOptions {
		return {
			size: this.toSize(theme, options?.size),
			cleanup: this.toCleanup(theme, options?.cleanup)
		};
	}

	get enable(): boolean {
		return this._isEnabled;
	}

	set enable(enable: boolean) {
		this._isEnabled = enable;
	}

	get size(): number | null {
		return this._options.size;
	}

	set size(size: number | null) {
		this._options.size = size;
	}

	get cleanup(): DDiagramEditorThumbnailSnapshotCleanupOptions {
		return this._options.cleanup;
	}

	serialize(): string | undefined {
		if (this._isEnabled) {
			return this._snapshot.createAsUrl(this._options);
		}
	}
}
