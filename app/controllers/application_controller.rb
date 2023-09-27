class ApplicationController < ActionController::API
    include ActionController::Cookies

    wrap_parameters format: []

    before_action :authorized

    rescue_from ActiveRecord::RecordInvalid, with: :render_missing_attribute_response


    def authorized
      @current_user = User.find_by(id: session[:user_id])
      puts "HERE", @current_user
      unless @current_user
      return render json: {error: "Please Sign In"}, status: :unauthorized 
      end
    end

    private

    def render_missing_attribute_response(invalid)
      render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

  
  end
