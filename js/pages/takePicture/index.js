import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RNCamera } from 'react-native-camera'

class TakePicture extends PureComponent {

  constructor (props) {
    super(props)
    this.takePicture = this.takePicture.bind(this)
  }

  render() {
    return (
      <View>
        <RNCamera 
          style = {styles.preview}
          ref={ref => { this.camera = ref }}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
        />
        <Text onPress={this.takePicture}>拍照</Text>
      </View>
    )
  }

  async takePicture () {
    if (this.camera) {
      const options = { quality: 0.5, base64: true }
      const data = await this.camera.takePictureAsync(options)
      alert(data.uri)
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
})

export default TakePicture