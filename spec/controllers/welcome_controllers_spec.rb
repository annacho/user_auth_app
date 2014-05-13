require 'spec_helper'

describe WelcomeController do
  
  describe "get #index" do

    context "user logged out" do
      it "renders the index page" do
        get :index
        response.should render_template :index
      end
    end

    context "user logged in" do
      it "renders the index page" do
        get :index
        response.should render_template :index
      end
    end

  end
end