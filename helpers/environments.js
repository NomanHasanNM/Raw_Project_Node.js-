const environments = {};
 environments.staging = {
    port : 3000,
<<<<<<< HEAD
    envName : 'staging'
=======
    envName : 'staging',
    secretKey : 'sdfwfsdfsdfsdf',
>>>>>>> b81abe2 (fgfg)

 };
 
 environments.production = {
    port : 5000,
<<<<<<< HEAD
    envName : 'production'
=======
    envName : 'production',
    secretKey : 'sdfwfdfvfsdfsdfsdggf',
>>>>>>> b81abe2 (fgfg)
 };

 const currentEnvironment= typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV : 'staging';
 const EnvironmentToExport = typeof(environments[currentEnvironment]) === 'object' ? environments[currentEnvironment]
 : environments.staging;
 
 module.exports = EnvironmentToExport;
