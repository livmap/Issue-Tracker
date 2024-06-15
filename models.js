const mongoose = require('mongoose')

const { Schema } = mongoose

const IssueSchema = new Schema({

    issue_title: {type: String, required: true},
    issue_text: { type: String, required: true},
    created_by: { type: String, required: true },
    assigned_to: { type: String, required: true },
    status_text: { type: String },
    open: { type: Boolean },
    created_on: { type: Date },
    updated_on: { type: Date },
    project: { type: String }


})

const ProjectSchema = new Schema({

    name: { type: String },

    
})

const Issue = mongoose.model("Issue", IssueSchema)
const Project = mongoose.model("Project", ProjectSchema)

exports.Issue = Issue
exports.Project = Project
