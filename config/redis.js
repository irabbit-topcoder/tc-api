"use strict";

// You can use many types redis connection packages, including:
// node redis | https://github.com/mranney/node_redis
// fake redis | https://github.com/hdachev/fakeredis
// sentinel redis | https://github.com/ortoo/node-redis-sentinel

exports.default = {
    redis: function () {
        return {
            package: !(process.env.REDIS_HOST && process.env.REDIS_HOST !== '127.0.0.1' && process.env.REDIS_HOST !== 'localhost') ? 'fakeredis' : 'redis',
            host : process.env.REDIS_HOST || "127.0.0.1",
            port : process.env.REDIS_PORT || 6379,
            password : null,
            options : null,
            database: 0

            // package: 'redis',
            // host: '127.0.0.1',
            // port: 6379,
            // password: null,
            // options: null,
            // database: 0

            // package: 'redis-sentinel-client',
            // port: 26379,
            // host: '127.0.0.1',
            // database: 0,
            // options: {
            //   master_auth_pass: null,
            //   masterName: 'BUS',
        // }
        };
    }
};

exports.test = {
    redis: function () {
        var pk = 'fakeredis';
        if (process.env.fakeredis === 'false') {
            pk = 'redis';
        }

        return {
            'package': pk,
            'host': '127.0.0.1',
            'port': 6379,
            'password': null,
            'options': null,
            'DB': 2
        };
    }
};
