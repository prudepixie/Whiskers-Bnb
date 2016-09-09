class ReservationsController < ApplicationController
  respond_to :json
  def index
    respond_with Reservation.all
  end

end
