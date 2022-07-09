const { ImageModel } = require('../models/image');

module.exports.upload = async (req, res) => {
    const { headers, file } = req;
    await ImageModel.create({
        httpHeaders: headers,
        ...file
    }).then(() => {
        res.status(200).send('');
    }).catch(() => {
        res.status(403).send('')
    })
}