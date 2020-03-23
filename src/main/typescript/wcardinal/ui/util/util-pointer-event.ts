/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, interaction, Point } from "pixi.js";
import InteractionEvent = interaction.InteractionEvent;
import { DApplicationTarget } from "../d-application-like";
import { DApplications } from "../d-applications";

export type UtilPointerEventClickHandler = ( e: InteractionEvent ) => void;

export interface UtilPointerEventClickTarget extends DApplicationTarget {
	on( name: string, handler: UtilPointerEventClickHandler ): void;
}

export class UtilPointerEvent {
	static CLICK_DISTANCE_THRESHOLD: number = 10;
	static DBLCLICK_INTERVAL_THRESHOLD: number = 333;
	static LONG_CLICK_THRESHOLD: number = 750;

	static get touchable(): boolean {
		return ( "ontouchstart" in document );
	}

	static get tap(): string {
		return "pointertap";
	}

	static get down(): string {
		return "pointerdown";
	}

	static get enter(): string {
		return "pointerenter";
	}

	static get leave(): string {
		return "pointerleave";
	}

	static get move(): string {
		return "pointermove";
	}

	static get out(): string {
		return "pointerout";
	}

	static get over(): string {
		return "pointerover";
	}

	static get up(): string {
		return "pointerup";
	}

	static get cancel(): string {
		return "pointercancel";
	}

	static toGlobal(
		e: MouseEvent | TouchEvent,
		interactionManager: interaction.InteractionManager,
		result: Point
	): Point {
		if( "touches" in e ) {
			const touches = e.changedTouches;
			const touch = touches[ touches.length - 1 ];
			if( touch != null ) {
				interactionManager.mapPositionToPoint( result, touch.clientX, touch.clientY );
			} else {
				interactionManager.mapPositionToPoint( result, 0, 0 );
			}
		} else {
			interactionManager.mapPositionToPoint( result, e.clientX, e.clientY );
		}
		return result;
	}

	static onClick( target: UtilPointerEventClickTarget, handler: UtilPointerEventClickHandler ): void {
		if( ! this.touchable ) {
			target.on( "click", handler );
		} else {
			let isDowned = false;
			let downX = 0;
			let downY = 0;
			let interactionManagerBound: interaction.InteractionManager | null = null;
			const cleanup = (): void => {
				isDowned = false;
				if( interactionManagerBound ) {
					interactionManagerBound.off( up, onUp );
					interactionManagerBound = null;
				}
			};
			const isValidDistance = ( e: InteractionEvent ): boolean => {
				const global = e.data.global;
				const dx = Math.abs( downX - global.x );
				const dy = Math.abs( downY - global.y );
				const threshold = this.CLICK_DISTANCE_THRESHOLD;
				return ( dx <= threshold && dy <= threshold );
			};
			target.on( "click", ( e: InteractionEvent ): void => {
				if( isDowned ) {
					cleanup();
				}
				handler( e );
			});
			const up = this.up;
			const onUp = ( e: InteractionEvent ): void => {
				if( isDowned ) {
					cleanup();
					if( this.contains( target, e.target ) ) {
						if( isValidDistance( e ) ) {
							handler( e );
						}
					}
				}
			};
			target.on( this.down, ( e: InteractionEvent ): void => {
				if( isDowned ) {
					const global = e.data.global;
					downX = global.x;
					downY = global.y;
				} else {
					isDowned = true;
					const global = e.data.global;
					downX = global.x;
					downY = global.y;
					if( interactionManagerBound ) {
						interactionManagerBound.off( up, onUp );
						interactionManagerBound = null;
					}
					const layer = DApplications.getLayer( target );
					if( layer ) {
						interactionManagerBound = layer.renderer.plugins.interaction;
						interactionManagerBound.once( up, onUp );
					}
				}
			});
		}
	}

	static onLongClick(
		target: UtilPointerEventClickTarget,
		onClick: UtilPointerEventClickHandler,
		onLongClick: UtilPointerEventClickHandler
	): void {
		if( ! this.touchable ) {
			target.on( "click", onClick );
		} else {
			let isDowned = false;
			let downX = 0;
			let downY = 0;
			let timeoutId: number | null = null;
			let interactionManagerBound: interaction.InteractionManager | null = null;
			const cleanupTimeout = (): void => {
				if( timeoutId != null ) {
					clearTimeout( timeoutId );
					timeoutId = null;
				}
			};
			const cleanup = (): void => {
				isDowned = false;
				if( interactionManagerBound ) {
					interactionManagerBound.off( up, onUp );
					interactionManagerBound.off( move, onMove );
					interactionManagerBound = null;
				}
				cleanupTimeout();
			};
			const isValidDistance = ( e: InteractionEvent ): boolean => {
				const global = e.data.global;
				const dx = Math.abs( downX - global.x );
				const dy = Math.abs( downY - global.y );
				const threshold = this.CLICK_DISTANCE_THRESHOLD;
				return ( dx < threshold && dy < threshold );
			};
			target.on( "click", ( e: InteractionEvent ): void => {
				if( isDowned ) {
					cleanup();
				}
				onClick( e );
			});
			const up = this.up;
			const move = this.move;
			const onUp = ( e: InteractionEvent ): void => {
				if( isDowned ) {
					cleanup();
					if( this.contains( target, e.target ) ) {
						if( isValidDistance( e ) ) {
							onClick( e );
						}
					}
				}
			};
			const onMove = ( e: InteractionEvent ): void => {
				if( isDowned ) {
					if( this.contains( target, e.target ) ) {
						if( ! isValidDistance( e ) ) {
							cleanup();
						}
					}
				}
			};
			target.on( this.down, ( e: InteractionEvent ): void => {
				if( ! isDowned ) {
					isDowned = true;
					const global = e.data.global;
					downX = global.x;
					downY = global.y;
					cleanupTimeout();
					const oe = e.data.originalEvent;
					if( "touches" in oe ) {
						timeoutId = window.setTimeout((): void => {
							if( isDowned ) {
								cleanup();
								onLongClick( e );
							}
						}, this.LONG_CLICK_THRESHOLD );
					}
					if( interactionManagerBound ) {
						interactionManagerBound.off( up, onUp );
						interactionManagerBound.off( move, onMove );
						interactionManagerBound = null;
					}
					const layer = DApplications.getLayer( target );
					if( layer ) {
						interactionManagerBound = layer.renderer.plugins.interaction;
						interactionManagerBound.once( up, onUp );
						interactionManagerBound.on( move, onMove );
					}
				}
			});
		}
	}

	static onDblClick( target: HTMLElement, handler: ( e: MouseEvent | TouchEvent ) => void ): void {
		if( ! this.touchable ) {
			target.addEventListener( "dblclick", handler );
		} else {
			let isDowned = 0;
			let downX = 0;
			let downY = 0;
			let clickTime = 0;

			target.addEventListener( "dblclick", handler );

			target.addEventListener( "touchend", ( e: TouchEvent ): void => {
				if( isDowned === 1 || isDowned === 3 ) {
					const touches = e.changedTouches;
					const touch: Touch | null = touches[ touches.length - 1 ];
					if( touch != null ) {
						const dx = downX - touch.clientX;
						const dy = downY - touch.clientY;
						if( Math.abs( dx ) + Math.abs( dy ) < this.CLICK_DISTANCE_THRESHOLD ) {
							isDowned += 1;
							if( isDowned === 4 ) {
								isDowned = 0;
								const elapsedTime = e.timeStamp - clickTime;
								if( elapsedTime < this.DBLCLICK_INTERVAL_THRESHOLD ) {
									handler( e );
								} else {
									clickTime = e.timeStamp;
									isDowned = 2;
								}
							} else {
								clickTime = e.timeStamp;
							}
							return;
						}
					}
				}
				isDowned = 0;
			});

			target.addEventListener( "touchstart", ( e: TouchEvent ): void => {
				if( isDowned === 0 ) {
					const touch: Touch | null = e.touches.item( e.touches.length - 1 );
					if( touch != null ) {
						isDowned = 1;
						downX = touch.clientX;
						downY = touch.clientY;
						return;
					}
				} else if( isDowned === 2 ) {
					const touch: Touch | null = e.touches.item( e.touches.length - 1 );
					if( touch != null ) {
						isDowned = 3;
						downX = touch.clientX;
						downY = touch.clientY;
						return;
					}
				}
				isDowned = 0;
			});
		}
	}

	static contains( target: unknown, targetOrChild: DisplayObject | null ): boolean {
		let current = targetOrChild;
		while( current != null && current !== target ) {
			current = current.parent;
		}
		return current === target;
	}
}
