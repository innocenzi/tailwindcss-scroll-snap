import createUtilityPlugin from '../factories/createPlugin';

/**
 * Adds utilities for the `scroll-snap-align` property.
 *
 * @see https://developer.mozilla.org/fr/docs/Web/CSS/scroll-snap-align
 * @export
 */
export default function (helpers: any) {
	createUtilityPlugin(
		'scrollSnapAlign',
		{
			'snap-start': 'start',
			'snap-end': 'end',
			'snap-center': 'center',
		},
		helpers,
	);
}
