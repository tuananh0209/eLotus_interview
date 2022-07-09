const FileExtensionNotSupportException = {
    message: 'File type is not support.',
    statusCode: 403,
    code: 1
};

const OverFileSizeException = {
    message: 'File size too large.',
    statusCode: 403,
    code: 2,
};

const AuthFailException = {
    message: 'Authencation fail.',
    statusCode: 403,
    code: 3
}

module.exports = {
    AuthFailException, OverFileSizeException, FileExtensionNotSupportException
}