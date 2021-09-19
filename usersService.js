var usersService = {
  endpoint: "https://api.remotebootcamp.dev/api/users"
};

var userLogin = () => {
  var payload = {
    email: "sabio@sabio.la",
    password: "Sabiopassword1!",
    tenantId: "bootcamp1"
  };
  const config = {
    method: "POST",
    url: usersService + "/login",
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config)
    .then(function(data) {
      console.log(data);
    })
    .catch(function(data) {
      console.warn(data);
    });
};
