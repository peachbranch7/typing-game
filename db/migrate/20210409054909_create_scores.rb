class CreateScores < ActiveRecord::Migration[6.0]
  def change
    create_table :scores do |t|
      t.integer :point,   null: false
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
