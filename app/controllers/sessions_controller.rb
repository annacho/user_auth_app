class SessionsController < ApplicationController
	skip_filter :ensure_logged_in
	before_filter :path_boundary, only: [:new, :create, :destroy]

	def new
	end

	def create
		user = User.find_by_email(params[:email]).try(:authenticate, params[:password])

		if user
			session[:user_id] = user.id 
			redirect_to home_path, notice: "logged in"
		else 
			flash.now.alert = "Invalid Email or Password"
			render :new
		end
	end

	def destroy
		session[:user_id] = nil
		redirect_to login_path, notice: "You logged out!"
	end

	def path_boundary
    if current_user
      redirect_to home_path
    end
  end

end