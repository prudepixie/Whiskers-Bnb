class AddBookingIdToReservations < ActiveRecord::Migration[5.0]
  def change
    add_column :reservations, :booking_id, :integer
  end
end
