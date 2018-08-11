/*
  This component will contain all uploading functionality
*/
import React from 'react'
import jsmediatags from '../helpers/jsmediatag'

class Upload extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isMp3: null,
      audio: {},
      image: null
    }

    // bind methods to component
    this.submitForm = this.submitForm.bind(this)
    this.organizeData = this.organizeData.bind(this)

  }


  organizeData(event){
    // retrieve audio file
    const audioFile = event.target.files[0]

    // retrieve audio file id3v2
    new jsmediatags.Reader(audioFile)
    .read({
      onSuccess: (tag) => {
        // extract image from data if available
        console.log(tag)
        if (tag.tags.picture != undefined) {
          const picture = tag.tags.picture
          const format = picture.format
          const dataArray = new Uint8Array(picture.data)
          var blob = new Blob([dataArray], { type: format })

          // create image file out of Blob
          blob.name = tag.tags.title + '.jpeg'
          blob.lastModifiedDate = new Date()
          const imgFile = blob

          // set state here
          this.submitForm(audioFile, imgFile)
          this.setState({ audio: { file: audioFile, name: audioFile.name }, image: imgFile, isMp3: true })
        } else {
          // set state with no image
          this.submitForm(audioFile)
          this.setState({ audio: { file: audioFile, name: audioFile.name }, isMp3: true })
        }
      },
      onError: (err) => { console.log(err) }
    })

  }


  submitForm(file, img = null) {
      var form = new FormData()
      form.append(
        'track',
        file,
        file.name
      )

      // add image if available
      if (img != null) {
        form.append(
          'image',
          img,
          img.name
        )
      }

      fetch('/api/v1/tracks', {
        method: "POST",
        body: form
      })
      .then((res) => {
        console.log(res)
        // remove prior data
        this.props.update()
        this.setState({ audio: null, isMp3: null, image: null })
      })
  }



  render() {
    return(
      <form className='uploadForm flex'>
        <i className="fas fa-cloud-upload-alt icon"></i>
        <input className='uploadInput' type="file"
               name="audio"
               id="audio_upload"
               accept="audio/*" onChange={this.organizeData}/>
      </form>
    )
  }
}

export default Upload
