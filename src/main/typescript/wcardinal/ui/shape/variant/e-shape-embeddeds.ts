import { DDiagramBaseController } from "../../d-diagram-base";
import { DDiagramSerialized, DDiagramSerializedSimple } from "../../d-diagram-serialized";
import { DDiagrams } from "../../d-diagrams";
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
		return DDiagrams.toPieceData(controller, pieces, isEditMode).then((pieceData) => {
			return this.from_(serialized, isEditMode, pieces, pieceData);
		});
	}

	private static from_(
		serialized: DDiagramSerialized,
		isEditMode: boolean,
		pieces?: string[],
		pieceData?: Map<string, EShapeEmbeddedDatum | null>
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

	static create(
		name: string,
		width: number,
		height: number,
		container: EShapeLayerContainer,
		manager: EShapeResourceManagerDeserialization
	): EShapeEmbedded {
		const shape = new EShapeEmbedded(name, manager.isEditMode);
		shape.size.set(width, height);
		container.copyTo(shape);
		shape.size.init();
		return shape;
	}
}
