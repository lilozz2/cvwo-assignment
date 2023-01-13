class Api::V1::BlogsController < ApplicationController
  before_action :set_blog, only: %i[show destroy]
  
  def index
    blog = Blog.all.order(created_at: :desc)
    render json: blog
  end

  def create
    blog = Blog.create!(blog_params)
    if blog
      render json: blog
    else
      render json: blog.errors
    end
  end

  def show
    render json: @blog
  end

  def destroy
    @blog&.destroy
    render json: {message: 'Recipe deleted!'}
  end

  private

  def blog_params
    params.permit(:BlogID, :UserID, :Title, :Body)
  end

  def set_blog
    @blog = Blog.find(params[:id])
  end
end
