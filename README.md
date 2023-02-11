# Positive Outreach Program #
### This is a project I am very passionate about. I have named it `The Positive Outreach Program`, and I fully anticiapte making it in to a company outside of prison to help re-educate people about the power of positive thinking and the inherent effect that conscious thought has on creating the life you desire. ###

---

## Technologies implemented ##
### For this project I utilized several different languages. On the front-end, I used `HTML`, `CSS`, `Bootstrap`, `Javascript`, `jQuery`, `Axios`, and `React` for styling, basic functionality and page navigation. On the back-end, I used `MongoDb`, `Mongoose`, `Express`, `Nodemon`, and `Bcrypt` for database management, server functionality, and security.  ###

## New Technology `Bcrypt` ##
### I decided to use bcrypt as my new technology to learn. I am interested in cyber-security as a possible career option, and as such, I feel that password encryption is a good place to start. I had a login functionality implemented on this web-site previously, but there was no standardization or security functionality, thus it would have been very easy to compromise user data and steal information. Now I have added the following requirements to password entry on user creation/update: Each password must have at least one (1) uppercase letter, at least one (1) number, and the password length must be at least eight (8) characters. (I added some red text under the password input box to make this known) Using bcrypt I was able to encrypt the password to a sixty (60) character hash display. This hash display is shown, even in the database, so it would appear to be very difficult to steal user information, even if my database were breached. I was also able to allow users to change their password and still keep the encryption on the new password. (This was more challenging than it sounds. It required a whole new function to be written inside of a database update call. Thank you Stack Overflow and the TLM Help Desk team.) I did keep the setting on the change password input boxes set to password so that you can change your password securely, even with people around you. While there is no "sensitive data" to secure on my site at this moment, I feel that user security is extremely important, therefore I will strive to keep my users information as safe as possible. I believe trust to still be a foundation to successful interaction and that must extend from a website owner or moderator to the customer. The biggest, and in fact the only pitfall I can see to using bcrypt is that, as an administrator I wont have access to the users’ password which, I believe, will hinder my ability to successfully moderate users' content and access. However that may prove to be a false concern or one that is easily circumnavigated as my knowledge continues to increase. The benefits that I see from using bcrypt go much farther than this current project. For one, as I mentioned, password security is important, especially where dealing with sensitive financial or personal information. A sixty (60) character encryption code will no doubt deter all but the best of hackers. For another, if my users know that I am going to greater lengths to secure their information, I believe it will help to foster a safer and more trusting environment. When users visit my site, I want them to feel welcome, safe, and secure. I feel like the added security of bcrypt has helped me to achieve that goal. Finally, the added security presented by bcrypt will allow me personally to sleep better at night knowing that I have done my best to protect my website and it's users. ### 

---

## Module Requirements ##
### When you first open the file you will need some dependencies from `Node` as well as the database seed. To begin, open a terminal (or two) and cd in to the client folder and run `npm i`, then cd in to the server folder and run `npm i`. When the files finish installing, run `npm run seed` from the server folder, then run `npm start` in both server and client folders. (Please make sure you have an active version of mongoDb running.) ###


---

# Navigation #

## Home Page ##
### The home page is essentially the same whether you are logged in or not. The randomly generated affirmation and recommended book sections are available either way. The difference is in the header. If you are not logged in, you can only see the main logo, and a link to either create an account or login. You will not be able to navigate the site without logging in. To create an account, click the create link, and then enter a username, password and email. (Note, you must confirm your password.) A modal should pop up if you have successfully created an account. (Also, if you choose a username or email address thats already in use it will show the same modal with a different message reflecting the error.) Once you have created an account, you will have acces to the whole site, with links in the header.  ###

## Forum Page ##
### The forum page will load with an initial display of "No posts", and a button to create a post. If you click on the button it will take you to the create a post page where you type in what you would like to say in an input, then submit, you will then be redirected to the Posts page again, and your user name will be shown on your post as "author". Clicking on the title of your post will take you to the "thread" page, where you can create a comment or read comments from other users. (There is no current functionality to comment on a comment, but stay tuned for updates). If you click on the "add a comment" button, you will do the same thing as when you add a post, and your user name will be displayed as "author". If you click on a user name, it will take you to that user profile. (If you click on your own name you will be taken to a page to update your profile. There is no way to view your own profile while logged in under that profile.) ###

## User Page ##
### This page has intentionally been left with minimum functionality at this point. I will add more as time permits. If you choose to update your profile information, you may change your username, which will be reflected on all of your posts and comments, you may also change your email address or password. (Note you must confirm your new password)  ###

## Magic cue-ball page ##

### When you click on the [Magic Cue-Ball](http://localhost:3000/affirm) link it will take you to a page with a select drop down menu to choose an Affirmation category. Once you have made a selection you will be taken to the Cue-ball page. While you hover over the cue-ball, the affirmation will not be displayed, and the ball will shake. When you move your mouse away, the ball stops shaking and a randomly generated affirmation according to your selected category will fade in to the screen. If you want to select a different affirmation, simply hover over the ball again, and when you move your mouse away again a new affirmation will appear. (Please note: There are only 5 affirmations for each category.)  ###

---

## Support ##
### Bug Reporting ###
- I will be continuing to update this project on a weekly basis as I am able. Please feel free to email your suggestions to me at `jacob.robak.147112@tlm.cloud`.

---

 ## Authors ##
 ### The main author for this project is `Jacob Robak`, with grateful acknowledgement of the assistance from the TLM T.A.'s and Tutors. ###

 ---

 ## Project Status ##
 - This project is completed to the best of my ability, and will be maintained as time allows. Thank you for viewing this file.