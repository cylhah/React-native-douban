import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'

class Message extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <View style={styles.headLeft}>
            <Image
              style={styles.headLeftImg}
              source={require('../../../res/images/douban.png')}
            ></Image>
            <View>
              <Text style={{ color: 'rgb(80,80,80)', fontSize: 16}}>新片情报局</Text>
              <Text style={{ color: 'rgb(150,150,150)', fontSize: 16}}>转发电影</Text>
            </View>
          </View>
          <View style={styles.headRight}>
            <Text style={{ color: 'rgb(198,198,198)' }}>6小时前</Text>
            <Entypo name={'dots-three-horizontal'} size={18} color={'rgb(198,198,198)'}></Entypo>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text
            style={styles.contentText}
          >《无双》讲述了以代号“画家”（周润发 饰）为首的犯罪团伙，掌握了制造伪钞技术，难辨真伪，并在全球进行交易获取利益，引起警方高度重视。然而“画家”和其他成员的身份一直成谜，警方的破案进度遭受到了前所未有的挑战。在关键时刻，擅长绘画的李问（郭富城 饰）打开了破案的突破口，而“画家”的真实身份却让众人意想不到</Text>
        </View>
        <View style={styles.movieInfo}>
          <Image
            style={styles.movieImg}
            source={require('../../../res/images/movie.jpg')}
          ></Image>
          <View style={styles.movieRight}>
            <Text style={{ color: 'rgb(70,70,70)'}}>阿拉姜色(2018)</Text>
            <Text>2018/中国大陆/剧情/松太加/松太加/松太加</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headLeft: {
    width: 145,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headLeftImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  headRight: {
    width: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    marginTop: 15,
    marginBottom: 15,
  },
  contentText: {
    fontSize: 19,
    lineHeight: 28,
    color: 'rgb(80,80,80)',
  },
  movieInfo: {
    backgroundColor: 'rgb(248,248,248)',
    padding: 15,
    flexDirection: 'row',
  },
  movieImg: {
    width: 60,
    height: 80,
    borderRadius: 5,
  },
  movieRight: {
    marginLeft: 10,
    backgroundColor: 'red',
    width: 260,
  }
})

export default Message