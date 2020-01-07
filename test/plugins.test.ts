import Type from '../src/ScrollSnapPlugins/Type';
import Align from '../src/ScrollSnapPlugins/Align';
import Stop from '../src/ScrollSnapPlugins/Stop';
import Margin from '../src/ScrollSnapPlugins/Margin';
import Padding from '../src/ScrollSnapPlugins/Padding';
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
      .snap-x { --scroll-snap-direction: x }
      .snap-y { --scroll-snap-direction: y }
      .snap-both { --scroll-snap-direction: both }
      .snap-block { --scroll-snap-direction: block }
      .snap-inline { --scroll-snap-direction: inline }
      .snap-mandatory { --scroll-snap-constraint: mandatory }
      .snap-proximity { --scroll-snap-constraint: proximity }
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

describe('ScrollPadding', () => {
  it('generates utilities from default config', async () => {
    const css = await generateCss(Padding);

    // @ts-ignore
    expect(css).toMatchCss(fs.readFileSync('test/bench/snap-paddings.css').toString());
  });

  it('generates utilities from custom config', async () => {
    const css = await generateCss(Padding, {
      scrollPadding: {
        'tight': '1rem',
        'lose': '2rem',
      },
    });

    // @ts-ignore
    expect(css).toMatchCss(`
      .snap-p-tight { scroll-padding: 1rem }  
      .snap-p-lose { scroll-padding: 2rem }  
      .snap-py-tight { scroll-padding-top: 1rem; scroll-padding-bottom: 1rem }  
      .snap-px-tight { scroll-padding-left: 1rem; scroll-padding-right: 1rem }  
      .snap-py-lose { scroll-padding-top: 2rem; scroll-padding-bottom: 2rem }  
      .snap-px-lose { scroll-padding-left: 2rem; scroll-padding-right: 2rem }  
      .snap-pt-tight { scroll-padding-top: 1rem }  
      .snap-pr-tight { scroll-padding-right: 1rem }  
      .snap-pb-tight { scroll-padding-bottom: 1rem }  
      .snap-pl-tight { scroll-padding-left: 1rem }  
      .snap-pt-lose { scroll-padding-top: 2rem }  
      .snap-pr-lose { scroll-padding-right: 2rem }  
      .snap-pb-lose { scroll-padding-bottom: 2rem }  
      .snap-pl-lose { scroll-padding-left: 2rem }    
    `);
  });

  it('generates variants', async () => {
    const css = await generateCss(Padding, {
      scrollPadding: {
        'tight': '1rem',
      },
    }, ['hover']);

    // @ts-ignore
    expect(css).toMatchCss(`
      .snap-p-tight { scroll-padding: 1rem }
      .snap-py-tight { scroll-padding-top: 1rem; scroll-padding-bottom: 1rem }
      .snap-px-tight { scroll-padding-left: 1rem; scroll-padding-right: 1rem }
      .snap-pt-tight { scroll-padding-top: 1rem }
      .snap-pr-tight { scroll-padding-right: 1rem }
      .snap-pb-tight { scroll-padding-bottom: 1rem }
      .snap-pl-tight { scroll-padding-left: 1rem }
      .hover\\:snap-p-tight:hover { scroll-padding: 1rem }
      .hover\\:snap-py-tight:hover { scroll-padding-top: 1rem; scroll-padding-bottom: 1rem }
      .hover\\:snap-px-tight:hover { scroll-padding-left: 1rem; scroll-padding-right: 1rem }
      .hover\\:snap-pt-tight:hover { scroll-padding-top: 1rem }
      .hover\\:snap-pr-tight:hover { scroll-padding-right: 1rem }
      .hover\\:snap-pb-tight:hover { scroll-padding-bottom: 1rem }
      .hover\\:snap-pl-tight:hover { scroll-padding-left: 1rem }
    `);
  });
});
