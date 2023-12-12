const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        minlength: 6,
    },
    location:{
        type: String,
        default:"Surat, Gujarat, India"
    }

}, { timestamps: true });

module.exports = mongoose.model("User", cartSchema);