// Shared env vars in all environments
var shared = {
  apiUrl: process.env.API_URL || "http://localhost:3001/api",
  apiToken: process.env.API_TOKEN,
  debug: process.env.DEBUG || true
};

//
var environments = {
  development: {
    ENV_VARS: shared
  },
  staging: {
    ENV_VARS: shared
  },
  production: {
    ENV_VARS: shared
  }
};
environments.production.buildpack  = process.env.BUILDPACK_URL;

module.exports = environments;
