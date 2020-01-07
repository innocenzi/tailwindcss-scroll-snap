import { TailwindPluginHandler } from "./TailwindPlugin/TailwindPluginHandler";
import _ from 'lodash';
import addSnapTypeUtilities from "./ScrollSnapPlugins/Type";
import addSnapAlignUtilities from "./ScrollSnapPlugins/Align";
import addSnapStopUtilities from "./ScrollSnapPlugins/Stop";
import addSnapMarginUtilities from "./ScrollSnapPlugins/Margin";
// import addSnapPaddingUtilities from "./ScrollSnapPlugins/Padding";

// const defaultConfig = {
//   scrollSnapType: { // scroll-snap-type
//     'no-snap': 'none',
//     'snap': 'var(--scroll-snap-direction) var(--scroll-snap-constraint)',
//     'snap-x': '--scroll-snap-direction: x',
//     'snap-y': '--scroll-snap-direction: y',
//     'snap-both': '--scroll-snap-direction: both',
//     'snap-block': '--scroll-snap-direction: block',
//     'snap-inline': '--scroll-snap-direction: inline',
//     'snap-mandatory': '--scroll-snap-constraint: mandatory',
//     'snap-proximity': '--scroll-snap-constraint: proximity',
//   },
//   scrollSnapAlign: { // scroll-snap-align
//     'snap-start': 'start',
//     'snap-end': 'end',
//     'snap-center': 'center',
//   },
//   scrollSnapStop: { // scroll-snap-stop
//     'always-stop': 'always',
//   },
//   scrollPaddingSpacing: {
//     // inherits tailwind's spacing
//     // scroll-p-0, scroll-p-1, scroll-p-2, scroll-p-3, etc
//     // scroll-pt-0, scroll-pb-0, etc
//   },
//   scrollMarginSpacing: {
//     // inherits tailwind's spacing
//     // scroll-margin-0, scroll-margin-1, scroll-margin-2, scroll-margin-3, etc
//     // scroll-mt-0, scroll-mb-0, etc
//   }
// }

export default function(): TailwindPluginHandler {
  return function(helpers): void {
    addSnapTypeUtilities(helpers);
    addSnapAlignUtilities(helpers);
    addSnapStopUtilities(helpers);
    // addSnapMarginUtilities(helpers);
    // addSnapPaddingUtilities(helpers);
  }
}

// no-snap => scroll-snap-type: none
// snap => scroll-snap-type: var(--scroll-snap-direction) var(--scroll-snap-constraint)
// snap-x => --scroll-snap-direction: x
// snap-y => --scroll-snap-direction: y
// snap-both => --scroll-snap-direction: both
// snap-block => --scroll-snap-direction: block
// snap-inline => --scroll-snap-direction: inline
// snap-mandatory => --scroll-snap-constraint: mandatory
// snap-proximity => --scroll-snap-constraint: proximity

// {
//   scrollSnapType: {
//     'no-snap': 'none',
//     'snap': 'scroll-snap-type: var(--scroll-snap-direction) var(--scroll-snap-constraint)',
//     'snap-x': '--scroll-snap-direction: x',
//     'snap-y': '--scroll-snap-direction: y',
//     'snap-both': '--scroll-snap-direction: both',
//     'snap-block': '--scroll-snap-direction: block',
//     'snap-inline': '--scroll-snap-direction: inline',
//     'snap-mandatory': '--scroll-snap-constraint: mandatory',
//     'snap-proximity': '--scroll-snap-constraint: proximity',
//   },
//   scrollSnapAlign: {
//     'snap-start': 'scroll-snap-align: start',
//     'snap-end': 'scroll-snap-align: end',
//     'snap-center': 'scroll-snap-align: center',
//   },
//   scrollSnapStop: {
//     'always-stop': 'scroll-snap-stop: always',
//   },
//   scrollPaddingSpacing: {
//     // inherits tailwind's spacing
//     // scroll-p-0, scroll-p-1, scroll-p-2, scroll-p-3, etc
//     // scroll-pt-0, scroll-pb-0, etc
//   }
//   scrollMarginSpacing: {
//     // inherits tailwind's spacing
//     // scroll-margin-0, scroll-margin-1, scroll-margin-2, scroll-margin-3, etc
//     // scroll-mt-0, scroll-mb-0, etc
//   }
// }
