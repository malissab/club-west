class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :name
      t.text :description
      t.string :size
      t.float :price
      t.string :image_url
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
