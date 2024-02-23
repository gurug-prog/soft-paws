import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'CatsManagement',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:5050/',
    redirectUri: baseUrl,
    clientId: 'CatsManagement_App',
    responseType: 'code',
    scope: 'offline_access CatsManagement',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:5050',
      rootNamespace: 'SoftPaws.CatsManagement',
    },
  },
} as Environment;
