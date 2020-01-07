import { TailwindPluginHelpers } from '../TailwindPlugin/TailwindPluginHelpers';
import createUtilityPlugin from '../Plugins/UtilityPlugin';

export default function(helpers: TailwindPluginHelpers) {
  createUtilityPlugin('scrollSnapStop', {
    'alwats-stop': 'always'
  }, helpers);
}
