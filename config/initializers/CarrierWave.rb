CarrierWave.configure do |c|
  c.fog_provider = 'fog/aws'
  c.fog_credentials = {
      provider:              'AWS',
      aws_access_key_id:     ENV["AWSKEY"],
      aws_secret_access_key: ENV["AWSSECRET"],
      region:                ENV["AWSREGION"],
  }
  c.fog_directory  = ENV["AWSBUCKET"]
end
