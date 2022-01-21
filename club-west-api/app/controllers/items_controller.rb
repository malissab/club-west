class ItemsController < ApplicationController

    def index
        items = Item.all
        render json: items
    end

    def show
        categoryItem = Item.find(params[:id])
        render json: categoryItem, include: [:reviews]
    end
end
