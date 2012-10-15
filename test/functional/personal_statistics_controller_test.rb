require 'test_helper'

class PersonalStatisticsControllerTest < ActionController::TestCase
  setup do
    @personal_statistic = personal_statistics(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:personal_statistics)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create personal_statistic" do
    assert_difference('PersonalStatistic.count') do
      post :create, personal_statistic: { item_array: @personal_statistic.item_array, nr_of_dropzones: @personal_statistic.nr_of_dropzones }
    end

    assert_redirected_to personal_statistic_path(assigns(:personal_statistic))
  end

  test "should show personal_statistic" do
    get :show, id: @personal_statistic
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @personal_statistic
    assert_response :success
  end

  test "should update personal_statistic" do
    put :update, id: @personal_statistic, personal_statistic: { item_array: @personal_statistic.item_array, nr_of_dropzones: @personal_statistic.nr_of_dropzones }
    assert_redirected_to personal_statistic_path(assigns(:personal_statistic))
  end

  test "should destroy personal_statistic" do
    assert_difference('PersonalStatistic.count', -1) do
      delete :destroy, id: @personal_statistic
    end

    assert_redirected_to personal_statistics_path
  end
end
