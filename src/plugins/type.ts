import createUtilityPlugin from '../factories/createPlugin';

/**
 * Adds utilities for the `scroll-snap-type` property.
 *
 * @see https://developer.mozilla.org/fr/docs/Web/CSS/scroll-snap-type
 * @export
 */
export default function (helpers: any) {
	createUtilityPlugin(
		'scrollSnapType',
		{
			'no-snap': 'none',
			snap: 'var(--scroll-snap-direction, both) var(--scroll-snap-constraint, mandatory)',
			'snap-x': ['--scroll-snap-direction', 'x'],
			'snap-y': ['--scroll-snap-direction', 'y'],
			'snap-both': ['--scroll-snap-direction', 'both'],
			'snap-block': ['--scroll-snap-direction', 'block'],
			'snap-inline': ['--scroll-snap-direction', 'inline'],
			'snap-mandatory': ['--scroll-snap-constraint', 'mandatory'],
			'snap-proximity': ['--scroll-snap-constraint', 'proximity'],
		},
		helpers,
	);
}
