class RemoveIndexFromProductsUsers < ActiveRecord::Migration[7.0]
  def change
    add_index :products_users, :product_id
  end
end
