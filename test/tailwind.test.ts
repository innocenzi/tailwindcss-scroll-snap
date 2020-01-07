import Type from '../src/ScrollSnapPlugins/Type';
import Align from '../src/ScrollSnapPlugins/Align';
import Stop from '../src/ScrollSnapPlugins/Stop';
import Margin from '../src/ScrollSnapPlugins/Margin';
import cssMatcher from 'jest-matcher-css';
import generateCss from './generateCss';
import fs from 'fs';
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


describe('ScrollSnapAlign', () => {
  it('generates utilities from default config', async () => {
    const css = await generateCss(Align);

    // @ts-ignore
    expect(css).toMatchCss(`
      .snap-start { scroll-snap-align: start }
      .snap-end { scroll-snap-align: end }
      .snap-center { scroll-snap-align: center }
    `);
  });

  it('generates utilities from custom config', async () => {
    const css = await generateCss(Align, {
      scrollSnapAlign: {
        'snap-none': 'none',
      },
    });

    // @ts-ignore
    expect(css).toMatchCss(`
      .snap-none { scroll-snap-align: none }
    `);
  });

  it('generates variants', async () => {
    const css = await generateCss(
      Align,
      {
        scrollSnapAlign: {
          'snap-none': 'none',
        },
      },
      ['hover']
    );

    // @ts-ignore
    expect(css).toMatchCss(`
      .snap-none { scroll-snap-align: none }
      .hover\\:snap-none:hover { scroll-snap-align: none }
    `);
  });
});


describe('ScrollSnapStop', () => {
  it('generates utilities from default config', async () => {
    const css = await generateCss(Stop);

    // @ts-ignore
    expect(css).toMatchCss(`
      .always-stop { scroll-snap-stop: always }
    `);
  });

  it('generates utilities from custom config', async () => {
    const css = await generateCss(Stop, {
      scrollSnapStop: {
        'normal-snap': 'normal',
      },
    });

    // @ts-ignore
    expect(css).toMatchCss(`
      .normal-snap { scroll-snap-stop: normal }
    `);
  });

  it('generates variants', async () => {
    const css = await generateCss(
      Stop,
      {
        scrollSnapStop: {
          'normal-snap': 'normal',
        },
      },
      ['hover']
    );

    // @ts-ignore
    expect(css).toMatchCss(`
      .normal-snap { scroll-snap-stop: normal }
      .hover\\:normal-snap:hover { scroll-snap-stop: normal }
    `);
  });
});

describe('ScrollMargin', () => {
  it('generates utilities from default config', async () => {
    const css = await generateCss(Margin);

    // @ts-ignore
    expect(css).toMatchCss(fs.readFileSync('test/bench/snap-margins.css').toString());
  });

  it('generates utilities from custom config', async () => {
    const css = await generateCss(Margin, {
      scrollMargin: {
        'tight': '1rem',
        'lose': '2rem',
      },
    });

    // @ts-ignore
    expect(css).toMatchCss(`
      .snap-m-tight { scroll-margin: 1rem }  
      .snap-m-lose { scroll-margin: 2rem }  
      .snap-my-tight { scroll-margin-top: 1rem; scroll-margin-bottom: 1rem }  
      .snap-mx-tight { scroll-margin-left: 1rem; scroll-margin-right: 1rem }  
      .snap-my-lose { scroll-margin-top: 2rem; scroll-margin-bottom: 2rem }  
      .snap-mx-lose { scroll-margin-left: 2rem; scroll-margin-right: 2rem }  
      .snap-mt-tight { scroll-margin-top: 1rem }  
      .snap-mr-tight { scroll-margin-right: 1rem }  
      .snap-mb-tight { scroll-margin-bottom: 1rem }  
      .snap-ml-tight { scroll-margin-left: 1rem }  
      .snap-mt-lose { scroll-margin-top: 2rem }  
      .snap-mr-lose { scroll-margin-right: 2rem }  
      .snap-mb-lose { scroll-margin-bottom: 2rem }  
      .snap-ml-lose { scroll-margin-left: 2rem }    
    `);
  });

  it('generates variants', async () => {
    const css = await generateCss(Margin, {
      scrollMargin: {
        'tight': '1rem',
      },
    }, ['hover']);

    // @ts-ignore
    expect(css).toMatchCss(`
      .snap-m-tight { scroll-margin: 1rem }
      .snap-my-tight { scroll-margin-top: 1rem; scroll-margin-bottom: 1rem }
      .snap-mx-tight { scroll-margin-left: 1rem; scroll-margin-right: 1rem }
      .snap-mt-tight { scroll-margin-top: 1rem }
      .snap-mr-tight { scroll-margin-right: 1rem }
      .snap-mb-tight { scroll-margin-bottom: 1rem }
      .snap-ml-tight { scroll-margin-left: 1rem }
      .hover\\:snap-m-tight:hover { scroll-margin: 1rem }
      .hover\\:snap-my-tight:hover { scroll-margin-top: 1rem; scroll-margin-bottom: 1rem }
      .hover\\:snap-mx-tight:hover { scroll-margin-left: 1rem; scroll-margin-right: 1rem }
      .hover\\:snap-mt-tight:hover { scroll-margin-top: 1rem }
      .hover\\:snap-mr-tight:hover { scroll-margin-right: 1rem }
      .hover\\:snap-mb-tight:hover { scroll-margin-bottom: 1rem }
      .hover\\:snap-ml-tight:hover { scroll-margin-left: 1rem }
    `);
  });
});
