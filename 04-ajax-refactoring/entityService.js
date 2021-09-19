var entityService = {
endpoint :"https://api.remotebootcamp.dev/api/entities/teams"
};
entityService.getAll = () =>
{
    console.log("getEntities is executing")
    const config = {
        method: "GET",
        url: entityService.endpoint,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };

    return axios(config)
        // .then(function (response)
        //  { console.log(response.data);
        //     return response.data;
        //  })
        // .catch(function (response)
        // {

        //     console.warn(response)

        // });

};

entityService.add = payload => {
console.log("addEntity is executing", payload);

const config = {
  method: "POST",
  url: entityService.endpoint,
  data: payload,
  crossdomain: true,
  headers: { "Content-Type": "application/json" }
};

return axios(config)
    // .then(function (response)
    // {
    //     console.log(response)
    // })
    // .catch(function (response) 
    // {
    //     console.error(response)
    // });

   
};