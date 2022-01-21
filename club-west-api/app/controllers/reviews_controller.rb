class ReviewsController < ApplicationController

    def index 
        reviews = Review.all
        render json: reviews, include: [:item, :user]
    end

    def show
        itemReview = Review.find(params[:id])
        render json: itemReview, include: [:item, :user]
    end

    def update
        end
        

    def create
        itemReview = Review.create!(review_params)
        render json: itemReview, status: :created
    end

    def destroy
        itemReview = Review.find_by(params[:id])
        itemReview.destroy
        head :no_content
    end

    private

    def review_params
        params.permit(:comment, :user_id, :item_id)
    end

  
end
