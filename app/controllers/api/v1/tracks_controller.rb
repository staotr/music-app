class Api::V1::TracksController < ApplicationController
  def index
    @tracks = Track.all
    render json: @tracks
  end

  def create
    @input = create_input
    if check_if_track_valid(@input)
      SaveTrackJob.perform_later(extract_file_dir(@input))
      render json: { status: 200, msg: 'Mp3 will be saved soon' }
    else
      render json: { status: 400, msg: 'Mp3 will not be saved soon' }
    end
  end

  private

  def extract_file_dir(input)
    new_input = { audio: input['track'].path, title: input['track'].original_filename }
    if !input['image'].nil?
      new_input[:image] = input['image'].path
    end
    return new_input
  end

  def create_input
    items_received = []
    params.each do |k|
      if k[0] == "track" || k[0] == "image"
        items_received << k[0]
      end
    end

    # create data hash for Track record
    track = {}
    items_received.each do |i|
      track[i] = params[i]
    end

    return track
  end

  def check_if_track_valid(track)
    !track["track"].nil? ? true : false
  end

end
