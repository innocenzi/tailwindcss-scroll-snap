import { TailwindPluginHelpers } from '../TailwindPlugin/TailwindPluginHelpers';
import createSpacingUtilityPlugin from '../Plugins/SpacingUtilityPlugin';

/**
 * Adds utilities for the `scroll-margin` property.
 * 
 * @see https://developer.mozilla.org/fr/docs/Web/CSS/scroll-margin
 * @export
 * @param {TailwindPluginHelpers} helpers
 */
export default function(helpers: TailwindPluginHelpers): void {
  createSpacingUtilityPlugin('margin', 'snap', 'scrollMargin', helpers);
}
