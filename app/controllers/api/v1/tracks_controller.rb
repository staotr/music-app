class Api::V1::TracksController < ApplicationController
  def index
    @tracks = Track.all
    render json: @tracks
  end

  # create sends any available track params to SAVETRACKJOB
  def create
      SaveTrackJob.perform_later(track_params.to_h)
      render json: { status: 200, msg: 'Mp3 file is processing' }
  end

  private

  def track_params
    params.require(:track).permit(:audio, :image, :title)
  end

end
