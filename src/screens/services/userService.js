import api from "./api";

// GET
export const getUsers = () => {
  return api.get("read.php");
};

// GET
export const LoginApi = (data) => {
  return api.post("user/login.php",data);
};
// GET by ID
export const getUserById = (id) => {
  return api.get(`/users/${id}`);
};

// POST
export const createUser = (data) => {
  return api.post("user/create_user.php", data);
};

// PUT
export const updateUser = (id, data) => {
  return api.put(`/users/${id}`, data);
};

// DELETE
export const deleteUser = (id) => {
  return api.delete(`/users/${id}`);
};


export const addstudent = (data) => {
 
  
  return api.post("create.php", data);  
};

export const  getuser =()=>{
  return api.get("read.php")

}

export const delstudent = (id) => {
  return api.post("deleteform.php", { id }); 
};

export const delslip = (id) => {
  return api.post("feeslips/delete.php", { id }); 
};


export const sendNotification = (data) => {
  return api.post("send_push.php", data);
};


export const updateStudent = (data) =>
  api.post("update_student.php", data);


export const  uploadFeeslip = (formData) => {
  return api.post("feeslips/create.php", formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const getAllFeeSlips = () => {
  return api.get("feeslips/getAll.php");
};

export const getsinglefeeslip = (id) => {
  return api.get(`feeslips/getbyuser.php?uid=${id}`);
};

export const markedattendece = (uid, lat, lng) => {
  return api.post("attendes/attendance.php", { uid: uid,lat: lat,lng: lng});
};

export const getaattendance = (id)=>{
  return api.get(`attendes/getAttendanceByUser.php?uid=${id}` )
};

export const gernerateotp = (email)=>{
  return api.post("send_otp.php",{email:email} )
}


export const deleteslip = (id)=>{
  return api.post("feeslips/delete.php",{id:id} )
}

export const tokenapi =(uid,token)=>{
  return api.post("user/update_token.php",{uid , token})
}


export const coursesapi =()=>{
  return api.get("addcourse/get_courses.php")
}

export const delcourse =(id)=>{
  return api.post("addcourse/delete_course.php", {id:id})
}








