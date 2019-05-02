class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :details, null: false
      t.string :title, null: false
      t.string :event_address, null: false
      t.string :category, null: false
      t.date :date, null: false
      t.integer :host_id, null: false
      t.integer :group_id
      t.timestamps
    end

    add_index :events, :host_id
    add_index :events, :group_id
    add_index :events, :title
  end
end
