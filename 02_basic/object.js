// singleton
// object literals

const mySym = symbol("key1")
const jsUser = {
    name: "Deepak",
    age: 21,
    location: "Dewas",
    [mySym]: "myKey1"
    email: "dp@1105gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","tuesday"]
}

console.log(jsUser["name"]);
console.log(jsUser["email"]);
console.log(jsUser[mySym]);


