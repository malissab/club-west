class CategoriesController < ApplicationController

    def index
        categories = Category.all
        render json: categories, include: [:items]
    end

    def show
        categories = Category.find(params[:id])
        render json: categories, include: [:items]
    end

end
