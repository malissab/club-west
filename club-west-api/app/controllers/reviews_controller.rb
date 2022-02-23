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
            review = Review.find_by(id: params[:id])
            if review
              review.update(review_params)
              render json: review
            else
              render json: { error: "Review not found" }, status: :not_found
            end
        end
        

    def create
        itemReview = current_user.reviews.create!(review_params)
        render json: itemReview, status: :created
    end

    def destroy
        itemReview = Review.find(params[:id])
        itemReview.destroy

        head :no_content
    end

    private

    def review_params
        params.permit(:comment, :user_id, :item_id, :id)
    end

  
end
