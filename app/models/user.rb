class User < ActiveRecord::Base
	scope :notonline, -> { where.not(online: true) }

	has_secure_password

	validates_presence_of :email
	validates_uniqueness_of :email

	after_create :send_user_auth_message_to_all

	def send_user_auth_message_to_all
		UserMailer.new_user_auth_message_to_all(User.all, self)
	end
end