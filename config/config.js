module.exports = {
  development: {
    app: {
      name: 'Passport SAML strategy example',
      port: process.env.PORT || 5001
    },
    passport: {
      strategy: 'saml',
      saml: {
        path: process.env.SAML_PATH || '/',             
        entryPoint: process.env.SAML_ENTRY_POINT || 'https://oamdev.motorolasolutions.com/oamfed/idp/initiatesso?providerid=http://10.40.42.52:5001/',   
        issuer: 'passport-saml',
        cert: process.env.SAML_CERT || null,
        logout: '/logout' 
      }
    }
  }
};