var configOptions = {

    baseUrl: 'src/dist/'

};

require.config(configOptions);

require(["app"], function(app){


    new app.App().sayHello();
})