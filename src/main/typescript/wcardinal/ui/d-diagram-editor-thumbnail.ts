/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * {@link DDiagramEditorThumbnail} options.
 */
export interface DDiagramEditorThumbnailOptions {
	enable?: boolean;
	size?: number | null;
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
	createAsUrl(size: number | null): string | undefined;
}

export class DDiagramEditorThumbnail {
	protected _snapshot: DDiagramEditorThumbnailSnapshot;
	protected _isEnabled: boolean;
	protected _size: number | null;

	constructor(
		snapshot: DDiagramEditorThumbnailSnapshot,
		theme: DThemeDiagramEditorThumbnail,
		options?: DDiagramEditorThumbnailOptions
	) {
		this._snapshot = snapshot;
		this._isEnabled = options?.enable ?? theme.isThumbnailEnabled();
		const size = options?.size;
		this._size = size !== undefined ? size : theme.getThumbnailSize();
	}

	get enable(): boolean {
		return this._isEnabled;
	}

	set enable(enable: boolean) {
		this._isEnabled = enable;
	}

	get size(): number | null {
		return this._size;
	}

	set size(size: number | null) {
		this._size = size;
	}

	serialize(): string | undefined {
		if (this._isEnabled) {
			return this._snapshot.createAsUrl(this._size);
		}
	}
}
