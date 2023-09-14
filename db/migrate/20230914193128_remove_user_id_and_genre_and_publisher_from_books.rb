class RemoveUserIdAndGenreAndPublisherFromBooks < ActiveRecord::Migration[7.0]
  def change
    remove_column :books, :user_id 
    remove_column :books, :genre
    remove_column :books, :publisher
  end
end
