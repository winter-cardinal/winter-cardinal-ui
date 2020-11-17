
/**
 * {@link DDiagramEditorThumbnail} options.
 */
export interface DDiagramEditorThumbnailOptions {
	enable?: boolean;
	size?: number;
}

/**
 * {@link DDiagramEditorThumbnail} theme.
 */
export interface DThemeDiagramEditorThumbnail {
	isThumbnailEnabled(): boolean;
	getThumbnailSize(): number;
}

export interface DDiagramEditorThumbnailSnapshot {
	createAsUrl( size: number ): string | undefined;
}

export class DDiagramEditorThumbnail {
	protected _snapshot: DDiagramEditorThumbnailSnapshot;
	protected _isEnabled: boolean;
	protected _size: number;

	constructor( snapshot: DDiagramEditorThumbnailSnapshot, theme: DThemeDiagramEditorThumbnail, options: DDiagramEditorThumbnailOptions | undefined ) {
		this._snapshot = snapshot;
		this._isEnabled = options?.enable ?? theme.isThumbnailEnabled();
		this._size = options?.size ?? theme.getThumbnailSize();
	}

	get enable() {
		return this._isEnabled;
	}

	set enable( enable: boolean ) {
		this._isEnabled = enable;
	}

	get size(): number {
		return this._size;
	}

	set size( size: number ) {
		this._size = size;
	}

	serialize(): string | undefined {
		if( this._isEnabled ) {
			return this._snapshot.createAsUrl( this._size );
		}
	}
}
