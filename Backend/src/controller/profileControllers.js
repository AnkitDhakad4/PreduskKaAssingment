import mongoose from "mongoose"
import {profile} from "../models/profile.model.js"
import apiResponse from "../utils/apiResponse.js"

const createProfile=async function(req,res){
    try {
        console.log(req.body)
        const {name,email,skills,education,projects,links}=req.body

        if(!email || !name)
        {
            throw new Error('email and name is required')
        }

        if(!Array.isArray(education) || education.length==0)
        {
            throw new Error('Education is required')
        }

        if(!Array.isArray(projects) || projects.length==0)
        {
            throw new Error('project is required')
        }


        console.log("Above of the findOne",name," ",email)
        const response=await profile.findOne({email})
        
        if(response)
        {
            throw new Error('This email id is already used to store information')
        }

        console.log("Above the create")
        const createProfile=await profile.create({
            name,
            email,
            skills,
            education,
            projects,
            links
        }
        )

        if(!createProfile)
        {
            throw new Error("Error while creating the profile")
        }

        return res.status(200)
        .json(new apiResponse("Profile is successfully created",createProfile,500))
    } catch (error) {
        
        return res.status(400).json({message:error.message})
    }

}

const updateProfile=async function(req,res){
    
    try {
        const {name,email,skills,education,projects,links}=req.body
    
        if(!email || !name)
        {
            return res.status(400).message("Email and name is required")
        }
    
        const checkProfile=await profile.find({email})
    
        if(!checkProfile)
        {
            return res.status(400).message("Please create your profile first")
        }
    
        const updatedProfile=await profile.findOneAndUpdate(
            {email},
            {$set:{
                name,
                skills,
                education,
                projects,
                links
            }},
            {new:true}
        )
    
        if(!updatedProfile)
        {
            return res.status(500).message("There is some error from our side")
        }
    
        return res.status(200)
        .json(new apiResponse("Profile is updated successfully",updatedProfile,200));

    } catch (error) {
        return res.status(400).json({message:`There is some error in update profile:- ${error.message}`})
    }
}

const getProfile=async function(req,res){
    try {
        const {email}=req.body
    
        if(!email)
        {
            return res.status(400).message("Please provide the email first to get your profile")
        }
    
        const profileInfo=await profile.find({email})
    
        if(!profileInfo)
        {
            return res.status(400).message("You do not registered in our Database. Please Register first!")
        }
    
        return res.status(200)
        .json(new apiResponse("Here is your profile",profileInfo,200))
    } catch (error) {
        return res.status(200).json({message:`There is some error in getProfile ${error.message}`})
    }
}

// const getProjects=async function(req,res){
//     const {skill}=req.query;
//     if(!query)
//     {
//         return res.status(400).json({
//         message: "Skill is required to search"
//       });
//     }
//     const result=await profile.findOne(
//         {"projects.skills":skill},
//         {projects:1,_id:0}
//     );

//     if(!result || result.projects.length==0)
//     {
//        return res.status(404).json({
//         message: "No projects found for this skill"
//       }); 
//     }
// }

const getProjects = async function (req, res) {
  try {
    const { skill } = req.query;
    console.log("skill in getProjects:", skill);

    if (!skill) {
      return res.status(400).json({
        message: "Skill is required to search"
      });
    }

    const result = await profile.findOne(
      { "projects.skills": skill },
      { projects: 1, _id: 0 }
    );

    // console.log("below the findOne:", result);

    if (!result || result.projects.length === 0) {
      return res.status(404).json({
        message: "No projects found for this skill"
      });
    }

    const filteredProjects = result.projects.filter(project =>
      project.skills.includes(skill)
    );

    console.log("filteredProjects:", filteredProjects);

    return res.status(200).json(
      new apiResponse("These are the projects", filteredProjects, 200));

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error while getting the projects by skill",
      error: error.message
    });
  }
};



export  {createProfile,updateProfile,getProfile,getProjects}