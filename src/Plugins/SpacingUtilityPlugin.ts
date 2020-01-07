import { TailwindPluginHelpers } from '../TailwindPlugin/TailwindPluginHelpers';
// @ts-ignore // FIXME
import prefixNegativeModifiers from 'tailwindcss/lib/util/prefixNegativeModifiers';
import _ from 'lodash';
import { TailwindConfigUtils } from '../TailwindPlugin/TailwindConfigUtils';
import negative from '../Utility/negative';

/**
 * Available spacing types.
 * Exported as a type instead of enum for JavaScript convenience.
 *
 * @export
 * @type {SpacingType}
 */
export type SpacingType = 'margin' | 'padding';

/**
 * Available spacing directions.
 *
 * @export
 * @enum {number}
 */
export enum SpacingDirection {
  Top = 'top',
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right',
  Vertical = 'y',
  Horizontal = 'x',
}

/**
 * Gets the spacing property name for a given property and direction.
 *
 * @export
 * @param {string} property
 * @param {SpacingDirection} direction
 * @returns
 */
export function getSpacingPropertyName(property: string, direction: SpacingDirection) {
  return `${_.kebabCase(property)}-${direction}`;
}

/**
 * Add spacing utilities to Tailwind.
 *
 * @export
 * @param {SpacingType} type The type of spacing.
 * @param {string} property The property that applies the spacing.
 * @param {string} shortname The short name for utility classes names.
 * @param {TailwindPluginHelpers} { e, theme, variants, addUtilities }
 */
export default function(type: SpacingType, shortname: string, property: string, { e, theme, variants, addUtilities }: TailwindPluginHelpers) {
  const prefix = `${_.kebabCase(shortname)}-${type.charAt(0)}`; // property-name-my-4
  const generators: Array<(size: number, modifier: string) => any> = [
    // 4-way spacing
    (size, modifier) => {
      return {
        [`.${e(prefixNegativeModifiers(prefix, modifier))}`]: { [property]: `${size}` },
      };
    },

    // 2-way spacing
    (size, modifier) => ({
      [`.${e(prefixNegativeModifiers(`${prefix}y`, modifier))}`]: {
        [getSpacingPropertyName(property, SpacingDirection.Top)]: `${size}`,
        [getSpacingPropertyName(property, SpacingDirection.Bottom)]: `${size}`,
      },
      [`.${e(prefixNegativeModifiers(`${prefix}x`, modifier))}`]: {
        [getSpacingPropertyName(property, SpacingDirection.Left)]: `${size}`,
        [getSpacingPropertyName(property, SpacingDirection.Right)]: `${size}`,
      },
    }),

    // 1-way spacing
    (size, modifier) => ({
      [`.${e(prefixNegativeModifiers(`${prefix}t`, modifier))}`]: { [getSpacingPropertyName(property, SpacingDirection.Top)]: `${size}` },
      [`.${e(prefixNegativeModifiers(`${prefix}r`, modifier))}`]: { [getSpacingPropertyName(property, SpacingDirection.Right)]: `${size}` },
      [`.${e(prefixNegativeModifiers(`${prefix}b`, modifier))}`]: { [getSpacingPropertyName(property, SpacingDirection.Bottom)]: `${size}` },
      [`.${e(prefixNegativeModifiers(`${prefix}l`, modifier))}`]: { [getSpacingPropertyName(property, SpacingDirection.Left)]: `${size}` },
    }),
  ];

  addUtilities(
    _.flatMap(generators, generator => {
      return _.flatMap(theme(property, getConfigType(type, theme)), generator);
    }),
    variants(property)
  );
}

export function getConfigType(type: SpacingType, theme: any) {
  return 'margin' === type ? negativeSpacingConfig(theme) : spacingConfig(theme);
}

export const negativeSpacingConfig = (theme: any) => ({
  auto: 'auto',
  ...theme('spacing'),
  ...negative(theme('spacing'))
});

export const spacingConfig = (theme: any) => theme('spacing');
