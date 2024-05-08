#! /usr/bin/env node

import inquirer from "inquirer"

let myBestFriend = await inquirer.prompt([{
    
            name: "name",
            type: "string",
            message: "please enter your friend name"
        }
    ]
);
if(myBestFriend.name === "salman" || myBestFriend.name === "naveed") {
    console.log(`${myBestFriend.name} is your friend`);
}else{
    console.log(`${myBestFriend.name} is not your friend`);
}