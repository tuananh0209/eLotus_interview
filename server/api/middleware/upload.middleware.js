
const formidable = require('formidable');
const { FileExtensionNotSupportException, OverFileSizeException } = require('./exception')

const fileValidate = (req, res, next) => {
    const fileTypes = [
        'image/png',
        'image/bmp',
        'image/cis-cod',
        'image/gif',
        'image/ief',
        'image/jpeg',
        'image/jpeg',
        'image/jpeg',
        'image/pipeg',
        'image/svg+xml',
        'image/tiff',
        'image/tiff',
        'image/x-cmu-raster',
        'image/x-cmx',
        'image/x-icon',
        'image/x-portable-anymap',
        'image/x-portable-bitmap',
        'image/x-portable-graymap',
        'image/x-portable-pixmap',
        'image/x-rgb',
        'image/x-xbitmap',
        'image/x-xpixmap',
        'image/x-xwindowdump'
    ]

    const { mimetype, size } = req.file;
    if (size > 8 * 1024 * 1024) {
        let error = new Error(OverFileSizeException.message);
        error.code = OverFileSizeException.code;
        error.status_code = OverFileSizeException.statusCode;
        return next(error);
    }

    if (!fileTypes.includes(mimetype)) {
        let error = new Error(FileExtensionNotSupportException.message);
        error.code = FileExtensionNotSupportException.code;
        error.status_code = FileExtensionNotSupportException.statusCode;
        return next(error);
    } else {
        return next();
    }
}

const parseBody = (req, res, next) => {
    try {
        const form = formidable({ multiples: false });
        form.parse(req, (err, fields, file) => {
            if (err) {
                return next(err);
            }
            req.file = file.data;
            req.body = fields;
            return next();
        });
    } catch (e) {
        return next(e);
    }
}

module.exports = {
    fileValidate, parseBody
}