class Api::V1::UsersController < Api::V1::BaseController
  def index
    respond_with User.all
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :phone, :city, :address)
  end
end
