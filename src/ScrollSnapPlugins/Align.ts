import { TailwindPluginHelpers } from '../TailwindPlugin/TailwindPluginHelpers';
import _ from 'lodash';

export default function({ addUtilities, e, theme, variants }: TailwindPluginHelpers) {
  const types = theme('scrollSnapAlign', {
    'snap-start': 'start',
    'snap-end': 'end',
    'snap-center': 'center',
  });

  const utilities = _.map(types, (value, name) => ({
    [`.${e(name)}`]: {
      scrollSnapAlign: value,
    },
  }));

  addUtilities(utilities, variants('scrollSnapAlign', []));
}
