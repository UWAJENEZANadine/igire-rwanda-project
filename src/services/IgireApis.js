import axios from "axios";

import store from "store";

// const IGIRE_APIS_URL = "http://localhost:2020";

const IGIRE_APIS_URL = "https://igire-rwanda.herokuapp.com/";
var config = {
  headers: {
    "content-Type": "appliction/json",
  },
};

class Application {
  async getAllTeammate() {
    try {
      const response = await axios.get(IGIRE_APIS_URL + "team/all", config);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  // async AddTeamMember(data) {
  //   try {
  //     const response = await axios.post(
  //       IGIRE_APIS_URL + "/team/register",
  //       data,
  //       config
  //     );
  //     return response;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  async deleteTeammate(id) {
    try {
      const response = await axios.delete(
        IGIRE_APIS_URL + "team/" + id,
        config
      );

      return response;
    }catch(error){
      console.log(error)
    };
  };
  // async updateTeammate(id,data){
  //   try{
  //     const response =  await axios.patch( IGIRE_APIS_URL + "team/"+ id,
  //     data,
  //     config);
      
  //     return response;
  //   }catch(error){
  //     console.log(error)
  //   }
  // }




  async sendMail(data) {
    try {


      const response = await axios.post(
        IGIRE_APIS_URL + "/email",
        data,
        config
      );
      return response;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  }
}

export default new Application();
