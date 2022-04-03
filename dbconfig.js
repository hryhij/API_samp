
const config = {
  user: 'sa',
  password: 'user',
  database: 'KPOP_PROFILES',
  server: '127.0.0.1',
  synchronize: true,
  trustServerCertificate: true,
  options: {
      trustedConnection: true,
      enableArithAbort: true,
      instancename : ''
      //encrypt: true, // for azure
      //trustServerCertificate: false // change to true for local dev / self-signed certs
  },
  port: 1434
}

module.exports = config;


