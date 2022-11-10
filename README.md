# F_ckingsick E-Commerce CRUD APP

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project (client) directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Getting Started

Open the react app, and CD into client
goto https://firebase.google.com/ , Signup and then hit the 'Get Started CTA'

Create an App, you can disable google analytics as its not used in this project.

Now that you have created an app, add firebase by selecting the </> 'Web' CTA - hosting not required currently,
this step will instruct you to npm I firebase, you can also npm I for all other dependencies and has a bunch of private information pertaining to the app you have just created. 
Use this data to fill out the variables in your .env file, and example of what this looks like can be found in env.example. make sure .env is in the root folder (client)

    *if you forgot to copy the information it can also be found by using the side navigation, selecting the gear/settings beside 'Project Overview',selecting 'Project Settings' and scroll down.
    
## Firestore Setup
using the side navigation, navigate to firestore select test mode, or select production mode and change
 allow read, write: if false; to -> allow read, write: if true; this will enable Create, update, and delete functionality.

    *If it does not allow you to change it, dont worry you can access that same area after you complete this process

Select a hosting location, somewhere near to you so that it is fast and you dont need to wait long for your data

    *In the Firestore page, top left navigation to the 'Rules' header, select it and do the allow read true step.

## Firestore Setup

using the side navigation, navigate to storage and repeat the previous steps.

## Sign-up/Login
once all of this is set up and you are in the client directory you can npm Start
to access the 'Admin' Area, you will be prompted to Register / Login these routes can be found at 
http://localhost:3000/register , and http://localhost:3000/login respectively. on successful login you will be navigated to the admin panel
on this page you can Create, edit/update, and delete products to be shown in the products and products details pages.

## Carousel Images
for all my image carousels on the http://localhost:3000/about page, I am using links to my personal firebase storage, if these do not work for you,
you can simply replace the contents with 'https://picsum.photos/200/300' to see its functionality.



