import { DApplicationLayerLike } from "../d-application-layer-like";
import { DApplicationLike, DApplicationTarget } from "../d-application-like";
import { DApplications } from "../d-applications";

export class UtilOverlay {
	protected _layer: DApplicationLayerLike | null;
	protected _application: DApplicationLike | null;

	constructor(options?: { parent?: unknown }) {
		this._layer = null;
		this._application = options?.parent == null ? DApplications.last() : null;
	}

	get picked(): DApplicationLayerLike | null {
		return this._layer;
	}

	pick(owner: DApplicationTarget, opener?: DApplicationTarget): DApplicationLayerLike {
		let layer = this._layer;
		if (layer == null) {
			layer = DApplications.getLayerOverlay(owner);
			if (layer == null && opener != null) {
				layer = DApplications.getLayerOverlay(opener);
			}
			if (layer == null) {
				const application = this._application;
				if (application) {
					layer = application.getLayerOverlay();
				} else {
					layer = DApplications.last().getLayerOverlay();
				}
			}
			this._layer = layer;
		}
		return layer;
	}
}
