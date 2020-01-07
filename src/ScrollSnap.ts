import { TailwindPluginHelpers } from './TailwindPlugin/TailwindPluginHelpers';
import addSnapTypeUtilities from './ScrollSnapPlugins/Type';
import addSnapAlignUtilities from './ScrollSnapPlugins/Align';
import addSnapStopUtilities from './ScrollSnapPlugins/Stop';
import addSnapMarginUtilities from './ScrollSnapPlugins/Margin';
import addSnapPaddingUtilities from './ScrollSnapPlugins/Padding';
// @ts-ignore // FIXME
import plugin from 'tailwindcss/plugin';
import _ from 'lodash';

export default plugin(function(helpers: TailwindPluginHelpers) {
  addSnapTypeUtilities(helpers);
  addSnapAlignUtilities(helpers);
  addSnapStopUtilities(helpers);
  addSnapMarginUtilities(helpers);
  addSnapPaddingUtilities(helpers);
});
