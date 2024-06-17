/*


XMLHttpRequest is used heavily in AJAX programming

AJAX - Asynchronous Jacascript and XML programming

- Asynchronous JavaScript and XML (Ajax, or AJAX) is a web development technique in which
a web app fetches content from the server by making asynchronous HTTP requests, and uses
the new content to update the relevant parts of the page without requiring a full page load.
This can make the page more responsive, because only the parts that need to be updated are requested.

- Ajax can be used to create single-page apps, in which the entire web app consists of a single document,
 which uses Ajax to update its content as needed.

- Initially Ajax was implemented using the XMLHttpRequest interface, but the fetch() API is more suitable
for modern web applications: it is more powerful, more flexible, and integrates better with fundamental
web app technologies such as service workers. 
Modern web frameworks also provide abstractions for Ajax.


- XMLHttpRequest : Use XMLHttpRequest (XHR) objects to interact with servers.
You can retrieve data from a URL without having to do a full page refresh. 
This enables a Web page to update just part of a page without disrupting what the user is doing.

- When we make XMLHttpRequest object, we will use open method in that object to send the API request.

- open() method will only be called by the send() method

*/

const reqUrl = 'https://api.github.com/users/harsh-kh08';


 const xhr = new XMLHttpRequest()

 xhr.open('GET',reqUrl)

 // To continuous track the state of the request, we will use onreadystatechange  variable of XMLHttpRequest() object and assign a function

xhr.onreadystatechange = function()
{
    console.log(xhr.readyState);
    if(xhr.readyState===4)
        {
            const data = JSON.parse(this.responseText)
            console.log(data)
            console.log(data.login)
        }
}

xhr.send()