const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name:{
        type: String,
        required: true
    },
    slug:{
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
    },
    created_by: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    updated_by: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    created_at:{
        type: Date,
        default: Date.now()
    },
    updated_at:{ 
        type: Date,
        default: Date.now()
    },
    deleted_at: { 
        type: Date,
        default: null
    }
});


module.exports = mongoose.model('Category', categorySchema);