import createUtilityPlugin from '../factories/createPlugin';

/**
 * Adds utilities for the `scroll-snap-stop` property.
 *
 * @see https://developer.mozilla.org/fr/docs/Web/CSS/scroll-snap-stop
 * @export
 */
export default function (helpers: any) {
	createUtilityPlugin(
		'scrollSnapStop',
		{
			'always-stop': 'always',
		},
		helpers,
	);
}
