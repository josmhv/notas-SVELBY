class Post < ApplicationRecord
  validates :title, presence: true
  validates :body, presence: true
  # validates_associated :usr, on: :update
  belongs_to :usr
end
