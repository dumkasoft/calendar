'use strict';

module.exports = {
    entry: './scripts/app',
    output: {
        filename: './scripts/client.js'
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    }
}