import { utils } from "pixi.js";

/**
 * A decorator for implementing "on", "once" and "emit" methods.
 *
 * @param constructor a target class
 */
export const EventSupport = ( constructor: Function ) => {
	const p = constructor.prototype;
	const EventEmitterPrototype = utils.EventEmitter.prototype;
	p.on = EventEmitterPrototype.on;
	p.once = EventEmitterPrototype.once;
	p.emit = EventEmitterPrototype.emit;
};
