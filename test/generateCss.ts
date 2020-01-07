
import { TailwindPluginHandler } from '../src/TailwindPlugin/TailwindPluginHandler';
import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import _ from 'lodash';

export default async function(
  plugin: TailwindPluginHandler,
  theme?: any,
  variants: string[] = [],
  config?: any,
  base: boolean = false,
  components: boolean = false,
  utilities: boolean = true,
  plugins: string[] | false = false
) {
  _.set(theme, 'screens', false);
  const process = (base ? '@tailwind base; ' : '') + (components ? '@tailwind components; ' : '') + (utilities ? '@tailwind utilities; ' : '');
  const result = await postcss(
    tailwindcss({
      ...config,
      theme,
      variants,
      corePlugins: plugins,
      plugins: [plugin],
    })
  ).process(process, {
    from: undefined,
  });
  return result.css;
};
