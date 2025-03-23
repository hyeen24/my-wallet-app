import { View, Text, TouchableOpacity,StyleSheet, Image } from 'react-native'
import React from 'react'
import Screenwrapper from '@/components/Screenwrapper'
import Typo from '@/components/Typo'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import Button from '@/components/Button'

const welcome = () => {
  return (
    <Screenwrapper>
      <View style={styles.container}>
        <View>
            <TouchableOpacity style={styles.loginButton}>
                <Typo fontWeight={"500"}>Sign In</Typo>
            </TouchableOpacity>

            <Image
            source={require('../../assets/images/welcome.jpeg')}
            style={styles.welcomeImage}
            resizeMode="contain"/>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
            <View style={{ alignItems: "center" }}>
                <Typo size={30} fontWeight={"800"}>
                    Always take control
                </Typo>
                <Typo size={30} fontWeight={"800"}>
                    of your finances
                </Typo>
            </View>

            <View style={{alignItems: "center"}}>
                <Typo size={17} color={colors.text}>
                    Finances mnust be arranged to set a better
                </Typo>
                <Typo size={17} color={colors.text}>
                    lifestyle in future
                </Typo>
            </View>

            <View style={styles.buttonContainer}>
                <Button>
                    <Typo>Get Started</Typo>
                </Button>
            </View>
        </View>
      </View>
    </Screenwrapper>
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
  