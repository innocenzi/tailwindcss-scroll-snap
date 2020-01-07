import { TailwindPluginHelpers } from '../TailwindPlugin/TailwindPluginHelpers';
import _ from 'lodash';

export default function({ addUtilities, e, theme, variants }: TailwindPluginHelpers) {
  const types = theme('scrollSnapType', {
    'no-snap': 'none',
    snap: 'var(--scroll-snap-direction) var(--scroll-snap-constraint)',
    'snap-x': '--scroll-snap-direction: x',
    'snap-y': '--scroll-snap-direction: y',
    'snap-both': '--scroll-snap-direction: both',
    'snap-block': '--scroll-snap-direction: block',
    'snap-inline': '--scroll-snap-direction: inline',
    'snap-mandatory': '--scroll-snap-constraint: mandatory',
    'snap-proximity': '--scroll-snap-constraint: proximity',
  });

  const utilities = _.map(types, (value, name) => ({
    [`.${e(name)}`]: {
      scrollSnapType: value,
    },
  }));

  addUtilities(utilities, variants('scrollSnapType', []));
}
