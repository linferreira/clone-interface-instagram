import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ListItem(props) {
  const [feed, setFeed] = useState(props.data.item);

  const showLikes = () => {
    if (feed.likers <= 0) return

    return (
      <Text style={styles.likes}>
        {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
      </Text>
    )
  }

  const toLike = () => {
    if (feed.likeada) {
      setFeed({
        ...feed,
        likeada: false,
        likers: feed.likers - 1
      })
    } else {
      setFeed({
        ...feed,
        likeada: true,
        likers: feed.likers + 1
      })
    }
  }

  const newIcon = () => {
    return feed.likeada ? require('../../img/likeada.png') : require('../../img/like.png')
  }

  return (
    <View style={styles.feedArea}>
      <View style={styles.viewProfile}>
        <Image
          source={{ uri: feed.imgperfil }}
          style={styles.photoProfile}
        />

        <Text style={styles.userName}> {feed.nome} </Text>
      </View>
      <Image
        resizeMode={"cover"}
        source={{ uri: feed.imgPublicacao }}
        style={styles.photoPubli}
      />

      <View style={styles.areaIcons}>
        <TouchableOpacity onPress={() => toLike()}>
          <Image
            source={newIcon()}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../img/send.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      {showLikes()}

      <View style={styles.footer}>
        <Text style={styles.footerName}>
          {feed.nome}
        </Text>

        <Text style={styles.footerLabel}>
          {feed.descricao}
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  feedArea: {

  },
  viewProfile: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8
  },
  photoProfile: {
    width: 40,
    height: 40,
    borderRadius: 25,
    alignItems: "center"
  },
  userName: {
    fontSize: 22,
    textAlign: 'left',
    color: '#000',

  },
  photoPubli: {
    flex: 1,
    height: 400,
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 5
  },
  areaIcons: {
    flexDirection: 'row',
    padding: 5,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  footerLabel: {
    paddingLeft: 5,
    fontSize: 15,
    color: '#000'
  },
  footerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 5
  },
  likes: {
    fontWeight: 'bold',
    marginLeft: 5
  }
})