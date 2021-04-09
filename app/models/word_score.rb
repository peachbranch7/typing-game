class WordScore < ApplicationRecord
  belongs_to :word
  belongs_to :score
end
