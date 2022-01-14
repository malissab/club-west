
class User < ApplicationRecord
    has_secure_password

    has_many :reviews
    has_many :carts

    has_many :reviewed_items, 
    through: :reviews, source: :items

    has_many :items,
    through: :carts

end
