# Brainbust
## An app to create quizzes and test your friends!

![Brainbust Logo](https://i.imgur.com/miEZqOM.png)

------------------------------------------------

## Installation

* Install dependencies from root directory

```pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt```

* Create a **.env** file using the following template:

>FLASK_APP=app
>FLASK_ENV=development
>SECRET_KEY=((Insert your own secret key here))
>DATABASE_URL=postgresql://((Admin Username)):((Admin Password))@((Host Address))/((Database Name))

* Set up a PostgreSQL database with the username, password and databse name that you used in the **.env** file.

* Follow this squence to go into the pipenv shell and migrate, then seed the database:

```pipenv shell```

```flask db upgrade```

```flask seed all```

```flask run```

* Once you have the database set up and the flask app running, you should be able to install the react app and run it to connect to the backend. On a new terminal, change from the root directory into the **./react-app** directory and run the following:

```npm install```

* Once dependencies are installed, create a **.env** file here with the following template:

>REACT_APP_BASE_URL=((Host Address, such as http://localhost:5000))

* You should be able to run the following:

```npm start```

* If successful, navigating to the address in the react app **.env** file in a browser should show the welcome page!

-------------------------------------------
## How to use Brainbust

With Brainbust you can make and take quizzes - here's a brief overview of how it works. First, you will either need to sign in, or sign up - if you'd rather check out the demo you can just click on Demo Login:

![Demo Login](https://i.imgur.com/GzkT5Mb.gif)

From here you will see all of the quizzes that belong to this user. You can take the quizzes by clicking on the **Take Quiz** button on the right side of the row it's in.

![Taking Quiz](https://i.imgur.com/7fGfhKl.gif)

Lastly you can create quizzes by using the sidebar to the left. By typing in the name of the quiz, then selecting the category, you're ready to start adding questions. It will prompt you for three incorrect answers, then one correct answer - don't worry, they'll be scrambled each time someone takes the quiz so the correct answer isn't always the fourth one ;)

![Making Quiz](https://i.imgur.com/7Y7pv5n.gif)

And that's it! Have fun making quizzes and challenging your friends!

-------------------------------------------
