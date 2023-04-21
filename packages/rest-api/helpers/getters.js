import moment from 'moment/moment.js';
import { readFileSync, existsSync } from 'node:fs'
import Candidate from "../models/candidate.js";
import Reviewer from "../models/reviewer.js";
import Revision from "../models/revision.js";



const getAllCandidates = async()=>{
    const candidates_result = await Candidate.find(); 
    const candidates = [...candidates_result].map(cand =>{
        console.log('cand', cand); 
        
        const {_id, name, email} = cand;
        const id = _id.toString(); 
        return ({name, email, id}); 
    } )
    return({
        candidates
    })
}

const getAllReviewers = async()=>{
    const all_reviewers = await Reviewer.find(); 
    const reviewers = [...all_reviewers].map(reviewer => {
        const {email, name, _id}  = reviewer; 
        const id = _id.toString();
        return ({email,name,id}); 
    }); 

    return({
        reviewers
    })
}

const getAssingationRule = async()=>{
    const NUMBER_REVIEWERS = 3; 
    const lastAssignmentsDetailed = []; 

    for (let i = 0; i < NUMBER_REVIEWERS; i++){
        const dayOfInterest =  moment().subtract(i + 1, 'days').startOf('day').toDate();
        const assignmentInfo = await Revision.find({date:dayOfInterest}); 

        const assignments =  assignmentInfo.map(assign => ({reviewer:assign.reviewer.name, candidates:assign.candidates.length})); 
        if(assignments.length > 0){
            lastAssignmentsDetailed.push({
                date:dayOfInterest,
                assignments: assignmentInfo.map(assign => ({reviewer:assign.reviewer.name, candidates:assign.candidates.length}))
             })
        }
        
    }
    // const today = moment().startOf('day').toDate() ;
    // const yesterday = moment().subtract(1, 'days').startOf('day').toDate();
    // const pastYesterday = moment().subtract(2, 'days').startOf('day').toDate();
    // const lastAssignments = await Revision.find({date:yesterday}); 
    // const lastlast = await Revision.find({date:pastYesterday}); 
    // const yesterdayAssignments = lastAssignments.map(assign => ({reviewer:assign.reviewer.name, candidates:assign.candidates.length})); 
    // const pastYesterdayAssignments = lastlast.map(assign => ({reviewer:assign.reviewer.name, candidates:assign.candidates.length})); 
    
    console.log(lastAssignmentsDetailed); 
    SaveJsonFile(); 
}

const SaveJsonFile = ()=>{
    const ASSIGN_FILE_PATH = "files/assigns.json"; 
    if(existsSync(ASSIGN_FILE_PATH)){
        console.log('exists'); 
    } 
    else{
        console.log(ASSIGN_FILE_PATH + ' it doesnt exist'); 
    }

}


export {getAllCandidates, getAllReviewers, getAssingationRule}