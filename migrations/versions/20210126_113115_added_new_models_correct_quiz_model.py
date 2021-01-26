"""Added new models - correct quiz model

Revision ID: 687f0f9a1b31
Revises: cdec070e3fd3
Create Date: 2021-01-26 11:31:15.949807

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '687f0f9a1b31'
down_revision = 'cdec070e3fd3'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('quizzes', 'category')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('quizzes', sa.Column('category', sa.VARCHAR(length=50), autoincrement=False, nullable=False))
    # ### end Alembic commands ###