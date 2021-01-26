from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

class Quiz(db.Model, UserMixin):
  __tablename__ = 'quizzes'

  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(100), nullable = False, unique = False)
  hashed_password = db.Column(db.String(255), nullable = True)
  is_private = db.Column(db.Boolean)
  question_quantity = db.Column(db.Integer, nullable = False)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
  category_id = db.Column(db.Integer, db.ForeignKey("categories.id"))


  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "questions": self.question_quantity,
      "private": self.is_private,
      "user": self.user_id,
      "category": self.category_id
    }
