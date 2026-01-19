import mongoose from "mongoose";

const EducationSchema=new mongoose.Schema({
    degree:{
        type:String,
        required:true
    },
    institute:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    }
})


const ProjectSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    },
    skills:{
        type:[String]
    }
})

const profileSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    skills:{
        type:[String],
        required:true
    },

    education:[EducationSchema],

    projects:[ProjectSchema],

    links:{
        github:{type:String},
        linkedin:{type:String},
        portfolio:{type:String}
    }

},{timestamps:true})


profileSchema.index({ "projects.skills": 1 });

profileSchema.index({
  name: "text",
  "projects.title": "text",
  "projects.description": "text"
});

export const profile= mongoose.model("Profile", profileSchema);