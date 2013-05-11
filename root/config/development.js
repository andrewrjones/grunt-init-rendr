// Config settings for NODE_ENV=development

exports.config = {
  assets: {
    minify: false,
    cdn: {
      protocol: 'http',
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
