/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DControllerDocument } from "./d-controller-document";
import { DControllers } from "./d-controllers";
import { DDiagramBase, DDiagramBaseOnOptions, DDiagramBaseOptions, DThemeDiagramBase } from "./d-diagram-base";
import { DDiagramCanvasEditor, DDiagramCanvasEditorOptions } from "./d-diagram-canvas-editor";
import { DDiagramSerialized, DDiagramSerializedSimple, DDiagramSerializedVersion } from "./d-diagram-serialized";
import { DDiagrams } from "./d-diagrams";
import { ESnapper } from "./snapper/e-snapper";

export interface DDiagramEditorController {
	get( id: number ): Promise<DDiagramSerializedSimple | DDiagramSerialized>;
	save( simple: DDiagramSerializedSimple ): Promise<number>;
	delete( id: number ): Promise<void>;
}

export interface DDiagramEditorOnOptions extends DDiagramBaseOnOptions<DDiagramCanvasEditor> {
	/**
	 * Triggered when a serialized data is changed without using the set / unset methods.
	 * This happens, for instance, when the name or the ID of the serialized data is changed.
	 *
	 * @param self a diagram editor
	 */
	change?: ( self: any ) => void;

	/**
	 * Triggered when an operation is successfully finished.
	 *
	 * @param operation an operation ID
	 * @param self a diagram editor
	 */
	success?: ( operation: "save" | "save-as", self: any ) => void;

	/**
	 * Triggered when an operation is failed.
	 *
	 * @param operation an operation ID
	 * @param self a diagram editor
	 */
	failed?: ( operation: "save" | "save-as", self: any ) => void;
}

export interface DDiagramEditorOptions<
	THEME extends DThemeDiagramEditor = DThemeDiagramEditor
> extends DDiagramBaseOptions<DDiagramCanvasEditor, THEME> {
	controller: DDiagramEditorController;
	on?: DDiagramEditorOnOptions;
}

export interface DThemeDiagramEditor extends DThemeDiagramBase {

}

export class DDiagramEditor<
	THEME extends DThemeDiagramEditor = DThemeDiagramEditor,
	OPTIONS extends DDiagramEditorOptions<THEME> = DDiagramEditorOptions<THEME>
> extends DDiagramBase<DDiagramCanvasEditor, THEME, OPTIONS> implements DControllerDocument<DDiagramSerialized> {
	protected _isChanged: boolean = false;
	protected _controller: DDiagramEditorController;
	snapper: ESnapper;

	constructor( options: OPTIONS ) {
		super( options );
		this._controller = options.controller;
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
		return {
			name: serialized.name,
			width: serialized.width,
			height: serialized.height,
			snapper: this.snapper,
			tile: {
				factory: this._tileFactory,
				mapping: serialized.tile && serialized.tile.mapping
			}
		};
	}

	serialize(): DDiagramSerialized | null {
		const canvas = this.canvas;
		const serialized = this._serialized;
		if( canvas != null && serialized != null ) {
			return canvas.serialize( serialized.id );
		}
		return null;
	}

	save(): Promise<unknown> | boolean {
		const serialized = this.serialize();
		if( serialized != null ) {
			return this.controller.save({
				version: serialized.version,
				id: serialized.id,
				name: serialized.name,
				data: JSON.stringify( serialized )
			})
			.then(( newId: number ): void => {
				this._isChanged = false;
				serialized.id = newId;
				this._serialized = serialized;
				this.emit( "change", this );
				this.emit( "success", "save", this );
			}, ( reason: any ): void => {
				this.emit( "fail", "save", this );
			});
		}
		return true;
	}

	saveAs( name: string ): Promise<unknown> | boolean {
		const serialized = this.serialize();
		if( serialized != null ) {
			serialized.id = undefined;
			serialized.name = name;
			return this.controller.save({
				version: serialized.version,
				id: serialized.id,
				name: serialized.name,
				data: JSON.stringify( serialized )
			})
			.then(( newId: number ): void => {
				this._isChanged = false;
				serialized.id = newId;
				this._serialized = serialized;
				const canvas = this.canvas;
				if( canvas != null ) {
					canvas.name = name;
				}
				this.emit( "change", this );
				this.emit( "success", "save-as", this );
			}, ( reason: any ): void => {
				this.emit( "fail", "save-as", this );
			});
		}
		return true;
	}

	delete(): Promise<unknown> | boolean {
		const serialized = this._serialized;
		if( serialized != null ) {
			if( serialized.id != null ) {
				return this.controller.delete( serialized.id )
				.then((): void => {
					this.set( null );
					this.emit( "success", "delete", this );
				}, ( reason: any ): void => {
					this.emit( "fail", "delete", this );
				});
			} else {
				this.set( null );
				this.emit( "success", "delete", this );
			}
			return true;
		}
		return false;
	}

	create( name: string, width: number, height: number ): Promise<unknown> | boolean {
		this.set({
			version: DDiagramSerializedVersion,
			id: undefined,
			name,
			width,
			height,
			resources: [],
			layers: [[ "Default layer" ]],
			items: [],
			snap: undefined
		});
		return true;
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

	open( id: number ): Promise<unknown> | boolean {
		return this._controller.get( id ).then(( serialized: DDiagramSerializedSimple | DDiagramSerialized ): void => {
			this.set( DDiagrams.toSerialized( serialized ) );
			this.emit( "success", "open", this );
		}, ( reason: any ): void => {
			this.emit( "fail", "open", this );
		});
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

	get controller(): DDiagramEditorController {
		return this._controller;
	}

	protected getType(): string {
		return "DDiagramEditor";
	}
}
