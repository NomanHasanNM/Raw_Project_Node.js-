const environments = {};
 environments.staging = {
    port : 3000,
    envName : 'staging',
    secretKey : 'sdfwfsdfsdfsdf',

 };
 
 environments.production = {
    port : 5000,

    envName : 'production',
   
    secretKey : 'sdfwfdfvfsdfsdfsdggf',

 };

 const currentEnvironment= typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV : 'staging';
 const EnvironmentToExport = typeof(environments[currentEnvironment]) === 'object' ? environments[currentEnvironment]
 : environments.staging;
 
 module.exports = EnvironmentToExport;
