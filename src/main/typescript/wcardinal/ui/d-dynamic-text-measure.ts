import { DDynamicTextMeasureResult } from "./d-dynamic-text-measure-result";
import { DynamicFontAtlas } from "./util/dynamic-font-atlas";
import { UtilCharacterIterator } from "./util/util-character-iterator";

export class DDynamicTextMeasure {
	protected static RESULT: DDynamicTextMeasureResult | null = null;

	static measure(
		text: string, atlas: DynamicFontAtlas | null, clippingWidth: number | undefined
	): DDynamicTextMeasureResult {
		const result = DDynamicTextMeasure.RESULT = DDynamicTextMeasure.RESULT || new DDynamicTextMeasureResult();
		result.start();
		if( atlas != null ) {
			const iterator = UtilCharacterIterator.from( text );
			const lineHeight = atlas.font.height;
			const newLine = "\n";
			while( iterator.hasNext() ) {
				const character = iterator.next();
				if( character === newLine ) {
					result.newLine( lineHeight );
				} else {
					const a = atlas.get( character );
					if( a != null ) {
						const x = result.x;
						if( clippingWidth != null && clippingWidth < x + a.advance ) {
							result.clipped = true;
							const dots = atlas.get( "..." );
							if( dots != null ) {
								if( clippingWidth < x + dots.advance ) {
									if( result.pop() ) {
										result.push( dots );
									}
								} else {
									result.push( dots );
								}
							}
							while( iterator.hasNext() ) {
								if( iterator.next() === newLine ) {
									result.newLine( lineHeight );
									break;
								}
							}
						} else {
							result.push( a );
						}
					}
				}
			}
			result.end( lineHeight );
		}
		return result;
	}
}
