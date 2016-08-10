class CreateHosts < ActiveRecord::Migration[5.0]
  def change
    create_table :hosts do |t|
      t.integer :rate
      t.text :amenities

      t.timestamps
    end
  end
end
