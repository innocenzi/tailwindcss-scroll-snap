import addSnapTypeUtilities from './plugins/type';
import addSnapAlignUtilities from './plugins/align';
import addSnapStopUtilities from './plugins/stop';
import addSnapMarginUtilities from './plugins/margin';
import addSnapPaddingUtilities from './plugins/padding';
import plugin from 'tailwindcss/plugin';
import _ from 'lodash';

export default plugin(function (helpers: any) {
	addSnapTypeUtilities(helpers);
	addSnapAlignUtilities(helpers);
	addSnapStopUtilities(helpers);
	addSnapMarginUtilities(helpers);
	addSnapPaddingUtilities(helpers);
});
