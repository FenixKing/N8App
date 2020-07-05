import styled from 'styled-components';
import { View } from 'react-native';

export const Container = styled.View({
    backgroundColor: '#FFF5F5',
    flex: 1
});
export const Text = styled.Text({
    color: '#fff',
    fontSize: 24,
    fontFamily: 'serif',
    fontWeight: '100'
});
export const Body = styled.View({
    paddingTop: 50,
    paddingLeft: 3,
});

export const GroupSearch = styled.View({
    flexDirection: 'row',
    paddingHorizontal: 25,
});
export const SearchProducts = styled.TextInput({
    backgroundColor: '#fff',
    width: 300,
    height: 50,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'transparent',
    paddingLeft: 70,
    marginBottom: 25
});
export const Menu = styled.View({
    width: 70,
    height: 70,
    borderRadius: 20,
    backgroundColor: '#fff',
    marginLeft: 15,
    marginTop: 30,
    alignItems: 'center',
    paddingTop: 15
});
export const ImageMenu = styled.Image({});

export const Menus = styled.View({
    marginLeft: 25,
    width: 350,
    height: 50,
    marginTop: 25,
    marginBottom: 5
});
export const SelectMenus = styled.TouchableOpacity({ height: 27 });
export const TitleMenus = styled.Text({
    fontSize: 20,
    marginRight: 40,
});
export const Select = styled.View({ width: 25 });

export const GroupCard = styled.View({
    paddingLeft: 10,
    width: 360,
    height: 350
});
export const TouchableCard = styled.TouchableOpacity({});
export const Card = styled.View({
    width: 200,
    height: 300,
    backgroundColor: '#fff',
    borderRadius: 30,
    marginRight: 20,
    marginLeft: 10,
    paddingTop: 30,
});
export const GroupCardTitle = styled.View({
    justifyContent: 'center',
    flexDirection: 'row',
})
export const CardTitle = styled.Text({
    fontSize: 15,
    fontWeight: 'normal',
});
export const CardGroupPrice = styled.View({
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'center'
});
export const CardPrice = styled.Text({
});
export const CardMl = styled.Text({
    marginTop: 1,
    marginLeft: 5,
    fontSize: 12,
    color: '#333'
});
export const CardImage = styled.Image({});