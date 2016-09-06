class CreateListings < ActiveRecord::Migration[5.0]
  def change
    create_table :listings do |t|
      t.integer :host_id
      t.datetime :beginning_date
      t.datetime :ending_date
      t.integer :rate

      t.timestamps
    end
  end
end
