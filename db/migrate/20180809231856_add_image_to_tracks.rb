class AddImageToTracks < ActiveRecord::Migration[5.2]
  def change
    add_column :tracks, :image, :string
  end
end
