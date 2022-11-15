class GiftsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  
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

  def update 
    gift = Gift.find(params[:id])
    gift.update!(gift_params)
    render json: gift, status: :accepted
  end

  private 

  def gift_params 
    params.permit(:gift_name, :description, :tags, :price, :link_url, :image_url)
  end

  def record_invalid (invalid)
    render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

  def record_not_found
    render json: { error: "Gift not found" }, status: :not_found
  end

end
