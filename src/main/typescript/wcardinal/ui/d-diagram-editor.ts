/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DControllerDocument } from "./d-controller-document";
import { DControllers } from "./d-controllers";
import {
	DDiagramBase, DDiagramBaseController, DDiagramBaseEvents, DDiagramBaseOptions,
	DDiagramBasePieceController, DThemeDiagramBase
} from "./d-diagram-base";
import { DDiagramCanvasEditor, DDiagramCanvasEditorOptions } from "./d-diagram-canvas-editor";
import { DDiagramSerialized, DDiagramSerializedSimple, DDiagramSerializedVersion } from "./d-diagram-serialized";
import { DDiagrams } from "./d-diagrams";
import { ESnapper } from "./snapper/e-snapper";

/**
 * {@link DDiagramEditor} piece controller.
 */
export interface DDiagramEditorPieceController extends DDiagramBasePieceController {

}

/**
 * {@link DDiagramEditor} controller.
 */
export interface DDiagramEditorController extends DDiagramBaseController {
	get( id: number ): Promise<DDiagramSerializedSimple | DDiagramSerialized>;
	save( simple: DDiagramSerializedSimple ): Promise<number>;
	delete( id: number ): Promise<void>;
}

/**
 * {@link DDiagramEditor} events.
 */
export interface DDiagramEditorEvents<EMITTER> extends DDiagramBaseEvents<DDiagramCanvasEditor, EMITTER> {
	/**
	 * Triggered when a serialized data is changed without using the set / unset methods.
	 * This happens, for instance, when the name or the ID of the serialized data is changed.
	 *
	 * @param emitter an emitter
	 */
	change( emitter: EMITTER ): void;

	/**
	 * Triggered before saving.
	 *
	 * @param simple a serialized data
	 * @param emitter an emitter
	 */
	saving( simple: DDiagramSerializedSimple, emitter: EMITTER ): void;

	/**
	 * Triggered when saved successfully or when failed to save.
	 *
	 * @param reason Null if succeeded. Otherwise, a string representing a reason.
	 * @param emitter an emitter
	 */
	saved( reason: string | null, emitter: EMITTER ): void;

	/**
	 * Triggered before opening.
	 *
	 * @param emitter an emitter
	 */
	opening( emitter: EMITTER ): void;

	/**
	 * Triggered when opened successfully or when failed to open.
	 *
	 * @param reason Null if succeeded. Otherwise, a string representing a reason.
	 * @param emitter an emitter
	 */
	opened( reason: string | null, emitter: EMITTER ): void;

	/**
	 * Triggered before deleting.
	 *
	 * @param emitter an emitter
	 */
	deleting( emitter: EMITTER ): void;

	/**
	 * Triggered when deleted successfully or when failed to delete.
	 *
	 * @param reason Null if succeeded. Otherwise, a string representing a reason.
	 * @param emitter an emitter.
	 */
	deleted( reason: string | null, emitter: EMITTER ): void;
}

/**
 * {@link DDiagramEditor} "on" options.
 */
export interface DDiagramEditorOnOptions<EMITTER>
	extends Partial<DDiagramEditorEvents<EMITTER> & Record<string, Function>> {

}

/**
 * {@link DDiagramEditor} options.
 */
export interface DDiagramEditorOptions<
	THEME extends DThemeDiagramEditor = DThemeDiagramEditor,
	EMITTER = any
> extends DDiagramBaseOptions<DDiagramCanvasEditor, DDiagramCanvasEditorOptions, DDiagramEditorController, THEME> {
	controller?: DDiagramEditorController;
	on?: DDiagramEditorOnOptions<EMITTER>;
}

/**
 * {@link DDiagramEditor} theme.
 */
export interface DThemeDiagramEditor extends DThemeDiagramBase {

}

export class DDiagramEditor<
	THEME extends DThemeDiagramEditor = DThemeDiagramEditor,
	OPTIONS extends DDiagramEditorOptions<THEME> = DDiagramEditorOptions<THEME>
> extends DDiagramBase<DDiagramCanvasEditor, DDiagramCanvasEditorOptions, DDiagramEditorController, THEME, OPTIONS>
	implements DControllerDocument<DDiagramSerialized> {
	protected _isChanged: boolean = false;
	snapper: ESnapper;

	constructor( options?: OPTIONS ) {
		super( options );
		this._isChanged = false;

		const commands = DControllers.getCommandController();
		commands.on( "dirty", (): void => {
			if( this._isChanged !== true ) {
				this._isChanged = true;
				this.emit( "change", this );
			}
		});

		this.snapper = new ESnapper( this );
	}

	protected newCanvas( serialized: DDiagramSerialized ): DDiagramCanvasEditor {
		return new DDiagramCanvasEditor( this.toCanvasOptions( serialized ) );
	}

	protected toCanvasOptions( serialized: DDiagramSerialized ): DDiagramCanvasEditorOptions {
		const options = this._canvasOptions || { snapper: this.snapper };
		if( options.name === undefined ) {
			options.name = serialized.name;
		}
		if( options.width === undefined ) {
			options.width = serialized.width;
		}
		if( options.height === undefined ) {
			options.height = serialized.height;
		}
		if( options.snapper === undefined ) {
			options.snapper = this.snapper;
		}
		const tileOptions = options.tile || {};
		if( tileOptions.factory === undefined ) {
			tileOptions.factory = this._tileFactory;
		}
		if( tileOptions.mapping === undefined ) {
			tileOptions.mapping = serialized.tile && serialized.tile.mapping;
		}
		return options;
	}

	protected applyBackground( serialized: DDiagramSerialized, canvas: DDiagramCanvasEditor ): void {
		const background = this.toBackground( serialized );
		canvas.background.color = background.color;
		canvas.background.alpha = background.alpha;
	}

	serialize(): DDiagramSerialized | null {
		const canvas = this.canvas;
		const serialized = this._serialized;
		if( canvas != null && serialized != null ) {
			return canvas.serialize( serialized.id );
		}
		return null;
	}

	save(): Promise<unknown> {
		const serialized = this.serialize();
		if( serialized != null ) {
			const controller = this._controller;
			if( controller ) {
				const simple = DDiagrams.toSimple( serialized );
				this.emit( "saving", simple, this );
				return controller.save( simple )
				.then(( newId: number ): void => {
					this._isChanged = false;
					serialized.id = newId;
					this._serialized = serialized;
					this.emit( "change", this );
					this.emit( "saved", null, this );
				}, ( reason: string ): void => {
					this.emit( "saved", reason, this );
				});
			} else {
				this.emit( "saved", "no-controller", this );
				return Promise.reject();
			}
		}
		this.emit( "saved", null, this );
		return Promise.resolve();
	}

	saveAs( name: string ): Promise<unknown> {
		const serialized = this.serialize();
		if( serialized != null ) {
			const controller = this._controller;
			if( controller ) {
				serialized.id = undefined;
				serialized.name = name;
				const simple = DDiagrams.toSimple( serialized );
				this.emit( "saving", simple, this );
				return controller.save( simple )
				.then(( newId: number ): void => {
					this._isChanged = false;
					serialized.id = newId;
					this._serialized = serialized;
					const canvas = this.canvas;
					if( canvas != null ) {
						canvas.name = name;
					}
					this.emit( "change", this );
					this.emit( "saved", null, this );
				}, ( reason: string ): void => {
					this.emit( "saved", reason, this );
				});
			} else {
				this.emit( "saved", "no-controller", this );
				return Promise.reject( "no-controller" );
			}
		}
		this.emit( "saved", null, this );
		return Promise.resolve();
	}

	delete(): Promise<unknown> {
		const serialized = this._serialized;
		if( serialized && serialized.id != null ) {
			const controller = this._controller;
			if( controller ) {
				this.emit( "deleting", this );
				return controller.delete( serialized.id )
				.then((): void => {
					this.set( null );
					this.emit( "deleted", this );
				}, ( reason: string ): void => {
					this.emit( "deleted", reason, this );
				});
			} else {
				this.emit( "deleted", "no-controller", this );
				return Promise.reject( "no-controller" );
			}
		}
		this.set( null );
		this.emit( "deleted", null, this );
		return Promise.resolve();
	}

	create( name: string, width: number, height: number ): void {
		this.set({
			version: DDiagramSerializedVersion,
			id: undefined,
			name,
			width,
			height,
			resources: [],
			tags: [],
			layers: [[ "Default layer" ]],
			items: [],
			snap: undefined
		});
	}

	protected onSet( serialized: DDiagramSerialized ): void {
		super.onSet( serialized );
		const snap = serialized.snap;
		const snapper = this.snapper;
		if( snap != null ) {
			snapper.deserialize( snap );
		} else {
			snapper.reset();
		}
		this._isChanged = false;
		this.emit( "change", this );
	}

	protected onUnset(): void {
		super.onUnset();
		this._isChanged = false;
		this.emit( "change", this );
	}

	open( id: number ): Promise<unknown> {
		const controller = this._controller;
		if( controller ) {
			this.emit( "opening", this );
			return controller.get( id )
			.then(( serialized: DDiagramSerializedSimple | DDiagramSerialized ): void => {
				this.set( DDiagrams.toSerialized( serialized ) );
				this.emit( "opened", null, this );
			}, ( reason: string ): void => {
				this.emit( "opened", reason, this );
			});
		}
		this.emit( "opened", "no-controller", this );
		return Promise.reject( "no-controller" );
	}

	close(): void {
		this.set( null );
	}

	isChanged(): boolean {
		return this._isChanged || this.isNew();
	}

	isNew(): boolean {
		const serialized = this._serialized;
		if( serialized != null ) {
			return serialized.id == null;
		}
		return false;
	}

	getName(): string | null {
		const serialized = this._serialized;
		if( serialized != null ) {
			return serialized.name;
		}
		return null;
	}

	protected getType(): string {
		return "DDiagramEditor";
	}
}
