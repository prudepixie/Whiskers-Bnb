class ReservationsController < ApplicationController
  respond_to :json
  def index
    # respond_with Reservation.all

    @reservations = Reservation.all
    respond_to do |format|
      format.html
      format.json { render json: @reservations, status: 200 }
    end
  end

  def new
    @reservation = Reservation.new
  end

end
