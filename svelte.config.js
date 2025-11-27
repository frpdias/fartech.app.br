import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false,
      strict: true
    }),
    alias: {
      $components: 'src/lib/components',
      $styles: 'src/lib/styles'
    }
  }
};

export default config;
