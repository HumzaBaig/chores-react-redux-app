class CreateChores < ActiveRecord::Migration
  def change
    create_table :chores do |t|
      t.string :title, null: false
      t.string :body, null: false
      t.boolean :done

      t.timestamps null: false
    end
  end
end
