from .db import db

class Category(db.Model):
  __tablename__ = 'categories'

  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(30), nullable = False)

  quizzes = db.relationship("Quiz", back_populates="category")

  @property
  def name(self):
    return self.name


  @name.setter
  def name(self, name):
    self.name = name


  def check_name(self, name):
    return (self.name, name)


  def to_dict(self):
    return {
      "id": self.id,
      "category-name": self.name,
    }
