import { TailwindPluginHandler } from "./TailwindPlugin/TailwindPluginHandler";
import _ from 'lodash';
import addSnapTypeUtilities from "./ScrollSnapPlugins/Type";
import addSnapAlignUtilities from "./ScrollSnapPlugins/Align";
import addSnapStopUtilities from "./ScrollSnapPlugins/Stop";
import addSnapMarginUtilities from "./ScrollSnapPlugins/Margin";
import addSnapPaddingUtilities from "./ScrollSnapPlugins/Padding";

export default function(): TailwindPluginHandler {
  return function(helpers): void {
    addSnapTypeUtilities(helpers);
    addSnapAlignUtilities(helpers);
    addSnapStopUtilities(helpers);
    addSnapMarginUtilities(helpers);
    addSnapPaddingUtilities(helpers);
  }
}
