class Word < ApplicationRecord
  belongs_to :user
  has_many :word_scores
  has_many :scores, through: :word_scores

  with_options presence: true do
    validates :name
    validates :description
    validates :user_id
  end
end
