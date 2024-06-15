'use strict';

const Issue = require('../models').Issue
const Project = require('../models').Project

module.exports = function (app) {

  app.route('/api/issues/:project')
  
    .get(function (req, res){
      let project = req.params.project;

      if(!project){
        res.send('Please provide an applicable project')
        return 
      }

      try {
        const issues = new Issue.find({ project: project })
        
      } catch (err){
        res.send('Error')
      }
      
    })
    
    .post(async (req, res) => {
      let project = req.params.project;

      if(!req.body.issue_title || !req.body.issue_text || !req.body.issue_title){
        res.send("Please fill in the required values")
        return
      }

      const newIssue = new Issue({
        issue_title: req.body.issue_title,
        issue_text: req.body.issue_text,
        created_by: req.body.created_by,
        assigned_to: req.body.assigned_to || '',
        status_text: req.body.status_text || '',
        open: true,
        created_on: new Date(),
        updated_on: new Date(),
        project: project
      })

      try {

        const issue = await newIssue.save()
        res.json({ _id: issue._id, title: issue.title})
      } catch(err){
        res.send('Error')
      }
      
    })
    
    .put(function (req, res){
      let project = req.params.project;
      
    })
    
    .delete(function (req, res){
      let project = req.params.project;
      
    });
    
};