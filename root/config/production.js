// Config settings for NODE_ENV=production

exports.config = {
  assets: {
    minify: true,
    cdn: {
      protocol: 'https',
      cnames: ['localhost'],
      pathPrefix: ''
    }
  },

  api: {
    host: "{%= rendr_api_host %}",
    protocol: "{%= rendr_api_protocol %}"
  },

  rendrApp: {
    someProperty: 'someValue'
  }
};
