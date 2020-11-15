function sum(a,b){
    if((typeof a) !== "number" || (typeof b) !== "number")
    {
        throw new Error("Only numer agruments allowed");
    }
    return a + b;

}
try
{
    console.log(sum("1", "2"));
}
catch(err)
{
    console.log(err);
}

const user = {username: "sam", password: "123abc"};
function login(username, password){
    if ((username !== user.username) || password !== user.password )
    {
        throw new Error("Invalid Login");
    }
    else
    {
        console.log("Login Successful");
        
    }
}

try{
    console.log(login("sam", "123bc"));
}
catch(err){
    console.log(err);
}
