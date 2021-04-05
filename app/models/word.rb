class Word < ApplicationRecord
  belongs_to :user

  with_options presence do
    validates :name
    validates :description
    validates :user_id
  end
end
