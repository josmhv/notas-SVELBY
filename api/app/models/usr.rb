class Usr < ApplicationRecord
  validates :name, presence: true, uniqueness: { case_sensitive: false }
  validates :name, length: { minimum: 3 }
  has_many :posts, dependent: :destroy
end
