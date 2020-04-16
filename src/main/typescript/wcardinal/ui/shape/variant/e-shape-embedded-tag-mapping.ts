import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeTagMapping, EShapeTagMappingObject } from "../e-shape-tag-mapping";

export class EShapeEmbeddedTagMapping implements EShapeTagMapping {
	protected _tags: string[];
	protected _value: EShapeTagMappingObject;

	constructor() {
		this._tags = [];
		this._value = {};
	}

	init( tags: string[] | undefined ) {
		const value: EShapeTagMappingObject = {};
		if( tags != null ) {
			for( let i = 0, imax = tags.length; i < imax; ++i ) {
				const tag = tags[ i ];
				value[ tag ] = tag;
			}
		}
		this._tags = tags || [];
		this._value = value;
	}

	get tags(): string[] {
		return this._tags;
	}

	set( originalId: string, id: string ): void {
		const value = this._value;
		if( originalId in value ) {
			value[ originalId ] = id;
		}
	}

	get( originalId: string ): string | null {
		const id: string | undefined = this._value[ originalId ];
		if( id != null ) {
			return id;
		}
		return null;
	}

	copy( target: EShapeTagMapping ): this {
		const value: EShapeTagMappingObject = {};
		const targetObject = target.toObject();
		for( const originalId in targetObject ) {
			value[ originalId ] = targetObject[ originalId ];
		}
		this._tags = target.tags;
		this._value = value;
		return this;
	}

	toObject(): EShapeTagMappingObject {
		return this._value;
	}

	serialize( manager: EShapeResourceManagerSerialization ): number {
		const result: number[] = [];
		const value = this._value;
		for( const originalId in value ) {
			const id = value[ originalId ];
			if( id != null ) {
				result.push( manager.addResource( originalId ) );
				result.push( manager.addTag( id ) );
			}
		}
		return manager.addResource( JSON.stringify( result ) );
	}

	deserialize( target: number, manager: EShapeResourceManagerDeserialization ): void {
		const resources = manager.resources;
		if( 0 <= target && target < resources.length ) {
			let parsed = manager.getExtension<number[]>( target );
			if( parsed == null ) {
				parsed = JSON.parse( resources[ target ] ) as number[];
				manager.setExtension( target, parsed );
			}
			const tags = manager.tags;
			const value = this._value;
			for( let i = 0, imax = parsed.length; i < imax; i += 2 ) {
				const originalId = (resources[ parsed[ i ] ] || "");
				if( originalId in value ) {
					value[ originalId ] = (tags[ parsed[ i + 1 ] ] || "");
				}
			}
		}
	}
}
