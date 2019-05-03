class CreateMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :memberships do |t|
      t.integer :member_id, null: false
      t.integer :group_id, null: false
      t.timestamps
    end
  end
end
