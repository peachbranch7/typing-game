class Score < ApplicationRecord
  has_many :word_scores
  has_many :words, through: :word_scores

  validates :point, presence: true
end
