var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scrapedSchema = new Schema({
    title: String, 
    link: String,
    date: {
        type: Date, 
        default: Date.now
    },
    favorite: {
        type: Boolean,
        default: false
    }
});

var Scraped = mongoose.model('Scraped', scrapedSchema);

module.exports = Scraped;