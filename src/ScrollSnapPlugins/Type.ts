import { TailwindPluginHelpers } from '../TailwindPlugin/TailwindPluginHelpers';
import createUtilityPlugin from '../Plugins/UtilityPlugin';

/**
 * Adds utilities for the `scroll-snap-type` property.
 * 
 * @see https://developer.mozilla.org/fr/docs/Web/CSS/scroll-snap-type
 * @export
 * @param {TailwindPluginHelpers} helpers
 */
export default function(helpers: TailwindPluginHelpers) {
  createUtilityPlugin('scrollSnapType', {
    'no-snap': 'none',
    snap: 'var(--scroll-snap-direction) var(--scroll-snap-constraint)',
    'snap-x': ['--scroll-snap-direction', 'x'],
    'snap-y': ['--scroll-snap-direction', 'y'],
    'snap-both': ['--scroll-snap-direction', 'both'],
    'snap-block': ['--scroll-snap-direction', 'block'],
    'snap-inline': ['--scroll-snap-direction', 'inline'],
    'snap-mandatory': ['--scroll-snap-constraint', 'mandatory'],
    'snap-proximity': ['--scroll-snap-constraint', 'proximity'],
  }, helpers);
}
