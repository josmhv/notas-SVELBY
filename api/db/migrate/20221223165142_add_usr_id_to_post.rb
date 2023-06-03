class AddUsrIdToPost < ActiveRecord::Migration[7.0]
  def change
    add_column :posts, :usr_id, :integer
  end
end
