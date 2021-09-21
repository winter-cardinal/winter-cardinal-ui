/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import {
	DisplayObject,
	IPoint,
	Matrix,
	Point,
	Rectangle,
	Renderer,
	Texture,
	Transform,
	utils
} from "pixi.js";
import { DApplications } from "../../d-applications";
import { DBaseStateSet } from "../../d-base-state-set";
import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeAction } from "../action/e-shape-action";
import { EShape } from "../e-shape";
import { EShapeConnectorContainer } from "../e-shape-connector-container";
import { EShapeConnectorContainerImpl } from "../e-shape-connector-container-impl";
import { EShapeContainer } from "../e-shape-container";
import { EShapeCopyPart } from "../e-shape-copy-part";
import { EShapeCorner } from "../e-shape-corner";
import { EShapeEditor } from "../e-shape-editor";
import { EShapeFill } from "../e-shape-fill";
import { EShapeGradientLike } from "../e-shape-gradient";
import { EShapeLayout } from "../e-shape-layout";
import { EShapePoints } from "../e-shape-points";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeStateSet } from "../e-shape-state-set";
import { EShapeStateSetImplObservable } from "../e-shape-state-set-impl-observable";
import { EShapeStroke } from "../e-shape-stroke";
import { EShapeStrokeStyle } from "../e-shape-stroke-style";
import { EShapeData } from "../e-shape-data";
import { EShapeText } from "../e-shape-text";
import { EShapeTransform, EShapeTransformImpl } from "../e-shape-transform";
import { EShapeType } from "../e-shape-type";
import { EShapeUploaded } from "../e-shape-uploaded";
import { EShapeBaseHitTestData } from "./e-shape-base-hit-test-data";
import { EShapeGradients } from "./e-shape-gradients";
import { hitTestBBox } from "./hit-test-bbox";

export abstract class EShapeBase extends utils.EventEmitter implements EShape {
	protected static WORK_HIT_TEST_DATA?: EShapeBaseHitTestData;
	id: string;
	uuid: number;
	readonly type: EShapeType;
	abstract readonly size: IPoint;
	abstract readonly fill: EShapeFill;
	abstract readonly stroke: EShapeStroke;
	readonly transform: EShapeTransform;
	abstract radius: number;
	abstract corner: EShapeCorner;
	protected _points?: EShapePoints;
	protected _image?: HTMLImageElement;
	imageSrc?: string;
	texture?: Texture;
	abstract gradient?: EShapeGradientLike;
	abstract readonly text: EShapeText;
	/** @deprecated in favor of {@link data} */
	abstract readonly tag: EShapeData;
	abstract readonly data: EShapeData;
	readonly action: EShapeAction;
	abstract cursor: string;
	interactive: boolean;
	shortcut?: string;
	title?: string;

	protected _connector?: EShapeConnectorContainer;

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

	protected _state?: EShapeStateSet;

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

	constructor(type: EShapeType) {
		super();
		this.id = "";
		this.uuid = 0;
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
		return new EShapeTransformImpl(this);
	}

	onSizeChange(): void {
		this._boundsTransformId = NaN;
		this._boundsInternalTransformId = NaN;
		this._boundsLocalTransformId = NaN;

		this.onTransformChange_();
		this.updateUploaded();
		this._connector?.fit(true);
	}

	onTransformChange(): void {
		this.onTransformChange_();
		this.onParentTransformChange();
	}

	onParentTransformChange(): void {
		this.updateUploaded();
		this._connector?.fit(true);
		const children = this.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			children[i].onParentTransformChange();
		}
	}

	protected onTransformChange_(): void {
		if (this._onTransformChangeLock === 0) {
			const parent = this.parent;
			if (parent != null) {
				parent.onChildTransformChange();
			}
		} else {
			this._isOnTransformChanged = true;
		}
	}

	disallowOnTransformChange(): void {
		this._onTransformChangeLock += 1;
		if (this._onTransformChangeLock === 1) {
			this._isOnTransformChanged = false;
		}
	}

	allowOnTransformChange(invokeOnTransformChange: boolean): void {
		this._onTransformChangeLock -= 1;
		if (this._onTransformChangeLock === 0) {
			if (this._isOnTransformChanged) {
				this._isOnTransformChanged = false;
				if (invokeOnTransformChange) {
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
		if (this._uploadedUpdateLock === 1) {
			this._isUploadedUpdated = false;
			this._isUploadedUpdatedRecursively = false;
		}
	}

	allowUploadedUpdate(): void {
		this._uploadedUpdateLock -= 1;
		if (this._uploadedUpdateLock === 0) {
			if (this._isUploadedUpdatedRecursively) {
				this._isUploadedUpdatedRecursively = false;
				this._isUploadedUpdated = false;
				this.updateUploadedRecursively();
			} else if (this._isUploadedUpdated) {
				this._isUploadedUpdated = false;
				this.updateUploaded();
			}
		}
	}

	updateUploadedRecursively(): void {
		if (this._uploadedUpdateLock === 0) {
			this.updateUploaded();
			const children = this.children;
			for (let i = 0, imax = children.length; i < imax; ++i) {
				children[i].updateUploadedRecursively();
			}
		} else {
			this._isUploadedUpdatedRecursively = true;
		}
	}

	updateUploaded(): void {
		if (this._uploadedUpdateLock === 0) {
			const uploaded = this.uploaded;
			if (uploaded != null) {
				uploaded.update(this);
			}
		} else {
			this._isUploadedUpdated = true;
		}
	}

	get image(): HTMLImageElement | undefined {
		return this._image;
	}

	set image(image: HTMLImageElement | undefined) {
		this._image = image;
	}

	get points(): EShapePoints | undefined {
		return this._points;
	}

	get root(): EShape {
		let root: EShape = this;
		while (root.parent instanceof EShapeBase) {
			root = root.parent;
		}
		return root;
	}

	get connector(): EShapeConnectorContainer {
		let result = this._connector;
		if (result == null) {
			result = new EShapeConnectorContainerImpl(this);
			this._connector = result;
		}
		return result;
	}

	get visible(): boolean {
		if (this._visible) {
			const parent = this.parent;
			if (parent instanceof EShapeBase) {
				return parent.visible;
			}
			return true;
		}
		return false;
	}

	set visible(visible: boolean) {
		if (this._visible !== visible) {
			this._visible = visible;
			this.updateUploadedRecursively();
		}
	}

	get worldVisible(): boolean {
		if (this._visible) {
			const parent = this.parent;
			if (parent) {
				return parent.worldVisible;
			}
			return true;
		}
		return false;
	}

	//
	abstract clone(): EShape;

	//
	toDirty(): void {
		this.parent?.toDirty();
	}

	// Hierarchy
	attach(parent: EShapeContainer | EShape, at?: number): this {
		this.detach();
		this.parent = parent;
		const children = parent.children;
		if (at != null && 0 <= at && at < children.length) {
			children.splice(at, 0, this);
		} else {
			children.push(this);
		}
		this.uploaded = undefined;
		parent.onChildTransformChange();
		parent.toDirty();
		this.onAttach();
		return this;
	}

	onAttach(): void {
		const connector = this._connector;
		if (connector) {
			connector.attach();
			connector.fit(true);
		}
		const children = this.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			children[i].onAttach();
		}
	}

	detach(): this {
		const parent = this.parent;
		if (parent) {
			this.parent = null;
			this.uploaded = undefined;
			const children = parent.children;
			const index = children.indexOf(this);
			if (0 <= index) {
				children.splice(index, 1);
				parent.onChildTransformChange();
				parent.toDirty();
				this.onDetach();
			}
		}
		return this;
	}

	onDetach(): void {
		const connector = this._connector;
		if (connector) {
			connector.detach();
		}
		const children = this.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			children[i].onDetach();
		}
	}

	// Transform
	updateTransform(): void {
		const parent = this.parent;
		if (parent) {
			if (parent.parent) {
				parent.updateTransform();
			}
			this.transform.updateTransform(parent.transform);
		} else {
			this.transform.updateTransform(Transform.IDENTITY);
		}
	}

	// Serialization
	serializeChildren(manager: EShapeResourceManagerSerialization): DDiagramSerializedItem[] {
		const children = this.children;
		const childrenSerialized = [];
		for (let i = 0, imax = children.length; i < imax; ++i) {
			const child = children[i];
			childrenSerialized.push(child.serialize(manager));
		}
		return childrenSerialized;
	}

	serializeImage(manager: EShapeResourceManagerSerialization): number {
		const image = this._image;
		return image != null ? manager.addResource(image.src) : -1;
	}

	serializeGradient(manager: EShapeResourceManagerSerialization): number {
		return EShapeGradients.toGradientId(this.gradient, manager);
	}

	serializeState(manager: EShapeResourceManagerSerialization): number {
		const state = this.state;
		return (this.interactive ? 1 : 0) | (state.isFocusable ? 0 : 2) | (state.isActive ? 4 : 0);
	}

	serialize(manager: EShapeResourceManagerSerialization): DDiagramSerializedItem {
		const transform = this.transform;
		const position = transform.position;
		const pivot = transform.pivot;
		const size = this.size;
		const shortcut = this.shortcut;
		const shortcutId = shortcut != null ? manager.addResource(shortcut) : -1;
		const title = this.title;
		const titleId = title != null ? manager.addResource(title) : -1;
		return [
			this.type,
			manager.addResource(this.id),
			position.x,
			position.y,
			size.x,
			size.y,
			transform.rotation,
			transform.skew.x,
			this.fill.serialize(manager),
			this.stroke.serialize(manager),
			manager.addResource(this.cursor.trim()),
			this.text.serialize(manager),
			this.data.serialize(manager),
			this.radius,
			this.corner,
			-1,
			-1,
			this.action.serialize(manager),
			this.serializeImage(manager),
			this.serializeGradient(manager),
			this.serializeChildren(manager),
			pivot.x,
			pivot.y,
			this.serializeState(manager),
			shortcutId,
			titleId,
			this.uuid
		];
	}

	addUuid(manager: EShapeResourceManagerSerialization): void {
		this.uuid = manager.addUuid(this.uuid);
		const children = this.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			children[i].addUuid(manager);
		}
	}

	updateUuid(manager: EShapeResourceManagerSerialization): void {
		this.uuid = manager.updateUuid(this.uuid);
		const children = this.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			children[i].updateUuid(manager);
		}
	}

	// Hit test
	protected getShapeScale(): number {
		const container = this.root.parent as any;
		if (container != null && container.getShapeScale != null) {
			return container.getShapeScale();
		}
		return 1.0;
	}

	protected getStrokeWidthScale(style: EShapeStrokeStyle): number {
		if (style & EShapeStrokeStyle.NON_EXPANDING_WIDTH) {
			if (style & EShapeStrokeStyle.NON_SHRINKING_WIDTH) {
				return this.getShapeScale();
			} else {
				return Math.min(1.0, this.getShapeScale());
			}
		} else {
			if (style & EShapeStrokeStyle.NON_SHRINKING_WIDTH) {
				return Math.max(1.0, this.getShapeScale());
			} else {
				return 1.0;
			}
		}
	}

	protected getHitTestSize(result: EShapeBaseHitTestData): EShapeBaseHitTestData {
		const size = this.size;
		result.width = 0.5 * size.x;
		result.height = 0.5 * size.y;
		return result;
	}

	toHitTestData(x: number, y: number): EShapeBaseHitTestData {
		const result = this.getHitTestSize(
			(EShapeBase.WORK_HIT_TEST_DATA ??= new EShapeBaseHitTestData())
		);
		const sx = result.width;
		const sy = result.height;
		const pivot = this.transform.pivot;
		const dx = x - pivot.x;
		const dy = y - pivot.y;
		const stroke = this.stroke;
		const strokeWidth = stroke.enable ? stroke.width : 0;
		const strokeScale = this.getStrokeWidthScale(stroke.style);
		const strokeAlign = stroke.align;
		const s = strokeWidth * strokeScale * strokeAlign;
		return result.set(
			0 <= sx ? +dx : -dx,
			0 <= sy ? +dy : -dy,
			Math.abs(sx) + s,
			Math.abs(sy) + s,
			strokeWidth,
			strokeScale,
			strokeAlign
		);
	}

	contains(x: number, y: number): EShape | null {
		const data = this.toHitTestData(x, y);
		if (
			this.containsAbs(
				data.x,
				data.y,
				data.width,
				data.height,
				data.strokeWidth,
				data.strokeScale,
				data.strokeAlign
			)
		) {
			return this;
		}
		return this.containsText(x, y) || this.containsChildren(x, y);
	}

	protected containsText(x: number, y: number): EShape | null {
		const text = this.text;
		const textAtlas = text.atlas;
		if (textAtlas != null) {
			const textWorld = text.world;
			if (textWorld != null) {
				const transform = this.transform.internalTransform;
				const tx = transform.a * x + transform.c * y + transform.tx - textWorld[0];
				const ty = transform.b * x + transform.d * y + transform.ty - textWorld[1];
				const th = textWorld[2] * tx + textWorld[3] * ty;
				const tv = textWorld[4] * tx + textWorld[5] * ty;
				if (0 <= th && th <= textWorld[6] && 0 <= tv && tv <= textWorld[7]) {
					return this;
				}
			}
		}
		return null;
	}

	protected containsChildren(x: number, y: number): EShape | null {
		const children = this.children;
		for (let i = children.length - 1; 0 <= i; --i) {
			const child = children[i];
			child.updateTransform();
			const localTransform = child.transform.localTransform;
			const a = localTransform.a;
			const b = localTransform.b;
			const c = localTransform.c;
			const d = localTransform.d;
			const tx = localTransform.tx;
			const ty = localTransform.ty;
			const id = 1 / (a * d - c * b);
			const lx = (d * x - c * y + ty * c - tx * d) * id;
			const ly = (a * y - b * x - ty * a + tx * b) * id;
			const childResult = child.contains(lx, ly);
			if (childResult != null) {
				return childResult;
			}
		}
		return null;
	}

	containsBBox(x: number, y: number): boolean {
		const data = this.toHitTestData(x, y);
		return this.containsAbsBBox(data.x, data.y, data.width, data.height);
	}

	containsAbs(
		x: number,
		y: number,
		ax: number,
		ay: number,
		sw: number,
		ss: number,
		sa: number
	): boolean {
		return this.containsAbsBBox(x, y, ax, ay);
	}

	containsAbsBBox(x: number, y: number, ax: number, ay: number): boolean {
		return hitTestBBox(x, y, ax, ay);
	}

	select(point: Point): boolean {
		return false;
	}

	//
	toGlobal(position: IPoint, result: Point, skipUpdate?: boolean): Point {
		if (skipUpdate !== true) {
			this.updateTransform();
		}
		result.copyFrom(position);
		this.transform.worldTransform.apply(result, result);
		return result;
	}

	toLocal(position: IPoint, from?: DisplayObject, result?: Point, skipUpdate?: boolean): Point {
		if (skipUpdate !== true) {
			this.updateTransform();
		}
		if (result === undefined) {
			result = new Point();
		}
		result.copyFrom(position);
		this.transform.worldTransform.applyInverse(result, result);
		return result;
	}

	getBounds(work: Point, skipUpdate: boolean, result: Rectangle): Rectangle {
		if (skipUpdate !== true) {
			this.updateTransform();
		}
		const bounds = this._bounds || new Rectangle();
		this._bounds = bounds;
		const worldId = this.transform.getWorldId();
		if (worldId !== this._boundsTransformId) {
			this._boundsTransformId = worldId;
			this.getBounds_(this.transform.worldTransform, work, bounds);
		}
		result.copyFrom(bounds);
		return result;
	}

	getBoundsInternal(work: Point, skipUpdate: boolean, result: Rectangle): Rectangle {
		if (skipUpdate !== true) {
			this.updateTransform();
		}
		const boundsInternal = this._boundsInternal || new Rectangle();
		this._boundsInternal = boundsInternal;
		const currentLocalId = this.transform.getLocalIdCurrent();
		if (currentLocalId !== this._boundsInternalTransformId) {
			this._boundsInternalTransformId = currentLocalId;
			this.getBounds_(this.transform.internalTransform, work, boundsInternal);
		}
		result.copyFrom(boundsInternal);
		return result;
	}

	getBoundsLocal(work: Point, skipUpdate: boolean, result: Rectangle): Rectangle {
		if (skipUpdate !== true) {
			this.updateTransform();
		}
		const boundsLocal = this._boundsLocal || new Rectangle();
		this._boundsLocal = boundsLocal;
		const currentLocalId = this.transform.getLocalIdCurrent();
		if (currentLocalId !== this._boundsLocalTransformId) {
			this._boundsLocalTransformId = currentLocalId;
			this.getBounds_(this.transform.localTransform, work, boundsLocal);
		}
		result.copyFrom(boundsLocal);
		return result;
	}

	protected getBoundsSize(): IPoint {
		return this.size;
	}

	protected getBounds_(transform: Matrix, work: Point, result: Rectangle): Rectangle {
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

		const xmin = Math.min(x0, x1, x2, x3);
		const ymin = Math.min(y0, y1, y2, y3);
		const xmax = Math.max(x0, x1, x2, x3);
		const ymax = Math.max(y0, y1, y2, y3);
		result.x = xmin + transform.tx;
		result.y = ymin + transform.ty;
		result.width = xmax - xmin;
		result.height = ymax - ymin;
		return result;
	}

	//
	destroy(): void {
		const children = this.children;
		for (let i = children.length - 1; 0 <= i; --i) {
			children[i].destroy();
		}
		children.length = 0;
	}

	//
	protected onStateChange(newState: DBaseStateSet, oldState: DBaseStateSet): void {
		this.runtime?.onStateChange(this, newState, oldState);

		const children = this.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			const child = children[i];
			if (child instanceof EShapeBase) {
				child.state.onParentChange(newState, oldState);
			}
		}
	}

	get state(): EShapeStateSet {
		let result = this._state;
		if (result == null) {
			result = new EShapeStateSetImplObservable((newState, oldState): void => {
				this.onStateChange(newState, oldState);
			});
			this._state = result;
		}
		return result;
	}

	focus(): this {
		this.setFocused(true);
		return this;
	}

	blur(): this {
		this.setFocused(false);
		return this;
	}

	protected setFocused(isFocused: boolean): void {
		if (this.state.isFocused !== isFocused) {
			const layer = DApplications.getLayer(this);
			if (layer) {
				layer.getFocusController().set(this, isFocused);
			}
		}
	}

	onKeyDown(e: KeyboardEvent): boolean {
		const runtime = this.runtime;
		if (runtime) {
			return runtime.onKeyDown(this, e);
		}
		return false;
	}

	onKeyUp(e: KeyboardEvent): boolean {
		const runtime = this.runtime;
		if (runtime) {
			return runtime.onKeyUp(this, e);
		}
		return false;
	}

	//
	update(time: number): void {
		const runtime = this.runtime;
		if (runtime) {
			runtime.update(this, time);
		}
	}

	onRender(time: number, renderer: Renderer): void {
		const runtime = this.runtime;
		if (runtime) {
			runtime.onRender(this, time, renderer);
		}
	}

	updateRecursively(time: number): void {
		this.update(time);

		const children = this.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			children[i].update(time);
		}
	}

	copy(source: EShape, part: EShapeCopyPart = EShapeCopyPart.ALL): this {
		this.id = source.id;
		this.uuid = source.uuid;
		if (part & EShapeCopyPart.TRANSFORM) {
			const transform = this.transform;
			const sourceTransform = source.transform;
			transform.position.copyFrom(sourceTransform.position);
			transform.rotation = sourceTransform.rotation;
			transform.skew.copyFrom(sourceTransform.skew);
			transform.pivot.copyFrom(sourceTransform.pivot);
			transform.scale.copyFrom(sourceTransform.scale);
		}
		if (part & EShapeCopyPart.SIZE) {
			this.size.copyFrom(source.size);
		}
		if (part & EShapeCopyPart.STYLE) {
			this.fill.copy(source.fill);
			this.stroke.copy(source.stroke);
			this.text.copy(source.text);
			this.radius = source.radius;
			this.corner = source.corner;
		}
		if (part & EShapeCopyPart.DATA) {
			this.data.copy(source.data);
		}
		if (part & EShapeCopyPart.IMAGE) {
			this.image = source.image;
		}
		if (part & EShapeCopyPart.ACTION) {
			this.action.clearAndAddAll(source.action.values);
			this.interactive = source.interactive;
			this.cursor = source.cursor;
			this.shortcut = source.shortcut;
		}
		if (part & EShapeCopyPart.POINTS) {
			const sourcePoints = source.points;
			if (sourcePoints != null) {
				const points = this.points;
				if (points != null) {
					points.copy(sourcePoints);
				}
			}
		}
		if (part & EShapeCopyPart.STATE) {
			this.state.lock(false).copy(source.state).unlock();
		}
		if (part & EShapeCopyPart.CONNECTOR) {
			if (source instanceof EShapeBase) {
				const sourceConnector = source._connector;
				if (sourceConnector) {
					this.connector.copy(sourceConnector);
				} else {
					const connector = this._connector;
					if (connector) {
						connector.clear();
					}
				}
			} else {
				const connector = this._connector;
				if (connector) {
					connector.clear();
				}
			}
		}
		return this;
	}
}
