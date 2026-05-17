const init = () => {
  ajaxRequest("data/flowers.json", "get", loadflowers, "json");
};
