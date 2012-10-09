class PostitsController < ApplicationController
  
  before_filter :authenticate_user!

  # GET /postits
  # GET /postits.json
  def index
    @postits = Postit.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @postits }
    end
  end

  # GET /postits/1
  # GET /postits/1.json
  def show
    @postit = Postit.find(params[:id])
    @user = @postit.user
    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @postit }
    end
  end

  # GET /postits/new
  # GET /postits/new.json
  def new
    @postit = Postit.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @postit }
    end
  end

  # GET /postits/1/edit
  def edit
    @postit = Postit.find(params[:id])
  end

  # POST /postits
  # POST /postits.json
  def create
    @postit = Postit.new(params[:postit])
    @postit.user = current_user

    # behövs den här raden? sätts tiden i databasen ändå?
    @postit.created_at = Time.now

    respond_to do |format|
      if @postit.save
        format.html { redirect_to @postit, notice: 'Postit was successfully created.' }
        format.json { render json: @postit, status: :created, location: @postit }
      else
        format.html { render action: "new" }
        format.json { render json: @postit.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /postits/1
  # PUT /postits/1.json
  def update
    @postit = Postit.find(params[:id])

    respond_to do |format|
      if @postit.update_attributes(params[:postit])
        format.html { redirect_to @postit, notice: 'Postit was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @postit.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /postits/1
  # DELETE /postits/1.json
  def destroy
    @postit = Postit.find(params[:id])
    @postit.destroy

    respond_to do |format|
      format.html { redirect_to postits_url }
      format.json { head :no_content }
    end
  end
end
