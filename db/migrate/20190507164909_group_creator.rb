class GroupCreator < ActiveRecord::Migration[5.2]
  def change
    add_column :groups, :organizer_id, :integer
  end
end
