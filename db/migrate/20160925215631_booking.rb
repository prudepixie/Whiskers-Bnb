class Booking < ActiveRecord::Migration[5.0]
  def change
    create_table :bookings do |t|
      t.integer :guest_id
    end
  end
end
