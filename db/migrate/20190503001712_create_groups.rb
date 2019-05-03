class CreateGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :groups do |t|
      t.string :category, null: false
      t.string :description
      t.string :name, null: false
      t.string :location, null: false
      t.timestamps
    end

    add_index :groups, :name, unique: true
  end
end
