class PostsController < ApplicationController
  require 'json'
  
  def index
    posts = Post.all

    if stale?(posts)
      render json: posts
    end
  end

  def show
    post = Post.find(params[:id])

    if stale?(last_modified: post.updated_at, etag: post)
      render json: post
    end
  end

  def create
    post = Post.new do |p|
      p.title = params[:title]
      p.body = params[:body]
      p.usr = Usr.find_by(name: params[:usr])
    end
    p post
  
    post.save
  end

  def update
    post = Post.find(params[:id])
    post.update(title: params[:title], body: params[:body])
    post.save 
    p post
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy
  end
end
