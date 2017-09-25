class Project < ApplicationRecord
  # VALIDATIONS
  validates_presence_of :name, :description
end
