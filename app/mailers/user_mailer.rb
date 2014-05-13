class UserMailer < ActionMailer::Base
  default from: "tiyappmailer@gmail.com"

  def self.user_auth_message_to_all(group)
		User.each do |user|
			UserMailer.user_auth_message(user, user_auth).deliver
		end
  end

  def user_auth_message(user, user_auth)
  	@user = user  
  	@user_auth = user_auth

  	mail(to: user.email, subject: "Registration Confirmation from User Auth App")
  end

end