import { View, Text, StyleSheet, Pressable, Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import { colors, spacingX, spacingY } from '@/constants/theme';
import { verticalScale } from '@/utils/styling';
import BackButton from '@/components/BackButton';
import ScreenWrapper from '@/components/ScreenWrapper';
import Typo from '@/components/Typo';
import Input from '@/components/Input';
import * as Icons from 'phosphor-react-native';
import Button from '@/components/Button';
import { useRouter } from 'expo-router';

const Register = () => {

  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if(!emailRef.current || !passwordRef.current || !nameRef.current){
      Alert.alert('Sign up','Please fill up all fields.')
      return;
    }
    console.log('email: ',emailRef.current)
    console.log('name: ',nameRef.current)
    console.log('password: ',passwordRef.current)
    console.log('Good to register')
  }

  return (
    <ScreenWrapper>
        <View style={styles.container}>
            <BackButton/>
            <View style={{gap:5, marginTop: spacingY._20}}>
              <Typo size={30} fontWeight={"800"}>
                Let's,
              </Typo>
              <Typo size={30} fontWeight={"800"}>
                Get Started
              </Typo>
            </View>

        <View style={styles.form}>
          <Typo size={16} color={colors.textLighter}>
            Create an account to track your expenses
          </Typo>
          <Input 
          placeholder="Enter your name" 
          secureTextEntry
          onChangeText={(value) => {nameRef.current = value}}
          icon={<Icons.User size={verticalScale(26)}
          color={colors.neutral300}/>}
          />
          <Input 
          placeholder="Enter your email" 
          onChangeText={(value) => {emailRef.current = value}}
          icon={<Icons.At size={verticalScale(26)}
          color={colors.neutral300}/>}
          />
          <Input 
          placeholder="Enter your password" 
          secureTextEntry
          onChangeText={(value) => {passwordRef.current = value}}
          icon={<Icons.Lock size={verticalScale(26)}
          color={colors.neutral300}/>}
          />
        </View>

        <Typo size={14} color={colors.text} style={{alignSelf: 'flex-end'}}>Forget Password?</Typo>
        <Button loading={isLoading} onPress={handleSubmit}>
          <Typo fontWeight={'700'} color={colors.black} size={21}>Sign Up</Typo>
        </Button>

        <View style={styles.footer}>
          <Typo size={15}>Already have an account?</Typo>
          <Pressable onPress={()=> router.navigate("/(auth)/login")}>
            <Typo size={15} fontWeight={'700'} color={colors.primary}>Login</Typo>
          </Pressable>
        </View>

        </View>
    </ScreenWrapper>
  )
}

export default Register;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      gap: spacingY._30,
      paddingHorizontal: spacingX._20,
    },
    welcomeText: {
      fontSize: verticalScale(20),
      fontWeight: "bold",
      color: colors.text,
    },
    form: {
      gap: spacingY._20,
    },
    forgotPassword: {
      textAlign: "right",
      fontWeight: "500",
      color: colors.text,
    },
    footer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 5,
    },
    footerText : {
        textAlign: "center",
        color: colors.text,
        fontSize: verticalScale(15)
    }
  });
  