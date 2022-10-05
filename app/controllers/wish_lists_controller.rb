class WishListsController < ApplicationController
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

  def destroy 
    wishlist = WishList.find(params[:id])
    wishlist.destroy
    render json: {}, status: :ok
  end

  private 

  def wish_list_params
    params.permit(:title, :event_date, :note)
  end

end
