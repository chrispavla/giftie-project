class GiftsController < ApplicationController
  wrap_parameters format: []

  skip_before_action :authorize, only: :index

  def index 
    render json: Gift.all, status: :ok
  end

  def show 
    gift = Gift.find(params[:id])
    render json: gift, status: :ok
  end

  def create 
    gift = Gift.create!(gift_params)
    render json: gift, status: :created
  end

  private 

  def gift_params 
    params.permit(:gift_name, :description, :tags, :price, :quantity, :link_url, :image_url, :user_id, :wish_list_id)
  end

end
