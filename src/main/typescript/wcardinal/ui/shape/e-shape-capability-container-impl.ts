import { EShapeCapability } from "./e-shape-capability";
import { EShapeCapabilityContainer } from "./e-shape-capability-container";
import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";

export class EShapeCapabilityContainerImpl implements EShapeCapabilityContainer {
	protected _added: EShapeCapability;
	protected _removed: EShapeCapability;

	constructor() {
		this._added = EShapeCapability.NONE;
		this._removed = EShapeCapability.NONE;
	}

	contains(target: EShapeCapability): boolean | undefined {
		if (this._removed & target) {
			return false;
		}
		if (this._added & target) {
			return true;
		}
	}

	add(target: EShapeCapability): void {
		this._removed &= ~target;
		this._added |= target;
	}

	remove(target: EShapeCapability): void {
		this._added &= ~target;
		this._removed |= target;
	}

	copy(target: EShapeCapabilityContainer): this {
		if (target instanceof EShapeCapabilityContainerImpl) {
			this._added = target._added;
			this._removed = target._removed;
		}
		return this;
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		const added = this._added;
		const removed = this._removed;
		if (added !== EShapeCapability.NONE && removed !== EShapeCapability.NONE) {
			return manager.addResource(JSON.stringify([added, removed]));
		}
		return -1;
	}

	deserialize(target: number, manager: EShapeResourceManagerDeserialization): void {
		const resources = manager.resources;
		if (0 <= target && target < resources.length) {
			let parsed = manager.getCapability(target);
			if (parsed == null) {
				parsed = JSON.parse(resources[target]) as [number, number];
				manager.setCapability(target, parsed);
			}
			this._added = parsed[0];
			this._removed = parsed[1];
		}
	}
}
