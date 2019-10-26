/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import {
	DControllerFocus, DFocusable, DFocusableContainer, DFocusableMightBe
} from "./d-controller-focus";

const isFocusable = ( target: any ): target is DFocusable => {
	return ( target != null && ("setState" in target) );
};

const isFocusableContainer = ( target: any ): target is DFocusableContainer => {
	return ( target != null && "children" in target );
};

interface Selectable {
	select(): void;
}

const isSelectable = ( target: any ): target is Selectable => {
	return ( target != null && "select" in target );
};

export class DControllerDefaultFocus implements DControllerFocus {
	private _focused: DFocusable | null = null;

	setFocused( focusable: DFocusable | null, isFocused: boolean, select: boolean ): DFocusable | null {
		if( isFocused ) {
			const previous = this._focused;
			if( previous !== focusable ) {
				if( previous != null ) {
					previous.setState( DBaseState.FOCUSED, false );
				}

				this._focused = focusable;
				if( focusable != null && this.isFocusable( focusable ) ) {
					focusable.setState( DBaseState.FOCUSED, true );
					if( select && isSelectable( focusable ) ) {
						focusable.select();
					}
				}
				return previous;
			} else {
				return null;
			}
		} else {
			if( focusable != null && this._focused === focusable ) {
				focusable.setState( DBaseState.FOCUSED, false );
				if( select && isSelectable( focusable ) ) {
					focusable.select();
				}
				return focusable;
			} else {
				return null;
			}
		}
	}

	getFocused(): DFocusable | null {
		return this._focused;
	}

	findFocusableParent( mightBeFocusable: DFocusableMightBe | null ): DFocusable | null {
		let current: DFocusableMightBe | DFocusableContainer | null = mightBeFocusable;
		while( current != null ) {
			if( this.isFocusable( current ) ) {
				return current;
			} else {
				current = current.parent;
			}
		}
		return null;
	}

	protected isFocusable( target: unknown ): target is DFocusable {
		return (
			isFocusable( target ) &&
			! target.hasState( DBaseState.DISABLED | DBaseState.UNFOCUSABLE ) &&
			target.visible
		);
	}

	protected isFocusRoot( target: unknown ): target is DFocusable {
		return (
			isFocusable( target ) &&
			target.hasState( DBaseState.FOCUS_ROOT ) &&
			target.visible
		);
	}

	findFocusable(
		target: DFocusableMightBe, includesTarget: boolean, includesTargetChildren: boolean, direction: boolean
	): DFocusable | null {
		if( direction ) {
			const result = this.findFocusableNext( target, includesTarget, includesTargetChildren );
			if( result != null ) {
				return result;
			}

			const parent = target.parent;
			if( parent != null ) {
				const children = parent.children;
				const index = children.indexOf( target );
				if( 0 <= index ) {
					// Siblings
					for( let i = index + 1, imax = children.length; i < imax; ++i ) {
						const found = this.findFocusableNext( children[ i ], true, true );
						if( found != null ) {
							return found;
						}
					}
					if( this.isFocusRoot( parent ) ) {
						for( let i = 0, imax = index + 1; i < imax; ++i ) {
							const found = this.findFocusableNext( children[ i ], true, true );
							if( found != null ) {
								return found;
							}
						}
					}

					// Parent
					return this.findFocusable( parent, false, false, true );
				}
			}
		} else {
			const result = this.findFocusablePrevious( target, includesTarget, includesTargetChildren );
			if( result != null ) {
				return result;
			}

			const parent = target.parent;
			if( parent != null ) {
				const children = parent.children;
				const index = children.indexOf( target );
				if( 0 <= index ) {
					// Siblings
					for( let i = index - 1; 0 <= i; --i ) {
						const found = this.findFocusablePrevious( children[ i ], true, true );
						if( found != null ) {
							return found;
						}
					}
					if( this.isFocusRoot( parent ) ) {
						for( let i = children.length - 1; index <= i; --i ) {
							const found = this.findFocusablePrevious( children[ i ], true, true );
							if( found != null ) {
								return found;
							}
						}
						return parent;
					}

					// Parent
					return this.findFocusable( parent, true, false, false );
				}
			}
		}
		return null;
	}

	protected findFocusableNext(
		target: DFocusableMightBe, includesTarget: boolean, includesTargetChildren: boolean
	): DFocusable | null {
		// Target itself
		if( includesTarget ) {
			if( this.isFocusable( target ) ) {
				return target;
			}
		}

		// Target children
		if( includesTargetChildren && isFocusableContainer( target ) && target.visible ) {
			const children = target.children;
			for( let i = 0, imax = children.length; i < imax; ++i ) {
				const found = this.findFocusableNext( children[ i ], true, true );
				if( found != null ) {
					return found;
				}
			}
		}

		// Siblings
		if( this.isFocusRoot( target ) ) {
			return target;
		}

		// Found nothing
		return null;
	}

	protected findFocusablePrevious(
		target: DFocusableMightBe, includesTarget: boolean, includesTargetChildren: boolean
	): DFocusable | null {
		// Target children
		if( includesTargetChildren && isFocusableContainer( target ) && target.visible ) {
			const children = target.children;
			for( let i = children.length - 1; 0 <= i; --i ) {
				const found = this.findFocusablePrevious( children[ i ], true, true );
				if( found != null ) {
					return found;
				}
			}
		}

		// Target itself
		if( includesTarget ) {
			if( this.isFocusable( target ) ) {
				return target;
			}
		}

		// Siblings
		if( this.isFocusRoot( target ) ) {
			return target;
		}

		// Found nothing
		return null;
	}
}
