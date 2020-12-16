/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DControllerFocus, DFocusable, DFocusableContainer, DFocusableMightBe } from "./d-controller-focus";

export class DControllerDefaultFocus implements DControllerFocus {
	private _focused: DFocusable | null = null;

	focus( focusable: DFocusable | null ): DFocusable | null {
		const previous = this._focused;
		if( previous !== focusable ) {
			if( previous != null ) {
				previous.state.isFocused = false;
			}

			this._focused = focusable;
			if( this.isFocusable( focusable ) ) {
				focusable.state.isFocused = true;
			}
			return previous;
		}
		return null;
	}

	blur( focusable: DFocusable | null ): DFocusable | null {
		if( focusable != null && this._focused === focusable ) {
			this._focused = null;
			focusable.state.isFocused = false;
			return focusable;
		}
		return null;
	}

	clear(): DFocusable | null {
		return this.focus( null );
	}

	set( focusable: DFocusable | null, isFocused: boolean ): DFocusable | null {
		if( isFocused ) {
			return this.focus( focusable );
		} else {
			return this.blur( focusable );
		}
	}

	get(): DFocusable | null {
		return this._focused;
	}

	findParent( mightBeFocusable: DFocusableMightBe | null ): DFocusable | null {
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

	find(
		target: DFocusableMightBe, includesTarget: boolean, includesTargetChildren: boolean,
		direction: boolean, root?: unknown
	): DFocusable | null {
		if( direction ) {
			const result = this.findNext( target, includesTarget, includesTargetChildren );
			if( result != null ) {
				return result;
			}

			const parent = target.parent;
			if( parent != null ) {
				const children = parent.children;
				const index = children.indexOf( target );
				if( 0 <= index ) {
					// Siblings
					const childrenLength = children.length;
					if( this.isFocusReverse( parent ) ) {
						for( let i = index - 1; 0 <= i; --i ) {
							const found = this.findNext( children[ i ], true, true );
							if( found != null ) {
								return found;
							}
						}
						if( this.isFocusRoot( parent ) ) {
							for( let i = childrenLength - 1; index <= i; --i ) {
								const found = this.findNext( children[ i ], true, true );
								if( found != null ) {
									return found;
								}
							}
						}
					} else {
						for( let i = index + 1; i < childrenLength; ++i ) {
							const found = this.findNext( children[ i ], true, true );
							if( found != null ) {
								return found;
							}
						}
						if( this.isFocusRoot( parent ) ) {
							for( let i = 0; i <= index; ++i ) {
								const found = this.findNext( children[ i ], true, true );
								if( found != null ) {
									return found;
								}
							}
						}
					}

					// Parent
					if( parent !== root ) {
						return this.find( parent, false, false, true, root );
					}
				}
			}
		} else {
			const result = this.findPrevious( target, includesTarget, includesTargetChildren );
			if( result != null ) {
				return result;
			}

			const parent = target.parent;
			if( parent != null ) {
				const children = parent.children;
				const index = children.indexOf( target );
				if( 0 <= index ) {
					// Siblings
					const childrenLength = children.length;
					if( this.isFocusReverse( parent ) ) {
						for( let i = index + 1; i < childrenLength; ++i ) {
							const found = this.findPrevious( children[ i ], true, true );
							if( found != null ) {
								return found;
							}
						}
						if( this.isFocusRoot( parent ) ) {
							for( let i = 0; i <= index; ++i ) {
								const found = this.findPrevious( children[ i ], true, true );
								if( found != null ) {
									return found;
								}
							}
							return parent;
						}
					} else {
						for( let i = index - 1; 0 <= i; --i ) {
							const found = this.findPrevious( children[ i ], true, true );
							if( found != null ) {
								return found;
							}
						}
						if( this.isFocusRoot( parent ) ) {
							for( let i = childrenLength - 1; index <= i; --i ) {
								const found = this.findPrevious( children[ i ], true, true );
								if( found != null ) {
									return found;
								}
							}
							return parent;
						}
					}

					// Parent
					if( parent !== root ) {
						return this.find( parent, true, false, false, root );
					}
				}
			}
		}
		return null;
	}

	protected findNext(
		target: DFocusableMightBe, includesTarget: boolean, includesTargetChildren: boolean
	): DFocusable | null {
		// Target itself
		if( includesTarget ) {
			if( this.isFocusable( target ) ) {
				return target;
			}
		}

		// Target children
		if( includesTargetChildren && this.isFocusableContainer( target ) && target.visible ) {
			const children = target.children;
			const childrenLength = children.length;
			if( this.isFocusReverse( target ) ) {
				for( let i = childrenLength - 1; 0 <= i; --i ) {
					const found = this.findNext( children[ i ], true, true );
					if( found != null ) {
						return found;
					}
				}
			} else {
				for( let i = 0; i < childrenLength; ++i ) {
					const found = this.findNext( children[ i ], true, true );
					if( found != null ) {
						return found;
					}
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

	protected findPrevious(
		target: DFocusableMightBe, includesTarget: boolean, includesTargetChildren: boolean
	): DFocusable | null {
		// Target children
		if( includesTargetChildren && this.isFocusableContainer( target ) && target.visible ) {
			const children = target.children;
			const childrenLength = children.length;
			if( this.isFocusReverse( target ) ) {
				for( let i = 0; i < childrenLength; ++i ) {
					const found = this.findPrevious( children[ i ], true, true );
					if( found != null ) {
						return found;
					}
				}
			} else {
				for( let i = childrenLength - 1; 0 <= i; --i ) {
					const found = this.findPrevious( children[ i ], true, true );
					if( found != null ) {
						return found;
					}
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

	protected isFocusable( target: any ): target is DFocusable {
		return (
			target != null &&
			("state" in target) &&
			target.state.inEnabled &&
			target.state.isFocusable &&
			target.visible
		);
	}

	protected isFocusableContainer( target: any ): target is DFocusableContainer {
		return (
			target != null &&
			("children" in target)
		);
	}

	protected isFocusRoot( target: any ): target is DFocusable {
		return (
			target != null &&
			("state" in target) &&
			target.state.isFocusRoot &&
			target.visible
		);
	}

	protected isFocusReverse( target: any ): boolean {
		return (
			target != null &&
			("state" in target) &&
			target.state.isFocusReverse
		);
	}
}
