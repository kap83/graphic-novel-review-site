class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :artist
      t.string :genre
      t.string :publisher
      t.integer :volume
      t.string :cover_url

      t.timestamps
    end
  end
end
