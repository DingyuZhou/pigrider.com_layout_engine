require 'test_helper'

module PigriderLayout
  class MainControllerTest < ActionController::TestCase
    test "should get globalLayout" do
      get :globalLayout
      assert_response :success
    end
  
    test "should get aboutUs" do
      get :aboutUs
      assert_response :success
    end
  
    test "should get contactUs" do
      get :contactUs
      assert_response :success
    end
  
  end
end
