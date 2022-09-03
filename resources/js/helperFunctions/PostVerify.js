const PostVerify = async (body) => {
  console.log("login fetch started");
  const settings = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  console.dir(body);
  try {
    const formResponse = await fetch(
      `https://tlancer.herokuapp.com/api/verify-account/${body.token}`,
      settings
    );
    if (!formResponse.ok) {
      throw new Error("error during submission");
    } else {
      const data = await formResponse.json();
      console.log("response data: ");
      console.dir(data);
    }
  } catch (e) {
    console.log("error: " + e);
  }
};
export default PostVerify;
