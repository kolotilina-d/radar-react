function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

export function sendMessage(user_name, user_email, user_message) {
  return fetch(`./src/mail.php`, {
    method: "POST",
    headers: {
      // Authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      user_email: user_email,
      user_name: user_name,
      user_message: user_message,
    }),
  }).then(checkResponse);
}
