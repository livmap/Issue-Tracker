'use strict'

require('dotenv').config()
const mongoose = require('mongoose')

uri = process.env.MONGO_URI

const db = mongoose.connect(uri)

module.exports = db
