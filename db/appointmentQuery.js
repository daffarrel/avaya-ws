
function queryPatientListByMobileNo(){
    const columns = [
        ' nr.patient_name','nr.sex', 'nr.date_of_birth','nr.emirates_id','nr.nationality','nr.passport_no','nr.op_number'
    ];
    return  ' select distinct ' + columns.join(',') +' FROM new_registration nr ' +
    ' where nr.mobile= ? ';
}

function queryOfficeList(){
    const columns = [
        'od.office_Id','od.office_Name'
    ];
    return  ' select distinct ' + columns.join(',') +' FROM office_details od ';
}
function queryDepartmentList(){
    const columns = [
        ' ds.department_id','ds.department_name'
    ];
    return  ' select distinct ' + columns.join(',') +' FROM department_setup ds '+
    ' inner join department_office do on ds.department_id=do.department_id '+
     ' where do.office_id=? ';
}

function queryDoctorlistByDepartmentId(){
    const columns = [
        ' ds.doctors_id','ds.doctors_name '
    ];
    return  ' select distinct ' + columns.join(',') +' FROM doctors_office do ' +
   ' inner join doctors_setup ds on ds.doctors_id=do.doctors_id ' +
   ' where do.department_id=? ';
}

function queryTimeSlotlistByDateAndDoctorId(){
    const columns = [
        ' apt_mstr.slots',' apt_mstr.doctors_id ','apt_mstr.slot_day'
    ];
    return  ' select distinct ' + columns.join(',') +' from  appointment_schmaster apt_mstr ' +
   ' inner join appointment_sch apt_sch on  apt_mstr.period_id = apt_sch.period_id ' +
   ' WHERE  apt_sch.fromdate <= ? AND ' + 
  ' apt_sch.todate >= ? AND '+  
   'apt_sch.doctors_id = ? AND '+ 
    'apt_sch.slot_day = ? AND '+ 
   ' apt_sch.active_status = \'Y\'';
}

function querySavepatient(){
    var insertQuery = 'INSERT INTO appointments(appoint_type, appoint_hr, appoint_min,  appoint_date, appoint_name, mobile, appoint_status, doctors_id, entry_date, cancel_status, mobile_code, enteredby, slot_nos, confirm_status, bill_submit, office_id, sms_status) VALUE(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'; 
    return  insertQuery;
}

exports.queryPatientListByMobileNo = queryPatientListByMobileNo;
exports.queryOfficeList = queryOfficeList;
exports.queryDepartmentList = queryDepartmentList;
exports.queryDoctorlistByDepartmentId = queryDoctorlistByDepartmentId;
exports.queryTimeSlotlistByDateAndDoctorId = queryTimeSlotlistByDateAndDoctorId;
exports.querySavepatient = querySavepatient;





