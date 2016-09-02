var configOptions = {

    baseUrl: 'src/dist/',
    paths: {
        "jQuery": "Bower_Components/jQuery/dist/jQuery"
    }
};

require.config(configOptions);

require(["app"], function (app) {


    new app.App().sayHello();
})