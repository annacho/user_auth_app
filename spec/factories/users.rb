FactoryGirl.define do
	
	factory :user do |f|
		f.name "Name"
		f.email "email@email.com"
		f.password_digest "000000"
		f.created_at "2014-05-05"		
		f.updated_at "2014-05-05"
	end

	factory :invalid_user, class: User do |f|
		f.content nil
	end
end