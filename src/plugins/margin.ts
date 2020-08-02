import createSpacingUtilityPlugin from '../factories/createSpacingPlugin';

/**
 * Adds utilities for the `scroll-margin` property.
 *
 * @see https://developer.mozilla.org/fr/docs/Web/CSS/scroll-margin
 * @export
 */
export default function (helpers: any): void {
	createSpacingUtilityPlugin('margin', 'snap', 'scrollMargin', helpers);
}
