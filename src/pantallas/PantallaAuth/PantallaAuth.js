import React, { Component } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import {FormControl, Stack, Input, NativeBaseProvider, Heading, Box, VStack, Link, Button, Text, HStack} from 'native-base';
import {Actions} from 'react-native-router-flux';

const cambiarPantalla = () => {
    Actions.replace('NavP');
}


class PantallaAuth extends Component {
    render() {
        return(
            <NativeBaseProvider>
                <Box safeArea flex={1} p='2' py='20' w='90%' mx='auto' >
                    <Heading size='lg' fontWeight='600' color='coolGray.800'>
                        Bienvenido!
                    </Heading>
                    <Heading mt='1' color='coolGray.600' fontWeight='medium' size='xs'>
                        Ingresa para continuar
                    </Heading>

                    <VStack space={3} mt='5'>
                        <FormControl>
                            <FormControl.Label
                            _text={{
                                color: 'coolGray.800',
                                fontSize:15,
                                fontWeight:500,
                            }}>
                                Email
                            </FormControl.Label>
                            <Input></Input>
                        </FormControl>
                        <FormControl>
                            <FormControl.Label
                            _text={{
                                color: 'coolGray.800',
                                fontSize:15,
                                fontWeight:500
                            }}>
                                Contraseña
                            </FormControl.Label>
                            <Input type='password'></Input>
                            <Link
                            _text={{
                                fontSize:'xs', 
                                fontWeight:'500',
                                color:'indigo.500'
                            }} alignSelf='flex-end' mt='1'>
                                Olvidaste tu contraseña?
                            </Link>
                        </FormControl>
                        <Button mt='2' colorScheme="indigo" _text={{ color:'white' }} onPress={cambiarPantalla}>
                            Entrar
                        </Button>
                        <HStack mt='6' justifyContent='center'>
                            <Text fontSize='sm' color='muted.700' fontWeight={400}>
                                Soy un nuevo usuario.{' '}
                            </Text>
                            <Link _text={{
                                color:'indigo.500',
                                fontWeight:'medium',
                                fontSize:'sm',
                            }} href='#'>
                                Registrarme
                            </Link>
                        </HStack>
                    </VStack>
                </Box>
            </NativeBaseProvider>
        );
    }
}

export default PantallaAuth;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'red',
    },
})