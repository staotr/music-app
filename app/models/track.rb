class Track < ApplicationRecord
  mount_uploader :audio, AudioUploader
  mount_uploader :image, ImageUploader
end
