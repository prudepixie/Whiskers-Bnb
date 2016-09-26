class Booking < ApplicationRecord
  belongs_to :guest, class_name: 'User'
  has_many :reservations
end
