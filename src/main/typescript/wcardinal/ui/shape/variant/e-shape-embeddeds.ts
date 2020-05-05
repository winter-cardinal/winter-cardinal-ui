import { DDiagramSerialized, DDiagramSerializedItem, DDiagramSerializedSimple } from "../../d-diagram-serialized";
import { DDiagrams } from "../../d-diagrams";
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeLayerContainer } from "../e-shape-layer-container";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeEmbedded } from "./e-shape-embedded";
import { EShapeEmbeddedLayerContainer } from "./e-shape-embedded-layer-container";

export class EShapeEmbeddeds {
	static from(
		name: string,
		width: number,
		height: number,
		layer: EShapeLayerContainer
	): EShapeEmbedded;
	static from(
		name: string,
		width: number,
		height: number,
		layer: EShapeLayerContainer,
		item: DDiagramSerializedItem,
		manager: EShapeResourceManagerDeserialization
	): Promise<EShapeEmbedded> | EShapeEmbedded;
	static from(
		serialized: DDiagramSerializedSimple | DDiagramSerialized
	): Promise<EShapeEmbedded>;
	static from(
		serializedOrName: any,
		width?: number,
		height?: number,
		layer?: EShapeLayerContainer,
		item?: DDiagramSerializedItem,
		manager?: EShapeResourceManagerDeserialization
	): Promise<EShapeEmbedded> | EShapeEmbedded {
		if( layer == null ) {
			return this.from1_( DDiagrams.toSerialized( serializedOrName ) );
		} else if( item != null ) {
			return this.from2_( serializedOrName, width!, height!, layer, item, manager! );
		} else {
			return this.from3_( serializedOrName, width!, height!, layer );
		}
	}

	protected static from1_( serialized: DDiagramSerialized ): Promise<EShapeEmbedded> {
		const width = serialized.width;
		const height = serialized.height;
		const container = new EShapeEmbeddedLayerContainer( width, height );
		const manager = new EShapeResourceManagerDeserialization( serialized.resources, serialized.tags );
		return DDiagrams.newLayer( serialized, container, manager ).then(() => {
			return this.from( serialized.name, width, height, container );
		});
	}

	protected static from2_(
		name: string, width: number, height: number, layer: EShapeLayerContainer,
		item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization
	): Promise<EShapeEmbedded> | EShapeEmbedded {
		const shape = new EShapeEmbedded( name );
		const result = EShapeDeserializer.deserialize( item, manager, shape );
		const shapeSize = shape.size;
		const sizeX = shapeSize.x;
		const sizeY = shapeSize.y;
		shape.size.set( width, height );
		this.init( shape, layer );
		shape.size.set( sizeX, sizeY );
		return result;
	}

	protected static from3_(
		name: string, width: number, height: number, layer: EShapeLayerContainer
	): EShapeEmbedded {
		const shape = new EShapeEmbedded( name );
		shape.size.set( width, height );
		this.init( shape, layer );
		return shape;
	}

	protected static init( shape: EShapeEmbedded, layer: EShapeLayerContainer ): void {
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
