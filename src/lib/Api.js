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
  },
  getGroups: function(jwt) {
    let config = {
      headers: {}
    };
    if (jwt) {
      config["headers"]["Authorization"] = "Bearer " + jwt;
    }
    return axios
      .get(apiHost + `/api/groups`, config)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return undefined;
      });
  },
  getTags: function(jwt) {
    let config = {
      headers: {}
    };
    if (jwt) {
      config["headers"]["Authorization"] = "Bearer " + jwt;
    }
    return axios
      .get(apiHost + `/api/tags`, config)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return undefined;
      });
  },
  createGroup: function(jwt, data) {
    let config = {
      headers: {}
    };
    if (jwt) {
      config["headers"]["Authorization"] = "Bearer " + jwt;
    }
    return axios
      .post(apiHost + "/api/groups/", data, config)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return undefined;
      });
  },
  searchGroup: function(jwt, data) {
    let config = {
      headers: {}
    };
    if (jwt) {
      config["headers"]["Authorization"] = "Bearer " + jwt;
    }
    return axios
      .post(apiHost + "/api/search", data, config)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return undefined;
      });
  },
  getGroupBookmarks: function(jwt, id) {
    let config = {
      headers: {}
    };
    if (jwt) {
      config["headers"]["Authorization"] = "Bearer " + jwt;
    }
    return axios
      .get(apiHost + `/api/groups/${id}`, config)
      .then(response => {
        console.log(response.data);
        return response.data;
      })
      .catch(error => {
        return undefined;
      });
  },
  shareBookmark: function(jwt, data, id) {
    let config = {
      headers: {}
    };
    if (jwt) {
      config["headers"]["Authorization"] = "Bearer " + jwt;
    }
    return axios
      .post(apiHost + `/api/share/${id}`, data, config)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return undefined;
      });
  }
};
