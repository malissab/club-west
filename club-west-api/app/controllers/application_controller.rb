class ApplicationController < ActionController::API
    include ActionController::Cookies

    def current_user
        User.find_by(id: session[:user_id])
    end

    def home
        render json: {message: 'Server is running!'}
    end
    
end
