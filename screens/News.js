import { View } from 'react-native'
import { globalStyles } from '../styles/global'

import { WebView } from 'react-native-webview'

function News() {
  return (
    <View style={globalStyles.webContainer}>
      <WebView
        source={{ uri: 'https://www.google.com/?hl=fr' }}
        style={globalStyles.webView}
      />
    </View>
  )
}

export default News
