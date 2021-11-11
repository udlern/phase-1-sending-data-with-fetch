function submitData(userName, userEmail) {
  const userNameAndEmail = { name: userName, email: userEmail };
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userNameAndEmail),
  };
   return fetch("http://localhost:3000/users", configurationObject)
    .then(resp => resp.json())
    .then((userNameAndEmail) => document.body.append(userNameAndEmail.id))
    .catch(error => document.body.append(error.message));
}
