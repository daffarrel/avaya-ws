var db_query = require('../db/executeQuery');
var async = require('async');
var moment = require('moment');
var apt_query = require('../db/appointmentQuery');
var helper = require('./helper');
require('../config/global');
const groupBy = require('lodash/groupBy');

function getPatientListByMobileNo(id, next) {
    const query = apt_query.queryPatientListByMobileNo(id);
    const params = id;
    console.log("getPatientListByMobileNo123:"+query);
    console.log("getPatientListByMobileNo123:"+params);
    db_query.paramQuery(query, params, (err, result) => {
        if (err) return next(err);
        return next(null, result);
    })
}

function getOfficeList(next) {
    const query = apt_query.queryOfficeList();
      console.log("getOfficeList:"+query);
     db_query.query(query, (err, result) => {
        if (err) return next(err);
        return next(null, result);
    })
}

function getDepartmentList(id,next) {
    const query = apt_query.queryDepartmentList();
    const params = id;
     console.log("getDepartmentList:"+query);
     db_query.paramQuery(query, params, (err, result) => {
        if (err) return next(err);
        return next(null, result);
    })
}

function getDoctorlistByDepartmentId(id, next) {
    const query = apt_query.queryDoctorlistByDepartmentId(id);
    const params = id;
    console.log("getDoctorlistByDepartmentId:"+query);
    console.log("getDoctorlistByDepartmentId:"+params);
    db_query.paramQuery(query, params, (err, result) => {
        if (err) return next(err);
        return next(null, result);
    })
}

function getTimeSlotlistByDateAndDoctorId(aptDate,doctorId, next) {
    const query = apt_query.queryTimeSlotlistByDateAndDoctorId();
    const params = [aptDate,aptDate,doctorId,new Date(aptDate).getDay()];
    console.log("getSlotlistByDateAnddoctorId:"+query);
    console.log("getSlotlistByDateAnddoctorId:"+params);
    db_query.paramQuery(query, params, (err, result) => {
        if (err) return next(err);
        return next(null, result);
    })
}
function savepatientDetail(patientDetail, next) {
    console.log("savepatientmmmmmmmmmmmmm:");
const  query = apt_query.querySavepatient();
console.log("savepatient:"+query);
const  params = ['Consultation',patientDetail.selectedTimeSlot,patientDetail.selectedTimeSlot,patientDetail.selectedDate,'type',
    patientDetail.mobile,'N',patientDetail.selectedDoctorId,new Date(),'N','971','Avaya user',
    patientDetail.selectedNoOfSlot,'N','N',patientDetail.selectedOfficeId,'N',
];
   
    console.log("savepatient:"+params);
    db_query.paramQuery(query, params, (err, result) => {
        if (err) return next(err);
        return next(null, result);
    })
}


exports.getPatientListByMobileNo = getPatientListByMobileNo;
exports.getOfficeList = getOfficeList;
exports.getDepartmentList = getDepartmentList;
exports.getDoctorlistByDepartmentId = getDoctorlistByDepartmentId;
exports.getTimeSlotlistByDateAndDoctorId = getTimeSlotlistByDateAndDoctorId;
exports.savepatientDetail = savepatientDetail;

