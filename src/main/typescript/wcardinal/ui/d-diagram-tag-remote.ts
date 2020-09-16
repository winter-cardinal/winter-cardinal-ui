
export interface DDiagramTagRemoteController {
	write( id: string, value: unknown ): void;
}

export interface DDiagramTagRemoteOptions {
	controller?: DDiagramTagRemoteController;
}

export class DDiagramTagRemote {
	protected _controller?: DDiagramTagRemoteController;

	constructor( options?: DDiagramTagRemoteOptions ) {
		this._controller = options && options.controller;
	}

	set( id: string, value: unknown, time: number ): void {
		const controller = this._controller;
		if( controller ) {
			controller.write( id, value );
		}
	}
}
