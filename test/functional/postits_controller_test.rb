require 'test_helper'

class PostitsControllerTest < ActionController::TestCase
  setup do
    @postit = postits(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:postits)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create postit" do
    assert_difference('Postit.count') do
      post :create, postit: { content: @postit.content, create_timestamp: @postit.create_timestamp, deadline_timestamp: @postit.deadline_timestamp, status: @postit.status, title: @postit.title }
    end

    assert_redirected_to postit_path(assigns(:postit))
  end

  test "should show postit" do
    get :show, id: @postit
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @postit
    assert_response :success
  end

  test "should update postit" do
    put :update, id: @postit, postit: { content: @postit.content, create_timestamp: @postit.create_timestamp, deadline_timestamp: @postit.deadline_timestamp, status: @postit.status, title: @postit.title }
    assert_redirected_to postit_path(assigns(:postit))
  end

  test "should destroy postit" do
    assert_difference('Postit.count', -1) do
      delete :destroy, id: @postit
    end

    assert_redirected_to postits_path
  end
end
