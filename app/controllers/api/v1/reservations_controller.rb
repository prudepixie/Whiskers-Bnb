class Api::V1::ReservationController < Api::V1::BaseController
  def index
    respond_with Reservation.all
  end

  private
  def reservation_params
    params.require(:reservation).permit(:host_id, :beginning_date, :ending_date, :rate)
  end
end
