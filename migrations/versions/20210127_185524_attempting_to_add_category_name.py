"""attempting to add category name

Revision ID: 012420e23484
Revises: 930833c3caaf
Create Date: 2021-01-27 18:55:24.690907

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '012420e23484'
down_revision = '930833c3caaf'
branch_labels = None
depends_on = None


def upgrade():
    op.add_column("categories", sa.Column(
        'name', sa.String(length=50), nullable=False))


def downgrade():
<<<<<<< HEAD
    op.drop_column('categories', sa.Column('name', sa.String(length=50), nullable=False))


=======
    op.drop_column('categories', sa.Column(
        'name', sa.String(length=50), nullable=False))
>>>>>>> 38fd9ecd5bedf6410e6bd6dc3a2ba5c069a15e71
