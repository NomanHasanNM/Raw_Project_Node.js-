const environments = {};
 environments.staging = {
    port : 3000,
<<<<<<< HEAD
    envName : 'staging',
    secretKey : 'sdfwfsdfsdfsdf',
=======
<<<<<<< HEAD
    envName : 'staging'
=======
    envName : 'staging',
    secretKey : 'sdfwfsdfsdfsdf',
>>>>>>> b81abe2 (fgfg)
>>>>>>> 86cfe6fac0711d95c1eeecdaaf0a8e547b3e6b24

 };
 
 environments.production = {
    port : 5000,
<<<<<<< HEAD

    envName : 'production',
   
    secretKey : 'sdfwfdfvfsdfsdfsdggf',

=======
<<<<<<< HEAD
    envName : 'production'
=======
    envName : 'production',
    secretKey : 'sdfwfdfvfsdfsdfsdggf',
>>>>>>> b81abe2 (fgfg)
>>>>>>> 86cfe6fac0711d95c1eeecdaaf0a8e547b3e6b24
 };

 const currentEnvironment= typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV : 'staging';
 const EnvironmentToExport = typeof(environments[currentEnvironment]) === 'object' ? environments[currentEnvironment]
 : environments.staging;
 
 module.exports = EnvironmentToExport;
