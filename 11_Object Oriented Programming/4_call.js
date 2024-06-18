/*











*/

function SetUserName(username)
{
    this.username = username
}


function createUser(username,email,password)
{
  // SetUserName(username)
   // Ideally the username should be set for 'createUser' as defined in 'SetUserName'
   // We have outsource 'this.username = username' code to SetUsername function.
   // Now, to hild the reference  we use .call() method

  SetUserName.call(this,username)
  // What it do is that instead of assigning username value to its own variable, it would take this as a parameter of parent object and assign value to its parent 'username' variable 
this.email=email,
this.password=password
}

const user = new createUser("javascript","javascript@gmail.com","123")

console.log(user)



