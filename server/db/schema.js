'use strict'

const mongoose = require('./index');

const schema = new mongoose.Schema({
});

const Podcast = mongoose.model('podcast', schema);

module.exports = Podcast;