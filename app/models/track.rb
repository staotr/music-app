class Track < ApplicationRecord
  mount_base64_uploader :audio, AudioUploader
  mount_base64_uploader :image, ImageUploader
end
