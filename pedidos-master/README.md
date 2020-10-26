# Python: Getting Started

A barebones Django app, which can easily be deployed to Heroku.

This application supports the [Getting Started with Python on Heroku](https://devcenter.heroku.com/articles/getting-started-with-python) article - check it out.

## Running Locally

Make sure you have Python 3.7 [installed locally](http://install.python-guide.org). To push to Heroku, you'll need to install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli), as well as [Postgres](https://devcenter.heroku.com/articles/heroku-postgresql#local-setup).

```sh
$ git clone <Repo-github>
$ cd <Repo-github>

$ virtualenv p --python=python3
$ source p/bin/activate

$ pip install -r requirements.txt

$ python manage.py migrate
$ python manage.py makemigrations

$ python manage.py loaddata initial_products.json

$ python manage.py createsuperuser --username=contacto@datatobsn.com --email=contacto@datatobsn.com

$ python manage.py runserver

```

Your app should now be running on [localhost:5000](http://localhost:8000/).

## Deploying to Heroku

```sh
$ heroku create
$ git push heroku master

$ heroku run python manage.py migrate
$ heroku open
```
or

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Documentation

For more information about using Python on Heroku, see these Dev Center articles:

- [Python on Heroku](https://devcenter.heroku.com/categories/python)

## Add initial data 

```sh
$ heroku login
$ git clone <heroku-repo>

$ heroku run bash
$ pip install pandas
$ python manage.py shell

```
```python
>>> import pandas as pd 
>>> import sqlite3
>>> con = sqlite3.connect('db.sqlite3')
>>> pd.read_sql_query("SELECT * FROM auth_user", con)
```
Check the user_id if is the same in the file helpmi_products.json


```sh
$ python manage.py loaddata helpmi_products.json  
```

