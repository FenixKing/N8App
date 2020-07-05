import React, { useEffect, useState } from 'react';
import { Animated, FlatList, StyleSheet, StatusBar } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {
    Container,
    Text,
    Body,
    GroupSearch,
    SearchProducts,
    Menu,
    ImageMenu,
    Menus,
    SelectMenus,
    TitleMenus,
    Select,
    GroupCard,
    TouchableCard,
    Card,
    GroupCardTitle,
    CardTitle,
    CardGroupPrice,
    CardPrice,
    CardMl,
    CardImage,
} from './styled';

import { menus, card } from '../../services/data';
import { useDispatch, useSelector } from 'react-redux';
import { actionShow } from '../../store/ducks/Show'
import { actionShowRoutes } from '../../store/ducks/ShowRoutes'


export default ({ navigation }) => {

    const [hidden, setHidden] = useState(0);
    const [selected, setSelected] = useState('1');

    const dispatch = useDispatch();
    const { showRoute } = useSelector(state => state.showRoutes);

    const topAnimation = new Animated.Value(240);
    const widthAnimation = new Animated.Value(0);
    const heightAnimation = new Animated.Value(0);

    const rightToLeftAnimationSearch = new Animated.Value(350);
    const rightToLeftAnimationMenu = new Animated.Value(350);

    const rightToLeftAnimationMenuTitle = new Animated.Value(350);
    const diagonalAnimationMenuTitle = new Animated.Value(400);

    const fadeIn = () => {
        Animated.timing(widthAnimation, {
            toValue: 30,
            duration: 2000,
            useNativeDriver: true
        }).start()
        Animated.timing(heightAnimation, {
            toValue: 30,
            duration: 2000,
            useNativeDriver: true
        }).start(() => { fadeOut() })
    };

    let isShow = true;

    const fadeOut = () => {
        Animated.timing(widthAnimation, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true
        }).start()
        Animated.timing(topAnimation, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true
        }).start()
        Animated.timing(heightAnimation, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true
        }).start(() => setHidden(1))
    };

    const SearchAnimation = () => {
        Animated.timing(rightToLeftAnimationSearch, {
            delay: 200,
            toValue: 0,
            duration: 2000,
            useNativeDriver: true
        }).start()
        Animated.timing(rightToLeftAnimationMenu, {
            delay: 800,
            toValue: 0,
            duration: 2000,
            useNativeDriver: true
        }).start(() => {
            dispatch(actionShow(isShow))
            setHidden(2)
        })
    }

    const CardAnimation = () => {
        Animated.timing(rightToLeftAnimationMenuTitle, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true
        }).start()
        Animated.timing(diagonalAnimationMenuTitle, {
            delay: 1000,
            toValue: 0,
            duration: 2000,
            useNativeDriver: true
        }).start(() => { dispatch(actionShowRoutes(2)) })
    }

    useEffect(() => {
        if (showRoute === 1) {
            if (hidden === 0) {
                fadeIn()
            } else if (hidden === 1) {
                SearchAnimation()
            } else {
                CardAnimation()
            }
        } else {
            SearchAnimation()
            CardAnimation()
        }

    }, [hidden])

    return (
        <Container>
            {hidden === 1 || hidden === 2 ? <StatusBar backgroundColor="#FFF5F5" barStyle='dark-content' /> : <StatusBar hidden />}
            <Animated.View
                style={showRoute === 1 ? {
                    width: 60,
                    height: 60,
                    transform: [{
                        translateY: topAnimation,
                        scaleX: widthAnimation,
                        scaleY: heightAnimation
                    }],
                    backgroundColor: '#FF7272',
                    top: 30,
                    left: 150,
                    borderRadius: 500
                } : {
                        opacity: 0
                    }}>
            </Animated.View>
            <Animated.View
                style={showRoute === 1 ? {
                    backgroundColor: '#FF7272',
                    width: 60,
                    height: 60,
                    left: 150,
                    top: 30,
                    position: 'absolute',
                    transform: [{ translateY: topAnimation }],
                    borderRadius: 50,
                    padding: 13
                } : {
                        backgroundColor: '#FF7272',
                        width: 60,
                        height: 60,
                        left: 150,
                        marginTop: 30,
                        position: 'absolute',
                        borderRadius: 50,
                        padding: 13,
                    }}>
                <Text>N8</Text>
            </Animated.View>
            <Body
                style={showRoute === 2 ? { marginTop: 60, opacity: 1 } : { marginTop: 0, opacity: hidden }}>
                <Animated.View
                    style={{
                        transform: [{ translateX: rightToLeftAnimationSearch }],
                        marginLeft: 25,
                        marginBottom: 50
                    }}>
                    <SearchProducts
                        style={{ position: 'absolute' }}
                        placeholder="Search products"
                    />
                    <FontAwesomeIcon
                        icon={faSearch}
                        size={20}
                        color='#FF7272'
                        style={{
                            right: 270,
                            top: 15,
                            position: 'absolute'
                        }} />
                </Animated.View>
                <Animated.View
                    style={{
                        transform: [{ translateX: rightToLeftAnimationMenu }]
                    }}>
                    <FlatList
                        horizontal
                        data={menus}
                        renderItem={({ item }) => (
                            <Menu >
                                <ImageMenu height={20} widht={20} source={item.image} />
                            </Menu>

                        )}
                        keyExtractor={item => item.id}
                    />
                </Animated.View>
                <Animated.View
                    style={
                        {
                            transform: [{ translateX: rightToLeftAnimationMenuTitle }],
                        }}>
                    <Menus>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={menus}
                            renderItem={({ item }) => (
                                <SelectMenus opacity={1} onPress={() => setSelected(item.id)}>
                                    <TitleMenus style={selected === item.id ? { color: '#D63434' } : { color: '#FFB5B5' }} >{item.name}</TitleMenus>
                                    <Select style={selected === item.id ? { borderBottomWidth: 2, borderColor: '#D63434' } : { backgroundColor: 'transparent' }} />
                                </SelectMenus>
                            )}
                            keyExtractor={item => item.id}
                        />
                    </Menus>
                </Animated.View>
                <Animated.View
                    style={{
                        transform: [{
                            translateY: diagonalAnimationMenuTitle,
                            translateX: diagonalAnimationMenuTitle,
                        }],
                    }}>
                    <GroupCard>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={card}
                            renderItem={({ item }) => (
                                <>
                                    {item.id === '1' ?
                                        <TouchableCard
                                            activeOpacity={1}
                                            onPress={() => { navigation.navigate('Product') }}
                                        >
                                            <Card style={styles.shadow}>
                                                <GroupCardTitle>
                                                    <CardTitle>{item.title}</CardTitle>
                                                </GroupCardTitle>
                                                <CardGroupPrice>
                                                    <CardPrice>{item.price}</CardPrice>
                                                    <CardMl>{item.ml}</CardMl>
                                                </CardGroupPrice>
                                                {item.backImage &&
                                                    <CardImage
                                                        style={{
                                                            position: 'absolute',
                                                            left: 85,
                                                            top: 100,
                                                        }}
                                                        source={item.backImage} />}
                                                <CardImage
                                                    source={item.image}
                                                    style={{
                                                        marginTop: item.marginTop,
                                                        marginLeft: item.marginLeft,
                                                        height: item.height,
                                                        width: item.width
                                                    }} />
                                            </Card>
                                        </TouchableCard>
                                        :
                                        <Card style={styles.shadow}>
                                            <GroupCardTitle>
                                                <CardTitle>{item.title}</CardTitle>
                                            </GroupCardTitle>
                                            <CardGroupPrice>
                                                <CardPrice>{item.price}</CardPrice>
                                                <CardMl>{item.ml}</CardMl>
                                            </CardGroupPrice>
                                            {item.backImage &&
                                                <CardImage
                                                    style={{
                                                        position: 'absolute',
                                                        left: 85,
                                                        top: 100,
                                                    }}
                                                    source={item.backImage} />}
                                            <CardImage
                                                source={item.image}
                                                style={{
                                                    marginTop: item.marginTop,
                                                    marginLeft: item.marginLeft,
                                                    height: item.height,
                                                    width: item.width
                                                }} />
                                        </Card>
                                    }
                                </>
                            )}
                            keyExtractor={item => item.id}
                        />
                    </GroupCard>
                </Animated.View>
            </Body>
        </Container >
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#FFB5B5",
        shadowOffset: {
            width: 5,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 3,

        elevation: 9,
    }

});