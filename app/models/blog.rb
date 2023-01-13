class Blog < ApplicationRecord
    validates :Title, presence: true
    validates :Body, presence: true
end
