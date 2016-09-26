class Reservation < ApplicationRecord
  belongs_to :host, class_name: 'User'
  belongs_to :booking
end
