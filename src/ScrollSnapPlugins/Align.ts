import { TailwindPluginHelpers } from '../TailwindPlugin/TailwindPluginHelpers';
import createUtilityPlugin from '../Plugins/UtilityPlugin';

/**
 * Adds utilities for the `scroll-snap-align` property.
 * 
 * @see https://developer.mozilla.org/fr/docs/Web/CSS/scroll-snap-align
 * @export
 * @param {TailwindPluginHelpers} helpers
 */
export default function(helpers: TailwindPluginHelpers) {
  createUtilityPlugin('scrollSnapAlign', {
    'snap-start': 'start',
    'snap-end': 'end',
    'snap-center': 'center',
  }, helpers);
}
