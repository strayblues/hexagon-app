import Axios from "axios";

const BASE_PATH = "/api/task";

// const Axios = Axios.create({
//     withCredentials: true,
// })

export default {
  getCompletedTask,
  save,
  getEmpty
};

function getCompletedTask() {
  var queryStr = ""; //useless for now
  return Axios.get(`${BASE_PATH}?${queryStr}`)
    .then(res => res.data)
    .catch(err => {
      throw err;
    });
}

function save(task) {
  if (task._id) {
    //for edit. Useless for now
    return Axios.put(`${BASE_PATH}/${task._id}`, task)
      .then(res => res.data)
      .catch(err => {
        throw err;
      });
  } else {
    return Axios.post(`${BASE_PATH}`, task)
      .then(res => {
        const savedTask = res.data; //includes the _id from DB
        return savedTask;
      })
      .catch(err => {
        throw err;
      });
  }
}

function getEmpty() {
  const emptyTask = {
    img: { _id: "", src: "" },
    inputs: [],
    verifications: []
  };
  return emptyTask;
}

function getById(taskId) {
  if (!taskId) return Promise.reject("no task is");
  return Axios.get(`${BASE_PATH}/${taskId}`)
    .then(res => res.data)
    .catch(err => {
      throw err;
    });
}

function remove(taskId) {
  return Axios.delete(`${BASE_PATH}/${taskId}`)
    .then(res => res.data)
    .catch(err => {
      throw err;
    });
}
