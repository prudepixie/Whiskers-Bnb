class AddColumnToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :summary, :text
    add_column :users, :cat_size, :text
    add_column :users, :house_rules, :text
    add_column :users, :tree, :boolean
    add_column :users, :toys, :boolean
  end
end
