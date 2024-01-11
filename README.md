# Express API for recruiter tool
This Express API serves request for Basic recruiter tool. It provides routes to getCandidates, addCandidates and updateCandidateStatus for basic recruiter tool.

# Setup in local
### Clone the repo using command given below
`git clone <github_url>`

### Install all dependencies required for this application using command given below
`npm install`

### Launch the application using the command given below
`npm run start`

This will return localhost url which will serve the request and can be used in Basic recruiter tool.

# Deploy Express API on EC2 instance

### Launch EC2 instance
1. Go to AWS management console -> open ec2 console.
1. Click Launch an instance.
1. Enter required details, select ubuntu, and create key value pair and click launch instance.
1. Once instance is created and running connect to ec2 instance using SSH command.

### Connect to instance using following command
`ssh -i "KeyPair.pem" ubuntu@<ubuntu_ip>`

To fetch the above command go to instance, click on connect , select SSH option, and at last Above command will be available.

Once Connected to EC2 instance , proceed to node installation

### Install Nodes.js
Run the following commands to install nodejs and npm package.
```
sudo apt-get install curl
curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install nodejs
```

### Clone Node API from GITHUB repository
`git clone <github_url>`

Once repository is cloned successfully, go to the cloned folder and install dependencies using below command given below.
`npm install`

### Install PM2 on Ubuntu instance using command given below
PM2 is a process runner, basically will keep your API listening even when you end the SSH session with your Ubuntu server
`npm install -g pm2`

### Create pm2.json file inside cloned folder
```
{
  "name":"api",
  "script":"src/index.js",
  "instances":"7",
  "exec_mode":"cluster",
  "out_file":"/dev/null",
  "err_file":"/dev/null"
}
```

Once pm2 is created successfully run the command given below to start proce manager.
`pm2 start pm2.json`

Once pm2 is started, API will be able to serve the requests successfully.

### How to use api
To use api ,hit the reuqest to the public ip of instace provided by AWS with host api is listening to
`http://publicIp:port/`

**This is all needs to be done to host the express api**

