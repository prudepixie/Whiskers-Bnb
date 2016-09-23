require 'rubygems'
require 'role_model'

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  include RoleModel

  roles_attribute :roles_mask
  roles :host, :guest
  has_many :reservations, foreign_key: 'guest_id'
  has_many :reservations, foreign_key: 'host_id'

  def self.host
    select(&:host?)
  end

  def self.guest
    select(&:guest?)
  end
end
