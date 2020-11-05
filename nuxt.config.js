import shrinkRay from 'shrink-ray-current';
export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  render: {
    compressor: shrinkRay(),
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/style/base/_all.scss'],
  styleResources: {
    scss: ['@/assets/style/helpers/_all.scss'],
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/axios', '@/plugins/filters'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/dotenv',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
    '~/plugins/hook.js',
    [
      'nuxt-compress',
      {
        gzip: {
          cache: true,
        },
        brotli: {
          threshold: 10240,
        },
      },
    ],
  ],
  webfontloader: {
    // add Google Fonts as "custom" | workaround required
    custom: {
      families: ['Roboto:n4,n5,n7'],
      urls: [
        // for each Google Fonts add url + options you want
        // here add font-display option
        'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
      ],
    },
  },
  /*
   ** Build configuration
   */
  build: {
    filenames: {
      app: ({ isDev }) => (isDev ? '[name].js' : '[contenthash:16].js'),
      chunk: ({ isDev }) => (isDev ? '[name].js' : '[contenthash:16].js'),
      css: ({ isDev }) => (isDev ? '[name].css' : '[contenthash].css'),
      img: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]',
      font: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]',
      video: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]',
    },
  },
  env: {
    API_URL: process.env.API_URL,
    COMPRESS_MODE: process.env.COMPRESS_MODE,
  },
};
