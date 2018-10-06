var messages = ['wandee', '123456', 'csag'];

let parameter = {
    'username': 'wandee',
    'password': '123456'
};

const msg = "wandee";

let user = parameter.username;
let pass = parameter.password;

let { username, password } = parameter;

console.log(parameter.username);
console.log(msg);
console.log(messages[0] + " : " + messages[1]);
console.log(user + " : " + pass);
console.log(username + " : " + password);

for (var i = 0; i < messages.length; i++) {
    console.log(messages[i]);
}

console.log("Loop Two");

messages.forEach(function (value) {
    console.log(value);
});


