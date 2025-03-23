import { View, Text, TouchableOpacity,StyleSheet, Image } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/Screenwrapper'
import Typo from '@/components/Typo'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import Button from '@/components/Button'
import { FadeTransition } from '@react-navigation/bottom-tabs/lib/typescript/commonjs/src/TransitionConfigs/TransitionPresets'
import Animated, { FadeIn } from 'react-native-reanimated';
import { useRouter } from 'expo-router'

const welcome = () => {
    const router = useRouter();
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View>
            <TouchableOpacity onPress={() => router.push('/(auth)/login')} style={styles.loginButton}>
                <Typo fontWeight={"500"}>Sign In</Typo>
            </TouchableOpacity>

            <Animated.Image
            entering={FadeIn.duration(1000)}
            source={require('../../assets/images/welcome.jpeg')}
            style={styles.welcomeImage}
            resizeMode="contain"/>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
            <Animated.View 
            entering={FadeIn.duration(1000).springify().damping(12)}
            style={{ alignItems: "center" }}>
                <Typo size={30} fontWeight={"800"}>
                    Always take control
                </Typo>
                <Typo size={30} fontWeight={"800"}>
                    of your finances
                </Typo>
            </Animated.View>

            <Animated.View 
            entering={FadeIn.duration(1000).delay(100).springify().damping(12)}
            style={{ alignItems: "center" , gap:2}}>
                <Typo size={17} color={colors.text}>
                    Finances mnust be arranged to set a better
                </Typo>
                <Typo size={17} color={colors.text}>
                    lifestyle in future
                </Typo>
            </Animated.View>

            <Animated.View 
            entering={FadeIn.duration(1000).delay(200).springify().damping(12)}
            style={styles.buttonContainer}>
                <Button onPress={() => router.push('/(auth)/register')}>
                    <Typo size={22} color={colors.neutral900} fontWeight={"600"}>Get Started</Typo>
                </Button>
            </Animated.View>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default welcome

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      paddingTop: spacingY._7,
    },
    welcomeImage: {
      width: "100%",
      height: verticalScale(300),
      alignSelf: "center",
      marginTop: verticalScale(100),
    },
    loginButton: {
      alignSelf: "flex-end",
      marginRight: spacingX._20,
    },
    footer: {
        backgroundColor: colors.neutral900,
        alignItems: "center",
        paddingTop: verticalScale(30),
        paddingBottom: verticalScale(45),
        gap: spacingY._20,
        shadowColor: "white",
        shadowOffset: { width: 0, height: -10 },
        elevation: 10,
        shadowRadius: 25,
        shadowOpacity: 0.15,
    },
    buttonContainer: {
        width: "100%",
        paddingHorizontal: spacingX._25,
    },
    
  });
  