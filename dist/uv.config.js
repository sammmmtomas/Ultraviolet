self.__uv$config = {
  prefix: "/service/",
  encodeUrl: function(url) {
    return "/service/" + encodeURIComponent(url);
  },
};