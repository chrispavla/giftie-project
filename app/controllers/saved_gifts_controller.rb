class SavedGiftsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  
  wrap_parameters format: []

  def index 
    render json: SavedGift.all, status: :ok
  end

  def show 
    gift = SavedGift.find(params[:id])
    render json: gift, status: :ok
  end

  def create 
    gift = SavedGift.create!(saved_gift_params)
    render json: gift, status: :created
  end

  def update 
    gift = SavedGift.find(params[:id])
    gift.update!(saved_gift_params)
    render json: gift, status: :accepted
  end

  def destroy 
    gift = SavedGift.find(params[:id])
    gift.destroy 
    render json: {}, status: :ok
  end

  private 

  def saved_gift_params 
    params.permit(:gift_name, :description, :price, :link_url, :image_url, :user_id, :wish_list_id)
  end

  def record_invalid (invalid)
    render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

  def record_not_found
    render json: { error: "Gift not found" }, status: :not_found
  end

end
