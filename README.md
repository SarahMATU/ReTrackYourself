#  Welcome to Re-track yourself
This app is designed to help you when you are studying/researching by limiting your time for distraction

  ![Re-Track](https://github.com/SarahMATU/FYP/assets/115370785/2e22d0fb-18dc-4aeb-9e08-12fe912078db)

### PRE-BUILD
To start the program 
cd re-track-yourself
npm i adn npm concurrently & cross-env
open the package.json file and run the *dev* command  
`"dev": "concurrently -k \"cross-env BROWSER=none npm start\" \"wait-on http://localhost:3000 && electron ."`

### Included  
  
**Timer** - This feature allows you to set a countdown timer to reference when studying. When the timer runs out you have completed your study session.

**Reminder** - This feature will calculate how long you are studying for and set intervals to tell you to get up and take a quick break from your screen. It is good to get up and stretch during this time.

**To-Do** - This feature allows you to set clear goals to work on, and once they are complete you can check them off.  
