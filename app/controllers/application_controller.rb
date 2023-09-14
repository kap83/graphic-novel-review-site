class ApplicationController < ActionController::API
    include ActionController::Cookies

    before_action :authorized

    def authorized
      return render json: {error: "Please Sign In"}, status: :unauthorized 
      unless session.includes? :user_id
      end
    end
  end
