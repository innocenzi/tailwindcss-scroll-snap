import { TailwindPluginHelpers } from '../TailwindPlugin/TailwindPluginHelpers';
import _ from 'lodash';

/**
 * Add utilities to Tailwind.
 *
 * @export
 * @param {string} property The Tailwind config key, which will also be the CSS property. Should be in the CSS-in-JS format.
 * @param {*} config A map of class names => property values.
 *                   The property values can be a string tuple where the first value would be the property name,
 *                   and the second value the property value.
 * @param {TailwindPluginHelpers} helpers The Tailwind plugin helpers object.
 */
export default function(property: string, config: any, { e, theme, variants, addUtilities }: TailwindPluginHelpers) {
  addUtilities(
    _.map(theme(property, config), (value: string | [string, string], name: string) => ({
      [`.${e(name)}`]: { [getPropertyName(property, value)]: getValue(value) },
    })),
    variants(property, [])
  );
}

/**
 * Parses the property name from the value to detect tuples.
 *
 * @param {string} property
 * @param {(string | [string, string])} value
 * @returns
 */
function getPropertyName(property: string, value: string | [string, string]) {
  return Array.isArray(value) ? value[0] : property;
}

/**
 * Parses the actual value name from the value variable to detect tuples.
 *
 * @param {string} property
 * @param {(string | [string, string])} value
 * @returns
 */
function getValue(value: string | [string, string]) {
  return Array.isArray(value) ? value[1] : value;
}
