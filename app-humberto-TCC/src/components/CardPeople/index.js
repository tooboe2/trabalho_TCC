import React, { useState } from 'react';
import { View } from 'react-native';
import { Card, CardNormal, Description, Details, SelectIcons, Title } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';

export function CardPeople(props) {
    const { title, description, logo } = props
    const [showDetails, setShowDetails] = useState(false);
    const [peopleSelected, setPeopleSelected] = useState(false);

    const handleCardPress = () => {
        setShowDetails(!showDetails);
    };
    const handleSelectPeople = () => {
        setPeopleSelected(!peopleSelected);
    };

    return (
        <Card>
            <CardNormal>
                <View style={styles.imageAndName}>
                    <Image source={{ uri: logo }} style={{ width: 32, height: 32, borderRadius: 20 }} />
                    <Title>{title}</Title>
                </View>
                <View style={{ flexDirection: 'row', gap: 3, alignItems: 'center' }}>
                    <SelectIcons onPress={handleSelectPeople}>
                        <Icon name={'check-circle-outline'} size={20} color={peopleSelected ? '#03C988' : '#555'} />
                    </SelectIcons>
                    <SelectIcons onPress={handleCardPress}>
                        <Icon name={showDetails ? 'chevron-left' : 'expand-more'} size={25} color="#555" />
                    </SelectIcons>
                </View>
            </CardNormal>
            {
                showDetails && (
                    <Details>
                        <Description>{description}</Description>
                    </Details>
                )
            }
        </Card >
    );
};

const styles = StyleSheet.create({
    imageAndName: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
});