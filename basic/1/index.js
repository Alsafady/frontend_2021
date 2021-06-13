const data = {
  name: "Bar",
  email: "foo@example.com",
  address: {
    line_1: "12-A, 1st Floor",
    line_2: "",
    street: "Main Street",
    country: {
      name: "Saudi Arabia",
      code: "KSA",
    },
  },
};


const data_true= {

  {name: "true", {value:"Bar"}},
  {email: "true", {value:"foo@example.com" }},
      address: {
        line_1: "true",
        line_2: "false",
        street: "true",
        country: {
          {name: "true"},
          {code: "true"},
        },
      },

};
