import { DDiagramSerialized, DDiagramSerializedItem, DDiagramSerializedSimple } from "../../d-diagram-serialized";
import { DDiagrams } from "../../d-diagrams";
import { EShape } from "../e-shape";
import { EShapeDefaults } from "../e-shape-defaults";
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapeLayerContainer } from "../e-shape-layer-container";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeTagMappingObject } from "../e-shape-tag-mapping";
import { EShapeEmbedded } from "./e-shape-embedded";
import { EShapeEmbeddedLayerContainer } from "./e-shape-embedded-layer-container";

export class EShapeEmbeddeds {
	static from(
		name: string,
		tags: string[] | undefined,
		layer: EShapeLayerContainer
	): EShapeEmbedded;
	static from(
		name: string,
		tags: string[] | undefined,
		layer: EShapeLayerContainer,
		item: DDiagramSerializedItem,
		manager: EShapeResourceManagerDeserialization
	): Promise<EShapeEmbedded> | EShapeEmbedded;
	static from(
		serialized: DDiagramSerializedSimple | DDiagramSerialized
	): Promise<EShapeEmbedded>;
	static from(
		serializedOrName: any,
		tags?: string[],
		layer?: EShapeLayerContainer,
		item?: DDiagramSerializedItem,
		manager?: EShapeResourceManagerDeserialization
	): Promise<EShapeEmbedded> | EShapeEmbedded {
		if( layer == null ) {
			return this.from1_( DDiagrams.toSerialized( serializedOrName ) );
		} else if( item != null && manager != null ) {
			return this.from2_( serializedOrName, tags, layer, item, manager );
		} else {
			return this.from3_( serializedOrName, tags, layer );
		}
	}

	protected static from1_( serialized: DDiagramSerialized ): Promise<EShapeEmbedded> {
		const container = new EShapeEmbeddedLayerContainer();
		const manager = new EShapeResourceManagerDeserialization( serialized.resources, serialized.tags );
		return DDiagrams.newLayer( serialized, container, manager ).then(() => {
			return this.from( serialized.name, serialized.tags, container );
		});
	}

	protected static from2_(
		name: string, tags: string[] | undefined, layer: EShapeLayerContainer,
		item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization
	): Promise<EShapeEmbedded> | EShapeEmbedded {
		const shape = new EShapeEmbedded( name );
		shape.tag.mapping.init( tags );
		const result = EShapeDeserializer.deserialize( item, manager, shape );
		this.init( shape, layer );
		return result;
	}

	protected static from3_( name: string, tags: string[] | undefined, layer: EShapeLayerContainer ): EShapeEmbedded {
		const shape = new EShapeEmbedded( name );
		shape.tag.mapping.init( tags );
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
		if( ! EShapeDefaults.IS_EDIT_MODE ) {
			this.replaceTags( shape.tag.mapping.toObject(), shape.children );
		}
		shape.onChildTransformChange();
		shape.toDirty();
		shape.size.init();
	}

	protected static replaceTagsOf( mapping: EShapeTagMappingObject, shape: EShape ): void {
		const tag = shape.tag;
		for( let i = 0, imax = tag.size(); i < imax; ++i ) {
			const value = tag.get( i );
			if( value ) {
				const mappedId = mapping[ value.id ];
				if( mappedId != null ) {
					value.id = mappedId;
				}
			}
		}
		this.replaceTags( mapping, shape.children );
	}

	protected static replaceTags( mapping: EShapeTagMappingObject, shapes: EShape[] ): void {
		for( let i = 0, imax = shapes.length; i < imax; ++i ) {
			this.replaceTagsOf( mapping, shapes[ i ] );
		}
	}
}
