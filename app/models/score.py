from .db import db

class Score(db.Model):
  __tablename__ = 'scores'

  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(25), nullable = False)
  score = db.Column(db.Integer, nullable = False)
  quiz_id = db.Column(db.Integer, db.ForeignKey("quizzes.id"))

  @property
  def score(self):
      return self.score

  @score.setter
  def score(self, score):
      self.score = score

  def check_score(self, score):
    return (self.score, score)

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
      "score-name": self.name,
      "score-amount": self.score
    }
