import { TailwindPluginHelpers } from '../TailwindPlugin/TailwindPluginHelpers';
import createUtilityPlugin from '../Plugins/UtilityPlugin';

/**
 * Adds utilities for the `scroll-snap-stop` property.
 * 
 * @see https://developer.mozilla.org/fr/docs/Web/CSS/scroll-snap-stop
 * @export
 * @param {TailwindPluginHelpers} helpers
 */
export default function(helpers: TailwindPluginHelpers) {
  createUtilityPlugin('scrollSnapStop', {
    'alwats-stop': 'always'
  }, helpers);
}
