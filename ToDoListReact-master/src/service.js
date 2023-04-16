import axios from 'axios';



axios.defaults.baseURL = 'http://localhost:5218';

axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    console.log(error);
    return Promise.reject(error);
  }
)




export default {

    getTasks:async () => {
    console.log("axios get")
    return await axios.get(`/items`);
   },
 


    addTask: async(id,name)=>{
    console.log('addTask', name)
    console.log('id to add: ',id)
    return await axios.post(`/items`,{id:id,name:name,isComplete:false});
    
  },

    setCompleted: (id,name, isComplete)=>{
      console.log('setCompleted', {id, isComplete})
      return axios.put(`/items/${id}`,{id:id,name:name,isComplete:isComplete})
   
  },

  deleteTask:( id)=>{
     return axios.delete(`/items/${id}`)
  },
 
};

