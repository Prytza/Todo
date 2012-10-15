class PersonalStatisticsController < ApplicationController

    before_filter :authenticate_user!

  # GET /personal_statistics
  # GET /personal_statistics.json
  def index
    @personal_statistics = PersonalStatistic.all
    # @dropzones = @personal_statistics.nr_of_dropzones

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @personal_statistics }
    end
  end

  # GET /personal_statistics/1
  # GET /personal_statistics/1.json
  def show
    @personal_statistic = PersonalStatistic.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @personal_statistic }
    end
  end

  # GET /personal_statistics/new
  # GET /personal_statistics/new.json
  def new
    @personal_statistic = PersonalStatistic.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @personal_statistic }
    end
  end

  # GET /personal_statistics/1/edit
  def edit
    @personal_statistic = PersonalStatistic.find(params[:id])
  end

  # POST /personal_statistics
  # POST /personal_statistics.json
  def create
    @personal_statistic = PersonalStatistic.new(params[:personal_statistic])
    @personal_statistic.user = current_user

    respond_to do |format|
      if @personal_statistic.save
        format.html { redirect_to @personal_statistic, notice: 'Personal statistic was successfully created.' }
        format.json { render json: @personal_statistic, status: :created, location: @personal_statistic }
      else
        format.html { render action: "new" }
        format.json { render json: @personal_statistic.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /personal_statistics/1
  # PUT /personal_statistics/1.json
  def update
    @personal_statistic = PersonalStatistic.find(params[:id])

    respond_to do |format|
      if @personal_statistic.update_attributes(params[:personal_statistic])
        format.html { redirect_to @personal_statistic, notice: 'Personal statistic was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @personal_statistic.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /personal_statistics/1
  # DELETE /personal_statistics/1.json
  def destroy
    @personal_statistic = PersonalStatistic.find(params[:id])
    @personal_statistic.destroy

    respond_to do |format|
      format.html { redirect_to personal_statistics_url }
      format.json { head :no_content }
    end
  end
end
