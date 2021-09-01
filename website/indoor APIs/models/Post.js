const mongoose = require('mongoose');

const positionSchema = mongoose.Schema({
    xpos: String,
    ypos: String
}
)

const workingbecSchema =  mongoose.Schema({
    becname: [String],
    mac: [String]
})

const avgdataSchema = mongoose.Schema({

})

const valueSchema = mongoose.Schema({
    workingbec: workingbecSchema,
    averagedata: avgdataSchema
})

const PostSchema = mongoose.Schema({
    xyposition: positionSchema,
    time: String,
    value: valueSchema
}, { collection: 'TestdataforArthur' });

module.exports = mongoose.model('Posts', PostSchema)