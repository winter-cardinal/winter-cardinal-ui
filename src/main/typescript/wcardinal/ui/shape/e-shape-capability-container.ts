import { EShapeCapability } from "./e-shape-capability";
import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";

export interface EShapeCapabilityContainer {
	contains(target: EShapeCapability): boolean | undefined;
	add(target: EShapeCapability): void;
	remove(target: EShapeCapability): void;

	copy(target: EShapeCapabilityContainer): this;
	serialize(manager: EShapeResourceManagerSerialization): number;
	deserialize(target: number, manager: EShapeResourceManagerDeserialization): void;
}
