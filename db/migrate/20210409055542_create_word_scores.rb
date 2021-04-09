class CreateWordScores < ActiveRecord::Migration[6.0]
  def change
    create_table :word_scores do |t|
      t.references :word,  foreign_key: true
      t.references :score, foreign_key: true
      t.timestamps
    end
  end
end
