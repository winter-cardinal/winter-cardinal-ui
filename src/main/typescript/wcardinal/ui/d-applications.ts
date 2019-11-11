/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DApplicationLayerLike } from "./d-application-layer-like";
import { DApplicationLayerStageLike } from "./d-application-layer-stage-like";
import { DApplicationLike, DApplicationTarget } from "./d-application-like";

export class DApplications {
	protected static INSTANCES: DApplicationLike[] = [];

	static add( instance: DApplicationLike ): void {
		const instances = DApplications.INSTANCES;
		instances.push( instance );
	}

	static first(): DApplicationLike {
		const instances = DApplications.INSTANCES;
		if( 0 < instances.length ) {
			return instances[ 0 ];
		}
		throw new Error( "No application found." );
	}

	static last(): DApplicationLike {
		const instances = DApplications.INSTANCES;
		if( 0 < instances.length ) {
			return instances[ instances.length - 1 ];
		}
		throw new Error( "No application found." );
	}

	static get( index: number ): DApplicationLike | null {
		const instances = DApplications.INSTANCES;
		if( 0 <= index && index < instances.length ) {
			return instances[ index ];
		}
		return null;
	}

	static indexOf( instance: DApplicationLike ): number {
		return DApplications.INSTANCES.indexOf( instance );
	}

	static size(): number {
		return DApplications.INSTANCES.length;
	}

	protected static toStage( target: DApplicationTarget ): DApplicationLayerStageLike | null {
		let stage = target;
		while( stage.parent ) {
			stage = stage.parent;
		}
		if( "layer" in stage ) {
			return stage as DApplicationLayerStageLike;
		}
		return null;
	}

	static find( target: DApplicationTarget ): DApplicationLike | null {
		const stage = this.toStage( target );
		if( stage ) {
			return stage.layer.application;
		}
		return null;
	}

	static getLayerBase( target: DApplicationTarget ): DApplicationLayerLike | null {
		const stage = this.toStage( target );
		if( stage ) {
			return stage.layer.application.getLayerBase();
		}
		return null;
	}

	static getLayerOverlay( target: DApplicationTarget ): DApplicationLayerLike | null {
		const stage = this.toStage( target );
		if( stage ) {
			return stage.layer.application.getLayerOverlay();
		}
		return null;
	}

	static getLayer( target: DApplicationTarget ): DApplicationLayerLike | null {
		const stage = this.toStage( target );
		if( stage ) {
			return stage.layer;
		}
		return null;
	}

	static update( target?: DApplicationTarget ): void {
		if( target ) {
			const stage = this.toStage( target );
			if( stage ) {
				stage.layer.update();
			}
		} else {
			const instances = DApplications.INSTANCES;
			for( let i = 0, imax = instances.length; i < imax; ++i ) {
				instances[ i ].update();
			}
		}
	}

	static render( target?: DApplicationTarget ): void {
		if( target ) {
			const stage = this.toStage( target );
			if( stage ) {
				stage.layer.render();
			}
		} else {
			const instances = DApplications.INSTANCES;
			for( let i = 0, imax = instances.length; i < imax; ++i ) {
				instances[ i ].render();
			}
		}
	}
}
