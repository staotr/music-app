class SaveTrackJob < ApplicationJob
  queue_as :default

  def perform(track)
    # Do something later
    Track.create(track)
  end
end
