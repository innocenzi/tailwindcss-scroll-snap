import Type from '../src/ScrollSnapPlugins/Type';
import cssMatcher from 'jest-matcher-css';
import generateCss from './generateCss';
import _ from 'lodash';

expect.extend({
  toMatchCss: cssMatcher,
});

describe('ScrollSnapType', () => {
  it('generates utilities from default config', async () => {
    const css = await generateCss(Type);

    // @ts-ignore
    expect(css).toMatchCss(`
      .no-snap { scroll-snap-type: none }
      .snap { scroll-snap-type: var(--scroll-snap-direction) var(--scroll-snap-constraint) }
      .snap-x { scroll-snap-type: --scroll-snap-direction: x }
      .snap-y { scroll-snap-type: --scroll-snap-direction: y }
      .snap-both { scroll-snap-type: --scroll-snap-direction: both }
      .snap-block { scroll-snap-type: --scroll-snap-direction: block }
      .snap-inline { scroll-snap-type: --scroll-snap-direction: inline }
      .snap-mandatory { scroll-snap-type: --scroll-snap-constraint: mandatory }
      .snap-proximity { scroll-snap-type: --scroll-snap-constraint: proximity }
    `);
  });

  it('generates utilities from custom config', async () => {
    const css = await generateCss(Type, {
      scrollSnapType: {
        'snap-both-mandatory': 'both mandatory',
      },
    });

    // @ts-ignore
    expect(css).toMatchCss(`
      .snap-both-mandatory { scroll-snap-type: both mandatory }
    `);
  });

  it('generates variants', async () => {
    const css = await generateCss(
      Type,
      {
        scrollSnapType: {
          'snap-both-mandatory': 'both mandatory',
        },
      },
      ['hover']
    );

    // @ts-ignore
    expect(css).toMatchCss(`
      .snap-both-mandatory { scroll-snap-type: both mandatory }
      .hover\\:snap-both-mandatory:hover { scroll-snap-type: both mandatory }
    `);
  });
});
