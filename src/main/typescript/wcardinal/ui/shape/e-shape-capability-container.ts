import { EShapeCapability } from "./e-shape-capability";

export interface EShapeCapabilityContainer {
	added: EShapeCapability;
	removed: EShapeCapability;

	add(target: EShapeCapability): this;
	remove(target: EShapeCapability): this;
	clear(): this;

	set(added?: EShapeCapability, removed?: EShapeCapability): this;
	copy(target: EShapeCapabilityContainer): this;
}
