import { DDiagramSerialized, DDiagramSerializedItem } from "../../d-diagram-serialized";
import { DDiagrams } from "../../d-diagrams";
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeLayerContainer } from "../e-shape-layer-container";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeEmbedded } from "./e-shape-embedded";
import { EShapeEmbeddedLayerContainer } from "./e-shape-embedded-layer-container";

export class EShapeEmbeddeds {
	static from( serialized: DDiagramSerialized, isEditMode: boolean ): Promise<EShapeEmbedded> {
		const width = serialized.width;
		const height = serialized.height;
		const container = new EShapeEmbeddedLayerContainer( width, height, isEditMode );
		const manager = new EShapeResourceManagerDeserialization(
			serialized, undefined, undefined, isEditMode
		);
		return DDiagrams.newLayer( serialized, container, manager ).then(() => {
			return this.create( serialized.name, width, height, container, manager );
		});
	}

	static deserialize(
		name: string, width: number, height: number, layer: EShapeLayerContainer,
		manager: EShapeResourceManagerDeserialization, item: DDiagramSerializedItem
	): Promise<EShapeEmbedded> | EShapeEmbedded {
		const shape = new EShapeEmbedded( name, manager.isEditMode );
		const result = EShapeDeserializer.deserialize( item, manager, shape );
		const shapeSize = shape.size;
		const sizeX = shapeSize.x;
		const sizeY = shapeSize.y;
		shape.size.set( width, height );
		this.init( shape, layer );
		shape.size.set( sizeX, sizeY );
		return result;
	}

	static create(
		name: string, width: number, height: number, layer: EShapeLayerContainer,
		manager: EShapeResourceManagerDeserialization
	): EShapeEmbedded {
		const shape = new EShapeEmbedded( name, manager.isEditMode );
		shape.size.set( width, height );
		this.init( shape, layer );
		return shape;
	}

	static init( shape: EShapeEmbedded, layer: EShapeLayerContainer ): void {
		const layers = layer.children;
		const children = shape.children;
		for( let i = 0, imax = layers.length; i < imax; ++i ) {
			const clone = layers[ i ].clone();
			clone.parent = shape;
			children.push( clone );
		}
		shape.onChildTransformChange();
		shape.toDirty();
		shape.size.init();
	}
}
