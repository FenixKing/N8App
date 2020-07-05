import React, { useState, useEffect } from 'react';
import { FlatList, Animated, StyleSheet } from 'react-native'
import {
    Content,
    Body,
    LightGroup,
    TopGroupMl,
    TouchableMl,
    TitleMl,
    GroupProduct,
    Image,
    TextGroup,
    PriceMlGroup,
    TitleProduct,
    PriceProduct,
    MlProduct,
    TextBody,
    TouchableViewMore,
    TextViewMore,
    GroupAddToBag,
    NumberGroupAddToBag,
    TouclableNumberAddToBag,
    TextPlusAndMinor,
    TextNumberAddToBag,
    TouchableGroupAddToBag,
    TextGroupAddToBag
} from './styled'
import { Select } from '../Home/styled';

export default ({ navigation }) => {
    const [selected, setSelected] = useState('1')
    const [productAnimate, setProductAnimate] = useState('0')
    const [toBag, setToBag] = useState(1)

    const productAnimationXStart = new Animated.Value(0);
    const productAnimationYStart = new Animated.Value(0);
    const productAnimationRotateStart = new Animated.Value(0);
    const productAnimationOpacityStart = new Animated.Value(1);

    const productAnimationXEnd = new Animated.Value(0);
    const productAnimationYEnd = new Animated.Value(0);
    const productAnimationRotateEnd = new Animated.Value(0);
    const productAnimationOpacityEnd = new Animated.Value(0);

    const backProductAnimationXStart = new Animated.Value(1);
    const backProductAnimationYStart = new Animated.Value(1);
    const backProductAnimationLeftStart = new Animated.Value(0);
    const backProductAnimationRotateStart = new Animated.Value(0);

    const backProductAnimationXEnd = new Animated.Value(1.2);
    const backProductAnimationYEnd = new Animated.Value(1.2);
    const backProductAnimationLeftEnd = new Animated.Value(0);
    const backProductAnimationRotateEnd = new Animated.Value(0);

    const AnimationProductStart = () => {
        Animated.timing(productAnimationXStart, {
            toValue: -400,
            duration: 2000,
            useNativeDriver: true
        }).start()
        Animated.timing(productAnimationYStart, {
            toValue: 400,
            duration: 5000,
            useNativeDriver: true
        }).start()
        Animated.timing(productAnimationRotateStart, {
            toValue: -1,
            duration: 4000,
            useNativeDriver: true
        }).start()
        Animated.timing(productAnimationOpacityStart, {
            toValue: 0,
            duration: 700,
            useNativeDriver: true
        }).start()
    }

    const AnimationProductEnd = () => {
        Animated.timing(productAnimationXEnd, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true
        }).start()
        Animated.timing(productAnimationYEnd, {
            toValue: 0,
            duration: 5000,
            useNativeDriver: true
        }).start()
        Animated.timing(productAnimationRotateEnd, {
            toValue: 1,
            duration: 900,
            useNativeDriver: true
        }).start()
        Animated.timing(productAnimationOpacityEnd, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start()
    }

    const BackAnimationProductStart = () => {
        Animated.timing(backProductAnimationXStart, {
            toValue: 1.2,
            duration: 1000,
            useNativeDriver: true
        }).start()
        Animated.timing(backProductAnimationYStart, {
            toValue: 1.2,
            duration: 1000,
            useNativeDriver: true
        }).start()
        Animated.timing(backProductAnimationRotateStart, {
            toValue: 1,
            duration: 900,
            useNativeDriver: true
        }).start()
        Animated.timing(backProductAnimationLeftStart, {
            toValue: -60,
            duration: 900,
            useNativeDriver: true
        }).start()
    }

    const BackAnimationProductEnd = () => {
        Animated.timing(backProductAnimationXEnd, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start()
        Animated.timing(backProductAnimationYEnd, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start()
        Animated.timing(backProductAnimationRotateEnd, {
            toValue: 1,
            duration: 900,
            useNativeDriver: true
        }).start()
        Animated.timing(backProductAnimationLeftEnd, {
            toValue: 0.5,
            duration: 900,
            useNativeDriver: true
        }).start()
    }

    const ml = [
        {
            id: '1',
            title: '300ml',
        },
        {
            id: '2',
            title: '150ml'
        },
    ]

    const product = [
        {
            id: '1',
            image: require('../../../assets/Card/cleanser.png'),
            imageBack: require('../../../assets/Card/cleanserBack.png'),
            title: 'Gentle Skin Cleanser',
            price: '$10.29',
            ml1: '300 Ml',
            ml2: '150 Ml',
            text: 'Formulated with pure fermented green tea extract in lieu of distilled water, TonyMoly Chok Chok Green Tea Watery Cream provides intense hydration without being sticky or too heavy on skin.'
        }
    ]
    AnimationProductStart()
    AnimationProductEnd()

    productAnimate == '2' ? BackAnimationProductStart() : BackAnimationProductEnd()

    const isSelected = () => {
        if (selected == '2') {
            setSelected('1')
            setProductAnimate('1')
        } else {
            setSelected('2')
            setProductAnimate('2')
        }
    }
    return (
        <Content>
            <Body>
                <LightGroup>
                    <TopGroupMl>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={ml}
                            renderItem={({ item }) => (
                                <TouchableMl onPress={() => isSelected()} style={
                                    selected == item.id ?
                                        {
                                            width: 50,
                                            height: 30,
                                            padding: 8,
                                            borderRadius: 50,
                                            backgroundColor: '#FF7272',
                                        } : {
                                            padding: 8
                                        }
                                }>
                                    <TitleMl>{item.title}</TitleMl>
                                </TouchableMl>)
                            }

                            keyExtractor={item => item.id}
                        />
                    </TopGroupMl>
                </LightGroup>
                <GroupProduct>
                    <FlatList
                        data={product}
                        renderItem={({ item }) => (
                            <>
                                <Animated.View style={productAnimate == '2' ? {
                                    transform: [{
                                        scaleX: backProductAnimationXStart,
                                        scaleY: backProductAnimationYStart,
                                        rotate: '-5deg',
                                        translateX: backProductAnimationLeftStart
                                    }],
                                } : productAnimate == '1' ? {
                                    transform: [{
                                        scaleX: backProductAnimationXEnd,
                                        scaleY: backProductAnimationYEnd,
                                        translateX: backProductAnimationLeftEnd
                                    }],
                                } : null
                                }>
                                    <Animated.Image
                                        source={item.image}
                                        blurRadius={selected == '2' ? 0 : 0.5}
                                        style={[{ transform: [{ rotate: '5deg' }] }, style.BackImage]} />
                                </Animated.View>
                                <Animated.View style={
                                    productAnimate == '1' ? {
                                        transform: [{
                                            translateX: productAnimationXEnd,
                                            translateY: productAnimationYEnd
                                        },
                                        {
                                            rotate: productAnimationRotateEnd.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: ['-20deg', '0deg']
                                            })
                                        }],
                                        opacity: productAnimationOpacityEnd
                                    } : productAnimate == '2' ? {
                                        transform: [
                                            {
                                                translateX: productAnimationXStart,
                                                translateY: productAnimationYStart
                                            },
                                            { rotate: productAnimationRotateStart.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] }) }
                                        ],
                                        opacity: productAnimationOpacityStart
                                    } : null
                                }>
                                    <Image source={item.image} />
                                </Animated.View>
                                <TextGroup>
                                    <TitleProduct>{item.title}</TitleProduct>
                                    <PriceMlGroup>
                                        <PriceProduct>{item.price}</PriceProduct>
                                        <MlProduct>{selected == '2' ? item.ml2 : item.ml1}</MlProduct>
                                    </PriceMlGroup>
                                    <TextBody>{item.text}</TextBody>
                                    <TouchableViewMore>
                                        <TextViewMore>View More</TextViewMore>
                                    </TouchableViewMore>
                                </TextGroup>
                            </>
                        )}
                        keyExtractor={item => item.id}
                    />
                </GroupProduct>
            </Body>
            <GroupAddToBag>
                <NumberGroupAddToBag>
                    <TouclableNumberAddToBag onPress={() => { setToBag(toBag - 1), setProductAnimate('0') }}>
                        <TextPlusAndMinor>-</TextPlusAndMinor>
                    </TouclableNumberAddToBag>
                    <TextNumberAddToBag>{toBag}</TextNumberAddToBag>
                    <TouclableNumberAddToBag onPress={() => { setToBag(toBag + 1), setProductAnimate('0') }}>
                        <TextPlusAndMinor style={{ top: 12 }}>+</TextPlusAndMinor>
                    </TouclableNumberAddToBag>
                </NumberGroupAddToBag>
                <TouchableGroupAddToBag onPress={() => navigation.navigate('Bag')}>
                    <TextGroupAddToBag>Add To Bag</TextGroupAddToBag>
                </TouchableGroupAddToBag>
            </GroupAddToBag>
        </Content>
    )
}

const style = StyleSheet.create({
    BackImage: {
        width: 450,
        height: 230,
        top: 70,
        resizeMode: 'contain',
        position: 'absolute',
    }
});