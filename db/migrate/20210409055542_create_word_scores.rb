class CreateWordScores < ActiveRecord::Migration[6.0]
  def change
    create_table :word_scores do |t|

      t.timestamps
    end
  end
end
