import { EShapeCapability } from "./e-shape-capability";

export interface EShapeCapabilityContainer {
	added: EShapeCapability;
	removed: EShapeCapability;
	locked: EShapeCapability;

	add(target: EShapeCapability): this;
	remove(target: EShapeCapability): this;
	lock(target: EShapeCapability): this;
	unlock(target: EShapeCapability): this;
	clear(): this;

	set(added?: EShapeCapability, removed?: EShapeCapability, locked?: EShapeCapability): this;
	copy(target: EShapeCapabilityContainer): this;
}
