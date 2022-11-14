class WishListsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  wrap_parameters format: []

  def index
    user = User.find_by(id: session[:user_id])
    wishlists = user.wish_lists.uniq
    render json: wishlists, status: :ok
  end

  def show
    wishlist = WishList.find(params[:id])
    render json: wishlist, status: :ok
  end

  def create 
    wish_list = WishList.create!(wish_list_params)
    render json: wish_list, status: :created
  end

  def update 
    wishlist = WishList.find(params[:id])
    wishlist.update!(wish_list_params)
    render json: wishlist, status: :accepted
  end

  def destroy 
    wishlist = WishList.find(params[:id])
    wishlist.destroy
    render json: {}, status: :ok
  end

  private 

  def wish_list_params
    params.permit(:title, :event_date, :note)
  end

  def record_invalid (invalid)
    render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

  def record_not_found
    render json: { error: "Wishlist not found" }, status: :not_found
  end

end
