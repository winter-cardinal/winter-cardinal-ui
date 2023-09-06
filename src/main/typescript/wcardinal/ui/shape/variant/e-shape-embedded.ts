import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeAcceptorEdge } from "../e-shape-acceptor-edge";
import { EShapeAcceptorEdgeNormal } from "../e-shape-acceptor-edge-normal";
import { EShapeDefaults } from "../e-shape-defaults";
import { EShapeResourceManagerDeserializationMode } from "../e-shape-resource-manager-deserialization-mode";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeType } from "../e-shape-type";
import { EShapeEmbeddedAcceptorEdge } from "./e-shape-embedded-acceptor-edge";
import { EShapeGroupSize } from "./e-shape-group-size";
import { EShapeGroupSizeEditor } from "./e-shape-group-size-editor";
import { EShapeGroupSizeViewer } from "./e-shape-group-size-viewer";
import { EShapeGroupViewer } from "./e-shape-group-viewer";

export class EShapeEmbedded extends EShapeGroupViewer {
	protected _name: string;
	protected _edges?: Map<string, EShapeAcceptorEdge>;

	constructor(
		name: string,
		mode: EShapeResourceManagerDeserializationMode,
		depth: number,
		type: EShapeType = EShapeType.EMBEDDED
	) {
		super(mode, depth, type);
		this._name = name;
		this._depth = depth;
	}

	get name(): string {
		return this._name;
	}

	get edges(): Map<string, EShapeAcceptorEdge> {
		return (this._edges ??= this.newEdges());
	}

	protected newEdges(): Map<string, EShapeAcceptorEdge> {
		const result = new Map<string, EShapeAcceptorEdge>();
		const layers = this.children;
		if (layers != null) {
			const s = this.size;
			const sx = s.x;
			const sy = s.y;
			const sxh = sx * 0.5;
			const syh = sy * 0.5;
			for (let i = 0, imax = layers.length; i < imax; ++i) {
				const layer = layers[i];
				const lp = layer.transform.position;
				const lpx = lp.x + sxh;
				const lpy = lp.y + syh;
				const children = layer.children;
				for (let j = 0, jmax = children.length; j < jmax; ++j) {
					const child = children[j];
					if (child instanceof EShapeEmbeddedAcceptorEdge) {
						child.transform.updateLocalTransform();
						const clt = child.transform.localTransform;
						result.set(child.id, {
							type: child.subtype,
							x: this.toEdgePosition(lpx, clt.tx, sxh, sx),
							y: this.toEdgePosition(lpy, clt.ty, syh, sy),
							normal: this.toEdgeNormal(-clt.c, -clt.d),
							size: {
								x: 0,
								y: 0
							},
							side: child.side
						});
					}
				}
			}
		}
		return result;
	}

	protected toEdgePosition(lp: number, cp: number, sh: number, s: number): number {
		if (0.00001 < Math.abs(s)) {
			return (lp + cp - sh) / s;
		}
		return 0;
	}

	protected toEdgeNormal(x: number, y: number): EShapeAcceptorEdgeNormal {
		const d = x * x + y * y;
		if (0.00001 < d) {
			const f = 1 / d;
			return {
				x: x * f,
				y: y * f
			};
		}
		return {
			x: 0,
			y: -1
		};
	}

	protected isGroupSizeFittable(): boolean {
		return false;
	}

	protected newGroupSize(
		mode: EShapeResourceManagerDeserializationMode,
		depth: number
	): EShapeGroupSize {
		const sizeX = EShapeDefaults.SIZE_X;
		const sizeY = EShapeDefaults.SIZE_Y;
		if (mode !== EShapeResourceManagerDeserializationMode.VIEWER && depth <= 0) {
			return new EShapeGroupSizeEditor(this, sizeX, sizeY, this.isGroupSizeFittable());
		} else {
			return new EShapeGroupSizeViewer(this, sizeX, sizeY, sizeX, sizeY);
		}
	}

	clone(): EShapeEmbedded {
		const result = this.newClone().copy(this);
		const children = this.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			const clone = children[i].clone();
			clone.parent = result;
			result.children.push(clone);
		}
		result.onChildTransformChange();
		result.toDirty();
		return result;
	}

	protected newClone(): EShapeEmbedded {
		const constructor = this.constructor as typeof EShapeEmbedded;
		return new constructor(this._name, this._mode, this._depth, this.type);
	}

	serializeChildren(manager: EShapeResourceManagerSerialization): DDiagramSerializedItem[] {
		return [];
	}

	serializeImage(manager: EShapeResourceManagerSerialization): number {
		return -1;
	}

	serializeGradient(manager: EShapeResourceManagerSerialization): number {
		return -1;
	}

	serialize(manager: EShapeResourceManagerSerialization): DDiagramSerializedItem {
		const result = super.serialize(manager);
		result[15] = manager.addPiece(this._name);
		return result;
	}

	addUuid(manager: EShapeResourceManagerSerialization): void {
		this.uuid = manager.addUuid(this.uuid);
	}

	updateUuid(manager: EShapeResourceManagerSerialization): void {
		this.uuid = manager.updateUuid(this.uuid);
	}
}
