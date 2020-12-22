import { DBaseState } from "./d-base-state";
import { DLinkTarget } from "./d-link-target";
import { isString } from "./util/is-string";

export interface DLinksStateOptions {
	state?: string | string[];
}

export class DLinks {
	static toStateOptions<
		OPTIONS extends DLinksStateOptions
	>( target?: DLinkTarget, options?: OPTIONS ): OPTIONS | undefined {
		if( target === DLinkTarget.NEW_WINDOW && options != null ) {
			const state = options.state;
			if( state == null ) {
				options.state = DBaseState.NEW_WINDOW;
			} else if( isString( state ) ) {
				if( state !== DBaseState.NEW_WINDOW ) {
					options.state = [ state, DBaseState.NEW_WINDOW ];
				}
			} else {
				if( state.indexOf( DBaseState.NEW_WINDOW ) < 0 ) {
					state.push( DBaseState.NEW_WINDOW );
				}
			}
		}
		return options;
	}
}
