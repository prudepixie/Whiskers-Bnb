class AddColumnToBookings < ActiveRecord::Migration[5.0]
  def change
    add_column :bookings, :reservation_id, :integer
    add_column :bookings, :created_at, :datetime
    add_column :bookings, :updated_at, :datetime
  end
end
