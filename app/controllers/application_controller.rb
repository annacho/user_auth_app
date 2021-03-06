class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_filter :ensure_logged_in
  skip_filter :ensure_logged_in, only: :destroy

  helper_method :current_user # to make current user now accessible in views

  private

  def current_user
  	# unless params['_method'] == "delete"
  	@current_user ||= User.find(session[:user_id]) if session[:user_id]
  	# end
	end

  def ensure_logged_in
  	if current_user.nil?
  		redirect_to login_path
  	end
  end
  
end
