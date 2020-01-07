import { TailwindPluginHelpers } from '../TailwindPlugin/TailwindPluginHelpers';
import _ from 'lodash';

/**
 * Add utilities to Tailwind.
 *
 * @export
 * @param {string} property The Tailwind config key, which will also be the CSS property. Should be in the CSS-in-JS format.
 * @param {*} config A map of class names => property values.
 * @param {TailwindPluginHelpers} helpers The Tailwind plugin helpers object.
 */
export default function(property: string, config: any, { e, theme, variants, addUtilities }: TailwindPluginHelpers) {
  addUtilities(
    _.map(theme(property, config), (value, name) => ({
      [`.${e(name)}`]: { [property]: value },
    })),
    variants(property, [])
  );
}
