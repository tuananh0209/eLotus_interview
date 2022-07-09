const mongoose = require("mongoose")

const Image = mongoose.Schema({
    httpHeaders: {
        type: Object,
        require: false
    },
    originalFilename: {
        type: String,
        require: true
    },
    hashAlgorithm: {
        type: Boolean,
        require: true
    },
    mimetype: {
        type: String,
        require: true
    },
    filepath: {
        type: String,
        require: true
    },
    newFilename: {
        type: String,
        require: true
    },
    size: {
        type: Number,
        require: true
    },
    lastModifiedDate: {
        type: Date,
        require: true
    },

})

const ImageModel = mongoose.model("Image", Image)
module.exports = {
    ImageModel
}