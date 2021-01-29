from .db import db


class Question(db.Model):
    __tablename__ = 'questions'

    id = db.Column(db.Integer, primary_key=True)
    question_number = db.Column(db.Integer, nullable=False)
    body = db.Column(db.String(260), nullable=False, unique=False)
    question_type = db.Column(db.String(50), nullable=True, unique=False)
    answer_1 = db.Column(db.String(100), nullable=False)
    answer_2 = db.Column(db.String(100), nullable=False)
    answer_3 = db.Column(db.String(100), nullable=False)
    answer_4 = db.Column(db.String(100), nullable=False)
    correct_answer = db.Column(db.Integer)
    quiz_id = db.Column(db.Integer, db.ForeignKey("quizzes.id"))

    quiz = db.relationship("Quiz", back_populates="questions")

    @property
    def answer(self):
        return self.correct_answer

    @answer.setter
    def answer(self, answer):
        self.correct_answer = answer

    def check_answer(self, answer):
        return (self.correct_answer, answer)

    def to_dict(self):
        return {
            "id": self.id,
            "question_number": self.question_number,
            "question_type": self.question_type,
            "question_body" : self.body,
            "answer_1" : self.answer_1,
            "answer_2" : self.answer_2,
            "answer_3" : self.answer_3,
            "answer_4" : self.answer_4,
            "correct_answer": self.correct_answer,
            "quiz_id": self.quiz_id
        }
