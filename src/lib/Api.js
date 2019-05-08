const axios = require("axios");

let apiHost = "http://" + (process.env.API_HOST || "localhost") + ":3000";

module.exports = {
  authenticateUser: function(email, password) {
    let data = {
      auth: {
        email: email,
        password: password
      }
    };
    return axios
      .post(apiHost + "/api/user/token", data)
      .then(response => {
        return response.data.jwt;
      })
      .catch(error => {
        return undefined;
      });
  },
  signupUser: function(email, password, name) {
    let data = {
      auth: {
        email: email,
        password: password
      }
    };
    return axios
      .post(apiHost + "/api/users", data)
      .then(response => {
        return response.data.jwt;
      })
      .catch(error => {
        return undefined;
      });
  },
  getCurrentUser: function(jwt) {
    let config = {
      headers: {}
    };
    if (jwt) {
      config["headers"]["Authorization"] = "Bearer " + jwt;
    }
    return axios
      .get(apiHost + "/api/users/current", config)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return undefined;
      });
  },
  getBookmarks: function(jwt) {
    let config = {
      headers: {}
    };
    if (jwt) {
      config["headers"]["Authorization"] = "Bearer " + jwt;
    }
    return axios
      .get(apiHost + "/api/bookmarks/", config)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return undefined;
      });
  },
  getBookmark: function(jwt, id) {
    let config = {
      headers: {}
    };
    if (jwt) {
      config["headers"]["Authorization"] = "Bearer " + jwt;
    }
    return axios
      .get(apiHost + "/api/bookmarks/" + id, config)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return undefined;
      });
  },
  postBookmark: function(jwt, data) {
    let config = {
      headers: {}
    };
    if (jwt) {
      config["headers"]["Authorization"] = "Bearer " + jwt;
    }
    return axios
      .post(apiHost + "/api/bookmarks/", data, config)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return undefined;
      });
  },
  deleteBookmark: function(id, jwt) {
    let config = {
      headers: {}
    };
    if (jwt) {
      config["headers"]["Authorization"] = "Bearer " + jwt;
    }
    return axios
      .delete(apiHost + `/api/bookmarks/${id}`, config)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return undefined;
      });
  }
};
