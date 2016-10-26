class Api::ChoresController < ApplicationController

  def show
    render json: Chore.find(params[:id])
  end

  def index
    @chores = Chore.all
    render json: @chores, status: 200
  end

  def create
    @chore = Chore.new(chore_params)
    if @chore.save
      render json: @chore, status: 200
    else
      render json: @chore.errors.full_messages, status: 422
    end
  end

  def update
    @chore = Chore.find(params[:id])
    if @chore.update(chore_params)
      render json: @chore
    else
      render json: @chore.errors.full_messages, status: 422
    end
  end

  def destroy
    @chore = Chore.find(params[:id])
    @chore.destroy
    render json: @chore, status: 200
  end

  private

  def chore_params
    params.require(:chore).permit(:title, :body, :done)
  end
end
