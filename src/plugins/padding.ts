import createSpacingUtilityPlugin from '../factories/createSpacingPlugin';

/**
 * Adds utilities for the `scroll-padding` property.
 *
 * @see https://developer.mozilla.org/fr/docs/Web/CSS/scroll-padding
 * @export
 */
export default function (helpers: any): void {
	createSpacingUtilityPlugin('padding', 'snap', 'scrollPadding', helpers);
}
