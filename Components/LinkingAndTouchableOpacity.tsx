import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function LinkingAndTouchableOpacity() {
  function websiteOpen(url: string) {
    Linking.openURL(url);
  }
  return (
    <View>
      <Image
        style={styles.imageCard}
        source={{
          uri: 'https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/d4bd2adab19561c4303698d516577b7c.png',
        }}
      />

      <View>
        <Text numberOfLines={2}>
          Browse and customize templates: Explore the logo templates and personalize them by adjusting colors, fonts,
          and layout to create a uniq logo design for your brand. Choose your business type: Select the category that
          best represents your business. Select your visual style: Choose a style that aligns with your brand identity
          and target audience. Enter your business name: Personalize your logo with your business name. Specify logo
          usage: Indicate where you plan to use your logo, such as on your website, social media platforms, or print
          materials.
        </Text>
        <TouchableOpacity>
            <Text onPress={() => websiteOpen('https://www.google.com/')}>Read More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageCard: {
    height: 100,
  },
});
