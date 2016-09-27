class ReservationsController < ApplicationController
  before_action :set_reservation, only: [:show, :edit, :update, :destroy]
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
    respond_to do |format|
      format.html { render :show }
      format.json { render json: @reservation }
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

  def destroy
    @reservation.destroy
    respond_to do |format|
      format.html { redirect_to reservations_url, notice: 'User was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    def set_reservation
      @reservation = Reservation.find(params[:id])
    end
    # Never trust parameters from the scary internet, only allow the white list through.
    def reservation_params
      params.require(:reservation).permit(:beginning_date, :ending_date, :rate, :host_id, :booking_id)
    end
end
