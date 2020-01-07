import { TailwindPluginHelpers } from '../TailwindPlugin/TailwindPluginHelpers';
import createSpacingUtilityPlugin from '../Plugins/SpacingUtilityPlugin';

/**
 * Adds utilities for the `scroll-padding` property.
 * 
 * @see https://developer.mozilla.org/fr/docs/Web/CSS/scroll-padding
 * @export
 * @param {TailwindPluginHelpers} helpers
 */
export default function(helpers: TailwindPluginHelpers): void {
  createSpacingUtilityPlugin('padding', 'snap', 'scrollPadding', helpers);
}
