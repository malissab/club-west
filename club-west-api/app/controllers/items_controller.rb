class ItemsController < ApplicationController

    def index
        items = Item.all
        render json: items, status: 200
    end

    def show
        categoryItem = Item.find(params[:id])
        render json: categoryItem 
    end
end
