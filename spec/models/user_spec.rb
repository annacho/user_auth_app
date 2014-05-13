require 'spec_helper'

describe User do 

# it should not start with zero users
	it 'should exist' do
		u = User.new
		u.should_not eq(nil)
	end

# it should test for presence of email
  it 'should be invalid without an email' do	
  	u = User.new
  	u.should_not be_valid
	end

# it should test for uniqueness of email
	it 'should be invalid without a unique email' do
		u = User.new
		u.should_not be_valid
	end

end