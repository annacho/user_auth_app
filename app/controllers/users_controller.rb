class UsersController < ApplicationController
  skip_filter :ensure_logged_in, only: [:new, :create, :destroy, :delete]

	def new
		@user = User.new
	end

	def index
    @users = User.notonline
	end

	def home
    @user = current_user
  end

	def create
		@user = User.new(user_params)
		if @user.save
      UserMailer.new_auth_message(User.first, @user_auth).deliver
			redirect_to users_path, notice: "You signed up!"
		else 
			render new_user_path, notice: "You failed." 
		end
	end 

	def show
    @user = current_user
    if @user.nil?
      redirect_to login_path
    end
  end

  def edit
    @user = current_user
  end

  def update
    @user = current_user
    if @user.update(user_params)
      redirect_to home_path
    else
      render :edit
    end
  end

  def detect_online
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      respond_to do |format|
        format.js
        # render :update => currently update.js.erb
        format.html { redirect_to users_path }
      end
    else
      respond_to do |format|
        format.js { render plain: "0" }
        format.html { redirect_to users_path, notice: "Online detection failed." }
      end
    end
  end

  def destroy
    if current_user.destroy!
      redirect_to logout_path
    end
  end

	private

  def set_user
    @user = current_user
  end

	def user_params
		params.require(:user).permit(:email, :password, :password_confirmation, :first_name, :last_name, :terms)
	end

end