class RenameListingToReservation < ActiveRecord::Migration[5.0]
  def change
    rename_table :listings, :reservations
  end
end
