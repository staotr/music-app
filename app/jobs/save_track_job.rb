class SaveTrackJob < ApplicationJob
  queue_as :default

  def perform(track)
    # Do something later
    params = { title: track[:title], audio: File.open(track[:audio], 'r') }
    if !track[:image].nil?
      p 'should work'
      params[:image] = File.open(track[:image], 'r')
    end

    Track.create(params)
  end
end
