require 'spec_helper'

describe UsersController do
  
  describe "GET #new" do
    it "asssigns @new_user to be a new user" do
      get :new
      expect(assigns(:user)).to be_a_new(User)
    end

    it "redirects to root path" do
      get :new
      response.should redirect_to "/"
    end
  end

  describe "POST #create" do
    it "creates a new user" do
      expect{

        post :create, user: FactoryGirl.attributes_for(:user)

      }.to change(User, :count).by 1
    end

    it "redirects to root path" do
      post :create, user: FactoryGirl.attributes_for(:user)
      response.should redirect_to "/"
    end

    it "signs in the new user" do
      post :create, user: FactoryGirl.attributes_for(:user)
      user = User.find(current_user.id)
      expect(session[:user_id]).to eq user.id
    end
	end

end