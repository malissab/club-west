class CartsController < ApplicationController
    def index 
        carts = Cart.all
        render json: carts
    end

    def create
        carts = Cart.create(
            
        )
        render json: carts, status: :created
    end

    def destroy
        carts = Cart.find_by(id: params[:id])
        carts.destroy
        head :no_content
    end

  
end
