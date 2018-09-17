module.exports = {
  webpack: (config, options, webpack) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'raw-loader',
    });
    return config;
  },
};
