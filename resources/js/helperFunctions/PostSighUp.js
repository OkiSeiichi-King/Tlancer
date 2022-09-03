const PostSignUp = async (body) => {
  console.log("fetch started");
  console.log(
    "signupCTX.data that will be sent on PostSignUp submit: " +
      JSON.stringify(body)
  );

  const settings = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: { name: "nope" },
  };

  try {
    const formResponse = await fetch(
      "https://tlancer.herokuapp.com/api/signup",
      settings
    );
    if (!formResponse.ok) {
      throw new Error("error during submission");
    } else {
      const data = await formResponse.json();
      // authMethod(data.token);
      console.log("Fetch completed");
      console.log("response recieved: " + JSON.stringify(data));
      console.log("data token: " + data.token);
    }
  } catch (e) {
    console.log("error: " + e);
  }
};
export default PostSignUp;
