import { isString } from "./is-string"

export const toEnum = <TE>( target: keyof TE | TE[ keyof TE ], te: TE ): TE[ keyof TE ] => {
	return isString( target ) ? (te as any)[ target ] : target;
}
