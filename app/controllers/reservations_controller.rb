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

  def show
    @reservations = Reservation.all

    respond_to do |format|
      format.html { render :show }
      format.json { render json: @reservations }
    end
  end

  def create
    @reservation = Reservation.new(reservation_params)

    respond_to do |format|
      if @reservation.save
        format.html { redirect_to @reservation, notice: 'Reservation was successfully created.' }
        format.json { render json: @reservations, status: 200}
      else
        format.html { render :new }
        format.json { render json: @reservation.errors, status: :unprocessable_entity }
      end
    end
  end

  private

    # Never trust parameters from the scary internet, only allow the white list through.
    def reservation_params
      params.require(:reservation).permit(:beginning_date, :ending_date, :rate, :host_id)
    end
end
