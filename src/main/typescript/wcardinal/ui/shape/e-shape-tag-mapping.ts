import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";

export interface EShapeTagMappingObject {
	[ originalId: string ]: string;
}

export interface EShapeTagMapping {
	readonly tags: string[];

	set( target: string, id: string ): void;
	get( target: string ): string | null;

	copy( target: EShapeTagMapping ): this;
	serialize( manager: EShapeResourceManagerSerialization ): number;
	deserialize( target: number, manager: EShapeResourceManagerDeserialization ): void;
	toObject(): EShapeTagMappingObject;
}
