var usersService = {
    endpoint :"https://api.remotebootcamp.dev/api/users"
    };

var userLogin = () =>
{
    var payload = {
        "email": "mr.atlas95@yicloud.com",
        "password": "Catlas37570790!",
        "tenantId": "U027PNWT1ST"
        }
    const config = {
        method: "POST",
        url: usersService + "/login",
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };

    return axios(config)
        .then(function (data) { console.log(data) })
        .catch(function (data) { console.warn(data) })
};