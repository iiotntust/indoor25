# Hosting Node.js API and Website on Windows Server using IIS

This one is the tricky part, considering it has little clear and complete information online. However, links down below are what I found most useful and workable solution towards hosting your node.js API on windows server using IIS.

Follow the tutorial within the links below with each steps:

1. [Deploying a Node.js application on Windows IIS using a reverse proxy](https://alex.domenici.net/archive/deploying-a-node-js-application-on-windows-iis-using-a-reverse-proxy)

    * For Step 5 in the tutorial, I've made some command changes in my .bat file to prevent auto-closing. So when I've created windows service to run my node.js application, everything can works smoothly.
      * The commands in the my .bat file:

        ```bash
        cd "E:\mongoapi" //change to directory where my node app is located
        node index.js    //execute my node app
        pause            //prevent auto-closing
        ```
    
3. [IIS: How to setup a web site](https://alex.domenici.net/archive/iis-how-to-setup-a-web-site)

