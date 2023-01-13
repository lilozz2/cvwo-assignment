class CreateBlogs < ActiveRecord::Migration[7.0]
  def change
    create_table :blogs do |t|
      t.integer :BlogID
      t.integer :UserID
      t.text :Title, null: false
      t.text :Body, null: false

      t.timestamps
    end
  end
end
