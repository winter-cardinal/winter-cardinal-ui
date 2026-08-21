import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShape } from "../e-shape";
import { EShapeAcceptorEdgeSide } from "../e-shape-acceptor-edge-side";
import { EShapeAcceptorEdgeType } from "../e-shape-acceptor-edge-type";
import { EShapeCopyPart } from "../e-shape-copy-part";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeType } from "../e-shape-type";
import { EShapeCircle } from "./e-shape-circle";

export class EShapeEmbeddedAcceptorEdge extends EShapeCircle {
	protected _subtype: EShapeAcceptorEdgeType;
	protected _side: EShapeAcceptorEdgeSide;

	/**
	 * Set to true if visible in the viewer mode.
	 */
	protected _vvisible: boolean;

	constructor(type: EShapeType = EShapeType.EMBEDDED_ACCEPTOR_EDGE) {
		super(type);
		this._subtype = EShapeAcceptorEdgeType.HEAD;
		this._side = EShapeAcceptorEdgeSide.ALL;
		this._vvisible = true;
	}

	get subtype(): EShapeAcceptorEdgeType {
		return this._subtype;
	}

	set subtype(subtype: EShapeAcceptorEdgeType) {
		this._subtype = subtype;
	}

	get side(): EShapeAcceptorEdgeSide {
		return this._side;
	}

	set side(side: EShapeAcceptorEdgeSide) {
		this._side = side;
	}

	/**
	 * True if visible in the viewer mode.
	 */
	get vvisible(): boolean {
		return this._vvisible;
	}

	set vvisible(vvisible: boolean) {
		this._vvisible = vvisible;
	}

	override clone(): EShapeEmbeddedAcceptorEdge {
		return new EShapeEmbeddedAcceptorEdge(this.type).copy(this);
	}

	override copy(source: EShape, part: EShapeCopyPart = EShapeCopyPart.ALL): this {
		super.copy(source, part);
		if (source instanceof EShapeEmbeddedAcceptorEdge) {
			this._subtype = source.subtype;
			this._side = source.side;
			this._vvisible = source.vvisible;
		}
		return this;
	}

	override serialize(manager: EShapeResourceManagerSerialization): DDiagramSerializedItem {
		const result = super.serialize(manager);
		result[15] = this._subtype | (this._side << 2) | (this._vvisible ? 1 << 6 : 0);
		return result;
	}
}
