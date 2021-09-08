import { DDiagramBaseController } from "../../d-diagram-base";
import {
	DDiagramSerialized,
	DDiagramSerializedItem,
	DDiagramSerializedSimple
} from "../../d-diagram-serialized";
import { DDiagrams } from "../../d-diagrams";
import { EShapeConnectors } from "../e-shape-connectors";
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeLayerContainer } from "../e-shape-layer-container";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeEmbedded } from "./e-shape-embedded";
import { EShapeEmbeddedDatum } from "./e-shape-embedded-datum";
import { EShapeEmbeddedLayerContainer } from "./e-shape-embedded-layer-container";

export class EShapeEmbeddeds {
	static from(
		serializedOrSimple: DDiagramSerialized | DDiagramSerializedSimple,
		controller: DDiagramBaseController | null | undefined,
		isEditMode: boolean
	): Promise<EShapeEmbedded> {
		const serialized = DDiagrams.toSerialized(serializedOrSimple);
		const pieces = serialized.pieces;
		const pieceDataOrPromise = DDiagrams.toPieceData(controller, pieces, isEditMode);
		if (pieceDataOrPromise == null) {
			return this.from_(serialized, isEditMode);
		} else {
			return pieceDataOrPromise.then((pieceData) => {
				return this.from_(serialized, isEditMode, pieces, pieceData);
			});
		}
	}

	protected static from_(
		serialized: DDiagramSerialized,
		isEditMode: boolean,
		pieces?: string[],
		pieceData?: Map<string, EShapeEmbeddedDatum>
	): Promise<EShapeEmbedded> {
		const width = serialized.width;
		const height = serialized.height;
		const container = new EShapeEmbeddedLayerContainer(width, height, isEditMode);
		const manager = new EShapeResourceManagerDeserialization(
			serialized,
			pieces,
			pieceData,
			isEditMode
		);
		return DDiagrams.newLayer(serialized, container, manager).then(() => {
			return this.create(serialized.name, width, height, container, manager);
		});
	}

	static deserialize(
		name: string,
		width: number,
		height: number,
		layer: EShapeLayerContainer,
		manager: EShapeResourceManagerDeserialization,
		item: DDiagramSerializedItem
	): Promise<EShapeEmbedded> | EShapeEmbedded {
		const shape = new EShapeEmbedded(name, manager.isEditMode);
		const result = EShapeDeserializer.deserialize(item, manager, shape);
		const shapeSize = shape.size;
		const sizeX = shapeSize.x;
		const sizeY = shapeSize.y;
		shape.size.set(width, height);
		this.init(shape, layer);
		shape.size.set(sizeX, sizeY);
		return result;
	}

	static create(
		name: string,
		width: number,
		height: number,
		layer: EShapeLayerContainer,
		manager: EShapeResourceManagerDeserialization
	): EShapeEmbedded {
		const shape = new EShapeEmbedded(name, manager.isEditMode);
		shape.size.set(width, height);
		this.init(shape, layer);
		return shape;
	}

	static init(shape: EShapeEmbedded, layerContainer: EShapeLayerContainer): void {
		const layers = layerContainer.children;
		const children = shape.children;
		for (let i = 0, imax = layers.length; i < imax; ++i) {
			const layer = layers[i];
			const clone = layer.clone();
			clone.parent = shape;
			children.push(clone);
			EShapeConnectors.move(layer, clone);
		}
		shape.onChildTransformChange();
		shape.toDirty();
		shape.size.init();
		shape.onAttach();
	}
}
