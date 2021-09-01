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

const FactorySchema = mongoose.Schema({
    xyposition: positionSchema,
    time: String,
    value: valueSchema
}, { collection: 'test_wh' });

module.exports = mongoose.model('Factory', FactorySchema)