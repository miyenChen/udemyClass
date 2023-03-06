const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema = new Schema({
    name: { type: String, require: true, minlength: 2 },
    age: { type: Number, min: [0, '不能低於0'], max: [80, '超過年齡'] },
    scholarship: {
        merit: { type: Number, min: 0, max: [5000, 'merit太多'], default: 0 },
        other: { type: Number, min: 0 },
    },
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
