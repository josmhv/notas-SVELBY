class UsrsController < ApplicationController
  def index
    @usrs = Usr.all
    # p 'Stale: ', stale?(@usrs)

    if stale?(@usrs)
      render json: @usrs
    end
  end

  def create
    usr = Usr.new do |u|
      u.name = params[:name]
    end
    p usr

    usr.save
  end

  def show
    usr = Usr.find(params[:id])

    if stale?(last_modified: usr.updated_at, etag: usr)
      render json: usr
    end
  end

  def destroy
    usr = Usr.find(params[:id])
    usr.destroy
  end
end
