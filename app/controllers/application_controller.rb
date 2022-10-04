class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authorize

  private 

  def authorize
    @current_user ||= User.find_by(id: session[:user_id])
    render json: {erorrs: ['Not Authorized']}, status: :unauthorized unless @current_user
  end

  # def authenticated_user
  #   render json: {errors: ['Not logged in']}, status: :unauthorized unless @current_user
  # end

end
