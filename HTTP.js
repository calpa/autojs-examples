const HTTP = () => {
  const res = http.get("www.baidu.com");
  console.log(res.body.string());

  return this;
};

HTTP();
