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

const RoomSchema = mongoose.Schema({
    xyposition: positionSchema,
    time: String,
    value: valueSchema
}, { collection: 'TestdataforArthur_class' });

module.exports = mongoose.model('Room', RoomSchema)