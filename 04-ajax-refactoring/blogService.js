var userLogin = () =>
        {
            var payload = {
                "email": "mr.atlas95@yicloud.com",
                "password": "Catlas37570790!",
                "tenantId": "U027PNWT1ST"
                }
            const config = {
                method: "POST",
                url: "https://api.remotebootcamp.dev/api/users/login",
                data: payload,
                crossdomain: true,
                headers: { "Content-Type": "application/json" }
            };

            return axios(config)
                .then(function (data) { console.log(data) })
                .catch(function (data) { console.warn(data) })
        };


        var getAuthors = () =>
        {
            const config = {
                method: "GET",
                url: "https://api.remotebootcamp.dev/api/authors",
                crossdomain: true,
                headers: { "Content-Type": "application/json" }
            };

            return axios(config)
                .then(function (response) { console.log(response.data) })
                .catch(function (response)
                {

                    console.warn(response)

                });

        };dfgh 