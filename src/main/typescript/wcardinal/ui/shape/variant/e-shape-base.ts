/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, IPoint, Matrix, Point, Rectangle, Texture, Transform, utils } from "pixi.js";
import { DApplications } from "../../d-applications";
import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeAction } from "../action/e-shape-action";
import { EShape, EShapeCopyPart } from "../e-shape";
import { EShapeContainer } from "../e-shape-container";
import { EShapeCorner } from "../e-shape-corner";
import { EShapeEditor } from "../e-shape-editor";
import { EShapeFill } from "../e-shape-fill";
import { EShapeGradientLike } from "../e-shape-gradient";
import { EShapeLayout } from "../e-shape-layout";
import { EShapePoints } from "../e-shape-points";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeRuntime, EShapeRuntimeState } from "../e-shape-runtime";
import { EShapeStroke } from "../e-shape-stroke";
import { EShapeTag } from "../e-shape-tag";
import { EShapeText } from "../e-shape-text";
import { EShapeTransform, EShapeTransformImpl } from "../e-shape-transform";
import { EShapeType } from "../e-shape-type";
import { EShapeUploaded } from "../e-shape-uploaded";
import { EShapeGradients } from "./e-shape-gradients";

export abstract class EShapeBase extends utils.EventEmitter implements EShape {
	protected static WORK_RECT = new Rectangle();
	id: string;
	readonly type: EShapeType;
	abstract readonly size: IPoint;
	abstract readonly fill: EShapeFill;
	abstract readonly stroke: EShapeStroke;
	readonly transform: EShapeTransform;
	abstract radius: number;
	abstract corner: EShapeCorner;
	points?: EShapePoints;
	image?: HTMLImageElement;
	imageSrc?: string;
	texture?: Texture;
	abstract gradient?: EShapeGradientLike;
	abstract readonly text: EShapeText;
	abstract readonly tag: EShapeTag;
	readonly action: EShapeAction;
	abstract cursor: string;
	interactive: boolean;
	shortcut?: string;
	title?: string;
	protected _visible: boolean;
	protected _onTransformChangeLock: number;
	protected _isOnTransformChanged: boolean;
	protected _uploadedUpdateLock: number;
	protected _isUploadedUpdated: boolean;
	protected _isUploadedUpdatedRecursively: boolean;

	protected _bounds?: Rectangle;
	protected _boundsTransformId: number;
	protected _boundsInternal?: Rectangle;
	protected _boundsInternalTransformId: number;
	protected _boundsLocal?: Rectangle;
	protected _boundsLocalTransformId: number;

	protected _state: DBaseState;
	protected _stateLocal: DBaseState;

	// Hierarchy
	parent: EShapeContainer | EShape | null;
	children: EShape[];
	layout?: EShapeLayout;

	// Working space
	index: number; // A work space for sorting.
	selected: boolean;
	reference: number; // Count of references from commands

	// Working space for the viewer
	runtime?: EShapeRuntime;

	// Working space for the editor
	editor?: EShapeEditor;

	// Working space for the renderer
	uploaded?: EShapeUploaded;

	constructor( type: EShapeType ) {
		super();
		this.id = "";
		this.type = type;
		this.transform = this.newTransform();
		this._onTransformChangeLock = 0;
		this._isOnTransformChanged = false;
		this.action = new EShapeAction();
		this._visible = true;
		this._uploadedUpdateLock = 0;
		this._isUploadedUpdated = false;
		this._isUploadedUpdatedRecursively = false;

		this._boundsTransformId = NaN;
		this._boundsInternalTransformId = NaN;
		this._boundsLocalTransformId = NaN;

		this._state = this._stateLocal = DBaseState.UNFOCUSABLE;
		this.interactive = false;

		//
		this.parent = null;
		this.children = [];

		//
		this.selected = false;
		this.index = 0;
		this.reference = 0;
	}

	protected newTransform(): EShapeTransform {
		return new EShapeTransformImpl( this );
	}

	onSizeChange(): void {
		this._boundsTransformId = NaN;
		this._boundsInternalTransformId = NaN;
		this._boundsLocalTransformId = NaN;

		this.onTransformChange_();
		this.updateUploaded();
	}

	onTransformChange(): void {
		this.onTransformChange_();
		this.updateUploadedRecursively();
	}

	protected onTransformChange_(): void {
		if( this._onTransformChangeLock === 0 ) {
			const parent = this.parent;
			if( parent != null ) {
				parent.onChildTransformChange();
			}
		} else {
			this._isOnTransformChanged = true;
		}
	}

	disallowOnTransformChange(): void {
		this._onTransformChangeLock += 1;
		if( this._onTransformChangeLock === 1 ) {
			this._isOnTransformChanged = false;
		}
	}

	allowOnTransformChange( invokeOnTransformChange: boolean ): void {
		this._onTransformChangeLock -= 1;
		if( this._onTransformChangeLock === 0 ) {
			if( this._isOnTransformChanged ) {
				this._isOnTransformChanged = false;
				if( invokeOnTransformChange ) {
					this.onTransformChange();
				}
			}
		}
	}

	onChildTransformChange(): void {
		//
	}

	disallowUploadedUpdate(): void {
		this._uploadedUpdateLock += 1;
		if( this._uploadedUpdateLock === 1 ) {
			this._isUploadedUpdated = false;
			this._isUploadedUpdatedRecursively = false;
		}
	}

	allowUploadedUpdate(): void {
		this._uploadedUpdateLock -= 1;
		if( this._uploadedUpdateLock === 0 ) {
			if( this._isUploadedUpdatedRecursively ) {
				this._isUploadedUpdatedRecursively = false;
				this._isUploadedUpdated = false;
				this.updateUploadedRecursively();
			} else if( this._isUploadedUpdated ) {
				this._isUploadedUpdated = false;
				this.updateUploaded();
			}
		}
	}

	updateUploadedRecursively(): void {
		if( this._uploadedUpdateLock === 0 ) {
			this.updateUploaded();
			const children = this.children;
			for( let i = 0, imax = children.length; i < imax; ++i ) {
				children[ i ].updateUploadedRecursively();
			}
		} else {
			this._isUploadedUpdatedRecursively = true;
		}
	}

	updateUploaded(): void {
		if( this._uploadedUpdateLock === 0 ) {
			const uploaded = this.uploaded;
			if( uploaded != null ) {
				uploaded.update( this );
			}
		} else {
			this._isUploadedUpdated = true;
		}
	}

	//
	get root(): EShape {
		let root: EShape = this;
		while( root.parent instanceof EShapeBase ) {
			root = root.parent;
		}
		return root;
	}

	//
	get visible(): boolean {
		const parent = this.parent;
		if( parent instanceof EShapeBase ) {
			return parent.visible && this._visible;
		} else {
			return this._visible;
		}
	}

	set visible( visible: boolean ) {
		if( this._visible !== visible ) {
			this._visible = visible;
			this.updateUploadedRecursively();
		}
	}

	//
	abstract clone(): EShape;

	//
	toDirty() {
		const parent = this.parent;
		if( parent != null ) {
			parent.toDirty();
		}
	}

	// Hierarchy
	attach( parent: EShapeContainer | EShape, at?: number ): this {
		this.detach();
		this.parent = parent;
		const children = parent.children;
		if( at != null && 0 <= at && at < children.length ) {
			children.splice( at, 0, this );
		} else {
			children.push( this );
		}
		this.uploaded = undefined;
		parent.onChildTransformChange();
		parent.toDirty();
		return this;
	}

	detach(): this {
		const parent = this.parent;
		if( parent != null ) {
			this.parent = null;
			this.uploaded = undefined;
			const children = parent.children;
			const index = children.indexOf( this );
			if( 0 <= index ) {
				children.splice( index, 1 );
				parent.onChildTransformChange();
				parent.toDirty();
			}
		}
		return this;
	}

	// Transform
	updateTransform() {
		const parent = this.parent;
		if (parent != null) {
			parent.updateTransform();
			this.transform.updateTransform(parent.transform);
		} else {
			this.transform.updateTransform((Transform as any).IDENTITY);
		}
	}

	// Serialization
	serializeChildren( manager: EShapeResourceManagerSerialization ): DDiagramSerializedItem[] {
		const children = this.children;
		const childrenSerialized = [];
		for (let i = 0, imax = children.length; i < imax; ++i) {
			const child = children[i];
			childrenSerialized.push(child.serialize(manager));
		}
		return childrenSerialized;
	}

	serializeImage( manager: EShapeResourceManagerSerialization ): number {
		const image = this.image;
		return (image != null ? manager.add( image.src ) : -1);
	}

	serializeGradient( manager: EShapeResourceManagerSerialization ): number {
		return EShapeGradients.toGradientId( this.gradient, manager );
	}

	serialize( manager: EShapeResourceManagerSerialization ): DDiagramSerializedItem {
		const transform = this.transform;
		const position = transform.position;
		const pivot = transform.pivot;
		const size = this.size;
		const shortcut = this.shortcut;
		const shortcutId = ( shortcut != null ? manager.add( shortcut ) : -1 );
		const title = this.title;
		const titleId = ( title != null ? manager.add( title ) : -1 );
		return [
			this.type,
			manager.add(this.id),
			position.x,
			position.y,
			size.x,
			size.y,
			transform.rotation,
			transform.skew.x,
			this.fill.serialize( manager ),
			this.stroke.serialize( manager ),
			manager.add( this.cursor.trim() ),
			this.text.serialize( manager ),
			this.tag.serialize( manager ),
			this.radius,
			this.corner,
			-1,
			-1,
			this.action.serialize( manager ),
			this.serializeImage( manager ),
			this.serializeGradient( manager ),
			this.serializeChildren( manager ),
			pivot.x,
			pivot.y,
			( this.interactive ? 1 : 0 ) | ( this.unfocusable ? 2 : 0 ),
			shortcutId,
			titleId
		];
	}

	// Hit test
	toLocalRect( point: IPoint, result: Rectangle ): Rectangle {
		const x = point.x;
		const y = point.y;
		const size = this.size;
		const sx = 0.5 * size.x;
		const sy = 0.5 * size.y;
		const pivot = this.transform.pivot;
		const dx = x - pivot.x;
		const dy = y - pivot.y;
		const stroke = this.stroke;
		const s = stroke.width * stroke.align;
		if( 0 <= sx ) {
			if( 0 <= sy ) {
				result.x = +dx;
				result.y = +dy;
				result.width = +sx + s;
				result.height = +sy + s;
			} else {
				result.x = +dx;
				result.y = -dy;
				result.width = +sx + s;
				result.height = -sy + s;
			}
		} else {
			if( 0 <= sy ) {
				result.x = -dx;
				result.y = +dy;
				result.width = -sx + s;
				result.height = +sy + s;
			} else {
				result.x = -dx;
				result.y = -dy;
				result.width = -sx + s;
				result.height = -sy + s;
			}
		}
		return result;
	}

	contains( point: IPoint ): EShape | null {
		const rect = this.toLocalRect( point, EShapeBase.WORK_RECT );
		if( this.containsAbs( rect.x, rect.y, rect.width, rect.height ) ) {
			return this;
		}
		const x = point.x;
		const y = point.y;
		return this.containsText( x, y, point ) || this.containsChildren( x, y, point );
	}

	protected containsText( x: number, y: number, work: IPoint ): EShape | null {
		const text = this.text;
		const textAtlas = text.atlas;
		if( textAtlas != null ) {
			const textWorld = text.world;
			if( textWorld != null ) {
				work.set( x, y );
				this.transform.internalTransform.apply( work, work );
				const tx = work.x - textWorld[ 0 ];
				const ty = work.y - textWorld[ 1 ];
				const th = textWorld[ 2 ] * tx + textWorld[ 3 ] * ty;
				const tv = textWorld[ 4 ] * tx + textWorld[ 5 ] * ty;
				if( 0 <= th && th <= textWorld[ 6 ] && 0 <= tv && tv <= textWorld[ 7 ] ) {
					return this;
				}
			}
		}
		return null;
	}

	protected containsChildren( x: number, y: number, work: IPoint ): EShape | null {
		const children = this.children;
		for( let i = children.length - 1; 0 <= i; --i ) {
			const child = children[ i ];
			work.set( x, y );
			child.updateTransform();
			child.transform.localTransform.applyInverse( work, work );
			const childResult = child.contains( work );
			if( childResult != null ) {
				if( this.shadowed ) {
					return this;
				} else {
					return childResult;
				}
			}
		}
		return null;
	}

	containsBBox( point: IPoint ): boolean {
		const rect = this.toLocalRect( point, EShapeBase.WORK_RECT );
		return this.containsAbsBBox( rect.x, rect.y, rect.width, rect.height );
	}

	containsAbs( x: number, y: number, ax: number, ay: number ): boolean {
		return this.containsAbsBBox( x, y, ax, ay );
	}

	containsAbsBBox( x: number, y: number, ax: number, ay: number ): boolean {
		return (-ax <= x && x <= +ax && -ay <= y && y <= +ay);
	}

	select( point: Point ): boolean {
		return false;
	}

	//
	toGlobal( position: IPoint, point: Point, skipUpdate?: boolean ): Point {
		if( skipUpdate !== true ) {
			this.updateTransform();
		}
		point.copyFrom( position );
		this.transform.worldTransform.apply( point, point );
		return point;
	}

	toLocal<T extends IPoint>(
		position: IPoint,
		from?: DisplayObject,
		point?: T,
		skipUpdate?: boolean
	): T {
		if( skipUpdate !== true ) {
			this.updateTransform();
		}
		if( point === undefined ) {
			point = new Point() as any as T;
		}
		point.copyFrom( position );
		this.transform.worldTransform.applyInverse( point as any, point as any );
		return point;
	}

	getBounds( work: Point, skipUpdate: boolean, result: Rectangle ): Rectangle {
		if( skipUpdate !== true ) {
			this.updateTransform();
		}
		const bounds = this._bounds = ( this._bounds || new Rectangle() );
		const worldId = this.transform.getWorldId();
		if( worldId !== this._boundsTransformId ) {
			this._boundsTransformId = worldId;
			this.getBounds_( this.transform.worldTransform, work, bounds );
		}
		result.copyFrom( bounds );
		return result;
	}

	getBoundsInternal( work: Point, skipUpdate: boolean, result: Rectangle ): Rectangle {
		if( skipUpdate !== true ) {
			this.updateTransform();
		}
		const boundsInternal = this._boundsInternal = ( this._boundsInternal || new Rectangle() );
		const currentLocalId = this.transform.getLocalIdCurrent();
		if( currentLocalId !== this._boundsInternalTransformId ) {
			this._boundsInternalTransformId = currentLocalId;
			this.getBounds_( this.transform.internalTransform, work, boundsInternal );
		}
		result.copyFrom( boundsInternal );
		return result;
	}

	getBoundsLocal( work: Point, skipUpdate: boolean, result: Rectangle ): Rectangle {
		if( skipUpdate !== true ) {
			this.updateTransform();
		}
		const boundsLocal = this._boundsLocal = ( this._boundsLocal || new Rectangle() );
		const currentLocalId = this.transform.getLocalIdCurrent();
		if( currentLocalId !== this._boundsLocalTransformId ) {
			this._boundsLocalTransformId = currentLocalId;
			this.getBounds_( this.transform.localTransform, work, boundsLocal );
		}
		result.copyFrom( boundsLocal );
		return result;
	}

	protected getBoundsSize(): IPoint {
		return this.size;
	}

	protected getBounds_( transform: Matrix, work: Point, result: Rectangle ): Rectangle {
		const pivot = this.transform.pivot;
		const px = pivot.x;
		const py = pivot.y;
		const size = this.getBoundsSize();
		const sx = 0.5 * size.x;
		const sy = 0.5 * size.y;

		const a = transform.a;
		const b = transform.b;
		const c = transform.c;
		const d = transform.d;

		let x = -sx + px;
		let y = -sy + py;
		const x0 = a * x + c * y;
		const y0 = b * x + d * y;

		x = +sx + px;
		y = -sy + py;
		const x1 = a * x + c * y;
		const y1 = b * x + d * y;

		x = -sx + px;
		y = +sy + py;
		const x2 = a * x + c * y;
		const y2 = b * x + d * y;

		x = +sx + px;
		y = +sy + py;
		const x3 = a * x + c * y;
		const y3 = b * x + d * y;

		const xmin = Math.min( x0, x1, x2, x3 );
		const ymin = Math.min( y0, y1, y2, y3 );
		const xmax = Math.max( x0, x1, x2, x3 );
		const ymax = Math.max( y0, y1, y2, y3 );
		result.x = xmin + transform.tx;
		result.y = ymin + transform.ty;
		result.width = xmax - xmin;
		result.height = ymax - ymin;
		return result;
	}

	//
	destroy(): void {
		const children = this.children;
		for( let i = children.length - 1; 0 <= i; --i ) {
			children[ i ].destroy();
		}
		children.length = 0;
	}

	//
	protected updateState(): void {
		const parent = this.parent;
		const stateLocal = this._stateLocal;
		const newState = ( parent instanceof EShapeBase ?
			this.mergeState( stateLocal, parent.getState() ) :
			stateLocal
		);
		const oldState = this._state;
		if( oldState !== newState ) {
			this._state = newState;
			this.onStateChange( newState, oldState );
		}
	}

	protected mergeState( stateLocal: DBaseState, stateParent: DBaseState ): DBaseState {
		return stateLocal | (stateParent & DBaseState.DISABLED) |
			(stateParent & (DBaseState.FOCUSED | DBaseState.FOCUSED_IN) ? DBaseState.FOCUSED_IN : DBaseState.NONE);
	}

	protected onStateChange( newState: number, oldState: number ) {
		const runtime = this.runtime;
		if( runtime != null ) {
			runtime.onStateChange( this, newState, oldState );
		}

		const children = this.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			const child = children[ i ];
			if( child instanceof EShapeBase ) {
				child.onParentStateChange( newState, oldState );
			}
		}
	}

	protected onParentStateChange( newStateParent: number, oldStateParent: number ) {
		const newState = this.mergeState( this._stateLocal, newStateParent );
		const oldState = this._state;
		if( oldState !== newState ) {
			this._state = newState;
			this.onStateChange( newState, oldState );
		}
	}

	getState(): DBaseState {
		return this._state;
	}

	setState( state: DBaseState, isOn: boolean ): this {
		if( DBaseStates.is( this._stateLocal, state ) !== isOn ) {
			if( isOn ) {
				this._stateLocal |= state;
			} else {
				this._stateLocal &= ~state;
			}
			this.updateState();
		}
		return this;
	}

	hasState( state: DBaseState ): boolean {
		return DBaseStates.is( this._state, state );
	}

	focus(): this {
		this.focused = true;
		return this;
	}

	blur(): this {
		this.focused = false;
		return this;
	}

	get hovered(): boolean {
		return this.hasState( DBaseState.HOVERED );
	}

	set hovered( isHovered: boolean ) {
		this.setState( DBaseState.HOVERED, isHovered );
	}

	get active(): boolean {
		return this.hasState( DBaseState.ACTIVE );
	}

	set active( isActive: boolean ) {
		this.setState( DBaseState.ACTIVE, isActive );
	}

	get readonly(): boolean {
		return this.hasState( DBaseState.READ_ONLY );
	}

	set readonly( isReadOnly: boolean ) {
		this.setState( DBaseState.READ_ONLY, isReadOnly );
	}

	get enabled(): boolean {
		return ! this.hasState( DBaseState.DISABLED );
	}

	get disabled(): boolean {
		return this.hasState( DBaseState.DISABLED );
	}

	set disabled( isDisabled: boolean ) {
		this.setState( DBaseState.DISABLED, isDisabled );
	}

	get dragging(): boolean {
		return this.hasState( DBaseState.DRAGGING );
	}

	set dragging( isDragging: boolean ) {
		this.setState( DBaseState.DRAGGING, isDragging );
	}

	get focused(): boolean {
		return this.hasState( DBaseState.FOCUSED );
	}

	set focused( focused: boolean ) {
		if( this.focused !== focused ) {
			const layer = DApplications.getLayer( this );
			if( layer ) {
				layer.getFocusController().setFocused( this, focused, false );
			}
		}
	}

	get focusedin(): boolean {
		return this.hasState( DBaseState.FOCUSED | DBaseState.FOCUSED_IN );
	}

	get unfocusable(): boolean {
		return this.hasState( DBaseState.UNFOCUSABLE );
	}

	set unfocusable( unforcusable: boolean ) {
		this.setState( DBaseState.UNFOCUSABLE, unforcusable );
	}

	get clicked(): boolean {
		const runtime = this.runtime;
		return !! ( runtime && (runtime.state & EShapeRuntimeState.CLICKED) );
	}

	get pressed(): boolean {
		const runtime = this.runtime;
		return !! ( runtime && (runtime.state & EShapeRuntimeState.PRESSED) );
	}

	get down(): boolean {
		const runtime = this.runtime;
		return !! ( runtime && (runtime.state & EShapeRuntimeState.DOWN) );
	}

	get up(): boolean {
		const runtime = this.runtime;
		return !! ( runtime && (runtime.state & EShapeRuntimeState.UP) );
	}

	get shadowed(): boolean {
		return false;
	}

	onDblClick( e: MouseEvent ): boolean {
		const runtime = this.runtime;
		if( runtime != null ) {
			return runtime.onPointerDblClick( this );
		}
		return false;
	}

	onShortcut( e: KeyboardEvent ): void {
		const runtime = this.runtime;
		if( runtime != null ) {
			return runtime.onPointerClick( this );
		}
	}

	onKeyDown( e: KeyboardEvent ): boolean {
		const runtime = this.runtime;
		if( runtime != null ) {
			return runtime.onKeyDown( this, e );
		}
		return false;
	}

	onKeyUp( e: KeyboardEvent ): boolean {
		const runtime = this.runtime;
		if( runtime != null ) {
			return runtime.onKeyUp( this, e );
		}
		return false;
	}

	//
	update( time: number ): void {
		const runtime = this.runtime;
		if( runtime != null ) {
			runtime.update( this, time );
		}
	}

	updateRecursively( time: number ): void {
		this.update( time );

		const children = this.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			children[ i ].update( time );
		}
	}

	copy( source: EShape, part: EShapeCopyPart = EShapeCopyPart.ALL ): this {
		this.id = source.id;
		if( (part & EShapeCopyPart.TRANSFORM) !== 0 ) {
			const transform = this.transform;
			const sourceTransform = source.transform;
			transform.position.copyFrom( sourceTransform.position );
			transform.rotation = sourceTransform.rotation;
			transform.skew.copyFrom( sourceTransform.skew );
			transform.pivot.copyFrom( sourceTransform.pivot );
			transform.scale.copyFrom( sourceTransform.scale );
		}
		if( (part & EShapeCopyPart.SIZE) !== 0 ) {
			this.size.copyFrom( source.size );
		}
		if( (part & EShapeCopyPart.STYLE) !== 0 ) {
			this.fill.copy( source.fill );
			this.stroke.copy( source.stroke );
			this.tag.copy( source.tag );
			this.text.copy( source.text );
			this.radius = source.radius;
			this.corner = source.corner;
			if (this.image == null) {
				this.image = source.image;
			}
		}
		if( (part & EShapeCopyPart.ACTION) !== 0 ) {
			this.action.addAll( source.action.values );
			this.interactive = source.interactive;
			this.cursor = source.cursor;
			this.shortcut = source.shortcut;
		}
		if( (part & EShapeCopyPart.POINTS) !== 0 ) {
			const sourcePoints = source.points;
			if( sourcePoints != null ) {
				const points = this.points;
				if( points != null ) {
					points.copy( sourcePoints );
				} else {
					this.points = sourcePoints.clone( this );
				}
			}
		}
		if( (part & EShapeCopyPart.STATE) !== 0 ) {
			this.setState( source.getState(), true );
		}
		return this;
	}
}
