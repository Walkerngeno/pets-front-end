import os

class Config:
    # Other configuration settings

    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'sqlite:///pets-database.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
